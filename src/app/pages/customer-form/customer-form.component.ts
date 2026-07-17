import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../../services/customer.service';

declare var L: any;

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  @HostListener('document:input', ['$event'])
  onInputChange(event: any) {
    const el = event.target;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      if (el.type === 'file' || el.type === 'radio' || el.type === 'checkbox') return;
      const cleaned = el.value.replace(/[^a-zA-Z0-9\s@.,\-_\/()#&+:;'"!%*=?\[\]{}|\\^~`$<>]/g, '').toUpperCase();
      if (el.value !== cleaned) {
        el.value = cleaned;
        el.dispatchEvent(new Event('input', { bubbles: true }));
      }
    }
  }

  customerForm: FormGroup;
  isEditMode: boolean = false;
  panCardFileName: string = '';
  panCardFile: File = null;
  aadharFileName: string = '';
  aadharFile: File = null;
  gstFileName: string = '';
  gstFile: File = null;
  canCertFileName: string = '';
  canCertFile: File = null;
  chequeFileName: string = '';
  chequeFile: File = null;
  nomineeDocFiles: File[] = [];
  existingNomineeDocNames: string[] = [];
  orderDocFileName: string = '';
  orderDocFile: File = null;
  otpSent: boolean = false;
  otpVerified: boolean = false;
  otpValue: string = '';
  otpTimer: number = 0;
  otpInterval: any = null;
  cities: string[] = [];
  billCities: string[] = [];
  shipCities: string[] = [];
  sameAsBill: boolean = false;
  billAddresses: any[] = [{ address1: '', address2: '', state: '', city: '', postalCode: '', latitude: '', longitude: '', siteCode: '', cities: [] }];
  shipAddresses: any[] = [{ address1: '', address2: '', state: '', city: '', postalCode: '', latitude: '', longitude: '', siteCode: '', cities: [] }];
  corrAddrSameAsBill: boolean = false;
  corrAddress: any = { address1: '', address2: '', state: '', city: '', postalCode: '', cities: [] };
  contacts: any[] = [{ contactPerson: '', designation: '', mobileNumber: '', emailId: '', confirmEmailId: '' }];
  zoneManagers: any[] = [];
  bankNamesList: string[] = [];
  orderTypesList: string[] = [];
  bankList: string[] = [];
  branchList: string[] = [];
  bankAccounts: any[] = [{ bankName: '', branchName: '', accountNumber: '', ifscCode: '', branches: [] }];

  stateList: string[] = [
    'Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar',
    'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Goa',
    'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka',
    'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya',
    'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim',
    'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

  stateCityMap: any = {
    'Andaman and Nicobar Islands': ['Port Blair'],
    'Andhra Pradesh': ['Anantapur', 'Chittoor', 'Eluru', 'Guntur', 'Kadapa', 'Kakinada', 'Kurnool', 'Machilipatnam', 'Nellore', 'Ongole', 'Rajahmundry', 'Srikakulam', 'Tirupati', 'Vijayawada', 'Visakhapatnam', 'Vizianagaram'],
    'Arunachal Pradesh': ['Itanagar', 'Naharlagun', 'Pasighat', 'Tawang', 'Ziro'],
    'Assam': ['Dibrugarh', 'Guwahati', 'Jorhat', 'Nagaon', 'Silchar', 'Tezpur', 'Tinsukia'],
    'Bihar': ['Arrah', 'Begusarai', 'Bhagalpur', 'Bihar Sharif', 'Darbhanga', 'Gaya', 'Hajipur', 'Katihar', 'Munger', 'Muzaffarpur', 'Patna', 'Purnia', 'Samastipur'],
    'Chandigarh': ['Chandigarh'],
    'Chhattisgarh': ['Bhilai', 'Bilaspur', 'Durg', 'Jagdalpur', 'Korba', 'Raigarh', 'Raipur', 'Rajnandgaon'],
    'Dadra and Nagar Haveli and Daman and Diu': ['Daman', 'Diu', 'Silvassa'],
    'Delhi': ['Central Delhi', 'East Delhi', 'New Delhi', 'North Delhi', 'South Delhi', 'West Delhi'],
    'Goa': ['Mapusa', 'Margao', 'Panaji', 'Ponda', 'Vasco da Gama'],
    'Gujarat': ['Ahmedabad', 'Anand', 'Bharuch', 'Bhavnagar', 'Bhuj', 'Gandhinagar', 'Jamnagar', 'Junagadh', 'Mehsana', 'Morbi', 'Nadiad', 'Navsari', 'Rajkot', 'Surat', 'Vadodara', 'Valsad', 'Vapi'],
    'Haryana': ['Ambala', 'Bhiwani', 'Faridabad', 'Gurugram', 'Hisar', 'Karnal', 'Kurukshetra', 'Panipat', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat', 'Yamunanagar'],
    'Himachal Pradesh': ['Bilaspur', 'Dharamshala', 'Hamirpur', 'Kangra', 'Kullu', 'Mandi', 'Shimla', 'Solan', 'Una'],
    'Jammu and Kashmir': ['Anantnag', 'Baramulla', 'Jammu', 'Kathua', 'Srinagar', 'Udhampur'],
    'Jharkhand': ['Bokaro', 'Deoghar', 'Dhanbad', 'Giridih', 'Hazaribagh', 'Jamshedpur', 'Ramgarh', 'Ranchi'],
    'Karnataka': ['Bagalkot', 'Ballari', 'Belagavi', 'Bengaluru', 'Bidar', 'Chamarajanagar', 'Chikkaballapur', 'Chikmagalur', 'Chitradurga', 'Dakshina Kannada', 'Davangere', 'Dharwad', 'Gadag', 'Hassan', 'Haveri', 'Hubli', 'Kalaburagi', 'Kodagu', 'Kolar', 'Koppal', 'Mandya', 'Mangaluru', 'Mysuru', 'Raichur', 'Ramanagara', 'Shimoga', 'Tumkur', 'Udupi', 'Uttara Kannada', 'Vijayapura', 'Yadgir'],
    'Kerala': ['Alappuzha', 'Ernakulam', 'Idukki', 'Kannur', 'Kasaragod', 'Kochi', 'Kollam', 'Kottayam', 'Kozhikode', 'Malappuram', 'Palakkad', 'Pathanamthitta', 'Thiruvananthapuram', 'Thrissur', 'Wayanad'],
    'Ladakh': ['Kargil', 'Leh'],
    'Lakshadweep': ['Agatti', 'Kavaratti'],
    'Madhya Pradesh': ['Bhopal', 'Chhindwara', 'Dewas', 'Gwalior', 'Indore', 'Jabalpur', 'Katni', 'Ratlam', 'Rewa', 'Sagar', 'Satna', 'Ujjain'],
    'Maharashtra': ['Ahmednagar', 'Akola', 'Amravati', 'Aurangabad', 'Chandrapur', 'Dhule', 'Jalgaon', 'Kolhapur', 'Latur', 'Mumbai', 'Nagpur', 'Nanded', 'Nashik', 'Navi Mumbai', 'Palghar', 'Pune', 'Ratnagiri', 'Sangli', 'Satara', 'Solapur', 'Thane'],
    'Manipur': ['Bishnupur', 'Churachandpur', 'Imphal', 'Thoubal'],
    'Meghalaya': ['Jowai', 'Shillong', 'Tura'],
    'Mizoram': ['Aizawl', 'Champhai', 'Lunglei'],
    'Nagaland': ['Dimapur', 'Kohima', 'Mokokchung', 'Tuensang'],
    'Odisha': ['Balasore', 'Baripada', 'Berhampur', 'Bhubaneswar', 'Cuttack', 'Jharsuguda', 'Puri', 'Rourkela', 'Sambalpur'],
    'Puducherry': ['Karaikal', 'Mahe', 'Puducherry', 'Yanam'],
    'Punjab': ['Amritsar', 'Bathinda', 'Hoshiarpur', 'Jalandhar', 'Ludhiana', 'Moga', 'Mohali', 'Pathankot', 'Patiala', 'Sangrur'],
    'Rajasthan': ['Ajmer', 'Alwar', 'Bharatpur', 'Bhilwara', 'Bikaner', 'Jaipur', 'Jaisalmer', 'Jodhpur', 'Kota', 'Pali', 'Sikar', 'Sri Ganganagar', 'Udaipur'],
    'Sikkim': ['Gangtok', 'Gyalshing', 'Mangan', 'Namchi'],
    'Tamil Nadu': ['Chennai', 'Coimbatore', 'Dindigul', 'Erode', 'Hosur', 'Kanchipuram', 'Karur', 'Madurai', 'Nagercoil', 'Namakkal', 'Ranipet', 'Salem', 'Sivakasi', 'Thanjavur', 'Tiruchirappalli', 'Tirunelveli', 'Tiruppur', 'Vellore'],
    'Telangana': ['Adilabad', 'Hyderabad', 'Karimnagar', 'Khammam', 'Mahbubnagar', 'Nalgonda', 'Nizamabad', 'Ramagundam', 'Secunderabad', 'Warangal'],
    'Tripura': ['Agartala', 'Dharmanagar', 'Udaipur'],
    'Uttar Pradesh': ['Agra', 'Aligarh', 'Allahabad', 'Bareilly', 'Ghaziabad', 'Gorakhpur', 'Jhansi', 'Kanpur', 'Lucknow', 'Mathura', 'Meerut', 'Moradabad', 'Noida', 'Saharanpur', 'Varanasi'],
    'Uttarakhand': ['Dehradun', 'Haldwani', 'Haridwar', 'Kashipur', 'Rishikesh', 'Roorkee', 'Rudrapur'],
    'West Bengal': ['Asansol', 'Bardhaman', 'Baharampur', 'Durgapur', 'Habra', 'Howrah', 'Kharagpur', 'Kolkata', 'Malda', 'Siliguri']
  };

  constructor(private fb: FormBuilder, private customerService: CustomerService, private http: HttpClient) {}

  // Custom validator: no special chars, no hyphens, English only
  static customerNameValidator(control: AbstractControl) {
    if (!control.value) return null;
    const pattern = /^[a-zA-Z0-9\s.]+$/;
    return pattern.test(control.value) ? null : { invalidName: true };
  }

  ngOnInit() {
    this.bankAccounts = [{ bankName: '', branchName: '', accountNumber: '', ifscCode: '', branches: [] }];
    this.loadZoneManagers();
    this.loadBankNames();
    this.loadBanks();
    this.customerForm = this.fb.group({
      // Basic Info
      customerClassification: ['', Validators.required],
      priceList: ['', Validators.required],
      customerName: ['', [Validators.required, CustomerFormComponent.customerNameValidator]],
      customerType: ['', Validators.required],
      accountNumber: ['', Validators.required],
      customerClass: ['', Validators.required],
      customerStatus: ['A'],
      aadharNo: ['', [Validators.pattern('^[2-9][0-9]{11}$')]],
      customerEmail: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
      confirmCustomerEmail: ['', Validators.required],
      panNo: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}$')]],
      gstinNumber: ['', [Validators.pattern('^(0[1-9]|[1-2][0-9]|3[0-8])[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[A-Z]{1}[0-9A-Z]{1}$')]],
      siteUseCode: ['BILL_TO'],

      // Addresses handled by billAddresses/shipAddresses arrays

      // Contact - handled by contacts array

      // Bank - handled by bankAccounts array (ngModel)
      bankName: [''],
      branchName: [''],
      bankAccountNumber: [''],
      ifscCode: [''],

      // Sales & Payment
      salesperson: [''],
      salesrepEmpNumber: [''],
      paymentTerms: ['', Validators.required],
      creditLimit: [null],
      deposit: [null],
      primaryOrderType: [''],
      offOrdNo: [''],
      offOrdDate: [''],
      fdrNumber: [null],
      additionalInfo: [''],

      // Zone / Area
      zoneCode: [''],
      area: [''],
      subArea: [''],
      ward: [''],
      zonalManager: [''],
      zonalManagerEmp: [''],

      // Nominee - required only for PERSON type
      nomineeName: [''],
      nomineeContact: ['', [Validators.pattern('^[6-9][0-9]{9}$')]],
      nomineeRelationship: [''],

      // Distributor
      productsDistributor: [''],
      distributorNumber: [''],
      icecreamDistributor: [''],
      icecreamDistNum: ['']
    });

    this.customerForm.get('customerClassification').valueChanges.subscribe(val => {
      if (val === 'B2B') {
        this.customerForm.get('gstinNumber').setValidators([Validators.required, Validators.pattern('^(0[1-9]|[1-2][0-9]|3[0-8])[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[A-Z]{1}[0-9A-Z]{1}$')]);
      } else {
        this.customerForm.get('gstinNumber').clearValidators();
        if (!this.isEditMode) {
          this.customerForm.get('gstinNumber').setValue('');
        }
      }
      this.customerForm.get('gstinNumber').updateValueAndValidity();
    });

    this.customerForm.get('customerType').valueChanges.subscribe(val => {
      if (val === 'PERSON') {
        this.customerForm.get('aadharNo').setValidators([Validators.required, Validators.pattern('^[2-9][0-9]{11}$')]);
        this.customerForm.get('nomineeName').clearValidators();
        this.customerForm.get('nomineeContact').setValidators([Validators.pattern('^[6-9][0-9]{9}$')]);
        this.customerForm.get('nomineeRelationship').clearValidators();
      } else {
        this.customerForm.get('aadharNo').clearValidators();
        this.customerForm.get('nomineeName').clearValidators();
        this.customerForm.get('nomineeContact').clearValidators();
        this.customerForm.get('nomineeRelationship').clearValidators();
      }
      this.customerForm.get('aadharNo').updateValueAndValidity();
      this.customerForm.get('nomineeName').updateValueAndValidity();
      this.customerForm.get('nomineeContact').updateValueAndValidity();
      this.customerForm.get('nomineeRelationship').updateValueAndValidity();
    });

    // Check if editing existing customer
    const editData = localStorage.getItem('editCustomer');
    if (editData) {
      this.isEditMode = true;
      const cust = JSON.parse(editData);
      localStorage.removeItem('editCustomer');
      localStorage.setItem('editCustomerOrigId', JSON.stringify(cust.customerId || null));
      localStorage.setItem('editCustomerSource', cust.source || 'OCI');
      this.customerForm.patchValue({
        customerClassification: cust.customerClassification || cust.customerClass,
        customerName: cust.customerName,
        customerType: cust.customerType,
        accountNumber: cust.accountNumber,
        customerClass: cust.customerClass,
        priceList: cust.priceList,
        panNo: cust.panNo,
        gstinNumber: cust.gstinNumber,
        aadharNo: cust.aadharNo,
        customerEmail: cust.customerEmail || cust.emailId,
        confirmCustomerEmail: cust.customerEmail || cust.emailId,
        salesperson: cust.salesperson,
        salesrepEmpNumber: cust.salesrepEmpNumber,
        paymentTerms: cust.paymentTerms,
        creditLimit: cust.creditLimit,
        deposit: cust.deposit,
        primaryOrderType: cust.primaryOrderType,
        offOrdNo: cust.offOrdNo,
        offOrdDate: cust.offOrdDate,
        fdrNumber: cust.fdrNumber,
        zoneCode: cust.zoneCode,
        area: cust.area,
        subArea: cust.subArea,
        ward: cust.ward,
        zonalManager: cust.zonalManager,
        zonalManagerEmp: cust.zonalManagerEmp,
        nomineeName: cust.nomineeName,
        nomineeContact: cust.nomineeContact,
        nomineeRelationship: cust.nomineeRelationship,
        productsDistributor: cust.productsDistributor,
        distributorNumber: cust.distributorNumber,
        icecreamDistributor: cust.icecreamDistributor,
        icecreamDistNum: cust.icecreamDistNum,
        additionalInfo: cust.additionalInfo
      });
      // Bill To Addresses
      if (cust.billAddressesJson) {
        try {
          this.billAddresses = JSON.parse(cust.billAddressesJson).map(a => ({ ...a, cities: [] }));
        } catch(e) {}
      } else if (cust.customerCommAddress || cust.address1) {
        this.billAddresses[0].address1 = cust.customerCommAddress || cust.address1 || '';
        this.billAddresses[0].address2 = cust.address2 || '';
        this.billAddresses[0].city = cust.city || '';
        this.billAddresses[0].state = cust.state || '';
        this.billAddresses[0].postalCode = cust.postalCode || '';
        this.billAddresses[0].latitude = cust.latitude || '';
        this.billAddresses[0].longitude = cust.longitude || '';
      }
      // Ship To Addresses
      if (cust.shipAddressesJson) {
        try {
          this.shipAddresses = JSON.parse(cust.shipAddressesJson).map(a => ({ ...a, cities: [] }));
        } catch(e) {}
      }
      // Contacts
      if (cust.contactPerson) {
        this.contacts[0].contactPerson = cust.contactPerson;
        this.contacts[0].mobileNumber = cust.mobileNumber || cust.contactNo;
        this.contacts[0].emailId = cust.emailId || cust.customerEmail;
        this.contacts[0].confirmEmailId = cust.emailId || cust.customerEmail;
      }
      // Bank - load from banksJson only
      if (cust.banksJson) {
        try {
          const banks = JSON.parse(cust.banksJson);
          if (banks && banks.length > 0) this.bankAccounts = banks.map(b => ({ ...b, branches: [] }));
        } catch (e) {}
      }
      // Load cities for pre-populated addresses
      setTimeout(() => {
        this.billAddresses.forEach(addr => { if (addr.state) this.loadCitiesForAddr(addr); });
        this.shipAddresses.forEach(addr => { if (addr.state) this.loadCitiesForAddr(addr); });
      }, 500);

      // Load previously uploaded documents
      this.http.get<any[]>('http://129.159.231.57/api/customer/docs/' + cust.customerId).subscribe(
        (docs) => {
          if (docs && docs.length > 0) {
            docs.forEach(doc => {
              if (doc.docType === 'PAN') this.panCardFileName = doc.fileName;
              if (doc.docType === 'AADHAR') this.aadharFileName = doc.fileName;
              if (doc.docType === 'GST') this.gstFileName = doc.fileName;
              if (doc.docType === 'CHEQUE') this.chequeFileName = doc.fileName;
              if (doc.docType === 'CAN') this.canCertFileName = doc.fileName;
              if (doc.docType === 'NOMINEE') this.existingNomineeDocNames = doc.fileName.split(',').map(f => f.trim()).filter(f => f);
              if (doc.docType === 'ORDER') this.orderDocFileName = doc.fileName;
            });
          }
        },
        () => {}
      );
    }
  }

  loadCitiesForAddr(addr: any) {
    this.http.get<any>('https://countriesnow.space/api/v0.1/countries/state/cities/q?country=India&state=' + encodeURIComponent(addr.state)).subscribe(
      (res) => { if (res && res.data) addr.cities = res.data; },
      () => {}
    );
  }

  onSubmit() {
    // Convert all string fields to uppercase and trim
    Object.keys(this.customerForm.controls).forEach(key => {
      const val = this.customerForm.get(key).value;
      if (typeof val === 'string') this.customerForm.get(key).setValue(val.trim().toUpperCase());
      this.customerForm.get(key).markAsTouched();
    });
    // Trim and uppercase address/contact/bank arrays
    this.billAddresses.forEach(a => { Object.keys(a).forEach(k => { if (typeof a[k] === 'string') a[k] = a[k].trim().toUpperCase(); }); });
    this.shipAddresses.forEach(a => { Object.keys(a).forEach(k => { if (typeof a[k] === 'string') a[k] = a[k].trim().toUpperCase(); }); });
    this.contacts.forEach(c => { Object.keys(c).forEach(k => { if (typeof c[k] === 'string') c[k] = c[k].trim().toUpperCase(); }); });
    this.bankAccounts.forEach(b => { Object.keys(b).forEach(k => { if (typeof b[k] === 'string') b[k] = b[k].trim().toUpperCase(); }); });
    if (this.customerForm.valid) {
      // Validate bank details are filled
      const bank = this.bankAccounts[0];
      if (!bank.bankName || !bank.branchName || !bank.accountNumber || !bank.ifscCode) {
        alert('Bank details are mandatory. Please fill Bank Name, Branch, Account Number and IFSC Code.');
        return;
      }
      const formData = this.customerForm.value;
      const payload = {
        customerName: formData.customerName,
        customerType: formData.customerType,
        accountNumber: formData.accountNumber,
        customerClass: formData.customerClass,
        customerClassification: formData.customerClassification,
        priceList: formData.priceList,
        customerStatus: formData.customerStatus,
        aadharNo: formData.aadharNo,
        emailId: formData.customerEmail,
        panNo: formData.panNo,
        gstinNumber: formData.gstinNumber,
        address1: this.billAddresses[0].address1,
        address2: this.billAddresses[0].address2,
        city: this.billAddresses[0].city,
        state: this.billAddresses[0].state,
        postalCode: this.billAddresses[0].postalCode,
        country: 'IN',
        latitude: this.billAddresses[0].latitude,
        longitude: this.billAddresses[0].longitude,
        customerSiteCode: this.billAddresses[0].siteCode,
        billAddressesJson: JSON.stringify(this.billAddresses),
        shipAddressesJson: JSON.stringify(this.shipAddresses),
        corrAddressJson: JSON.stringify(this.corrAddress),
        contactPerson: this.contacts[0].contactPerson,
        mobileNumber: this.contacts[0].mobileNumber,
        contactEmailId: this.contacts[0].emailId,
        banksJson: JSON.stringify(this.bankAccounts),
        salesperson: formData.salesperson,
        salesrepEmpNumber: formData.salesrepEmpNumber,
        paymentTerms: formData.paymentTerms,
        creditLimit: formData.creditLimit,
        deposit: formData.deposit,
        primaryOrderType: formData.primaryOrderType,
        offOrdNo: formData.offOrdNo,
        offOrdDate: formData.offOrdDate,
        zoneCode: formData.zoneCode,
        area: formData.area,
        ward: formData.ward,
        zonalManager: formData.zonalManager,
        zonalManagerEmp: formData.zonalManagerEmp,
        nomineeName: formData.nomineeName,
        nomineeContact: formData.nomineeContact,
        nomineeRelationship: formData.nomineeRelationship,
        productsDistributor: formData.productsDistributor,
        distributorNumber: formData.distributorNumber,
        icecreamDistributor: formData.icecreamDistributor,
        icecreamDistNum: formData.icecreamDistNum,
        additionalInfo: formData.additionalInfo,
        submittedBy: JSON.parse(localStorage.getItem('currentUser') || '{}').username || '',
        originalCustomerId: this.isEditMode ? (JSON.parse(localStorage.getItem('editCustomerOrigId') || 'null')) : null
      };

      const origId = this.isEditMode ? JSON.parse(localStorage.getItem('editCustomerOrigId') || 'null') : null;
      const isLegacyUpdate = localStorage.getItem('editCustomerSource') === 'LEGACY';
      const submitObs = (this.isEditMode && origId && !isLegacyUpdate) ?
        this.customerService.resubmitCustomer(origId, payload) :
        this.customerService.submitCustomer(payload);

      submitObs.subscribe(
        (res: any) => {
          if (res.status === 'SUCCESS') {
            const custId = res.customerId;
            const uploadErrors: string[] = [];
            const uploadPromises: Promise<void>[] = [];
            // Upload documents if selected
            if (this.panCardFile) {
              const fd = new FormData(); fd.append('file', this.panCardFile);
              uploadPromises.push(this.http.post('http://129.159.231.57/api/customer/upload-pan/' + custId, fd).toPromise().then(() => {}).catch(() => { uploadErrors.push('PAN Card'); }));
            }
            if (this.aadharFile) {
              const fd = new FormData(); fd.append('file', this.aadharFile);
              uploadPromises.push(this.http.post('http://129.159.231.57/api/customer/upload-aadhar/' + custId, fd).toPromise().then(() => {}).catch(() => { uploadErrors.push('Aadhaar'); }));
            }
            if (this.gstFile) {
              const fd = new FormData(); fd.append('file', this.gstFile);
              uploadPromises.push(this.http.post('http://129.159.231.57/api/customer/upload-gst/' + custId, fd).toPromise().then(() => {}).catch(() => { uploadErrors.push('GST Certificate'); }));
            }
            if (this.chequeFile) {
              const fd = new FormData(); fd.append('file', this.chequeFile);
              uploadPromises.push(this.http.post('http://129.159.231.57/api/customer/upload-cheque/' + custId, fd).toPromise().then(() => {}).catch(() => { uploadErrors.push('Cancelled Cheque'); }));
            }
            if (this.canCertFile) {
              const fd = new FormData(); fd.append('file', this.canCertFile);
              uploadPromises.push(this.http.post('http://129.159.231.57/api/customer/upload-can/' + custId, fd).toPromise().then(() => {}).catch(() => { uploadErrors.push('CAN Certificate'); }));
            }
            if (this.nomineeDocFiles && this.nomineeDocFiles.length > 0) {
              const nomineeUpload: Promise<void> = this.nomineeDocFiles.reduce(
                (chain: Promise<void>, file: File) => chain.then(() => {
                  const fd = new FormData(); fd.append('file', file);
                  return this.http.post('http://129.159.231.57/api/customer/upload-nominee-doc/' + custId, fd)
                    .toPromise().then(() => {}).catch(() => { uploadErrors.push('Nominee Document'); });
                }), Promise.resolve()
              );
              uploadPromises.push(nomineeUpload);
            }
            if (this.orderDocFile) {
              const fd = new FormData(); fd.append('file', this.orderDocFile);
              uploadPromises.push(this.http.post('http://129.159.231.57/api/customer/upload-order-doc/' + custId, fd).toPromise().then(() => {}).catch(() => { uploadErrors.push('Order Document'); }));
            }
            Promise.all(uploadPromises).then(() => {
              if (uploadErrors.length > 0) {
                alert('Customer submitted for approval!\n\nWARNING: The following documents failed to upload:\n- ' + uploadErrors.join('\n- ') + '\n\nPlease re-upload these documents via Edit & Resubmit.');
              } else {
                alert('Customer submitted for approval!');
              }
              this.onReset();
            });
          } else {
            alert('Error: ' + res.message);
          }
        },
        (err) => {
          alert('Server error: ' + err.message);
        }
      );
    }
  }

  sendOtp() {
    const mobile = this.contacts[0].mobileNumber;
    if (!mobile || !/^[6-9][0-9]{9}$/.test(mobile)) {
      alert('Please enter a valid 10-digit mobile number starting with 6-9');
      return;
    }
    this.http.post<any>('http://129.159.231.57/api/otp/send', { mobile }).subscribe(
      (res) => {
        if (res.status === 'SUCCESS') {
          this.otpSent = true;
          this.otpVerified = false;
          this.otpValue = '';
          this.otpTimer = 120;
          if (this.otpInterval) clearInterval(this.otpInterval);
          this.otpInterval = setInterval(() => {
            this.otpTimer--;
            if (this.otpTimer <= 0) {
              clearInterval(this.otpInterval);
              this.otpSent = false;
            }
          }, 1000);
          alert('OTP sent to +91' + mobile);
        } else {
          alert('Failed to send OTP: ' + res.message);
        }
      },
      (err) => alert('Error sending OTP: ' + (err.error && err.error.message ? err.error.message : err.message))
    );
  }

  verifyOtp() {
    const mobile = this.contacts[0].mobileNumber;
    this.http.post<any>('http://129.159.231.57/api/otp/verify', { mobile, otp: this.otpValue }).subscribe(
      (res) => {
        if (res.status === 'SUCCESS') {
          this.otpVerified = true;
          this.otpSent = false;
          if (this.otpInterval) clearInterval(this.otpInterval);
          alert('Mobile number verified successfully!');
        } else {
          alert('Invalid or expired OTP. Please try again.');
        }
      },
      (err) => alert('Error verifying OTP: ' + (err.error && err.error.message ? err.error.message : err.message))
    );
  }

  onMobileChange() {
    this.otpSent = false;
    this.otpVerified = false;
    this.otpValue = '';
  }

  loadZoneManagers() {
    this.http.get<any[]>('http://129.159.231.57/api/customer/zone-managers').subscribe(
      (data) => { this.zoneManagers = data; },
      (err) => { console.error('Failed to load zone managers'); }
    );
  }

  loadBankNames() {
    this.http.get<string[]>('http://129.159.231.57/api/customer/bank-names').subscribe(
      (data) => { this.bankNamesList = data; },
      () => {}
    );
    this.http.get<string[]>('http://129.159.231.57/api/customer/order-types').subscribe(
      (data) => { this.orderTypesList = data; },
      () => {}
    );
  }

  fetchByIfsc(bank: any) {
    if (!bank.ifscCode || bank.ifscCode.length !== 11) return;
    this.http.get<any>('https://ifsc.razorpay.com/' + bank.ifscCode.toUpperCase()).subscribe(
      (data) => {
        if (data && data.BANK) {
          bank.bankName = data.BANK.toUpperCase();
          bank.branchName = data.BRANCH;
        }
      },
      () => { alert('IFSC not found. Please enter bank and branch manually.'); }
    );
  }

  loadBanks() {
    this.http.get<string[]>('http://129.159.231.57/api/customer/banks').subscribe(
      (data) => { this.bankList = data; },
      (err) => { console.error('Failed to load banks'); }
    );
  }

  onBankChange() {
    const bankName = this.customerForm.get('bankName').value;
    this.branchList = [];
    this.customerForm.get('branchName').setValue('');
    if (bankName) {
      this.http.get<string[]>('http://129.159.231.57/api/customer/branches?bankName=' + encodeURIComponent(bankName)).subscribe(
        (data) => { this.branchList = data; },
        (err) => { console.error('Failed to load branches'); }
      );
    }
  }

  onBankItemChange(bank: any) {
    bank.branches = [];
    bank.branchName = '';
    if (bank.bankName) {
      this.http.get<string[]>('http://129.159.231.57/api/customer/branches?bankName=' + encodeURIComponent(bank.bankName)).subscribe(
        (data) => { bank.branches = data; },
        (err) => { console.error('Failed to load branches'); }
      );
    }
  }

  addBank() {
    this.bankAccounts.push({ bankName: '', branchName: '', accountNumber: '', ifscCode: '', branches: [] });
  }

  removeBank(i: number) { this.bankAccounts.splice(i, 1); }

  onZoneChange(zone: string) {
    const mgr = this.zoneManagers.find(m => m.zone === zone);
    if (mgr) {
      this.customerForm.get('zonalManager').setValue(mgr.name);
      this.customerForm.get('zonalManagerEmp').setValue(mgr.empNumber);
    } else {
      this.customerForm.get('zonalManager').setValue('');
      this.customerForm.get('zonalManagerEmp').setValue('');
    }
  }

  addContact() {
    this.contacts.push({ contactPerson: '', designation: '', mobileNumber: '', emailId: '', confirmEmailId: '' });
  }

  removeContact(index: number) {
    this.contacts.splice(index, 1);
  }

  onAddrStateChange(addr: any, type: string) {
    addr.cities = [];
    addr.city = '';
    if (addr.state) {
      this.http.get<any>('https://countriesnow.space/api/v0.1/countries/state/cities/q?country=India&state=' + encodeURIComponent(addr.state)).subscribe(
        (res) => { if (res && res.data) addr.cities = res.data; },
        () => {}
      );
    }
  }

  fetchByPincode(addr: any) {
    if (!addr.postalCode || addr.postalCode.length !== 6) return;
    this.http.get<any>('https://nominatim.openstreetmap.org/search?format=json&country=India&postalcode=' + addr.postalCode + '&limit=5&addressdetails=1&accept-language=en').subscribe(
      (res) => {
        if (res && res.length > 0) {
          const place = res[0];
          const a = place.address || {};
          addr.state = a.state || '';
          addr.city = a.city || a.town || a.county || a.state_district || '';
          addr.cities = this.stateCityMap[addr.state] || [];
          if (addr.city && addr.cities.indexOf(addr.city) === -1) {
            addr.cities.push(addr.city);
            addr.cities.sort();
          }
        } else {
          alert('Invalid PIN code or no data found');
        }
      },
      (err) => { alert('Unable to fetch PIN code data'); }
    );
  }

  addBillAddress() {
    this.billAddresses.push({ address1: '', address2: '', state: '', city: '', postalCode: '', latitude: '', longitude: '', siteCode: '', cities: [] });
  }

  removeBillAddress(index: number) {
    this.billAddresses.splice(index, 1);
  }

  addShipAddress() {
    this.shipAddresses.push({ address1: '', address2: '', state: '', city: '', postalCode: '', latitude: '', longitude: '', siteCode: '', cities: [] });
  }

  removeShipAddress(index: number) {
    this.shipAddresses.splice(index, 1);
  }

  showMap: boolean = false;
  selectedLat: string = '';
  selectedLng: string = '';
  currentAddrForMap: any = null;
  mapSearchQuery: string = '';
  private map: any;
  private marker: any;

  detectLocation(addr: any) {
    this.currentAddrForMap = addr;
    this.selectedLat = '';
    this.selectedLng = '';
    this.mapSearchQuery = addr.postalCode || addr.city || '';
    this.showMap = true;
    setTimeout(() => {
      this.initMap();
      if (addr.postalCode && addr.postalCode.length === 6) {
        this.searchMapLocation();
      }
    }, 100);
  }

  initMap() {
    const defaultLat = 12.9716;
    const defaultLng = 77.5946;

    this.map = L.map('map').setView([defaultLat, defaultLng], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.map.setView([pos.coords.latitude, pos.coords.longitude], 15);
      });
    }

    this.map.on('click', (e: any) => {
      const lat = e.latlng.lat;
      const lng = e.latlng.lng;
      this.selectedLat = Math.abs(lat).toFixed(6) + (lat >= 0 ? '° N' : '° S');
      this.selectedLng = Math.abs(lng).toFixed(6) + (lng >= 0 ? '° E' : '° W');

      if (this.marker) {
        this.map.removeLayer(this.marker);
      }
      this.marker = L.marker([lat, lng]).addTo(this.map);
    });
  }

  searchMapLocation() {
    if (!this.mapSearchQuery || this.mapSearchQuery.length < 3) return;
    this.http.get<any>('https://nominatim.openstreetmap.org/search?format=json&q=' + encodeURIComponent(this.mapSearchQuery) + '&limit=1')
      .subscribe((results) => {
        if (results && results.length > 0) {
          const lat = parseFloat(results[0].lat);
          const lng = parseFloat(results[0].lon);
          this.map.setView([lat, lng], 16);
          this.selectedLat = Math.abs(lat).toFixed(6) + (lat >= 0 ? '° N' : '° S');
          this.selectedLng = Math.abs(lng).toFixed(6) + (lng >= 0 ? '° E' : '° W');
          if (this.marker) this.map.removeLayer(this.marker);
          this.marker = L.marker([lat, lng]).addTo(this.map);
        } else {
          alert('Location not found. Try a different search term.');
        }
      }, () => { alert('Search failed. Check internet connection.'); });
  }

  confirmLocation() {
    if (this.currentAddrForMap) {
      this.currentAddrForMap.latitude = this.selectedLat;
      this.currentAddrForMap.longitude = this.selectedLng;
    }
    this.closeMap();
  }

  closeMap() {
    this.showMap = false;
    if (this.map) {
      this.map.remove();
      this.map = null;
    }
  }

  onCorrAddrChange() {
    if (this.corrAddrSameAsBill) {
      this.corrAddress.address1 = this.billAddresses[0].address1;
      this.corrAddress.address2 = this.billAddresses[0].address2;
      this.corrAddress.state = this.billAddresses[0].state;
      this.corrAddress.city = this.billAddresses[0].city;
      this.corrAddress.postalCode = this.billAddresses[0].postalCode;
      this.corrAddress.cities = this.billAddresses[0].cities;
    } else {
      this.corrAddress = { address1: '', address2: '', state: '', city: '', postalCode: '', cities: [] };
    }
  }

  onCorrStateChange() {
    this.corrAddress.cities = [];
    this.corrAddress.city = '';
    if (this.corrAddress.state) {
      this.http.get<any>('https://countriesnow.space/api/v0.1/countries/state/cities/q?country=India&state=' + encodeURIComponent(this.corrAddress.state)).subscribe(
        (res) => { if (res && res.data) this.corrAddress.cities = res.data; },
        () => {}
      );
    }
  }

  onSameAsBill() {
    if (this.sameAsBill && this.billAddresses.length > 0) {
      const b = this.billAddresses[0];
      this.shipAddresses[0] = { ...b, cities: [...b.cities] };
    }
  }

  onPanCardUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        alert('Only PDF files are allowed!');
        return;
      }
      if (file.size > 20 * 1024 * 1024) { alert('File size exceeds 20MB limit. Please upload a smaller file.'); return; }
      this.panCardFile = file;
      this.panCardFileName = file.name;
    }
  }

  removePanCard() {
    this.panCardFile = null;
    this.panCardFileName = '';
  }

  onAadharUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') { alert('Only PDF files are allowed!'); return; }
      if (file.size > 20 * 1024 * 1024) { alert('File size exceeds 20MB limit. Please upload a smaller file.'); return; }
      this.aadharFile = file;
      this.aadharFileName = file.name;
    }
  }

  removeAadhar() {
    this.aadharFile = null;
    this.aadharFileName = '';
  }

  onGstUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') { alert('Only PDF files are allowed!'); return; }
      if (file.size > 20 * 1024 * 1024) { alert('File size exceeds 20MB limit. Please upload a smaller file.'); return; }
      this.gstFile = file;
      this.gstFileName = file.name;
    }
  }

  removeGst() {
    this.gstFile = null;
    this.gstFileName = '';
  }

  onCanCertUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') { alert('Only PDF files are allowed!'); return; }
      if (file.size > 20 * 1024 * 1024) { alert('File size exceeds 20MB limit. Please upload a smaller file.'); return; }
      this.canCertFile = file;
      this.canCertFileName = file.name;
    }
  }

  removeCanCert() {
    this.canCertFile = null;
    this.canCertFileName = '';
  }

  onChequeUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') { alert('Only PDF files are allowed!'); return; }
      if (file.size > 20 * 1024 * 1024) { alert('File size exceeds 20MB limit. Please upload a smaller file.'); return; }
      this.chequeFile = file;
      this.chequeFileName = file.name;
    }
  }

  onBankChequeUpload(event: any, bank: any) {
    const file = event.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') { alert('Only PDF files are allowed!'); return; }
      if (file.size > 20 * 1024 * 1024) { alert('File size exceeds 20MB limit. Please upload a smaller file.'); return; }
      bank.chequeFile = file;
      bank.chequeFileName = file.name;
      if (this.bankAccounts.indexOf(bank) === 0) {
        this.chequeFile = file;
        this.chequeFileName = file.name;
      }
    }
  }

  removeCheque() {
    this.chequeFile = null;
    this.chequeFileName = '';
  }

  onNomineeDocUpload(event: any) {
    const files = Array.from(event.target.files) as File[];
    if (files && files.length > 0) {
      const pdfFiles = files.filter(file => file.type === 'application/pdf');
      const oversized = pdfFiles.filter(file => file.size > 20 * 1024 * 1024);
      if (pdfFiles.length !== files.length) {
        alert('Only PDF files are allowed! Non-PDF files were ignored.');
      }
      if (oversized.length > 0) {
        alert(oversized.length + ' file(s) exceed 20MB limit and were ignored.');
      }
      const validFiles = pdfFiles.filter(file => file.size <= 20 * 1024 * 1024);
      this.nomineeDocFiles = [...this.nomineeDocFiles, ...validFiles];
    }
  }

  removeNomineeDoc(index: number) {
    this.nomineeDocFiles.splice(index, 1);
  }

  removeExistingNomineeDoc(index: number) {
    if (!confirm('Remove this nominee document?')) return;
    const origId = JSON.parse(localStorage.getItem('editCustomerOrigId') || 'null');
    const fileName = this.existingNomineeDocNames[index];
    if (origId) {
      this.http.post('http://129.159.231.57/api/customer/remove-nominee-doc/' + origId, { fileName }).subscribe(
        () => { this.existingNomineeDocNames.splice(index, 1); },
        () => { alert('Failed to remove document from server.'); }
      );
    } else {
      this.existingNomineeDocNames.splice(index, 1);
    }
  }

  onOrderDocUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') { alert('Only PDF files are allowed!'); return; }
      if (file.size > 20 * 1024 * 1024) { alert('File size exceeds 20MB limit. Please upload a smaller file.'); return; }
      this.orderDocFile = file;
      this.orderDocFileName = file.name;
    }
  }

  removeOrderDoc() {
    this.orderDocFile = null;
    this.orderDocFileName = '';
  }

  onReset() {
    this.customerForm.reset({ customerStatus: 'A', siteUseCode: 'BILL_TO' });
    this.panCardFileName = '';
    this.panCardFile = null;
    this.aadharFileName = '';
    this.aadharFile = null;
    this.gstFileName = '';
    this.gstFile = null;
    this.canCertFileName = '';
    this.canCertFile = null;
    this.chequeFileName = '';
    this.chequeFile = null;
    this.nomineeDocFiles = [];
    this.existingNomineeDocNames = [];
    this.billAddresses = [{ address1: '', address2: '', state: '', city: '', postalCode: '', latitude: '', longitude: '', siteCode: '', cities: [] }];
    this.shipAddresses = [{ address1: '', address2: '', state: '', city: '', postalCode: '', latitude: '', longitude: '', siteCode: '', cities: [] }];
    this.sameAsBill = false;
    this.contacts = [{ contactPerson: '', designation: '', mobileNumber: '', emailId: '', confirmEmailId: '' }];
    this.otpSent = false;
    this.otpVerified = false;
    this.otpValue = '';
    if (this.otpInterval) clearInterval(this.otpInterval);
  }
}
