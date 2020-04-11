(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/angular-material-module/angular-material-module.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/angular-material-module/angular-material-module.module.ts ***!
  \***************************************************************************/
/*! exports provided: AngularMaterialModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModuleModule", function() { return AngularMaterialModuleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");





var AngularMaterialModuleModule = /** @class */ (function () {
    function AngularMaterialModuleModule() {
    }
    AngularMaterialModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"]
            ],
            providers: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            ]
        })
    ], AngularMaterialModuleModule);
    return AngularMaterialModuleModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_management_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-management/auth/auth.component */ "./src/app/user-management/auth/auth.component.ts");
/* harmony import */ var _user_management_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-management/forget-password/forget-password.component */ "./src/app/user-management/forget-password/forget-password.component.ts");
/* harmony import */ var _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/default/default.component */ "./src/app/layouts/default/default.component.ts");
/* harmony import */ var _modules_dashbaord_dashbaord_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dashbaord/dashbaord.component */ "./src/app/modules/dashbaord/dashbaord.component.ts");
/* harmony import */ var _modules_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/all-users/all-users.component */ "./src/app/modules/all-users/all-users.component.ts");
/* harmony import */ var _modules_user_calendar_user_calendar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/user-calendar/user-calendar.component */ "./src/app/modules/user-calendar/user-calendar.component.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _app_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");











