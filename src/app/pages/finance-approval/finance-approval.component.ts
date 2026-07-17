import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { AuthService } from '../../services/auth.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-finance-approval',
  templateUrl: './finance-approval.component.html',
  styleUrls: ['./finance-approval.component.css']
})
export class FinanceApprovalComponent implements OnInit {

  customers: any[] = [];
  selectedCustomer: any = null;
  showRejectInput: boolean = false;
  rejectReason: string = '';
  statusFilter: string = 'ALL';
  authorized: boolean = false;

  constructor(private customerService: CustomerService, private authService: AuthService, private router: Router) {}

  getCurrentUser(): string {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return user.username || 'ADMIN';
  }

  ngOnInit() {
    const user = this.authService.getUser();
    if (!user || user.role !== 'MASTER') {
      window.location.href = '/customer-portal/customer-form';
      return;
    }
    this.authorized = true;
    this.loadAllCustomers();
  }

  loadAllCustomers() {
    this.customerService.getAllCustomers().subscribe(
      (data: any) => {
        this.customers = data;
      },
      (err) => {
        console.error('Error loading customers:', err);
      }
    );
  }

  parseBankAccounts(): any[] {
    if (this.selectedCustomer && this.selectedCustomer.banksJson) {
      try { return JSON.parse(this.selectedCustomer.banksJson); } catch (e) {}
    }
    return [];
  }

  getFilteredCustomers(): any[] {
    if (this.statusFilter === 'ALL') return this.customers;
    return this.customers.filter(c => c.pickedStatus === this.statusFilter);
  }

  viewDetails(cust: any) {
    this.selectedCustomer = cust;
    this.showRejectInput = false;
    this.rejectReason = '';
    // Parse correspondence address from JSON or fallback to bill-to
    if (cust.corrAddressJson) {
      try {
        const corr = JSON.parse(cust.corrAddressJson);
        this.selectedCustomer.corrAddress1 = corr.address1;
        this.selectedCustomer.corrAddress2 = corr.address2;
        this.selectedCustomer.corrCity = corr.city;
        this.selectedCustomer.corrState = corr.state;
        this.selectedCustomer.corrPostalCode = corr.postalCode;
      } catch (e) {
        this.selectedCustomer.corrAddress1 = cust.corrAddressJson;
      }
    } else {
      // Fallback: same as bill-to address
      this.selectedCustomer.corrAddress1 = cust.address1;
      this.selectedCustomer.corrAddress2 = cust.address2;
      this.selectedCustomer.corrCity = cust.city;
      this.selectedCustomer.corrState = cust.state;
      this.selectedCustomer.corrPostalCode = cust.postalCode;
    }
  }

  isExpired(cust: any): boolean {
    // DISABLED: Super Master feature
    if (!cust.creationDate) return false;
    const created = new Date(cust.creationDate).getTime();
    const now = new Date().getTime();
    return (now - created) > 24 * 60 * 60 * 1000;
  }

  parseBillAddresses(): any[] {
    if (this.selectedCustomer && this.selectedCustomer.billAddressesJson) {
      try { return JSON.parse(this.selectedCustomer.billAddressesJson); } catch (e) {}
    }
    // Fallback to single address fields
    if (this.selectedCustomer && this.selectedCustomer.address1) {
      return [{ address1: this.selectedCustomer.address1, address2: this.selectedCustomer.address2, city: this.selectedCustomer.city, state: this.selectedCustomer.state, postalCode: this.selectedCustomer.postalCode, latitude: this.selectedCustomer.latitude, longitude: this.selectedCustomer.longitude }];
    }
    return [];
  }

  parseShipAddresses(): any[] {
    if (this.selectedCustomer && this.selectedCustomer.shipAddressesJson) {
      try { return JSON.parse(this.selectedCustomer.shipAddressesJson); } catch (e) {}
    }
    return [];
  }

  closeModal() {
    this.selectedCustomer = null;
    this.showRejectInput = false;
    this.rejectReason = '';
  }

  approve() {
    if (!confirm('Are you sure you want to APPROVE this customer?')) return;
    this.customerService.approveCustomer(this.selectedCustomer.customerId, this.getCurrentUser()).subscribe(
      (res: any) => {
        if (res.status === 'SUCCESS') {
          alert('Customer "' + this.selectedCustomer.customerName + '" approved and created in ERP!');
          this.closeModal();
          this.loadAllCustomers();
        } else {
          alert('Error: ' + res.message);
        }
      },
      (err) => {
        alert('Server error: ' + err.message);
      }
    );
  }

  showRejectBox() {
    this.showRejectInput = true;
  }

  cancelReject() {
    this.showRejectInput = false;
    this.rejectReason = '';
  }

  confirmReject() {
    if (!confirm('Are you sure you want to REJECT this customer?')) return;
    this.customerService.rejectCustomer(this.selectedCustomer.customerId, this.rejectReason, this.getCurrentUser()).subscribe(
      (res: any) => {
        alert('Customer "' + this.selectedCustomer.customerName + '" rejected.');
        this.closeModal();
        this.loadAllCustomers();
      },
      (err) => {
        alert('Server error: ' + err.message);
      }
    );
  }

