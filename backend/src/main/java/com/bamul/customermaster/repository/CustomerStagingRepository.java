package com.bamul.customermaster.repository;

import com.bamul.customermaster.entity.CustomerStaging;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerStagingRepository extends JpaRepository<CustomerStaging, Long> {

    List<CustomerStaging> findByPickedStatus(String pickedStatus);

    @Query("SELECT c FROM CustomerStaging c WHERE c.pickedStatus IN ('PA','S','REJECTED') ORDER BY c.customerId DESC")
    List<CustomerStaging> findPendingTop50();

    @Query("SELECT c FROM CustomerStaging c WHERE c.pickedStatus IN ('PA', 'S', 'N', 'E', 'REJECTED') AND c.creationDate >= :since ORDER BY c.customerId DESC")
    List<CustomerStaging> findPortalRecords(@Param("since") java.util.Date since);

    @Query("SELECT c FROM CustomerStaging c WHERE c.pickedStatus IN ('PA', 'S', 'N', 'E', 'REJECTED') ORDER BY CASE c.pickedStatus WHEN 'PA' THEN 0 WHEN 'REJECTED' THEN 1 ELSE 2 END, c.customerId DESC")
    List<CustomerStaging> findAllPortalRecords();

    @Query("SELECT COALESCE(MAX(c.customerId), 0) + 1 FROM CustomerStaging c")
    Long getNextCustomerId();

    @Modifying
    @Query(value = "UPDATE bamul_customer_det_stg SET picked_status = :status, last_updated_date = SYSDATE WHERE customer_id = :id", nativeQuery = true)
    void updateStatus(@Param("id") Long customerId, @Param("status") String status);

    @Modifying
    @Query("UPDATE CustomerStaging c SET c.pickedStatus = :status, c.errorMsg = :reason WHERE c.customerId = :id")
    void updateStatusWithReason(@Param("id") Long customerId, @Param("status") String status, @Param("reason") String reason);
}