var routes = [
    {
        path: 'auth', component: _user_management_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"], pathMatch: 'full'
    },
    { path: 'auth/forget-passwod', component: _user_management_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgetPasswordComponent"] },
    { path: 'auth/forget-passwod/authPage', redirectTo: 'auth', pathMatch: 'full' },
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    {
        path: 'dashboard',
        component: _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_5__["DefaultComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        children: [
            {
                path: 'view-user-all-meeting/:userId',
                component: _modules_dashbaord_dashbaord_component__WEBPACK_IMPORTED_MODULE_6__["DashbaordComponent"]
            },
            {
                path: 'all-users',
                component: _modules_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_7__["AllUsersComponent"]
            },
            {
                path: 'user-calendar/:userId',
                component: _modules_user_calendar_user_calendar_component__WEBPACK_IMPORTED_MODULE_8__["UserCalendarComponent"]
            }
        ]
    },
    { path: '404', component: _app_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"] },
    { path: '**', redirectTo: '/404' }
    // 
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  \n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(auth, route) {
        this.auth = auth;
        this.route = route;
        this.title = 'MeetingPlannerFront';
        this.userDetails = {
            role: "",
            countryCode: "",
            mobileNumber: "",
            email: "",
            lastName: "",
            firstName: "",
            userId: "",
            _token: ""
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.checkRoute();
    };
    AppComponent.prototype.checkRoute = function () {
        // let userDetails= this.auth.getFromLocalStore('userDetails');
        // this.userDetails = userDetails;
        // if(this.userDetails){
        //   if(this.userDetails.role =="admin"){ 
        //     this.route.navigate(['dashboard','all-users']);
        //   }else{
        //     this.route.navigate(['dashboard/user-calendar',this.userDetails.userId]);
        //   }
        // }else{
        //   this.route.navigate(['auth'])
        // }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_management_user_management_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-management/user-management.module */ "./src/app/user-management/user-management.module.ts");
/* harmony import */ var _angular_material_module_angular_material_module_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./angular-material-module/angular-material-module.module */ "./src/app/angular-material-module/angular-material-module.module.ts");
/* harmony import */ var _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/default/default.component */ "./src/app/layouts/default/default.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _modules_dashbaord_dashbaord_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/dashbaord/dashbaord.component */ "./src/app/modules/dashbaord/dashbaord.component.ts");
/* harmony import */ var _modules_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/all-users/all-users.component */ "./src/app/modules/all-users/all-users.component.ts");
/* harmony import */ var _modules_user_calendar_user_calendar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/user-calendar/user-calendar.component */ "./src/app/modules/user-calendar/user-calendar.component.ts");
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm5/angularx-flatpickr.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _src_app_guard_auth_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../src/app/guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_10__["DefaultComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"],
                _modules_dashbaord_dashbaord_component__WEBPACK_IMPORTED_MODULE_14__["DashbaordComponent"],
                _modules_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_15__["AllUsersComponent"],
                _modules_user_calendar_user_calendar_component__WEBPACK_IMPORTED_MODULE_16__["UserCalendarComponent"],
                _modules_user_calendar_user_calendar_component__WEBPACK_IMPORTED_MODULE_16__["DialogOverviewExampleDialog"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_22__["NotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _user_management_user_management_module__WEBPACK_IMPORTED_MODULE_8__["UserManagementModule"],
                _angular_material_module_angular_material_module_module__WEBPACK_IMPORTED_MODULE_9__["AngularMaterialModuleModule"],
                angularx_flatpickr__WEBPACK_IMPORTED_MODULE_17__["FlatpickrModule"].forRoot(),
                angular_calendar__WEBPACK_IMPORTED_MODULE_18__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_18__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_19__["adapterFactory"],
                }),
            ],
            providers: [
                // {
                // provide:HTTP_INTERCEPTORS,
                // useClass: TokenInterceptorService,
                // multi:true
                // }
                _src_app_guard_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            entryComponents: [_modules_user_calendar_user_calendar_component__WEBPACK_IMPORTED_MODULE_16__["DialogOverviewExampleDialog"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/guard/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.auth.isLogin()) {
            return true;
        }
        else {
            this.router.navigate(['auth']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/layouts/default/default.component.css":
/*!*******************************************************!*\
  !*** ./src/app/layouts/default/default.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZGVmYXVsdC9kZWZhdWx0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/layouts/default/default.component.html":
/*!********************************************************!*\
  !*** ./src/app/layouts/default/default.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <app-header (menuToggle)=menuToggleFunc($event)></app-header> \n\n<app-sidebar [sideBarDetail]=\"sideBarDetail\"></app-sidebar> \n<!-- <router-outlet></router-outlet>  -->\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/layouts/default/default.component.ts":
/*!******************************************************!*\
  !*** ./src/app/layouts/default/default.component.ts ***!
  \******************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DefaultComponent = /** @class */ (function () {
    function DefaultComponent() {
        this.sideBarDetail = {
            showIconMenu: false,
            width: "160px"
        };
    }
    DefaultComponent.prototype.ngOnInit = function () {
    };
    DefaultComponent.prototype.menuToggleFunc = function (data) {
        this.sideBarDetail = data;
        console.log(data);
    };
    DefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-default',
            template: __webpack_require__(/*! ./default.component.html */ "./src/app/layouts/default/default.component.html"),
            styles: [__webpack_require__(/*! ./default.component.css */ "./src/app/layouts/default/default.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DefaultComponent);
    return DefaultComponent;
}());



/***/ }),

/***/ "./src/app/modules/all-users/all-users.component.css":
/*!***********************************************************!*\
  !*** ./src/app/modules/all-users/all-users.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    max-width: 400px;\r\n  }\r\n  \r\n/* .example-header-image {\r\n  background-image: url('http://localhost:4200/assets/dummyProfile.png');\r\n  background-size: cover;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbGwtdXNlcnMvYWxsLXVzZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7RUFDbEI7O0FBRUY7OztHQUdHIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hbGwtdXNlcnMvYWxsLXVzZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgfVxyXG4gIFxyXG4vKiAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL2xvY2FsaG9zdDo0MjAwL2Fzc2V0cy9kdW1teVByb2ZpbGUucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/modules/all-users/all-users.component.html":
/*!************************************************************!*\
  !*** ./src/app/modules/all-users/all-users.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n\n    <div class=\"col-md-12\">\n    <mat-card class=\"mt-5 mb-5\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>All Users</mat-card-title>\n        <mat-card-subtitle>user list</mat-card-subtitle>\n        <div style=\"right: 0px;\">\n          <!-- <button mat-raised-button color=\"primary\">Add Users</button> -->\n        \n        </div>\n      </mat-card-header>\n      <mat-card-content class=\"userTable\">\n        <table class=\"table table-striped table-dark\">\n          <thead>\n            <tr>\n              <th scope=\"col\">Number</th>\n              <th scope=\"col\">FullName</th>\n              <th scope=\"col\">Mobile Number</th>\n              <th scope=\"col\">Email</th>\n              <th scope=\"col\">Add Meeting</th>\n              <th scope=\"col\">Check Meeting</th>\n              <!-- <th scope=\"col\">online</th> -->\n            </tr>\n          </thead>\n          <tbody >\n            <tr *ngFor=\"let userData of userData;let i = index;\">\n              <th scope=\"row\">{{ '#' }}</th>\n              <td>{{ userData.firstName+' '+userData.lastName | uppercase}}</td>\n              <td>{{ userData.mobileNumber }}</td>\n              <td>{{ userData.email }}</td>\n              <td><button mat-raised-button color=\"warn\" (click)=\"goToCalendarNavigate(userData.userId)\">+ Event</button></td>\n              <td><button mat-raised-button color=\"warn\" (click)=\"gotoViewAllMeeting(userData.userId)\"><i class=\"material-icons\">remove_red_eye</i></button></td>\n              <!-- <td><span class=\"badge badge-info\">offline</span></td>  -->\n            </tr>\n           \n            <tr *ngIf=\"!userData || userData.length == 0\">\n              <td colspan=\"6\">No Record Found</td>\n            </tr>\n          </tbody>\n          </table>\n      </mat-card-content>\n      <mat-card-actions>\n        <div style=\"text-align: right;\">\n          <button mat-stroked-button color=\"primary\" (click)=\"paginateData('prev')\">Prev</button>\n          <button mat-stroked-button color=\"primary\" (click)=\"paginateData('next')\">Next</button>\n          <!-- <button mat-button>LIKE</button>\n          <button mat-button>SHARE</button> -->\n        </div>\n      \n      </mat-card-actions>\n    </mat-card>\n    </div>\n  </div>\n\n  \n</div>"

/***/ }),

/***/ "./src/app/modules/all-users/all-users.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/all-users/all-users.component.ts ***!
  \**********************************************************/
/*! exports provided: AllUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllUsersComponent", function() { return AllUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");






var AllUsersComponent = /** @class */ (function () {
    function AllUsersComponent(_snackBar, route, user, auth) {
        this._snackBar = _snackBar;
        this.route = route;
        this.user = user;
        this.auth = auth;
        this.skip = 0;
        this.limit = 2;
        this.userData = [];
        this.moveforward = true;
        this.token = '';
    }
    AllUsersComponent.prototype.ngOnInit = function () {
        this.token = this.auth.getFromLocalStore('_token');
        this.getAllUserByLimit();
    };
    AllUsersComponent.prototype.openSnackBar = function (message, action, duration) {
        var background = "";
        if (action == 'success') {
            background = 'green-snackbar';
        }
        if (action == 'failed') {
            background = 'red-snackbar';
        }
        this._snackBar.open(message, action, {
            duration: duration || 2000,
            panelClass: [background]
        });
    };
    AllUsersComponent.prototype.paginateData = function (term) {
        if (term == 'prev') {
            this.skip = this.skip == 0 ? this.skip : this.skip - this.limit;
            if (!this.moveforward) {
                this.skip = this.skip - 2;
            }
            this.getAllUserByLimit();
        }
        else {
            if (this.moveforward) {
                this.skip += this.limit;
            }
            else {
                this.skip = this.skip;
            }
            // this.moveforward == true ? this.skip +=  this.limit : this.skip =  this.skip;
            this.getAllUserByLimit();
        }
    };
    AllUsersComponent.prototype.getAllUserByLimit = function () {
        var _this = this;
        this.user.getAllUserByLimit(this.skip, this.limit, this.token).subscribe(function (data) {
            console.log(data);
            if (data.status == 404 && data.error == true && data.message == "No User Found") {
                _this.moveforward = false;
                //this.skip =-
                _this.openSnackBar(data.message, 'failed');
            }
            else if (data.error == false && data.status == 200) {
                _this.userData = data.data;
                _this.moveforward = true;
                _this.openSnackBar(data.message, 'success');
            }
            else if (data.error) {
                _this.openSnackBar(data.message, 'failed');
            }
            else {
                _this.openSnackBar("unkown error", 'failed');
            }
        }, function (error) {
            _this.openSnackBar(error, 'failed');
        });
    };
    AllUsersComponent.prototype.goToCalendarNavigate = function (userId) {
        this.route.navigate(['dashboard/user-calendar', userId]);
    };
    AllUsersComponent.prototype.gotoViewAllMeeting = function (userId) {
        this.route.navigate(['dashboard/view-user-all-meeting', userId]);
    };
    AllUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-users',
            template: __webpack_require__(/*! ./all-users.component.html */ "./src/app/modules/all-users/all-users.component.html"),
            styles: [__webpack_require__(/*! ./all-users.component.css */ "./src/app/modules/all-users/all-users.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], AllUsersComponent);
    return AllUsersComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashbaord/dashbaord.component.css":
/*!***********************************************************!*\
  !*** ./src/app/modules/dashbaord/dashbaord.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-sidenav-content{\r\n    background: #ae64640f;\r\n    opacity: .9;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYmFvcmQvZGFzaGJhb3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kYXNoYmFvcmQvZGFzaGJhb3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYWU2NDY0MGY7XHJcbiAgICBvcGFjaXR5OiAuOTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/dashbaord/dashbaord.component.html":
/*!************************************************************!*\
  !*** ./src/app/modules/dashbaord/dashbaord.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  \n    <div class=\"example-sidenav-content\">\n      asdkhasdhgdjhg\n      <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\n        Toggle sidenav\n      </button>\n    </div>\n  -->\n\n    <div class=\"container-fluid\">\n      <mat-card class=\"mt-5 mb-5\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title class=\"userMeetingHeading\">\n            {{userDetails.role == 'admin'? 'User All Meeting' : \"My All Meeting\"}}\n          </mat-card-title>\n          <mat-card-subtitle class=\"userMeetingHeading\"> {{userDetails.role == 'admin'? 'User Meeting' : userDetails.firstName+'-user'}}</mat-card-subtitle>\n          <div style=\"right: 0px;\">\n            <button mat-raised-button color=\"primary\" (click)=\"goToCalendarPage()\">{{userDetails.role == 'admin'? '+ Meeting':'Go to Calendar'}}</button>\n           \n          </div>\n        </mat-card-header>\n        <mat-card-content class=\"userTable\">\n          <table class=\"table table-striped table-dark\">\n            <thead>\n              <tr>\n                <th scope=\"col\">Sr. No.</th>\n                <th scope=\"col\">Meeting Title</th>\n                <th scope=\"col\">Meeting date</th>\n                <th scope=\"col\">Start Time</th>\n                <th scope=\"col\">End Time</th>\n                <!-- <th scope=\"col\"></th>\n                <th scope=\"col\">online</th> -->\n              </tr>\n            </thead>\n            <tbody >\n              <tr *ngFor=\"let allMeetings of allMeetings;let i = index;\">\n                <th scope=\"row\">{{ i+1 }}</th>\n                <td>{{ allMeetings.meetingTitle | uppercase }}</td>\n                <td>{{ allMeetings.meetingDate | date:'d-M-y' }}</td>\n                <td>{{ allMeetings.meetingStartTimeHour }} : {{ allMeetings.meetingStartTimeSecond <= 9 ? '0'+ allMeetings.meetingStartTimeSecond : allMeetings.meetingStartTimeSecond }} : {{ allMeetings.meetingStartTimeFrame}}</td>\n                <td>{{ allMeetings.metingEndTimeHour }} : {{allMeetings.metingEndTimeSecond <=9 ? '0'+ allMeetings.metingEndTimeSecond :allMeetings.metingEndTimeSecond }} : {{allMeetings.meetingEndTimeFrame }}</td>\n                <!-- <td><button mat-raised-button color=\"warn\" (click)=\"goToCalendarNavigate(userData.userId)\">+ Event</button></td>\n                <td><button mat-raised-button color=\"warn\"><i class=\"material-icons\">remove_red_eye</i></button></td>\n                <td><span class=\"badge badge-info\">offline</span></td>  -->\n              </tr>\n              <tr *ngIf=\"!allMeetings || allMeetings.length == 0\">\n                <td colspan=\"6\">No Record Found</td>\n              </tr>\n            </tbody>\n            </table>\n        </mat-card-content>\n        <mat-card-actions>\n          <div style=\"text-align: right;\">\n            <!-- <button mat-stroked-button color=\"primary\" (click)=\"paginateData('prev')\">Prev</button>\n            <button mat-stroked-button color=\"primary\" (click)=\"paginateData('next')\">Next</button> -->\n            <!-- <button mat-button>LIKE</button>\n            <button mat-button>SHARE</button> -->\n          </div>\n        \n        </mat-card-actions>\n      </mat-card>\n    \n      \n    </div>"

/***/ }),

/***/ "./src/app/modules/dashbaord/dashbaord.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/dashbaord/dashbaord.component.ts ***!
  \**********************************************************/
/*! exports provided: DashbaordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashbaordComponent", function() { return DashbaordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_meeting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/meeting.service */ "./src/app/services/meeting.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");







var DashbaordComponent = /** @class */ (function () {
    function DashbaordComponent(_snackBar, route, user, meeting, activateRoute, auth) {
        this._snackBar = _snackBar;
        this.route = route;
        this.user = user;
        this.meeting = meeting;
        this.activateRoute = activateRoute;
        this.auth = auth;
        this.allMeetings = [];
        this.userDetails = {
            role: "",
            countryCode: "",
            mobileNumber: "",
            email: "",
            lastName: "",
            firstName: "",
            userId: "",
            _token: ""
        };
    }
    DashbaordComponent.prototype.ngOnInit = function () {
        this.userId = this.activateRoute.snapshot.paramMap.get('userId');
        this.userDetails = this.auth.getFromLocalStore('userDetails');
        this.getAllMeeting();
    };
    DashbaordComponent.prototype.openSnackBar = function (message, action, duration) {
        var background = "";
        if (action == 'success') {
            background = 'green-snackbar';
        }
        if (action == 'failed') {
            background = 'red-snackbar';
        }
        this._snackBar.open(message, action, {
            duration: duration || 2000,
            panelClass: [background]
        });
    };
    DashbaordComponent.prototype.goToCalendarPage = function () {
        this.route.navigate(['dashboard/user-calendar', this.userId]);
    };
    DashbaordComponent.prototype.getAllMeeting = function () {
        var _this = this;
        this.meeting.getAllMeeting(this.userId, null, this.userDetails._token).subscribe(function (res) {
            if (res.error) {
                _this.openSnackBar(res.message, 'failed');
            }
            else if (res.error == false && res.status == 200) {
                _this.allMeetings = res.data;
                console.log(_this.allMeetings);
                _this.openSnackBar(res.message, 'success');
            }
            else {
                _this.openSnackBar("unkown error", 'failed');
            }
        }, function (error) {
            _this.openSnackBar(error, 'failed');
        });
    };
    DashbaordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashbaord',
            template: __webpack_require__(/*! ./dashbaord.component.html */ "./src/app/modules/dashbaord/dashbaord.component.html"),
            styles: [__webpack_require__(/*! ./dashbaord.component.css */ "./src/app/modules/dashbaord/dashbaord.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_meeting_service__WEBPACK_IMPORTED_MODULE_4__["MeetingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], DashbaordComponent);
    return DashbaordComponent;
}());



/***/ }),

/***/ "./src/app/modules/user-calendar/dialog-overview-example-dialog.html":
/*!***************************************************************************!*\
  !*** ./src/app/modules/user-calendar/dialog-overview-example-dialog.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"formModal\">\r\n<h1 mat-dialog-title *ngIf=\"data.show == false\">\r\n  Create Meeting</h1>\r\n  <h1 mat-dialog-title *ngIf=\"data.show == true\">\r\n    Meeting Details</h1>\r\n<form class=\"example-form\" #meetingFormData=\"ngForm\" method=\"post\">\r\n<div mat-dialog-content>\r\n  <!-- <p>Crete Meeting (+ Details)</p> -->\r\n\r\n\r\n  <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\r\n    <mat-label>Meeting Title</mat-label>\r\n    <input matInput type=\"text\" [disabled]=\"data.show\" required [(ngModel)]=\"data.meetingTitle\" placeholder=\"Enter Meeting Title\" name=\"meetingTitle\"\r\n    #meetingTitle=\"ngModel\">\r\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\r\n    <mat-hint class=\"err-msg\" *ngIf=\"meetingTitle.invalid && (meetingTitle.dirty || meetingTitle.touched)\">\r\n      Meeting Title is required.\r\n    </mat-hint>\r\n    <mat-hint class=\"right-msg\" *ngIf=\"meetingTitle.valid\">\r\n      Perfect\r\n    </mat-hint>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\r\n \r\n    <mat-label>Input disabled</mat-label>\r\n    <input matInput [matDatepicker]=\"dp3\" disabled required [(ngModel)]=\"data.meetingDate\" placeholder=\"Enter Meeting Date\" name=\"meetingDate\"\r\n    #meetingDate=\"ngModel\">\r\n    <mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\r\n    <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\r\n    <mat-hint class=\"err-msg\" *ngIf=\"meetingDate.invalid && (meetingDate.dirty || meetingDate.touched)\">\r\n      Meeting Title is required.\r\n    </mat-hint>\r\n    <mat-hint class=\"right-msg\" *ngIf=\"meetingDate.valid\">\r\n      Perfect\r\n    </mat-hint>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field appearance=\"outline\" style=\"width:40%;\">\r\n    <mat-label>start hours</mat-label>\r\n    <mat-select required [disabled]=\"data.show\" [(ngModel)]=\"data.meetingStartTimeHour\" placeholder=\"Enter Start Hour\" name=\"meetingStartTimeHour\"\r\n    #meetingStartTimeHour=\"ngModel\">\r\n      <mat-option *ngFor=\"let hours of hours\" [value]=\"hours\">\r\n        {{hours}}\r\n      </mat-option>\r\n    </mat-select>\r\n    <mat-hint class=\"err-msg\" *ngIf=\"meetingStartTimeHour.invalid && (meetingStartTimeHour.dirty || meetingStartTimeHour.touched)\">\r\n     Start Hour required\r\n    </mat-hint>\r\n    <mat-hint class=\"right-msg\" *ngIf=\"meetingStartTimeHour.valid\">\r\n      Perfect\r\n    </mat-hint>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field style=\"width: 30%;\" appearance=\"outline\">\r\n    <mat-label>start Minute</mat-label>\r\n    <mat-select required [disabled]=\"data.show\" [(ngModel)]=\"data.meetingStartTimeSecond\" placeholder=\"Enter start Minute\" name=\"meetingStartTimeSecond\"\r\n    #meetingStartTimeSecond=\"ngModel\">\r\n      <mat-option *ngFor=\"let minutes of minutes\" [value]=\"minutes\">\r\n        {{minutes}}\r\n      </mat-option>\r\n    </mat-select>\r\n    <mat-hint class=\"err-msg\" *ngIf=\"meetingStartTimeSecond.invalid && (meetingStartTimeSecond.dirty || meetingStartTimeSecond.touched)\">\r\n     required\r\n     </mat-hint>\r\n     <mat-hint class=\"right-msg\" *ngIf=\"meetingStartTimeSecond.valid\">\r\n       Perfect\r\n     </mat-hint>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field style=\"width: 30%;\" appearance=\"outline\">\r\n    <mat-label>Time Frame</mat-label>\r\n    <mat-select required [disabled]=\"data.show\" [(ngModel)]=\"data.meetingStartTimeFrame\" placeholder=\"Enter Time Frame\" name=\"meetingStartTimeFrame\"\r\n    #meetingStartTimeFrame=\"ngModel\">\r\n      <mat-option [value]=\"'AM'\">\r\n        {{'AM'}}\r\n      </mat-option>\r\n      <mat-option [value]=\"'PM'\">\r\n        {{'PM'}}\r\n      </mat-option>\r\n    </mat-select>\r\n    <mat-hint class=\"err-msg\" *ngIf=\"meetingStartTimeFrame.invalid && (meetingStartTimeFrame.dirty || meetingStartTimeFrame.touched)\">\r\n     required\r\n     </mat-hint>\r\n     <mat-hint class=\"right-msg\" *ngIf=\"meetingStartTimeFrame.valid\">\r\n       Perfect\r\n     </mat-hint>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field appearance=\"outline\" style=\"width:40%;\">\r\n    <mat-label>End hours</mat-label>\r\n    <mat-select required [disabled]=\"data.show\" [(ngModel)]=\"data.metingEndTimeHour\" placeholder=\"Enter End hours\" name=\"metingEndTimeHour\"\r\n    #metingEndTimeHour=\"ngModel\">\r\n      <mat-option *ngFor=\"let hours of hours\" [value]=\"hours\">\r\n        {{hours}}\r\n      </mat-option>\r\n    </mat-select>\r\n    <mat-hint class=\"err-msg\" *ngIf=\"metingEndTimeHour.invalid && (metingEndTimeHour.dirty || metingEndTimeHour.touched)\">\r\n   required\r\n     </mat-hint>\r\n     <mat-hint class=\"right-msg\" *ngIf=\"metingEndTimeHour.valid\">\r\n       Perfect\r\n     </mat-hint>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field style=\"width: 30%;\" appearance=\"outline\">\r\n    <mat-label>End Minute</mat-label>\r\n    <mat-select required [disabled]=\"data.show\" [(ngModel)]=\"data.metingEndTimeSecond\" placeholder=\"Enter End Minute\" name=\"metingEndTimeSecond\"\r\n    #metingEndTimeSecond=\"ngModel\">\r\n      <mat-option *ngFor=\"let minutes of minutes\" [value]=\"minutes\">\r\n        {{minutes}}\r\n      </mat-option>\r\n    </mat-select>\r\n    <mat-hint class=\"err-msg\" *ngIf=\"metingEndTimeSecond.invalid && (metingEndTimeSecond.dirty || metingEndTimeSecond.touched)\">\r\n     required\r\n     </mat-hint>\r\n     <mat-hint class=\"right-msg\" *ngIf=\"metingEndTimeSecond.valid\">\r\n       Perfect\r\n     </mat-hint>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field style=\"width: 30%;\" appearance=\"outline\">\r\n    <mat-label>Time Frame</mat-label>\r\n    <mat-select required [disabled]=\"data.show\" [(ngModel)]=\"data.meetingEndTimeFrame\" placeholder=\"Meeting End Frame\" name=\"meetingEndTimeFrame\"\r\n    #meetingEndTimeFrame=\"ngModel\">\r\n      <mat-option [value]=\"'AM'\">\r\n        {{'AM'}}\r\n      </mat-option>\r\n      <mat-option [value]=\"'PM'\">\r\n        {{'PM'}}\r\n      </mat-option>\r\n    </mat-select>\r\n    <mat-hint class=\"err-msg\" *ngIf=\"meetingEndTimeFrame.invalid && (meetingEndTimeFrame.dirty || meetingEndTimeFrame.touched)\">\r\n      required\r\n     </mat-hint>\r\n     <mat-hint class=\"right-msg\" *ngIf=\"meetingEndTimeFrame.valid\">\r\n       Perfect\r\n     </mat-hint>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\r\n    <mat-label>Meeting Location</mat-label>\r\n    <input matInput [disabled]=\"data.show\" required type=\"text\" [(ngModel)]=\"data.meetingLocation\" placeholder=\"Meeting Location\" name=\"meetingLocation\"\r\n    #meetingLocation=\"ngModel\">\r\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\r\n    <mat-hint class=\"err-msg\" *ngIf=\"meetingLocation.invalid && (meetingLocation.dirty || meetingLocation.touched)\">\r\n      Meeting Location required\r\n     </mat-hint>\r\n     <mat-hint class=\"right-msg\" *ngIf=\"meetingLocation.valid\">\r\n       Perfect\r\n     </mat-hint>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\r\n    <mat-label>Meeting Description</mat-label>\r\n    <textarea required [disabled]=\"data.show\" matInput [(ngModel)]=\"data.meetingDescription\" placeholder=\"Enter Description\" name=\"meetingDescription\"\r\n    #meetingDescription=\"ngModel\"></textarea>\r\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\r\n    <mat-hint class=\"err-msg\" *ngIf=\"meetingDescription.invalid && (meetingDescription.dirty || meetingDescription.touched)\">\r\n      Meeting Description required\r\n     </mat-hint>\r\n     <mat-hint class=\"right-msg\" *ngIf=\"meetingDescription.valid\">\r\n       Perfect\r\n     </mat-hint>\r\n  </mat-form-field>\r\n\r\n \r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\" >\r\n    <span *ngIf=\"data.show\">Ok</span>\r\n    <span *ngIf=\"!data.show\">No Thanks</span>\r\n    \r\n  </button>\r\n  <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial [disabled]=\"meetingFormData.form.invalid\" *ngIf=\"!data.show\">Ok</button>\r\n</div>\r\n</form>\r\n<!-- (click)=\"createNewMeeting(meetingFormData,data)\"> -->\r\n</div>"

/***/ }),

