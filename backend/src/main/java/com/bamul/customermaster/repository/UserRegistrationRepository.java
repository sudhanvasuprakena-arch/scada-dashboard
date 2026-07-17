package com.bamul.customermaster.repository;

import com.bamul.customermaster.entity.UserRegistration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRegistrationRepository extends JpaRepository<UserRegistration, Long> {

    List<UserRegistration> findByStatus(String status);

    List<UserRegistration> findAllByOrderByRegIdDesc();

    UserRegistration findByUsername(String username);

    UserRegistration findByEmployeeNumber(String employeeNumber);

    @Query(value = "SELECT BAMUL_PORTAL_USER_REG_S.NEXTVAL FROM dual", nativeQuery = true)
    Long getNextId();
}
