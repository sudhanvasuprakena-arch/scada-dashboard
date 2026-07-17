package com.bamul.customermaster.controller;

import com.bamul.customermaster.entity.CustomerStaging;
import com.bamul.customermaster.service.CustomerStagingService;
import org.springframework.beans.factory.annotation.Autowired;
import javax.persistence.PersistenceContext;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.mail.internet.MimeMessage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.springframework.core.io.ByteArrayResource;

@RestController
@RequestMapping("/api/customer")
@CrossOrigin(origins = "*")
public class CustomerController {

    private static final String UPLOAD_DIR = System.getProperty("user.home") + "/customer-portal-uploads/";

    @Autowired
    private CustomerStagingService service;

    @PersistenceContext
    private javax.persistence.EntityManager entityManager;

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private com.bamul.customermaster.service.ActivityLogService activityLog;

    // Employee submits customer details → saved as Pending Approval
    @PostMapping("/submit")
    public ResponseEntity<Map<String, Object>> submitCustomer(@RequestBody CustomerStaging customer) {
        Map<String, Object> response = new HashMap<>();
        try {
            // Duplicate check - skip if this is an update (originalCustomerId is set)
            if (customer.getOriginalCustomerId() == null) {
                try {
                    List<Object> existing = entityManager.createNativeQuery(
                        "SELECT 1 FROM bamul_customer_det_stg WHERE UPPER(TRIM(customer_name)) = UPPER(TRIM(:name)) AND picked_status IN ('PA','S') AND ROWNUM = 1"
                    ).setParameter("name", customer.getCustomerName()).getResultList();
                    if (!existing.isEmpty()) {
                        response.put("status", "ERROR");
                        response.put("message", "Customer '" + customer.getCustomerName() + "' already exists or is pending approval.");
                        return ResponseEntity.ok(response);
                    }
                } catch (Exception e) {}
            }

            CustomerStaging saved = service.submitCustomer(customer);
            try { activityLog.log("CUSTOMER_MASTER", "SUBMIT_FOR_APPROVAL", "CUSTOMER", saved.getCustomerId(), saved.getCustomerName(), null, "PA", "Customer submitted for approval"); } catch (Exception e) { System.out.println("Activity log failed: " + e.getMessage()); }
            response.put("status", "SUCCESS");
            response.put("message", "Customer submitted for approval");
            response.put("customerId", saved.getCustomerId());
        } catch (Exception e) {
            e.printStackTrace();
            response.put("status", "ERROR");
            response.put("message", "Submit failed: " + e.getMessage());
        }
        return ResponseEntity.ok(response);
    }

    // Resubmit rejected customer - updates existing record
    @PostMapping("/resubmit/{customerId}")
    public ResponseEntity<Map<String, Object>> resubmitCustomer(@PathVariable Long customerId, @RequestBody CustomerStaging customer) {
        Map<String, Object> response = new HashMap<>();
        try {
            CustomerStaging existing = service.getById(customerId);
            if (existing == null) {
                response.put("status", "ERROR");
                response.put("message", "Customer not found");
                return ResponseEntity.ok(response);
            }
            // Only update fields that are provided, keep existing data intact
            existing.setPickedStatus("PA");
            existing.setErrorMsg(null);
            existing.setApprovedBy(null);
            if (customer.getCustomerName() != null) existing.setCustomerName(customer.getCustomerName());
            if (customer.getAccountNumber() != null) existing.setAccountNumber(customer.getAccountNumber());
            if (customer.getCustomerType() != null) existing.setCustomerType(customer.getCustomerType());
            if (customer.getCustomerClass() != null) existing.setCustomerClass(customer.getCustomerClass());
            if (customer.getCustomerClassification() != null) existing.setCustomerClassification(customer.getCustomerClassification());
            if (customer.getPriceList() != null) existing.setPriceList(customer.getPriceList());
            if (customer.getPanNo() != null) existing.setPanNo(customer.getPanNo());
            if (customer.getGstinNumber() != null) existing.setGstinNumber(customer.getGstinNumber());
            if (customer.getAadharNo() != null) existing.setAadharNo(customer.getAadharNo());
            if (customer.getEmailId() != null) existing.setEmailId(customer.getEmailId());
            if (customer.getPaymentTerms() != null) existing.setPaymentTerms(customer.getPaymentTerms());
            if (customer.getCreditLimit() != null) existing.setCreditLimit(customer.getCreditLimit());
            if (customer.getDeposit() != null) existing.setDeposit(customer.getDeposit());
            if (customer.getBankName() != null) existing.setBankName(customer.getBankName());
            if (customer.getBranchName() != null) existing.setBranchName(customer.getBranchName());
            if (customer.getBankAccountNumber() != null) existing.setBankAccountNumber(customer.getBankAccountNumber());
            if (customer.getIfscCode() != null) existing.setIfscCode(customer.getIfscCode());
            if (customer.getContactPerson() != null) existing.setContactPerson(customer.getContactPerson());
            if (customer.getMobileNumber() != null) existing.setMobileNumber(customer.getMobileNumber());
            if (customer.getBillAddressesJson() != null) existing.setBillAddressesJson(customer.getBillAddressesJson());
            if (customer.getShipAddressesJson() != null) existing.setShipAddressesJson(customer.getShipAddressesJson());
            if (customer.getAddress1() != null) existing.setAddress1(customer.getAddress1());
            if (customer.getAddress2() != null) existing.setAddress2(customer.getAddress2());
            if (customer.getCity() != null) existing.setCity(customer.getCity());
            if (customer.getState() != null) existing.setState(customer.getState());
            if (customer.getPostalCode() != null) existing.setPostalCode(customer.getPostalCode());
            if (customer.getLatitude() != null) existing.setLatitude(customer.getLatitude());
            if (customer.getLongitude() != null) existing.setLongitude(customer.getLongitude());
            if (customer.getSalesperson() != null) existing.setSalesperson(customer.getSalesperson());
            if (customer.getSalesrepEmpNumber() != null) existing.setSalesrepEmpNumber(customer.getSalesrepEmpNumber());
            if (customer.getOffOrdNo() != null) existing.setOffOrdNo(customer.getOffOrdNo());
            if (customer.getOffOrdDate() != null) existing.setOffOrdDate(customer.getOffOrdDate());
            if (customer.getNomineeName() != null) existing.setNomineeName(customer.getNomineeName());
            if (customer.getNomineeContact() != null) existing.setNomineeContact(customer.getNomineeContact());
            if (customer.getNomineeRelationship() != null) existing.setNomineeRelationship(customer.getNomineeRelationship());
            if (customer.getZoneCode() != null) existing.setZoneCode(customer.getZoneCode());
            if (customer.getZonalManager() != null) existing.setZonalManager(customer.getZonalManager());
            if (customer.getZonalManagerEmp() != null) existing.setZonalManagerEmp(customer.getZonalManagerEmp());
            if (customer.getArea() != null) existing.setArea(customer.getArea());
            if (customer.getWard() != null) existing.setWard(customer.getWard());
            if (customer.getProductsDistributor() != null) existing.setProductsDistributor(customer.getProductsDistributor());
            if (customer.getDistributorNumber() != null) existing.setDistributorNumber(customer.getDistributorNumber());
            if (customer.getIcecreamDistributor() != null) existing.setIcecreamDistributor(customer.getIcecreamDistributor());
            if (customer.getIcecreamDistNum() != null) existing.setIcecreamDistNum(customer.getIcecreamDistNum());
            if (customer.getSubmittedBy() != null) existing.setSubmittedBy(customer.getSubmittedBy());
            if (customer.getCorrAddressJson() != null) existing.setCorrAddressJson(customer.getCorrAddressJson());
            service.save(existing);
            try { activityLog.log("CUSTOMER_MASTER", "RESUBMIT", "CUSTOMER", customerId, existing.getCustomerName(), null, "PA", "Customer resubmitted after rejection"); } catch (Exception e) {}
            response.put("status", "SUCCESS");
            response.put("message", "Customer resubmitted for approval");
            response.put("customerId", customerId);
        } catch (Exception e) {
            response.put("status", "ERROR");
            response.put("message", "Resubmit failed: " + e.getMessage());
        }
        return ResponseEntity.ok(response);
    }