/***/ "./src/app/modules/user-calendar/user-calendar.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/modules/user-calendar/user-calendar.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* h3 {\r\n    margin: 0 0 10px;\r\n  } */\r\n/*   \r\n  pre {\r\n    background-color: #f5f5f5;\r\n    padding: 15px;\r\n  } */\r\n.example-card {\r\n    max-width: 400px;\r\n  }\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLWNhbGVuZGFyL3VzZXItY2FsZW5kYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7S0FFSztBQUNMOzs7O0tBSUs7QUFFSDtJQUNFLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1jYWxlbmRhci91c2VyLWNhbGVuZGFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBoMyB7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gIH0gKi9cclxuLyogICBcclxuICBwcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfSAqL1xyXG5cclxuICAuZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgfVxyXG4gIFxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/user-calendar/user-calendar.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/user-calendar/user-calendar.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row mt-5\">\n    <div class=\"col-md-4 themed-grid-col\">\n      <div class=\"btn-group\">\n        <div\n          class=\"btn btn-sm btn-primary\"\n          mwlCalendarPreviousView\n          [view]=\"view\"\n          [(viewDate)]=\"viewDate\"\n          (viewDateChange)=\"closeOpenMonthViewDay()\"\n        >\n          Previous\n        </div>\n        <div\n          class=\"btn btn-sm btn-outline-secondary\"\n          mwlCalendarToday\n          [(viewDate)]=\"viewDate\"\n        >\n          Today\n        </div>\n        <div\n          class=\"btn btn-sm btn-primary\"\n          mwlCalendarNextView\n          [view]=\"view\"\n          [(viewDate)]=\"viewDate\"\n          (viewDateChange)=\"closeOpenMonthViewDay()\"\n        >\n          Next\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4 themed-grid-col\">\n      <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n    </div>\n    <div class=\"col-md-4 themed-grid-col\">\n      <div class=\"btn-group\">\n        <div\n          class=\"btn btn-primary\"\n          (click)=\"setView(CalendarView.Month)\"\n          [class.active]=\"view === CalendarView.Month\"\n        >\n          Month\n        </div>\n        <!-- <div\n          class=\"btn btn-primary\"\n          (click)=\"setView(CalendarView.Week)\"\n          [class.active]=\"view === CalendarView.Week\"\n        >\n          Week\n        </div>\n        <div\n          class=\"btn btn-primary\"\n          (click)=\"setView(CalendarView.Day)\"\n          [class.active]=\"view === CalendarView.Day\"\n        >\n          Day\n        </div> -->\n      </div>\n    </div>\n    <div class=\"col-md-4 themed-grid-col\" class=\"bootcalendarbtnToogleGroup\">\n      <div class=\"btn-group\" (click)=\"openDialog(this.viewDate)\" *ngIf=\"userDetails.role =='admin'\">\n        <div class=\"btn btn-primary\" >\n          Add Meeting\n        </div>\n        <div class=\"btn btn-secondary \" (click)=\"checkAllMeeting()\">\n          {{userDetails.role == 'admin' ? 'User All Meeting':'My All Meetings'}}\n        </div>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"row\">\n    <!---for clanedar start-->\n  \n    <div class=\"col-md-12\">\n      <mat-card class=\"mt-2 mb-5\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>\n            {{userDetails.role == 'admin' ? 'User Calendar':'My Calendar'}}\n          </mat-card-title>\n          <mat-card-subtitle>\n            {{userDetails.role == 'admin' ? 'Create Event':'Check Event'}}\n          </mat-card-subtitle>\n          <div style=\"right: 0px;\" class=\"matcalendarbtnToogleGroup\">\n            <button mat-raised-button color=\"primary\" (click)=\"openDialog(this.viewDate)\" *ngIf=\"userDetails.role =='admin'\">Add Meeting</button>\n          </div>\n          \n          <div style=\"right: 0px;\" class=\"ml-2\" class=\"matcalendarbtnToogleGroup\">\n            <button mat-raised-button color=\"primary\" (click)=\"checkAllMeeting()\" >{{userDetails.role == 'admin' ? 'User All Meeting':'My All Meetings'}}</button>\n          </div>\n        </mat-card-header>\n        <mat-card-content >\n          <!-------CALENDAR VIEW START-->\n          <div [ngSwitch]=\"view\">\n            <mwl-calendar-month-view\n              *ngSwitchCase=\"CalendarView.Month\"\n              [viewDate]=\"viewDate\"\n              [events]=\"events\"\n              [refresh]=\"refresh\"\n              [activeDayIsOpen]=\"activeDayIsOpen\"\n              (dayClicked)=\"dayClicked($event.day)\"\n              (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n              (eventTimesChanged)=\"eventTimesChanged($event)\"\n            >\n            </mwl-calendar-month-view>\n          </div>\n          <!-------CALENDAR VIEW eND-->\n        </mat-card-content>\n        <mat-card-actions>\n          <!-- <button mat-button>LIKE</button>\n          <button mat-button>SHARE</button> -->\n        </mat-card-actions>\n      </mat-card>\n    \n    \n\n    </div>\n    <!---for clanedar end-->\n  </div>\n\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/modules/user-calendar/user-calendar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/user-calendar/user-calendar.component.ts ***!
  \******************************************************************/
/*! exports provided: UserCalendarComponent, DialogOverviewExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCalendarComponent", function() { return UserCalendarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _services_meeting_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/meeting.service */ "./src/app/services/meeting.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_meeting_socket_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/meeting-socket.service */ "./src/app/services/meeting-socket.service.ts");







