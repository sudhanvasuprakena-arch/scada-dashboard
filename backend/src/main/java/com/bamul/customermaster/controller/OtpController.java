package com.bamul.customermaster.controller;

import com.bamul.customermaster.service.OtpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/otp")
@CrossOrigin(origins = "*")
public class OtpController {

    @Autowired
    private OtpService otpService;

    @PostMapping("/send")
    public ResponseEntity<Map<String, String>> sendOtp(@RequestBody Map<String, String> body) {
        String mobile = body.get("mobile");
        if (mobile == null || !mobile.matches("^[6-9][0-9]{9}$")) {
            Map<String, String> resp = new HashMap<>();
            resp.put("status", "ERROR");
            resp.put("message", "Invalid mobile number");
            return ResponseEntity.badRequest().body(resp);
        }
        String result = otpService.sendOtp(mobile);
        Map<String, String> resp = new HashMap<>();
        if (result.equals("SUCCESS")) {
            resp.put("status", "SUCCESS");
            resp.put("message", "OTP sent to +91" + mobile);
        } else {
            resp.put("status", "ERROR");
            resp.put("message", result);
        }
        return ResponseEntity.ok(resp);
    }

    @PostMapping("/verify")
    public ResponseEntity<Map<String, String>> verifyOtp(@RequestBody Map<String, String> body) {
        String mobile = body.get("mobile");
        String otp = body.get("otp");
        Map<String, String> resp = new HashMap<>();
        if (otpService.verifyOtp(mobile, otp)) {
            resp.put("status", "SUCCESS");
            resp.put("message", "OTP verified successfully");
        } else {
            resp.put("status", "ERROR");
            resp.put("message", "Invalid or expired OTP");
        }
        return ResponseEntity.ok(resp);
    }
}
