package com.bamul.customermaster.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "BAMUL_CUSTOMER_DET_STG")
public class CustomerStaging {

    @Id
    @Column(name = "CUSTOMER_ID")
    private Long customerId;

    @Column(name = "OPERATING_UNIT")
    private String operatingUnit;

    @Column(name = "CUSTOMER_NAME")
    private String customerName;

    @Column(name = "ACCOUNT_NUMBER")
    private String accountNumber;

    @Column(name = "CUSTOMER_TYPE")
    private String customerType;

    @Column(name = "PROFILE_CLASS")
    private String profileClass;

    @Column(name = "CUSTOMER_COMM_ADDRESS")
    private String address1;

    @Column(name = "ADDRESS2")
    private String address2;

    @Column(name = "ADDRESS3")
    private String address3;

    @Column(name = "ADDRESS4")
    private String address4;

    @Column(name = "CITY")
    private String city;

    @Column(name = "POSTAL_CODE")
    private String postalCode;

    @Column(name = "STATE")
    private String state;

    @Column(name = "COUNTRY")
    private String country;

    @Column(name = "CUSTOMER_PAN_NO")
    private String panNo;

    @Column(name = "GSTIN_NUMBER")
    private String gstinNumber;

    @Column(name = "CUSTOMER_STATUS")
    private String customerStatus;

    @Column(name = "MOBILE_NUMBER")
    private String mobileNumber;

    @Column(name = "EMAIL_ID")
    private String emailId;

    @Column(name = "CONTACT_PERSON")
    private String contactPerson;

    @Column(name = "CONTACT_NO")
    private String contactNo;

    @Column(name = "BANK_NAME")
    private String bankName;

    @Column(name = "BRANCH_NAME")
    private String branchName;

    @Column(name = "BANK_ACCOUNT_NUMBER")
    private String bankAccountNumber;

    @Column(name = "IFSC_CODE")
    private String ifscCode;

    @Column(name = "SALESPERSON")
    private String salesperson;

    @Column(name = "SALESREP_EMP_NUMBER")
    private String salesrepEmpNumber;

    @Column(name = "PAYMENT_TERMS")
    private String paymentTerms;

    @Column(name = "CREDIT_LIMIT")
    private Double creditLimit;

    @Column(name = "ADHAR_NO")
    private String aadharNo;

    @Column(name = "CUSTOMER_SITE_CODE")
    private String customerSiteCode;

    @Column(name = "CUSTOMER_CLASS")
    private String customerClass;

    @Column(name = "CUSTOMER_CLASSIFICATION")
    private String customerClassification;

    @Column(name = "PRICE_LIST")
    private String priceList;

    @Column(name = "SITE_STATUS")
    private String siteStatus;

    @Column(name = "SITE_USE_STATUS")
    private String siteUseStatus;

    @Column(name = "SITE_USE_CODE")
    private String siteUseCode;

    @Column(name = "PRIMARY_ORDER_TYPE")
    private String primaryOrderType;

    @Column(name = "OFF_ORD_NO")
    private String offOrdNo;

    @Column(name = "OFF_ORD_DATE")
    private Date offOrdDate;

    @Column(name = "PRODUCTS_DISTRIBUTOR")
    private String productsDistributor;

    @Column(name = "DISTRIBUTOR_NUMBER")
    private String distributorNumber;

    @Column(name = "ICECREAM_DISTRIBUTOR")
    private String icecreamDistributor;

    @Column(name = "ICECREAM_DIST_NUM")
    private String icecreamDistNum;

    @Column(name = "NOMINEE_NAME")
    private String nomineeName;

    @Column(name = "NOMINEE_CONTACT")
    private String nomineeContact;

    @Column(name = "NOMINEE_RELATIONSHIP")
    private String nomineeRelationship;

    @Column(name = "ZONE_CODE")
    private String zoneCode;

    @Column(name = "ZONAL_MANAGER")
    private String zonalManager;

    @Column(name = "ZONAL_MANAGER_EMP")
    private String zonalManagerEmp;

    @Column(name = "AREA")
    private String area;

    @Column(name = "WARD")
    private String ward;

    @Column(name = "LATTITUDE")
    private String latitude;

    @Column(name = "LANGITUDE")
    private String longitude;

    @Column(name = "DEPOSIT")
    private Double deposit;