  downloadPdf() {
    const c = this.selectedCustomer;
    const doc = new jsPDF();
    let y = 15;
    const lm = 14;
    const pageH = 280;

    const addTitle = (title: string) => {
      if (y > pageH - 20) { doc.addPage(); y = 15; }
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text(title, lm, y);
      y += 2;
      doc.setDrawColor(0, 102, 204);
      doc.line(lm, y, 196, y);
      y += 6;
    };

    const addField = (label: string, value: any) => {
      if (y > pageH - 10) { doc.addPage(); y = 15; }
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.text(label + ':', lm, y);
      doc.setFont('helvetica', 'normal');
      const val = (value != null && value !== '') ? String(value) : '-';
      const lines = doc.splitTextToSize(val, 125);
      for (let li = 0; li < lines.length; li++) {
        if (li > 0) { y += 5; if (y > pageH - 10) { doc.addPage(); y = 15; } }
        doc.text(lines[li], lm + 55, y);
      }
      y += 6;
    };

    // Header
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('BAMUL - Customer Details', lm, y);
    y += 10;

    addTitle('Basic Information');
    addField('Customer Name', c.customerName);
    addField('Account Number', c.accountNumber || 'Not provided');
    addField('Customer Type', c.customerType);
    addField('Customer Classification', c.customerClassification);
    addField('B2B / B2C', c.customerClass);
    addField('Price List', c.priceList);
    addField('Primary Order Type', c.primaryOrderType);
    addField('Customer Email', c.customerEmail);
    addField('PAN No', c.panNo);
    addField('GSTIN', c.gstinNumber);
    addField('Aadhaar No', c.aadharNo);

    addTitle('Bill To Address');
    const billAddrs = this.parseBillAddresses();
    billAddrs.forEach((addr, i) => {
      if (billAddrs.length > 1) addField('Address ' + (i + 1), '');
      addField('Address', (addr.address1 || '') + ' ' + (addr.address2 || ''));
      addField('City / State', (addr.city || '') + ', ' + (addr.state || ''));
      addField('Postal Code', addr.postalCode);
      addField('Latitude', addr.latitude);
      addField('Longitude', addr.longitude);
    });

    addTitle('Correspondence Address');
    addField('Address', (c.corrAddress1 || '') + ' ' + (c.corrAddress2 || ''));
    addField('City / State', (c.corrCity || '') + ', ' + (c.corrState || ''));
    addField('Postal Code', c.corrPostalCode);

    addTitle('Ship To Address');
    const shipAddrs = this.parseShipAddresses();
    shipAddrs.forEach((addr, i) => {
      if (shipAddrs.length > 1) addField('Address ' + (i + 1), '');
      addField('Address', (addr.address1 || '') + ' ' + (addr.address2 || ''));
      addField('City / State', (addr.city || '') + ', ' + (addr.state || ''));
      addField('Postal Code', addr.postalCode);
      addField('Latitude', addr.latitude);
      addField('Longitude', addr.longitude);
    });

    addTitle('Contact Details');
    addField('Contact Person', c.contactPerson);
    addField('Mobile', c.mobileNumber ? '+91 ' + c.mobileNumber : '');
    addField('Email', c.emailId);

    addTitle('Bank Details');
    const banks = this.parseBankAccounts();
    banks.forEach((bank, i) => {
      if (banks.length > 1) addField('Bank ' + (i + 1), '');
      addField('Bank Name', bank.bankName);
      addField('Branch Name', bank.branchName);
      addField('Account Number', bank.accountNumber);
      addField('IFSC Code', bank.ifscCode);
    });

    addTitle('Sales Details');
    addField('Salesperson', c.salesperson);
    addField('Salesrep Emp No', c.salesrepEmpNumber);

    addTitle('Payment & Order Details');
    addField('Payment Terms', c.paymentTerms);
    addField('Credit Limit', c.creditLimit ? '₹ ' + c.creditLimit : '');
    addField('Deposit', c.deposit ? '₹ ' + c.deposit : '');
    addField('FDR Number', c.fdrNumber);
    addField('Off Ord No', c.offOrdNo);
    addField('Off Ord Date', c.offOrdDate);

    addTitle('Zone / Area');
    addField('Zone Code', c.zoneCode);
    addField('Area', c.area);
    addField('Sub Area', c.subArea);
    addField('Ward', c.ward);
    addField('Zonal Manager', c.zonalManager);
    addField('Zonal Manager Emp No', c.zonalManagerEmp);

    addTitle('Nominee Details');
    addField('Nominee Name', c.nomineeName);
    addField('Nominee Contact', c.nomineeContact ? '+91 ' + c.nomineeContact : '');
    addField('Relationship', c.nomineeRelationship);

    addTitle('Distributor Information');
    addField('Products Distributor', c.productsDistributor);
    addField('Distributor Number', c.distributorNumber);
    addField('Icecream Distributor', c.icecreamDistributor);
    addField('Icecream Dist Num', c.icecreamDistNum);

    addTitle('Additional Information');
    addField('Remarks', c.additionalInfo);

    doc.save('Customer_' + (c.customerName || 'details').replace(/\s+/g, '_') + '.pdf');
  }
}
