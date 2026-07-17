package com.bamul.customermaster.controller;

import com.bamul.customermaster.entity.UserRegistration;
import com.bamul.customermaster.repository.UserRegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@RestController
@RequestMapping("/api/registration")
@CrossOrigin(origins = "*")
public class RegistrationController {

    @Autowired
    private UserRegistrationRepository regRepo;

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private com.bamul.customermaster.service.ActivityLogService activityLog;

    @Value("${notification.admin.email}")
    private String adminEmail;

    @PersistenceContext
    private EntityManager entityManager;

    @PostMapping("/register")
    @Transactional
    public ResponseEntity<Map<String, String>> register(@RequestBody Map<String, String> body) {
        Map<String, String> resp = new HashMap<>();

        try {
            String empNumber = body.get("employeeNumber");

            // Check if employee already registered
            if (regRepo.findByEmployeeNumber(empNumber) != null) {
                resp.put("status", "ERROR");
                resp.put("message", "Employee already registered");
                return ResponseEntity.ok(resp);
            }

            UserRegistration reg = new UserRegistration();
            reg.setRegId(regRepo.getNextId());
            reg.setEmployeeNumber(body.get("employeeNumber"));
            String fullName = body.get("fullName");
            if (fullName == null || fullName.trim().isEmpty()) {
                String fn = body.get("firstName") != null ? body.get("firstName") : "";
                String mn = body.get("middleName") != null && !body.get("middleName").isEmpty() ? body.get("middleName") + " " : "";
                String ln = body.get("lastName") != null ? body.get("lastName") : "";
                fullName = (fn + " " + mn + ln).trim();
            }
            reg.setFullName(fullName);
            reg.setFirstName(body.get("firstName"));
            reg.setLastName(body.get("lastName"));
            reg.setMiddleName(body.get("middleName"));
            reg.setTitle(body.get("title"));
            reg.setGender(body.get("gender"));
            reg.setPersonType(body.get("personType"));
            reg.setPlaceOfBirth(body.get("placeOfBirth"));
            reg.setRegionOfBirth(body.get("regionOfBirth"));
            reg.setCountryOfBirth(body.get("countryOfBirth"));
            reg.setNationality(body.get("nationality"));
            reg.setMaritalStatus(body.get("maritalStatus"));
            reg.setRegisteredDisabled(body.get("registeredDisabled"));
            reg.setPanNumber(body.get("panNumber"));
            reg.setPanReferenceNumber(body.get("panReferenceNumber"));
            reg.setAadhaarNumber(body.get("aadhaarNumber"));
            reg.setResidentialStatus(body.get("residentialStatus"));
            reg.setExServiceman(body.get("exServiceman"));
            reg.setEmailId(body.get("emailAddress"));
            reg.setMobileNumber(body.get("mobileNumber"));
            reg.setAddress(body.get("address"));
            reg.setDepartment(body.get("department"));
            reg.setJob(body.get("job"));
            reg.setGrade(body.get("grade"));
            reg.setLocation(body.get("location"));
            reg.setEmployeeGroup(body.get("employeeGroup"));
            reg.setPosition(body.get("position"));
            reg.setPayroll(body.get("payroll"));
            reg.setEmployeeCategory(body.get("employeeCategory"));
            reg.setAssignmentNumber(body.get("assignmentNumber"));
            reg.setSupervisorName(body.get("supervisorName"));
            reg.setSupervisorWorkerNumber(body.get("supervisorWorkerNumber"));
            reg.setAssignmentStatus(body.get("assignmentStatus"));
            reg.setSalaryBasis(body.get("salaryBasis"));
            reg.setReviewSalaryFrequency(body.get("reviewSalaryFrequency"));
            reg.setReviewPerformanceFrequency(body.get("reviewPerformanceFrequency"));
            String username = body.get("username") != null ? body.get("username") : body.get("employeeNumber");
            String password = body.get("password") != null ? body.get("password") : "welcome1";
            reg.setUsername(username);
            reg.setPassword(password);
            reg.setStatus("PENDING");
            reg.setCreationDate(new Date());

            if (body.get("dateOfBirth") != null && !body.get("dateOfBirth").isEmpty()) {
                try { reg.setDateOfBirth(new java.text.SimpleDateFormat("yyyy-MM-dd").parse(body.get("dateOfBirth"))); } catch (Exception e) {}
            }
            if (body.get("effectiveFromDate") != null && !body.get("effectiveFromDate").isEmpty()) {
                try { reg.setEffectiveFromDate(new java.text.SimpleDateFormat("yyyy-MM-dd").parse(body.get("effectiveFromDate"))); } catch (Exception e) {}
            }
            if (body.get("effectiveToDate") != null && !body.get("effectiveToDate").isEmpty()) {
                try { reg.setEffectiveToDate(new java.text.SimpleDateFormat("yyyy-MM-dd").parse(body.get("effectiveToDate"))); } catch (Exception e) {}
            }
            if (body.get("latestStartDate") != null && !body.get("latestStartDate").isEmpty()) {
                try { reg.setLatestStartDate(new java.text.SimpleDateFormat("yyyy-MM-dd").parse(body.get("latestStartDate"))); } catch (Exception e) {}
            }

            regRepo.save(reg);

            resp.put("status", "SUCCESS");
            resp.put("message", "Registration submitted. Pending admin approval.");
            resp.put("regId", String.valueOf(reg.getRegId()));

            // Email disabled for registration submission - only sent on approval
            // try {
            //     SimpleMailMessage message = new SimpleMailMessage();
            //     message.setTo(adminEmail);
            //     message.setFrom("guhashibashish@gmail.com");
            //     message.setSubject("BAMUL Portal - New Employee Registration Request");
            //     message.setText("A new employee registration request has been submitted.\n\n" +
            //         "Employee Number: " + reg.getEmployeeNumber() + "\n" +
            //         "Full Name: " + reg.getFullName() + "\n" +
            //         "Department: " + reg.getDepartment() + "\n" +
            //         "Mobile: " + reg.getMobileNumber() + "\n" +
            //         "Email: " + reg.getEmailId() + "\n\n" +
            //         "Please login to the Admin Approval page to approve or reject this request.");
            //     mailSender.send(message);
            // } catch (Exception e) {
            //     System.out.println("Email notification failed: " + e.getMessage());
            // }

            return ResponseEntity.ok(resp);

        } catch (Exception e) {
            e.printStackTrace();
            resp.put("status", "ERROR");
            resp.put("message", "Registration failed: " + e.getMessage());
            return ResponseEntity.ok(resp);
        }
    }