    @Column(name = "PICKED_STATUS")
    private String pickedStatus;

    @Column(name = "PAN_CARD_PDF_PATH")
    private String panCardPdfPath;

    @Column(name = "AADHAR_CARD_PDF_PATH")
    private String aadharCardPdfPath;

    @Column(name = "GST_CERT_PDF_PATH")
    private String gstCertPdfPath;

    @Column(name = "BILL_ADDRESSES_JSON")
    private String billAddressesJson;

    @Column(name = "SHIP_ADDRESSES_JSON")
    private String shipAddressesJson;

    @Column(name = "CORR_ADDRESS_JSON")
    private String corrAddressJson;

    @Column(name = "CANCELLED_CHEQUE_PDF_PATH")
    private String cancelledChequePdfPath;

    @Column(name = "CAN_CERT_PDF_PATH")
    private String canCertPdfPath;

    @Column(name = "NOMINEE_DOC_PDF_PATH")
    private String nomineeDocPdfPath;
    private String orderDocPdfPath;
    private String banksJson;

    @Column(name = "ERROR_MSG")
    private String errorMsg;

    @Column(name = "FILE_NAME")
    private String fileName;

    @Column(name = "CREATION_DATE")
    private Date creationDate;

    @Column(name = "CREATED_BY")
    private Long createdBy;

    @Column(name = "SUBMITTED_BY")
    private String submittedBy;

    @Column(name = "APPROVED_BY")
    private String approvedBy;

    @Column(name = "ORIGINAL_CUSTOMER_ID")
    private Long originalCustomerId;

    @Column(name = "FDR_NUMBER")
    private String fdrNumber;

    @Column(name = "SUB_AREA")
    private String subArea;

    @Column(name = "ADDITIONAL_INFO")
    private String additionalInfo;