var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3',
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF',
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA',
    },
};





var UserCalendarComponent = /** @class */ (function () {
    function UserCalendarComponent(modal, dialog, meeting, activateRoute, _snackBar, auth, route, meetingSocket) {
        var _this = this;
        this.modal = modal;
        this.dialog = dialog;
        this.meeting = meeting;
        this.activateRoute = activateRoute;
        this._snackBar = _snackBar;
        this.auth = auth;
        this.route = route;
        this.meetingSocket = meetingSocket;
        this.userDetails = {
            role: "",
            countryCode: "",
            mobileNumber: "",
            email: "",
            lastName: "",
            firstName: "",
            userId: "",
            _token: ""
        };
        this.disconnectedSocket = false;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarView"];
        this.viewDate = new Date();
        this.showEvent = {
            label: '<i class="material-icons">remove_red_eye</i>',
            a11yLabel: 'Delete',
            onClick: function (_a) {
                var event = _a.event;
                if (event) {
                    _this.getEditMeetingDetail(event.meetingId, 'yes');
                }
                // this.events = this.events.filter((iEvent) => iEvent !== event);
                // this.handleEvent('Deleted', event);
            },
        };
        this.actions = [
            {
                label: '<i class="material-icons">edit</i>',
                a11yLabel: 'Edit',
                onClick: function (_a) {
                    var event = _a.event;
                    if (event) {
                        _this.activeDayIsOpen = false;
                        _this.getEditMeetingDetail(event.meetingId);
                    }
                    //this.handleEvent('Edited', event);
                },
            },
            {
                label: '<i class="material-icons">delete</i>',
                a11yLabel: 'Delete',
                onClick: function (_a) {
                    var event = _a.event;
                    if (event) {
                        // console.log(event);
                        _this.activeDayIsOpen = false;
                        _this.deleteMeetingDetail(event.meetingId, event.title);
                    }
                    // this.events = this.events.filter((iEvent) => iEvent !== event);
                    // this.handleEvent('Deleted', event);
                },
            },
            this.showEvent
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.events = [];
        this.activeDayIsOpen = false;
    }
    UserCalendarComponent.prototype.ngOnInit = function () {
        var userDetails = this.auth.getFromLocalStore('userDetails');
        this.userDetails = userDetails;
        this.userId = this.activateRoute.snapshot.paramMap.get('userId');
        this.verifyUserFromSocket();
        this.getOnlineUserList();
        this.getAllUserMeeting();
    };
    UserCalendarComponent.prototype.ngAfterViewInit = function () {
        this.innerWidth = window.innerWidth;
        console.log(this.innerWidth);
        this.socketMeetingUpdate();
        this.checkAndgetSnoozeMeeting();
    };
    UserCalendarComponent.prototype.checkAndgetSnoozeMeeting = function () {
        if (this.userDetails.role == 'user') {
            this.getSnoozedMeetingDetail();
        }
    };
    UserCalendarComponent.prototype.verifyUserFromSocket = function () {
        var _this = this;
        //  console.log('socket');
        this.meetingSocket.verifyUser().subscribe(function (data) {
            //this.disconnectedSocket = false;
            _this.meetingSocket.setUser(_this.userDetails._token);
            _this.socketVerificationFaild();
        });
    };
    UserCalendarComponent.prototype.socketMeetingUpdate = function () {
        var _this = this;
        this.meetingSocket.getMeetingUpdatedSocket(this.userDetails.userId).subscribe(function (data) {
            var flshMsg = '';
            if (data.meetingFlag == 'create') {
                flshMsg = "One New Meeing Created with this tile : " + data.meetingTitle;
            }
            if (data.meetingFlag == 'update') {
                flshMsg = "One Meeing update with this tile : " + data.meetingTitle;
            }
            if (data.meetingFlag == 'delete') {
                flshMsg = "One Meeing deleted with this tile : " + data.meetingTitle;
            }
            _this.openSnackBar(flshMsg, 'success');
            _this.events = [];
            setTimeout(function () {
                _this.getAllUserMeeting();
                _this.refresh.next();
                // this.checkAndgetSnoozeMeeting();
            }, 1000);
            setTimeout(function () {
                _this.checkAndgetSnoozeMeeting();
            }, 3000);
        });
    };
    UserCalendarComponent.prototype.getSnoozedMeetingDetail = function () {
        var _this = this;
        this.meeting.getSnooozedTime(this.userId, this.userDetails._token).subscribe(function (data) {
            if (data.error == false && (data.data != null || undefined)) {
                _this.checkSnoozeData(data.data);
            }
        });
    };
    UserCalendarComponent.prototype.checkSnoozeData = function (data) {
        var _this = this;
        var t = setTimeout(function () {
            if (confirm(data.meetingTitle + ' is ready press ok if you want to dissmiss snooze and cancel if you want to snoozse after 5 second')) {
                _this.stopeSnooze(data, 'after5Minu');
            }
            else {
                _this.stopeSnooze(data, 'dissmiss');
            }
        }, data.snoozeTime);
        this.meetingSnooze = t;
    };
    UserCalendarComponent.prototype.stopeSnooze = function (data, actionFlag) {
        var _this = this;
        if (actionFlag == 'dissmiss') {
            data.snoozeTime = 5000;
            clearTimeout(this.meetingSnooze);
            console.log(data);
            this.checkSnoozeData(data);
        }
        else {
            console.log("yes");
            console.log(data);
            this.meeting.updateSnoozeOnMeeting(data.meetingId, this.userDetails._token).subscribe(function (res) {
                if (res.error = false) {
                    _this.getSnoozedMeetingDetail();
                }
            });
            clearTimeout(this.meetingSnooze);
        }
    };
    UserCalendarComponent.prototype.getOnlineUserList = function () {
        // console.log('onlineuser');
        this.meetingSocket.getOnlineUserList().subscribe(function (userList) {
            console.log(userList);
            //  console.log('online-userList');
        });
    };
    UserCalendarComponent.prototype.socketVerificationFaild = function () {
        this.meetingSocket.authError().subscribe(function (socketRes) {
            console.log(socketRes);
            // console.log('auth error');
        });
    };
    UserCalendarComponent.prototype.openSnackBar = function (message, action, duration) {
        var background = "";
        if (action == 'success') {
            background = 'green-snackbar';
        }
        if (action == 'failed') {
            background = 'red-snackbar';
        }
        this._snackBar.open(message, action, {
            duration: duration || 2000,
            panelClass: [background]
        });
    };
    UserCalendarComponent.prototype.checkAllMeeting = function () {
        this.route.navigate(['dashboard/view-user-all-meeting', this.userId]);
    };
    UserCalendarComponent.prototype.getEditMeetingDetail = function (meetingId, show) {
        var _this = this;
        // alert(meetingId);
        this.meeting.getAllMeeting(this.userId, meetingId, this.userDetails._token).subscribe(function (res) {
            if (res.error) {
                _this.openSnackBar(res.message, 'failed');
            }
            else if (res.error == false && res.status == 200) {
                // console.log(res);
                var date = new Date(res.data.meetingDate);
                delete res.data.meetingUserId;
                delete res.data.updatedAt;
                delete res.data.createdAt;
                if (show && show == 'yes') {
                    res.data.show = true;
                }
                _this.openDialog(date, meetingId, res.data);
                _this.refresh.next();
                _this.openSnackBar(res.message, 'success');
            }
            else {
                _this.openSnackBar("unkown error", 'failed');
            }
        }, function (error) {
            _this.openSnackBar(error, 'failed');
        });
    };
    UserCalendarComponent.prototype.getAllUserMeeting = function () {
        var _this = this;
        this.meeting.getAllMeeting(this.userId, null, this.userDetails._token).subscribe(function (res) {
            if (res.error) {
                _this.openSnackBar(res.message, 'failed');
            }
            else if (res.error == false && res.status == 200) {
                res.data.forEach(function (element) {
                    var eventObj = { start: new Date(element.meetingDate), end: new Date(element.meetingDate), title: element.meetingTitle.toUpperCase(), color: colors.red, actions: [], meetingId: element.meetingId };
                    _this.userDetails.role == 'admin' ? eventObj.actions = _this.actions : eventObj.actions = [_this.showEvent];
                    _this.events.push(eventObj);
                });
                _this.refresh.next();
                _this.openSnackBar(res.message, 'success');
            }
            else {
                _this.openSnackBar("unkown error", 'failed');
            }
        }, function (error) {
            _this.openSnackBar(error, 'failed');
        });
    };
    UserCalendarComponent.prototype.openDialog = function (selectedDate, meetingId, data) {
        var _this = this;
        //this.meetingDate= (selectedDate.getMonth()+1)+'/'+selectedDate.getDate()+'/'+selectedDate.getFullYear();
        this.meetingDate = selectedDate;
        if (!data) {
            data = { meetingTitle: this.meetingTitle, meetingDate: this.meetingDate, meetingStartTimeHour: this.meetingStartTimeHour,
                meetingStartTimeSecond: this.meetingStartTimeSecond, meetingStartTimeFrame: this.meetingStartTimeFrame,
                metingEndTimeHour: this.metingEndTimeHour, metingEndTimeSecond: this.metingEndTimeSecond,
                meetingEndTimeFrame: this.meetingEndTimeFrame,
                meetingDescription: this.meetingDescription, meetingLocation: this.meetingLocation, show: false };
        }
        // if(show){
        // }
        var dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: this.innerWidth <= 768 ? '80%' : '50%',
            data: data
        });
        dialogRef.afterClosed().subscribe(function (result) {
            //alert('The dialog was closed');
            if (result) {
                if (meetingId) {
                    //update meeting
                    _this.activeDayIsOpen = false;
                    _this.callUpdateMeeting(meetingId, result);
                }
                else {
                    _this.callCreateMeeting(result);
                    //for new create Meeting
                }
            }
            // console.log(result);     
            console.log('The dialog was closed');
        });
    };
    UserCalendarComponent.prototype.callCreateMeeting = function (result) {
        var _this = this;
        this.meeting.createMeeting(result, this.userId, this.userDetails._token).subscribe(function (data) {
            // console.log(data);
            if (data.error) {
                _this.openSnackBar(data.message, 'failed');
            }
            else if (data.error == false && data.status == 200) {
                var element = data.data;
                var eventObj = { start: new Date(element.meetingDate), end: new Date(element.meetingDate), title: element.meetingTitle.toUpperCase(), color: colors.red, actions: [], meetingId: element.meetingId };
                _this.userDetails.role == 'admin' ? eventObj.actions = _this.actions : eventObj.actions = [_this.showEvent];
                _this.events.push(eventObj);
                _this.refresh.next();
                _this.openSnackBar(data.message, 'success');
                _this.meetingSocket.meetingUpdatedSocket({ meetingFlag: 'create', meetingTitle: element.meetingTitle.toUpperCase(), userId: _this.userId });
            }
            else {
                _this.openSnackBar("unkown error", 'failed');
            }
        }, function (error) {
            _this.openSnackBar(error, 'failed');
        });
    };
    UserCalendarComponent.prototype.callUpdateMeeting = function (meetingId, result) {
        var _this = this;
        this.meeting.callUpdateMeeting(meetingId, result, this.userDetails._token).subscribe(function (data) {
            // console.log(data);
            if (data.error) {
                _this.openSnackBar(data.message, 'failed');
            }
            else if (data.error == false && data.status == 200) {
                _this.events = _this.events.filter(function (currentValue, index, arr) {
                    return currentValue.meetingId != meetingId;
                });
                var eventObj = { start: new Date(result.meetingDate), end: new Date(result.meetingDate), title: result.meetingTitle.toUpperCase(), color: colors.red, actions: [], meetingId: result.meetingId };
                _this.userDetails.role == 'admin' ? eventObj.actions = _this.actions : eventObj.actions = [_this.showEvent];
                _this.events.push(eventObj);
                _this.refresh.next();
                _this.openSnackBar(data.message, 'success');
                _this.meetingSocket.meetingUpdatedSocket({ meetingFlag: 'update', meetingTitle: result.meetingTitle.toUpperCase(), userId: _this.userId });
            }
            else {
                _this.openSnackBar("unkown error", 'failed');
            }
        }, function (error) {
            _this.openSnackBar(error, 'failed');
        });
    }; //
    UserCalendarComponent.prototype.deleteMeetingDetail = function (meetingId, meetingTitle) {
        var _this = this;
        this.activeDayIsOpen = false;
        this.meeting.deleteMeeting(meetingId, this.userId, this.userDetails._token).subscribe(function (res) {
            // console.log(res);
            if (res.error) {
                _this.openSnackBar(res.message, 'failed');
            }
            else if (res.error == false && res.status == 200) {
                _this.openSnackBar('Meeting Deleted successfully', 'success');
                _this.events = _this.events.filter(function (currentValue, index, arr) {
                    return currentValue.meetingId != meetingId;
                });
                _this.meetingSocket.meetingUpdatedSocket({ meetingFlag: 'delete', meetingTitle: meetingTitle.toUpperCase(), userId: _this.userId });
                _this.refresh.next();
            }
            else {
                _this.openSnackBar("unkown error", 'failed');
            }
        }, function (error) {
            _this.openSnackBar(error, 'failed');
        });
    };
    UserCalendarComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (events.length == 0 && this.userDetails.role == "admin") {
            // console.log(this.refresh);
            this.openDialog(date);
        }
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
                //this.openDialog();
            }
            else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    };
    UserCalendarComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        this.events = this.events.map(function (iEvent) {
            if (iEvent === event) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, event, { start: newStart, end: newEnd });
            }
            return iEvent;
        });
        this.handleEvent('Dropped or resized', event);
    };
    UserCalendarComponent.prototype.handleEvent = function (action, event) {
        //this.modalData = { event, action };
        //this.modal.open(this.modalContent, { size: 'lg' });
    };
    UserCalendarComponent.prototype.setView = function (view) {
        this.view = view;
    };
    UserCalendarComponent.prototype.closeOpenMonthViewDay = function () {
        console.log(this.viewDate.getFullYear());
        if (this.viewDate.getFullYear() != new Date().getFullYear()) {
            this.viewDate = new Date();
            this.openSnackBar("Only Allow for the current year", 'failed');
            return false;
        }
        this.activeDayIsOpen = false;
    };
    UserCalendarComponent.prototype.changeMeetingEndTime = function (data) {
        console.log(data);
    };
    UserCalendarComponent.prototype.ngOnDestroy = function () {
        this.meetingSocket.exitSocket();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent', { read: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], UserCalendarComponent.prototype, "modalContent", void 0);
    UserCalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-calendar',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./user-calendar.component.html */ "./src/app/modules/user-calendar/user-calendar.component.html"),
            providers: [_services_meeting_socket_service__WEBPACK_IMPORTED_MODULE_11__["MeetingSocketService"]],
            styles: [__webpack_require__(/*! ./user-calendar.component.css */ "./src/app/modules/user-calendar/user-calendar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], _services_meeting_service__WEBPACK_IMPORTED_MODULE_8__["MeetingService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"], _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_meeting_socket_service__WEBPACK_IMPORTED_MODULE_11__["MeetingSocketService"]])
    ], UserCalendarComponent);
    return UserCalendarComponent;
}());

