package com.bamul.customermaster.service;

import com.bamul.customermaster.entity.CustomerStaging;
import com.bamul.customermaster.repository.CustomerStagingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Date;
import java.util.List;

@Service
public class CustomerStagingService {

    @Autowired
    private CustomerStagingRepository repository;

    @Autowired
    private JavaMailSender mailSender;

    @PersistenceContext
    private EntityManager entityManager;

    // Get latest 50 pending customer records
    public List<CustomerStaging> getAll() {
        return repository.findAllPortalRecords();
    }

    // Get customer by ID
    public CustomerStaging getById(Long customerId) {
        return repository.findById(customerId).orElse(null);
    }

    public CustomerStaging save(CustomerStaging customer) {
        return repository.save(customer);
    }

    // Search approved customers from ERP
    @SuppressWarnings("unchecked")
    public List<CustomerStaging> searchCustomers(String query) {
        List<Object[]> rows = entityManager.createNativeQuery(
            "SELECT customer_id, customer_name, account_number, customer_type " +
            "FROM bamul_customer_det_stg " +
            "WHERE picked_status = 'S' " +
            "AND (UPPER(customer_name) LIKE UPPER(:q) OR account_number LIKE :q) " +
            "ORDER BY customer_id DESC"
        ).setParameter("q", "%" + query + "%").setMaxResults(20).getResultList();

        List<CustomerStaging> result = new java.util.ArrayList<>();
        for (Object[] r : rows) {
            CustomerStaging c = new CustomerStaging();
            c.setCustomerId(((Number) r[0]).longValue());
            c.setCustomerName(r[1] != null ? r[1].toString() : "");
            c.setAccountNumber(r[2] != null ? r[2].toString() : "");
            c.setCustomerType(r[3] != null ? r[3].toString() : "");
            result.add(c);
        }
        return result;
    }

    // Get full customer detail from EBS
    public java.util.Map<String, Object> getCustomerDetail(Long custAccountId) {
        java.util.Map<String, Object> detail = new java.util.HashMap<>();
        try {
            List<Object[]> rows = entityManager.createNativeQuery(
                "SELECT customer_name, account_number, customer_type, customer_class, " +
                "customer_comm_address, address2, city, state, postal_code, country, " +
                "mobile_number, email_id, customer_pan_no, gstin_number, adhar_no, " +
                "contact_person, contact_no, bank_name, branch_name, bank_account_number, ifsc_code, " +
                "salesperson, salesrep_emp_number, payment_terms, credit_limit, deposit, " +
                "off_ord_no, off_ord_date, zone_code, area, ward, zonal_manager, zonal_manager_emp, " +
                "nominee_name, nominee_contact, nominee_relationship, " +
                "products_distributor, distributor_number, icecream_distributor, icecream_dist_num, " +
                "TO_CHAR(bill_addresses_json) as bill_addresses_json, TO_CHAR(ship_addresses_json) as ship_addresses_json, price_list, " +
                "customer_id, lattitude, langitude, customer_classification " +
                "FROM bamul_customer_det_stg " +
                "WHERE customer_id = :id AND ROWNUM = 1"
            ).setParameter("id", custAccountId).getResultList();

            if (!rows.isEmpty()) {
                Object[] r = rows.get(0);
                detail.put("customerName", r[0]);
                detail.put("accountNumber", r[1]);
                detail.put("customerType", r[2]);
                detail.put("customerClass", r[3]);
                detail.put("customerCommAddress", r[4]);
                detail.put("address2", r[5]);
                detail.put("city", r[6]);
                detail.put("state", r[7]);
                detail.put("postalCode", r[8]);
                detail.put("country", r[9]);
                detail.put("mobileNumber", r[10]);
                detail.put("emailId", r[11]);
                detail.put("panNo", r[12]);
                detail.put("gstinNumber", r[13]);
                detail.put("aadharNo", r[14]);
                detail.put("contactPerson", r[15]);
                detail.put("contactNo", r[16]);
                detail.put("bankName", r[17]);
                detail.put("branchName", r[18]);
                detail.put("bankAccountNumber", r[19]);
                detail.put("ifscCode", r[20]);
                detail.put("salesperson", r[21]);
                detail.put("salesrepEmpNumber", r[22]);
                detail.put("paymentTerms", r[23]);
                detail.put("creditLimit", r[24]);
                detail.put("deposit", r[25]);
                detail.put("offOrdNo", r[26]);
                detail.put("offOrdDate", r[27]);
                detail.put("zoneCode", r[28]);
                detail.put("area", r[29]);
                detail.put("ward", r[30]);
                detail.put("zonalManager", r[31]);
                detail.put("zonalManagerEmp", r[32]);
                detail.put("nomineeName", r[33]);
                detail.put("nomineeContact", r[34]);
                detail.put("nomineeRelationship", r[35]);
                detail.put("productsDistributor", r[36]);
                detail.put("distributorNumber", r[37]);
                detail.put("icecreamDistributor", r[38]);
                detail.put("icecreamDistNum", r[39]);
                detail.put("billAddressesJson", r[40]);
                detail.put("shipAddressesJson", r[41]);
                detail.put("priceList", r[42]);
                detail.put("customerId", r[43]);
                detail.put("latitude", r[44]);
                detail.put("longitude", r[45]);
                detail.put("customerClassification", r[46]);
            }
        } catch (Exception e) {
            detail.put("error", e.getMessage());
        }
        return detail;
    }