    // Finance Head gets pending customers
    @GetMapping("/pending")
    public ResponseEntity<List<CustomerStaging>> getPendingApproval() {
        return ResponseEntity.ok(service.getPendingApproval());
    }

    // Get all records
    @GetMapping("/all")
    public ResponseEntity<List<CustomerStaging>> getAll() {
        return ResponseEntity.ok(service.getAll());
    }

    // Search customers (approved ones from ERP)
    @GetMapping("/search")
    public ResponseEntity<List<CustomerStaging>> searchCustomers(@RequestParam String q) {
        return ResponseEntity.ok(service.searchCustomers(q));
    }

    @GetMapping("/detail/{custAccountId}")
    public ResponseEntity<Map<String, Object>> getCustomerDetail(@PathVariable Long custAccountId) {
        return ResponseEntity.ok(service.getCustomerDetail(custAccountId));
    }

    // Submit update request (creates new staging record with PA status)
    @PostMapping("/update-request")
    public ResponseEntity<Map<String, Object>> submitUpdateRequest(@RequestBody CustomerStaging customer) {
        Map<String, Object> response = new HashMap<>();
        try {
            CustomerStaging saved = service.submitUpdateRequest(customer);
            try { activityLog.log("CUSTOMER_MASTER", "UPDATE_REQUEST", "CUSTOMER", saved.getCustomerId(), saved.getCustomerName(), null, "PA", "Customer update submitted for approval"); } catch (Exception e) { System.out.println("Activity log failed: " + e.getMessage()); }
            response.put("status", "SUCCESS");
            response.put("message", "Update request submitted for approval");
        } catch (Exception e) {
            e.printStackTrace();
            response.put("status", "ERROR");
            response.put("message", "Update request failed: " + e.getMessage());
        }
        return ResponseEntity.ok(response);
    }

    // Finance Head approves → creates in ERP
    @PostMapping("/approve/{customerId}")
    @org.springframework.transaction.annotation.Transactional
    public ResponseEntity<Map<String, Object>> approveCustomer(@PathVariable Long customerId, @RequestBody(required = false) Map<String, String> body, javax.servlet.http.HttpServletRequest request) {
        Map<String, Object> response = new HashMap<>();
        try {
            String approver = request.getHeader("X-User");
            if (approver == null || approver.trim().isEmpty()) {
                response.put("status", "ERROR");
                response.put("message", "Missing X-User header for approver");
                return ResponseEntity.status(403).body(response);
            }
            // validate master
            try {
                List masterCheck = entityManager.createNativeQuery(
                    "SELECT 1 FROM bamul_portal_master WHERE UPPER(username) = UPPER(:uname) AND is_active = 'Y'"
                ).setParameter("uname", approver).getResultList();
                if (masterCheck.isEmpty()) {
                    response.put("status", "ERROR");
                    response.put("message", "User is not an active master");
                    return ResponseEntity.status(403).body(response);
                }
            } catch (Exception e) {
                response.put("status", "ERROR");
                response.put("message", "Approver validation failed: " + e.getMessage());
                return ResponseEntity.status(500).body(response);
            }
            // Store approver
            try {
                entityManager.createNativeQuery("UPDATE bamul_customer_det_stg SET approved_by = :ab WHERE customer_id = :id")
                    .setParameter("ab", approver).setParameter("id", customerId).executeUpdate();
            } catch (Exception e) {}
            String result = service.approveCustomer(customerId);
            if (result.equals("SUCCESS")) {
                response.put("status", "SUCCESS");
                response.put("message", "Customer approved and created in ERP");
                try { activityLog.log("CUSTOMER_MASTER", "APPROVED", "CUSTOMER", customerId, null, null, "SUCCESS", "Customer approved and created in ERP"); } catch (Exception e) {}
                sendCustomerStatusEmail(customerId, "APPROVED", null);
            } else {
                response.put("status", "ERROR");
                response.put("message", result);
                try { activityLog.log("CUSTOMER_MASTER", "APPROVE_FAILED", "CUSTOMER", customerId, null, null, "ERROR", result); } catch (Exception e) {}
            }
        } catch (Exception e) {
            e.printStackTrace();
            response.put("status", "ERROR");
            response.put("message", "Approval failed: " + e.getMessage());
        }
        return ResponseEntity.ok(response);
    }

    // Upload PAN card PDF
    @PostMapping("/upload-pan/{customerId}")
    public ResponseEntity<Map<String, Object>> uploadPanCard(
            @PathVariable Long customerId,
            @RequestParam("file") MultipartFile file) {
        Map<String, Object> response = new HashMap<>();
        try {
            File dir = new File(UPLOAD_DIR);
            if (!dir.exists()) dir.mkdirs();

            String fileName = "PAN_" + customerId + "_" + System.currentTimeMillis() + ".pdf";
            Path filePath = Paths.get(UPLOAD_DIR + fileName);
            Files.write(filePath, file.getBytes());

            service.updateDocPath(customerId, "pan_card_pdf_path", fileName);

            response.put("status", "SUCCESS");
            response.put("fileName", fileName);
        } catch (Exception e) {
            response.put("status", "ERROR");
            response.put("message", e.getMessage());
        }
        return ResponseEntity.ok(response);
    }

    // Upload Aadhaar card PDF
    @PostMapping("/upload-aadhar/{customerId}")
    public ResponseEntity<Map<String, Object>> uploadAadharCard(
            @PathVariable Long customerId,
            @RequestParam("file") MultipartFile file) {
        Map<String, Object> response = new HashMap<>();
        try {
            File dir = new File(UPLOAD_DIR);
            if (!dir.exists()) dir.mkdirs();

            String fileName = "AADHAR_" + customerId + "_" + System.currentTimeMillis() + ".pdf";
            Path filePath = Paths.get(UPLOAD_DIR + fileName);
            Files.write(filePath, file.getBytes());

            service.updateDocPath(customerId, "aadhar_card_pdf_path", fileName);

            response.put("status", "SUCCESS");
            response.put("fileName", fileName);
        } catch (Exception e) {
            response.put("status", "ERROR");
            response.put("message", e.getMessage());
        }
        return ResponseEntity.ok(response);
    }

