package com.bamul.customermaster.controller;

import com.bamul.customermaster.entity.LoginLog;
import com.bamul.customermaster.repository.LoginLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.servlet.http.HttpServletRequest;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    private LoginLogRepository loginLogRepo;

    @PostMapping("/validate-user")
    @Transactional
    public ResponseEntity<Map<String, Object>> validateUser(@RequestBody Map<String, String> body) {
        String username = body.get("username");
        String emailId = body.get("emailId");
        Map<String, Object> response = new HashMap<>();

        try {
            List result = entityManager.createNativeQuery(
                "SELECT 1 FROM bamul_portal_user_reg WHERE UPPER(username) = UPPER(:uname) AND UPPER(email_id) = UPPER(:email) AND status = 'APPROVED'"
            ).setParameter("uname", username)
             .setParameter("email", emailId)
             .getResultList();

            if (!result.isEmpty()) {
                response.put("status", "SUCCESS");
                response.put("message", "User validated");
            } else {
                response.put("status", "ERROR");
                response.put("message", "Invalid username or email. User not found or not approved.");
            }
        } catch (Exception e) {
            response.put("status", "ERROR");
            response.put("message", "Validation failed: " + e.getMessage());
        }
        return ResponseEntity.ok(response);
    }

    @PostMapping("/reset-password")
    @Transactional
    public ResponseEntity<Map<String, Object>> resetPassword(@RequestBody Map<String, String> body) {
        String username = body.get("username");
        String oldPassword = body.get("oldPassword");
        String newPassword = body.get("newPassword");
        Map<String, Object> response = new HashMap<>();

        try {
            // Validate old password against bamul_portal_user_reg table
            List userCheck = entityManager.createNativeQuery(
                "SELECT 1 FROM bamul_portal_user_reg WHERE UPPER(username) = UPPER(:uname) AND password = :pwd AND status = 'APPROVED'"
            ).setParameter("uname", username)
             .setParameter("pwd", oldPassword)
             .getResultList();

            if (userCheck.isEmpty()) {
                response.put("status", "ERROR");
                response.put("message", "Invalid username or old password");
                return ResponseEntity.ok(response);
            }

            // Update password in table
            entityManager.createNativeQuery(
                "UPDATE bamul_portal_user_reg SET password = :pwd, last_updated_date = SYSDATE WHERE UPPER(username) = UPPER(:uname)"
            ).setParameter("pwd", newPassword)
             .setParameter("uname", username)
             .executeUpdate();

            response.put("status", "SUCCESS");
            response.put("message", "Password changed successfully");
        } catch (Exception e) {
            response.put("status", "ERROR");
            response.put("message", "Password reset failed: " + e.getMessage());
        }
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    @Transactional
    public ResponseEntity<Map<String, Object>> login(@RequestBody Map<String, String> body, HttpServletRequest request) {
        String username = body.get("username");
        String password = body.get("password");
        String ipAddress = request.getRemoteAddr();
        Map<String, Object> response = new HashMap<>();

        try {
            // Validate against bamul_portal_user_reg table
            List userCheck = entityManager.createNativeQuery(
                "SELECT 1 FROM bamul_portal_user_reg WHERE UPPER(username) = UPPER(:uname) AND password = :pwd AND status = 'APPROVED'"
            ).setParameter("uname", username)
             .setParameter("pwd", password)
             .getResultList();

            if (!userCheck.isEmpty()) {
                // Determine role
                String role = "EMPLOYEE";
                List masterCheck = entityManager.createNativeQuery(
                    "SELECT 1 FROM bamul_portal_master WHERE UPPER(username) = UPPER(:uname) AND is_active = 'Y'"
                ).setParameter("uname", username).getResultList();
                if (!masterCheck.isEmpty()) role = "MASTER";

                // DISABLED: Super Master role - login blocked
                List superCheck = entityManager.createNativeQuery(
                    "SELECT 1 FROM bamul_portal_super_master WHERE UPPER(username) = UPPER(:uname) AND is_active = 'Y'"
                ).setParameter("uname", username).getResultList();
                if (!superCheck.isEmpty()) {
                    logLogin(username, "FAILED", ipAddress, "Super Master login disabled");
                    response.put("status", "ERROR");
                    response.put("message", "Super Master login is disabled");
                    return ResponseEntity.ok(response);
                }

                logLogin(username, "SUCCESS", ipAddress, null);
                response.put("status", "SUCCESS");
                response.put("message", "Login successful");
                response.put("username", username);
                response.put("role", role);
            } else {
                logLogin(username, "FAILED", ipAddress, "Invalid credentials");
                response.put("status", "ERROR");
                response.put("message", "Invalid username or password");
            }
        } catch (Exception e) {
            logLogin(username, "FAILED", ipAddress, e.getMessage());
            response.put("status", "ERROR");
            response.put("message", "Login failed: " + e.getMessage());
        }
        return ResponseEntity.ok(response);
    }

    private void logLogin(String username, String status, String ipAddress, String errorMsg) {
        try {
            LoginLog log = new LoginLog();
            log.setLogId(loginLogRepo.getNextId());
            log.setUsername(username);
            log.setLoginTime(new Timestamp(System.currentTimeMillis()));
            log.setStatus(status);
            log.setIpAddress(ipAddress);
            log.setPortalName("CUSTOMER_MASTER");
            log.setErrorMessage(errorMsg);
            loginLogRepo.save(log);
        } catch (Exception e) {
            // Don't fail login if logging fails
        }
    }
}