    // Getters and Setters
    public Long getCustomerId() { return customerId; }
    public void setCustomerId(Long customerId) { this.customerId = customerId; }
    public String getOperatingUnit() { return operatingUnit; }
    public void setOperatingUnit(String operatingUnit) { this.operatingUnit = operatingUnit; }
    public String getCustomerName() { return customerName; }
    public void setCustomerName(String customerName) { this.customerName = customerName; }
    public String getAccountNumber() { return accountNumber; }
    public void setAccountNumber(String accountNumber) { this.accountNumber = accountNumber; }
    public String getCustomerType() { return customerType; }
    public void setCustomerType(String customerType) { this.customerType = customerType; }
    public String getProfileClass() { return profileClass; }
    public void setProfileClass(String profileClass) { this.profileClass = profileClass; }
    public String getAddress1() { return address1; }
    public void setAddress1(String address1) { this.address1 = address1; }
    public String getAddress2() { return address2; }
    public void setAddress2(String address2) { this.address2 = address2; }
    public String getAddress3() { return address3; }
    public void setAddress3(String address3) { this.address3 = address3; }
    public String getAddress4() { return address4; }
    public void setAddress4(String address4) { this.address4 = address4; }
    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }
    public String getPostalCode() { return postalCode; }
    public void setPostalCode(String postalCode) { this.postalCode = postalCode; }
    public String getState() { return state; }
    public void setState(String state) { this.state = state; }
    public String getCountry() { return country; }
    public void setCountry(String country) { this.country = country; }
    public String getPanNo() { return panNo; }
    public void setPanNo(String panNo) { this.panNo = panNo; }
    public String getGstinNumber() { return gstinNumber; }
    public void setGstinNumber(String gstinNumber) { this.gstinNumber = gstinNumber; }
    public String getCustomerStatus() { return customerStatus; }
    public void setCustomerStatus(String customerStatus) { this.customerStatus = customerStatus; }
    public String getMobileNumber() { return mobileNumber; }
    public void setMobileNumber(String mobileNumber) { this.mobileNumber = mobileNumber; }
    public String getEmailId() { return emailId; }
    public void setEmailId(String emailId) { this.emailId = emailId; }
    public String getContactPerson() { return contactPerson; }
    public void setContactPerson(String contactPerson) { this.contactPerson = contactPerson; }
    public String getContactNo() { return contactNo; }
    public void setContactNo(String contactNo) { this.contactNo = contactNo; }
    public String getBankName() { return bankName; }
    public void setBankName(String bankName) { this.bankName = bankName; }
    public String getBranchName() { return branchName; }
    public void setBranchName(String branchName) { this.branchName = branchName; }
    public String getBankAccountNumber() { return bankAccountNumber; }
    public void setBankAccountNumber(String bankAccountNumber) { this.bankAccountNumber = bankAccountNumber; }
    public String getIfscCode() { return ifscCode; }
    public void setIfscCode(String ifscCode) { this.ifscCode = ifscCode; }
    public String getSalesperson() { return salesperson; }
    public void setSalesperson(String salesperson) { this.salesperson = salesperson; }
    public String getSalesrepEmpNumber() { return salesrepEmpNumber; }
    public void setSalesrepEmpNumber(String salesrepEmpNumber) { this.salesrepEmpNumber = salesrepEmpNumber; }
    public String getPaymentTerms() { return paymentTerms; }
    public void setPaymentTerms(String paymentTerms) { this.paymentTerms = paymentTerms; }
    public Double getCreditLimit() { return creditLimit; }
    public void setCreditLimit(Double creditLimit) { this.creditLimit = creditLimit; }
    public String getAadharNo() { return aadharNo; }
    public void setAadharNo(String aadharNo) { this.aadharNo = aadharNo; }
    public String getCustomerSiteCode() { return customerSiteCode; }
    public void setCustomerSiteCode(String customerSiteCode) { this.customerSiteCode = customerSiteCode; }
    public String getCustomerClass() { return customerClass; }
    public void setCustomerClass(String customerClass) { this.customerClass = customerClass; }
    public String getCustomerClassification() { return customerClassification; }
    public void setCustomerClassification(String customerClassification) { this.customerClassification = customerClassification; }
    public String getPriceList() { return priceList; }
    public void setPriceList(String priceList) { this.priceList = priceList; }
    public String getSiteStatus() { return siteStatus; }
    public void setSiteStatus(String siteStatus) { this.siteStatus = siteStatus; }
    public String getSiteUseStatus() { return siteUseStatus; }
    public void setSiteUseStatus(String siteUseStatus) { this.siteUseStatus = siteUseStatus; }
    public String getSiteUseCode() { return siteUseCode; }
    public void setSiteUseCode(String siteUseCode) { this.siteUseCode = siteUseCode; }
    public String getPrimaryOrderType() { return primaryOrderType; }
    public void setPrimaryOrderType(String primaryOrderType) { this.primaryOrderType = primaryOrderType; }
    public String getOffOrdNo() { return offOrdNo; }
    public void setOffOrdNo(String offOrdNo) { this.offOrdNo = offOrdNo; }
    public Date getOffOrdDate() { return offOrdDate; }
    public void setOffOrdDate(Date offOrdDate) { this.offOrdDate = offOrdDate; }
    public String getProductsDistributor() { return productsDistributor; }
    public void setProductsDistributor(String productsDistributor) { this.productsDistributor = productsDistributor; }
    public String getDistributorNumber() { return distributorNumber; }
    public void setDistributorNumber(String distributorNumber) { this.distributorNumber = distributorNumber; }
    public String getIcecreamDistributor() { return icecreamDistributor; }
    public void setIcecreamDistributor(String icecreamDistributor) { this.icecreamDistributor = icecreamDistributor; }
    public String getIcecreamDistNum() { return icecreamDistNum; }
    public void setIcecreamDistNum(String icecreamDistNum) { this.icecreamDistNum = icecreamDistNum; }
    public String getNomineeName() { return nomineeName; }
    public void setNomineeName(String nomineeName) { this.nomineeName = nomineeName; }
    public String getNomineeContact() { return nomineeContact; }
    public void setNomineeContact(String nomineeContact) { this.nomineeContact = nomineeContact; }
    public String getNomineeRelationship() { return nomineeRelationship; }
    public void setNomineeRelationship(String nomineeRelationship) { this.nomineeRelationship = nomineeRelationship; }
    public String getZoneCode() { return zoneCode; }
    public void setZoneCode(String zoneCode) { this.zoneCode = zoneCode; }
    public String getZonalManager() { return zonalManager; }
    public void setZonalManager(String zonalManager) { this.zonalManager = zonalManager; }
    public String getZonalManagerEmp() { return zonalManagerEmp; }
    public void setZonalManagerEmp(String zonalManagerEmp) { this.zonalManagerEmp = zonalManagerEmp; }
    public String getArea() { return area; }
    public void setArea(String area) { this.area = area; }
    public String getWard() { return ward; }
    public void setWard(String ward) { this.ward = ward; }
    public String getLatitude() { return latitude; }
    public void setLatitude(String latitude) { this.latitude = latitude; }
    public String getLongitude() { return longitude; }
    public void setLongitude(String longitude) { this.longitude = longitude; }
    public Double getDeposit() { return deposit; }
    public void setDeposit(Double deposit) { this.deposit = deposit; }
    public String getPickedStatus() { return pickedStatus; }
    public void setPickedStatus(String pickedStatus) { this.pickedStatus = pickedStatus; }
    public String getPanCardPdfPath() { return panCardPdfPath; }
    public void setPanCardPdfPath(String panCardPdfPath) { this.panCardPdfPath = panCardPdfPath; }
    public String getAadharCardPdfPath() { return aadharCardPdfPath; }
    public void setAadharCardPdfPath(String aadharCardPdfPath) { this.aadharCardPdfPath = aadharCardPdfPath; }
    public String getGstCertPdfPath() { return gstCertPdfPath; }
    public void setGstCertPdfPath(String gstCertPdfPath) { this.gstCertPdfPath = gstCertPdfPath; }
    public String getBillAddressesJson() { return billAddressesJson; }
    public void setBillAddressesJson(String billAddressesJson) { this.billAddressesJson = billAddressesJson; }
    public String getShipAddressesJson() { return shipAddressesJson; }
    public void setShipAddressesJson(String shipAddressesJson) { this.shipAddressesJson = shipAddressesJson; }
    public String getCorrAddressJson() { return corrAddressJson; }
    public void setCorrAddressJson(String corrAddressJson) { this.corrAddressJson = corrAddressJson; }
    public String getCancelledChequePdfPath() { return cancelledChequePdfPath; }
    public void setCancelledChequePdfPath(String cancelledChequePdfPath) { this.cancelledChequePdfPath = cancelledChequePdfPath; }
    public String getCanCertPdfPath() { return canCertPdfPath; }
    public void setCanCertPdfPath(String canCertPdfPath) { this.canCertPdfPath = canCertPdfPath; }
    public String getNomineeDocPdfPath() { return nomineeDocPdfPath; }
    public void setNomineeDocPdfPath(String nomineeDocPdfPath) { this.nomineeDocPdfPath = nomineeDocPdfPath; }
    public String getOrderDocPdfPath() { return orderDocPdfPath; }
    public void setOrderDocPdfPath(String orderDocPdfPath) { this.orderDocPdfPath = orderDocPdfPath; }
    public String getBanksJson() { return banksJson; }
    public void setBanksJson(String banksJson) { this.banksJson = banksJson; }
    public String getErrorMsg() { return errorMsg; }
    public void setErrorMsg(String errorMsg) { this.errorMsg = errorMsg; }
    public Date getCreationDate() { return creationDate; }
    public void setCreationDate(Date creationDate) { this.creationDate = creationDate; }
    public Long getCreatedBy() { return createdBy; }
    public void setCreatedBy(Long createdBy) { this.createdBy = createdBy; }
    public String getSubmittedBy() { return submittedBy; }
    public void setSubmittedBy(String submittedBy) { this.submittedBy = submittedBy; }
    public String getApprovedBy() { return approvedBy; }
    public void setApprovedBy(String approvedBy) { this.approvedBy = approvedBy; }
    public Long getOriginalCustomerId() { return originalCustomerId; }
    public void setOriginalCustomerId(Long originalCustomerId) { this.originalCustomerId = originalCustomerId; }
    public String getFdrNumber() { return fdrNumber; }
    public void setFdrNumber(String fdrNumber) { this.fdrNumber = fdrNumber; }
    public String getSubArea() { return subArea; }
    public void setSubArea(String subArea) { this.subArea = subArea; }
    public String getAdditionalInfo() { return additionalInfo; }
    public void setAdditionalInfo(String additionalInfo) { this.additionalInfo = additionalInfo; }
    public String getFileName() { return fileName; }
    public void setFileName(String fileName) { this.fileName = fileName; }
}
