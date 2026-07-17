package com.bamul.customermaster.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Service
public class EscalationService {

    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    private JavaMailSender mailSender;

    // DISABLED: Super Master escalation feature
    // @Scheduled(fixedRate = 3600000)
    public void escalatePendingRegistrations() {
        // Entire method disabled
        if (true) return;
        try {
            List<Object[]> superMasters = entityManager.createNativeQuery(
                "SELECT full_name, email_id, escalation_hours FROM bamul_portal_super_master WHERE is_active = 'Y'"
            ).getResultList();

            if (superMasters.isEmpty()) return;

            for (Object[] sm : superMasters) {
                String smName = (String) sm[0];
                String smEmail = (String) sm[1];
                int hours = ((Number) sm[2]).intValue();

                // Check pending employee registrations
                List<Object[]> pendingRegs = entityManager.createNativeQuery(
                    "SELECT reg_id, full_name, employee_number, mobile_number, department, creation_date " +
                    "FROM bamul_portal_user_reg " +
                    "WHERE status = 'PENDING' AND creation_date < SYSDATE - :hours/24"
                ).setParameter("hours", hours).getResultList();

                if (!pendingRegs.isEmpty()) {
                    StringBuilder body = new StringBuilder();
                    body.append("Dear ").append(smName).append(",\n\n");
                    body.append("The following EMPLOYEE REGISTRATION(s) have been PENDING for more than ").append(hours).append(" hours:\n\n");
                    for (Object[] reg : pendingRegs) {
                        body.append("  - Reg ID: ").append(reg[0]).append(" | Name: ").append(reg[1]).append(" | Emp No: ").append(reg[2]).append(" | Dept: ").append(reg[4]).append("\n");
                    }
                    body.append("\nPlease take immediate action.\n\n-- BAMUL Customer Master Portal");

                    SimpleMailMessage message = new SimpleMailMessage();
                    message.setTo(smEmail);
                    message.setSubject("ESCALATION: " + pendingRegs.size() + " Employee Registration(s) Pending > " + hours + " hrs");
                    message.setText(body.toString());
                    message.setFrom("guhashibashish@gmail.com");
                    mailSender.send(message);
                    System.out.println("Escalation email sent for " + pendingRegs.size() + " pending registrations");
                }

                // Check pending customer approvals
                List<Object[]> pendingCust = entityManager.createNativeQuery(
                    "SELECT customer_id, customer_name, mobile_number, city, creation_date " +
                    "FROM bamul_customer_det_stg " +
                    "WHERE picked_status = 'PA' AND creation_date < SYSDATE - :hours2/24"
                ).setParameter("hours2", hours).getResultList();

                if (!pendingCust.isEmpty()) {
                    StringBuilder body = new StringBuilder();
                    body.append("Dear ").append(smName).append(",\n\n");
                    body.append("The following CUSTOMER APPROVAL(s) have been PENDING for more than ").append(hours).append(" hours:\n\n");
                    for (Object[] cust : pendingCust) {
                        body.append("  - ID: ").append(cust[0]).append(" | Name: ").append(cust[1]).append(" | Mobile: ").append(cust[2]).append(" | City: ").append(cust[3]).append("\n");
                    }
                    body.append("\nPlease take immediate action.\n\n-- BAMUL Customer Master Portal");

                    SimpleMailMessage message = new SimpleMailMessage();
                    message.setTo(smEmail);
                    message.setSubject("ESCALATION: " + pendingCust.size() + " Customer Approval(s) Pending > " + hours + " hrs");
                    message.setText(body.toString());
                    message.setFrom("guhashibashish@gmail.com");
                    mailSender.send(message);
                    System.out.println("Escalation email sent for " + pendingCust.size() + " pending customers");
                }
            }
        } catch (Exception e) {
            System.out.println("Escalation check failed: " + e.getMessage());
        }
    }
}