    // Upload document for registration
    @PostMapping("/upload-doc/{regId}/{docType}")
    public ResponseEntity<Map<String, String>> uploadDoc(
            @PathVariable Long regId,
            @PathVariable String docType,
            @RequestParam("file") org.springframework.web.multipart.MultipartFile file) {
        Map<String, String> resp = new HashMap<>();
        try {
            String uploadDir = "" + System.getProperty("user.home") + "/customer-portal-uploads/";
            java.io.File dir = new java.io.File(uploadDir);
            if (!dir.exists()) dir.mkdirs();

            String fileName = docType + "_" + regId + "_" + System.currentTimeMillis() + ".pdf";
            java.nio.file.Files.write(java.nio.file.Paths.get(uploadDir + fileName), file.getBytes());

            resp.put("status", "SUCCESS");
            resp.put("fileName", fileName);
        } catch (Exception e) {
            resp.put("status", "ERROR");
            resp.put("message", e.getMessage());
        }
        return ResponseEntity.ok(resp);
    }

    // View/Download employee document
    @GetMapping("/doc/{prefix}")
    public ResponseEntity<org.springframework.core.io.Resource> viewDoc(@PathVariable String prefix) {
        try {
            String uploadDir = "" + System.getProperty("user.home") + "/customer-portal-uploads/";
            java.io.File dir = new java.io.File(uploadDir);
            java.io.File[] files = dir.listFiles((d, name) -> name.startsWith(prefix));
            if (files != null && files.length > 0) {
                java.nio.file.Path filePath = files[0].toPath();
                org.springframework.core.io.Resource resource = new org.springframework.core.io.UrlResource(filePath.toUri());
                return ResponseEntity.ok()
                        .contentType(org.springframework.http.MediaType.APPLICATION_PDF)
                        .header(org.springframework.http.HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + files[0].getName() + "\"")
                        .body(resource);
            }
        } catch (Exception e) {}
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/all")
    public ResponseEntity<List<UserRegistration>> getAll() {
        List<UserRegistration> all = regRepo.findAllByOrderByRegIdDesc();
        // Exclude master users
        List<String> masters = new java.util.ArrayList<>();
        try {
            List<Object> mList = entityManager.createNativeQuery("SELECT UPPER(username) FROM bamul_portal_master").getResultList();
            for (Object o : mList) masters.add(o != null ? o.toString() : "");
        } catch (Exception e) {}
        all.removeIf(u -> u.getUsername() != null && masters.contains(u.getUsername().toUpperCase()));
        return ResponseEntity.ok(all);
    }

    @GetMapping("/pending")
    public ResponseEntity<List<UserRegistration>> getPending() {
        return ResponseEntity.ok(regRepo.findByStatus("PENDING"));
    }

    @PostMapping("/approve/{regId}")
    @Transactional(noRollbackFor = Exception.class)
    public ResponseEntity<Map<String, String>> approve(@PathVariable Long regId, @RequestBody Map<String, String> body, javax.servlet.http.HttpServletRequest request) {
        Map<String, String> resp = new HashMap<>();
        try {
            Optional<UserRegistration> opt = regRepo.findById(regId);
            if (!opt.isPresent()) {
                resp.put("status", "ERROR");
                resp.put("message", "Registration not found");
                return ResponseEntity.ok(resp);
            }
            UserRegistration reg = opt.get();

            reg.setStatus("APPROVED");
            String approver = request.getHeader("X-User");
            if (approver == null || approver.trim().isEmpty()) {
                resp.put("status", "ERROR");
                resp.put("message", "Missing X-User header for approver");
                return ResponseEntity.status(403).body(resp);
            }
            // validate master
            try {
                List masterCheck = entityManager.createNativeQuery(
                    "SELECT 1 FROM bamul_portal_master WHERE UPPER(username) = UPPER(:uname) AND is_active = 'Y'"
                ).setParameter("uname", approver).getResultList();
                if (masterCheck.isEmpty()) {
                    resp.put("status", "ERROR");
                    resp.put("message", "User is not an active master");
                    return ResponseEntity.status(403).body(resp);
                }
            } catch (Exception e) {
                resp.put("status", "ERROR");
                resp.put("message", "Approver validation failed: " + e.getMessage());
                return ResponseEntity.status(500).body(resp);
            }
            reg.setApprovedBy(approver);
            reg.setApprovalDate(new Date());
            reg.setLastUpdatedDate(new Date());

            // Auto-generate username and password
            String firstName = reg.getFirstName() != null ? reg.getFirstName().trim() : "USER";
            String username = (firstName.toUpperCase() + "_" + reg.getEmployeeNumber()).replaceAll("\\s+", "");
            String password = "Bamul@" + (1000 + new java.util.Random().nextInt(9000));
            reg.setUsername(username);
            reg.setPassword(password);
            regRepo.save(reg);

            // Insert audit (non-critical)
            try {
                entityManager.createNativeQuery(
                    "INSERT INTO BAMUL_PORTAL_USER_REG_AUDIT (AUDIT_ID, REG_ID, ACTION, ACTION_BY, ACTION_DATE, OLD_STATUS, NEW_STATUS, REMARKS) " +
                    "VALUES (BAMUL_PORTAL_USER_REG_AUDIT_S.NEXTVAL, :regId, 'APPROVED', :actionBy, SYSDATE, 'PENDING', 'APPROVED', :remarks)"
                ).setParameter("regId", regId)
                 .setParameter("actionBy", approver)
                 .setParameter("remarks", body.get("remarks"))
                 .executeUpdate();
            } catch (Exception e) {
                System.out.println("Audit insert failed: " + e.getMessage());
            }

            // Activity log (non-critical)
            try {
                activityLog.log("CUSTOMER_MASTER", "EMPLOYEE_APPROVED", "EMPLOYEE", regId, reg.getFullName(), approver, "APPROVED", "Employee registration approved");
            } catch (Exception e) {
                System.out.println("Activity log failed: " + e.getMessage());
            }

            resp.put("status", "SUCCESS");
            resp.put("message", "Registration approved. Username: " + username);

            // Send approval email to employee (non-critical)
            sendStatusEmail(reg, "APPROVED", null);

            return ResponseEntity.ok(resp);
        } catch (Exception e) {
            e.printStackTrace();
            resp.put("status", "ERROR");
            resp.put("message", "Approval failed: " + e.getMessage());
            return ResponseEntity.ok(resp);
        }
    }

    @PostMapping("/reject/{regId}")
    @Transactional
    public ResponseEntity<Map<String, String>> reject(@PathVariable Long regId, @RequestBody Map<String, String> body, javax.servlet.http.HttpServletRequest request) {
        Map<String, String> resp = new HashMap<>();
        try {
            Optional<UserRegistration> opt = regRepo.findById(regId);
            if (!opt.isPresent()) {
                resp.put("status", "ERROR");
                resp.put("message", "Registration not found");
                return ResponseEntity.ok(resp);
            }
            UserRegistration reg = opt.get();
            reg.setStatus("REJECTED");
            reg.setRejectReason(body.get("reason"));
            String approver = request.getHeader("X-User");
            if (approver == null || approver.trim().isEmpty()) {
                resp.put("status", "ERROR");
                resp.put("message", "Missing X-User header for approver");
                return ResponseEntity.status(403).body(resp);
            }
            try {
                List masterCheck = entityManager.createNativeQuery(
                    "SELECT 1 FROM bamul_portal_master WHERE UPPER(username) = UPPER(:uname) AND is_active = 'Y'"
                ).setParameter("uname", approver).getResultList();
                if (masterCheck.isEmpty()) {
                    resp.put("status", "ERROR");
                    resp.put("message", "User is not an active master");
                    return ResponseEntity.status(403).body(resp);
                }
            } catch (Exception e) {
                resp.put("status", "ERROR");
                resp.put("message", "Approver validation failed: " + e.getMessage());
                return ResponseEntity.status(500).body(resp);
            }
            reg.setApprovedBy(approver);
            reg.setLastUpdatedDate(new Date());
            regRepo.save(reg);

            // Insert audit (non-critical)
            try {
                entityManager.createNativeQuery(
                    "INSERT INTO BAMUL_PORTAL_USER_REG_AUDIT (AUDIT_ID, REG_ID, ACTION, ACTION_BY, ACTION_DATE, OLD_STATUS, NEW_STATUS, REMARKS) " +
                    "VALUES (BAMUL_PORTAL_USER_REG_AUDIT_S.NEXTVAL, :regId, 'REJECTED', :actionBy, SYSDATE, 'PENDING', 'REJECTED', :remarks)"
                ).setParameter("regId", regId)
                .setParameter("actionBy", approver)
                 .setParameter("remarks", body.get("reason"))
                 .executeUpdate();
            } catch (Exception e) {
                System.out.println("Audit insert failed: " + e.getMessage());
            }

            try {
                activityLog.log("CUSTOMER_MASTER", "EMPLOYEE_REJECTED", "EMPLOYEE", regId, reg.getFullName(), body.get("rejectedBy"), "REJECTED", body.get("reason"));
            } catch (Exception e) {
                System.out.println("Activity log failed: " + e.getMessage());
            }

            resp.put("status", "SUCCESS");
            resp.put("message", "Registration rejected");

            // Send rejection email to employee
            sendStatusEmail(reg, "REJECTED", body.get("reason"));

            return ResponseEntity.ok(resp);
        } catch (Exception e) {
            e.printStackTrace();
            resp.put("status", "ERROR");
            resp.put("message", "Rejection failed: " + e.getMessage());
            return ResponseEntity.ok(resp);
        }
    }

    private void sendStatusEmail(UserRegistration reg, String status, String reason) {
        try {
            if (reg.getEmailId() == null || reg.getEmailId().isEmpty()) return;

            // Get all master emails for CC
            List<String> masterEmails = new java.util.ArrayList<>();
            try {
                List<Object> mList = entityManager.createNativeQuery("SELECT email_id FROM bamul_portal_master WHERE is_active = 'Y' AND email_id IS NOT NULL").getResultList();
                for (Object o : mList) if (o != null) masterEmails.add(o.toString());
            } catch (Exception e) {}

            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(reg.getEmailId());
            if (!masterEmails.isEmpty()) {
                message.setCc(masterEmails.toArray(new String[0]));
            }
            message.setFrom("guhashibashish@gmail.com");

            if ("APPROVED".equals(status)) {
                message.setSubject("BAMUL Portal - Registration Approved - Login Credentials");
                message.setText(
                    "Dear " + reg.getFullName() + ",\n\n" +
                    "Your registration for BAMUL Customer Master Portal has been APPROVED.\n\n" +
                    "Your login credentials are:\n" +
                    "Username: " + reg.getUsername() + "\n" +
                    "Password: " + reg.getPassword() + "\n\n" +
                    "Please login at the portal and change your password after first login.\n\n" +
                    "-- BAMUL Customer Master Portal"
                );
            } else {
                // Email disabled for rejection - only sent on approval
                return;
            }

            mailSender.send(message);
        } catch (Exception e) {
            System.out.println("Status email failed: " + e.getMessage());
        }
    }

    private void sendNotificationEmail(UserRegistration reg) {
        try {
            // Get all active masters
            List<Object[]> masters = entityManager.createNativeQuery(
                "SELECT full_name, email_id FROM bamul_portal_master WHERE is_active = 'Y'"
            ).getResultList();

            String subject = "BAMUL Portal - New Employee Registration Request";
            String body = "A new employee registration request has been submitted.\n\n" +
                "Employee Number: " + reg.getEmployeeNumber() + "\n" +
                "Full Name: " + reg.getFullName() + "\n" +
                "Department: " + reg.getDepartment() + "\n" +
                "Job: " + reg.getJob() + "\n" +
                "Mobile: " + reg.getMobileNumber() + "\n" +
                "Email: " + reg.getEmailId() + "\n" +
                "Username: " + reg.getUsername() + "\n\n" +
                "Please login to the Admin Approval page to approve or reject this request.\n\n" +
                "-- BAMUL Customer Master Portal";

            // Send to all masters
            for (Object[] master : masters) {
                SimpleMailMessage message = new SimpleMailMessage();
                message.setTo((String) master[1]);
                message.setSubject(subject);
                message.setText("Dear " + master[0] + ",\n\n" + body);
                message.setFrom("guhashibashish@gmail.com");
                mailSender.send(message);
            }

            // Also send to admin email as fallback
            if (masters.isEmpty()) {
                SimpleMailMessage message = new SimpleMailMessage();
                message.setTo(adminEmail);
                message.setSubject(subject);
                message.setText(body);
                message.setFrom("guhashibashish@gmail.com");
                mailSender.send(message);
            }
        } catch (Exception e) {
            System.out.println("Email notification failed: " + e.getMessage());
        }
    }
}
