package com.bamul.customermaster.service;

import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Random;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class OtpService {

    private final ConcurrentHashMap<String, OtpEntry> otpStore = new ConcurrentHashMap<>();
    private final RestTemplate restTemplate = new RestTemplate();

    public String sendOtp(String mobile) {
        String otp = String.format("%06d", new Random().nextInt(999999));
        long expiry = System.currentTimeMillis() + 120000; // 2 minutes
        otpStore.put(mobile, new OtpEntry(otp, expiry));

        try {
            String url = "https://textbelt.com/text";
            String phoneNumber = "+91" + mobile;
            String message = "Your BAMUL OTP is: " + otp + ". Valid for 2 minutes.";

            String body = "phone=" + phoneNumber + "&message=" + message + "&key=textbelt";

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

            HttpEntity<String> entity = new HttpEntity<>(body, headers);
            ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);

            if (response.getBody() != null && response.getBody().contains("\"success\":true")) {
                return "SUCCESS";
            } else {
                return "ERROR: " + response.getBody();
            }
        } catch (Exception e) {
            return "ERROR: " + e.getMessage();
        }
    }

    public boolean verifyOtp(String mobile, String otp) {
        OtpEntry entry = otpStore.get(mobile);
        if (entry == null) return false;
        if (System.currentTimeMillis() > entry.expiry) {
            otpStore.remove(mobile);
            return false;
        }
        if (entry.otp.equals(otp)) {
            otpStore.remove(mobile);
            return true;
        }
        return false;
    }

    private static class OtpEntry {
        String otp;
        long expiry;

        OtpEntry(String otp, long expiry) {
            this.otp = otp;
            this.expiry = expiry;
        }
    }
}