    // Upload GST Certificate PDF
    @PostMapping("/upload-gst/{customerId}")
    public ResponseEntity<Map<String, Object>> uploadGstCert(
            @PathVariable Long customerId,
            @RequestParam("file") MultipartFile file) {
        Map<String, Object> response = new HashMap<>();
        try {
            File dir = new File(UPLOAD_DIR);
            if (!dir.exists()) dir.mkdirs();

            String fileName = "GST_" + customerId + "_" + System.currentTimeMillis() + ".pdf";
            Path filePath = Paths.get(UPLOAD_DIR + fileName);
            Files.write(filePath, file.getBytes());

            service.updateDocPath(customerId, "gst_cert_pdf_path", fileName);

            response.put("status", "SUCCESS");
            response.put("fileName", fileName);
        } catch (Exception e) {
            response.put("status", "ERROR");
            response.put("message", e.getMessage());
        }
        return ResponseEntity.ok(response);
    }

    // Upload Cancelled Cheque PDF
    @PostMapping("/upload-cheque/{customerId}")
    public ResponseEntity<Map<String, Object>> uploadCheque(
            @PathVariable Long customerId,
            @RequestParam("file") MultipartFile file) {
        Map<String, Object> response = new HashMap<>();
        try {
            File dir = new File(UPLOAD_DIR);
            if (!dir.exists()) dir.mkdirs();

            String fileName = "CHEQUE_" + customerId + "_" + System.currentTimeMillis() + ".pdf";
            Path filePath = Paths.get(UPLOAD_DIR + fileName);
            Files.write(filePath, file.getBytes());

            service.updateDocPath(customerId, "cancelled_cheque_pdf_path", fileName);

            response.put("status", "SUCCESS");
            response.put("fileName", fileName);
        } catch (Exception e) {
            response.put("status", "ERROR");
            response.put("message", e.getMessage());
        }
        return ResponseEntity.ok(response);
    }

    @PostMapping("/upload-nominee-doc/{customerId}")
    public ResponseEntity<Map<String, Object>> uploadNomineeDoc(
            @PathVariable Long customerId,
            @RequestParam("file") MultipartFile file) {
        Map<String, Object> response = new HashMap<>();
        try {
            File dir = new File(UPLOAD_DIR);
            if (!dir.exists()) dir.mkdirs();

            String fileName = "NOMINEE_" + customerId + "_" + System.currentTimeMillis() + ".pdf";
            Path filePath = Paths.get(UPLOAD_DIR + fileName);
            Files.write(filePath, file.getBytes());

            // Append to existing nominee doc paths (comma-separated)
            CustomerStaging existing = service.getById(customerId);
            String existingPath = existing != null ? existing.getNomineeDocPdfPath() : null;
            String newPath = (existingPath != null && !existingPath.isEmpty()) ? existingPath + "," + fileName : fileName;
            service.updateDocPath(customerId, "nominee_doc_pdf_path", newPath);

            response.put("status", "SUCCESS");
            response.put("fileName", fileName);
        } catch (Exception e) {
            response.put("status", "ERROR");
            response.put("message", e.getMessage());
        }
        return ResponseEntity.ok(response);
    }

    @PostMapping("/remove-nominee-doc/{customerId}")
    public ResponseEntity<Map<String, Object>> removeNomineeDoc(
            @PathVariable Long customerId,
            @RequestBody Map<String, String> body) {
        Map<String, Object> response = new HashMap<>();
        try {
            String fileNameToRemove = body.get("fileName");
            CustomerStaging existing = service.getById(customerId);
            if (existing != null && existing.getNomineeDocPdfPath() != null) {
                String[] parts = existing.getNomineeDocPdfPath().split(",");
                String newPath = java.util.Arrays.stream(parts)
                    .map(String::trim)
                    .filter(f -> !f.equals(fileNameToRemove))
                    .collect(java.util.stream.Collectors.joining(","));
                service.updateDocPath(customerId, "nominee_doc_pdf_path", newPath);
                File file = new File(UPLOAD_DIR + fileNameToRemove);
                if (file.exists()) file.delete();
            }
            response.put("status", "SUCCESS");
        } catch (Exception e) {
            response.put("status", "ERROR");
            response.put("message", e.getMessage());
        }
        return ResponseEntity.ok(response);
    }

    @PostMapping("/upload-can/{customerId}")
    public ResponseEntity<Map<String, Object>> uploadCanCert(
            @PathVariable Long customerId,
            @RequestParam("file") MultipartFile file) {
        Map<String, Object> response = new HashMap<>();
        try {
            File dir = new File(UPLOAD_DIR);
            if (!dir.exists()) dir.mkdirs();
            String fileName = "CAN_" + customerId + "_" + System.currentTimeMillis() + ".pdf";
            Files.write(Paths.get(UPLOAD_DIR + fileName), file.getBytes());
            service.updateDocPath(customerId, "can_cert_pdf_path", fileName);
            response.put("status", "SUCCESS");
            response.put("fileName", fileName);
        } catch (Exception e) {
            response.put("status", "ERROR");
            response.put("message", e.getMessage());
        }
        return ResponseEntity.ok(response);
    }

    @PostMapping("/upload-order-doc/{customerId}")
    public ResponseEntity<Map<String, Object>> uploadOrderDoc(
            @PathVariable Long customerId,
            @RequestParam("file") MultipartFile file) {
        Map<String, Object> response = new HashMap<>();
        try {
            File dir = new File(UPLOAD_DIR);
            if (!dir.exists()) dir.mkdirs();

            String fileName = "ORDER_" + customerId + "_" + System.currentTimeMillis() + ".pdf";
            Path filePath = Paths.get(UPLOAD_DIR + fileName);
            Files.write(filePath, file.getBytes());

            service.updateDocPath(customerId, "order_doc_pdf_path", fileName);

            response.put("status", "SUCCESS");
            response.put("fileName", fileName);
        } catch (Exception e) {
            response.put("status", "ERROR");
            response.put("message", e.getMessage());
        }
        return ResponseEntity.ok(response);
    }

