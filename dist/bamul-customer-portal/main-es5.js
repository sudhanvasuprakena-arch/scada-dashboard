function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./$$_lazy_route_resource lazy recursive": (
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/
  /*! no static exports found */
  /***/
  function _$$_lazy_route_resource_lazy_recursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }
    webpackEmptyAsyncContext.keys = function () {
      return [];
    };
    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": (
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_appComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<nav *ngIf=\"showNav\" class=\"navbar navbar-default navbar-fixed-top\" style=\"background-color: #1a73e8; border: none;\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" style=\"color: white; font-weight: bold; font-size: 18px;\">\n        <i class=\"fa fa-building\"></i> BAMUL - Customer Master Portal\n      </a>\n    </div>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a routerLink=\"/customer-form\" style=\"color: white;\"><i class=\"fa fa-user-plus\"></i> Customer Form</a></li>\n      <li><a routerLink=\"/customer-update\" style=\"color: white;\"><i class=\"fa fa-edit\"></i> Update Customer</a></li>\n      <li><a routerLink=\"/my-submissions\" style=\"color: white;\"><i class=\"fa fa-list\"></i> My Submissions</a></li>\n      <li *ngIf=\"userRole === 'MASTER'\"><a routerLink=\"/admin-approval\" style=\"color: white;\"><i class=\"fa fa-users\"></i> Employee Approval</a></li>\n      <li *ngIf=\"userRole === 'MASTER'\"><a routerLink=\"/finance-approval\" style=\"color: white;\"><i class=\"fa fa-check-circle\"></i> Customer Approval</a></li>\n      <li><a href=\"javascript:void(0)\" (click)=\"logout()\" style=\"color: white;\"><i class=\"fa fa-sign-out\"></i> Logout</a></li>\n    </ul>\n  </div>\n</nav>\n\n<div [style.margin-top]=\"showNav ? '60px' : '0'\">\n  <router-outlet></router-outlet>\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-approval/admin-approval.component.html": (
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-approval/admin-approval.component.html ***!
    \**********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_pages_adminApproval_adminApprovalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header bg-warning\" style=\"padding: 15px 20px;\">\n          <h4><i class=\"fa fa-check-circle\"></i> Admin - Employee Registration Approvals</h4>\n          <p style=\"margin: 0; font-size: 13px;\">Approve or reject employee registrations for Customer Master Portal access</p>\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-bordered table-striped\">\n            <thead class=\"thead-dark\">\n              <tr>\n                <th>#</th>\n                <th>Employee No</th>\n                <th>Full Name</th>\n                <th>Department</th>\n                <th>Email</th>\n                <th>Registered On</th>\n                <th>Status</th>\n                <th>Actioned By</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let user of users; let i = index\">\n                <td>{{ i + 1 }}</td>\n                <td>{{ user.employeeNumber }}</td>\n                <td>{{ user.fullName }}</td>\n                <td>{{ user.department || '-' }}</td>\n                <td>{{ user.emailId || '-' }}</td>\n                <td>{{ user.creationDate | date:'dd-MMM-yyyy HH:mm' }}</td>\n                <td>\n                  <span class=\"status-badge\"\n                    [ngClass]=\"{'status-pending': user.status === 'PENDING', 'status-approved': user.status === 'APPROVED', 'status-rejected': user.status === 'REJECTED'}\">\n                    {{ user.status }}\n                  </span>\n                </td>\n                <td>{{ user.approvedBy || '-' }}</td>\n                <td>\n                  <a href=\"javascript:void(0)\" (click)=\"viewDetails(user)\" class=\"view-link\">\n                    <i class=\"fa fa-eye\"></i> View\n                  </a>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <div *ngIf=\"users.length === 0\" class=\"text-center\" style=\"padding: 30px; color: #999;\">\n            <i class=\"fa fa-inbox\" style=\"font-size: 40px;\"></i>\n            <p>No registration requests</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- DETAIL MODAL -->\n<div class=\"modal-overlay\" *ngIf=\"selectedUser\" (click)=\"closeModal()\">\n  <div class=\"modal-box\" (click)=\"$event.stopPropagation()\">\n    <div class=\"modal-header-custom\">\n      <h4><i class=\"fa fa-user\"></i> Employee Details</h4>\n      <button class=\"close-btn\" (click)=\"closeModal()\">&times;</button>\n    </div>\n    <div class=\"modal-body-custom\">\n      <div class=\"section-title\">Employee Information</div>\n      <div class=\"row\">\n        <div class=\"col-md-4\"><div class=\"detail-row\"><label>Employee Number</label><p>{{ selectedUser.employeeNumber }}</p></div></div>\n        <div class=\"col-md-4\"><div class=\"detail-row\"><label>First Name</label><p>{{ selectedUser.firstName || '-' }}</p></div></div>\n        <div class=\"col-md-4\"><div class=\"detail-row\"><label>Last Name</label><p>{{ selectedUser.lastName || '-' }}</p></div></div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\"><div class=\"detail-row\"><label>Department</label><p>{{ selectedUser.department || '-' }}</p></div></div>\n        <div class=\"col-md-4\"><div class=\"detail-row\"><label>Manager Name</label><p>{{ selectedUser.supervisorName || '-' }}</p></div></div>\n        <div class=\"col-md-4\"><div class=\"detail-row\"><label>Email</label><p>{{ selectedUser.emailId || '-' }}</p></div></div>\n      </div>\n\n      <div class=\"section-title\">Status</div>\n      <div class=\"row\">\n        <div class=\"col-md-4\"><div class=\"detail-row\"><label>Username</label><p>{{ selectedUser.username }}</p></div></div>\n        <div class=\"col-md-4\"><div class=\"detail-row\"><label>Status</label><p><span class=\"status-badge\" [ngClass]=\"{'status-pending': selectedUser.status === 'PENDING', 'status-approved': selectedUser.status === 'APPROVED', 'status-rejected': selectedUser.status === 'REJECTED'}\">{{ selectedUser.status }}</span></p></div></div>\n        <div class=\"col-md-4\" *ngIf=\"selectedUser.rejectReason\"><div class=\"detail-row\"><label>Reject Reason</label><p>{{ selectedUser.rejectReason }}</p></div></div>\n      </div>\n\n      <!-- Reject Reason Input -->\n      <div class=\"row\" *ngIf=\"showRejectInput\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group\">\n            <label class=\"text-danger\">Rejection Reason <span>*</span></label>\n            <textarea class=\"form-control\" [(ngModel)]=\"rejectReason\" rows=\"3\" placeholder=\"Enter reason for rejection...\"></textarea>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"modal-footer-custom\" *ngIf=\"selectedUser.status === 'PENDING'\">\n      <button class=\"btn btn-success\" (click)=\"approve()\" *ngIf=\"!showRejectInput\"><i class=\"fa fa-check\"></i> Approve</button>\n      <button class=\"btn btn-danger\" (click)=\"showRejectBox()\" *ngIf=\"!showRejectInput\"><i class=\"fa fa-times\"></i> Reject</button>\n      <button class=\"btn btn-danger\" (click)=\"confirmReject()\" *ngIf=\"showRejectInput\" [disabled]=\"!rejectReason\"><i class=\"fa fa-times\"></i> Confirm Reject</button>\n      <button class=\"btn btn-default\" (click)=\"cancelReject()\" *ngIf=\"showRejectInput\">Cancel</button>\n    </div>\n\n    <div class=\"modal-footer-custom\" *ngIf=\"selectedUser.status !== 'PENDING'\">\n      <button class=\"btn btn-default\" (click)=\"closeModal()\">Close</button>\n    </div>\n  </div>\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customer-form/customer-form.component.html": (
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customer-form/customer-form.component.html ***!
    \********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_pages_customerForm_customerFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header bg-primary text-white\">\n          <h4><i class=\"fa fa-user-plus\"></i> Customer Master - {{ isEditMode ? 'Update' : 'Create' }}</h4>\n        </div>\n        <div class=\"card-body\">\n          <form [formGroup]=\"customerForm\" (ngSubmit)=\"onSubmit()\">\n\n            <!-- B2B / B2C SELECTION -->\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\"><strong>Customer Classification <span class=\"text-danger\">*</span></strong></div>\n              <div class=\"panel-body\">\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <label class=\"radio-inline\" style=\"font-size: 15px; margin-right: 30px;\">\n                      <input type=\"radio\" formControlName=\"customerClassification\" value=\"B2B\"> <strong>B2B</strong> (Business to Business)\n                    </label>\n                    <label class=\"radio-inline\" style=\"font-size: 15px;\">\n                      <input type=\"radio\" formControlName=\"customerClassification\" value=\"B2C\"> <strong>B2C</strong> (Business to Consumer)\n                    </label>\n                    <div *ngIf=\"customerForm.get('customerClassification').touched && customerForm.get('customerClassification').hasError('required')\" class=\"text-danger\" style=\"font-size:11px; margin-top:5px;\">Please select B2B or B2C</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- BASIC INFO -->\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\"><strong>Basic Information</strong></div>\n              <div class=\"panel-body\">\n                <div class=\"row\">\n                  <div class=\"col-md-4 form-group\">\n                    <label>Price List <span class=\"text-danger\">*</span></label>\n                    <select class=\"form-control\" formControlName=\"priceList\" required>\n                      <option value=\"\">-- Select Price List --</option>\n                      <option value=\"BAMUL EMPLOYEE SALES PRICE LIST\">BAMUL EMPLOYEE SALES PRICE LIST</option>\n                      <option value=\"BAMUL SERVICES PRICE LIST\">BAMUL SERVICES PRICE LIST</option>\n                      <option value=\"BULK SALES PRICE LIST\">BULK SALES PRICE LIST</option>\n                      <option value=\"BULK SALES PRICE LIST 3.50 FAT 8.23 SNF\">BULK SALES PRICE LIST 3.50 FAT 8.23 SNF</option>\n                      <option value=\"CI_2423 PRICE LIST\">CI_2423 PRICE LIST</option>\n                      <option value=\"DEFENCE\">DEFENCE</option>\n                      <option value=\"DEPO SALES PRICE LIST\">DEPO SALES PRICE LIST</option>\n                      <option value=\"HOSUR SALES PRICE LIST\">HOSUR SALES PRICE LIST</option>\n                      <option value=\"INTER UNION SALES PRICE LIST\">INTER UNION SALES PRICE LIST</option>\n                      <option value=\"KBS-KMF CDPO PRICE LIST\">KBS-KMF CDPO PRICE LIST</option>\n                      <option value=\"KBS-KMF INTER UNION SALES\">KBS-KMF INTER UNION SALES</option>\n                      <option value=\"KBS-KMF ZP PRICE LIST\">KBS-KMF ZP PRICE LIST</option>\n                      <option value=\"KBS-NGO ADUGEKENDRA PRICE LIST\">KBS-NGO ADUGEKENDRA PRICE LIST</option>\n                      <option value=\"MILK AND CURD PRICE LIST\">MILK AND CURD PRICE LIST</option>\n                      <option value=\"MOTHER DAIRY PRICE LIST\">MOTHER DAIRY PRICE LIST</option>\n                      <option value=\"MRP PRICE LIST\">MRP PRICE LIST</option>\n                      <option value=\"P&I CATTLE FEED & FODDER PRICE LIST\">P&I CATTLE FEED & FODDER PRICE LIST</option>\n                      <option value=\"P&I DCS MATERIALS PRICE LIST\">P&I DCS MATERIALS PRICE LIST</option>\n                      <option value=\"P&I PRODUCERS MATERIALS PRICE LIST\">P&I PRODUCERS MATERIALS PRICE LIST</option>\n                      <option value=\"P&I SEMEN PRICE LIST\">P&I SEMEN PRICE LIST</option>\n                      <option value=\"PRO SALES PRICE LIST\">PRO SALES PRICE LIST</option>\n                      <option value=\"RELIANCE\">RELIANCE</option>\n                      <option value=\"RETAILER SALES PRICE LIST\">RETAILER SALES PRICE LIST</option>\n                      <option value=\"SCRAP SALES PRICE LIST\">SCRAP SALES PRICE LIST</option>\n                      <option value=\"SPECIAL SALES PRICE LIST\">SPECIAL SALES PRICE LIST</option>\n                      <option value=\"TAMILNADU PRICE LIST\">TAMILNADU PRICE LIST</option>\n                      <option value=\"UDAAN PRICE LIST\">UDAAN PRICE LIST</option>\n                      <option value=\"UTP PRICE LIST\">UTP PRICE LIST</option>\n                      <option value=\"VIP SALES PRICE LIST\">VIP SALES PRICE LIST</option>\n                      <option value=\"WSD PRICE LIST\">WSD PRICE LIST</option>\n                      <option value=\"OTHERS\">OTHERS</option>\n                    </select>\n                    <div *ngIf=\"customerForm.get('priceList').touched && customerForm.get('priceList').hasError('required')\" class=\"text-danger\" style=\"font-size:11px; margin-top:3px;\">Price List is required</div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-4 form-group\">\n                    <label>Customer Name <span class=\"text-danger\">*</span></label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"customerName\" placeholder=\"Enter customer name\">\n                    <div *ngIf=\"customerForm.get('customerName').touched && customerForm.get('customerName').hasError('required')\" class=\"text-danger\" style=\"font-size:11px; margin-top:3px;\">Customer Name is required</div>\n                    <div *ngIf=\"customerForm.get('customerName').touched && customerForm.get('customerName').hasError('invalidName')\" class=\"text-danger\" style=\"font-size:11px; margin-top:3px;\">Only English letters, numbers, spaces and dots allowed. No hyphens or special characters.</div>\n                  </div>\n                  <div class=\"col-md-4 form-group\">\n                    <label>Customer Type <span class=\"text-danger\">*</span></label>\n                    <select class=\"form-control\" formControlName=\"customerType\">\n                      <option value=\"\">-- Select --</option>\n                      <option value=\"PERSON\">PERSON</option>\n                      <option value=\"ORGANIZATION\">ORGANIZATION</option>\n                    </select>\n                    <div *ngIf=\"customerForm.get('customerType').touched && customerForm.get('customerType').hasError('required')\" class=\"text-danger\" style=\"font-size:11px; margin-top:3px;\">Customer Type is required</div>\n                  </div>\n                  <div class=\"col-md-4 form-group\">\n                    <label>Customer Account Number <span class=\"text-danger\">*</span></label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"accountNumber\" placeholder=\"Manually enter account number\" required>\n                    <div class=\"text-info\" style=\"font-size:11px; margin-top:3px;\">Please enter the account number manually. Auto-generation is disabled.</div>\n                    <div *ngIf=\"customerForm.get('accountNumber').touched && customerForm.get('accountNumber').hasError('required')\" class=\"text-danger\" style=\"font-size:11px; margin-top:3px;\">Account Number is required</div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-4 form-group\">\n                    <label>Customer Class <span class=\"text-danger\">*</span></label>\n                    <select class=\"form-control\" formControlName=\"customerClass\">\n                      <option value=\"\">-- Select --</option>\n                      <option value=\"BAMUL EMPLOYEE CUSTOMER\">BAMUL EMPLOYEE CUSTOMER</option>\n                      <option value=\"BMS\">BMS</option>\n                      <option value=\"CANTEEN-CUSTOMER\">CANTEEN-CUSTOMER</option>\n                      <option value=\"CASH CUSTOMER\">CASH CUSTOMER</option>\n                      <option value=\"CI\">CI</option>\n                      <option value=\"DAY COUNTER\">DAY COUNTER</option>\n                      <option value=\"FEDERAL\">FEDERAL</option>\n                      <option value=\"GOVT\">GOVT</option>\n                      <option value=\"IU\">IU</option>\n                      <option value=\"KMF\">KMF</option>\n                      <option value=\"KMF UNITS\">KMF UNITS</option>\n                      <option value=\"KSHEERA BHAGYA\">KSHEERA BHAGYA</option>\n                      <option value=\"LEASE\">LEASE</option>\n                      <option value=\"MPCS CUSTOMER\">MPCS CUSTOMER</option>\n                      <option value=\"PARLOUR\">PARLOUR</option>\n                      <option value=\"PRO\">PRO</option>\n                      <option value=\"RETAILER\">RETAILER</option>\n                      <option value=\"SCRAP\">SCRAP</option>\n                      <option value=\"TCD\">TCD</option>\n                      <option value=\"TRANSPORTER\">TRANSPORTER</option>\n                      <option value=\"WSD\">WSD</option>\n                      <option value=\"SECURITY DEPOSIT\">SECURITY DEPOSIT</option>\n                      <option value=\"OTHERS\">OTHERS</option>\n                    </select>\n                  </div>\n                  <div class=\"col-md-4 form-group\" *ngIf=\"customerForm.get('customerType').value !== 'ORGANIZATION'\">\n                    <label>Customer Aadhar Number <span class=\"text-danger\" *ngIf=\"customerForm.get('customerType').value === 'PERSON'\">*</span></label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"aadharNo\" placeholder=\"12-digit Aadhar\" maxlength=\"12\">\n                    <div *ngIf=\"customerForm.get('aadharNo').touched && customerForm.get('aadharNo').invalid\" class=\"text-danger\" style=\"font-size:11px; margin-top:3px;\">Valid 12-digit Aadhaar required (starts with 2-9)</div>\n                    <div style=\"margin-top: 8px;\">\n                      <label class=\"btn btn-sm btn-default\" style=\"cursor: pointer;\">\n                        <i class=\"fa fa-upload\"></i> Upload Aadhaar (PDF)\n                        <input type=\"file\" accept=\".pdf\" (change)=\"onAadharUpload($event)\" (click)=\"$event.target.value = null\" style=\"display: none;\">\n                      </label>\n                      <span *ngIf=\"aadharFileName\" class=\"text-success\" style=\"margin-left: 10px; font-size: 12px;\">\n                        <i class=\"fa fa-check-circle\"></i> {{ aadharFileName }}\n                        <button type=\"button\" class=\"btn btn-xs btn-danger\" (click)=\"removeAadhar()\" style=\"margin-left: 5px;\"><i class=\"fa fa-times\"></i></button>\n                      </span>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 form-group\" *ngIf=\"customerForm.get('customerType').value === 'ORGANIZATION'\">\n                    <label>CAN Certificate</label>\n                    <div style=\"margin-top: 8px;\">\n                      <label class=\"btn btn-sm btn-default\" style=\"cursor: pointer;\">\n                        <i class=\"fa fa-upload\"></i> Upload CAN Certificate (PDF)\n                        <input type=\"file\" accept=\".pdf\" (change)=\"onCanCertUpload($event)\" (click)=\"$event.target.value = null\" style=\"display: none;\">\n                      </label>\n                      <span *ngIf=\"canCertFileName\" class=\"text-success\" style=\"margin-left: 10px; font-size: 12px;\">\n                        <i class=\"fa fa-check-circle\"></i> {{ canCertFileName }}\n                        <button type=\"button\" class=\"btn btn-xs btn-danger\" (click)=\"removeCanCert()\" style=\"margin-left: 5px;\"><i class=\"fa fa-times\"></i></button>\n                      </span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-4 form-group\">\n                    <label>Customer Email <span class=\"text-danger\">*</span></label>\n                    <input type=\"email\" class=\"form-control\" formControlName=\"customerEmail\" placeholder=\"Enter email\" onpaste=\"return false\" oncopy=\"return false\" oncut=\"return false\">\n                    <div *ngIf=\"customerForm.get('customerEmail').touched && customerForm.get('customerEmail').invalid\" class=\"text-danger\" style=\"font-size:11px; margin-top:3px;\">Valid email required</div>\n                  </div>\n                  <div class=\"col-md-4 form-group\">\n                    <label>Confirm Customer Email <span class=\"text-danger\">*</span></label>\n                    <input type=\"email\" class=\"form-control\" formControlName=\"confirmCustomerEmail\" placeholder=\"Re-enter email\" onpaste=\"return false\" oncopy=\"return false\" oncut=\"return false\">\n                    <div *ngIf=\"customerForm.get('confirmCustomerEmail').value && customerForm.get('customerEmail').value !== customerForm.get('confirmCustomerEmail').value\" class=\"text-danger\" style=\"font-size:11px; margin-top:3px;\">Emails do not match</div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-4 form-group\">\n                    <label>Customer PAN Number <span class=\"text-danger\">*</span></label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"panNo\" placeholder=\"ABCDE1234F\" maxlength=\"10\" style=\"text-transform: uppercase;\" (input)=\"customerForm.get('panNo').setValue($event.target.value.toUpperCase(), {emitEvent: false})\">\n                    <div *ngIf=\"customerForm.get('panNo').touched && customerForm.get('panNo').invalid\" class=\"text-danger\" style=\"font-size:11px; margin-top:3px;\">Format: ABCDE1234F (5 letters + 4 digits + 1 letter)</div>\n                    <div style=\"margin-top: 8px;\">\n                      <label class=\"btn btn-sm btn-default\" style=\"cursor: pointer;\">\n                        <i class=\"fa fa-upload\"></i> Upload PAN Card (PDF)\n                        <input type=\"file\" accept=\".pdf\" (change)=\"onPanCardUpload($event)\" (click)=\"$event.target.value = null\" style=\"display: none;\">\n                      </label>\n                      <span *ngIf=\"panCardFileName\" class=\"text-success\" style=\"margin-left: 10px; font-size: 12px;\">\n                        <i class=\"fa fa-check-circle\"></i> {{ panCardFileName }}\n                      </span>\n                    </div>\n                    <div *ngIf=\"panCardFileName\" style=\"margin-top: 10px;\">\n                      <div style=\"display: inline-block; border: 1px solid #ddd; border-radius: 4px; padding: 8px 12px; background: #f9f9f9;\">\n                        <i class=\"fa fa-file-pdf-o text-danger\" style=\"font-size: 24px; vertical-align: middle;\"></i>\n                        <span style=\"margin-left: 8px; font-size: 13px; vertical-align: middle;\">{{ panCardFileName }}</span>\n                        <button type=\"button\" class=\"btn btn-xs btn-danger\" (click)=\"removePanCard()\" style=\"margin-left: 10px; vertical-align: middle;\">\n                          <i class=\"fa fa-times\"></i>\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 form-group\" *ngIf=\"customerForm.get('customerClassification').value === 'B2B'\">\n                    <label>Customer GSTIN Number <span class=\"text-danger\">*</span></label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"gstinNumber\" placeholder=\"22AAAAA0000A1Z5\" maxlength=\"15\" style=\"text-transform: uppercase;\" (input)=\"customerForm.get('gstinNumber').setValue($event.target.value.toUpperCase(), {emitEvent: false})\">\n                    <div *ngIf=\"customerForm.get('gstinNumber').touched && customerForm.get('gstinNumber').invalid\" class=\"text-danger\" style=\"font-size:11px; margin-top:3px;\">Format: 22AAAAA0000A1Z5</div>\n                    <div style=\"margin-top: 8px;\">\n                      <label class=\"btn btn-sm btn-default\" style=\"cursor: pointer;\">\n                        <i class=\"fa fa-upload\"></i> Upload GST Certificate (PDF) <span class=\"text-danger\">*</span>\n                        <input type=\"file\" accept=\".pdf\" (change)=\"onGstUpload($event)\" (click)=\"$event.target.value = null\" style=\"display: none;\">\n                      </label>\n                      <span *ngIf=\"gstFileName\" class=\"text-success\" style=\"margin-left: 10px; font-size: 12px;\">\n                        <i class=\"fa fa-check-circle\"></i> {{ gstFileName }}\n                        <button type=\"button\" class=\"btn btn-xs btn-danger\" (click)=\"removeGst()\" style=\"margin-left: 5px;\"><i class=\"fa fa-times\"></i></button>\n                      </span>\n                      <div *ngIf=\"!gstFile\" class=\"text-danger\" style=\"font-size:11px; margin-top:3px;\">GST Certificate upload is mandatory for B2B customers</div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- BILL TO ADDRESSES -->\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                <strong>Bill To Address Details</strong>\n              </div>\n              <div class=\"panel-body\">\n                <div *ngFor=\"let addr of billAddresses; let i = index\" style=\"border-bottom: 1px solid #eee; padding-bottom: 15px; margin-bottom: 15px;\">\n                  <div class=\"row\" *ngIf=\"false\">\n                    <div class=\"col-md-12 text-right\">\n                      <button type=\"button\" class=\"btn btn-xs btn-danger\" (click)=\"removeBillAddress(i)\"><i class=\"fa fa-trash\"></i> Remove</button>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-5 form-group\">\n                      <label>Address Line 1 <span class=\"text-danger\">*</span></label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addr.address1\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Street / Building\">\n                    </div>\n                    <div class=\"col-md-1 form-group\" style=\"padding-top: 25px;\">\n                      <button type=\"button\" class=\"btn btn-xs btn-info\" (click)=\"addr.address2 = addr.address1\" title=\"Copy to Address Line 2\" [disabled]=\"!addr.address1\">\n                        <i class=\"fa fa-arrow-right\"></i> Copy\n                      </button>\n                    </div>\n                    <div class=\"col-md-6 form-group\">\n                      <label>Address Line 2 <span class=\"text-danger\">*</span></label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addr.address2\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Area / Locality\">\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-3 form-group\">\n                      <label>State <span class=\"text-danger\">*</span></label>\n                      <select class=\"form-control\" [(ngModel)]=\"addr.state\" [ngModelOptions]=\"{standalone: true}\" (change)=\"onAddrStateChange(addr, 'bill')\">\n                        <option value=\"\">-- Select State --</option>\n                        <option *ngFor=\"let s of stateList\" [value]=\"s\">{{ s }}</option>\n                      </select>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <label>City <span class=\"text-danger\">*</span></label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addr.city\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Enter city\">\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <label>Postal Code <span class=\"text-danger\">*</span></label>\n                      <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addr.postalCode\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"560001\" maxlength=\"6\">\n                        <span class=\"input-group-btn\">\n                          <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"fetchByPincode(addr)\" [disabled]=\"!addr.postalCode || addr.postalCode.length !== 6\">\n                            <i class=\"fa fa-search\"></i>\n                          </button>\n                        </span>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <label>Country</label>\n                      <input type=\"text\" class=\"form-control\" value=\"India\" readonly style=\"background-color: #eee; cursor: not-allowed;\">\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-2 form-group\">\n                      <label>&nbsp;</label>\n                      <button type=\"button\" class=\"btn btn-sm btn-info\" (click)=\"detectLocation(addr)\">\n                        <i class=\"fa fa-map-marker\"></i> Detect\n                      </button>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <label>Latitude</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addr.latitude\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"12.97\" maxlength=\"10\" readonly style=\"background-color: #eee;\">\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <label>Longitude</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addr.longitude\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"77.59\" maxlength=\"10\" readonly style=\"background-color: #eee;\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- CORRESPONDENCE ADDRESS -->\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                <strong>Correspondence Address</strong>\n              </div>\n              <div class=\"panel-body\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <label style=\"cursor: pointer;\">\n                      <input type=\"checkbox\" [(ngModel)]=\"corrAddrSameAsBill\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"!billAddresses[0].address1\" (change)=\"onCorrAddrChange()\"> Same as Bill To Address\n                    </label>\n                  </div>\n                </div>\n                <div style=\"margin-top: 15px;\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6 form-group\">\n                      <label>Address Line 1 <span class=\"text-danger\">*</span></label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"corrAddress.address1\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Street / Building\" [readonly]=\"corrAddrSameAsBill\" [style.background-color]=\"corrAddrSameAsBill ? '#eee' : ''\">\n                    </div>\n                    <div class=\"col-md-6 form-group\">\n                      <label>Address Line 2</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"corrAddress.address2\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Area / Locality\" [readonly]=\"corrAddrSameAsBill\" [style.background-color]=\"corrAddrSameAsBill ? '#eee' : ''\">\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-3 form-group\">\n                      <label>State <span class=\"text-danger\">*</span></label>\n                      <input *ngIf=\"corrAddrSameAsBill\" type=\"text\" class=\"form-control\" [value]=\"corrAddress.state\" readonly style=\"background-color: #eee;\">\n                      <select *ngIf=\"!corrAddrSameAsBill\" class=\"form-control\" [(ngModel)]=\"corrAddress.state\" [ngModelOptions]=\"{standalone: true}\" (change)=\"onCorrStateChange()\">\n                        <option value=\"\">-- Select --</option>\n                        <option *ngFor=\"let s of stateList\" [value]=\"s\">{{ s }}</option>\n                      </select>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <label>City <span class=\"text-danger\">*</span></label>\n                      <input *ngIf=\"corrAddrSameAsBill\" type=\"text\" class=\"form-control\" [value]=\"corrAddress.city\" readonly style=\"background-color: #eee;\">\n                      <input *ngIf=\"!corrAddrSameAsBill\" type=\"text\" class=\"form-control\" [(ngModel)]=\"corrAddress.city\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Enter city\">\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <label>Postal Code <span class=\"text-danger\">*</span></label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"corrAddress.postalCode\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"560001\" maxlength=\"6\" [readonly]=\"corrAddrSameAsBill\" [style.background-color]=\"corrAddrSameAsBill ? '#eee' : ''\">\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <label>Country</label>\n                      <input type=\"text\" class=\"form-control\" value=\"India\" readonly style=\"background-color: #eee;\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- SHIP TO ADDRESSES -->\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                <strong>Ship To Address Details</strong>\n                <button type=\"button\" class=\"btn btn-sm btn-primary pull-right\" (click)=\"addShipAddress()\" style=\"margin-top: -3px;\">\n                  <i class=\"fa fa-plus\"></i> Add Ship To Address\n                </button>\n              </div>\n              <div class=\"panel-body\">\n                <div *ngFor=\"let addr of shipAddresses; let i = index\" style=\"border-bottom: 1px solid #eee; padding-bottom: 15px; margin-bottom: 15px;\">\n                  <div class=\"row\" *ngIf=\"i > 0\">\n                    <div class=\"col-md-12 text-right\">\n                      <button type=\"button\" class=\"btn btn-xs btn-danger\" (click)=\"removeShipAddress(i)\"><i class=\"fa fa-trash\"></i> Remove</button>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-5 form-group\">\n                      <label>Address Line 1 <span class=\"text-danger\">*</span></label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addr.address1\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Street / Building\">\n                    </div>\n                    <div class=\"col-md-1 form-group\" style=\"padding-top: 25px;\">\n                      <button type=\"button\" class=\"btn btn-xs btn-info\" (click)=\"addr.address2 = addr.address1\" title=\"Copy to Address Line 2\" [disabled]=\"!addr.address1\">\n                        <i class=\"fa fa-arrow-right\"></i> Copy\n                      </button>\n                    </div>\n                    <div class=\"col-md-6 form-group\">\n                      <label>Address Line 2 <span class=\"text-danger\">*</span></label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addr.address2\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Area / Locality\">\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-3 form-group\">\n                      <label>State <span class=\"text-danger\">*</span></label>\n                      <select class=\"form-control\" [(ngModel)]=\"addr.state\" [ngModelOptions]=\"{standalone: true}\" (change)=\"onAddrStateChange(addr, 'ship')\">\n                        <option value=\"\">-- Select State --</option>\n                        <option *ngFor=\"let s of stateList\" [value]=\"s\">{{ s }}</option>\n                      </select>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <label>City <span class=\"text-danger\">*</span></label>\n                      <select class=\"form-control\" [(ngModel)]=\"addr.city\" [ngModelOptions]=\"{standalone: true}\">\n                        <option value=\"\">-- Select City --</option>\n                        <option *ngFor=\"let c of addr.cities\" [value]=\"c\">{{ c }}</option>\n                      </select>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <label>Postal Code <span class=\"text-danger\">*</span></label>\n                      <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addr.postalCode\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"560001\" maxlength=\"6\">\n                        <span class=\"input-group-btn\">\n                          <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"fetchByPincode(addr)\" [disabled]=\"!addr.postalCode || addr.postalCode.length !== 6\">\n                            <i class=\"fa fa-search\"></i>\n                          </button>\n                        </span>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <label>Country</label>\n                      <input type=\"text\" class=\"form-control\" value=\"India\" readonly style=\"background-color: #eee; cursor: not-allowed;\">\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-2 form-group\">\n                      <label>&nbsp;</label>\n                      <button type=\"button\" class=\"btn btn-sm btn-info\" (click)=\"detectLocation(addr)\">\n                        <i class=\"fa fa-map-marker\"></i> Detect\n                      </button>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <label>Latitude</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addr.latitude\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"12.97\" maxlength=\"10\" readonly style=\"background-color: #eee;\">\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <label>Longitude</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addr.longitude\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"77.59\" maxlength=\"10\" readonly style=\"background-color: #eee;\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- CONTACT DETAILS -->\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                <strong>Contact Details</strong>\n                <button type=\"button\" class=\"btn btn-sm btn-primary pull-right\" (click)=\"addContact()\" style=\"margin-top: -3px;\">\n                  <i class=\"fa fa-plus\"></i> Add Contact\n                </button>\n              </div>\n              <div class=\"panel-body\">\n                <div *ngFor=\"let contact of contacts; let i = index\" style=\"border-bottom: 1px solid #eee; padding-bottom: 15px; margin-bottom: 15px;\">\n                  <div class=\"row\">\n                    <div class=\"col-md-3 form-group\">\n                      <label>Contact Person Name <span class=\"text-danger\">*</span></label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"contact.contactPerson\" [ngModelOptions]=\"{standalone: true}\">\n                    </div>\n                    <div class=\"col-md-2 form-group\">\n                      <label>Contact Person Designation</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"contact.designation\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"e.g. Manager\">\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <label>Contact Person Mobile <span class=\"text-danger\">*</span></label>\n                      <div class=\"input-group\">\n                        <span class=\"input-group-addon\">+91</span>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"contact.mobileNumber\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"9876543210\" maxlength=\"10\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-1 form-group\" *ngIf=\"i > 0\">\n                      <label>&nbsp;</label>\n                      <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"removeContact(i)\">\n                        <i class=\"fa fa-trash\"></i>\n                      </button>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-4 form-group\">\n                      <label>Contact Person Email <span class=\"text-danger\">*</span></label>\n                      <input type=\"email\" class=\"form-control\" [(ngModel)]=\"contact.emailId\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Enter email\" onpaste=\"return false\" oncopy=\"return false\" oncut=\"return false\">\n                    </div>\n                    <div class=\"col-md-4 form-group\">\n                      <label>Confirm Contact Person Email <span class=\"text-danger\">*</span></label>\n                      <input type=\"email\" class=\"form-control\" [(ngModel)]=\"contact.confirmEmailId\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Re-enter email\" onpaste=\"return false\" oncopy=\"return false\" oncut=\"return false\">\n                      <div *ngIf=\"contact.confirmEmailId && contact.emailId !== contact.confirmEmailId\" class=\"text-danger\" style=\"font-size:11px; margin-top:3px;\">Emails do not match</div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- BANK DETAILS -->\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                <strong>Bank Details</strong>\n                <button type=\"button\" class=\"btn btn-sm btn-primary pull-right\" (click)=\"addBank()\" style=\"margin-top: -3px;\">\n                  <i class=\"fa fa-plus\"></i> Add Bank\n                </button>\n              </div>\n              <div class=\"panel-body\">\n                <div *ngFor=\"let bank of bankAccounts; let i = index\" style=\"border-bottom: 1px solid #eee; padding-bottom: 15px; margin-bottom: 15px;\">\n                  <div class=\"row\" *ngIf=\"i > 0\">\n                    <div class=\"col-md-12 text-right\">\n                      <button type=\"button\" class=\"btn btn-xs btn-danger\" (click)=\"removeBank(i)\"><i class=\"fa fa-trash\"></i> Remove</button>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-3 form-group\">\n                      <label>Bank Name <span class=\"text-danger\" *ngIf=\"i === 0\">*</span></label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bank.bankName\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Enter bank name or use IFSC Fetch\" list=\"bankList\">\n                      <datalist id=\"bankList\">\n                        <option *ngFor=\"let b of bankNamesList\" [value]=\"b\"></option>\n                      </datalist>\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <label>Branch Name <span class=\"text-danger\" *ngIf=\"i === 0\">*</span></label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bank.branchName\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Enter branch name\" style=\"text-transform: uppercase;\" (input)=\"bank.branchName = $event.target.value.toUpperCase()\">\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <label>Account Number <span class=\"text-danger\" *ngIf=\"i === 0\">*</span></label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bank.accountNumber\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Account number\">\n                    </div>\n                    <div class=\"col-md-3 form-group\">\n                      <label>IFSC Code <span class=\"text-danger\" *ngIf=\"i === 0\">*</span></label>\n                      <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bank.ifscCode\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"SBIN0001234\" maxlength=\"11\" style=\"text-transform: uppercase;\" (input)=\"bank.ifscCode = $event.target.value.toUpperCase()\">\n                        <span class=\"input-group-btn\">\n                          <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"fetchByIfsc(bank)\" [disabled]=\"!bank.ifscCode || bank.ifscCode.length !== 11\">\n                            <i class=\"fa fa-search\"></i> Fetch\n                          </button>\n                        </span>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-4 form-group\">\n                      <label>Cancelled Cheque / Passbook (PDF)</label>\n                      <div>\n                        <label class=\"btn btn-sm btn-default\" style=\"cursor: pointer;\">\n                          <i class=\"fa fa-upload\"></i> Upload Cancelled Cheque\n                          <input type=\"file\" accept=\".pdf\" (change)=\"onBankChequeUpload($event, bank)\" (click)=\"$event.target.value = null\" style=\"display: none;\">\n                        </label>\n                        <span *ngIf=\"bank.chequeFileName\" class=\"text-success\" style=\"margin-left: 10px; font-size: 12px;\">\n                          <i class=\"fa fa-check-circle\"></i> {{ bank.chequeFileName }}\n                          <button type=\"button\" class=\"btn btn-xs btn-danger\" (click)=\"bank.chequeFile = null; bank.chequeFileName = ''\" style=\"margin-left: 5px;\"><i class=\"fa fa-times\"></i></button>\n                        </span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- SALES DETAILS -->\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\"><strong>Sales Details</strong></div>\n              <div class=\"panel-body\">\n                <div class=\"row\">\n                  <div class=\"col-md-4 form-group\">\n                    <label>Salesperson / FSR Name</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"salesperson\">\n                  </div>\n                  <div class=\"col-md-4 form-group\">\n                    <label>Salesperson / FSR Number</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"salesrepEmpNumber\">\n                  </div>\n                  <div class=\"col-md-4 form-group\">\n                    <label>Primary Order Type</label>\n                    <select class=\"form-control\" formControlName=\"primaryOrderType\">\n                      <option value=\"\">-- Select --</option>\n                      <option *ngFor=\"let ot of orderTypesList\" [value]=\"ot\">{{ ot }}</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- PAYMENT DETAILS -->\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\"><strong>Payment Details</strong></div>\n              <div class=\"panel-body\">\n                <div class=\"row\">\n                  <div class=\"col-md-4 form-group\">\n                    <label>Payment Details <span class=\"text-danger\">*</span></label>\n                    <select class=\"form-control\" formControlName=\"paymentTerms\" required>\n                      <option value=\"\">-- Select --</option>\n                      <option value=\"IMMEDIATE\">IMMEDIATE</option>\n                      <option value=\"1 NET\">1 NET</option>\n                      <option value=\"30 NET\">30 NET</option>\n                    </select>\n                  </div>\n                  <div class=\"col-md-4 form-group\">\n                    <label>Credit Limit (₹)</label>\n                    <input type=\"number\" class=\"form-control\" formControlName=\"creditLimit\" placeholder=\"50000\">\n                  </div>\n                  <div class=\"col-md-4 form-group\">\n                    <label>Deposit (₹)</label>\n                    <input type=\"number\" class=\"form-control\" formControlName=\"deposit\">\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-3 form-group\">\n                    <label>Off Ord No</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"offOrdNo\">\n                  </div>\n                  <div class=\"col-md-3 form-group\">\n                    <label>Off Ord Date</label>\n                    <input type=\"date\" class=\"form-control\" formControlName=\"offOrdDate\">\n                  </div>\n                  <div class=\"col-md-4 form-group\">\n                    <label>Order Document (PDF)</label>\n                    <div>\n                      <label class=\"btn btn-sm btn-default\" style=\"cursor: pointer;\">\n                        <i class=\"fa fa-upload\"></i> Upload Order Document\n                        <input type=\"file\" accept=\".pdf\" (change)=\"onOrderDocUpload($event)\" (click)=\"$event.target.value = null\" style=\"display: none;\">\n                      </label>\n                      <span *ngIf=\"orderDocFileName\" class=\"text-success\" style=\"margin-left: 10px; font-size: 12px;\">\n                        <i class=\"fa fa-check-circle\"></i> {{ orderDocFileName }}\n                        <button type=\"button\" class=\"btn btn-xs btn-danger\" (click)=\"removeOrderDoc()\" style=\"margin-left: 5px;\"><i class=\"fa fa-times\"></i></button>\n                      </span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\" style=\"margin-top: 10px; border-top: 1px solid #eee; padding-top: 15px;\">\n                  <div class=\"col-md-4 form-group\">\n                    <label>FDR Amount (₹)</label>\n                    <input type=\"number\" class=\"form-control\" formControlName=\"fdrNumber\" placeholder=\"FDR Amount\">\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- ZONE / AREA -->\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\"><strong>Zone / Area Details</strong></div>\n              <div class=\"panel-body\">\n                <div class=\"row\">\n                  <div class=\"col-md-3 form-group\">\n                    <label>Zone Code</label>\n                    <select class=\"form-control\" formControlName=\"zoneCode\" (change)=\"onZoneChange($event.target.value)\">\n                      <option value=\"\">-- Select --</option>\n                      <option value=\"1\">Zone 1</option>\n                      <option value=\"2\">Zone 2</option>\n                      <option value=\"3\">Zone 3</option>\n                      <option value=\"4\">Zone 4</option>\n                      <option value=\"5\">Zone 5</option>\n                    </select>\n                  </div>\n                  <div class=\"col-md-3 form-group\">\n                    <label>Area</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"area\">\n                  </div>\n                  <div class=\"col-md-3 form-group\">\n                    <label>Sub Area</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"subArea\">\n                  </div>\n                  <div class=\"col-md-3 form-group\">\n                    <label>Ward</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"ward\">\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-6 form-group\">\n                    <label>Zonal Manager</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"zonalManager\" readonly style=\"background-color: #eee;\">\n                  </div>\n                  <div class=\"col-md-6 form-group\">\n                    <label>Zonal Manager Emp No</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"zonalManagerEmp\" readonly style=\"background-color: #eee;\">\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- NOMINEE DETAILS - only for PERSON type -->\n            <div class=\"panel panel-default\" *ngIf=\"customerForm.get('customerType').value === 'PERSON'\">\n              <div class=\"panel-heading\"><strong>Nominee Details</strong></div>\n              <div class=\"panel-body\">\n                <div class=\"row\">\n                  <div class=\"col-md-4 form-group\">\n                    <label>Nominee Name</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"nomineeName\">\n                  </div>\n                  <div class=\"col-md-4 form-group\">\n                    <label>Nominee Contact</label>\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\">+91</span>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"nomineeContact\" maxlength=\"10\">\n                    </div>\n                    <div *ngIf=\"customerForm.get('nomineeContact').touched && customerForm.get('nomineeContact').invalid\" class=\"text-danger\" style=\"font-size:11px; margin-top:3px;\">Valid 10-digit number starting with 6-9</div>\n                  </div>\n                  <div class=\"col-md-4 form-group\">\n                    <label>Nominee Relationship</label>\n                    <select class=\"form-control\" formControlName=\"nomineeRelationship\">\n                      <option value=\"\">-- Select --</option>\n                      <option value=\"FATHER\">Father</option>\n                      <option value=\"MOTHER\">Mother</option>\n                      <option value=\"SPOUSE\">Spouse</option>\n                      <option value=\"SON\">Son</option>\n                      <option value=\"DAUGHTER\">Daughter</option>\n                      <option value=\"BROTHER\">Brother</option>\n                      <option value=\"SISTER\">Sister</option>\n                      <option value=\"OTHERS\">Others</option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-8 form-group\">\n                    <label>Nominee Supporting Documents (PDF)</label>\n                    <div>\n                      <label class=\"btn btn-sm btn-default\" style=\"cursor: pointer;\">\n                        <i class=\"fa fa-upload\"></i> Upload Documents (Multiple PDFs)\n                        <input type=\"file\" accept=\".pdf\" multiple (change)=\"onNomineeDocUpload($event)\" (click)=\"$event.target.value = null\" style=\"display: none;\">\n                      </label>\n                      <div class=\"text-muted\" style=\"font-size: 11px; margin-top: 3px;\">You can select multiple PDF files at once</div>\n                    </div>\n                    <!-- Already uploaded nominee docs (edit mode) -->\n                    <div *ngIf=\"existingNomineeDocNames && existingNomineeDocNames.length > 0\" style=\"margin-top: 10px;\">\n                      <p style=\"font-size: 12px; color: #666; margin-bottom: 5px;\"><strong>Already uploaded:</strong></p>\n                      <div *ngFor=\"let name of existingNomineeDocNames; let i = index\" style=\"display: flex; align-items: center; margin-bottom: 5px; padding: 5px; border: 1px solid #c3e6cb; border-radius: 3px; background: #d4edda;\">\n                        <i class=\"fa fa-file-pdf-o text-danger\" style=\"font-size: 16px; margin-right: 8px;\"></i>\n                        <span style=\"flex: 1; font-size: 12px;\">{{ name }}</span>\n                        <span class=\"text-success\" style=\"font-size: 11px;\"><i class=\"fa fa-check-circle\"></i> Saved</span>\n                        <button type=\"button\" class=\"btn btn-xs btn-danger\" (click)=\"removeExistingNomineeDoc(i)\" style=\"margin-left: 5px;\">\n                          <i class=\"fa fa-times\"></i>\n                        </button>\n                      </div>\n                    </div>\n                    <!-- New nominee docs to upload -->\n                    <div *ngIf=\"nomineeDocFiles && nomineeDocFiles.length > 0\" style=\"margin-top: 10px;\">\n                      <div *ngFor=\"let doc of nomineeDocFiles; let i = index\" style=\"display: flex; align-items: center; margin-bottom: 5px; padding: 5px; border: 1px solid #ddd; border-radius: 3px; background: #f9f9f9;\">\n                        <i class=\"fa fa-file-pdf-o text-danger\" style=\"font-size: 16px; margin-right: 8px;\"></i>\n                        <span style=\"flex: 1; font-size: 12px;\">{{ doc.name }}</span>\n                        <button type=\"button\" class=\"btn btn-xs btn-danger\" (click)=\"removeNomineeDoc(i)\" style=\"margin-left: 5px;\">\n                          <i class=\"fa fa-times\"></i>\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- DISTRIBUTOR INFO -->\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\"><strong>Distributor Information</strong></div>\n              <div class=\"panel-body\">\n                <div class=\"row\">\n                  <div class=\"col-md-3 form-group\">\n                    <label>Products Distributor</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"productsDistributor\">\n                  </div>\n                  <div class=\"col-md-3 form-group\">\n                    <label>Distributor Number</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"distributorNumber\">\n                  </div>\n                  <div class=\"col-md-3 form-group\">\n                    <label>Icecream Distributor</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"icecreamDistributor\">\n                  </div>\n                  <div class=\"col-md-3 form-group\">\n                    <label>Icecream Dist Num</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"icecreamDistNum\">\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- SUBMIT -->\n            <!-- ADDITIONAL INFORMATION -->\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\"><strong>Additional Information</strong></div>\n              <div class=\"panel-body\">\n                <div class=\"row\">\n                  <div class=\"col-md-12 form-group\">\n                    <label>Remarks / Additional Details</label>\n                    <textarea class=\"form-control\" formControlName=\"additionalInfo\" rows=\"6\" placeholder=\"Enter any additional information here...\" style=\"resize: vertical; min-height: 120px;\"></textarea>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"text-center\" style=\"margin-top: 20px;\">\n              <button type=\"submit\" class=\"btn btn-success btn-lg\">\n                <i class=\"fa fa-paper-plane\"></i> Submit for Approval\n              </button>\n              <div *ngIf=\"customerForm.invalid || !contacts[0].contactPerson || !contacts[0].mobileNumber || !contacts[0].emailId || contacts[0].emailId !== contacts[0].confirmEmailId || customerForm.get('customerEmail').value !== customerForm.get('confirmCustomerEmail').value || (customerForm.get('customerClassification').value === 'B2B' && !gstFile)\" class=\"text-danger\" style=\"margin-top: 10px; font-size: 13px;\">\n                <i class=\"fa fa-exclamation-triangle\"></i>\n                <span *ngIf=\"customerForm.invalid\"> Please fill all mandatory fields correctly.</span>\n                <span *ngIf=\"customerForm.get('accountNumber').touched && customerForm.get('accountNumber').hasError('required')\"> Account Number is required.</span>\n                <span *ngIf=\"!contacts[0].contactPerson || !contacts[0].mobileNumber || !contacts[0].emailId\"> Contact details are incomplete.</span>\n                <span *ngIf=\"contacts[0].emailId && contacts[0].emailId !== contacts[0].confirmEmailId\"> Contact emails do not match.</span>\n                <span *ngIf=\"customerForm.get('customerEmail').value !== customerForm.get('confirmCustomerEmail').value\"> Customer emails do not match.</span>\n                <span *ngIf=\"customerForm.get('customerClassification').value === 'B2B' && !gstFile\"> GST Certificate upload is required for B2B.</span>\n              </div>\n              <button type=\"button\" class=\"btn btn-default btn-lg\" (click)=\"onReset()\" style=\"margin-left: 10px;\">\n                <i class=\"fa fa-refresh\"></i> Reset\n              </button>\n            </div>\n\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n\n<!-- MAP MODAL -->\n<div class=\"modal-overlay\" *ngIf=\"showMap\" (click)=\"closeMap()\">\n  <div class=\"modal-box\" (click)=\"$event.stopPropagation()\" style=\"width: 700px; height: 600px;\">\n    <div class=\"modal-header-custom\" style=\"background-color: #1a73e8;\">\n      <h4><i class=\"fa fa-map-marker\"></i> Select Location on Map</h4>\n      <button class=\"close-btn\" (click)=\"closeMap()\">&times;</button>\n    </div>\n    <div style=\"padding: 10px;\">\n      <div style=\"margin-bottom: 8px; display: flex;\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"mapSearchQuery\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Search location (e.g. Koramangala, Bengaluru)\" (keyup.enter)=\"searchMapLocation()\" style=\"flex: 1;\">\n        <button class=\"btn btn-primary\" (click)=\"searchMapLocation()\" style=\"margin-left: 5px;\"><i class=\"fa fa-search\"></i> Search</button>\n      </div>\n      <p style=\"font-size: 12px; color: #666; margin-bottom: 5px;\">Search a place or click on the map to select location</p>\n      <div id=\"map\" style=\"height: 380px; border-radius: 5px;\"></div>\n      <div style=\"margin-top: 10px; text-align: right;\">\n        <span style=\"font-size: 13px; margin-right: 15px;\" *ngIf=\"selectedLat\">\n          <strong>Lat:</strong> {{ selectedLat }} | <strong>Lng:</strong> {{ selectedLng }}\n        </span>\n        <button class=\"btn btn-success\" (click)=\"confirmLocation()\" [disabled]=\"!selectedLat\">\n          <i class=\"fa fa-check\"></i> Confirm Location\n        </button>\n        <button class=\"btn btn-default\" (click)=\"closeMap()\" style=\"margin-left: 5px;\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customer-update/customer-update.component.html": (
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customer-update/customer-update.component.html ***!
    \************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_pages_customerUpdate_customerUpdateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header bg-primary text-white\" style=\"padding: 15px 20px;\">\n          <h4><i class=\"fa fa-edit\"></i> Update Customer Details</h4>\n        </div>\n        <div class=\"card-body\" style=\"padding: 20px;\">\n\n          <!-- SEARCH -->\n          <div *ngIf=\"!editing\" class=\"panel panel-default\">\n            <div class=\"panel-heading\"><strong>Search Customer</strong></div>\n            <div class=\"panel-body\">\n              <div class=\"row\">\n                <div class=\"col-md-6 form-group\">\n                  <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchQuery\" placeholder=\"Search by Account Number or Customer Name\" (keyup.enter)=\"search()\">\n                    <span class=\"input-group-btn\">\n                      <button class=\"btn btn-primary\" (click)=\"search()\"><i class=\"fa fa-search\"></i> Search</button>\n                    </span>\n                  </div>\n                </div>\n              </div>\n\n              <!-- Search Results -->\n              <table class=\"table table-bordered table-striped\" *ngIf=\"searchResults.length > 0\" style=\"margin-top: 15px;\">\n                <thead class=\"thead-dark\">\n                  <tr>\n                    <th>Account No</th>\n                    <th>Customer Name</th>\n                    <th>Type</th>\n                    <th>Class</th>\n                    <th>Source</th>\n                    <th>Status</th>\n                    <th>Action</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let cust of searchResults\">\n                    <td>{{ cust.accountNumber }}</td>\n                    <td>{{ cust.customerName }}</td>\n                    <td>{{ cust.customerType }}</td>\n                    <td>{{ cust.customerClass }}</td>\n                    <td><span class=\"label\" [ngClass]=\"{'label-info': cust.source === 'OCI', 'label-warning': cust.source === 'LEGACY'}\">{{ cust.source }}</span></td>\n                    <td>{{ cust.status || '-' }}</td>\n                    <td><button class=\"btn btn-sm btn-info\" (click)=\"selectCustomer(cust)\"><i class=\"fa fa-edit\"></i> Edit</button></td>\n                  </tr>\n                </tbody>\n              </table>\n\n              <div *ngIf=\"message\" class=\"alert\" [ngClass]=\"{'alert-warning': messageType === 'warning'}\" style=\"margin-top: 10px;\">{{ message }}</div>\n            </div>\n          </div>\n\n          <!-- EDIT FORM -->\n          <div *ngIf=\"editing && selectedCustomer\">\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\"><strong>Basic Information</strong></div>\n              <div class=\"panel-body\">\n                <div class=\"row\">\n                  <div class=\"col-md-4 form-group\">\n                    <label>Customer Name <span class=\"text-danger\">*</span></label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedCustomer.customerName\">\n                  </div>\n                  <div class=\"col-md-4 form-group\">\n                    <label>Account Number</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedCustomer.accountNumber\" readonly style=\"background-color: #eee;\">\n                  </div>\n                  <div class=\"col-md-4 form-group\">\n                    <label>Customer Type</label>\n                    <select class=\"form-control\" [(ngModel)]=\"selectedCustomer.customerType\">\n                      <option value=\"PERSON\">PERSON</option>\n                      <option value=\"ORGANIZATION\">ORGANIZATION</option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-4 form-group\">\n                    <label>PAN No</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedCustomer.panNo\" maxlength=\"10\" style=\"text-transform: uppercase;\">\n                  </div>\n                  <div class=\"col-md-4 form-group\">\n                    <label>GSTIN</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedCustomer.gstinNumber\" maxlength=\"15\" style=\"text-transform: uppercase;\">\n                  </div>\n                  <div class=\"col-md-4 form-group\">\n                    <label>Email</label>\n                    <input type=\"email\" class=\"form-control\" [(ngModel)]=\"selectedCustomer.emailId\">\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\"><strong>Address Details</strong></div>\n              <div class=\"panel-body\">\n                <div class=\"row\">\n                  <div class=\"col-md-6 form-group\">\n                    <label>Address Line 1</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedCustomer.address1\">\n                  </div>\n                  <div class=\"col-md-6 form-group\">\n                    <label>Address Line 2</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedCustomer.address2\">\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-3 form-group\">\n                    <label>City</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedCustomer.city\">\n                  </div>\n                  <div class=\"col-md-3 form-group\">\n                    <label>State</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedCustomer.state\">\n                  </div>\n                  <div class=\"col-md-3 form-group\">\n                    <label>Postal Code</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedCustomer.postalCode\" maxlength=\"6\">\n                  </div>\n                  <div class=\"col-md-3 form-group\">\n                    <label>Country</label>\n                    <input type=\"text\" class=\"form-control\" value=\"India\" readonly style=\"background-color: #eee;\">\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\"><strong>Contact Details</strong></div>\n              <div class=\"panel-body\">\n                <div class=\"row\">\n                  <div class=\"col-md-4 form-group\">\n                    <label>Contact Person</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedCustomer.contactPerson\">\n                  </div>\n                  <div class=\"col-md-4 form-group\">\n                    <label>Mobile Number</label>\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\">+91</span>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedCustomer.mobileNumber\" maxlength=\"10\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 form-group\">\n                    <label>Email</label>\n                    <input type=\"email\" class=\"form-control\" [(ngModel)]=\"selectedCustomer.emailId\">\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\"><strong>Bank Details</strong></div>\n              <div class=\"panel-body\">\n                <div class=\"row\">\n                  <div class=\"col-md-3 form-group\">\n                    <label>Bank Name</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedCustomer.bankName\">\n                  </div>\n                  <div class=\"col-md-3 form-group\">\n                    <label>Branch Name</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedCustomer.branchName\">\n                  </div>\n                  <div class=\"col-md-3 form-group\">\n                    <label>Account Number</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedCustomer.bankAccountNumber\">\n                  </div>\n                  <div class=\"col-md-3 form-group\">\n                    <label>IFSC Code</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedCustomer.ifscCode\" maxlength=\"11\" style=\"text-transform: uppercase;\">\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\"><strong>Payment Details</strong></div>\n              <div class=\"panel-body\">\n                <div class=\"row\">\n                  <div class=\"col-md-3 form-group\">\n                    <label>Payment Terms</label>\n                    <select class=\"form-control\" [(ngModel)]=\"selectedCustomer.paymentTerms\">\n                      <option value=\"\">-- Select --</option>\n                      <option value=\"IMMEDIATE\">IMMEDIATE</option>\n                      <option value=\"1 NET\">1 NET</option>\n                      <option value=\"30 NET\">30 NET</option>\n                    </select>\n                  </div>\n                  <div class=\"col-md-3 form-group\">\n                    <label>Credit Limit (₹)</label>\n                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"selectedCustomer.creditLimit\">\n                  </div>\n                  <div class=\"col-md-3 form-group\">\n                    <label>Deposit (₹)</label>\n                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"selectedCustomer.deposit\">\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- SUBMIT -->\n            <div class=\"text-center\" style=\"margin-top: 20px;\">\n              <button class=\"btn btn-success btn-lg\" (click)=\"submitUpdate()\">\n                <i class=\"fa fa-paper-plane\"></i> Submit Update for Approval\n              </button>\n              <button class=\"btn btn-default btn-lg\" (click)=\"cancel()\" style=\"margin-left: 10px;\">\n                <i class=\"fa fa-times\"></i> Cancel\n              </button>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/finance-approval/finance-approval.component.html": (
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/finance-approval/finance-approval.component.html ***!
    \**************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_pages_financeApproval_financeApprovalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"container-fluid\" *ngIf=\"authorized\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header bg-info text-white\">\n          <h4><i class=\"fa fa-money\"></i> Finance Head - Customer Approval</h4>\n          <p style=\"margin: 0; font-size: 13px;\">Approve or reject customer creation/update requests</p>\n        </div>\n        <div class=\"card-body\">\n          <div style=\"margin-bottom: 15px;\">\n            <button class=\"btn btn-sm\" [ngClass]=\"{'btn-primary': statusFilter === 'ALL', 'btn-default': statusFilter !== 'ALL'}\" (click)=\"statusFilter = 'ALL'\">All</button>\n            <button class=\"btn btn-sm\" [ngClass]=\"{'btn-warning': statusFilter === 'PA', 'btn-default': statusFilter !== 'PA'}\" (click)=\"statusFilter = 'PA'\" style=\"margin-left: 5px;\">Pending</button>\n            <button class=\"btn btn-sm\" [ngClass]=\"{'btn-success': statusFilter === 'S', 'btn-default': statusFilter !== 'S'}\" (click)=\"statusFilter = 'S'\" style=\"margin-left: 5px;\">Approved</button>\n            <button class=\"btn btn-sm\" [ngClass]=\"{'btn-danger': statusFilter === 'REJECTED', 'btn-default': statusFilter !== 'REJECTED'}\" (click)=\"statusFilter = 'REJECTED'\" style=\"margin-left: 5px;\">Rejected</button>\n          </div>\n          <table class=\"table table-bordered table-striped\">\n            <thead class=\"thead-dark\">\n              <tr>\n                <th>#</th>\n                <th>Customer Name</th>\n                <th>Account No</th>\n                <th>Type</th>\n                <th>City</th>\n                <th>Credit Limit</th>\n                <th>Submitted Date</th>\n                <th>Status</th>\n                <th>Submitted By</th>\n                <th>Actioned By</th>\n                <th>Error/Reason</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let cust of getFilteredCustomers(); let i = index\">\n                <td>{{ i + 1 }}</td>\n                <td>{{ cust.customerName }}</td>\n                <td>{{ cust.accountNumber }}</td>\n                <td>{{ cust.customerType }}</td>\n                <td>{{ cust.city }}</td>\n                <td>₹ {{ cust.creditLimit }}</td>\n                <td>{{ cust.creationDate | date:'dd-MMM-yyyy HH:mm' }}</td>\n                <td>\n                  <span class=\"status-badge\"\n                    [ngClass]=\"{'status-pending': cust.pickedStatus === 'PA', 'status-approved': cust.pickedStatus === 'S', 'status-rejected': cust.pickedStatus === 'REJECTED'}\">\n                    {{ cust.pickedStatus === 'PA' ? 'PENDING' : cust.pickedStatus === 'S' ? 'APPROVED' : cust.pickedStatus === 'REJECTED' ? 'REJECTED' : cust.pickedStatus }}\n                  </span>\n                </td>\n                <td>{{ cust.submittedBy || '-' }}</td>\n                <td>{{ cust.approvedBy || '-' }}</td>\n                <td>{{ cust.pickedStatus === 'S' ? 'NA' : (cust.errorMsg || '-') }}</td>\n                <td>\n                  <a href=\"javascript:void(0)\" (click)=\"viewDetails(cust)\" class=\"view-link\">\n                    <i class=\"fa fa-eye\"></i> View Details\n                  </a>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <div *ngIf=\"getFilteredCustomers().length === 0\" class=\"text-center\" style=\"padding: 30px; color: #999;\">\n            <i class=\"fa fa-inbox\" style=\"font-size: 40px;\"></i>\n            <p>No customer requests found</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- DETAIL MODAL -->\n<div class=\"modal-overlay\" *ngIf=\"selectedCustomer\" (click)=\"closeModal()\">\n  <div class=\"modal-box\" (click)=\"$event.stopPropagation()\">\n    <div class=\"modal-header-custom\">\n      <h4><i class=\"fa fa-user\"></i> Customer Details</h4>\n      <button class=\"close-btn\" (click)=\"closeModal()\">&times;</button>\n    </div>\n    <div class=\"modal-body-custom\">\n\n      <!-- Basic Info -->\n      <div class=\"section-title\">Basic Information</div>\n      <div class=\"row\">\n        <div class=\"col-md-4\"><div class=\"detail-row\"><label>Customer Name</label><p>{{ selectedCustomer.customerName }}</p></div></div>\n        <div class=\"col-md-4\" *ngIf=\"selectedCustomer.pickedStatus !== 'REJECTED'\"><div class=\"detail-row\"><label>Account Number</label><p>{{ selectedCustomer.accountNumber || 'Not provided' }}</p></div></div>\n        <div class=\"col-md-4\"><div class=\"detail-row\"><label>Customer Type</label><p>{{ selectedCustomer.customerType }}</p></div></div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\"><div class=\"detail-row\"><label>B2B / B2C</label><p>{{ selectedCustomer.customerClassification || '-' }}</p></div></div>\n        <div class=\"col-md-4\"><div class=\"detail-row\"><label>Customer Class</label><p>{{ selectedCustomer.customerClass || '-' }}</p></div></div>\n        <div class=\"col-md-4\"><div class=\"detail-row\"><label>Price List</label><p>{{ selectedCustomer.priceList || '-' }}</p></div></div>\n        <div class=\"col-md-4\"><div class=\"detail-row\"><label>Customer Email</label><p>{{ selectedCustomer.emailId || '-' }}</p></div></div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\"><div class=\"detail-row\"><label>PAN No</label><p>{{ selectedCustomer.panNo || '-' }}</p></div></div>\n        <div class=\"col-md-4\"><div class=\"detail-row\"><label>GSTIN</label><p>{{ selectedCustomer.gstinNumber || '-' }}</p></div></div>\n        <div class=\"col-md-4\"><div class=\"detail-row\"><label>Aadhaar No</label><p>{{ selectedCustomer.aadharNo || '-' }}</p></div></div>\n      </div>\n\n      <!-- Bill To Address -->\n      <div class=\"section-title\">Bill To Address(es)</div>\n      <div *ngFor=\"let addr of parseBillAddresses(); let i = index\" style=\"margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px dashed #eee;\">\n        <div class=\"row\" *ngIf=\"parseBillAddresses().length > 1\"><div class=\"col-md-12\"><strong style=\"font-size:12px; color:#666;\">Address {{ i + 1 }}</strong></div></div>\n        <div class=\"row\">\n          <div class=\"col-md-6\"><div class=\"detail-row\"><label>Address</label><p>{{ addr.address1 }} {{ addr.address2 }}</p></div></div>\n          <div class=\"col-md-3\"><div class=\"detail-row\"><label>City</label><p>{{ addr.city || '-' }}</p></div></div>\n          <div class=\"col-md-3\"><div class=\"detail-row\"><label>State</label><p>{{ addr.state || '-' }}</p></div></div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3\"><div class=\"detail-row\"><label>Postal Code</label><p>{{ addr.postalCode || '-' }}</p></div></div>\n          <div class=\"col-md-3\"><div class=\"detail-row\"><label>Country</label><p>India</p></div></div>\n          <div class=\"col-md-3\"><div class=\"detail-row\"><label>Latitude</label><p>{{ addr.latitude || '-' }}</p></div></div>\n          <div class=\"col-md-3\"><div class=\"detail-row\"><label>Longitude</label><p>{{ addr.longitude || '-' }}</p></div></div>\n        </div>\n      </div>\n\n      <!-- Correspondence Address -->\n      <div class=\"section-title\">Correspondence Address</div>\n      <div class=\"row\">\n        <div class=\"col-md-6\"><div class=\"detail-row\"><label>Address</label><p>{{ selectedCustomer.corrAddress1 || '-' }} {{ selectedCustomer.corrAddress2 || '' }}</p></div></div>\n        <div class=\"col-md-3\"><div class=\"detail-row\"><label>City</label><p>{{ selectedCustomer.corrCity || '-' }}</p></div></div>\n        <div class=\"col-md-3\"><div class=\"detail-row\"><label>State</label><p>{{ selectedCustomer.corrState || '-' }}</p></div></div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3\"><div class=\"detail-row\"><label>Postal Code</label><p>{{ selectedCustomer.corrPostalCode || '-' }}</p></div></div>\n        <div class=\"col-md-3\"><div class=\"detail-row\"><label>Country</label><p>India</p></div></div>\n      </div>\n\n      <!-- Ship To Address -->\n      <div class=\"section-title\">Ship To Address(es)</div>\n      <div *ngFor=\"let addr of parseShipAddresses(); let i = index\" style=\"margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px dashed #eee;\">\n        <div class=\"row\" *ngIf=\"parseShipAddresses().length > 1\"><div class=\"col-md-12\"><strong style=\"font-size:12px; color:#666;\">Address {{ i + 1 }}</strong></div></div>\n        <div class=\"row\">\n          <div class=\"col-md-6\"><div class=\"detail-row\"><label>Address</label><p>{{ addr.address1 }} {{ addr.address2 }}</p></div></div>\n          <div class=\"col-md-3\"><div class=\"detail-row\"><label>City</label><p>{{ addr.city || '-' }}</p></div></div>\n          <div class=\"col-md-3\"><div class=\"detail-row\"><label>State</label><p>{{ addr.state || '-' }}</p></div></div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3\"><div class=\"detail-row\"><label>Postal Code</label><p>{{ addr.postalCode || '-' }}</p></div></div>\n          <div class=\"col-md-3\"><div class=\"detail-row\"><label>Country</label><p>India</p></div></div>\n          <div class=\"col-md-3\"><div class=\"detail-row\"><label>Latitude</label><p>{{ addr.latitude || '-' }}</p></div></div>\n          <div class=\"col-md-3\"><div class=\"detail-row\"><label>Longitude</label><p>{{ addr.longitude || '-' }}</p></div></div>\n        </div>\n      </div>\n\n      <!-- Contact -->\n      <div class=\"section-title\">Contact Details</div>\n      <div class=\"row\">\n        <div class=\"col-md-4\"><div class=\"detail-row\"><label>Contact Person</label><p>{{ selectedCustomer.contactPerson || '-' }}</p></div></div>\n        <div class=\"col-md-4\"><div class=\"detail-row\"><label>Mobile</label><p>{{ selectedCustomer.mobileNumber ? '+91 ' + selectedCustomer.mobileNumber : '-' }}</p></div></div>\n        <div class=\"col-md-4\"><div class=\"detail-row\"><label>Email</label><p>{{ selectedCustomer.emailId || '-' }}</p></div></div>\n      </div>\n\n      <!-- Bank Details -->\n      <div class=\"section-title\">Bank Details</div>\n      <div *ngFor=\"let bank of parseBankAccounts(); let i = index\" style=\"margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px dashed #eee;\">\n        <div class=\"row\" *ngIf=\"parseBankAccounts().length > 1\"><div class=\"col-md-12\"><strong style=\"font-size:12px; color:#666;\">Bank {{ i + 1 }}</strong></div></div>\n        <div class=\"row\">\n          <div class=\"col-md-3\"><div class=\"detail-row\"><label>Bank Name</label><p>{{ bank.bankName || '-' }}</p></div></div>\n          <div class=\"col-md-3\"><div class=\"detail-row\"><label>Branch Name</label><p>{{ bank.branchName || '-' }}</p></div></div>\n          <div class=\"col-md-3\"><div class=\"detail-row\"><label>Account Number</label><p>{{ bank.accountNumber || '-' }}</p></div></div>\n          <div class=\"col-md-3\"><div class=\"detail-row\"><label>IFSC Code</label><p>{{ bank.ifscCode || '-' }}</p></div></div>\n        </div>\n      </div>\n\n      <!-- Sales Details -->\n      <div class=\"section-title\">Sales Details</div>\n      <div class=\"row\">\n        <div class=\"col-md-4\"><div class=\"detail-row\"><label>Salesperson</label><p>{{ selectedCustomer.salesperson || '-' }}</p></div></div>\n        <div class=\"col-md-4\"><div class=\"detail-row\"><label>Salesrep Emp No</label><p>{{ selectedCustomer.salesrepEmpNumber || '-' }}</p></div></div>\n        <div class=\"col-md-4\"><div class=\"detail-row\"><label>Primary Order Type</label><p>{{ selectedCustomer.primaryOrderType || '-' }}</p></div></div>\n      </div>\n\n      <!-- Payment Details -->\n      <div class=\"section-title\">Payment Details</div>\n      <div class=\"row\">\n        <div class=\"col-md-3\"><div class=\"detail-row\"><label>Payment Terms</label><p>{{ selectedCustomer.paymentTerms || '-' }}</p></div></div>\n        <div class=\"col-md-3\"><div class=\"detail-row\"><label>Credit Limit</label><p>₹ {{ selectedCustomer.creditLimit || 0 }}</p></div></div>\n        <div class=\"col-md-3\"><div class=\"detail-row\"><label>Deposit</label><p>₹ {{ selectedCustomer.deposit || 0 }}</p></div></div>\n        <div class=\"col-md-3\"><div class=\"detail-row\"><label>FDR Amount</label><p>₹ {{ selectedCustomer.fdrNumber || 0 }}</p></div></div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3\"><div class=\"detail-row\"><label>Off Ord No</label><p>{{ selectedCustomer.offOrdNo || '-' }}</p></div></div>\n        <div class=\"col-md-3\"><div class=\"detail-row\"><label>Off Ord Date</label><p>{{ selectedCustomer.offOrdDate || '-' }}</p></div></div>\n      </div>\n\n      <!-- Zone / Area -->\n      <div class=\"section-title\">Zone / Area</div>\n      <div class=\"row\">\n        <div class=\"col-md-3\"><div class=\"detail-row\"><label>Zone Code</label><p>{{ selectedCustomer.zoneCode || '-' }}</p></div></div>\n        <div class=\"col-md-3\"><div class=\"detail-row\"><label>Area</label><p>{{ selectedCustomer.area || '-' }}</p></div></div>\n        <div class=\"col-md-3\"><div class=\"detail-row\"><label>Sub Area</label><p>{{ selectedCustomer.subArea || '-' }}</p></div></div>\n        <div class=\"col-md-3\"><div class=\"detail-row\"><label>Ward</label><p>{{ selectedCustomer.ward || '-' }}</p></div></div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\"><div class=\"detail-row\"><label>Zonal Manager</label><p>{{ selectedCustomer.zonalManager || '-' }}</p></div></div>\n        <div class=\"col-md-4\"><div class=\"detail-row\"><label>Zonal Manager Emp No</label><p>{{ selectedCustomer.zonalManagerEmp || '-' }}</p></div></div>\n      </div>\n\n      <!-- Nominee Details -->\n      <div class=\"section-title\">Nominee Details</div>\n      <div class=\"row\">\n        <div class=\"col-md-4\"><div class=\"detail-row\"><label>Nominee Name</label><p>{{ selectedCustomer.nomineeName || '-' }}</p></div></div>\n        <div class=\"col-md-4\"><div class=\"detail-row\"><label>Nominee Contact</label><p>{{ selectedCustomer.nomineeContact ? '+91 ' + selectedCustomer.nomineeContact : '-' }}</p></div></div>\n        <div class=\"col-md-4\"><div class=\"detail-row\"><label>Relationship</label><p>{{ selectedCustomer.nomineeRelationship || '-' }}</p></div></div>\n      </div>\n\n      <!-- Distributor -->\n      <div class=\"section-title\">Distributor Information</div>\n      <div class=\"row\">\n        <div class=\"col-md-3\"><div class=\"detail-row\"><label>Products Distributor</label><p>{{ selectedCustomer.productsDistributor || '-' }}</p></div></div>\n        <div class=\"col-md-3\"><div class=\"detail-row\"><label>Distributor Number</label><p>{{ selectedCustomer.distributorNumber || '-' }}</p></div></div>\n        <div class=\"col-md-3\"><div class=\"detail-row\"><label>Icecream Distributor</label><p>{{ selectedCustomer.icecreamDistributor || '-' }}</p></div></div>\n        <div class=\"col-md-3\"><div class=\"detail-row\"><label>Icecream Dist Num</label><p>{{ selectedCustomer.icecreamDistNum || '-' }}</p></div></div>\n      </div>\n\n      <!-- Additional Information -->\n      <div class=\"section-title\">Additional Information</div>\n      <div class=\"row\">\n        <div class=\"col-md-12\"><div class=\"detail-row\"><label>Remarks</label><p style=\"white-space: pre-wrap;\">{{ selectedCustomer.additionalInfo || '-' }}</p></div></div>\n      </div>\n\n      <!-- Documents -->\n      <div class=\"section-title\">Documents</div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"detail-row\">\n            <label>PAN Card</label>\n            <p *ngIf=\"selectedCustomer.panCardPdfPath\"><a [href]=\"'http://129.159.231.57/api/customer/doc/' + selectedCustomer.panCardPdfPath\" target=\"_blank\" style=\"color: #1a73e8; font-weight: 600;\"><i class=\"fa fa-file-pdf-o text-danger\"></i> View PAN Card</a></p>\n            <p *ngIf=\"!selectedCustomer.panCardPdfPath\">Not uploaded</p>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"detail-row\">\n            <label>Aadhaar Card</label>\n            <p *ngIf=\"selectedCustomer.aadharCardPdfPath\"><a [href]=\"'http://129.159.231.57/api/customer/doc/' + selectedCustomer.aadharCardPdfPath\" target=\"_blank\" style=\"color: #1a73e8; font-weight: 600;\"><i class=\"fa fa-file-pdf-o text-danger\"></i> View Aadhaar</a></p>\n            <p *ngIf=\"!selectedCustomer.aadharCardPdfPath\">Not uploaded</p>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"detail-row\">\n            <label>GST Certificate</label>\n            <p *ngIf=\"selectedCustomer.gstCertPdfPath\"><a [href]=\"'http://129.159.231.57/api/customer/doc/' + selectedCustomer.gstCertPdfPath\" target=\"_blank\" style=\"color: #1a73e8; font-weight: 600;\"><i class=\"fa fa-file-pdf-o text-danger\"></i> View GST Certificate</a></p>\n            <p *ngIf=\"!selectedCustomer.gstCertPdfPath\">Not uploaded</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"detail-row\">\n            <label>Cancelled Cheque</label>\n            <p *ngIf=\"selectedCustomer.cancelledChequePdfPath\"><a [href]=\"'http://129.159.231.57/api/customer/doc/' + selectedCustomer.cancelledChequePdfPath\" target=\"_blank\" style=\"color: #1a73e8; font-weight: 600;\"><i class=\"fa fa-file-pdf-o text-danger\"></i> View Cancelled Cheque</a></p>\n            <p *ngIf=\"!selectedCustomer.cancelledChequePdfPath\">Not uploaded</p>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"detail-row\">\n            <label>CAN Certificate</label>\n            <p *ngIf=\"selectedCustomer.canCertPdfPath\"><a [href]=\"'http://129.159.231.57/api/customer/doc/' + selectedCustomer.canCertPdfPath\" target=\"_blank\" style=\"color: #1a73e8; font-weight: 600;\"><i class=\"fa fa-file-pdf-o text-danger\"></i> View CAN Certificate</a></p>\n            <p *ngIf=\"!selectedCustomer.canCertPdfPath\">Not uploaded</p>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"detail-row\">\n            <label>Nominee Document(s)</label>\n            <ng-container *ngIf=\"selectedCustomer.nomineeDocPdfPath; else noNomineeDoc\">\n              <p *ngFor=\"let f of selectedCustomer.nomineeDocPdfPath.split(','); let i = index\">\n                <a [href]=\"'http://129.159.231.57/api/customer/doc/' + f.trim()\" target=\"_blank\" style=\"color: #1a73e8; font-weight: 600;\">\n                  <i class=\"fa fa-file-pdf-o text-danger\"></i> View Nominee Doc {{ i + 1 }}\n                </a>\n              </p>\n            </ng-container>\n            <ng-template #noNomineeDoc><p>Not uploaded</p></ng-template>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"detail-row\">\n            <label>Order Document</label>\n            <p *ngIf=\"selectedCustomer.orderDocPdfPath\"><a [href]=\"'http://129.159.231.57/api/customer/doc/' + selectedCustomer.orderDocPdfPath\" target=\"_blank\" style=\"color: #1a73e8; font-weight: 600;\"><i class=\"fa fa-file-pdf-o text-danger\"></i> View Order Document</a></p>\n            <p *ngIf=\"!selectedCustomer.orderDocPdfPath\">Not uploaded</p>\n          </div>\n        </div>\n      </div>\n\n      <!-- Reject Reason Input -->\n      <div class=\"row\" *ngIf=\"showRejectInput\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group\">\n            <label class=\"text-danger\" style=\"font-size: 14px;\">Rejection Reason <span>*</span></label>\n            <textarea class=\"form-control\" [(ngModel)]=\"rejectReason\" rows=\"3\" placeholder=\"Enter reason for rejection...\"></textarea>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"modal-footer-custom\" *ngIf=\"selectedCustomer.pickedStatus === 'PA'\">\n      <button class=\"btn btn-info\" (click)=\"downloadPdf()\" style=\"margin-right: 10px;\"><i class=\"fa fa-file-pdf-o\"></i> Download PDF</button>\n      <button class=\"btn btn-success\" (click)=\"approve()\" *ngIf=\"!showRejectInput\">\n        <i class=\"fa fa-check\"></i> Approve\n      </button>\n      <button class=\"btn btn-danger\" (click)=\"showRejectBox()\" *ngIf=\"!showRejectInput\">\n        <i class=\"fa fa-times\"></i> Reject\n      </button>\n      <button class=\"btn btn-danger\" (click)=\"confirmReject()\" *ngIf=\"showRejectInput\" [disabled]=\"!rejectReason\">\n        <i class=\"fa fa-times\"></i> Confirm Reject\n      </button>\n      <button class=\"btn btn-default\" (click)=\"cancelReject()\" *ngIf=\"showRejectInput\">\n        Cancel\n      </button>\n    </div>\n\n    <div class=\"modal-footer-custom\" *ngIf=\"selectedCustomer.pickedStatus !== 'PA'\">\n      <button class=\"btn btn-info\" (click)=\"downloadPdf()\" style=\"margin-right: 10px;\"><i class=\"fa fa-file-pdf-o\"></i> Download PDF</button>\n      <button class=\"btn btn-default\" (click)=\"closeModal()\">Close</button>\n    </div>\n  </div>\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html": (
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
    \****************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_pages_login_loginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"row\" style=\"display: flex; justify-content: center; align-items: center; min-height: calc(100vh - 80px);\">\n    <div class=\"col-md-5\">\n      <div class=\"card\">\n        <div class=\"card-header bg-primary text-white text-center\">\n          <h4><i class=\"fa fa-sign-in\"></i> Login</h4>\n          <p style=\"margin: 0; font-size: 13px;\">BAMUL Customer Master Portal</p>\n        </div>\n        <div class=\"card-body\" style=\"padding: 30px;\">\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin()\">\n\n            <div class=\"form-group\">\n              <label>Username</label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"username\" placeholder=\"Enter EBS username (e.g. SYSADMIN)\">\n            </div>\n\n            <div class=\"form-group\">\n              <label>Password</label>\n              <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Enter password\">\n            </div>\n\n            <div *ngIf=\"errorMessage\" class=\"alert alert-danger\" style=\"font-size: 13px;\">\n              <i class=\"fa fa-exclamation-circle\"></i> {{ errorMessage }}\n            </div>\n\n            <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"loginForm.invalid || loading\">\n              <i class=\"fa fa-sign-in\" *ngIf=\"!loading\"></i>\n              <i class=\"fa fa-spinner fa-spin\" *ngIf=\"loading\"></i>\n              {{ loading ? 'Logging in...' : 'Login' }}\n            </button>\n\n          </form>\n          <div class=\"text-center\" style=\"margin-top: 15px;\">\n            <p style=\"font-size: 13px; color: #666;\">Don't have an account? <a routerLink=\"/register\" style=\"color: #1a73e8; font-weight: 600;\">Register Here</a></p>\n            <p style=\"font-size: 13px; color: #666;\"><a routerLink=\"/reset-password\" style=\"color: #1a73e8; font-weight: 600;\">Reset Password</a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-submissions/my-submissions.component.html": (
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-submissions/my-submissions.component.html ***!
    \**********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_pages_mySubmissions_mySubmissionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header bg-primary text-white\" style=\"padding: 15px 20px;\">\n          <h4><i class=\"fa fa-list\"></i> My Submissions</h4>\n          <p style=\"margin: 0; font-size: 13px;\">Track your customer creation/update requests</p>\n        </div>\n        <div class=\"card-body\">\n          <div *ngIf=\"loading\" class=\"text-center\" style=\"padding: 30px;\"><i class=\"fa fa-spinner fa-spin fa-2x\"></i></div>\n          <table class=\"table table-bordered table-striped\" *ngIf=\"!loading && submissions.length > 0\">\n            <thead class=\"thead-dark\">\n              <tr>\n                <th>#</th>\n                <th>Customer Name</th>\n                <th>Account No</th>\n                <th>Type</th>\n                <th>Submitted Date</th>\n                <th>Status</th>\n                <th>Actioned By</th>\n                <th>Error/Reason</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let s of submissions; let i = index\">\n                <td>{{ i + 1 }}</td>\n                <td>{{ s.customerName }}</td>\n                <td>{{ s.accountNumber || '-' }}</td>\n                <td>{{ s.customerType || '-' }}</td>\n                <td>{{ s.creationDate | date:'dd-MMM-yyyy HH:mm' }}</td>\n                <td>\n                  <span class=\"label\" [ngClass]=\"{'label-warning': s.pickedStatus === 'PA', 'label-success': s.pickedStatus === 'S', 'label-danger': s.pickedStatus === 'REJECTED' || s.pickedStatus === 'E'}\">\n                    {{ getStatusLabel(s.pickedStatus) }}\n                  </span>\n                </td>\n                <td>{{ s.approvedBy || '-' }}</td>\n                <td>{{ s.errorMsg || '-' }}</td>\n                <td>\n                  <button *ngIf=\"s.pickedStatus === 'REJECTED'\" class=\"btn btn-xs btn-warning\" (click)=\"resubmit(s)\">\n                    <i class=\"fa fa-refresh\"></i> Edit & Resubmit\n                  </button>\n                  <span *ngIf=\"s.pickedStatus === 'PA'\" style=\"color: #999; font-size: 12px;\">Awaiting Approval</span>\n                  <span *ngIf=\"s.pickedStatus === 'S'\" style=\"color: #5cb85c; font-size: 12px;\"><i class=\"fa fa-check\"></i> Approved</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <div *ngIf=\"!loading && submissions.length === 0\" class=\"text-center\" style=\"padding: 30px; color: #999;\">\n            <i class=\"fa fa-inbox\" style=\"font-size: 40px;\"></i>\n            <p>No submissions found</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration/registration.component.html": (
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration/registration.component.html ***!
    \******************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_pages_registration_registrationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"container-fluid\" style=\"padding: 20px;\">\n  <div class=\"row\">\n    <div class=\"col-md-8 col-md-offset-2\">\n      <div class=\"card\">\n        <div class=\"card-header bg-primary text-white\" style=\"padding: 15px 20px;\">\n          <h4><i class=\"fa fa-user-plus\"></i> Employee Registration</h4>\n          <p style=\"margin: 0; font-size: 13px;\">BAMUL Customer Master Portal - New Employee Registration</p>\n        </div>\n        <div class=\"card-body\" style=\"padding: 25px;\">\n          <form [formGroup]=\"registrationForm\" (ngSubmit)=\"onRegister()\">\n\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\"><strong>Employee Information</strong></div>\n              <div class=\"panel-body\">\n                <div class=\"row\">\n                  <div class=\"col-md-4 form-group\">\n                    <label>Employee Number <span class=\"text-danger\">*</span></label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"employeeNumber\" placeholder=\"e.g. 005004\">\n                  </div>\n                  <div class=\"col-md-4 form-group\">\n                    <label>Department <span class=\"text-danger\">*</span></label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"department\">\n                  </div>\n                  <div class=\"col-md-4 form-group\">\n                    <label>Manager Name <span class=\"text-danger\">*</span></label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"supervisorName\">\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-4 form-group\">\n                    <label>First Name <span class=\"text-danger\">*</span></label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"firstName\">\n                  </div>\n                  <div class=\"col-md-4 form-group\">\n                    <label>Last Name</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"lastName\">\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\"><strong>Contact Information</strong></div>\n              <div class=\"panel-body\">\n                <div class=\"row\">\n                  <div class=\"col-md-6 form-group\">\n                    <label>Email Address <span class=\"text-danger\">*</span></label>\n                    <input type=\"email\" class=\"form-control\" formControlName=\"emailAddress\" placeholder=\"email@example.com\" onpaste=\"return false\" oncopy=\"return false\">\n                    <div *ngIf=\"registrationForm.get('emailAddress').touched && registrationForm.get('emailAddress').invalid\" class=\"text-danger\" style=\"font-size:11px; margin-top:3px;\">Only .coop email addresses allowed (e.g. name@bamul.coop)</div>\n                  </div>\n                  <div class=\"col-md-6 form-group\">\n                    <label>Confirm Email Address <span class=\"text-danger\">*</span></label>\n                    <input type=\"email\" class=\"form-control\" formControlName=\"confirmEmail\" placeholder=\"Re-enter email\" onpaste=\"return false\" oncopy=\"return false\">\n                    <div *ngIf=\"registrationForm.get('confirmEmail').value && registrationForm.get('emailAddress').value !== registrationForm.get('confirmEmail').value\" class=\"text-danger\" style=\"font-size:11px; margin-top:3px;\">Emails do not match</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- MESSAGE -->\n            <div *ngIf=\"message\" class=\"alert\" [ngClass]=\"{'alert-success': messageType === 'success', 'alert-danger': messageType === 'danger'}\" style=\"font-size: 13px;\">\n              {{ message }}\n            </div>\n\n            <!-- SUBMIT -->\n            <div class=\"text-center\" style=\"margin-top: 20px;\">\n              <button type=\"submit\" class=\"btn btn-primary btn-lg\" [disabled]=\"registrationForm.invalid || loading || registrationForm.get('emailAddress').value !== registrationForm.get('confirmEmail').value\" style=\"padding: 12px 40px;\">\n                <i class=\"fa fa-check\" *ngIf=\"!loading\"></i>\n                <i class=\"fa fa-spinner fa-spin\" *ngIf=\"loading\"></i>\n                {{ loading ? 'Registering...' : 'Register' }}\n              </button>\n            </div>\n\n            <p class=\"text-center\" style=\"margin-top: 15px; font-size: 13px;\">\n              Already registered? <a routerLink=\"/login\" style=\"color: #1a73e8; font-weight: 600;\">Login here</a>\n            </p>\n\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset-password/reset-password.component.html": (
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset-password/reset-password.component.html ***!
    \**********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function _node_modules_rawLoader_dist_cjsJs_src_app_pages_resetPassword_resetPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"row\" style=\"display: flex; justify-content: center; align-items: center; min-height: calc(100vh - 80px);\">\n    <div class=\"col-md-5\">\n      <div class=\"card\">\n        <div class=\"card-header bg-primary text-white text-center\" style=\"padding: 15px 20px;\">\n          <h4><i class=\"fa fa-key\"></i> Reset Password</h4>\n          <p style=\"margin: 0; font-size: 13px;\">BAMUL Customer Master Portal</p>\n        </div>\n        <div class=\"card-body\" style=\"padding: 30px;\">\n\n          <!-- STEP 1: Validate Username + Email -->\n          <div *ngIf=\"!validated\">\n            <div class=\"form-group\">\n              <label>Username <span class=\"text-danger\">*</span></label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" placeholder=\"Enter your username\">\n            </div>\n            <div class=\"form-group\">\n              <label>Email ID <span class=\"text-danger\">*</span></label>\n              <input type=\"email\" class=\"form-control\" [(ngModel)]=\"emailId\" placeholder=\"Enter registered email\">\n            </div>\n\n            <div *ngIf=\"message\" class=\"alert\" [ngClass]=\"{'alert-danger': messageType === 'danger'}\" style=\"font-size: 13px;\">{{ message }}</div>\n\n            <button class=\"btn btn-primary btn-block\" (click)=\"validateUser()\" [disabled]=\"loading || !username || !emailId\" style=\"padding: 12px; font-size: 16px;\">\n              <i class=\"fa fa-check\" *ngIf=\"!loading\"></i>\n              <i class=\"fa fa-spinner fa-spin\" *ngIf=\"loading\"></i>\n              {{ loading ? 'Validating...' : 'Validate & Proceed' }}\n            </button>\n          </div>\n\n          <!-- STEP 2: Change Password -->\n          <div *ngIf=\"validated\">\n            <div class=\"alert alert-success\" style=\"font-size: 13px;\">\n              <i class=\"fa fa-check-circle\"></i> User validated: <strong>{{ username }}</strong>\n            </div>\n\n            <div class=\"form-group\">\n              <label>Old Password <span class=\"text-danger\">*</span></label>\n              <input type=\"password\" class=\"form-control\" [(ngModel)]=\"oldPassword\" placeholder=\"Enter current password\">\n            </div>\n            <div class=\"form-group\">\n              <label>New Password <span class=\"text-danger\">*</span></label>\n              <input type=\"password\" class=\"form-control\" [(ngModel)]=\"newPassword\" placeholder=\"Min 6 characters\">\n            </div>\n            <div class=\"form-group\">\n              <label>Confirm New Password <span class=\"text-danger\">*</span></label>\n              <input type=\"password\" class=\"form-control\" [(ngModel)]=\"confirmNewPassword\" placeholder=\"Re-enter new password\">\n            </div>\n\n            <div *ngIf=\"message\" class=\"alert\" [ngClass]=\"{'alert-success': messageType === 'success', 'alert-danger': messageType === 'danger'}\" style=\"font-size: 13px;\">{{ message }}</div>\n\n            <button class=\"btn btn-primary btn-block\" (click)=\"changePassword()\" [disabled]=\"loading\" style=\"padding: 12px; font-size: 16px;\">\n              <i class=\"fa fa-key\" *ngIf=\"!loading\"></i>\n              <i class=\"fa fa-spinner fa-spin\" *ngIf=\"loading\"></i>\n              {{ loading ? 'Updating...' : 'Change Password' }}\n            </button>\n          </div>\n\n          <p class=\"text-center\" style=\"margin-top: 15px; font-size: 13px;\">\n            <a routerLink=\"/login\" style=\"color: #1a73e8; font-weight: 600;\">Back to Login</a>\n          </p>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

    /***/
  }),
  /***/"./node_modules/tslib/tslib.es6.js": (
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/
  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
  /***/
  function _node_modules_tslib_tslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
      return _extendStatics(d, b);
    };
    function __extends(d, b) {
      _extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }
    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
        f,
        y,
        t,
        g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }
    function __exportStar(m, exports) {
      for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
        r,
        ar = [],
        e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    }
    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
      return ar;
    }
    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
      return r;
    }
    ;
    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;
      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }
    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }
    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
        i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }
    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    }
    ;
    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result["default"] = mod;
      return result;
    }
    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }
      privateMap.set(receiver, value);
      return value;
    }

    /***/
  }),
  /***/"./src/app/app-routing.module.ts": (
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/
  /*! exports provided: AppRoutingModule */
  /***/
  function _src_app_appRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */"./src/app/pages/login/login.component.ts");
    /* harmony import */
    var _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/reset-password/reset-password.component */"./src/app/pages/reset-password/reset-password.component.ts");
    /* harmony import */
    var _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/registration/registration.component */"./src/app/pages/registration/registration.component.ts");
    /* harmony import */
    var _pages_customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/customer-form/customer-form.component */"./src/app/pages/customer-form/customer-form.component.ts");
    /* harmony import */
    var _pages_customer_update_customer_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/customer-update/customer-update.component */"./src/app/pages/customer-update/customer-update.component.ts");
    /* harmony import */
    var _pages_admin_approval_admin_approval_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/admin-approval/admin-approval.component */"./src/app/pages/admin-approval/admin-approval.component.ts");
    /* harmony import */
    var _pages_finance_approval_finance_approval_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/finance-approval/finance-approval.component */"./src/app/pages/finance-approval/finance-approval.component.ts");
    /* harmony import */
    var _pages_my_submissions_my_submissions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/my-submissions/my-submissions.component */"./src/app/pages/my-submissions/my-submissions.component.ts");
    /* harmony import */
    var _services_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth.guard */"./src/app/services/auth.guard.ts");
    /* harmony import */
    var _services_role_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/role.guard */"./src/app/services/role.guard.ts");
    var routes = [{
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }, {
      path: 'login',
      component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'reset-password',
      component: _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__["ResetPasswordComponent"]
    }, {
      path: 'register',
      component: _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"]
    }, {
      path: 'customer-form',
      component: _pages_customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_6__["CustomerFormComponent"],
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    }, {
      path: 'customer-update',
      component: _pages_customer_update_customer_update_component__WEBPACK_IMPORTED_MODULE_7__["CustomerUpdateComponent"],
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    }, {
      path: 'admin-approval',
      component: _pages_admin_approval_admin_approval_component__WEBPACK_IMPORTED_MODULE_8__["AdminApprovalComponent"],
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"], _services_role_guard__WEBPACK_IMPORTED_MODULE_12__["RoleGuard"]],
      data: {
        role: 'MASTER'
      }
    }, {
      path: 'finance-approval',
      component: _pages_finance_approval_finance_approval_component__WEBPACK_IMPORTED_MODULE_9__["FinanceApprovalComponent"],
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"], _services_role_guard__WEBPACK_IMPORTED_MODULE_12__["RoleGuard"]],
      data: {
        role: 'MASTER'
      }
    }, {
      path: 'my-submissions',
      component: _pages_my_submissions_my_submissions_component__WEBPACK_IMPORTED_MODULE_10__["MySubmissionsComponent"],
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    }];
    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);

    /***/
  }),
  /***/"./src/app/app.component.css": (
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/
  /*! exports provided: default */
  /***/
  function _src_app_appComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "body {\n  font-family: 'Roboto', sans-serif;\n  background-color: #f4f6f9;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBaUM7RUFDakMseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNmY5O1xufVxuIl19 */";

    /***/
  }),
  /***/"./src/app/app.component.ts": (
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/
  function _src_app_appComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */"./src/app/services/auth.service.ts");
    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router, authService) {
        var _this = this;
        _classCallCheck(this, AppComponent);
        this.router = router;
        this.authService = authService;
        this.title = 'BAMUL Customer Master Portal';
        this.showNav = false;
        this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            var url = event.urlAfterRedirects || event.url;
            _this.showNav = !(url === '/login' || url === '/register' || url === '/reset-password');
          }
        });
      }
      return _createClass(AppComponent, [{
        key: "userRole",
        get: function get() {
          var user = this.authService.getUser();
          return user ? user.role : '';
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.logout();
          this.router.navigate(['/login']);
        }
      }]);
    }();
    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */"./src/app/app.component.css"))["default"]]
    })], AppComponent);

    /***/
  }),
  /***/"./src/app/app.module.ts": (
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: AppModule */
  /***/
  function _src_app_appModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */"./src/app/app-routing.module.ts");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/login/login.component */"./src/app/pages/login/login.component.ts");
    /* harmony import */
    var _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/reset-password/reset-password.component */"./src/app/pages/reset-password/reset-password.component.ts");
    /* harmony import */
    var _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/registration/registration.component */"./src/app/pages/registration/registration.component.ts");
    /* harmony import */
    var _pages_customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/customer-form/customer-form.component */"./src/app/pages/customer-form/customer-form.component.ts");
    /* harmony import */
    var _pages_customer_update_customer_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/customer-update/customer-update.component */"./src/app/pages/customer-update/customer-update.component.ts");
    /* harmony import */
    var _pages_admin_approval_admin_approval_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/admin-approval/admin-approval.component */"./src/app/pages/admin-approval/admin-approval.component.ts");
    /* harmony import */
    var _pages_finance_approval_finance_approval_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/finance-approval/finance-approval.component */"./src/app/pages/finance-approval/finance-approval.component.ts");
    /* harmony import */
    var _pages_my_submissions_my_submissions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/my-submissions/my-submissions.component */"./src/app/pages/my-submissions/my-submissions.component.ts");
    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__["ResetPasswordComponent"], _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_9__["RegistrationComponent"], _pages_customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_10__["CustomerFormComponent"], _pages_customer_update_customer_update_component__WEBPACK_IMPORTED_MODULE_11__["CustomerUpdateComponent"], _pages_admin_approval_admin_approval_component__WEBPACK_IMPORTED_MODULE_12__["AdminApprovalComponent"], _pages_finance_approval_finance_approval_component__WEBPACK_IMPORTED_MODULE_13__["FinanceApprovalComponent"], _pages_my_submissions_my_submissions_component__WEBPACK_IMPORTED_MODULE_14__["MySubmissionsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);

    /***/
  }),
  /***/"./src/app/pages/admin-approval/admin-approval.component.css": (
  /*!*******************************************************************!*\
    !*** ./src/app/pages/admin-approval/admin-approval.component.css ***!
    \*******************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_pages_adminApproval_adminApprovalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".card-header {\n  padding: 15px 20px;\n}\n\n.table th {\n  background-color: #343a40;\n  color: white;\n  font-size: 13px;\n}\n\n.table td {\n  font-size: 13px;\n  vertical-align: middle;\n}\n\n.status-badge {\n  padding: 4px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n.status-pending { background-color: #fff3cd; color: #856404; }\n\n.status-approved { background-color: #d4edda; color: #155724; }\n\n.status-rejected { background-color: #f8d7da; color: #721c24; }\n\n.view-link {\n  color: #1a73e8;\n  font-weight: 600;\n  font-size: 13px;\n  text-decoration: none;\n}\n\n.view-link:hover {\n  text-decoration: underline;\n}\n\n/* Modal Overlay */\n\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n\n.modal-box {\n  background: white;\n  border-radius: 8px;\n  width: 800px;\n  max-height: 85vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);\n}\n\n.modal-header-custom {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 20px;\n  background-color: #1a73e8;\n  color: white;\n  border-radius: 8px 8px 0 0;\n}\n\n.modal-header-custom h4 {\n  margin: 0;\n  font-size: 18px;\n}\n\n.close-btn {\n  background: none;\n  border: none;\n  color: white;\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.modal-body-custom {\n  padding: 20px;\n}\n\n.detail-row {\n  margin-bottom: 15px;\n}\n\n.detail-row label {\n  font-size: 12px;\n  color: #666;\n  text-transform: uppercase;\n  margin-bottom: 2px;\n  display: block;\n}\n\n.detail-row p {\n  font-size: 15px;\n  font-weight: 600;\n  color: #333;\n  margin: 0;\n}\n\n.modal-footer-custom {\n  padding: 15px 20px;\n  border-top: 1px solid #eee;\n  text-align: right;\n}\n\n.modal-footer-custom .btn {\n  margin-left: 10px;\n  padding: 8px 20px;\n}\n\n.section-title {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1a73e8;\n  border-bottom: 1px solid #eee;\n  padding-bottom: 5px;\n  margin-bottom: 12px;\n  margin-top: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4tYXBwcm92YWwvYWRtaW4tYXBwcm92YWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBLGtCQUFrQix5QkFBeUIsRUFBRSxjQUFjLEVBQUU7O0FBQzdELG1CQUFtQix5QkFBeUIsRUFBRSxjQUFjLEVBQUU7O0FBQzlELG1CQUFtQix5QkFBeUIsRUFBRSxjQUFjLEVBQUU7O0FBRTlEO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBLGtCQUFrQjs7QUFDbEI7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluLWFwcHJvdmFsL2FkbWluLWFwcHJvdmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG59XG5cbi50YWJsZSB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4udGFibGUgdGQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5zdGF0dXMtYmFkZ2Uge1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uc3RhdHVzLXBlbmRpbmcgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmM2NkOyBjb2xvcjogIzg1NjQwNDsgfVxuLnN0YXR1cy1hcHByb3ZlZCB7IGJhY2tncm91bmQtY29sb3I6ICNkNGVkZGE7IGNvbG9yOiAjMTU1NzI0OyB9XG4uc3RhdHVzLXJlamVjdGVkIHsgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTsgY29sb3I6ICM3MjFjMjQ7IH1cblxuLnZpZXctbGluayB7XG4gIGNvbG9yOiAjMWE3M2U4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnZpZXctbGluazpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4vKiBNb2RhbCBPdmVybGF5ICovXG4ubW9kYWwtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4ubW9kYWwtYm94IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDgwMHB4O1xuICBtYXgtaGVpZ2h0OiA4NXZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBib3gtc2hhZG93OiAwIDhweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLm1vZGFsLWhlYWRlci1jdXN0b20ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhNzNlODtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcbn1cblxuLm1vZGFsLWhlYWRlci1jdXN0b20gaDQge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmNsb3NlLWJ0biB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1vZGFsLWJvZHktY3VzdG9tIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmRldGFpbC1yb3cge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZGV0YWlsLXJvdyBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2NjY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kZXRhaWwtcm93IHAge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzMzO1xuICBtYXJnaW46IDA7XG59XG5cbi5tb2RhbC1mb290ZXItY3VzdG9tIHtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tb2RhbC1mb290ZXItY3VzdG9tIC5idG4ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzFhNzNlODtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4iXX0= */";

    /***/
  }),
  /***/"./src/app/pages/admin-approval/admin-approval.component.ts": (
  /*!******************************************************************!*\
    !*** ./src/app/pages/admin-approval/admin-approval.component.ts ***!
    \******************************************************************/
  /*! exports provided: AdminApprovalComponent */
  /***/
  function _src_app_pages_adminApproval_adminApprovalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AdminApprovalComponent", function () {
      return AdminApprovalComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */"./src/app/services/auth.service.ts");
    var AdminApprovalComponent = /*#__PURE__*/function () {
      function AdminApprovalComponent(http, authService, router) {
        _classCallCheck(this, AdminApprovalComponent);
        this.http = http;
        this.authService = authService;
        this.router = router;
        this.users = [];
        this.selectedUser = null;
        this.showRejectInput = false;
        this.rejectReason = '';
      }
      return _createClass(AdminApprovalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var user = this.authService.getUser();
          if (!user || user.role !== 'MASTER') {
            window.location.href = '/customer-portal/customer-form';
            return;
          }
          this.loadUsers();
        }
      }, {
        key: "loadUsers",
        value: function loadUsers() {
          var _this2 = this;
          this.http.get('http://129.159.231.57/api/registration/all').subscribe(function (data) {
            _this2.users = data;
          }, function (err) {
            console.error('Error loading registrations:', err);
          });
        }
      }, {
        key: "viewDetails",
        value: function viewDetails(user) {
          this.selectedUser = user;
          this.showRejectInput = false;
          this.rejectReason = '';
        }
      }, {
        key: "isExpired",
        value: function isExpired(user) {
          // DISABLED: Super Master feature
          if (!user.creationDate) return false;
          var created = new Date(user.creationDate).getTime();
          var now = new Date().getTime();
          return now - created > 24 * 60 * 60 * 1000;
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.selectedUser = null;
          this.showRejectInput = false;
          this.rejectReason = '';
        }
      }, {
        key: "approve",
        value: function approve() {
          var _this3 = this;
          var currentUser = this.authService.getUser();
          var approvedBy = currentUser ? currentUser.username : 'ADMIN';
          this.http.post('http://129.159.231.57/api/registration/approve/' + this.selectedUser.regId, {
            approvedBy: approvedBy
          }).subscribe(function (res) {
            if (res.status === 'SUCCESS') {
              alert('Registration approved for ' + _this3.selectedUser.fullName);
              _this3.closeModal();
              _this3.loadUsers();
            } else {
              alert('Error: ' + res.message);
            }
          }, function (err) {
            return alert('Server error');
          });
        }
      }, {
        key: "showRejectBox",
        value: function showRejectBox() {
          this.showRejectInput = true;
        }
      }, {
        key: "cancelReject",
        value: function cancelReject() {
          this.showRejectInput = false;
          this.rejectReason = '';
        }
      }, {
        key: "confirmReject",
        value: function confirmReject() {
          var _this4 = this;
          this.http.post('http://129.159.231.57/api/registration/reject/' + this.selectedUser.regId, {
            reason: this.rejectReason,
            rejectedBy: 'ADMIN'
          }).subscribe(function (res) {
            alert('Registration rejected for ' + _this4.selectedUser.fullName);
            _this4.closeModal();
            _this4.loadUsers();
          }, function (err) {
            return alert('Server error');
          });
        }
      }]);
    }();
    AdminApprovalComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };
    AdminApprovalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-approval',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-approval.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-approval/admin-approval.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-approval.component.css */"./src/app/pages/admin-approval/admin-approval.component.css"))["default"]]
    })], AdminApprovalComponent);

    /***/
  }),
  /***/"./src/app/pages/customer-form/customer-form.component.css": (
  /*!*****************************************************************!*\
    !*** ./src/app/pages/customer-form/customer-form.component.css ***!
    \*****************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_pages_customerForm_customerFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".card-header {\n  background-color: #1a73e8;\n  padding: 15px 20px;\n}\n\n.panel {\n  margin-bottom: 20px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n\n.panel-heading {\n  background-color: #f5f5f5;\n  padding: 10px 15px;\n  border-bottom: 1px solid #ddd;\n}\n\n.panel-body {\n  padding: 15px;\n}\n\n.form-group {\n  margin-bottom: 15px;\n}\n\n.form-group label {\n  font-weight: 600;\n  font-size: 13px;\n  color: #333;\n}\n\n.form-control {\n  border-radius: 3px;\n  border: 1px solid #ccc;\n  height: 36px;\n  font-size: 14px;\n  text-transform: uppercase;\n}\n\ninput.form-control, textarea.form-control, select.form-control {\n  text-transform: uppercase;\n}\n\n.form-control:focus {\n  border-color: #1a73e8;\n  box-shadow: 0 0 3px rgba(26, 115, 232, 0.3);\n}\n\n.btn-success {\n  background-color: #28a745;\n  border: none;\n  padding: 10px 30px;\n}\n\n.btn-success:hover {\n  background-color: #218838;\n}\n\n.text-danger {\n  color: #dc3545;\n}\n\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n\n.modal-box {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);\n}\n\n.modal-header-custom {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 20px;\n  color: white;\n  border-radius: 8px 8px 0 0;\n}\n\n.modal-header-custom h4 {\n  margin: 0;\n  font-size: 16px;\n}\n\n.close-btn {\n  background: none;\n  border: none;\n  color: white;\n  font-size: 22px;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VzdG9tZXItZm9ybS9jdXN0b21lci1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3RvbWVyLWZvcm0vY3VzdG9tZXItZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhNzNlODtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xufVxuXG4ucGFuZWwge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5wYW5lbC1oZWFkaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cblxuLnBhbmVsLWJvZHkge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzMzMztcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgaGVpZ2h0OiAzNnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmlucHV0LmZvcm0tY29udHJvbCwgdGV4dGFyZWEuZm9ybS1jb250cm9sLCBzZWxlY3QuZm9ybS1jb250cm9sIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzFhNzNlODtcbiAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDI2LCAxMTUsIDIzMiwgMC4zKTtcbn1cblxuLmJ0bi1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG59XG5cbi5idG4tc3VjY2Vzczpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTg4Mzg7XG59XG5cbi50ZXh0LWRhbmdlciB7XG4gIGNvbG9yOiAjZGMzNTQ1O1xufVxuXG4ubW9kYWwtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4ubW9kYWwtYm94IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCA4cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5tb2RhbC1oZWFkZXItY3VzdG9tIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XG59XG5cbi5tb2RhbC1oZWFkZXItY3VzdG9tIGg0IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5jbG9zZS1idG4ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */";

    /***/
  }),
  /***/"./src/app/pages/customer-form/customer-form.component.ts": (
  /*!****************************************************************!*\
    !*** ./src/app/pages/customer-form/customer-form.component.ts ***!
    \****************************************************************/
  /*! exports provided: CustomerFormComponent */
  /***/
  function _src_app_pages_customerForm_customerFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CustomerFormComponent", function () {
      return CustomerFormComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _services_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/customer.service */"./src/app/services/customer.service.ts");
    var CustomerFormComponent_1;
    var CustomerFormComponent = CustomerFormComponent_1 = /*#__PURE__*/function () {
      function CustomerFormComponent(fb, customerService, http) {
        _classCallCheck(this, CustomerFormComponent);
        this.fb = fb;
        this.customerService = customerService;
        this.http = http;
        this.isEditMode = false;
        this.panCardFileName = '';
        this.panCardFile = null;
        this.aadharFileName = '';
        this.aadharFile = null;
        this.gstFileName = '';
        this.gstFile = null;
        this.canCertFileName = '';
        this.canCertFile = null;
        this.chequeFileName = '';
        this.chequeFile = null;
        this.nomineeDocFiles = [];
        this.existingNomineeDocNames = [];
        this.orderDocFileName = '';
        this.orderDocFile = null;
        this.otpSent = false;
        this.otpVerified = false;
        this.otpValue = '';
        this.otpTimer = 0;
        this.otpInterval = null;
        this.cities = [];
        this.billCities = [];
        this.shipCities = [];
        this.sameAsBill = false;
        this.billAddresses = [{
          address1: '',
          address2: '',
          state: '',
          city: '',
          postalCode: '',
          latitude: '',
          longitude: '',
          siteCode: '',
          cities: []
        }];
        this.shipAddresses = [{
          address1: '',
          address2: '',
          state: '',
          city: '',
          postalCode: '',
          latitude: '',
          longitude: '',
          siteCode: '',
          cities: []
        }];
        this.corrAddrSameAsBill = false;
        this.corrAddress = {
          address1: '',
          address2: '',
          state: '',
          city: '',
          postalCode: '',
          cities: []
        };
        this.contacts = [{
          contactPerson: '',
          designation: '',
          mobileNumber: '',
          emailId: '',
          confirmEmailId: ''
        }];
        this.zoneManagers = [];
        this.bankNamesList = [];
        this.orderTypesList = [];
        this.bankList = [];
        this.branchList = [];
        this.bankAccounts = [{
          bankName: '',
          branchName: '',
          accountNumber: '',
          ifscCode: '',
          branches: []
        }];
        this.stateList = ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'];
        this.stateCityMap = {
          'Andaman and Nicobar Islands': ['Port Blair'],
          'Andhra Pradesh': ['Anantapur', 'Chittoor', 'Eluru', 'Guntur', 'Kadapa', 'Kakinada', 'Kurnool', 'Machilipatnam', 'Nellore', 'Ongole', 'Rajahmundry', 'Srikakulam', 'Tirupati', 'Vijayawada', 'Visakhapatnam', 'Vizianagaram'],
          'Arunachal Pradesh': ['Itanagar', 'Naharlagun', 'Pasighat', 'Tawang', 'Ziro'],
          'Assam': ['Dibrugarh', 'Guwahati', 'Jorhat', 'Nagaon', 'Silchar', 'Tezpur', 'Tinsukia'],
          'Bihar': ['Arrah', 'Begusarai', 'Bhagalpur', 'Bihar Sharif', 'Darbhanga', 'Gaya', 'Hajipur', 'Katihar', 'Munger', 'Muzaffarpur', 'Patna', 'Purnia', 'Samastipur'],
          'Chandigarh': ['Chandigarh'],
          'Chhattisgarh': ['Bhilai', 'Bilaspur', 'Durg', 'Jagdalpur', 'Korba', 'Raigarh', 'Raipur', 'Rajnandgaon'],
          'Dadra and Nagar Haveli and Daman and Diu': ['Daman', 'Diu', 'Silvassa'],
          'Delhi': ['Central Delhi', 'East Delhi', 'New Delhi', 'North Delhi', 'South Delhi', 'West Delhi'],
          'Goa': ['Mapusa', 'Margao', 'Panaji', 'Ponda', 'Vasco da Gama'],
          'Gujarat': ['Ahmedabad', 'Anand', 'Bharuch', 'Bhavnagar', 'Bhuj', 'Gandhinagar', 'Jamnagar', 'Junagadh', 'Mehsana', 'Morbi', 'Nadiad', 'Navsari', 'Rajkot', 'Surat', 'Vadodara', 'Valsad', 'Vapi'],
          'Haryana': ['Ambala', 'Bhiwani', 'Faridabad', 'Gurugram', 'Hisar', 'Karnal', 'Kurukshetra', 'Panipat', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat', 'Yamunanagar'],
          'Himachal Pradesh': ['Bilaspur', 'Dharamshala', 'Hamirpur', 'Kangra', 'Kullu', 'Mandi', 'Shimla', 'Solan', 'Una'],
          'Jammu and Kashmir': ['Anantnag', 'Baramulla', 'Jammu', 'Kathua', 'Srinagar', 'Udhampur'],
          'Jharkhand': ['Bokaro', 'Deoghar', 'Dhanbad', 'Giridih', 'Hazaribagh', 'Jamshedpur', 'Ramgarh', 'Ranchi'],
          'Karnataka': ['Bagalkot', 'Ballari', 'Belagavi', 'Bengaluru', 'Bidar', 'Chamarajanagar', 'Chikkaballapur', 'Chikmagalur', 'Chitradurga', 'Dakshina Kannada', 'Davangere', 'Dharwad', 'Gadag', 'Hassan', 'Haveri', 'Hubli', 'Kalaburagi', 'Kodagu', 'Kolar', 'Koppal', 'Mandya', 'Mangaluru', 'Mysuru', 'Raichur', 'Ramanagara', 'Shimoga', 'Tumkur', 'Udupi', 'Uttara Kannada', 'Vijayapura', 'Yadgir'],
          'Kerala': ['Alappuzha', 'Ernakulam', 'Idukki', 'Kannur', 'Kasaragod', 'Kochi', 'Kollam', 'Kottayam', 'Kozhikode', 'Malappuram', 'Palakkad', 'Pathanamthitta', 'Thiruvananthapuram', 'Thrissur', 'Wayanad'],
          'Ladakh': ['Kargil', 'Leh'],
          'Lakshadweep': ['Agatti', 'Kavaratti'],
          'Madhya Pradesh': ['Bhopal', 'Chhindwara', 'Dewas', 'Gwalior', 'Indore', 'Jabalpur', 'Katni', 'Ratlam', 'Rewa', 'Sagar', 'Satna', 'Ujjain'],
          'Maharashtra': ['Ahmednagar', 'Akola', 'Amravati', 'Aurangabad', 'Chandrapur', 'Dhule', 'Jalgaon', 'Kolhapur', 'Latur', 'Mumbai', 'Nagpur', 'Nanded', 'Nashik', 'Navi Mumbai', 'Palghar', 'Pune', 'Ratnagiri', 'Sangli', 'Satara', 'Solapur', 'Thane'],
          'Manipur': ['Bishnupur', 'Churachandpur', 'Imphal', 'Thoubal'],
          'Meghalaya': ['Jowai', 'Shillong', 'Tura'],
          'Mizoram': ['Aizawl', 'Champhai', 'Lunglei'],
          'Nagaland': ['Dimapur', 'Kohima', 'Mokokchung', 'Tuensang'],
          'Odisha': ['Balasore', 'Baripada', 'Berhampur', 'Bhubaneswar', 'Cuttack', 'Jharsuguda', 'Puri', 'Rourkela', 'Sambalpur'],
          'Puducherry': ['Karaikal', 'Mahe', 'Puducherry', 'Yanam'],
          'Punjab': ['Amritsar', 'Bathinda', 'Hoshiarpur', 'Jalandhar', 'Ludhiana', 'Moga', 'Mohali', 'Pathankot', 'Patiala', 'Sangrur'],
          'Rajasthan': ['Ajmer', 'Alwar', 'Bharatpur', 'Bhilwara', 'Bikaner', 'Jaipur', 'Jaisalmer', 'Jodhpur', 'Kota', 'Pali', 'Sikar', 'Sri Ganganagar', 'Udaipur'],
          'Sikkim': ['Gangtok', 'Gyalshing', 'Mangan', 'Namchi'],
          'Tamil Nadu': ['Chennai', 'Coimbatore', 'Dindigul', 'Erode', 'Hosur', 'Kanchipuram', 'Karur', 'Madurai', 'Nagercoil', 'Namakkal', 'Ranipet', 'Salem', 'Sivakasi', 'Thanjavur', 'Tiruchirappalli', 'Tirunelveli', 'Tiruppur', 'Vellore'],
          'Telangana': ['Adilabad', 'Hyderabad', 'Karimnagar', 'Khammam', 'Mahbubnagar', 'Nalgonda', 'Nizamabad', 'Ramagundam', 'Secunderabad', 'Warangal'],
          'Tripura': ['Agartala', 'Dharmanagar', 'Udaipur'],
          'Uttar Pradesh': ['Agra', 'Aligarh', 'Allahabad', 'Bareilly', 'Ghaziabad', 'Gorakhpur', 'Jhansi', 'Kanpur', 'Lucknow', 'Mathura', 'Meerut', 'Moradabad', 'Noida', 'Saharanpur', 'Varanasi'],
          'Uttarakhand': ['Dehradun', 'Haldwani', 'Haridwar', 'Kashipur', 'Rishikesh', 'Roorkee', 'Rudrapur'],
          'West Bengal': ['Asansol', 'Bardhaman', 'Baharampur', 'Durgapur', 'Habra', 'Howrah', 'Kharagpur', 'Kolkata', 'Malda', 'Siliguri']
        };
        this.showMap = false;
        this.selectedLat = '';
        this.selectedLng = '';
        this.currentAddrForMap = null;
        this.mapSearchQuery = '';
      }
      return _createClass(CustomerFormComponent, [{
        key: "onInputChange",
        value: function onInputChange(event) {
          var el = event.target;
          if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            if (el.type === 'file' || el.type === 'radio' || el.type === 'checkbox') return;
            var cleaned = el.value.replace(/[^a-zA-Z0-9\s@.,\-_\/()#&+:;'"!%*=?\[\]{}|\\^~`$<>]/g, '').toUpperCase();
            if (el.value !== cleaned) {
              el.value = cleaned;
              el.dispatchEvent(new Event('input', {
                bubbles: true
              }));
            }
          }
        }
        // Custom validator: no special chars, no hyphens, English only
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;
          this.bankAccounts = [{
            bankName: '',
            branchName: '',
            accountNumber: '',
            ifscCode: '',
            branches: []
          }];
          this.loadZoneManagers();
          this.loadBankNames();
          this.loadBanks();
          this.customerForm = this.fb.group({
            // Basic Info
            customerClassification: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            priceList: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            customerName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, CustomerFormComponent_1.customerNameValidator]],
            customerType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            accountNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            customerClass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            customerStatus: ['A'],
            aadharNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[2-9][0-9]{11}$')]],
            customerEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
            confirmCustomerEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            panNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}$')]],
            gstinNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(0[1-9]|[1-2][0-9]|3[0-8])[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[A-Z]{1}[0-9A-Z]{1}$')]],
            siteUseCode: ['BILL_TO'],
            // Addresses handled by billAddresses/shipAddresses arrays
            // Contact - handled by contacts array
            // Bank - handled by bankAccounts array (ngModel)
            bankName: [''],
            branchName: [''],
            bankAccountNumber: [''],
            ifscCode: [''],
            // Sales & Payment
            salesperson: [''],
            salesrepEmpNumber: [''],
            paymentTerms: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            creditLimit: [null],
            deposit: [null],
            primaryOrderType: [''],
            offOrdNo: [''],
            offOrdDate: [''],
            fdrNumber: [null],
            additionalInfo: [''],
            // Zone / Area
            zoneCode: [''],
            area: [''],
            subArea: [''],
            ward: [''],
            zonalManager: [''],
            zonalManagerEmp: [''],
            // Nominee - required only for PERSON type
            nomineeName: [''],
            nomineeContact: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[6-9][0-9]{9}$')]],
            nomineeRelationship: [''],
            // Distributor
            productsDistributor: [''],
            distributorNumber: [''],
            icecreamDistributor: [''],
            icecreamDistNum: ['']
          });
          this.customerForm.get('customerClassification').valueChanges.subscribe(function (val) {
            if (val === 'B2B') {
              _this5.customerForm.get('gstinNumber').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(0[1-9]|[1-2][0-9]|3[0-8])[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[A-Z]{1}[0-9A-Z]{1}$')]);
            } else {
              _this5.customerForm.get('gstinNumber').clearValidators();
              if (!_this5.isEditMode) {
                _this5.customerForm.get('gstinNumber').setValue('');
              }
            }
            _this5.customerForm.get('gstinNumber').updateValueAndValidity();
          });
          this.customerForm.get('customerType').valueChanges.subscribe(function (val) {
            if (val === 'PERSON') {
              _this5.customerForm.get('aadharNo').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[2-9][0-9]{11}$')]);
              _this5.customerForm.get('nomineeName').clearValidators();
              _this5.customerForm.get('nomineeContact').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[6-9][0-9]{9}$')]);
              _this5.customerForm.get('nomineeRelationship').clearValidators();
            } else {
              _this5.customerForm.get('aadharNo').clearValidators();
              _this5.customerForm.get('nomineeName').clearValidators();
              _this5.customerForm.get('nomineeContact').clearValidators();
              _this5.customerForm.get('nomineeRelationship').clearValidators();
            }
            _this5.customerForm.get('aadharNo').updateValueAndValidity();
            _this5.customerForm.get('nomineeName').updateValueAndValidity();
            _this5.customerForm.get('nomineeContact').updateValueAndValidity();
            _this5.customerForm.get('nomineeRelationship').updateValueAndValidity();
          });
          // Check if editing existing customer
          var editData = localStorage.getItem('editCustomer');
          if (editData) {
            this.isEditMode = true;
            var cust = JSON.parse(editData);
            localStorage.removeItem('editCustomer');
            localStorage.setItem('editCustomerOrigId', JSON.stringify(cust.customerId || null));
            localStorage.setItem('editCustomerSource', cust.source || 'OCI');
            this.customerForm.patchValue({
              customerClassification: cust.customerClassification || cust.customerClass,
              customerName: cust.customerName,
              customerType: cust.customerType,
              accountNumber: cust.accountNumber,
              customerClass: cust.customerClass,
              priceList: cust.priceList,
              panNo: cust.panNo,
              gstinNumber: cust.gstinNumber,
              aadharNo: cust.aadharNo,
              customerEmail: cust.customerEmail || cust.emailId,
              confirmCustomerEmail: cust.customerEmail || cust.emailId,
              salesperson: cust.salesperson,
              salesrepEmpNumber: cust.salesrepEmpNumber,
              paymentTerms: cust.paymentTerms,
              creditLimit: cust.creditLimit,
              deposit: cust.deposit,
              primaryOrderType: cust.primaryOrderType,
              offOrdNo: cust.offOrdNo,
              offOrdDate: cust.offOrdDate,
              fdrNumber: cust.fdrNumber,
              zoneCode: cust.zoneCode,
              area: cust.area,
              subArea: cust.subArea,
              ward: cust.ward,
              zonalManager: cust.zonalManager,
              zonalManagerEmp: cust.zonalManagerEmp,
              nomineeName: cust.nomineeName,
              nomineeContact: cust.nomineeContact,
              nomineeRelationship: cust.nomineeRelationship,
              productsDistributor: cust.productsDistributor,
              distributorNumber: cust.distributorNumber,
              icecreamDistributor: cust.icecreamDistributor,
              icecreamDistNum: cust.icecreamDistNum,
              additionalInfo: cust.additionalInfo
            });
            // Bill To Addresses
            if (cust.billAddressesJson) {
              try {
                this.billAddresses = JSON.parse(cust.billAddressesJson).map(function (a) {
                  return Object.assign({}, a, {
                    cities: []
                  });
                });
              } catch (e) {}
            } else if (cust.customerCommAddress || cust.address1) {
              this.billAddresses[0].address1 = cust.customerCommAddress || cust.address1 || '';
              this.billAddresses[0].address2 = cust.address2 || '';
              this.billAddresses[0].city = cust.city || '';
              this.billAddresses[0].state = cust.state || '';
              this.billAddresses[0].postalCode = cust.postalCode || '';
              this.billAddresses[0].latitude = cust.latitude || '';
              this.billAddresses[0].longitude = cust.longitude || '';
            }
            // Ship To Addresses
            if (cust.shipAddressesJson) {
              try {
                this.shipAddresses = JSON.parse(cust.shipAddressesJson).map(function (a) {
                  return Object.assign({}, a, {
                    cities: []
                  });
                });
              } catch (e) {}
            }
            // Contacts
            if (cust.contactPerson) {
              this.contacts[0].contactPerson = cust.contactPerson;
              this.contacts[0].mobileNumber = cust.mobileNumber || cust.contactNo;
              this.contacts[0].emailId = cust.emailId || cust.customerEmail;
              this.contacts[0].confirmEmailId = cust.emailId || cust.customerEmail;
            }
            // Bank - load from banksJson only
            if (cust.banksJson) {
              try {
                var banks = JSON.parse(cust.banksJson);
                if (banks && banks.length > 0) this.bankAccounts = banks.map(function (b) {
                  return Object.assign({}, b, {
                    branches: []
                  });
                });
              } catch (e) {}
            }
            // Load cities for pre-populated addresses
            setTimeout(function () {
              _this5.billAddresses.forEach(function (addr) {
                if (addr.state) _this5.loadCitiesForAddr(addr);
              });
              _this5.shipAddresses.forEach(function (addr) {
                if (addr.state) _this5.loadCitiesForAddr(addr);
              });
            }, 500);
            // Load previously uploaded documents
            this.http.get('http://129.159.231.57/api/customer/docs/' + cust.customerId).subscribe(function (docs) {
              if (docs && docs.length > 0) {
                docs.forEach(function (doc) {
                  if (doc.docType === 'PAN') _this5.panCardFileName = doc.fileName;
                  if (doc.docType === 'AADHAR') _this5.aadharFileName = doc.fileName;
                  if (doc.docType === 'GST') _this5.gstFileName = doc.fileName;
                  if (doc.docType === 'CHEQUE') _this5.chequeFileName = doc.fileName;
                  if (doc.docType === 'CAN') _this5.canCertFileName = doc.fileName;
                  if (doc.docType === 'NOMINEE') _this5.existingNomineeDocNames = doc.fileName.split(',').map(function (f) {
                    return f.trim();
                  }).filter(function (f) {
                    return f;
                  });
                  if (doc.docType === 'ORDER') _this5.orderDocFileName = doc.fileName;
                });
              }
            }, function () {});
          }
        }
      }, {
        key: "loadCitiesForAddr",
        value: function loadCitiesForAddr(addr) {
          this.http.get('https://countriesnow.space/api/v0.1/countries/state/cities/q?country=India&state=' + encodeURIComponent(addr.state)).subscribe(function (res) {
            if (res && res.data) addr.cities = res.data;
          }, function () {});
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this6 = this;
          // Convert all string fields to uppercase and trim
          Object.keys(this.customerForm.controls).forEach(function (key) {
            var val = _this6.customerForm.get(key).value;
            if (typeof val === 'string') _this6.customerForm.get(key).setValue(val.trim().toUpperCase());
            _this6.customerForm.get(key).markAsTouched();
          });
          // Trim and uppercase address/contact/bank arrays
          this.billAddresses.forEach(function (a) {
            Object.keys(a).forEach(function (k) {
              if (typeof a[k] === 'string') a[k] = a[k].trim().toUpperCase();
            });
          });
          this.shipAddresses.forEach(function (a) {
            Object.keys(a).forEach(function (k) {
              if (typeof a[k] === 'string') a[k] = a[k].trim().toUpperCase();
            });
          });
          this.contacts.forEach(function (c) {
            Object.keys(c).forEach(function (k) {
              if (typeof c[k] === 'string') c[k] = c[k].trim().toUpperCase();
            });
          });
          this.bankAccounts.forEach(function (b) {
            Object.keys(b).forEach(function (k) {
              if (typeof b[k] === 'string') b[k] = b[k].trim().toUpperCase();
            });
          });
          if (this.customerForm.valid) {
            // Validate bank details are filled
            var bank = this.bankAccounts[0];
            if (!bank.bankName || !bank.branchName || !bank.accountNumber || !bank.ifscCode) {
              alert('Bank details are mandatory. Please fill Bank Name, Branch, Account Number and IFSC Code.');
              return;
            }
            var formData = this.customerForm.value;
            var payload = {
              customerName: formData.customerName,
              customerType: formData.customerType,
              accountNumber: formData.accountNumber,
              customerClass: formData.customerClass,
              customerClassification: formData.customerClassification,
              priceList: formData.priceList,
              customerStatus: formData.customerStatus,
              aadharNo: formData.aadharNo,
              emailId: formData.customerEmail,
              panNo: formData.panNo,
              gstinNumber: formData.gstinNumber,
              address1: this.billAddresses[0].address1,
              address2: this.billAddresses[0].address2,
              city: this.billAddresses[0].city,
              state: this.billAddresses[0].state,
              postalCode: this.billAddresses[0].postalCode,
              country: 'IN',
              latitude: this.billAddresses[0].latitude,
              longitude: this.billAddresses[0].longitude,
              customerSiteCode: this.billAddresses[0].siteCode,
              billAddressesJson: JSON.stringify(this.billAddresses),
              shipAddressesJson: JSON.stringify(this.shipAddresses),
              corrAddressJson: JSON.stringify(this.corrAddress),
              contactPerson: this.contacts[0].contactPerson,
              mobileNumber: this.contacts[0].mobileNumber,
              contactEmailId: this.contacts[0].emailId,
              banksJson: JSON.stringify(this.bankAccounts),
              salesperson: formData.salesperson,
              salesrepEmpNumber: formData.salesrepEmpNumber,
              paymentTerms: formData.paymentTerms,
              creditLimit: formData.creditLimit,
              deposit: formData.deposit,
              primaryOrderType: formData.primaryOrderType,
              offOrdNo: formData.offOrdNo,
              offOrdDate: formData.offOrdDate,
              zoneCode: formData.zoneCode,
              area: formData.area,
              ward: formData.ward,
              zonalManager: formData.zonalManager,
              zonalManagerEmp: formData.zonalManagerEmp,
              nomineeName: formData.nomineeName,
              nomineeContact: formData.nomineeContact,
              nomineeRelationship: formData.nomineeRelationship,
              productsDistributor: formData.productsDistributor,
              distributorNumber: formData.distributorNumber,
              icecreamDistributor: formData.icecreamDistributor,
              icecreamDistNum: formData.icecreamDistNum,
              additionalInfo: formData.additionalInfo,
              submittedBy: JSON.parse(localStorage.getItem('currentUser') || '{}').username || '',
              originalCustomerId: this.isEditMode ? JSON.parse(localStorage.getItem('editCustomerOrigId') || 'null') : null
            };
            var origId = this.isEditMode ? JSON.parse(localStorage.getItem('editCustomerOrigId') || 'null') : null;
            var isLegacyUpdate = localStorage.getItem('editCustomerSource') === 'LEGACY';
            var submitObs = this.isEditMode && origId && !isLegacyUpdate ? this.customerService.resubmitCustomer(origId, payload) : this.customerService.submitCustomer(payload);
            submitObs.subscribe(function (res) {
              if (res.status === 'SUCCESS') {
                var custId = res.customerId;
                var uploadErrors = [];
                var uploadPromises = [];
                // Upload documents if selected
                if (_this6.panCardFile) {
                  var fd = new FormData();
                  fd.append('file', _this6.panCardFile);
                  uploadPromises.push(_this6.http.post('http://129.159.231.57/api/customer/upload-pan/' + custId, fd).toPromise().then(function () {})["catch"](function () {
                    uploadErrors.push('PAN Card');
                  }));
                }
                if (_this6.aadharFile) {
                  var _fd = new FormData();
                  _fd.append('file', _this6.aadharFile);
                  uploadPromises.push(_this6.http.post('http://129.159.231.57/api/customer/upload-aadhar/' + custId, _fd).toPromise().then(function () {})["catch"](function () {
                    uploadErrors.push('Aadhaar');
                  }));
                }
                if (_this6.gstFile) {
                  var _fd2 = new FormData();
                  _fd2.append('file', _this6.gstFile);
                  uploadPromises.push(_this6.http.post('http://129.159.231.57/api/customer/upload-gst/' + custId, _fd2).toPromise().then(function () {})["catch"](function () {
                    uploadErrors.push('GST Certificate');
                  }));
                }
                if (_this6.chequeFile) {
                  var _fd3 = new FormData();
                  _fd3.append('file', _this6.chequeFile);
                  uploadPromises.push(_this6.http.post('http://129.159.231.57/api/customer/upload-cheque/' + custId, _fd3).toPromise().then(function () {})["catch"](function () {
                    uploadErrors.push('Cancelled Cheque');
                  }));
                }
                if (_this6.canCertFile) {
                  var _fd4 = new FormData();
                  _fd4.append('file', _this6.canCertFile);
                  uploadPromises.push(_this6.http.post('http://129.159.231.57/api/customer/upload-can/' + custId, _fd4).toPromise().then(function () {})["catch"](function () {
                    uploadErrors.push('CAN Certificate');
                  }));
                }
                if (_this6.nomineeDocFiles && _this6.nomineeDocFiles.length > 0) {
                  var nomineeUpload = _this6.nomineeDocFiles.reduce(function (chain, file) {
                    return chain.then(function () {
                      var fd = new FormData();
                      fd.append('file', file);
                      return _this6.http.post('http://129.159.231.57/api/customer/upload-nominee-doc/' + custId, fd).toPromise().then(function () {})["catch"](function () {
                        uploadErrors.push('Nominee Document');
                      });
                    });
                  }, Promise.resolve());
                  uploadPromises.push(nomineeUpload);
                }
                if (_this6.orderDocFile) {
                  var _fd5 = new FormData();
                  _fd5.append('file', _this6.orderDocFile);
                  uploadPromises.push(_this6.http.post('http://129.159.231.57/api/customer/upload-order-doc/' + custId, _fd5).toPromise().then(function () {})["catch"](function () {
                    uploadErrors.push('Order Document');
                  }));
                }
                Promise.all(uploadPromises).then(function () {
                  if (uploadErrors.length > 0) {
                    alert('Customer submitted for approval!\n\nWARNING: The following documents failed to upload:\n- ' + uploadErrors.join('\n- ') + '\n\nPlease re-upload these documents via Edit & Resubmit.');
                  } else {
                    alert('Customer submitted for approval!');
                  }
                  _this6.onReset();
                });
              } else {
                alert('Error: ' + res.message);
              }
            }, function (err) {
              alert('Server error: ' + err.message);
            });
          }
        }
      }, {
        key: "sendOtp",
        value: function sendOtp() {
          var _this7 = this;
          var mobile = this.contacts[0].mobileNumber;
          if (!mobile || !/^[6-9][0-9]{9}$/.test(mobile)) {
            alert('Please enter a valid 10-digit mobile number starting with 6-9');
            return;
          }
          this.http.post('http://129.159.231.57/api/otp/send', {
            mobile: mobile
          }).subscribe(function (res) {
            if (res.status === 'SUCCESS') {
              _this7.otpSent = true;
              _this7.otpVerified = false;
              _this7.otpValue = '';
              _this7.otpTimer = 120;
              if (_this7.otpInterval) clearInterval(_this7.otpInterval);
              _this7.otpInterval = setInterval(function () {
                _this7.otpTimer--;
                if (_this7.otpTimer <= 0) {
                  clearInterval(_this7.otpInterval);
                  _this7.otpSent = false;
                }
              }, 1000);
              alert('OTP sent to +91' + mobile);
            } else {
              alert('Failed to send OTP: ' + res.message);
            }
          }, function (err) {
            return alert('Error sending OTP: ' + (err.error && err.error.message ? err.error.message : err.message));
          });
        }
      }, {
        key: "verifyOtp",
        value: function verifyOtp() {
          var _this8 = this;
          var mobile = this.contacts[0].mobileNumber;
          this.http.post('http://129.159.231.57/api/otp/verify', {
            mobile: mobile,
            otp: this.otpValue
          }).subscribe(function (res) {
            if (res.status === 'SUCCESS') {
              _this8.otpVerified = true;
              _this8.otpSent = false;
              if (_this8.otpInterval) clearInterval(_this8.otpInterval);
              alert('Mobile number verified successfully!');
            } else {
              alert('Invalid or expired OTP. Please try again.');
            }
          }, function (err) {
            return alert('Error verifying OTP: ' + (err.error && err.error.message ? err.error.message : err.message));
          });
        }
      }, {
        key: "onMobileChange",
        value: function onMobileChange() {
          this.otpSent = false;
          this.otpVerified = false;
          this.otpValue = '';
        }
      }, {
        key: "loadZoneManagers",
        value: function loadZoneManagers() {
          var _this9 = this;
          this.http.get('http://129.159.231.57/api/customer/zone-managers').subscribe(function (data) {
            _this9.zoneManagers = data;
          }, function (err) {
            console.error('Failed to load zone managers');
          });
        }
      }, {
        key: "loadBankNames",
        value: function loadBankNames() {
          var _this0 = this;
          this.http.get('http://129.159.231.57/api/customer/bank-names').subscribe(function (data) {
            _this0.bankNamesList = data;
          }, function () {});
          this.http.get('http://129.159.231.57/api/customer/order-types').subscribe(function (data) {
            _this0.orderTypesList = data;
          }, function () {});
        }
      }, {
        key: "fetchByIfsc",
        value: function fetchByIfsc(bank) {
          if (!bank.ifscCode || bank.ifscCode.length !== 11) return;
          this.http.get('https://ifsc.razorpay.com/' + bank.ifscCode.toUpperCase()).subscribe(function (data) {
            if (data && data.BANK) {
              bank.bankName = data.BANK.toUpperCase();
              bank.branchName = data.BRANCH;
            }
          }, function () {
            alert('IFSC not found. Please enter bank and branch manually.');
          });
        }
      }, {
        key: "loadBanks",
        value: function loadBanks() {
          var _this1 = this;
          this.http.get('http://129.159.231.57/api/customer/banks').subscribe(function (data) {
            _this1.bankList = data;
          }, function (err) {
            console.error('Failed to load banks');
          });
        }
      }, {
        key: "onBankChange",
        value: function onBankChange() {
          var _this10 = this;
          var bankName = this.customerForm.get('bankName').value;
          this.branchList = [];
          this.customerForm.get('branchName').setValue('');
          if (bankName) {
            this.http.get('http://129.159.231.57/api/customer/branches?bankName=' + encodeURIComponent(bankName)).subscribe(function (data) {
              _this10.branchList = data;
            }, function (err) {
              console.error('Failed to load branches');
            });
          }
        }
      }, {
        key: "onBankItemChange",
        value: function onBankItemChange(bank) {
          bank.branches = [];
          bank.branchName = '';
          if (bank.bankName) {
            this.http.get('http://129.159.231.57/api/customer/branches?bankName=' + encodeURIComponent(bank.bankName)).subscribe(function (data) {
              bank.branches = data;
            }, function (err) {
              console.error('Failed to load branches');
            });
          }
        }
      }, {
        key: "addBank",
        value: function addBank() {
          this.bankAccounts.push({
            bankName: '',
            branchName: '',
            accountNumber: '',
            ifscCode: '',
            branches: []
          });
        }
      }, {
        key: "removeBank",
        value: function removeBank(i) {
          this.bankAccounts.splice(i, 1);
        }
      }, {
        key: "onZoneChange",
        value: function onZoneChange(zone) {
          var mgr = this.zoneManagers.find(function (m) {
            return m.zone === zone;
          });
          if (mgr) {
            this.customerForm.get('zonalManager').setValue(mgr.name);
            this.customerForm.get('zonalManagerEmp').setValue(mgr.empNumber);
          } else {
            this.customerForm.get('zonalManager').setValue('');
            this.customerForm.get('zonalManagerEmp').setValue('');
          }
        }
      }, {
        key: "addContact",
        value: function addContact() {
          this.contacts.push({
            contactPerson: '',
            designation: '',
            mobileNumber: '',
            emailId: '',
            confirmEmailId: ''
          });
        }
      }, {
        key: "removeContact",
        value: function removeContact(index) {
          this.contacts.splice(index, 1);
        }
      }, {
        key: "onAddrStateChange",
        value: function onAddrStateChange(addr, type) {
          addr.cities = [];
          addr.city = '';
          if (addr.state) {
            this.http.get('https://countriesnow.space/api/v0.1/countries/state/cities/q?country=India&state=' + encodeURIComponent(addr.state)).subscribe(function (res) {
              if (res && res.data) addr.cities = res.data;
            }, function () {});
          }
        }
      }, {
        key: "fetchByPincode",
        value: function fetchByPincode(addr) {
          var _this11 = this;
          if (!addr.postalCode || addr.postalCode.length !== 6) return;
          this.http.get('https://nominatim.openstreetmap.org/search?format=json&country=India&postalcode=' + addr.postalCode + '&limit=5&addressdetails=1&accept-language=en').subscribe(function (res) {
            if (res && res.length > 0) {
              var place = res[0];
              var a = place.address || {};
              addr.state = a.state || '';
              addr.city = a.city || a.town || a.county || a.state_district || '';
              addr.cities = _this11.stateCityMap[addr.state] || [];
              if (addr.city && addr.cities.indexOf(addr.city) === -1) {
                addr.cities.push(addr.city);
                addr.cities.sort();
              }
            } else {
              alert('Invalid PIN code or no data found');
            }
          }, function (err) {
            alert('Unable to fetch PIN code data');
          });
        }
      }, {
        key: "addBillAddress",
        value: function addBillAddress() {
          this.billAddresses.push({
            address1: '',
            address2: '',
            state: '',
            city: '',
            postalCode: '',
            latitude: '',
            longitude: '',
            siteCode: '',
            cities: []
          });
        }
      }, {
        key: "removeBillAddress",
        value: function removeBillAddress(index) {
          this.billAddresses.splice(index, 1);
        }
      }, {
        key: "addShipAddress",
        value: function addShipAddress() {
          this.shipAddresses.push({
            address1: '',
            address2: '',
            state: '',
            city: '',
            postalCode: '',
            latitude: '',
            longitude: '',
            siteCode: '',
            cities: []
          });
        }
      }, {
        key: "removeShipAddress",
        value: function removeShipAddress(index) {
          this.shipAddresses.splice(index, 1);
        }
      }, {
        key: "detectLocation",
        value: function detectLocation(addr) {
          var _this12 = this;
          this.currentAddrForMap = addr;
          this.selectedLat = '';
          this.selectedLng = '';
          this.mapSearchQuery = addr.postalCode || addr.city || '';
          this.showMap = true;
          setTimeout(function () {
            _this12.initMap();
            if (addr.postalCode && addr.postalCode.length === 6) {
              _this12.searchMapLocation();
            }
          }, 100);
        }
      }, {
        key: "initMap",
        value: function initMap() {
          var _this13 = this;
          var defaultLat = 12.9716;
          var defaultLng = 77.5946;
          this.map = L.map('map').setView([defaultLat, defaultLng], 12);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
          }).addTo(this.map);
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (pos) {
              _this13.map.setView([pos.coords.latitude, pos.coords.longitude], 15);
            });
          }
          this.map.on('click', function (e) {
            var lat = e.latlng.lat;
            var lng = e.latlng.lng;
            _this13.selectedLat = Math.abs(lat).toFixed(6) + (lat >= 0 ? '° N' : '° S');
            _this13.selectedLng = Math.abs(lng).toFixed(6) + (lng >= 0 ? '° E' : '° W');
            if (_this13.marker) {
              _this13.map.removeLayer(_this13.marker);
            }
            _this13.marker = L.marker([lat, lng]).addTo(_this13.map);
          });
        }
      }, {
        key: "searchMapLocation",
        value: function searchMapLocation() {
          var _this14 = this;
          if (!this.mapSearchQuery || this.mapSearchQuery.length < 3) return;
          this.http.get('https://nominatim.openstreetmap.org/search?format=json&q=' + encodeURIComponent(this.mapSearchQuery) + '&limit=1').subscribe(function (results) {
            if (results && results.length > 0) {
              var lat = parseFloat(results[0].lat);
              var lng = parseFloat(results[0].lon);
              _this14.map.setView([lat, lng], 16);
              _this14.selectedLat = Math.abs(lat).toFixed(6) + (lat >= 0 ? '° N' : '° S');
              _this14.selectedLng = Math.abs(lng).toFixed(6) + (lng >= 0 ? '° E' : '° W');
              if (_this14.marker) _this14.map.removeLayer(_this14.marker);
              _this14.marker = L.marker([lat, lng]).addTo(_this14.map);
            } else {
              alert('Location not found. Try a different search term.');
            }
          }, function () {
            alert('Search failed. Check internet connection.');
          });
        }
      }, {
        key: "confirmLocation",
        value: function confirmLocation() {
          if (this.currentAddrForMap) {
            this.currentAddrForMap.latitude = this.selectedLat;
            this.currentAddrForMap.longitude = this.selectedLng;
          }
          this.closeMap();
        }
      }, {
        key: "closeMap",
        value: function closeMap() {
          this.showMap = false;
          if (this.map) {
            this.map.remove();
            this.map = null;
          }
        }
      }, {
        key: "onCorrAddrChange",
        value: function onCorrAddrChange() {
          if (this.corrAddrSameAsBill) {
            this.corrAddress.address1 = this.billAddresses[0].address1;
            this.corrAddress.address2 = this.billAddresses[0].address2;
            this.corrAddress.state = this.billAddresses[0].state;
            this.corrAddress.city = this.billAddresses[0].city;
            this.corrAddress.postalCode = this.billAddresses[0].postalCode;
            this.corrAddress.cities = this.billAddresses[0].cities;
          } else {
            this.corrAddress = {
              address1: '',
              address2: '',
              state: '',
              city: '',
              postalCode: '',
              cities: []
            };
          }
        }
      }, {
        key: "onCorrStateChange",
        value: function onCorrStateChange() {
          var _this15 = this;
          this.corrAddress.cities = [];
          this.corrAddress.city = '';
          if (this.corrAddress.state) {
            this.http.get('https://countriesnow.space/api/v0.1/countries/state/cities/q?country=India&state=' + encodeURIComponent(this.corrAddress.state)).subscribe(function (res) {
              if (res && res.data) _this15.corrAddress.cities = res.data;
            }, function () {});
          }
        }
      }, {
        key: "onSameAsBill",
        value: function onSameAsBill() {
          if (this.sameAsBill && this.billAddresses.length > 0) {
            var b = this.billAddresses[0];
            this.shipAddresses[0] = Object.assign({}, b, {
              cities: _toConsumableArray(b.cities)
            });
          }
        }
      }, {
        key: "onPanCardUpload",
        value: function onPanCardUpload(event) {
          var file = event.target.files[0];
          if (file) {
            if (file.type !== 'application/pdf') {
              alert('Only PDF files are allowed!');
              return;
            }
            if (file.size > 20 * 1024 * 1024) {
              alert('File size exceeds 20MB limit. Please upload a smaller file.');
              return;
            }
            this.panCardFile = file;
            this.panCardFileName = file.name;
          }
        }
      }, {
        key: "removePanCard",
        value: function removePanCard() {
          this.panCardFile = null;
          this.panCardFileName = '';
        }
      }, {
        key: "onAadharUpload",
        value: function onAadharUpload(event) {
          var file = event.target.files[0];
          if (file) {
            if (file.type !== 'application/pdf') {
              alert('Only PDF files are allowed!');
              return;
            }
            if (file.size > 20 * 1024 * 1024) {
              alert('File size exceeds 20MB limit. Please upload a smaller file.');
              return;
            }
            this.aadharFile = file;
            this.aadharFileName = file.name;
          }
        }
      }, {
        key: "removeAadhar",
        value: function removeAadhar() {
          this.aadharFile = null;
          this.aadharFileName = '';
        }
      }, {
        key: "onGstUpload",
        value: function onGstUpload(event) {
          var file = event.target.files[0];
          if (file) {
            if (file.type !== 'application/pdf') {
              alert('Only PDF files are allowed!');
              return;
            }
            if (file.size > 20 * 1024 * 1024) {
              alert('File size exceeds 20MB limit. Please upload a smaller file.');
              return;
            }
            this.gstFile = file;
            this.gstFileName = file.name;
          }
        }
      }, {
        key: "removeGst",
        value: function removeGst() {
          this.gstFile = null;
          this.gstFileName = '';
        }
      }, {
        key: "onCanCertUpload",
        value: function onCanCertUpload(event) {
          var file = event.target.files[0];
          if (file) {
            if (file.type !== 'application/pdf') {
              alert('Only PDF files are allowed!');
              return;
            }
            if (file.size > 20 * 1024 * 1024) {
              alert('File size exceeds 20MB limit. Please upload a smaller file.');
              return;
            }
            this.canCertFile = file;
            this.canCertFileName = file.name;
          }
        }
      }, {
        key: "removeCanCert",
        value: function removeCanCert() {
          this.canCertFile = null;
          this.canCertFileName = '';
        }
      }, {
        key: "onChequeUpload",
        value: function onChequeUpload(event) {
          var file = event.target.files[0];
          if (file) {
            if (file.type !== 'application/pdf') {
              alert('Only PDF files are allowed!');
              return;
            }
            if (file.size > 20 * 1024 * 1024) {
              alert('File size exceeds 20MB limit. Please upload a smaller file.');
              return;
            }
            this.chequeFile = file;
            this.chequeFileName = file.name;
          }
        }
      }, {
        key: "onBankChequeUpload",
        value: function onBankChequeUpload(event, bank) {
          var file = event.target.files[0];
          if (file) {
            if (file.type !== 'application/pdf') {
              alert('Only PDF files are allowed!');
              return;
            }
            if (file.size > 20 * 1024 * 1024) {
              alert('File size exceeds 20MB limit. Please upload a smaller file.');
              return;
            }
            bank.chequeFile = file;
            bank.chequeFileName = file.name;
            if (this.bankAccounts.indexOf(bank) === 0) {
              this.chequeFile = file;
              this.chequeFileName = file.name;
            }
          }
        }
      }, {
        key: "removeCheque",
        value: function removeCheque() {
          this.chequeFile = null;
          this.chequeFileName = '';
        }
      }, {
        key: "onNomineeDocUpload",
        value: function onNomineeDocUpload(event) {
          var files = Array.from(event.target.files);
          if (files && files.length > 0) {
            var pdfFiles = files.filter(function (file) {
              return file.type === 'application/pdf';
            });
            var oversized = pdfFiles.filter(function (file) {
              return file.size > 20 * 1024 * 1024;
            });
            if (pdfFiles.length !== files.length) {
              alert('Only PDF files are allowed! Non-PDF files were ignored.');
            }
            if (oversized.length > 0) {
              alert(oversized.length + ' file(s) exceed 20MB limit and were ignored.');
            }
            var validFiles = pdfFiles.filter(function (file) {
              return file.size <= 20 * 1024 * 1024;
            });
            this.nomineeDocFiles = [].concat(_toConsumableArray(this.nomineeDocFiles), _toConsumableArray(validFiles));
          }
        }
      }, {
        key: "removeNomineeDoc",
        value: function removeNomineeDoc(index) {
          this.nomineeDocFiles.splice(index, 1);
        }
      }, {
        key: "removeExistingNomineeDoc",
        value: function removeExistingNomineeDoc(index) {
          var _this16 = this;
          if (!confirm('Remove this nominee document?')) return;
          var origId = JSON.parse(localStorage.getItem('editCustomerOrigId') || 'null');
          var fileName = this.existingNomineeDocNames[index];
          if (origId) {
            this.http.post('http://129.159.231.57/api/customer/remove-nominee-doc/' + origId, {
              fileName: fileName
            }).subscribe(function () {
              _this16.existingNomineeDocNames.splice(index, 1);
            }, function () {
              alert('Failed to remove document from server.');
            });
          } else {
            this.existingNomineeDocNames.splice(index, 1);
          }
        }
      }, {
        key: "onOrderDocUpload",
        value: function onOrderDocUpload(event) {
          var file = event.target.files[0];
          if (file) {
            if (file.type !== 'application/pdf') {
              alert('Only PDF files are allowed!');
              return;
            }
            if (file.size > 20 * 1024 * 1024) {
              alert('File size exceeds 20MB limit. Please upload a smaller file.');
              return;
            }
            this.orderDocFile = file;
            this.orderDocFileName = file.name;
          }
        }
      }, {
        key: "removeOrderDoc",
        value: function removeOrderDoc() {
          this.orderDocFile = null;
          this.orderDocFileName = '';
        }
      }, {
        key: "onReset",
        value: function onReset() {
          this.customerForm.reset({
            customerStatus: 'A',
            siteUseCode: 'BILL_TO'
          });
          this.panCardFileName = '';
          this.panCardFile = null;
          this.aadharFileName = '';
          this.aadharFile = null;
          this.gstFileName = '';
          this.gstFile = null;
          this.canCertFileName = '';
          this.canCertFile = null;
          this.chequeFileName = '';
          this.chequeFile = null;
          this.nomineeDocFiles = [];
          this.existingNomineeDocNames = [];
          this.billAddresses = [{
            address1: '',
            address2: '',
            state: '',
            city: '',
            postalCode: '',
            latitude: '',
            longitude: '',
            siteCode: '',
            cities: []
          }];
          this.shipAddresses = [{
            address1: '',
            address2: '',
            state: '',
            city: '',
            postalCode: '',
            latitude: '',
            longitude: '',
            siteCode: '',
            cities: []
          }];
          this.sameAsBill = false;
          this.contacts = [{
            contactPerson: '',
            designation: '',
            mobileNumber: '',
            emailId: '',
            confirmEmailId: ''
          }];
          this.otpSent = false;
          this.otpVerified = false;
          this.otpValue = '';
          if (this.otpInterval) clearInterval(this.otpInterval);
        }
      }], [{
        key: "customerNameValidator",
        value: function customerNameValidator(control) {
          if (!control.value) return null;
          var pattern = /^[a-zA-Z0-9\s.]+$/;
          return pattern.test(control.value) ? null : {
            invalidName: true
          };
        }
      }]);
    }();
    CustomerFormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:input', ['$event'])], CustomerFormComponent.prototype, "onInputChange", null);
    CustomerFormComponent = CustomerFormComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-customer-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-form.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customer-form/customer-form.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-form.component.css */"./src/app/pages/customer-form/customer-form.component.css"))["default"]]
    })], CustomerFormComponent);

    /***/
  }),
  /***/"./src/app/pages/customer-update/customer-update.component.css": (
  /*!*********************************************************************!*\
    !*** ./src/app/pages/customer-update/customer-update.component.css ***!
    \*********************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_pages_customerUpdate_customerUpdateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3RvbWVyLXVwZGF0ZS9jdXN0b21lci11cGRhdGUuY29tcG9uZW50LmNzcyJ9 */";

    /***/
  }),
  /***/"./src/app/pages/customer-update/customer-update.component.ts": (
  /*!********************************************************************!*\
    !*** ./src/app/pages/customer-update/customer-update.component.ts ***!
    \********************************************************************/
  /*! exports provided: CustomerUpdateComponent */
  /***/
  function _src_app_pages_customerUpdate_customerUpdateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CustomerUpdateComponent", function () {
      return CustomerUpdateComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var CustomerUpdateComponent = /*#__PURE__*/function () {
      function CustomerUpdateComponent(http, router) {
        _classCallCheck(this, CustomerUpdateComponent);
        this.http = http;
        this.router = router;
        this.searchQuery = '';
        this.searchResults = [];
        this.selectedCustomer = null;
        this.editing = false;
        this.message = '';
        this.messageType = '';
      }
      return _createClass(CustomerUpdateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "search",
        value: function search() {
          var _this17 = this;
          if (!this.searchQuery || this.searchQuery.length < 2) {
            alert('Enter at least 2 characters to search');
            return;
          }
          this.http.get('http://129.159.231.57/api/customer/search-for-update?q=' + this.searchQuery).subscribe(function (data) {
            _this17.searchResults = data;
            if (data.length === 0) {
              _this17.message = 'No customers found';
              _this17.messageType = 'warning';
            } else {
              _this17.message = '';
            }
          }, function (err) {
            alert('Search failed');
          });
        }
      }, {
        key: "selectCustomer",
        value: function selectCustomer(cust) {
          var _this18 = this;
          if (cust.source === 'LEGACY') {
            this.http.get('http://129.159.231.57/api/customer/legacy-detail/' + cust.customerId).subscribe(function (detail) {
              localStorage.setItem('editCustomer', JSON.stringify(detail));
              _this18.router.navigate(['/customer-form']);
            }, function (err) {
              localStorage.setItem('editCustomer', JSON.stringify(cust));
              _this18.router.navigate(['/customer-form']);
            });
          } else {
            this.http.get('http://129.159.231.57/api/customer/detail/' + cust.customerId).subscribe(function (detail) {
              localStorage.setItem('editCustomer', JSON.stringify(detail));
              _this18.router.navigate(['/customer-form']);
            }, function (err) {
              localStorage.setItem('editCustomer', JSON.stringify(cust));
              _this18.router.navigate(['/customer-form']);
            });
          }
        }
      }, {
        key: "submitUpdate",
        value: function submitUpdate() {
          var _this19 = this;
          if (!confirm('Are you sure you want to submit this update for approval?')) return;
          this.http.post('http://129.159.231.57/api/customer/update-request', this.selectedCustomer).subscribe(function (res) {
            if (res.status === 'SUCCESS') {
              alert('Update request submitted for approval!');
              _this19.editing = false;
              _this19.selectedCustomer = null;
              _this19.searchQuery = '';
            } else {
              alert('Error: ' + res.message);
            }
          }, function (err) {
            alert('Server error');
          });
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.editing = false;
          this.selectedCustomer = null;
        }
      }]);
    }();
    CustomerUpdateComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };
    CustomerUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-customer-update',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-update.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customer-update/customer-update.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-update.component.css */"./src/app/pages/customer-update/customer-update.component.css"))["default"]]
    })], CustomerUpdateComponent);

    /***/
  }),
  /***/"./src/app/pages/finance-approval/finance-approval.component.css": (
  /*!***********************************************************************!*\
    !*** ./src/app/pages/finance-approval/finance-approval.component.css ***!
    \***********************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_pages_financeApproval_financeApprovalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".card-header {\n  padding: 15px 20px;\n}\n\n.table th {\n  background-color: #343a40;\n  color: white;\n  font-size: 13px;\n}\n\n.table td {\n  font-size: 13px;\n  vertical-align: middle;\n}\n\n.status-badge {\n  padding: 4px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n.status-pending { background-color: #fff3cd; color: #856404; }\n\n.status-approved { background-color: #d4edda; color: #155724; }\n\n.status-rejected { background-color: #f8d7da; color: #721c24; }\n\n.view-link {\n  color: #1a73e8;\n  font-weight: 600;\n  font-size: 13px;\n  text-decoration: none;\n}\n\n.view-link:hover {\n  text-decoration: underline;\n}\n\n/* Modal */\n\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n\n.modal-box {\n  background: white;\n  border-radius: 8px;\n  width: 900px;\n  max-width: 95vw;\n  max-height: 85vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);\n}\n\n.modal-header-custom {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 20px;\n  background-color: #17a2b8;\n  color: white;\n  border-radius: 8px 8px 0 0;\n}\n\n.modal-header-custom h4 {\n  margin: 0;\n  font-size: 18px;\n}\n\n.close-btn {\n  background: none;\n  border: none;\n  color: white;\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.modal-body-custom {\n  padding: 20px;\n}\n\n.section-title {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1a73e8;\n  border-bottom: 1px solid #eee;\n  padding-bottom: 5px;\n  margin-bottom: 12px;\n  margin-top: 15px;\n}\n\n.detail-row {\n  margin-bottom: 12px;\n}\n\n.detail-row label {\n  font-size: 11px;\n  color: #888;\n  text-transform: uppercase;\n  margin-bottom: 2px;\n  display: block;\n}\n\n.detail-row p {\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n  margin: 0;\n}\n\n.modal-footer-custom {\n  padding: 15px 20px;\n  border-top: 1px solid #eee;\n  text-align: right;\n}\n\n.modal-footer-custom .btn {\n  margin-left: 10px;\n  padding: 8px 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmluYW5jZS1hcHByb3ZhbC9maW5hbmNlLWFwcHJvdmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQSxrQkFBa0IseUJBQXlCLEVBQUUsY0FBYyxFQUFFOztBQUM3RCxtQkFBbUIseUJBQXlCLEVBQUUsY0FBYyxFQUFFOztBQUM5RCxtQkFBbUIseUJBQXlCLEVBQUUsY0FBYyxFQUFFOztBQUU5RDtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQSxVQUFVOztBQUNWO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmluYW5jZS1hcHByb3ZhbC9maW5hbmNlLWFwcHJvdmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG59XG5cbi50YWJsZSB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4udGFibGUgdGQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5zdGF0dXMtYmFkZ2Uge1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uc3RhdHVzLXBlbmRpbmcgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmM2NkOyBjb2xvcjogIzg1NjQwNDsgfVxuLnN0YXR1cy1hcHByb3ZlZCB7IGJhY2tncm91bmQtY29sb3I6ICNkNGVkZGE7IGNvbG9yOiAjMTU1NzI0OyB9XG4uc3RhdHVzLXJlamVjdGVkIHsgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTsgY29sb3I6ICM3MjFjMjQ7IH1cblxuLnZpZXctbGluayB7XG4gIGNvbG9yOiAjMWE3M2U4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnZpZXctbGluazpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4vKiBNb2RhbCAqL1xuLm1vZGFsLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLm1vZGFsLWJveCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiA5MDBweDtcbiAgbWF4LXdpZHRoOiA5NXZ3O1xuICBtYXgtaGVpZ2h0OiA4NXZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBib3gtc2hhZG93OiAwIDhweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLm1vZGFsLWhlYWRlci1jdXN0b20ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiODtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcbn1cblxuLm1vZGFsLWhlYWRlci1jdXN0b20gaDQge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmNsb3NlLWJ0biB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1vZGFsLWJvZHktY3VzdG9tIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnNlY3Rpb24tdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMWE3M2U4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmRldGFpbC1yb3cge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uZGV0YWlsLXJvdyBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICM4ODg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kZXRhaWwtcm93IHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzMzO1xuICBtYXJnaW46IDA7XG59XG5cbi5tb2RhbC1mb290ZXItY3VzdG9tIHtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tb2RhbC1mb290ZXItY3VzdG9tIC5idG4ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG59XG4iXX0= */";

    /***/
  }),
  /***/"./src/app/pages/finance-approval/finance-approval.component.ts": (
  /*!**********************************************************************!*\
    !*** ./src/app/pages/finance-approval/finance-approval.component.ts ***!
    \**********************************************************************/
  /*! exports provided: FinanceApprovalComponent */
  /***/
  function _src_app_pages_financeApproval_financeApprovalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FinanceApprovalComponent", function () {
      return FinanceApprovalComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/customer.service */"./src/app/services/customer.service.ts");
    /* harmony import */
    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */"./src/app/services/auth.service.ts");
    /* harmony import */
    var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */"./node_modules/jspdf/dist/jspdf.es.min.js");
    var FinanceApprovalComponent = /*#__PURE__*/function () {
      function FinanceApprovalComponent(customerService, authService, router) {
        _classCallCheck(this, FinanceApprovalComponent);
        this.customerService = customerService;
        this.authService = authService;
        this.router = router;
        this.customers = [];
        this.selectedCustomer = null;
        this.showRejectInput = false;
        this.rejectReason = '';
        this.statusFilter = 'ALL';
        this.authorized = false;
      }
      return _createClass(FinanceApprovalComponent, [{
        key: "getCurrentUser",
        value: function getCurrentUser() {
          var user = JSON.parse(localStorage.getItem('currentUser') || '{}');
          return user.username || 'ADMIN';
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var user = this.authService.getUser();
          if (!user || user.role !== 'MASTER') {
            window.location.href = '/customer-portal/customer-form';
            return;
          }
          this.authorized = true;
          this.loadAllCustomers();
        }
      }, {
        key: "loadAllCustomers",
        value: function loadAllCustomers() {
          var _this20 = this;
          this.customerService.getAllCustomers().subscribe(function (data) {
            _this20.customers = data;
          }, function (err) {
            console.error('Error loading customers:', err);
          });
        }
      }, {
        key: "parseBankAccounts",
        value: function parseBankAccounts() {
          if (this.selectedCustomer && this.selectedCustomer.banksJson) {
            try {
              return JSON.parse(this.selectedCustomer.banksJson);
            } catch (e) {}
          }
          return [];
        }
      }, {
        key: "getFilteredCustomers",
        value: function getFilteredCustomers() {
          var _this21 = this;
          if (this.statusFilter === 'ALL') return this.customers;
          return this.customers.filter(function (c) {
            return c.pickedStatus === _this21.statusFilter;
          });
        }
      }, {
        key: "viewDetails",
        value: function viewDetails(cust) {
          this.selectedCustomer = cust;
          this.showRejectInput = false;
          this.rejectReason = '';
          // Parse correspondence address from JSON or fallback to bill-to
          if (cust.corrAddressJson) {
            try {
              var corr = JSON.parse(cust.corrAddressJson);
              this.selectedCustomer.corrAddress1 = corr.address1;
              this.selectedCustomer.corrAddress2 = corr.address2;
              this.selectedCustomer.corrCity = corr.city;
              this.selectedCustomer.corrState = corr.state;
              this.selectedCustomer.corrPostalCode = corr.postalCode;
            } catch (e) {
              this.selectedCustomer.corrAddress1 = cust.corrAddressJson;
            }
          } else {
            // Fallback: same as bill-to address
            this.selectedCustomer.corrAddress1 = cust.address1;
            this.selectedCustomer.corrAddress2 = cust.address2;
            this.selectedCustomer.corrCity = cust.city;
            this.selectedCustomer.corrState = cust.state;
            this.selectedCustomer.corrPostalCode = cust.postalCode;
          }
        }
      }, {
        key: "isExpired",
        value: function isExpired(cust) {
          // DISABLED: Super Master feature
          if (!cust.creationDate) return false;
          var created = new Date(cust.creationDate).getTime();
          var now = new Date().getTime();
          return now - created > 24 * 60 * 60 * 1000;
        }
      }, {
        key: "parseBillAddresses",
        value: function parseBillAddresses() {
          if (this.selectedCustomer && this.selectedCustomer.billAddressesJson) {
            try {
              return JSON.parse(this.selectedCustomer.billAddressesJson);
            } catch (e) {}
          }
          // Fallback to single address fields
          if (this.selectedCustomer && this.selectedCustomer.address1) {
            return [{
              address1: this.selectedCustomer.address1,
              address2: this.selectedCustomer.address2,
              city: this.selectedCustomer.city,
              state: this.selectedCustomer.state,
              postalCode: this.selectedCustomer.postalCode,
              latitude: this.selectedCustomer.latitude,
              longitude: this.selectedCustomer.longitude
            }];
          }
          return [];
        }
      }, {
        key: "parseShipAddresses",
        value: function parseShipAddresses() {
          if (this.selectedCustomer && this.selectedCustomer.shipAddressesJson) {
            try {
              return JSON.parse(this.selectedCustomer.shipAddressesJson);
            } catch (e) {}
          }
          return [];
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.selectedCustomer = null;
          this.showRejectInput = false;
          this.rejectReason = '';
        }
      }, {
        key: "approve",
        value: function approve() {
          var _this22 = this;
          if (!confirm('Are you sure you want to APPROVE this customer?')) return;
          this.customerService.approveCustomer(this.selectedCustomer.customerId, this.getCurrentUser()).subscribe(function (res) {
            if (res.status === 'SUCCESS') {
              alert('Customer "' + _this22.selectedCustomer.customerName + '" approved and created in ERP!');
              _this22.closeModal();
              _this22.loadAllCustomers();
            } else {
              alert('Error: ' + res.message);
            }
          }, function (err) {
            alert('Server error: ' + err.message);
          });
        }
      }, {
        key: "showRejectBox",
        value: function showRejectBox() {
          this.showRejectInput = true;
        }
      }, {
        key: "cancelReject",
        value: function cancelReject() {
          this.showRejectInput = false;
          this.rejectReason = '';
        }
      }, {
        key: "confirmReject",
        value: function confirmReject() {
          var _this23 = this;
          if (!confirm('Are you sure you want to REJECT this customer?')) return;
          this.customerService.rejectCustomer(this.selectedCustomer.customerId, this.rejectReason, this.getCurrentUser()).subscribe(function (res) {
            alert('Customer "' + _this23.selectedCustomer.customerName + '" rejected.');
            _this23.closeModal();
            _this23.loadAllCustomers();
          }, function (err) {
            alert('Server error: ' + err.message);
          });
        }
      }, {
        key: "downloadPdf",
        value: function downloadPdf() {
          var c = this.selectedCustomer;
          var doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]();
          var y = 15;
          var lm = 14;
          var pageH = 280;
          var addTitle = function addTitle(title) {
            if (y > pageH - 20) {
              doc.addPage();
              y = 15;
            }
            doc.setFontSize(12);
            doc.setFont('helvetica', 'bold');
            doc.text(title, lm, y);
            y += 2;
            doc.setDrawColor(0, 102, 204);
            doc.line(lm, y, 196, y);
            y += 6;
          };
          var addField = function addField(label, value) {
            if (y > pageH - 10) {
              doc.addPage();
              y = 15;
            }
            doc.setFontSize(9);
            doc.setFont('helvetica', 'bold');
            doc.text(label + ':', lm, y);
            doc.setFont('helvetica', 'normal');
            var val = value != null && value !== '' ? String(value) : '-';
            var lines = doc.splitTextToSize(val, 125);
            for (var li = 0; li < lines.length; li++) {
              if (li > 0) {
                y += 5;
                if (y > pageH - 10) {
                  doc.addPage();
                  y = 15;
                }
              }
              doc.text(lines[li], lm + 55, y);
            }
            y += 6;
          };
          // Header
          doc.setFontSize(16);
          doc.setFont('helvetica', 'bold');
          doc.text('BAMUL - Customer Details', lm, y);
          y += 10;
          addTitle('Basic Information');
          addField('Customer Name', c.customerName);
          addField('Account Number', c.accountNumber || 'Not provided');
          addField('Customer Type', c.customerType);
          addField('Customer Classification', c.customerClassification);
          addField('B2B / B2C', c.customerClass);
          addField('Price List', c.priceList);
          addField('Primary Order Type', c.primaryOrderType);
          addField('Customer Email', c.customerEmail);
          addField('PAN No', c.panNo);
          addField('GSTIN', c.gstinNumber);
          addField('Aadhaar No', c.aadharNo);
          addTitle('Bill To Address');
          var billAddrs = this.parseBillAddresses();
          billAddrs.forEach(function (addr, i) {
            if (billAddrs.length > 1) addField('Address ' + (i + 1), '');
            addField('Address', (addr.address1 || '') + ' ' + (addr.address2 || ''));
            addField('City / State', (addr.city || '') + ', ' + (addr.state || ''));
            addField('Postal Code', addr.postalCode);
            addField('Latitude', addr.latitude);
            addField('Longitude', addr.longitude);
          });
          addTitle('Correspondence Address');
          addField('Address', (c.corrAddress1 || '') + ' ' + (c.corrAddress2 || ''));
          addField('City / State', (c.corrCity || '') + ', ' + (c.corrState || ''));
          addField('Postal Code', c.corrPostalCode);
          addTitle('Ship To Address');
          var shipAddrs = this.parseShipAddresses();
          shipAddrs.forEach(function (addr, i) {
            if (shipAddrs.length > 1) addField('Address ' + (i + 1), '');
            addField('Address', (addr.address1 || '') + ' ' + (addr.address2 || ''));
            addField('City / State', (addr.city || '') + ', ' + (addr.state || ''));
            addField('Postal Code', addr.postalCode);
            addField('Latitude', addr.latitude);
            addField('Longitude', addr.longitude);
          });
          addTitle('Contact Details');
          addField('Contact Person', c.contactPerson);
          addField('Mobile', c.mobileNumber ? '+91 ' + c.mobileNumber : '');
          addField('Email', c.emailId);
          addTitle('Bank Details');
          var banks = this.parseBankAccounts();
          banks.forEach(function (bank, i) {
            if (banks.length > 1) addField('Bank ' + (i + 1), '');
            addField('Bank Name', bank.bankName);
            addField('Branch Name', bank.branchName);
            addField('Account Number', bank.accountNumber);
            addField('IFSC Code', bank.ifscCode);
          });
          addTitle('Sales Details');
          addField('Salesperson', c.salesperson);
          addField('Salesrep Emp No', c.salesrepEmpNumber);
          addTitle('Payment & Order Details');
          addField('Payment Terms', c.paymentTerms);
          addField('Credit Limit', c.creditLimit ? '₹ ' + c.creditLimit : '');
          addField('Deposit', c.deposit ? '₹ ' + c.deposit : '');
          addField('FDR Number', c.fdrNumber);
          addField('Off Ord No', c.offOrdNo);
          addField('Off Ord Date', c.offOrdDate);
          addTitle('Zone / Area');
          addField('Zone Code', c.zoneCode);
          addField('Area', c.area);
          addField('Sub Area', c.subArea);
          addField('Ward', c.ward);
          addField('Zonal Manager', c.zonalManager);
          addField('Zonal Manager Emp No', c.zonalManagerEmp);
          addTitle('Nominee Details');
          addField('Nominee Name', c.nomineeName);
          addField('Nominee Contact', c.nomineeContact ? '+91 ' + c.nomineeContact : '');
          addField('Relationship', c.nomineeRelationship);
          addTitle('Distributor Information');
          addField('Products Distributor', c.productsDistributor);
          addField('Distributor Number', c.distributorNumber);
          addField('Icecream Distributor', c.icecreamDistributor);
          addField('Icecream Dist Num', c.icecreamDistNum);
          addTitle('Additional Information');
          addField('Remarks', c.additionalInfo);
          doc.save('Customer_' + (c.customerName || 'details').replace(/\s+/g, '_') + '.pdf');
        }
      }]);
    }();
    FinanceApprovalComponent.ctorParameters = function () {
      return [{
        type: _services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };
    FinanceApprovalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-finance-approval',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./finance-approval.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/finance-approval/finance-approval.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./finance-approval.component.css */"./src/app/pages/finance-approval/finance-approval.component.css"))["default"]]
    })], FinanceApprovalComponent);

    /***/
  }),
  /***/"./src/app/pages/login/login.component.css": (
  /*!*************************************************!*\
    !*** ./src/app/pages/login/login.component.css ***!
    \*************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_pages_login_loginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ":host {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: calc(100vh - 80px);\n}\n\n.card {\n  box-shadow: 0 4px 12px rgba(0,0,0,0.15);\n  border: none;\n  border-radius: 8px;\n  width: 400px;\n}\n\n.card-header {\n  border-radius: 8px 8px 0 0;\n  padding: 20px;\n}\n\n.form-group {\n  margin-bottom: 18px;\n}\n\n.btn-block {\n  padding: 12px;\n  font-size: 16px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XG59XG5cbi5jYXJkIHtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsMCwwLDAuMTUpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDQwMHB4O1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuXG4uYnRuLWJsb2NrIHtcbiAgcGFkZGluZzogMTJweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuIl19 */";

    /***/
  }),
  /***/"./src/app/pages/login/login.component.ts": (
  /*!************************************************!*\
    !*** ./src/app/pages/login/login.component.ts ***!
    \************************************************/
  /*! exports provided: LoginComponent */
  /***/
  function _src_app_pages_login_loginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */"./src/app/services/auth.service.ts");
    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(fb, router, authService) {
        _classCallCheck(this, LoginComponent);
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.errorMessage = '';
        this.loading = false;
      }
      return _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "onLogin",
        value: function onLogin() {
          var _this24 = this;
          this.errorMessage = '';
          this.loading = true;
          var _this$loginForm$value = this.loginForm.value,
            username = _this$loginForm$value.username,
            password = _this$loginForm$value.password;
          this.authService.login(username, password).subscribe(function (res) {
            _this24.loading = false;
            if (res.status === 'SUCCESS') {
              _this24.authService.setUser(res);
              if (res.role === 'MASTER') {
                _this24.router.navigate(['/admin-approval']);
              } else {
                _this24.router.navigate(['/customer-form']);
              }
            } else {
              _this24.errorMessage = res.message;
            }
          }, function (err) {
            _this24.loading = false;
            _this24.errorMessage = 'Server not reachable. Please try again.';
          });
        }
      }]);
    }();
    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */"./src/app/pages/login/login.component.css"))["default"]]
    })], LoginComponent);

    /***/
  }),
  /***/"./src/app/pages/my-submissions/my-submissions.component.css": (
  /*!*******************************************************************!*\
    !*** ./src/app/pages/my-submissions/my-submissions.component.css ***!
    \*******************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_pages_mySubmissions_mySubmissionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".label { padding: 4px 8px; border-radius: 3px; font-size: 12px; color: white; }\n.label-warning { background-color: #f0ad4e; }\n.label-success { background-color: #5cb85c; }\n.label-danger { background-color: #d9534f; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXktc3VibWlzc2lvbnMvbXktc3VibWlzc2lvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFTLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUU7QUFDOUUsaUJBQWlCLHlCQUF5QixFQUFFO0FBQzVDLGlCQUFpQix5QkFBeUIsRUFBRTtBQUM1QyxnQkFBZ0IseUJBQXlCLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9teS1zdWJtaXNzaW9ucy9teS1zdWJtaXNzaW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmVsIHsgcGFkZGluZzogNHB4IDhweDsgYm9yZGVyLXJhZGl1czogM3B4OyBmb250LXNpemU6IDEycHg7IGNvbG9yOiB3aGl0ZTsgfVxuLmxhYmVsLXdhcm5pbmcgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlOyB9XG4ubGFiZWwtc3VjY2VzcyB7IGJhY2tncm91bmQtY29sb3I6ICM1Y2I4NWM7IH1cbi5sYWJlbC1kYW5nZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRmOyB9XG4iXX0= */";

    /***/
  }),
  /***/"./src/app/pages/my-submissions/my-submissions.component.ts": (
  /*!******************************************************************!*\
    !*** ./src/app/pages/my-submissions/my-submissions.component.ts ***!
    \******************************************************************/
  /*! exports provided: MySubmissionsComponent */
  /***/
  function _src_app_pages_mySubmissions_mySubmissionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "MySubmissionsComponent", function () {
      return MySubmissionsComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var MySubmissionsComponent = /*#__PURE__*/function () {
      function MySubmissionsComponent(http, router) {
        _classCallCheck(this, MySubmissionsComponent);
        this.http = http;
        this.router = router;
        this.submissions = [];
        this.loading = true;
      }
      return _createClass(MySubmissionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;
          var user = JSON.parse(localStorage.getItem('currentUser') || '{}');
          var username = user.username || '';
          this.http.get('http://129.159.231.57/api/customer/my-submissions/' + username).subscribe(function (data) {
            _this25.submissions = data;
            _this25.loading = false;
          }, function () {
            _this25.loading = false;
          });
        }
      }, {
        key: "getStatusLabel",
        value: function getStatusLabel(status) {
          if (status === 'PA') return 'PENDING';
          if (status === 'S') return 'APPROVED';
          if (status === 'REJECTED') return 'REJECTED';
          if (status === 'E') return 'ERROR';
          return status || '-';
        }
      }, {
        key: "resubmit",
        value: function resubmit(cust) {
          var _this26 = this;
          this.http.get('http://129.159.231.57/api/customer/detail/' + cust.customerId).subscribe(function (fullCust) {
            localStorage.setItem('editCustomer', JSON.stringify(fullCust));
            _this26.router.navigate(['/customer-form']);
          }, function () {
            alert('Failed to load customer details');
          });
        }
      }]);
    }();
    MySubmissionsComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };
    MySubmissionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-submissions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-submissions.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-submissions/my-submissions.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-submissions.component.css */"./src/app/pages/my-submissions/my-submissions.component.css"))["default"]]
    })], MySubmissionsComponent);

    /***/
  }),
  /***/"./src/app/pages/registration/registration.component.css": (
  /*!***************************************************************!*\
    !*** ./src/app/pages/registration/registration.component.css ***!
    \***************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_pages_registration_registrationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".card {\n  box-shadow: 0 4px 12px rgba(0,0,0,0.15);\n  border: none;\n  border-radius: 8px;\n}\n\n.card-header {\n  border-radius: 8px 8px 0 0;\n  padding: 20px;\n}\n\n.form-group {\n  margin-bottom: 18px;\n}\n\n.form-group label {\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.btn-block {\n  padding: 12px;\n  font-size: 16px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUNBQXVDO0VBQ3ZDLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsMCwwLDAuMTUpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cblxuLmZvcm0tZ3JvdXAgbGFiZWwge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5idG4tYmxvY2sge1xuICBwYWRkaW5nOiAxMnB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4iXX0= */";

    /***/
  }),
  /***/"./src/app/pages/registration/registration.component.ts": (
  /*!**************************************************************!*\
    !*** ./src/app/pages/registration/registration.component.ts ***!
    \**************************************************************/
  /*! exports provided: RegistrationComponent */
  /***/
  function _src_app_pages_registration_registrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
      return RegistrationComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var RegistrationComponent = /*#__PURE__*/function () {
      function RegistrationComponent(fb, http, router) {
        _classCallCheck(this, RegistrationComponent);
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.message = '';
        this.messageType = '';
        this.loading = false;
      }
      return _createClass(RegistrationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registrationForm = this.fb.group({
            employeeNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastName: [''],
            department: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            supervisorName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            emailAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.coop$')]],
            confirmEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        }
      }, {
        key: "onRegister",
        value: function onRegister() {
          var _this27 = this;
          Object.keys(this.registrationForm.controls).forEach(function (key) {
            var val = _this27.registrationForm.get(key).value;
            if (typeof val === 'string') _this27.registrationForm.get(key).setValue(val.trim());
          });
          if (this.registrationForm.invalid) return;
          if (this.registrationForm.get('emailAddress').value !== this.registrationForm.get('confirmEmail').value) return;
          var form = this.registrationForm.value;
          this.loading = true;
          this.message = '';
          var payload = {
            employeeNumber: form.employeeNumber,
            firstName: form.firstName,
            lastName: form.lastName,
            fullName: form.firstName + ' ' + form.lastName,
            department: form.department,
            supervisorName: form.supervisorName,
            emailAddress: form.emailAddress,
            mobileNumber: '0000000000',
            address: 'NA',
            username: form.employeeNumber,
            password: 'welcome1'
          };
          this.http.post('http://129.159.231.57/api/registration/register', payload).subscribe(function (res) {
            _this27.loading = false;
            if (res.status === 'SUCCESS') {
              _this27.message = res.message;
              _this27.messageType = 'success';
              setTimeout(function () {
                return _this27.router.navigate(['/login']);
              }, 2000);
            } else {
              _this27.message = res.message;
              _this27.messageType = 'danger';
            }
          }, function (err) {
            _this27.loading = false;
            _this27.message = 'Server error. Please try again.';
            _this27.messageType = 'danger';
          });
        }
      }]);
    }();
    RegistrationComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registration',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration/registration.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration.component.css */"./src/app/pages/registration/registration.component.css"))["default"]]
    })], RegistrationComponent);

    /***/
  }),
  /***/"./src/app/pages/reset-password/reset-password.component.css": (
  /*!*******************************************************************!*\
    !*** ./src/app/pages/reset-password/reset-password.component.css ***!
    \*******************************************************************/
  /*! exports provided: default */
  /***/
  function _src_app_pages_resetPassword_resetPasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */";

    /***/
  }),
  /***/"./src/app/pages/reset-password/reset-password.component.ts": (
  /*!******************************************************************!*\
    !*** ./src/app/pages/reset-password/reset-password.component.ts ***!
    \******************************************************************/
  /*! exports provided: ResetPasswordComponent */
  /***/
  function _src_app_pages_resetPassword_resetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
      return ResetPasswordComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var ResetPasswordComponent = /*#__PURE__*/function () {
      function ResetPasswordComponent(http, router) {
        _classCallCheck(this, ResetPasswordComponent);
        this.http = http;
        this.router = router;
        // Step 1: Validate
        this.username = '';
        this.emailId = '';
        this.validated = false;
        // Step 2: Change password
        this.oldPassword = '';
        this.newPassword = '';
        this.confirmNewPassword = '';
        this.message = '';
        this.messageType = '';
        this.loading = false;
      }
      return _createClass(ResetPasswordComponent, [{
        key: "validateUser",
        value: function validateUser() {
          var _this28 = this;
          if (!this.username || !this.emailId) {
            this.message = 'Username and Email are required';
            this.messageType = 'danger';
            return;
          }
          this.loading = true;
          this.message = '';
          this.http.post('http://129.159.231.57/api/auth/validate-user', {
            username: this.username,
            emailId: this.emailId
          }).subscribe(function (res) {
            _this28.loading = false;
            if (res.status === 'SUCCESS') {
              _this28.validated = true;
              _this28.message = '';
            } else {
              _this28.message = res.message;
              _this28.messageType = 'danger';
            }
          }, function (err) {
            _this28.loading = false;
            _this28.message = 'Server error. Please try again.';
            _this28.messageType = 'danger';
          });
        }
      }, {
        key: "changePassword",
        value: function changePassword() {
          var _this29 = this;
          if (!this.oldPassword || !this.newPassword || !this.confirmNewPassword) {
            this.message = 'All fields are required';
            this.messageType = 'danger';
            return;
          }
          if (this.newPassword.length < 6) {
            this.message = 'New password must be at least 6 characters';
            this.messageType = 'danger';
            return;
          }
          if (this.newPassword !== this.confirmNewPassword) {
            this.message = 'New passwords do not match';
            this.messageType = 'danger';
            return;
          }
          if (this.oldPassword === this.newPassword) {
            this.message = 'New password must be different from old password';
            this.messageType = 'danger';
            return;
          }
          this.loading = true;
          this.message = '';
          this.http.post('http://129.159.231.57/api/auth/reset-password', {
            username: this.username,
            oldPassword: this.oldPassword,
            newPassword: this.newPassword
          }).subscribe(function (res) {
            _this29.loading = false;
            if (res.status === 'SUCCESS') {
              _this29.message = 'Password changed successfully! Please login with new password.';
              _this29.messageType = 'success';
              setTimeout(function () {
                return _this29.router.navigate(['/login']);
              }, 2000);
            } else {
              _this29.message = res.message;
              _this29.messageType = 'danger';
            }
          }, function (err) {
            _this29.loading = false;
            _this29.message = 'Server error. Please try again.';
            _this29.messageType = 'danger';
          });
        }
      }]);
    }();
    ResetPasswordComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };
    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reset-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset-password.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset-password/reset-password.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset-password.component.css */"./src/app/pages/reset-password/reset-password.component.css"))["default"]]
    })], ResetPasswordComponent);

    /***/
  }),
  /***/"./src/app/services/auth.guard.ts": (
  /*!****************************************!*\
    !*** ./src/app/services/auth.guard.ts ***!
    \****************************************/
  /*! exports provided: AuthGuard */
  /***/
  function _src_app_services_authGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */"./src/app/services/auth.service.ts");
    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);
        this.authService = authService;
        this.router = router;
      }
      return _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.authService.isLoggedIn()) {
            return true;
          }
          this.router.navigate(['/login']);
          return false;
        }
      }]);
    }();
    AuthGuard.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);

    /***/
  }),
  /***/"./src/app/services/auth.service.ts": (
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/
  /*! exports provided: AuthService */
  /***/
  function _src_app_services_authServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);
        this.http = http;
        this.baseUrl = 'http://129.159.231.57/api/auth';
      }
      return _createClass(AuthService, [{
        key: "login",
        value: function login(username, password) {
          return this.http.post("".concat(this.baseUrl, "/login"), {
            username: username,
            password: password
          });
        }
      }, {
        key: "setUser",
        value: function setUser(user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return JSON.parse(localStorage.getItem('currentUser'));
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('currentUser');
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return localStorage.getItem('currentUser') !== null;
        }
      }]);
    }();
    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);

    /***/
  }),
  /***/"./src/app/services/customer.service.ts": (
  /*!**********************************************!*\
    !*** ./src/app/services/customer.service.ts ***!
    \**********************************************/
  /*! exports provided: CustomerService */
  /***/
  function _src_app_services_customerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CustomerService", function () {
      return CustomerService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    var CustomerService = /*#__PURE__*/function () {
      function CustomerService(http) {
        _classCallCheck(this, CustomerService);
        this.http = http;
        this.baseUrl = 'http://129.159.231.57/api/customer';
      }
      return _createClass(CustomerService, [{
        key: "submitCustomer",
        value: function submitCustomer(customerData) {
          return this.http.post("".concat(this.baseUrl, "/submit"), customerData);
        }
      }, {
        key: "resubmitCustomer",
        value: function resubmitCustomer(customerId, customerData) {
          return this.http.post("".concat(this.baseUrl, "/resubmit/").concat(customerId), customerData);
        }
      }, {
        key: "getPendingCustomers",
        value: function getPendingCustomers() {
          return this.http.get("".concat(this.baseUrl, "/pending"));
        }
      }, {
        key: "getAllCustomers",
        value: function getAllCustomers() {
          return this.http.get("".concat(this.baseUrl, "/all"));
        }
      }, {
        key: "approveCustomer",
        value: function approveCustomer(customerId, approvedBy) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'X-User': approvedBy
          });
          return this.http.post("".concat(this.baseUrl, "/approve/").concat(customerId), {
            approvedBy: approvedBy
          }, {
            headers: headers
          });
        }
      }, {
        key: "rejectCustomer",
        value: function rejectCustomer(customerId, reason, approvedBy) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'X-User': approvedBy
          });
          return this.http.post("".concat(this.baseUrl, "/reject/").concat(customerId), {
            reason: reason,
            approvedBy: approvedBy
          }, {
            headers: headers
          });
        }
      }]);
    }();
    CustomerService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };
    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CustomerService);

    /***/
  }),
  /***/"./src/app/services/role.guard.ts": (
  /*!****************************************!*\
    !*** ./src/app/services/role.guard.ts ***!
    \****************************************/
  /*! exports provided: RoleGuard */
  /***/
  function _src_app_services_roleGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RoleGuard", function () {
      return RoleGuard;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */"./src/app/services/auth.service.ts");
    var RoleGuard = /*#__PURE__*/function () {
      function RoleGuard(authService, router) {
        _classCallCheck(this, RoleGuard);
        this.authService = authService;
        this.router = router;
      }
      return _createClass(RoleGuard, [{
        key: "canActivate",
        value: function canActivate(route) {
          var user = this.authService.getUser();
          var expectedRole = route.data['role'];
          if (user && user.role === expectedRole) {
            return true;
          }
          this.router.navigate(['/customer-form']);
          return false;
        }
      }]);
    }();
    RoleGuard.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };
    RoleGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RoleGuard);

    /***/
  }),
  /***/"./src/main.ts": (
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/
  function _src_mainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */"./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */"./src/app/app.module.ts");
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });

    /***/
  }),
  /***/0: (
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(/*! /home/shibashish/Downloads/OM_to_AR/customer-portal/src/main.ts */"./src/main.ts");

    /***/
  })
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map