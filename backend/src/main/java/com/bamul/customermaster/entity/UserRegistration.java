package com.bamul.customermaster.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "BAMUL_PORTAL_USER_REG")
public class UserRegistration {

    @Id
    @Column(name = "REG_ID")
    private Long regId;

    @Column(name = "EMPLOYEE_NUMBER") private String employeeNumber;
    @Column(name = "FULL_NAME") private String fullName;
    @Column(name = "FIRST_NAME") private String firstName;
    @Column(name = "LAST_NAME") private String lastName;
    @Column(name = "MIDDLE_NAME") private String middleName;
    @Column(name = "TITLE") private String title;
    @Column(name = "GENDER") private String gender;
    @Column(name = "PERSON_TYPE") private String personType;

    @Column(name = "DATE_OF_BIRTH") private Date dateOfBirth;
    @Column(name = "PLACE_OF_BIRTH") private String placeOfBirth;
    @Column(name = "REGION_OF_BIRTH") private String regionOfBirth;
    @Column(name = "COUNTRY_OF_BIRTH") private String countryOfBirth;
    @Column(name = "NATIONALITY") private String nationality;
    @Column(name = "MARITAL_STATUS") private String maritalStatus;
    @Column(name = "REGISTERED_DISABLED") private String registeredDisabled;

    @Column(name = "PAN_NUMBER") private String panNumber;
    @Column(name = "PAN_REFERENCE_NUMBER") private String panReferenceNumber;
    @Column(name = "AADHAAR_NUMBER") private String aadhaarNumber;
    @Column(name = "RESIDENTIAL_STATUS") private String residentialStatus;
    @Column(name = "EX_SERVICEMAN") private String exServiceman;

    @Column(name = "EMAIL_ID") private String emailId;
    @Column(name = "MOBILE_NUMBER") private String mobileNumber;
    @Column(name = "ADDRESS") private String address;

    @Column(name = "DEPARTMENT") private String department;
    @Column(name = "DESIGNATION") private String designation;
    @Column(name = "JOB") private String job;
    @Column(name = "GRADE") private String grade;
    @Column(name = "LOCATION") private String location;
    @Column(name = "EMPLOYEE_GROUP") private String employeeGroup;
    @Column(name = "POSITION") private String position;
    @Column(name = "PAYROLL") private String payroll;
    @Column(name = "EMPLOYEE_CATEGORY") private String employeeCategory;
    @Column(name = "ASSIGNMENT_NUMBER") private String assignmentNumber;
    @Column(name = "SUPERVISOR_NAME") private String supervisorName;
    @Column(name = "SUPERVISOR_WORKER_NUMBER") private String supervisorWorkerNumber;
    @Column(name = "ASSIGNMENT_STATUS") private String assignmentStatus;

    @Column(name = "SALARY_BASIS") private String salaryBasis;
    @Column(name = "REVIEW_SALARY_FREQUENCY") private String reviewSalaryFrequency;
    @Column(name = "REVIEW_PERFORMANCE_FREQUENCY") private String reviewPerformanceFrequency;

    @Column(name = "EFFECTIVE_FROM_DATE") private Date effectiveFromDate;
    @Column(name = "EFFECTIVE_TO_DATE") private Date effectiveToDate;
    @Column(name = "LATEST_START_DATE") private Date latestStartDate;

    @Column(name = "USERNAME") private String username;
    @Column(name = "PASSWORD") private String password;
    @Column(name = "STATUS") private String status;
    @Column(name = "REJECT_REASON") private String rejectReason;
    @Column(name = "APPROVED_BY") private String approvedBy;
    @Column(name = "APPROVAL_DATE") private Date approvalDate;
    @Column(name = "CREATION_DATE") private Date creationDate;
    @Column(name = "CREATED_BY") private Long createdBy;
    @Column(name = "LAST_UPDATED_DATE") private Date lastUpdatedDate;
    @Column(name = "LAST_UPDATED_BY") private Long lastUpdatedBy;