    // Download/View document PDF
    @GetMapping("/doc/{fileName}")
    public ResponseEntity<Resource> viewDoc(@PathVariable String fileName) {
        try {
            Path filePath = Paths.get(UPLOAD_DIR + fileName);
            Resource resource = new UrlResource(filePath.toUri());
            return ResponseEntity.ok()
                    .contentType(MediaType.APPLICATION_PDF)
                    .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + fileName + "\"")
                    .body(resource);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/docs/{customerId}")
    public ResponseEntity<java.util.List<Map<String, String>>> listDocs(@PathVariable Long customerId) {
        java.util.List<Map<String, String>> docs = new java.util.ArrayList<>();
        try {
            CustomerStaging cust = service.getById(customerId);
            if (cust != null) {
                if (cust.getPanCardPdfPath() != null) { Map<String, String> d = new HashMap<>(); d.put("docType", "PAN"); d.put("fileName", cust.getPanCardPdfPath()); docs.add(d); }
                if (cust.getAadharCardPdfPath() != null) { Map<String, String> d = new HashMap<>(); d.put("docType", "AADHAR"); d.put("fileName", cust.getAadharCardPdfPath()); docs.add(d); }
                if (cust.getGstCertPdfPath() != null) { Map<String, String> d = new HashMap<>(); d.put("docType", "GST"); d.put("fileName", cust.getGstCertPdfPath()); docs.add(d); }
                if (cust.getCancelledChequePdfPath() != null) { Map<String, String> d = new HashMap<>(); d.put("docType", "CHEQUE"); d.put("fileName", cust.getCancelledChequePdfPath()); docs.add(d); }
                if (cust.getCanCertPdfPath() != null) { Map<String, String> d = new HashMap<>(); d.put("docType", "CAN"); d.put("fileName", cust.getCanCertPdfPath()); docs.add(d); }
                if (cust.getNomineeDocPdfPath() != null) { Map<String, String> d = new HashMap<>(); d.put("docType", "NOMINEE"); d.put("fileName", cust.getNomineeDocPdfPath()); docs.add(d); }
            }
        } catch (Exception e) {
            System.out.println("Doc list failed: " + e.getMessage());
        }
        return ResponseEntity.ok(docs);
    }

    // Search customers for update - first OCI, then legacy
    @GetMapping("/search-for-update")
    public ResponseEntity<List<Map<String, Object>>> searchForUpdate(@RequestParam String q) {
        List<Map<String, Object>> results = new java.util.ArrayList<>();
        try {
            // First search OCI local database
            List<Object[]> ociRows = entityManager.createNativeQuery(
                "SELECT customer_id, customer_name, account_number, customer_type, customer_class, picked_status " +
                "FROM bamul_customer_det_stg WHERE UPPER(customer_name) LIKE UPPER(:q) OR account_number LIKE :q ORDER BY customer_id DESC"
            ).setParameter("q", "%" + q + "%").getResultList();
            for (Object[] r : ociRows) {
                Map<String, Object> m = new java.util.HashMap<>();
                m.put("customerId", r[0]); m.put("customerName", r[1]); m.put("accountNumber", r[2]);
                m.put("customerType", r[3]); m.put("customerClass", r[4]); m.put("status", r[5]);
                m.put("source", "OCI");
                results.add(m);
            }
            // Then search legacy BMLPROD
            java.sql.Connection bmlConn = null;
            try {
                bmlConn = java.sql.DriverManager.getConnection(
                    "jdbc:oracle:thin:@115.124.111.4:1521:BMLPROD", "apps_readonly", "GsdjdRuta975");
                java.sql.PreparedStatement ps = bmlConn.prepareStatement(
                    "SELECT hca.cust_account_id, hp.party_name, hca.account_number, hp.party_type, hca.customer_class_code " +
                    "FROM apps.hz_cust_accounts hca, apps.hz_parties hp WHERE hca.party_id = hp.party_id " +
                    "AND (UPPER(hp.party_name) LIKE UPPER(?) OR hca.account_number LIKE ?) AND ROWNUM <= 50");
                ps.setString(1, "%" + q + "%");
                ps.setString(2, "%" + q + "%");
                java.sql.ResultSet rs = ps.executeQuery();
                while (rs.next()) {
                    // Skip if already found in OCI by account number
                    String accNum = rs.getString(3);
                    boolean alreadyInOci = results.stream().anyMatch(r2 -> accNum != null && accNum.equals(r2.get("accountNumber")));
                    if (!alreadyInOci) {
                        Map<String, Object> m = new java.util.HashMap<>();
                        m.put("customerId", rs.getLong(1)); m.put("customerName", rs.getString(2));
                        m.put("accountNumber", rs.getString(3)); m.put("customerType", rs.getString(4));
                        m.put("customerClass", rs.getString(5)); m.put("status", "LEGACY");
                        m.put("source", "LEGACY");
                        results.add(m);
                    }
                }
                rs.close(); ps.close(); bmlConn.close();
            } catch (Exception e) {
                System.out.println("Legacy search failed: " + e.getMessage());
            } finally {
                if (bmlConn != null) try { bmlConn.close(); } catch (Exception e) {}
            }
        } catch (Exception e) {
            System.out.println("Search for update failed: " + e.getMessage());
        }
        return ResponseEntity.ok(results);
    }

    // Get full customer detail from legacy for update
    @GetMapping("/legacy-detail/{custAccountId}")
    public ResponseEntity<Map<String, Object>> getLegacyDetail(@PathVariable Long custAccountId) {
        Map<String, Object> detail = new java.util.HashMap<>();
        java.sql.Connection bmlConn = null;
        try {
            bmlConn = java.sql.DriverManager.getConnection(
                "jdbc:oracle:thin:@115.124.111.4:1521:BMLPROD", "apps_readonly", "GsdjdRuta975");
            java.sql.PreparedStatement ps = bmlConn.prepareStatement(
                "SELECT hp.party_name, hca.account_number, hp.party_type, hca.customer_class_code, " +
                "hl.address1, hl.address2, hl.city, hl.state, hl.postal_code, hl.country, " +
                "hcp_phone.phone_number, hcp_email.email_address, hp.jgzz_fiscal_code " +
                "FROM apps.hz_cust_accounts hca " +
                "JOIN apps.hz_parties hp ON hca.party_id = hp.party_id " +
                "LEFT JOIN apps.hz_party_sites hps ON hp.party_id = hps.party_id AND hps.identifying_address_flag = 'Y' " +
                "LEFT JOIN apps.hz_locations hl ON hps.location_id = hl.location_id " +
                "LEFT JOIN apps.hz_contact_points hcp_phone ON hp.party_id = hcp_phone.owner_table_id AND hcp_phone.owner_table_name = 'HZ_PARTIES' AND hcp_phone.contact_point_type = 'PHONE' AND hcp_phone.primary_flag = 'Y' AND ROWNUM = 1 " +
                "LEFT JOIN apps.hz_contact_points hcp_email ON hp.party_id = hcp_email.owner_table_id AND hcp_email.owner_table_name = 'HZ_PARTIES' AND hcp_email.contact_point_type = 'EMAIL' AND hcp_email.primary_flag = 'Y' AND ROWNUM = 1 " +
                "WHERE hca.cust_account_id = ? AND ROWNUM = 1");
            ps.setLong(1, custAccountId);
            java.sql.ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                detail.put("customerId", custAccountId);
                detail.put("customerName", rs.getString(1));
                detail.put("accountNumber", rs.getString(2));
                detail.put("customerType", rs.getString(3));
                detail.put("customerClass", rs.getString(4));
                detail.put("address1", rs.getString(5));
                detail.put("address2", rs.getString(6));
                detail.put("city", rs.getString(7));
                detail.put("state", rs.getString(8));
                detail.put("postalCode", rs.getString(9));
                detail.put("country", rs.getString(10));
                detail.put("mobileNumber", rs.getString(11));
                detail.put("emailId", rs.getString(12));
                detail.put("panNo", rs.getString(13));
                detail.put("source", "LEGACY");
            }
            rs.close(); ps.close();
        } catch (Exception e) {
            detail.put("error", e.getMessage());
        } finally {
            if (bmlConn != null) try { bmlConn.close(); } catch (Exception e) {}
        }
        return ResponseEntity.ok(detail);
    }

    // Get bank names from BMLPROD
    @GetMapping("/banks")
    public ResponseEntity<java.util.List<String>> getBanks() {
        java.util.List<String> banks = new java.util.ArrayList<>();
        java.sql.Connection bmlConn = null;
        try {
            bmlConn = java.sql.DriverManager.getConnection(
                "jdbc:oracle:thin:@115.124.111.4:1521:BMLPROD", "apps_readonly", "GsdjdRuta975");
            java.sql.PreparedStatement ps = bmlConn.prepareStatement(
                "SELECT DISTINCT bank_name FROM apps.ce_banks_v WHERE bank_name IS NOT NULL ORDER BY bank_name");
            java.sql.ResultSet rs = ps.executeQuery();
            while (rs.next()) banks.add(rs.getString(1).trim());
            rs.close(); ps.close();
        } catch (Exception e) {
            System.out.println("Bank fetch failed: " + e.getMessage());
        } finally {
            try { if (bmlConn != null) bmlConn.close(); } catch (Exception e) {}
        }
        return ResponseEntity.ok(banks);
    }