var DialogOverviewExampleDialog = /** @class */ (function () {
    function DialogOverviewExampleDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.hours = [];
        this.minutes = [];
        this.createHour();
        // this.changeMeetingEndTime(null)
    }
    DialogOverviewExampleDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewExampleDialog.prototype.createHour = function () {
        for (var i = 1; i <= 12; i++) {
            this.hours.push(i);
        }
        for (var i = 0; i <= 59; i++) {
            this.minutes.push(i);
        }
    };
    DialogOverviewExampleDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dialog-overview-example-dialog',
            template: __webpack_require__(/*! ./dialog-overview-example-dialog.html */ "./src/app/modules/user-calendar/dialog-overview-example-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"], Object])
    ], DialogOverviewExampleDialog);
    return DialogOverviewExampleDialog;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#notfound{\r\n    text-align: center;\r\n    background: black;\r\n}\r\n.notfound-404{\r\n    color:white;\r\n}\r\n.notFoundDiv{\r\n    text-align: center;\r\n  \r\n}\r\nbody{\r\n    background: black !important;\r\n}\r\n.container-fluid{\r\n    background: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSxrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNub3Rmb3VuZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcbi5ub3Rmb3VuZC00MDR7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLm5vdEZvdW5kRGl2e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG59XHJcbmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" class=\"notFoundDiv\">\n  <div class=\"col\">\n<div id=\"notfound\">\n  <div class=\"notfound\">\n  <div class=\"notfound-404\">\n  <h1>404</h1>\n  <h2>Page not found</h2>\n  </div>\n  <button class=\"btn btn-sm btn-danger\" (click)=\"goToLogin()\">Go To Login Page</button>\n  </div>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(router) {
        this.router = router;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent.prototype.goToLogin = function () {
        // alert('asdasdbasdhah');
        this.router.navigate(['auth']);
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var Base_URL = "http://localhost:3000/api/v1/users/";
var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Accept': 'text/plain' })
        };
    }
    AuthService.prototype.gotoLogin = function (payload) {
        return this.http.post(Base_URL + 'login', payload, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("http called ended"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    AuthService.prototype.goToSignUp = function (payload) {
        return this.http.post(Base_URL + 'signup', payload, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("http called ended"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    AuthService.prototype.otpGenerateForForgetPassword = function (data) {
        return this.http.post(Base_URL + 'checkUserOtpGenrateForForgetPassword', data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("http called ended"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    AuthService.prototype.OtpValidateForForgetPassword = function (data) {
        return this.http.post(Base_URL + 'OtpValidateForForgetPassword', data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("http called ended"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    AuthService.prototype.setLocalStor = function (key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    };
    AuthService.prototype.getCountryData = function () {
        return '{"BD": "880", "BE": "32", "BF": "226", "BG": "359", "BA": "387", "BB": "+1-246", "WF": "681", "BL": "590", "BM": "+1-441", "BN": "673", "BO": "591", "BH": "973", "BI": "257", "BJ": "229", "BT": "975", "JM": "+1-876", "BV": "", "BW": "267", "WS": "685", "BQ": "599", "BR": "55", "BS": "+1-242", "JE": "+44-1534", "BY": "375", "BZ": "501", "RU": "7", "RW": "250", "RS": "381", "TL": "670", "RE": "262", "TM": "993", "TJ": "992", "RO": "40", "TK": "690", "GW": "245", "GU": "+1-671", "GT": "502", "GS": "", "GR": "30", "GQ": "240", "GP": "590", "JP": "81", "GY": "592", "GG": "+44-1481", "GF": "594", "GE": "995", "GD": "+1-473", "GB": "44", "GA": "241", "SV": "503", "GN": "224", "GM": "220", "GL": "299", "GI": "350", "GH": "233", "OM": "968", "TN": "216", "JO": "962", "HR": "385", "HT": "509", "HU": "36", "HK": "852", "HN": "504", "HM": " ", "VE": "58", "PR": "+1-787 and 1-939", "PS": "970", "PW": "680", "PT": "351", "SJ": "47", "PY": "595", "IQ": "964", "PA": "507", "PF": "689", "PG": "675", "PE": "51", "PK": "92", "PH": "63", "PN": "870", "PL": "48", "PM": "508", "ZM": "260", "EH": "212", "EE": "372", "EG": "20", "ZA": "27", "EC": "593", "IT": "39", "VN": "84", "SB": "677", "ET": "251", "SO": "252", "ZW": "263", "SA": "966", "ES": "34", "ER": "291", "ME": "382", "MD": "373", "MG": "261", "MF": "590", "MA": "212", "MC": "377", "UZ": "998", "MM": "95", "ML": "223", "MO": "853", "MN": "976", "MH": "692", "MK": "389", "MU": "230", "MT": "356", "MW": "265", "MV": "960", "MQ": "596", "MP": "+1-670", "MS": "+1-664", "MR": "222", "IM": "+44-1624", "UG": "256", "TZ": "255", "MY": "60", "MX": "52", "IL": "972", "FR": "33", "IO": "246", "SH": "290", "FI": "358", "FJ": "679", "FK": "500", "FM": "691", "FO": "298", "NI": "505", "NL": "31", "NO": "47", "NA": "264", "VU": "678", "NC": "687", "NE": "227", "NF": "672", "NG": "234", "NZ": "64", "NP": "977", "NR": "674", "NU": "683", "CK": "682", "XK": "", "CI": "225", "CH": "41", "CO": "57", "CN": "86", "CM": "237", "CL": "56", "CC": "61", "CA": "1", "CG": "242", "CF": "236", "CD": "243", "CZ": "420", "CY": "357", "CX": "61", "CR": "506", "CW": "599", "CV": "238", "CU": "53", "SZ": "268", "SY": "963", "SX": "599", "KG": "996", "KE": "254", "SS": "211", "SR": "597", "KI": "686", "KH": "855", "KN": "+1-869", "KM": "269", "ST": "239", "SK": "421", "KR": "82", "SI": "386", "KP": "850", "KW": "965", "SN": "221", "SM": "378", "SL": "232", "SC": "248", "KZ": "7", "KY": "+1-345", "SG": "65", "SE": "46", "SD": "249", "DO": "+1-809 and 1-829", "DM": "+1-767", "DJ": "253", "DK": "45", "VG": "+1-284", "DE": "49", "YE": "967", "DZ": "213", "US": "1", "UY": "598", "YT": "262", "UM": "1", "LB": "961", "LC": "+1-758", "LA": "856", "TV": "688", "TW": "886", "TT": "+1-868", "TR": "90", "LK": "94", "LI": "423", "LV": "371", "TO": "676", "LT": "370", "LU": "352", "LR": "231", "LS": "266", "TH": "66", "TF": "", "TG": "228", "TD": "235", "TC": "+1-649", "LY": "218", "VA": "379", "VC": "+1-784", "AE": "971", "AD": "376", "AG": "+1-268", "AF": "93", "AI": "+1-264", "VI": "+1-340", "IS": "354", "IR": "98", "AM": "374", "AL": "355", "AO": "244", "AQ": "", "AS": "+1-684", "AR": "54", "AU": "61", "AT": "43", "AW": "297", "IN": "91", "AX": "+358-18", "AZ": "994", "IE": "353", "ID": "62", "UA": "380", "QA": "974", "MZ": "258"}';
    };
    AuthService.prototype.getFromLocalStore = function (key) {
        return JSON.parse(localStorage.getItem(key));
    };
    AuthService.prototype.isLogin = function () {
        return !!localStorage.getItem('_token');
    };
    AuthService.prototype.goToLogOut = function () {
        return localStorage.clear();
    };
    // Error handling 
    AuthService.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            console.log(error);
            if (error.error.error) {
                errorMessage = "" + error.error.message;
            }
            else {
                errorMessage = "Error Code: " + error.status + "\nMessage: " + error.error.message;
            }
        }
        // console.log(errorMessage+"adasdasd");
        // if(errorMessage && errorMessage.length > 0){
        //   //this.presentToast(errorMessage,'danger')
        // }
        //  window.alert(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/meeting-socket.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/meeting-socket.service.ts ***!
  \****************************************************/
/*! exports provided: MeetingSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingSocketService", function() { return MeetingSocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);





var BASE_URL = "http://localhost:3000";
var MeetingSocketService = /** @class */ (function () {
    function MeetingSocketService(http) {
        var _this = this;
        this.http = http;
        this.exitSocket = function () {
            _this.socket.disconnect();
        }; // end exit socket
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__(BASE_URL);
    }
    MeetingSocketService.prototype.verifyUser = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.socket.on('verifyUser', function (data) {
                observer.next(data);
            });
        });
    };
    MeetingSocketService.prototype.setUser = function (authToken) {
        this.socket.emit('set-user', authToken);
    };
    MeetingSocketService.prototype.meetingUpdatedSocket = function (data) {
        this.socket.emit('meeting-updated', data);
    };
    MeetingSocketService.prototype.getMeetingUpdatedSocket = function (userId) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.socket.on(userId, function (data) {
                observer.next(data);
            });
        });
    };
    MeetingSocketService.prototype.getOnlineUserList = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.socket.on('online-user-list', function (userList) {
                observer.next(userList);
            });
        });
    };
    MeetingSocketService.prototype.authError = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.socket.on('auth-error', function (serverResponse) {
                observer.next(serverResponse);
            });
        });
    };
    MeetingSocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MeetingSocketService);
    return MeetingSocketService;
}());