    // Getters and Setters
    public Long getRegId() { return regId; } public void setRegId(Long v) { this.regId = v; }
    public String getEmployeeNumber() { return employeeNumber; } public void setEmployeeNumber(String v) { this.employeeNumber = v; }
    public String getFullName() { return fullName; } public void setFullName(String v) { this.fullName = v; }
    public String getFirstName() { return firstName; } public void setFirstName(String v) { this.firstName = v; }
    public String getLastName() { return lastName; } public void setLastName(String v) { this.lastName = v; }
    public String getMiddleName() { return middleName; } public void setMiddleName(String v) { this.middleName = v; }
    public String getTitle() { return title; } public void setTitle(String v) { this.title = v; }
    public String getGender() { return gender; } public void setGender(String v) { this.gender = v; }
    public String getPersonType() { return personType; } public void setPersonType(String v) { this.personType = v; }
    public Date getDateOfBirth() { return dateOfBirth; } public void setDateOfBirth(Date v) { this.dateOfBirth = v; }
    public String getPlaceOfBirth() { return placeOfBirth; } public void setPlaceOfBirth(String v) { this.placeOfBirth = v; }
    public String getRegionOfBirth() { return regionOfBirth; } public void setRegionOfBirth(String v) { this.regionOfBirth = v; }
    public String getCountryOfBirth() { return countryOfBirth; } public void setCountryOfBirth(String v) { this.countryOfBirth = v; }
    public String getNationality() { return nationality; } public void setNationality(String v) { this.nationality = v; }
    public String getMaritalStatus() { return maritalStatus; } public void setMaritalStatus(String v) { this.maritalStatus = v; }
    public String getRegisteredDisabled() { return registeredDisabled; } public void setRegisteredDisabled(String v) { this.registeredDisabled = v; }
    public String getPanNumber() { return panNumber; } public void setPanNumber(String v) { this.panNumber = v; }
    public String getPanReferenceNumber() { return panReferenceNumber; } public void setPanReferenceNumber(String v) { this.panReferenceNumber = v; }
    public String getAadhaarNumber() { return aadhaarNumber; } public void setAadhaarNumber(String v) { this.aadhaarNumber = v; }
    public String getResidentialStatus() { return residentialStatus; } public void setResidentialStatus(String v) { this.residentialStatus = v; }
    public String getExServiceman() { return exServiceman; } public void setExServiceman(String v) { this.exServiceman = v; }
    public String getEmailId() { return emailId; } public void setEmailId(String v) { this.emailId = v; }
    public String getMobileNumber() { return mobileNumber; } public void setMobileNumber(String v) { this.mobileNumber = v; }
    public String getAddress() { return address; } public void setAddress(String v) { this.address = v; }
    public String getDepartment() { return department; } public void setDepartment(String v) { this.department = v; }
    public String getDesignation() { return designation; } public void setDesignation(String v) { this.designation = v; }
    public String getJob() { return job; } public void setJob(String v) { this.job = v; }
    public String getGrade() { return grade; } public void setGrade(String v) { this.grade = v; }
    public String getLocation() { return location; } public void setLocation(String v) { this.location = v; }
    public String getEmployeeGroup() { return employeeGroup; } public void setEmployeeGroup(String v) { this.employeeGroup = v; }
    public String getPosition() { return position; } public void setPosition(String v) { this.position = v; }
    public String getPayroll() { return payroll; } public void setPayroll(String v) { this.payroll = v; }
    public String getEmployeeCategory() { return employeeCategory; } public void setEmployeeCategory(String v) { this.employeeCategory = v; }
    public String getAssignmentNumber() { return assignmentNumber; } public void setAssignmentNumber(String v) { this.assignmentNumber = v; }
    public String getSupervisorName() { return supervisorName; } public void setSupervisorName(String v) { this.supervisorName = v; }
    public String getSupervisorWorkerNumber() { return supervisorWorkerNumber; } public void setSupervisorWorkerNumber(String v) { this.supervisorWorkerNumber = v; }
    public String getAssignmentStatus() { return assignmentStatus; } public void setAssignmentStatus(String v) { this.assignmentStatus = v; }
    public String getSalaryBasis() { return salaryBasis; } public void setSalaryBasis(String v) { this.salaryBasis = v; }
    public String getReviewSalaryFrequency() { return reviewSalaryFrequency; } public void setReviewSalaryFrequency(String v) { this.reviewSalaryFrequency = v; }
    public String getReviewPerformanceFrequency() { return reviewPerformanceFrequency; } public void setReviewPerformanceFrequency(String v) { this.reviewPerformanceFrequency = v; }
    public Date getEffectiveFromDate() { return effectiveFromDate; } public void setEffectiveFromDate(Date v) { this.effectiveFromDate = v; }
    public Date getEffectiveToDate() { return effectiveToDate; } public void setEffectiveToDate(Date v) { this.effectiveToDate = v; }
    public Date getLatestStartDate() { return latestStartDate; } public void setLatestStartDate(Date v) { this.latestStartDate = v; }
    public String getUsername() { return username; } public void setUsername(String v) { this.username = v; }
    public String getPassword() { return password; } public void setPassword(String v) { this.password = v; }
    public String getStatus() { return status; } public void setStatus(String v) { this.status = v; }
    public String getRejectReason() { return rejectReason; } public void setRejectReason(String v) { this.rejectReason = v; }
    public String getApprovedBy() { return approvedBy; } public void setApprovedBy(String v) { this.approvedBy = v; }
    public Date getApprovalDate() { return approvalDate; } public void setApprovalDate(Date v) { this.approvalDate = v; }
    public Date getCreationDate() { return creationDate; } public void setCreationDate(Date v) { this.creationDate = v; }
    public Long getCreatedBy() { return createdBy; } public void setCreatedBy(Long v) { this.createdBy = v; }
    public Date getLastUpdatedDate() { return lastUpdatedDate; } public void setLastUpdatedDate(Date v) { this.lastUpdatedDate = v; }
    public Long getLastUpdatedBy() { return lastUpdatedBy; } public void setLastUpdatedBy(Long v) { this.lastUpdatedBy = v; }
}