    // Get branches by bank name from BMLPROD
    @GetMapping("/branches")
    public ResponseEntity<java.util.List<String>> getBranches(@RequestParam String bankName) {
        java.util.List<String> branches = new java.util.ArrayList<>();
        java.sql.Connection bmlConn = null;
        try {
            bmlConn = java.sql.DriverManager.getConnection(
                "jdbc:oracle:thin:@115.124.111.4:1521:BMLPROD", "apps_readonly", "GsdjdRuta975");
            java.sql.PreparedStatement ps = bmlConn.prepareStatement(
                "SELECT DISTINCT bank_branch_name FROM apps.ce_bank_branches_v WHERE bank_name = ? AND bank_branch_name IS NOT NULL ORDER BY bank_branch_name");
            ps.setString(1, bankName);
            java.sql.ResultSet rs = ps.executeQuery();
            while (rs.next()) branches.add(rs.getString(1).trim());
            rs.close(); ps.close();
        } catch (Exception e) {
            System.out.println("Branch fetch failed: " + e.getMessage());
        } finally {
            try { if (bmlConn != null) bmlConn.close(); } catch (Exception e) {}
        }
        return ResponseEntity.ok(branches);
    }

    // Get zone managers from lookup
    @GetMapping("/zone-managers")
    public ResponseEntity<List<Map<String, String>>> getZoneManagers() {
        List<Map<String, String>> result = new java.util.ArrayList<>();
        try {
            List<Object[]> rows = service.getZoneManagers();
            for (Object[] row : rows) {
                Map<String, String> map = new HashMap<>();
                map.put("zone", row[0] != null ? row[0].toString() : "");
                map.put("empNumber", row[1] != null ? row[1].toString() : "");
                map.put("name", row[2] != null ? row[2].toString() : "");
                result.add(map);
            }
        } catch (Exception e) {
            System.out.println("Zone manager fetch failed: " + e.getMessage());
        }
        return ResponseEntity.ok(result);
    }

    @GetMapping("/bank-names")
    public ResponseEntity<List<String>> getBankNames() {
        List<String> banks = new java.util.ArrayList<>();
        try {
            List<Object> rows = entityManager.createNativeQuery(
                "SELECT DISTINCT bank_name FROM bamul_bank_branch_lookup ORDER BY bank_name"
            ).getResultList();
            for (Object o : rows) if (o != null) banks.add(o.toString());
        } catch (Exception e) {
            System.out.println("Bank names fetch failed: " + e.getMessage());
        }
        return ResponseEntity.ok(banks);
    }

    @GetMapping("/order-types")
    public ResponseEntity<List<String>> getOrderTypes() {
        List<String> orderTypes = new java.util.ArrayList<>();
        try {
            List<Object> rows = entityManager.createNativeQuery(
                "SELECT order_type_name FROM bamul_order_type_lookup WHERE is_active = 'Y' ORDER BY order_type_name"
            ).getResultList();
            for (Object o : rows) if (o != null) orderTypes.add(o.toString());
        } catch (Exception e) {
            System.out.println("Order types fetch failed: " + e.getMessage());
        }
        return ResponseEntity.ok(orderTypes);
    }
    // Finance Head rejects
    @PostMapping("/reject/{customerId}")
    @org.springframework.transaction.annotation.Transactional
    public ResponseEntity<Map<String, Object>> rejectCustomer(
            @PathVariable Long customerId,
            @RequestBody Map<String, String> body,
            javax.servlet.http.HttpServletRequest request) {
        Map<String, Object> response = new HashMap<>();
        try {
            String reason = body.get("reason");
            String approver = request.getHeader("X-User");
            if (approver == null || approver.trim().isEmpty()) {
                response.put("status", "ERROR");
                response.put("message", "Missing X-User header for approver");
                return ResponseEntity.status(403).body(response);
            }
            try {
                List masterCheck = entityManager.createNativeQuery(
                    "SELECT 1 FROM bamul_portal_master WHERE UPPER(username) = UPPER(:uname) AND is_active = 'Y'"
                ).setParameter("uname", approver).getResultList();
                if (masterCheck.isEmpty()) {
                    response.put("status", "ERROR");
                    response.put("message", "User is not an active master");
                    return ResponseEntity.status(403).body(response);
                }
            } catch (Exception e) {
                response.put("status", "ERROR");
                response.put("message", "Approver validation failed: " + e.getMessage());
                return ResponseEntity.status(500).body(response);
            }
            try { entityManager.createNativeQuery("UPDATE bamul_customer_det_stg SET approved_by = :ab WHERE customer_id = :id").setParameter("ab", approver).setParameter("id", customerId).executeUpdate(); } catch (Exception e) {}
            service.rejectCustomer(customerId, reason);
            try { activityLog.log("CUSTOMER_MASTER", "REJECTED", "CUSTOMER", customerId, null, null, "REJECTED", reason); } catch (Exception e) {}
            sendCustomerStatusEmail(customerId, "REJECTED", reason);
            response.put("status", "SUCCESS");
            response.put("message", "Customer rejected");
        } catch (Exception e) {
            e.printStackTrace();
            response.put("status", "ERROR");
            response.put("message", "Rejection failed: " + e.getMessage());
        }
        return ResponseEntity.ok(response);
    }

    private static final String[] MASTER_CREATION_TEAM = {
        "pallavi5102@bamul.coop", "naveenkumars4839@bamul.coop",
        "shrutigovind5428@bamul.coop", "erpproject@bamul.coop", "sudha5443@bamul.coop"
    };

    private void sendCustomerStatusEmail(Long customerId, String status, String reason) {
        new Thread(() -> sendCustomerStatusEmailInternal(customerId, status, reason)).start();
    }

    private void sendCustomerStatusEmailInternal(Long customerId, String status, String reason) {
        try {
            CustomerStaging cust = service.getById(customerId);
            if (cust == null) return;

            String toEmail = null;
            if (cust.getSubmittedBy() != null && !cust.getSubmittedBy().isEmpty()) {
                try {
                    List<Object> emailResult = entityManager.createNativeQuery(
                        "SELECT email_id FROM bamul_portal_user_reg WHERE UPPER(username) = UPPER(:u)"
                    ).setParameter("u", cust.getSubmittedBy()).getResultList();
                    if (!emailResult.isEmpty() && emailResult.get(0) != null) toEmail = emailResult.get(0).toString();
                } catch (Exception e) {}
            }
            if (toEmail == null || toEmail.isEmpty()) toEmail = cust.getEmailId();
            if (toEmail == null || toEmail.isEmpty()) return;

            List<String> ccEmails = new java.util.ArrayList<>();
            try {
                List<Object> mList = entityManager.createNativeQuery("SELECT email_id FROM bamul_portal_master WHERE is_active = 'Y' AND email_id IS NOT NULL").getResultList();
                for (Object o : mList) if (o != null) ccEmails.add(o.toString());
            } catch (Exception e) {}

            if ("APPROVED".equals(status)) {
                // Send with PDF attachment to submitter + CC masters + master creation team
                for (String t : MASTER_CREATION_TEAM) if (!ccEmails.contains(t)) ccEmails.add(t);
                MimeMessage mime = mailSender.createMimeMessage();
                MimeMessageHelper helper = new MimeMessageHelper(mime, true);
                helper.setFrom("guhashibashish@gmail.com");
                helper.setTo(toEmail);
                helper.setCc(ccEmails.toArray(new String[0]));
                helper.setSubject("BAMUL - Customer '" + cust.getCustomerName() + "' Approved");
                helper.setText("Dear User,\n\nThe customer you submitted has been APPROVED.\n\nCustomer Name: " + cust.getCustomerName() + "\nAccount Number: " + (cust.getAccountNumber() != null ? cust.getAccountNumber() : "Pending") + "\n\nPlease find attached the customer details PDF.\n\n-- BAMUL Customer Master Portal");
                byte[] pdf = generateCustomerPdf(cust);
                helper.addAttachment("Customer_" + cust.getCustomerName().replaceAll("\\s+", "_") + ".pdf", new ByteArrayResource(pdf));
                mailSender.send(mime);
            } else {
                SimpleMailMessage message = new SimpleMailMessage();
                message.setTo(toEmail);
                message.setFrom("guhashibashish@gmail.com");
                message.setSubject("BAMUL - Customer '" + cust.getCustomerName() + "' Rejected");
                message.setText("Dear User,\n\nThe customer you submitted has been REJECTED.\n\nCustomer Name: " + cust.getCustomerName() + "\nReason: " + (reason != null ? reason : "Not specified") + "\n\nPlease correct the issues and resubmit.\n\n-- BAMUL Customer Master Portal");
                mailSender.send(message);
            }
        } catch (Exception e) {
            System.out.println("Customer status email failed: " + e.getMessage());
            e.printStackTrace();
        }
    }

