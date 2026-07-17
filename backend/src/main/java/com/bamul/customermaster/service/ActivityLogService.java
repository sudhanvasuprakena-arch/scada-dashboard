package com.bamul.customermaster.service;

import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.annotation.Propagation;

@Service
public class ActivityLogService {

    @PersistenceContext
    private EntityManager entityManager;

    @Transactional(propagation = Propagation.REQUIRES_NEW, noRollbackFor = Exception.class)
    public void log(String portalName, String activityType, String entityType, Long entityId, String entityName, String performedBy, String status, String remarks) {
        try {
            entityManager.createNativeQuery(
                "INSERT INTO BAMUL_PORTAL_ACTIVITY_LOG (LOG_ID, PORTAL_NAME, ACTIVITY_TYPE, ENTITY_TYPE, ENTITY_ID, ENTITY_NAME, PERFORMED_BY, ACTIVITY_DATE, STATUS, REMARKS) " +
                "VALUES (BAMUL_PORTAL_ACTIVITY_LOG_S.NEXTVAL, :portal, :activity, :entityType, :entityId, :entityName, :performedBy, SYSTIMESTAMP, :status, :remarks)"
            ).setParameter("portal", portalName)
             .setParameter("activity", activityType)
             .setParameter("entityType", entityType)
             .setParameter("entityId", entityId)
             .setParameter("entityName", entityName)
             .setParameter("performedBy", performedBy)
             .setParameter("status", status)
             .setParameter("remarks", remarks)
             .executeUpdate();
        } catch (Exception e) {
            System.out.println("Activity log failed: " + e.getMessage());
        }
    }
}