/***/ }),

/***/ "./src/app/services/meeting.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/meeting.service.ts ***!
  \*********************************************/
/*! exports provided: MeetingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingService", function() { return MeetingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _meeting_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./meeting-socket.service */ "./src/app/services/meeting-socket.service.ts");






var Base_URL = "http://localhost:3000/api/v1/users/";

var MeetingService = /** @class */ (function () {
    function MeetingService(http, router, meetingSocket) {
        this.http = http;
        this.router = router;
        this.meetingSocket = meetingSocket;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Accept': 'text/plain' })
        };
    }
    MeetingService.prototype.createMeeting = function (data, userId, authToken) {
        data.meetingUserId = userId;
        return this.http.post(Base_URL + 'createMeeting?authToken=' + authToken, data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("http called ended"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    MeetingService.prototype.callUpdateMeeting = function (meetingId, result, authToken) {
        return this.http.post(Base_URL + 'updateMeeting/' + meetingId + '?authToken=' + authToken, result, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("http called ended"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    MeetingService.prototype.getAllMeeting = function (userId, meetingId, authToken) {
        var data = {};
        if (meetingId) {
            data = { meetingId: meetingId };
        }
        else {
            data = { userId: userId };
        }
        return this.http.post(Base_URL + 'getUserAllMeeting?authToken=' + authToken, data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("http called ended"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    MeetingService.prototype.deleteMeeting = function (meetingId, userId, authToken) {
        var payLoad = { meetingId: meetingId, userId: '' };
        if (userId) {
            payLoad.userId = userId;
        }
        payLoad.meetingId = meetingId;
        return this.http.post(Base_URL + 'deleteMeeting?authToken=' + authToken, payLoad, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("http called ended"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    MeetingService.prototype.getSnooozedTime = function (meetingUserId, authToken) {
        return this.http.post(Base_URL + 'getTodayMeetingsForSnooze?authToken=' + authToken, { meetingUserId: meetingUserId }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("http called ended"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    MeetingService.prototype.updateSnoozeOnMeeting = function (meetingId, authToken) {
        return this.http.post(Base_URL + 'updateMeetingSnooze?authToken=' + authToken, { meetingId: meetingId }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("http called ended"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    // Error handling 
    MeetingService.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            if (error.error.error) {
                console.log(error);
                errorMessage = "" + error.error.message;
                if (error.error.data && error.error.data.p_response_code) {
                    localStorage.clear();
                    this.meetingSocket.exitSocket();
                    this.router.navigate(['/auth']);
                }
            }
            else {
                console.log(error);
                errorMessage = "Error Code: " + error.status + "\nMessage: " + error.error.message;
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    MeetingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _meeting_socket_service__WEBPACK_IMPORTED_MODULE_6__["MeetingSocketService"]])
    ], MeetingService);
    return MeetingService;
}());



/***/ }),

/***/ "./src/app/services/snakebar.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/snakebar.service.ts ***!
  \**********************************************/
/*! exports provided: SnakebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnakebarService", function() { return SnakebarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");



var SnakebarService = /** @class */ (function () {
    function SnakebarService(_snackBar) {
        this._snackBar = _snackBar;
    }
    SnakebarService.prototype.openSnackBar = function (message, action) {
        var background = "";
        if (action == 'success') {
            background = 'green-snackbar';
        }
        if (action == 'failed') {
            background = 'red-snackbar';
        }
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    };
    SnakebarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], SnakebarService);
    return SnakebarService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var Base_URL = "http://localhost:3000/api/v1/users/";
var UserService = /** @class */ (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Accept': 'text/plain' })
        };
    }
    UserService.prototype.getAllUserByLimit = function (skip, limit, authToken) {
        var skipData = skip ? skip : 0;
        var limitData = limit ? limit : 0;
        return this.http.get(Base_URL + 'getAllUserByLimit?skip=' + skipData + '&limit=' + limitData + '&authToken=' + authToken)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("http called ended"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    // Error handling 
    UserService.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            if (error.error.error) {
                console.log(error);
                errorMessage = "" + error.error.message;
                if (error.error.data && error.error.data.p_response_code) {
                    localStorage.clear();
                    this.router.navigate(['/auth']);
                }
            }
            else {
                console.log(error);
                errorMessage = "Error Code: " + error.status + "\nMessage: " + error.error.message;
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!----footer end-->\n\n<!----footer start-->\n<div class=\"row\" >\n  <mat-toolbar color=\"primary\">\n        <div class=\"col-md-12 text-center footerHeading\">\n          Edwisor Assignment Meeting Planner &Made By Shubham Agnihotri\n        </div>\n  </mat-toolbar>\n</div>\n\n<!----footer end-->"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztFQUVFO0lBQ0UsbUZBQW1GO0lBQ25GLHNCQUFzQjtFQUN4QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-------haeder start ---------->\n<div class=\"row\">\n  <!-- <div class=\"col-md-12\"> -->\n      <mat-toolbar color=\"primary\">\n        <mat-toolbar-row>\n\n        <button mat-mini-fab class=\"ml-2 toogle-btn\" (click)=\"toggleMenu()\" mat-raised-button>\n          <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example heart icon\">format_align_justify</mat-icon>\n        </button>\n\n        <span class=\"example-spacer\"></span>\n          <img src=\"../../../assets/calendarorig.png\" class=\"classLogo logoImg\"> \n          <span class=\"ml-3\" class=\"appNameHeader\">Meeting Planner</span>\n          <span class=\"example-spacer mr-md-auto\"></span>\n         \n           <span class=\"my-2 my-md-0 mr-md-3\" class=\"profileLogoSpan\">\n           <a class=\"p-2\" style=\"color:white\" id=\"#loginPersonName\" class=\"userappNameHeader\">Hello {{userDetails.role == 'admin'? userDetails.firstName+'-admin' : userDetails.firstName+'-user'}}</a> \n            <img src=\"../../../assets/dummyProfile.png\"  [matMenuTriggerFor]=\"menu\" class=\"ml-4 logoImg\">\n           \n            <mat-menu #menu=\"matMenu\">\n            \n              <button mat-menu-item (click)=\"goToLogout()\">\n               \n                <mat-icon>logout</mat-icon>\n                <span>Logout</span>\n              </button>\n            </mat-menu>\n          </span>\n        </mat-toolbar-row>\n        \n        <mat-toolbar-row class=\"topNavbar\">\n          <button mat-button (click)=\"goRoutingPage('dashboard/all-users')\" *ngIf=\"userDetails.role == 'admin'\">All Users</button>\n          <button mat-button (click)=\"goRoutingPage('dashboard/user-calendar',userDetails.userId)\" *ngIf=\"userDetails.role == 'user'\">My Calendar</button>\n          <button mat-button (click)=\"goRoutingPage('dashboard/view-user-all-meeting',userDetails.userId)\" *ngIf=\"userDetails.role == 'user'\">My All Meeting</button>      \n          \n        </mat-toolbar-row>\n      </mat-toolbar>\n    <!-- </div> -->\n</div>\n\n<!-------haeder end ---------->\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_meeting_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/meeting-socket.service */ "./src/app/services/meeting-socket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth, meetingSocket, router, _snackBar) {
        this.auth = auth;
        this.meetingSocket = meetingSocket;
        this.router = router;
        this._snackBar = _snackBar;
        this.menuToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showIconMenu = false;
        this.width = '210px';
        this.userDetails = {
            role: "",
            countryCode: "",
            mobileNumber: "",
            email: "",
            lastName: "",
            firstName: "",
            userId: "",
            _token: ""
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.userDetails = this.auth.getFromLocalStore('userDetails');
    };
    HeaderComponent.prototype.openSnackBar = function (message, action, duration) {
        var background = "";
        if (action == 'success') {
            background = 'green-snackbar';
        }
        if (action == 'failed') {
            background = 'red-snackbar';
        }
        this._snackBar.open(message, action, {
            duration: duration || 2000,
            panelClass: [background]
        });
    };
    HeaderComponent.prototype.toggleMenu = function () {
        this.showIconMenu = !this.showIconMenu;
        var width = this.showIconMenu ? '85px' : '160px';
        var data = {
            showIconMenu: this.showIconMenu,
            width: width
        };
        // console.log(data);
        this.menuToggle.emit(data);
    };
    HeaderComponent.prototype.goRoutingPage = function (url, dyanamicId) {
        if (dyanamicId) {
            this.router.navigate([url, dyanamicId]);
        }
        else {
            this.router.navigate([url]);
        }
    };
    HeaderComponent.prototype.goToLogout = function () {
        var _this = this;
        this.auth.goToLogOut();
        this.meetingSocket.exitSocket();
        this.router.navigate(['/auth']);
        setTimeout(function () {
            _this.openSnackBar("Logout Successfully !!", 'success');
        }, 1000);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], HeaderComponent.prototype, "menuToggle", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_meeting_socket_service__WEBPACK_IMPORTED_MODULE_3__["MeetingSocketService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.css":
/*!******************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    width: 100%;\r\n    min-height: 632px;\r\n    border: 1px solid rgba(0, 0, 0, 0.5);\r\n  }\r\n  \r\n  .example-sidenav-content {\r\n    display: flex;\r\n    height: 100%;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  \r\n  /* .example-sidenav {\r\n    padding: 20px;\r\n  } */\r\n  \r\n  /* mat-drawer{\r\n    background: rgba(48, 39, 39, 0.07);\r\n  } */\r\n  \r\n  .toogle-btn{\r\n    background-color: white;\r\n    color: teal;\r\n    border: none;\r\n    \r\n  }\r\n  \r\n  .iconClass{\r\n    height: 78px !important;\r\n  }\r\n  \r\n  /* mat-drawer{\r\n      padding: 0px;\r\n  } */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixvQ0FBb0M7RUFDdEM7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7O0VBRUE7O0tBRUc7O0VBQ0g7O0tBRUc7O0VBQ0g7SUFDRSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7O0VBRWQ7O0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7O0tBRUciLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA2MzJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIC5leGFtcGxlLXNpZGVuYXYge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9ICovXHJcbiAgLyogbWF0LWRyYXdlcntcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNDgsIDM5LCAzOSwgMC4wNyk7XHJcbiAgfSAqL1xyXG4gIC50b29nbGUtYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogdGVhbDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIFxyXG4gIH1cclxuICAuaWNvbkNsYXNze1xyXG4gICAgaGVpZ2h0OiA3OHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gXHJcbiAgLyogbWF0LWRyYXdlcntcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gIH0gKi8iXX0= */"

/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--body start-->\n<div class=\"row\">\n    <!----------side nav start  -->\n  <div class=\"col-md-12\">\n  <mat-drawer-container class=\"\" autosize >\n    <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\" opened [class.bigSideMenu]=\"true\" id=\"#bigSideMenu\" [style.width]=\"sideBarDetail.width\">\n      <!-- named menu start-->\n      <mat-list  *ngIf=\"!sideBarDetail.showIconMenu\" >\n\n        <mat-list-item routerLinkActive=\"active-link\" *ngIf=\"userDetails.role == 'admin'\"> \n          <button mat-button (click)=\"goRoutingPage('dashboard/all-users')\">All Users</button>        \n        </mat-list-item>\n\n        <mat-list-item routerLinkActive=\"active-link\" *ngIf=\"userDetails.role == 'user'\"> \n          <button mat-button (click)=\"goRoutingPage('dashboard/user-calendar',userDetails.userId)\">My Calendar</button>\n        </mat-list-item>\n        <mat-list-item routerLinkActive=\"active-link\" *ngIf=\"userDetails.role == 'user'\"> \n          <button mat-button (click)=\"goRoutingPage('dashboard/view-user-all-meeting',userDetails.userId)\">My All Meeting</button>\n        </mat-list-item>\n       \n\n      </mat-list>\n       <!-- named menu ended-->\n       <mat-list *ngIf=\"sideBarDetail.showIconMenu\">\n        <mat-list-item class=\"iconClass\" *ngIf=\"userDetails.role == 'admin'\"> \n          <button mat-fab color=\"primary\" (click)=\"goRoutingPage('dashboard/all-users')\">\n           \n            <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example delete icon\" >supervised_user_circle</mat-icon>\n          </button>\n        </mat-list-item>\n        <mat-list-item class=\"iconClass\" *ngIf=\"userDetails.role == 'user'\"> \n          <button mat-fab color=\"primary\" (click)=\"goRoutingPage('dashboard/view-user-all-meeting',userDetails.userId)\">\n            <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example delete icon\">calendar_today</mat-icon>\n          </button>\n        </mat-list-item>\n        <mat-list-item class=\"iconClass\" *ngIf=\"userDetails.role == 'user'\"> \n          <button mat-fab color=\"primary\" (click)=\"goRoutingPage('dashboard/view-user-all-meeting',userDetails.userId)\">\n            <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example delete icon\">meeting_room</mat-icon>\n          \n          </button>\n        </mat-list-item>\n        <!-- <mat-list-item class=\"iconClass\">\n          <button mat-fab color=\"primary\">\n            <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example delete icon\">chat</mat-icon>\n          </button>\n        </mat-list-item> -->\n      </mat-list>\n\n    </mat-drawer>\n\n\n    <!-- icon menu start -->\n\n\n    <!----------side nav end  -->\n    <!----------routes start  -->\n    <router-outlet></router-outlet> \n \n  </mat-drawer-container>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(auth, route) {
        this.auth = auth;
        this.route = route;
        this.userDetails = {
            role: "",
            countryCode: "",
            mobileNumber: "",
            email: "",
            lastName: "",
            firstName: "",
            userId: "",
            _token: ""
        };
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.userDetails = this.auth.getFromLocalStore('userDetails');
        // console.log("asdsdsd");
        // console.log(this.sideBarDetail)
        // this.showIconMenu = this.sideBarDetail.showIconMenu;
        // this.width = this.sideBarDetail.width
    };
    SidebarComponent.prototype.goRoutingPage = function (url, dyanamicId) {
        if (dyanamicId) {
            this.route.navigate([url, dyanamicId]);
        }
        else {
            this.route.navigate([url]);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidebarComponent.prototype, "sideBarDetail", void 0);
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/shared/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/shared/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/user-management/auth/auth.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-management/auth/auth.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field{\r\n    width: 100%;\r\n}\r\n\r\n.err-msg{\r\n    color:red;\r\n}\r\n\r\n.right-msg{\r\n    color:forestgreen;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1tYW5hZ2VtZW50L2F1dGgvYXV0aC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdXNlci1tYW5hZ2VtZW50L2F1dGgvYXV0aC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmVyci1tc2d7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbn1cclxuXHJcbi5yaWdodC1tc2d7XHJcbiAgICBjb2xvcjpmb3Jlc3RncmVlbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/user-management/auth/auth.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-management/auth/auth.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-5\">\n  <div class=\"col-md-6 offset-md-3\">\n    <mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\">\n      <mat-tab label=\"Login\">\n\n        <mat-card class=\"box\">\n          <mat-card-header>\n            <mat-card-title>Log in</mat-card-title>\n            <!-- {{loginUserData | json}} -->\n          </mat-card-header>\n\n          <form class=\"example-form\" #loginFormData=\"ngForm\" method=\"post\">\n            <mat-card-content>\n\n              <mat-form-field appearance=\"outline\">\n                <mat-label>Email</mat-label>\n                <input matInput placeholder=\"Enter Email\" [(ngModel)]=\"loginUserData.email\" type=\"email\" name=\"email\"\n                  #email=\"ngModel\" required email>\n                <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n\n                <mat-hint class=\"err-msg\" *ngIf=\"email.errors?.required && (email.dirty || email.touched)\">\n                  Email is required.\n                </mat-hint>\n                <mat-hint class=\"err-msg\" *ngIf=\"email.errors?.email && (email.dirty || email.touched)\">\n                  Provide Valid Email\n                </mat-hint>\n                <mat-hint class=\"right-msg\" *ngIf=\"email.valid\">\n                  Perfect\n                </mat-hint>\n              </mat-form-field>\n\n\n              <mat-form-field appearance=\"outline\">\n                <mat-label>Password</mat-label>\n                <input matInput placeholder=\"Enter Password\" [(ngModel)]=\"loginUserData.password\" type=\"password\"\n                  name=\"password\" #password=\"ngModel\" required>\n                <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n                <mat-hint class=\"err-msg\" *ngIf=\"password.errors?.required && (password.dirty || password.touched)\">\n                  Password is required.\n                </mat-hint>\n                <!-- <mat-hint class=\"err-msg\" *ngIf=\"(password.errors?.minlength || password.errors?.maxlength) && (password.dirty || password.touched)\">\n                      Only 10 digit required\n                    </mat-hint> -->\n                <mat-hint class=\"right-msg\" *ngIf=\"password.valid\">\n                  Perfect\n                </mat-hint>\n              </mat-form-field>\n            </mat-card-content>\n\n            <div class=\"text-center\">\n              <button mat-raised-button color=\"primary\" [disabled]=\"loginFormData.form.invalid\"\n                (click)=\"appLogin(loginFormData)\">Login</button>\n            </div>\n            <div class=\"text-right\">\n              <button mat-button color=\"primary\"  (click)=\"goToForgetPaasword()\">forget password ?</button>\n            </div>\n          </form>\n        </mat-card>\n\n      </mat-tab>\n      <mat-tab label=\"Signup\">\n        <mat-card class=\"box\">\n          <mat-card-header>\n            <mat-card-title>Sign up</mat-card-title>\n          </mat-card-header>\n\n          <form class=\"example-form\" #signUpFormData=\"ngForm\" method=\"post\">\n            <mat-card-content>\n\n              <mat-form-field appearance=\"outline\" style=\"width: 50%;\">\n                <mat-label>FirstName</mat-label>\n                <input matInput placeholder=\"Enter firstName\" [(ngModel)]=\"signupUserData.firstName\" type=\"text\"\n                  name=\"firstName\" #firstName=\"ngModel\" required>\n                <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n                <mat-hint class=\"err-msg\" *ngIf=\"firstName.invalid && (firstName.dirty || firstName.touched)\">\n                  FirstName is required.\n                </mat-hint>\n                <mat-hint class=\"right-msg\" *ngIf=\"firstName.valid\">\n                  Perfect\n                </mat-hint>\n              </mat-form-field>\n\n\n              <mat-form-field appearance=\"outline\" style=\"width: 50%;\">\n                <mat-label>LastName</mat-label>\n                <input matInput placeholder=\"Enter lastName\" [(ngModel)]=\"signupUserData.lastName\" type=\"text\"\n                  name=\"lastName\" #lastName=\"ngModel\" required>\n                <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n                <mat-hint class=\"err-msg\" *ngIf=\"lastName.invalid && (lastName.dirty || lastName.touched)\">\n                  LastName is required.\n                </mat-hint>\n                <mat-hint class=\"right-msg\" *ngIf=\"lastName.valid\">\n                  Perfect\n                </mat-hint>\n              </mat-form-field>\n\n              <mat-form-field appearance=\"outline\">\n                <mat-label>Email</mat-label>\n                <input matInput placeholder=\"Enter Email\" [(ngModel)]=\"signupUserData.email\" type=\"email\" name=\"email\"\n                  #emailSignup=\"ngModel\" required email>\n                <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n                <mat-hint class=\"err-msg\"\n                  *ngIf=\"emailSignup.errors?.required && (emailSignup.dirty || emailSignup.touched)\">\n                  Email is required.\n                </mat-hint>\n                <mat-hint class=\"err-msg\"\n                  *ngIf=\"emailSignup.errors?.email && (emailSignup.dirty || emailSignup.touched)\">\n                  Provide valid email\n                </mat-hint>\n                <mat-hint class=\"right-msg\" *ngIf=\"emailSignup.valid\">\n                  Perfect\n                </mat-hint>\n              </mat-form-field>\n\n              <mat-form-field appearance=\"outline\">\n                <mat-label>Password</mat-label>\n                <input matInput type=\"password\" placeholder=\"Enter password\" [(ngModel)]=\"signupUserData.password\"\n                  name=\"password\" #passwordSignUp=\"ngModel\" required>\n                <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n                <mat-hint class=\"err-msg\"\n                  *ngIf=\"passwordSignUp.invalid && (passwordSignUp.dirty || passwordSignUp.touched)\">\n                  Password is required.\n                </mat-hint>\n                <mat-hint class=\"right-msg\" *ngIf=\"passwordSignUp.valid\">\n                  Perfect\n                </mat-hint>\n              </mat-form-field>\n\n              <mat-form-field appearance=\"outline\" style=\"width:30%\">\n                <mat-label>Country Code</mat-label>\n                <mat-select [(ngModel)]=\"signupUserData.countryCode\" name=\"countryCode\" #countryCode=\"ngModel\" required>\n                  <mat-option *ngFor=\"let countryShort of countryShortName\" [value]=\"countryShort\">\n                    {{countryShort}}\n                  </mat-option>\n                </mat-select>\n\n                <mat-hint class=\"err-msg\" *ngIf=\"countryCode.invalid && (countryCode.dirty || countryCode.touched)\">\n                  Country Code is required.\n                </mat-hint>\n                <mat-hint class=\"right-msg\" *ngIf=\"countryCode.valid\">\n                  Perfect\n                </mat-hint>\n              </mat-form-field>\n\n              <mat-form-field appearance=\"outline\" style=\"width:70%\">\n                <mat-label>Mobile Number</mat-label>\n                <input matInput placeholder=\"Mobile Number\" [(ngModel)]=\"signupUserData.mobileNumber\"\n                  name=\"mobileNumber\" #mobileNumber=\"ngModel\" required minlength=\"10\" maxlength=\"10\">\n                <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n\n                <mat-hint class=\"err-msg\"\n                  *ngIf=\"mobileNumber.errors?.required && (mobileNumber.dirty || mobileNumber.touched)\">\n                  Mobile Number is required.\n                </mat-hint>\n                <mat-hint class=\"err-msg\"\n                  *ngIf=\"(mobileNumber.errors?.minlength || mobileNumber.errors?.maxlength) && (mobileNumber.dirty || mobileNumber.touched)\">\n                  Only 10 dgit required\n                </mat-hint>\n                <mat-hint class=\"right-msg\" *ngIf=\"mobileNumber.valid\">\n                  Perfect\n                </mat-hint>\n              </mat-form-field>\n\n            </mat-card-content>\n            <div class=\"text-center\">\n              <a mat-raised-button color=\"primary\" [disabled]=\"signUpFormData.form.invalid\"\n                (click)=\"appSignUp(signUpFormData)\">Sign up</a>\n            </div>\n            \n          </form>\n        </mat-card>\n      </mat-tab>\n\n    </mat-tab-group>\n\n\n\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user-management/auth/auth.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-management/auth/auth.component.ts ***!
  \********************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _services_snakebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/snakebar.service */ "./src/app/services/snakebar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AuthComponent = /** @class */ (function () {
    function AuthComponent(auth, toast, _snackBar, route) {
        this.auth = auth;
        this.toast = toast;
        this._snackBar = _snackBar;
        this.route = route;
        this.loginUserData = { email: "", password: "" };
        this.countryCOde = {};
        this.signupUserData = { firstName: "", lastName: "", password: "", email: "", mobileNumber: "", countryCode: "" };
        this.countryCOdeData = {};
        this.countryShortName = [];
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.getCountryCode();
    };
    AuthComponent.prototype.openSnackBar = function (message, action, duration) {
        var background = "";
        if (action == 'success') {
            background = 'green-snackbar';
        }
        if (action == 'failed') {
            background = 'red-snackbar';
        }
        this._snackBar.open(message, action, {
            duration: duration || 2000,
            panelClass: [background]
        });
    };
    AuthComponent.prototype.appLogin = function (loginFormData) {
        var _this = this;
        this.auth.gotoLogin(this.loginUserData).subscribe(function (data) {
            if (data.error) {
                // alert('sdasdkjsdj');
                _this.openSnackBar(data.message, 'failed');
            }
            else if (data.error == false && data.status == 200) {
                _this.auth.setLocalStor('_token', data.data.authToken);
                _this.auth.setLocalStor('userDetails', data.data.userDetails);
                loginFormData.reset();
                _this.openSnackBar(data.message, 'success');
                if (data.data.userDetails.role == 'admin') {
                    _this.route.navigate(['dashboard', 'all-users']);
                }
                else {
                    _this.route.navigate(['dashboard/user-calendar', data.data.userDetails.userId]);
                }
            }
            else {
                _this.openSnackBar("unkown error", 'failed');
            }
        }, function (error) {
            _this.openSnackBar(error, 'failed');
        });
    }; // login function created;
    AuthComponent.prototype.getCountryCode = function () {
        var data = this.auth.getCountryData();
        this.countryShortName = Object.keys(JSON.parse(data));
        this.countryCOdeData = JSON.parse(data);
        console.log(this.countryCOdeData);
    }; // get country number code and name 
    AuthComponent.prototype.appSignUp = function (signUpFormData) {
        var _this = this;
        var signupData = signUpFormData.value;
        signupData.countryCode = this.countryCOdeData[signUpFormData.value.countryCode];
        this.auth.goToSignUp(signupData).subscribe(function (data) {
            if (data.error) {
                _this.openSnackBar(data.message, 'failed');
            }
            else {
                signUpFormData.reset();
                // this.signupUserData = { firstName: "", lastName: "", password: "", email: "", mobileNumber: "", countryCode: "" };
                _this.openSnackBar(data.message, 'success', 4000);
            }
        }, function (error) {
            _this.openSnackBar(error, 'failed');
        });
    };
    AuthComponent.prototype.goToForgetPaasword = function () {
        this.route.navigate(['auth', 'forget-passwod']);
    };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/user-management/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/user-management/auth/auth.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_snakebar_service__WEBPACK_IMPORTED_MODULE_4__["SnakebarService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/user-management/forget-password/forget-password.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/user-management/forget-password/forget-password.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field{\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1tYW5hZ2VtZW50L2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbWFuYWdlbWVudC9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user-management/forget-password/forget-password.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/user-management/forget-password/forget-password.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row mt-5\">\n  <div class=\"col-md-6 offset-md-3\">\n      <mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\">\n        <mat-tab label=\"Forget Password\">\n          \n          <mat-card class=\"box\">\n            <mat-card-header>\n              <mat-card-title>Forget Password</mat-card-title>\n            </mat-card-header>\n        \n            <form class=\"example-form\" #forgetFormData=\"ngForm\" method=\"post\">\n              <mat-card-content>\n              \n                  <mat-form-field appearance=\"outline\">\n                    <mat-label>Email Id</mat-label>\n                    <input matInput placeholder=\"Enter Enter Email\" [(ngModel)]=\"forgetPasswordData.email\" type=\"email\" name=\"email\"\n                    #email=\"ngModel\" required email>\n                    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n                    <mat-hint class=\"err-msg\" *ngIf=\"email.errors?.required && (email.dirty || email.touched)\">\n                      Email is required.\n                    </mat-hint>\n                    <mat-hint class=\"err-msg\" *ngIf=\"email.errors?.email && (email.dirty || email.touched)\">\n                      Provide Valid Email\n                    </mat-hint>\n                    <mat-hint class=\"right-msg\" *ngIf=\"email.valid\">\n                      Perfect\n                    </mat-hint>\n                  </mat-form-field>\n\n                  <mat-form-field appearance=\"outline\" *ngIf=\"emailSubmit\">\n                    <mat-label>Otp</mat-label>\n                    <input matInput placeholder=\"Enter Otp\" [(ngModel)]=\"forgetPasswordData.otp\" type=\"text\" name=\"otp\"\n                    #otp=\"ngModel\" required>\n                    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n                    <mat-hint class=\"err-msg\" *ngIf=\"otp.errors?.required && otp.touched\">\n                      Otp is required.\n                    </mat-hint>\n                  </mat-form-field>\n\n                  <mat-form-field appearance=\"outline\" *ngIf=\"emailSubmit\">\n                    <mat-label>Password</mat-label>\n                    <input matInput placeholder=\"Enter Generate Password\" [(ngModel)]=\"forgetPasswordData.password\" type=\"text\" name=\"password\"\n                    #password=\"ngModel\" required>\n                    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n                    <mat-hint class=\"err-msg\" *ngIf=\"password.errors?.required && password.touched\">\n                      Password is required.\n                    </mat-hint>\n                  </mat-form-field>\n\n              </mat-card-content>\n            \n              <div class=\"text-center\" *ngIf=\"!emailSubmit\">\n                <button mat-raised-button color=\"primary\" [disabled]=\"email.invalid\"\n                (click)=\"checkUserAndGenerateOtp(forgetFormData)\">Genrate Otp</button>\n              </div>\n              <div class=\"text-center\" *ngIf=\"emailSubmit\">\n                <button mat-raised-button color=\"primary\" [disabled]=\"forgetFormData.form.invalid\"\n                (click)=\"checkOtpValidate(forgetFormData)\">Change Password</button>\n              </div>\n              <div class=\"text-right\">\n                <button mat-button color=\"primary\" (click)=\"resetForm(forgetFormData)\">Reset Form</button>\n                <button mat-button color=\"primary\" [routerLink]=\"['authPage']\">go to login page ?</button>\n              </div>\n            </form>\n          </mat-card>\n          \n        </mat-tab>\n      </mat-tab-group>\n\n    \n\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/user-management/forget-password/forget-password.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/user-management/forget-password/forget-password.component.ts ***!
  \******************************************************************************/
/*! exports provided: ForgetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function() { return ForgetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");




var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent(_snackBar, auth) {
        this._snackBar = _snackBar;
        this.auth = auth;
        this.forgetPasswordData = { email: "", otp: "", password: "" };
        this.emailSubmit = false;
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgetPasswordComponent.prototype.openSnackBar = function (message, action, duration) {
        var background = "";
        if (action == 'success') {
            background = 'green-snackbar';
        }
        if (action == 'failed') {
            background = 'red-snackbar';
        }
        this._snackBar.open(message, action, {
            duration: duration || 2000,
            panelClass: [background]
        });
    };
    ForgetPasswordComponent.prototype.checkUserAndGenerateOtp = function (forgetFormData) {
        var _this = this;
        console.log(forgetFormData.value);
        var payload = forgetFormData.value;
        this.auth.otpGenerateForForgetPassword(payload).subscribe(function (data) {
            // console.log(data);
            if (data.error) {
                _this.openSnackBar(data.message, 'failed');
            }
            else if (data.error == false && data.status == 200) {
                _this.emailSubmit = true;
                _this.openSnackBar(data.message, 'success');
            }
            else {
                _this.openSnackBar("unkown error", 'failed');
            }
        }, function (error) {
            forgetFormData.reset();
            _this.openSnackBar(error, 'failed');
        });
    };
    ForgetPasswordComponent.prototype.checkOtpValidate = function (forgetFormData) {
        var _this = this;
        var payload = forgetFormData.value;
        this.auth.OtpValidateForForgetPassword(payload).subscribe(function (data) {
            if (data.error) {
                _this.openSnackBar(data.message, 'failed');
            }
            else if (data.error == false && data.status == 200) {
                _this.emailSubmit = false;
                forgetFormData.reset();
                _this.openSnackBar(data.message, 'success');
            }
            else {
                _this.openSnackBar("unkown error", 'failed');
            }
        }, function (error) {
            forgetFormData.reset();
            _this.openSnackBar(error, 'failed');
        });
    };
    ForgetPasswordComponent.prototype.resetForm = function (forgetFormData) {
        forgetFormData.reset();
        // forgetFormData.markAsUntouched()
        this.emailSubmit = false;
    };
    ForgetPasswordComponent.prototype.goToLogin = function () {
    };
    ForgetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forget-password',
            template: __webpack_require__(/*! ./forget-password.component.html */ "./src/app/user-management/forget-password/forget-password.component.html"),
            styles: [__webpack_require__(/*! ./forget-password.component.css */ "./src/app/user-management/forget-password/forget-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user-management/user-management.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/user-management/user-management.module.ts ***!
  \***********************************************************/
/*! exports provided: UserManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementModule", function() { return UserManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/user-management/auth/auth.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_module_angular_material_module_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../angular-material-module/angular-material-module.module */ "./src/app/angular-material-module/angular-material-module.module.ts");
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forget-password/forget-password.component */ "./src/app/user-management/forget-password/forget-password.component.ts");








var UserManagementModule = /** @class */ (function () {
    function UserManagementModule() {
    }
    UserManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
                _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgetPasswordComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material_module_angular_material_module_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModuleModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                // {path:'auth/forget-passwod',component:ForgetPasswordComponent},
                // { path: 'auth/forget-passwod/authPage', redirectTo: 'auth', pathMatch: 'full' },
                ])
            ]
        })
    ], UserManagementModule);
    return UserManagementModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\MeetingPlannerFront\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map