    private byte[] generateCustomerPdf(CustomerStaging c) throws Exception {
        // Parse correspondence address from JSON
        String corrAddr1 = null, corrAddr2 = null, corrCity = null, corrState = null, corrPostalCode = null;
        if (c.getCorrAddressJson() != null && !c.getCorrAddressJson().isEmpty()) {
            try {
                corrAddr1 = extractJsonVal(c.getCorrAddressJson(), "address1");
                corrAddr2 = extractJsonVal(c.getCorrAddressJson(), "address2");
                corrCity = extractJsonVal(c.getCorrAddressJson(), "city");
                corrState = extractJsonVal(c.getCorrAddressJson(), "state");
                corrPostalCode = extractJsonVal(c.getCorrAddressJson(), "postalCode");
            } catch (Exception e) {}
        }
        if (corrAddr1 == null || corrAddr1.isEmpty()) {
            corrAddr1 = c.getAddress1(); corrAddr2 = c.getAddress2();
            corrCity = c.getCity(); corrState = c.getState(); corrPostalCode = c.getPostalCode();
        }

        PDDocument doc = new PDDocument();
        PDPage page = new PDPage();
        doc.addPage(page);
        PDPageContentStream cs = new PDPageContentStream(doc, page);
        float y = 760;
        float lm = 50;

        // Header
        cs.setFont(PDType1Font.HELVETICA_BOLD, 16);
        cs.beginText(); cs.newLineAtOffset(lm, y); cs.showText("BAMUL - Customer Details"); cs.endText(); y -= 30;

        // Section helper - matches frontend downloadPdf() exactly
        String[][][] sections = {
            {{"Basic Information"}, {"Customer Name", c.getCustomerName()}, {"Account Number", c.getAccountNumber()}, {"Customer Type", c.getCustomerType()}, {"Customer Classification", c.getCustomerClassification()}, {"B2B / B2C", c.getCustomerClass()}, {"Price List", c.getPriceList()}, {"Primary Order Type", c.getPrimaryOrderType()}, {"Customer Email", c.getEmailId()}, {"PAN No", c.getPanNo()}, {"GSTIN", c.getGstinNumber()}, {"Aadhaar No", c.getAadharNo()}},
            {{"Correspondence Address"}, {"Address", ((corrAddr1 != null ? corrAddr1 : "") + " " + (corrAddr2 != null ? corrAddr2 : "")).trim()}, {"City / State", ((corrCity != null ? corrCity : "") + ", " + (corrState != null ? corrState : ""))}, {"Postal Code", corrPostalCode}},
            {{"Contact Details"}, {"Contact Person", c.getContactPerson()}, {"Mobile", c.getMobileNumber() != null ? "+91 " + c.getMobileNumber() : null}, {"Email", c.getEmailId()}},
            {{"Sales Details"}, {"Salesperson", c.getSalesperson()}, {"Salesrep Emp No", c.getSalesrepEmpNumber()}},
            {{"Payment & Order Details"}, {"Payment Terms", c.getPaymentTerms()}, {"Credit Limit", c.getCreditLimit() != null ? "\u20B9 " + c.getCreditLimit().toString() : null}, {"Deposit", c.getDeposit() != null ? "\u20B9 " + c.getDeposit().toString() : null}, {"FDR Number", c.getFdrNumber()}, {"Off Ord No", c.getOffOrdNo()}, {"Off Ord Date", c.getOffOrdDate() != null ? c.getOffOrdDate().toString() : null}, {"Primary Order Type", c.getPrimaryOrderType()}},
            {{"Zone / Area"}, {"Zone Code", c.getZoneCode()}, {"Area", c.getArea()}, {"Sub Area", c.getSubArea()}, {"Ward", c.getWard()}, {"Zonal Manager", c.getZonalManager()}, {"Zonal Manager Emp No", c.getZonalManagerEmp()}},
            {{"Nominee Details"}, {"Nominee Name", c.getNomineeName()}, {"Nominee Contact", c.getNomineeContact() != null ? "+91 " + c.getNomineeContact() : null}, {"Relationship", c.getNomineeRelationship()}},
            {{"Distributor Information"}, {"Products Distributor", c.getProductsDistributor()}, {"Distributor Number", c.getDistributorNumber()}, {"Icecream Distributor", c.getIcecreamDistributor()}, {"Icecream Dist Num", c.getIcecreamDistNum()}},
            {{"Additional Information"}, {"Remarks", c.getAdditionalInfo()}}
        };

        for (String[][] section : sections) {
            if (y < 80) { cs.close(); page = new PDPage(); doc.addPage(page); cs = new PDPageContentStream(doc, page); y = 760; }
            // Section title
            cs.setFont(PDType1Font.HELVETICA_BOLD, 11);
            cs.beginText(); cs.newLineAtOffset(lm, y); cs.showText(section[0][0]); cs.endText(); y -= 3;
            cs.setStrokingColor(0, 102, 204);
            cs.moveTo(lm, y); cs.lineTo(550, y); cs.stroke(); y -= 14;
            // Fields
            for (int i = 1; i < section.length; i++) {
                if (y < 40) { cs.close(); page = new PDPage(); doc.addPage(page); cs = new PDPageContentStream(doc, page); y = 760; }
                cs.setFont(PDType1Font.HELVETICA_BOLD, 9);
                cs.beginText(); cs.newLineAtOffset(lm, y); cs.showText(section[i][0] + ":"); cs.endText();
                String val = sanitizeForPdf((section[i][1] != null && !section[i][1].isEmpty()) ? section[i][1] : "-");
                // Wrap long text across multiple lines
                int maxChars = 55;
                float valX = lm + 130;
                while (val.length() > 0) {
                    String line = val.length() > maxChars ? val.substring(0, maxChars) : val;
                    cs.setFont(PDType1Font.HELVETICA, 9);
                    cs.beginText(); cs.newLineAtOffset(valX, y); cs.showText(line); cs.endText();
                    val = val.length() > maxChars ? val.substring(maxChars) : "";
                    if (val.length() > 0) { y -= 12; if (y < 40) { cs.close(); page = new PDPage(); doc.addPage(page); cs = new PDPageContentStream(doc, page); y = 760; } }
                }
                y -= 14;
            }
            y -= 8;
        }

        // Bill To Address - parse from JSON
        if (y < 80) { cs.close(); page = new PDPage(); doc.addPage(page); cs = new PDPageContentStream(doc, page); y = 760; }
        cs.setFont(PDType1Font.HELVETICA_BOLD, 11);
        cs.beginText(); cs.newLineAtOffset(lm, y); cs.showText("Bill To Address"); cs.endText(); y -= 3;
        cs.setStrokingColor(0, 102, 204);
        cs.moveTo(lm, y); cs.lineTo(550, y); cs.stroke(); y -= 14;

        String billJson = c.getBillAddressesJson();
        if (billJson != null && !billJson.isEmpty() && billJson.startsWith("[")) {
            String[] billAddrs = billJson.split("\\},\\{");
            int addrNum = 0;
            for (String addrStr : billAddrs) {
                addrNum++;
                if (billAddrs.length > 1) {
                    if (y < 40) { cs.close(); page = new PDPage(); doc.addPage(page); cs = new PDPageContentStream(doc, page); y = 760; }
                    cs.setFont(PDType1Font.HELVETICA_BOLD, 9);
                    cs.beginText(); cs.newLineAtOffset(lm, y); cs.showText("Address " + addrNum); cs.endText(); y -= 14;
                }
                String[][] addrFields = {{"Address", (extractJsonVal(addrStr, "address1") + " " + extractJsonVal(addrStr, "address2")).trim()}, {"City / State", extractJsonVal(addrStr, "city") + ", " + extractJsonVal(addrStr, "state")}, {"Postal Code", extractJsonVal(addrStr, "postalCode")}, {"Latitude", extractJsonVal(addrStr, "latitude")}, {"Longitude", extractJsonVal(addrStr, "longitude")}};
                for (String[] field : addrFields) {
                    if (y < 40) { cs.close(); page = new PDPage(); doc.addPage(page); cs = new PDPageContentStream(doc, page); y = 760; }
                    cs.setFont(PDType1Font.HELVETICA_BOLD, 9);
                    cs.beginText(); cs.newLineAtOffset(lm, y); cs.showText(field[0] + ":"); cs.endText();
                    String val = sanitizeForPdf((field[1] != null && !field[1].isEmpty()) ? field[1] : "-");
                    int maxChars = 55; float valX = lm + 130;
                    while (val.length() > 0) {
                        String line = val.length() > maxChars ? val.substring(0, maxChars) : val;
                        cs.setFont(PDType1Font.HELVETICA, 9);
                        cs.beginText(); cs.newLineAtOffset(valX, y); cs.showText(line); cs.endText();
                        val = val.length() > maxChars ? val.substring(maxChars) : "";
                        if (val.length() > 0) { y -= 12; if (y < 40) { cs.close(); page = new PDPage(); doc.addPage(page); cs = new PDPageContentStream(doc, page); y = 760; } }
                    }
                    y -= 14;
                }
                y -= 5;
            }
        } else {
            String[][] addrFields = {{"Address", ((c.getAddress1() != null ? c.getAddress1() : "") + " " + (c.getAddress2() != null ? c.getAddress2() : "")).trim()}, {"City / State", (c.getCity() != null ? c.getCity() : "") + ", " + (c.getState() != null ? c.getState() : "")}, {"Postal Code", c.getPostalCode()}, {"Latitude", c.getLatitude()}, {"Longitude", c.getLongitude()}};
            for (String[] field : addrFields) {
                if (y < 40) { cs.close(); page = new PDPage(); doc.addPage(page); cs = new PDPageContentStream(doc, page); y = 760; }
                cs.setFont(PDType1Font.HELVETICA_BOLD, 9);
                cs.beginText(); cs.newLineAtOffset(lm, y); cs.showText(field[0] + ":"); cs.endText();
                String val = sanitizeForPdf((field[1] != null && !field[1].isEmpty()) ? field[1] : "-");
                int maxChars = 55; float valX = lm + 130;
                while (val.length() > 0) {
                    String line = val.length() > maxChars ? val.substring(0, maxChars) : val;
                    cs.setFont(PDType1Font.HELVETICA, 9);
                    cs.beginText(); cs.newLineAtOffset(valX, y); cs.showText(line); cs.endText();
                    val = val.length() > maxChars ? val.substring(maxChars) : "";
                    if (val.length() > 0) { y -= 12; if (y < 40) { cs.close(); page = new PDPage(); doc.addPage(page); cs = new PDPageContentStream(doc, page); y = 760; } }
                }
                y -= 14;
            }
        }
        y -= 8;

        // Ship To Address - parse from JSON
        String shipJson = c.getShipAddressesJson();
        if (shipJson != null && !shipJson.isEmpty() && shipJson.startsWith("[")) {
            if (y < 80) { cs.close(); page = new PDPage(); doc.addPage(page); cs = new PDPageContentStream(doc, page); y = 760; }
            cs.setFont(PDType1Font.HELVETICA_BOLD, 11);
            cs.beginText(); cs.newLineAtOffset(lm, y); cs.showText("Ship To Address"); cs.endText(); y -= 3;
            cs.setStrokingColor(0, 102, 204);
            cs.moveTo(lm, y); cs.lineTo(550, y); cs.stroke(); y -= 14;

            String[] shipAddrs = shipJson.split("\\},\\{");
            int addrNum = 0;
            for (String addrStr : shipAddrs) {
                addrNum++;
                if (shipAddrs.length > 1) {
                    if (y < 40) { cs.close(); page = new PDPage(); doc.addPage(page); cs = new PDPageContentStream(doc, page); y = 760; }
                    cs.setFont(PDType1Font.HELVETICA_BOLD, 9);
                    cs.beginText(); cs.newLineAtOffset(lm, y); cs.showText("Address " + addrNum); cs.endText(); y -= 14;
                }
                String[][] addrFields = {{"Address", (extractJsonVal(addrStr, "address1") + " " + extractJsonVal(addrStr, "address2")).trim()}, {"City / State", extractJsonVal(addrStr, "city") + ", " + extractJsonVal(addrStr, "state")}, {"Postal Code", extractJsonVal(addrStr, "postalCode")}, {"Latitude", extractJsonVal(addrStr, "latitude")}, {"Longitude", extractJsonVal(addrStr, "longitude")}};
                for (String[] field : addrFields) {
                    if (y < 40) { cs.close(); page = new PDPage(); doc.addPage(page); cs = new PDPageContentStream(doc, page); y = 760; }
                    cs.setFont(PDType1Font.HELVETICA_BOLD, 9);
                    cs.beginText(); cs.newLineAtOffset(lm, y); cs.showText(field[0] + ":"); cs.endText();
                    String val = sanitizeForPdf((field[1] != null && !field[1].isEmpty()) ? field[1] : "-");
                    int maxChars = 55; float valX = lm + 130;
                    while (val.length() > 0) {
                        String line = val.length() > maxChars ? val.substring(0, maxChars) : val;
                        cs.setFont(PDType1Font.HELVETICA, 9);
                        cs.beginText(); cs.newLineAtOffset(valX, y); cs.showText(line); cs.endText();
                        val = val.length() > maxChars ? val.substring(maxChars) : "";
                        if (val.length() > 0) { y -= 12; if (y < 40) { cs.close(); page = new PDPage(); doc.addPage(page); cs = new PDPageContentStream(doc, page); y = 760; } }
                    }
                    y -= 14;
                }
                y -= 5;
            }
            y -= 8;
        }

        // Bank Details - parse from banksJson or fallback to flat fields
        if (y < 80) { cs.close(); page = new PDPage(); doc.addPage(page); cs = new PDPageContentStream(doc, page); y = 760; }
        cs.setFont(PDType1Font.HELVETICA_BOLD, 11);
        cs.beginText(); cs.newLineAtOffset(lm, y); cs.showText("Bank Details"); cs.endText(); y -= 3;
        cs.setStrokingColor(0, 102, 204);
        cs.moveTo(lm, y); cs.lineTo(550, y); cs.stroke(); y -= 14;

        String banksJson = c.getBanksJson();
        if (banksJson != null && !banksJson.isEmpty() && banksJson.startsWith("[")) {
            try {
                String[] banks = banksJson.split("\\},\\{");
                int bankNum = 0;
                for (String bankStr : banks) {
                    bankNum++;
                    if (banks.length > 1) {
                        if (y < 40) { cs.close(); page = new PDPage(); doc.addPage(page); cs = new PDPageContentStream(doc, page); y = 760; }
                        cs.setFont(PDType1Font.HELVETICA_BOLD, 9);
                        cs.beginText(); cs.newLineAtOffset(lm, y); cs.showText("Bank " + bankNum); cs.endText(); y -= 14;
                    }
                    String[][] bankFields = {{"Bank Name", extractJsonVal(bankStr, "bankName")}, {"Branch Name", extractJsonVal(bankStr, "branchName")}, {"Account Number", extractJsonVal(bankStr, "accountNumber")}, {"IFSC Code", extractJsonVal(bankStr, "ifscCode")}};
                    for (String[] field : bankFields) {
                        if (y < 40) { cs.close(); page = new PDPage(); doc.addPage(page); cs = new PDPageContentStream(doc, page); y = 760; }
                        cs.setFont(PDType1Font.HELVETICA_BOLD, 9);
                        cs.beginText(); cs.newLineAtOffset(lm, y); cs.showText(field[0] + ":"); cs.endText();
                        String val = sanitizeForPdf((field[1] != null && !field[1].isEmpty()) ? field[1] : "-");
                        int maxChars = 55; float valX = lm + 130;
                        while (val.length() > 0) {
                            String line = val.length() > maxChars ? val.substring(0, maxChars) : val;
                            cs.setFont(PDType1Font.HELVETICA, 9);
                            cs.beginText(); cs.newLineAtOffset(valX, y); cs.showText(line); cs.endText();
                            val = val.length() > maxChars ? val.substring(maxChars) : "";
                            if (val.length() > 0) { y -= 12; if (y < 40) { cs.close(); page = new PDPage(); doc.addPage(page); cs = new PDPageContentStream(doc, page); y = 760; } }
                        }
                        y -= 14;
                    }
                    y -= 5;
                }
            } catch (Exception e) {}
        } else {
            String[][] bankFields = {{"Bank Name", c.getBankName()}, {"Branch Name", c.getBranchName()}, {"Account Number", c.getBankAccountNumber()}, {"IFSC Code", c.getIfscCode()}};
            for (String[] field : bankFields) {
                if (y < 40) { cs.close(); page = new PDPage(); doc.addPage(page); cs = new PDPageContentStream(doc, page); y = 760; }
                cs.setFont(PDType1Font.HELVETICA_BOLD, 9);
                cs.beginText(); cs.newLineAtOffset(lm, y); cs.showText(field[0] + ":"); cs.endText();
                String val = sanitizeForPdf((field[1] != null && !field[1].isEmpty()) ? field[1] : "-");
                int maxChars = 55; float valX = lm + 130;
                while (val.length() > 0) {
                    String line = val.length() > maxChars ? val.substring(0, maxChars) : val;
                    cs.setFont(PDType1Font.HELVETICA, 9);
                    cs.beginText(); cs.newLineAtOffset(valX, y); cs.showText(line); cs.endText();
                    val = val.length() > maxChars ? val.substring(maxChars) : "";
                    if (val.length() > 0) { y -= 12; if (y < 40) { cs.close(); page = new PDPage(); doc.addPage(page); cs = new PDPageContentStream(doc, page); y = 760; } }
                }
                y -= 14;
            }
        }

        cs.close();
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        doc.save(baos);
        doc.close();
        return baos.toByteArray();
    }

