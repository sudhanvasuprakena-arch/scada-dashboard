package com.bamul.customermaster.repository;

import com.bamul.customermaster.entity.LoginLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginLogRepository extends JpaRepository<LoginLog, Long> {

    @Query(value = "SELECT BAMUL_PORTAL_LOGIN_LOG_S.NEXTVAL FROM dual", nativeQuery = true)
    Long getNextId();
}
