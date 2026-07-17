package com.bamul.customermaster.entity;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "BAMUL_PORTAL_LOGIN_LOG")
public class LoginLog {

    @Id
    @Column(name = "LOG_ID")
    private Long logId;

    @Column(name = "USERNAME")
    private String username;

    @Column(name = "LOGIN_TIME")
    private Timestamp loginTime;

    @Column(name = "STATUS")
    private String status;

    @Column(name = "IP_ADDRESS")
    private String ipAddress;

    @Column(name = "PORTAL_NAME")
    private String portalName;

    @Column(name = "ERROR_MESSAGE")
    private String errorMessage;

    public Long getLogId() { return logId; }
    public void setLogId(Long logId) { this.logId = logId; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public Timestamp getLoginTime() { return loginTime; }
    public void setLoginTime(Timestamp loginTime) { this.loginTime = loginTime; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public String getIpAddress() { return ipAddress; }
    public void setIpAddress(String ipAddress) { this.ipAddress = ipAddress; }
    public String getPortalName() { return portalName; }
    public void setPortalName(String portalName) { this.portalName = portalName; }
    public String getErrorMessage() { return errorMessage; }
    public void setErrorMessage(String errorMessage) { this.errorMessage = errorMessage; }
}