    private float writeWrappedValue(PDPageContentStream cs, PDDocument doc, PDPage[] pageRef, String val, float x, float y, float lm) throws Exception {
        int maxChars = 55;
        if (val == null || val.isEmpty()) val = "-";
        while (val.length() > 0) {
            if (y < 40) { cs.close(); pageRef[0] = new PDPage(); doc.addPage(pageRef[0]); cs = new PDPageContentStream(doc, pageRef[0]); y = 760; }
            String line = val.length() > maxChars ? val.substring(0, maxChars) : val;
            cs.setFont(PDType1Font.HELVETICA, 9);
            cs.beginText(); cs.newLineAtOffset(x, y); cs.showText(line); cs.endText();
            val = val.length() > maxChars ? val.substring(maxChars) : "";
            if (val.length() > 0) y -= 12;
        }
        return y;
    }

    private String sanitizeForPdf(String text) {
        if (text == null) return null;
        StringBuilder sb = new StringBuilder();
        for (char c : text.toCharArray()) {
            if (c >= 32 && c <= 126) sb.append(c);
            else if (c == '\t') sb.append(' ');
            else sb.append(' ');
        }
        return sb.toString().trim();
    }

    private String extractJsonVal(String json, String key) {
        try {
            String search = "\"" + key + "\":\"";
            int start = json.indexOf(search);
            if (start < 0) return "";
            start += search.length();
            int end = json.indexOf("\"", start);
            if (end < 0) return "";
            return json.substring(start, end);
        } catch (Exception e) { return ""; }
    }
    @GetMapping("/my-submissions/{username}")
    public ResponseEntity<List<Map<String, Object>>> getMySubmissions(@PathVariable String username) {
        List<Map<String, Object>> result = new java.util.ArrayList<>();
        try {
            List<Object[]> rows = entityManager.createNativeQuery(
                "SELECT customer_id, customer_name, account_number, customer_type, picked_status, creation_date, error_msg, approved_by " +
                "FROM bamul_customer_det_stg WHERE UPPER(submitted_by) = UPPER(:user) ORDER BY customer_id DESC"
            ).setParameter("user", username).getResultList();
            for (Object[] r : rows) {
                Map<String, Object> map = new java.util.HashMap<>();
                map.put("customerId", r[0]);
                map.put("customerName", r[1]);
                map.put("accountNumber", r[2]);
                map.put("customerType", r[3]);
                map.put("pickedStatus", r[4]);
                map.put("creationDate", r[5]);
                map.put("errorMsg", r[6]);
                map.put("approvedBy", r[7]);
                result.add(map);
            }
        } catch (Exception e) {
            System.out.println("My submissions query failed: " + e.getMessage());
        }
        return ResponseEntity.ok(result);
    }
}