    // Submit update request
    @Transactional
    public CustomerStaging submitUpdateRequest(CustomerStaging customer) {
        Long nextId = repository.getNextCustomerId();
        customer.setCustomerId(nextId);
        customer.setPickedStatus("PA");
        customer.setFileName("BAMUL_CUSTOMER_SITE_TEST.csv");
        customer.setCreationDate(new java.util.Date());
        customer.setCreatedBy(0L);
        customer.setOperatingUnit("BAMUL_OU");
        if (customer.getCountry() == null) customer.setCountry("IN");
        if (customer.getSiteUseCode() == null) customer.setSiteUseCode("BILL_TO");
        if (customer.getCustomerStatus() == null) customer.setCustomerStatus("A");
        if (customer.getSiteStatus() == null) customer.setSiteStatus("A");
        if (customer.getSiteUseStatus() == null) customer.setSiteUseStatus("A");
        // originalCustomerId is set by the frontend when editing an existing record
        return repository.save(customer);
    }

    // Get pending approval records (for Finance Head)
    public List<CustomerStaging> getPendingApproval() {
        return repository.findByPickedStatus("PA");
    }

    // Get approved records
    public List<CustomerStaging> getApproved() {
        return repository.findByPickedStatus("S");
    }

    // Get rejected records
    public List<CustomerStaging> getRejected() {
        return repository.findByPickedStatus("REJECTED");
    }

    // Submit new customer - saves as PA (Pending Approval), does NOT go to ERP yet
    @Transactional
    public CustomerStaging submitCustomer(CustomerStaging customer) {
        Long nextId = repository.getNextCustomerId();
        customer.setCustomerId(nextId);
        customer.setOperatingUnit("BAMUL_OU");
        customer.setPickedStatus("PA");  // Pending Approval - NOT sent to ERP
        customer.setFileName("BAMUL_CUSTOMER_SITE_TEST.csv");
        customer.setCreationDate(new Date());
        customer.setCreatedBy(0L);
        if (customer.getCountry() == null) customer.setCountry("IN");
        if (customer.getSiteUseCode() == null) customer.setSiteUseCode("BILL_TO");
        if (customer.getCustomerStatus() == null) customer.setCustomerStatus("A");
        if (customer.getSiteStatus() == null) customer.setSiteStatus("A");
        if (customer.getSiteUseStatus() == null) customer.setSiteUseStatus("A");
        return repository.save(customer);
    }

    // Send email to all active masters when customer submitted
    public void notifyMastersForCustomer(CustomerStaging customer) {
        try {
            List<Object[]> masters = entityManager.createNativeQuery(
                "SELECT full_name, email_id FROM bamul_portal_master WHERE is_active = 'Y'"
            ).getResultList();

            String subject = "BAMUL Portal - New Customer Approval Request";
            String body = "Customer Name: " + customer.getCustomerName() + "\n" +
                "Account Number: " + customer.getAccountNumber() + "\n" +
                "Type: " + customer.getCustomerType() + "\n" +
                "City: " + customer.getCity() + "\n" +
                "Mobile: " + customer.getMobileNumber() + "\n\n" +
                "Please login to the Finance Approval page to approve or reject.\n\n" +
                "-- BAMUL Customer Master Portal";

            for (Object[] master : masters) {
                SimpleMailMessage message = new SimpleMailMessage();
                message.setTo((String) master[1]);
                message.setSubject(subject);
                message.setText("Dear " + master[0] + ",\n\n" + body);
                message.setFrom("guhashibashish@gmail.com");
                mailSender.send(message);
            }
        } catch (Exception e) {
            System.out.println("Customer notification email failed: " + e.getMessage());
        }
    }

    // Update document PDF path
    @Transactional
    public void updateDocPath(Long customerId, String column, String fileName) {
        entityManager.createNativeQuery(
            "UPDATE bamul_customer_det_stg SET " + column + " = :path WHERE customer_id = :id"
        ).setParameter("path", fileName)
         .setParameter("id", customerId)
         .executeUpdate();
    }

    // Get zone managers from local lookup table
    public List<Object[]> getZoneManagers() {
        return entityManager.createNativeQuery(
            "SELECT zone_code, manager_emp_number, manager_name FROM bamul_zone_manager_lookup ORDER BY zone_code"
        ).getResultList();
    }

    // Finance Head approves → insert into BAMUL_CUSTOMER_MASTER with status APPROVED
    @Transactional
    public String approveCustomer(Long customerId) {
        try {
            // Simply mark as approved - record stays in OCI database
            repository.updateStatus(customerId, "S");
            return "SUCCESS";
        } catch (Exception e) {
            repository.updateStatusWithReason(customerId, "E", e.getMessage());
            return "ERROR: " + e.getMessage();
        }
    }

    // Finance Head rejects
    @Transactional
    public void rejectCustomer(Long customerId, String reason) {
        repository.updateStatusWithReason(customerId, "REJECTED", reason);
    }
}
