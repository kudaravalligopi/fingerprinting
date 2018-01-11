webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<mat-toolbar color=\"primary\" id=\"#navbar\">\n  <span [routerLink]=\"['']\" class=\"logo-wrapper\">\n    <mat-icon svgIcon=\"lmLogo\" class=\"logo\"></mat-icon>\n\n    <span class=\"logo-text\">Liberty Mutual</span>\n  </span>\n  <span class=\"spacer\"></span>\n  <span>\n    <button style=\"color:white\" mat-button [routerLink]=\"['sources']\" routerLinkActive=\"active-link\">Sources</button>\n    <button style=\"color:white\" mat-button [routerLink]=\"['profiling']\" routerLinkActive=\"active-link\">Profiling</button>\n    <button style=\"color:white\" mat-button [matMenuTriggerFor]=\"menuFingerprint\">Fingerprint</button>\n    <mat-menu #menuFingerprint=\"matMenu\" yPosition=\"below\" [overlapTrigger]=\"false\">\n      <button mat-menu-item [routerLink]=\"['fingerprint']\" routerLinkActive=\"active-link\">Fingerprint Interactive</button>\n      <button mat-menu-item [routerLink]=\"['fingerprint-on-demand']\" routerLinkActive=\"active-link\">Fingerprint On Demand</button>\n    </mat-menu>\n    <button style=\"color:white\" mat-button [matMenuTriggerFor]=\"menuCurate\">Curate</button>\n    <mat-menu #menuCurate=\"matMenu\" yPosition=\"below\" [overlapTrigger]=\"false\">\n      <button mat-menu-item [routerLink]=\"['curate-tag-correction']\" routerLinkActive=\"active-link\">Curate Tag Correction</button>\n      <button mat-menu-item [routerLink]=\"['curate-corpus-correction']\" routerLinkActive=\"active-link\">Curate Corpus Correction</button>\n    </mat-menu>\n    <button style=\"color:white\" mat-button [routerLink]=\"['catalog']\" routerLinkActive=\"active-link\">Catalog</button>\n    <button style=\"color:white\" mat-button [routerLink]=\"['knowledge-graph']\" routerLinkActive=\"active-link\">Knowledge-Graph</button>\n    <button mat-raised-button color=\"primary\" (click)=\"logOut()\">Log Out</button>\n  </span>\n\n</mat-toolbar>\n<router-outlet></router-outlet>\n<div class=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4\" style=\"text-align:center\">\n        <h6>Copyright Liberty Mutual Insurance</h6>\n      </div>\n      <div class=\"col-md-4\">\n\n      </div>\n      <div class=\"col-md-4\" style=\"text-align:center\">\n        <h6>Developed by Team Labrats 2017</h6>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n#navbar {\n  color: white; }\n\n.active-link {\n  background-color: #448AFF !important;\n  color: white !important; }\n\n.logo {\n  font-size: 1.5em !important;\n  width: 1.5em !important;\n  height: 1.5em !important; }\n\n.logo-text {\n  font-family: 'Times New Roman', serif !important;\n  font-size: 1.1em !important;\n  font-weight: 500 !important;\n  color: white !important; }\n\n.logo-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.logo, .logo-text {\n  cursor: pointer; }\n\n.footer {\n  color: white;\n  position: absolute;\n  width: 100%;\n  z-index: 9999;\n  bottom: 0;\n  height: 2em;\n  background-color: #1A237E; }\n\n.row, .col-sm-4 {\n  margin-bottom: 0;\n  padding-bottom: 0; }\n  .row h6, .col-sm-4 h6 {\n    margin-bottom: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = (function () {
    function AppComponent(apiCall, globals, dialog, matIconRegistry, sanitizer, router) {
        this.apiCall = apiCall;
        this.globals = globals;
        this.dialog = dialog;
        this.router = router;
        this.title = 'app';
        matIconRegistry.addSvgIcon('lmLogo', sanitizer.bypassSecurityTrustResourceUrl('assets/lmTool.svg'));
        // this.apiCall.loginCheck().subscribe(data=>{
        // })
    }
    AppComponent.prototype.logOut = function () {
        this.router.navigate(['/logout']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* Globals */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatIconRegistry */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === "function" && _f || Object])
], AppComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_fingerprint_fingerprint_component__ = __webpack_require__("../../../../../src/app/components/fingerprint/fingerprint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_sources_sources_component__ = __webpack_require__("../../../../../src/app/components/sources/sources.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_profiling_profiling_component__ = __webpack_require__("../../../../../src/app/components/profiling/profiling.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_curate_curate_component__ = __webpack_require__("../../../../../src/app/components/curate/curate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_catalog_catalog_component__ = __webpack_require__("../../../../../src/app/components/catalog/catalog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_knowledge_graph_knowledge_graph_component__ = __webpack_require__("../../../../../src/app/components/knowledge-graph/knowledge-graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_configure_source_configure_source_component__ = __webpack_require__("../../../../../src/app/components/configure-source/configure-source.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_fingerprint_on_demand_fingerprint_on_demand_component__ = __webpack_require__("../../../../../src/app/components/fingerprint-on-demand/fingerprint-on-demand.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_form_login_form_login_component__ = __webpack_require__("../../../../../src/app/components/form-login/form-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_output_curate_output_curate_component__ = __webpack_require__("../../../../../src/app/components/output-curate/output-curate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_health_check_prod_health_check_prod_component__ = __webpack_require__("../../../../../src/app/components/health-check-prod/health-check-prod.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_health_check_non_prod_health_check_non_prod_component__ = __webpack_require__("../../../../../src/app/components/health-check-non-prod/health-check-non-prod.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_curate_corpus_correction_curate_corpus_correction_component__ = __webpack_require__("../../../../../src/app/components/curate-corpus-correction/curate-corpus-correction.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Individual Components







//Forms Module

//Http Module For Http requests


//Services

//Angular Material











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_fingerprint_fingerprint_component__["a" /* FingerprintComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_sources_sources_component__["a" /* SourcesComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_profiling_profiling_component__["a" /* ProfilingComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_curate_curate_component__["a" /* CurateComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_catalog_catalog_component__["a" /* CatalogComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_knowledge_graph_knowledge_graph_component__["a" /* KnowledgeGraphComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_configure_source_configure_source_component__["a" /* ConfigureSourceComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_fingerprint_on_demand_fingerprint_on_demand_component__["a" /* FingerprintOnDemandComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_form_login_form_login_component__["a" /* FormLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_output_curate_output_curate_component__["a" /* OutputCurateComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_health_check_prod_health_check_prod_component__["a" /* HealthCheckProdComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_health_check_non_prod_health_check_non_prod_component__["a" /* HealthCheckNonProdComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_curate_corpus_correction_curate_corpus_correction_component__["a" /* CurateCorpusCorrectionComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_16__components_configure_source_configure_source_component__["a" /* ConfigureSourceComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_form_login_form_login_component__["a" /* FormLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_output_curate_output_curate_component__["a" /* OutputCurateComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            //Angular Material Imports
            __WEBPACK_IMPORTED_MODULE_15__material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["f" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["k" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
            //Routings
            __WEBPACK_IMPORTED_MODULE_9__app_routes__["a" /* Routings */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__components_fingerprint_fingerprint_component__["a" /* FingerprintComponent */], __WEBPACK_IMPORTED_MODULE_13__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_20__globals__["a" /* Globals */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_fingerprint_fingerprint_component__ = __webpack_require__("../../../../../src/app/components/fingerprint/fingerprint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_catalog_catalog_component__ = __webpack_require__("../../../../../src/app/components/catalog/catalog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_curate_curate_component__ = __webpack_require__("../../../../../src/app/components/curate/curate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_curate_corpus_correction_curate_corpus_correction_component__ = __webpack_require__("../../../../../src/app/components/curate-corpus-correction/curate-corpus-correction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_knowledge_graph_knowledge_graph_component__ = __webpack_require__("../../../../../src/app/components/knowledge-graph/knowledge-graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_profiling_profiling_component__ = __webpack_require__("../../../../../src/app/components/profiling/profiling.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_sources_sources_component__ = __webpack_require__("../../../../../src/app/components/sources/sources.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_fingerprint_on_demand_fingerprint_on_demand_component__ = __webpack_require__("../../../../../src/app/components/fingerprint-on-demand/fingerprint-on-demand.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");

//Component Declarations









var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'fingerprint', component: __WEBPACK_IMPORTED_MODULE_1__components_fingerprint_fingerprint_component__["a" /* FingerprintComponent */] },
    { path: 'fingerprint-on-demand', component: __WEBPACK_IMPORTED_MODULE_8__components_fingerprint_on_demand_fingerprint_on_demand_component__["a" /* FingerprintOnDemandComponent */] },
    { path: 'catalog', component: __WEBPACK_IMPORTED_MODULE_2__components_catalog_catalog_component__["a" /* CatalogComponent */] },
    { path: 'curate-tag-correction', component: __WEBPACK_IMPORTED_MODULE_3__components_curate_curate_component__["a" /* CurateComponent */] },
    { path: 'curate-corpus-correction', component: __WEBPACK_IMPORTED_MODULE_4__components_curate_corpus_correction_curate_corpus_correction_component__["a" /* CurateCorpusCorrectionComponent */] },
    { path: 'knowledge-graph', component: __WEBPACK_IMPORTED_MODULE_5__components_knowledge_graph_knowledge_graph_component__["a" /* KnowledgeGraphComponent */] },
    { path: 'profiling', component: __WEBPACK_IMPORTED_MODULE_6__components_profiling_profiling_component__["a" /* ProfilingComponent */] },
    { path: 'sources', component: __WEBPACK_IMPORTED_MODULE_7__components_sources_sources_component__["a" /* SourcesComponent */] },
];
var Routings = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/catalog/catalog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <h2 class=\"title\">Smart Data Catalog</h2>\n          <h5 class=\"subtitle\">Experience the power of smart catalogue solution powered by intelligent global search on the lake</h5>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <h2 class=\"title\" style=\"color: #1A237E;opacity: 0.7;font-weight: 300\"> LabRats are architecting the awesomeness – do come back to experience it</h2>\n     \n        </div>\n      </div>\n  \n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/catalog/catalog.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/catalog/catalog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CatalogComponent = (function () {
    function CatalogComponent() {
    }
    CatalogComponent.prototype.ngOnInit = function () {
    };
    return CatalogComponent;
}());
CatalogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-catalog',
        template: __webpack_require__("../../../../../src/app/components/catalog/catalog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/catalog/catalog.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], CatalogComponent);

//# sourceMappingURL=catalog.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/configure-source/configure-source.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Configuration options for {{data.sourceName}} </h4>\n<h5>Source Type: {{data.sourceType}}</h5>"

/***/ }),

/***/ "../../../../../src/app/components/configure-source/configure-source.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/configure-source/configure-source.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigureSourceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

//DialogBox

var ConfigureSourceComponent = (function () {
    function ConfigureSourceComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        console.log(this.data);
    }
    ConfigureSourceComponent.prototype.ngOnInit = function () {
        console.log('Source Name in Dialog ' + this.data.sourceName);
        console.log('Source Name in Dialog ' + this.data.sourceType);
        this.sourceName = this.data.sourceName;
        this.sourceType = this.data.sourceType;
    };
    ConfigureSourceComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    return ConfigureSourceComponent;
}());
ConfigureSourceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-configure-source',
        template: __webpack_require__("../../../../../src/app/components/configure-source/configure-source.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/configure-source/configure-source.component.sass")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */]) === "function" && _a || Object, Object])
], ConfigureSourceComponent);

var _a;
//# sourceMappingURL=configure-source.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/curate-corpus-correction/curate-corpus-correction.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h2 class=\"title\">Curate: Corpus Correction</h2>\n        <h5 class=\"subtitle\">Make changes to the existing auto-tagging corpus.</h5>\n        <health-check-non-prod></health-check-non-prod>\n      </div>\n    </div>\n    <div class=\"row\">\n      <section id=\"inputs\" class=\"col-mat-12\">\n        <form [formGroup]=\"curateCorpusForm\" novalidate>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <mat-form-field>\n                <mat-select placeholder=\"Select Corpus Type\" class=\"fingerprint-select\" autofocus formControlName=\"corpusType\">\n                  <mat-option value=\"distinct-fuzzy\">Distinct Fuzzy</mat-option>\n                  <mat-option value=\"notes\">Notes</mat-option>\n                  <mat-option value=\"developer-notes\">Developer Notes</mat-option>\n                  <mat-option value=\"address\">Address</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n            <div class=\"col-md-3\">\n\n              <mat-form-field>\n                <mat-select placeholder=\"Select Correction Mode\" class=\"fingerprint-select\" formControlName=\"correctionMode\">\n                  <mat-option value=\"overwrite\">Overwrite</mat-option>\n                  <mat-option value=\"append\">Append</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n            <div class=\"col-md-3\">\n              <mat-form-field>\n                <mat-select placeholder=\"Select Destination\" class=\"fingerprint-select\" formControlName=\"destination\">\n                  <mat-option value=\"s3\">S3</mat-option>\n                  <mat-option value=\"hive\">Hive</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n            <div class=\"col-md-3\">\n              <mat-form-field>\n                <mat-select placeholder=\"Select Format\" class=\"fingerprint-select\" autofocus formControlName=\"format\">\n                  <mat-option value=\"csv\">CSV</mat-option>\n                  <mat-option value=\"json\">JSON</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-2\"></div>\n            <div class=\"col-md-8\">\n              <textarea formControlName=\"corpusCorrection\" placeholder=\"Enter Corpus Corrections\" class=\"full-width-textarea\">\n\n              </textarea>\n            </div>\n            <div class=\"col-md-2\"></div>\n          </div>\n        </form>\n      </section>\n    </div>\n    <div class=\"row\" *ngIf=\"showProgressSpinner\">\n      <div class=\"col-sm-12\">\n        <mat-progress-spinner mode=\"indeterminate\" color=\"primary\" [strokeWidth]=\"5\" style=\"margin: 0 auto\"></mat-progress-spinner>\n      </div>\n    </div>\n    <div class=\"row\">\n      <section id=\"outputs\" class=\"col-mat-12\">\n        <div id=\"buttonsOP\">\n          <button mat-raised-button color=\"accent\" (click)=\"submitTag()\">Submit Tag Corrections</button>\n          <button mat-raised-button color=\"accent\" disabled>Tag in Atlas</button>\n        </div>\n      </section>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/curate-corpus-correction/curate-corpus-correction.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#buttonsOP {\n  width: 50vh;\n  margin: 0 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/curate-corpus-correction/curate-corpus-correction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurateCorpusCorrectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //Handling Received Data


var CurateCorpusCorrectionComponent = (function () {
    function CurateCorpusCorrectionComponent(api) {
        this.api = api;
        this.title = 'Curate: Corpus Correction';
    }
    CurateCorpusCorrectionComponent.prototype.ngOnInit = function () {
        this.corpusType = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required);
        this.correctionMode = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required);
        this.destination = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required);
        this.format = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required);
        this.corpusCorrection = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required);
        this.curateCorpusForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormGroup */]({
            corpusType: this.corpusType,
            correctionMode: this.correctionMode,
            destination: this.destination,
            format: this.format,
            corpusCorrection: this.corpusCorrection
        });
    };
    CurateCorpusCorrectionComponent.prototype.submitTag = function () {
        console.log(this.curateCorpusForm.value);
    };
    return CurateCorpusCorrectionComponent;
}());
CurateCorpusCorrectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-curate-corpus-correction',
        template: __webpack_require__("../../../../../src/app/components/curate-corpus-correction/curate-corpus-correction.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/curate-corpus-correction/curate-corpus-correction.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], CurateCorpusCorrectionComponent);

var _a;
//# sourceMappingURL=curate-corpus-correction.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/curate/curate.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<h2 class=\"title\">Curate: Tag Correction</h2>\n\t\t\t\t<h5 class=\"subtitle\">Make curated tag entries into the ops_table and subsequently re-tag in Atlas.</h5>\n\t\t\t\t<health-check-non-prod></health-check-non-prod>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<section id=\"inputs\" class=\"col-mat-12\">\n\t\t\t\t<form [formGroup]=\"curateForm\" novalidate>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<mat-select placeholder=\"Select Data Zone\" class=\"fingerprint-select\" autofocus formControlName=\"zoneName\">\n\t\t\t\t\t\t\t<mat-option *ngFor=\"let zone of zones\" [value]=\"zone \" (click)=\"selectZone(zone)\">{{zone}}</mat-option>\n\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<mat-select placeholder=\"Select DB/Source\" class=\"fingerprint-select\" formControlName=\"sourceName\">\n\t\t\t\t\t\t\t<mat-option *ngFor=\"let source of sourceNames\" [value]=\"source\" (click)=\"selectSource(source)\">{{source}}</mat-option>\n\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<mat-select placeholder=\"Select Data Table\" class=\"fingerprint-select\" formControlName=\"tableName\">\n\t\t\t\t\t\t\t<mat-option *ngFor=\"let table of tableNames\" [value]=\"table\" (click)=\"selectTable(table)\">{{table}}</mat-option>\n\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<mat-select placeholder=\"Select Data Column\" class=\"fingerprint-select\" formControlName=\"columnName\">\n\t\t\t\t\t\t\t<mat-option *ngFor=\"let column of columnNames\" [value]=\"column\" (click)=\"selectColumn(column)\">{{column}}</mat-option>\n\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<br>\n\t\t\t\t\t<div *ngIf=\"columnSelected\">\n\t\t\t\t\t\t<div formArrayName=\"tagInfo\">\n\t\t\t\t\t\t\t<div *ngFor=\"let tags of curateForm.controls.tagInfo.controls; let i = index\">\n\t\t\t\t\t\t\t\t<div [formGroupName]=\"i\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t\t\t\t\t<button mat-mini-fab color=\"accent\" (click)=\"addNewTag()\" style=\"color: white\" *ngIf=\"curateForm.controls.tagInfo.controls.length < 3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon>add</mat-icon>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t\t\t\t\t<button mat-mini-fab color=\"accent\" (click)=\"removeTag(i)\" *ngIf=\"curateForm.controls.tagInfo.controls.length > 1\" style=\"color: white\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon>remove</mat-icon>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-5\">\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-select placeholder=\"Select Tag Type\" formControlName=\"tagType\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let tag of tagTypes\" [value]=\"tag\" (click)=\"selectTag(tag,i)\">{{tag}}</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-5\">\n\t\t\t\t\t\t\t\t\t\t\t<!-- MIO -->\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field *ngIf=\"tagID == 'MIO'\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-select placeholder=\"Select Tag Category\" formControlName=\"tagCategory\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let tagC of tagCategories[i]\" [value]=\"tagC\" (click)=\"selectTagCategory(tagC)\">{{tagC}}</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field *ngIf=\"tagID == 'SEC'\">\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- SEC -->\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-select placeholder=\"Select Tag Category\" formControlName=\"tagCategory\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let tagD of tagCategories[i]\" [value]=\"tagD\" (click)=\"selectTagCategory(tagD)\">{{tagD}}</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- DOM -->\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field *ngIf=\"tagID == 'DOM'\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-select placeholder=\"Select Tag Category\" formControlName=\"tagCategory\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let tagDOM of tagCategories[i]\" [value]=\"tagDOM\" (click)=\"selectTagCategory(tagDOM)\">{{tagDOM}}</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</section>\n\t\t\t<!-- <pre>{{curateForm.value | json}}</pre> -->\n\t\t</div>\n\t\t<div class=\"row\" *ngIf=\"showProgressSpinner\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<mat-progress-spinner mode=\"indeterminate\" color=\"primary\" [strokeWidth]=\"5\" style=\"margin: 0 auto\"></mat-progress-spinner>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<section id=\"outputs\" class=\"col-mat-12\">\n\t\t\t\t<div id=\"buttonsOP\">\n\t\t\t\t\t<button mat-raised-button color=\"accent\" (click)=\"submitTag()\">Submit Tag Corrections</button>\n\t\t\t\t\t<button mat-raised-button color=\"accent\" disabled>Tag in Atlas</button>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/curate/curate.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section#inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  text-align: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-top: 1em;\n  padding-bottom: 1em; }\n  section#inputs form {\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center; }\n    section#inputs form .fingerprint-select {\n      margin-left: 1.5em; }\n      section#inputs form .fingerprint-select:first-child {\n        margin-left: auto; }\n    section#inputs form button {\n      margin-top: 1em; }\n\nsection#outputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  section#outputs #outputBox {\n    width: 95%;\n    margin-bottom: 1.5em; }\n    section#outputs #outputBox h4 {\n      opacity: 0.5;\n      font-weight: 900; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/curate/curate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //Handling Received Data


var CurateComponent = (function () {
    function CurateComponent(api, formBuilder) {
        this.api = api;
        this.formBuilder = formBuilder;
        this.title = "Curate";
        this.fingerprintDataAcquired = false;
        this.showProgressSpinner = false;
        this.zones = [];
        this.sourceNames = [];
        this.tableNames = [];
        this.columnNames = [];
        this.columnSelected = false;
        this.tagCategories = [];
    }
    CurateComponent.prototype.ngOnInit = function () {
        this.MIOCategories = [
            "DISABLED_CORRECTION",
            "MIO-INTERNAL_USE",
            "MIO-PUBLIC",
            "MIO-RESTRICTED_AND_CONFIDENTIAL",
            "MIO-OTHER_CONFIDENTIAL"
        ];
        this.SECCategories = [
            "DISABLED_CORRECTION",
            "SEC-AGE",
            "SEC-DATE_OF_BIRTH",
            "SEC-DATE_OF_DEATH",
            "SEC-SSN",
            "SEC-NOTES",
            "SEC-ACCOUNT_NUMBER",
            "SEC-CLAIM_DATE",
            "SEC-EMAIL",
            "SEC-PASSWORD",
            "SEC-FULL_NAME",
            "SEC-COMMISSIONS",
            "SEC-TIN",
            "SEC-LAST_NAME",
            "SEC-ACCT_NUM",
            "SEC-MIDDLE_NAME",
            "SEC-LOGIN",
            "SEC-PHI"
        ];
        this.DOMCategories = [
            "DISABLED_CORRECTION",
            "DOM-BILLING",
            "DOM-CLAIMS",
            "DOM-CUSTOMER",
            "DOM-GEOGRAPHIC_AREA",
            "DOM-COMMUNICATION"
        ];
        this.getZones();
        this.createFormControls();
        this.createForm();
    };
    CurateComponent.prototype.makeArray = function (obj) {
        if (!Array.isArray(obj)) {
            return [obj];
        }
        else {
            return obj;
        }
    };
    //to get all zones on initialize of component
    CurateComponent.prototype.getZones = function () {
        this.zones = this.api.getZones();
    };
    CurateComponent.prototype.createForm = function () {
        this.curateForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormGroup */]({
            zoneName: this.zoneName,
            sourceName: this.sourceName,
            tableName: this.tableName,
            columnName: this.columnName,
            tagInfo: this.formBuilder.array([
                this.initTagInfo()
            ])
        });
    };
    CurateComponent.prototype.createFormControls = function () {
        this.zoneName = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required);
        this.sourceName = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required);
        this.tableName = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required);
        this.columnName = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required);
    };
    //Adding and removing new tags
    CurateComponent.prototype.initTagInfo = function () {
        return this.formBuilder.group({
            tagType: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required],
            tagCategory: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required]
        });
    };
    CurateComponent.prototype.addNewTag = function () {
        var tagInfo = this.curateForm.controls['tagInfo'];
        tagInfo.push(this.initTagInfo());
    };
    CurateComponent.prototype.removeTag = function (i) {
        var tagInfo = this.curateForm.controls['tagInfo'];
        tagInfo.removeAt(i);
    };
    CurateComponent.prototype.selectZone = function (zoneName) {
        var _this = this;
        this.sourceNames = [];
        this.selectedZone = zoneName;
        this.api
            .selectZone(this.selectedZone)
            .subscribe(function (sources) {
            _this.sources = sources;
            console.log(sources);
            _this.sourceNames = sources["databases"];
            console.log(_this.sourceNames);
        });
    };
    CurateComponent.prototype.selectSource = function (sourceName) {
        var _this = this;
        console.log('Select Source clicked with source name as ' + sourceName);
        this.tableNames = [];
        this.selectedSource = sourceName;
        this.api
            .selectSource(this.selectedSource, this.selectedZone)
            .subscribe(function (tables) {
            _this.tables = tables;
            console.log(tables);
            console.log(typeof (tables));
            _this.tableNames = tables["tables"];
            console.log(_this.tableNames);
            _this.tableNames.sort();
        });
    };
    CurateComponent.prototype.selectTable = function (tableName) {
        var _this = this;
        console.log('Select Table clicked with table name as ' + tableName + ' & source name as ' + this.selectedSource + ' & zone name as ' + this.selectedZone);
        this.columnNames = [];
        this.selectedTable = tableName;
        this.api
            .selectTable(this.selectedTable, this.selectedSource, this.selectedZone)
            .subscribe(function (columns) {
            _this.columns = columns;
            console.log(columns);
            console.log(typeof (columns));
            _this.columnNames = columns["columns"];
            console.log(_this.columnNames);
            _this.columnNames.sort();
        });
    };
    CurateComponent.prototype.selectColumn = function (columnName) {
        this.selectedColumns = columnName;
        this.tagTypes = ['MIO', 'SEC', 'DOM'];
        this.columnSelected = true;
    };
    CurateComponent.prototype.selectTag = function (tagType, index) {
        this.tagID = tagType;
        console.log("TAG TYPE IS " + this.tagID);
        if (this.tagCategories[index] == null || this.tagCategories[index] == undefined)
            switch (tagType) {
                case 'MIO': {
                    this.tagCategories.push(this.MIOCategories);
                    break;
                }
                case 'SEC': {
                    this.tagCategories.push(this.SECCategories);
                    break;
                }
                case 'DOM': {
                    this.tagCategories.push(this.DOMCategories);
                    break;
                }
            }
        console.log("tag categories are");
        console.log(this.tagCategories);
    };
    CurateComponent.prototype.selectTagCategory = function (tagCategory) {
        console.log("TAG CATEGORY IS " + tagCategory);
    };
    CurateComponent.prototype.submitTag = function () {
        var sendOP = this.curateForm.value;
        console.log(sendOP);
        this.api.submitTagCorrections(sendOP).subscribe(function (data) {
            console.log(data);
            console.log(data["Status_Message"]);
            window.alert(data["Status_Message"]);
        });
    };
    CurateComponent.prototype.reset = function () {
        this.fingerprintDataAcquired = false;
    };
    return CurateComponent;
}());
CurateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-curate',
        template: __webpack_require__("../../../../../src/app/components/curate/curate.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/curate/curate.component.sass")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */]) === "function" && _b || Object])
], CurateComponent);

var _a, _b;
//# sourceMappingURL=curate.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/fingerprint-on-demand/fingerprint-on-demand.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h2 class=\"title\">On-demand Fingerprinting</h2>\n        <h5 class=\"subtitle\">Kick start NiFi flows on-demand in batch (or) incremental mode to generate bulk predictions, associate tags and apply\n          masking policies.\n        </h5>\n        <health-check-non-prod></health-check-non-prod>\n      </div>\n    </div>\n    <form [formGroup]=\"fingerprintOnDemandForm\" novalidate>\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <mat-form-field>\n            <span matTooltip=\"Select Zone Name\" matTooltipPosition=\"above\">\n              <mat-select placeholder=\"Select Data Zone\" autofocus formControlName=\"zoneName\">\n                <mat-option *ngFor=\"let zone of zones\" [value]=\"zone\" (click)=\"selectZone(zone)\">{{zone}}</mat-option>\n              </mat-select>\n            </span>\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-3\">\n          <mat-form-field>\n            <mat-select placeholder=\"Select DB/Source\" formControlName=\"sourceName\">\n              <mat-option *ngFor=\"let source of sourceNames\" [value]=\"source\" (click)=\"selectSource(source)\">{{source}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-3\">\n          <mat-form-field>\n            <mat-select placeholder=\"Select Data Table\" formControlName=\"tableName\">\n              <mat-option value=\"allTables\">All Tables</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-3\">\n          <mat-form-field>\n            <mat-select placeholder=\"Select Data Columns\" formControlName=\"columnName\">\n              <mat-option value=\"allColumns\">All Columns</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n      </div>\n\n\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <mat-form-field class=\"block-margin\">\n            <mat-select placeholder=\"Select Fingerprint Type\" class=\"fingerprint-select\" formControlName=\"fingerprintType\">\n              <mat-option value=\"batch\">Batch Mode</mat-option>\n              <mat-option value=\"incremental\">Incremental</mat-option>\n              <mat-option value=\"custom\">Custom</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n      </div>\n      <!-- Button Row 1 -->\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <button mat-raised-button color=\"accent\" [disabled]=\"fingerprintFlowStatus\" class=\"block-margin\">Start Prediction Flow</button>\n        </div>\n        <div class=\"col-md-4\">\n          <button mat-raised-button color=\"accent\" [disabled]=\"fingerprintFlowStatus\" class=\"block-margin\">Start Tagging Flow</button>\n        </div>\n        <div class=\"col-md-4\">\n          <button mat-raised-button color=\"accent\" [disabled]=\"fingerprintFlowStatus\" class=\"block-margin\">Start Policy Creation Flow</button>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n\n        </div>\n        <div class=\"col-md-4\" style=\"text-align: center\">\n          <mat-slide-toggle color=\"accent\" (change)=\"slideToggle($event)\">\n            Toggle Fingerprint Flow\n          </mat-slide-toggle>\n        </div>\n        <div class=\"col-md-4\">\n\n        </div>\n\n      </div>\n      <!-- Button & Slider Row 1 -->\n      <div class=\"row\">\n        <div class=\"col-md-2\">\n\n        </div>\n        <div class=\"col-md-4\">\n          <button mat-raised-button color=\"accent\" [disabled]=\"!fingerprintFlowStatus\" class=\"block-margin\" (click)=\"fingerprintFlow('start')\">Start Fingerprint Flow</button>\n          <div class=\"mini-space\"></div>\n          <button mat-mini-fab color=\"warn\" [disabled]=\"!fingerprintFlowStatus && !fingerprintFlowOn\" class=\"block-margin\" (click)=\"fingerprintFlow('stop')\">\n            <mat-icon>stop</mat-icon>\n          </button>\n        </div>\n        <div class=\"col-md-4\">\n          <button mat-raised-button color=\"accent\" class=\"block-margin\" disabled>Start Tag Correction Flow</button>\n          <div class=\"mini-space\"></div>\n          <button mat-mini-fab color=\"warn\" class=\"block-margin\" disabled>\n            <mat-icon>stop</mat-icon>\n          </button>\n        </div>\n\n        <div class=\"col-md-2\">\n\n        </div>\n\n      </div>\n      <!-- Button & Slider Row 2 -->\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n\n        </div>\n        <div class=\"col-md-4\">\n\n        </div>\n        <div class=\"col-md-4\">\n\n        </div>\n\n      </div>\n\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/fingerprint-on-demand/fingerprint-on-demand.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mini-space {\n  height: 0.5em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/fingerprint-on-demand/fingerprint-on-demand.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FingerprintOnDemandComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //Handling Received Data


var FingerprintOnDemandComponent = (function () {
    function FingerprintOnDemandComponent(api) {
        this.api = api;
        this.title = "FingerPrint";
        this.fingerprintDataAcquired = false;
        this.showProgressSpinner = false;
        this.zones = [];
        this.sourceNames = [];
        this.tableNames = [];
        this.columnNames = [];
        this.selectedMultipleColumns = [];
        this.fingerprintFlowStatus = false;
        this.fingerprintFlowOn = false;
    }
    FingerprintOnDemandComponent.prototype.ngOnInit = function () {
        this.getZones();
        this.createFormControls();
        this.createForm();
    };
    //Populate Selects
    //to get all zones on initialize of component
    FingerprintOnDemandComponent.prototype.getZones = function () {
        this.zones = this.api.getZones();
    };
    FingerprintOnDemandComponent.prototype.selectZone = function (zoneName) {
        var _this = this;
        this.sourceNames = [];
        this.selectedZone = zoneName;
        this.api
            .selectZone(this.selectedZone)
            .subscribe(function (sources) {
            _this.sources = sources;
            console.log(sources);
            console.log(typeof (sources));
            _this.sourceNames = sources["databases"];
            console.log(_this.sourceNames);
        });
    };
    FingerprintOnDemandComponent.prototype.selectSource = function (sourceName) {
        var _this = this;
        console.log('Select Source clicked with source name as ' + sourceName);
        this.tableNames = [];
        this.selectedSource = sourceName;
        this.api
            .selectSource(this.selectedSource, this.selectedZone)
            .subscribe(function (tables) {
            _this.tables = tables;
            console.log(tables);
            console.log(typeof (tables));
            _this.tableNames = tables["tables"];
            console.log(_this.tableNames);
            _this.tableNames.sort();
        });
    };
    //Form Controls
    FingerprintOnDemandComponent.prototype.createFormControls = function () {
        this.zoneName = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required]);
        this.sourceName = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required]);
        this.tableName = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required]);
        this.columnName = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required]);
        this.fingerprintType = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required]);
    };
    FingerprintOnDemandComponent.prototype.createForm = function () {
        this.fingerprintOnDemandForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormGroup */]({
            zoneName: this.zoneName,
            sourceName: this.sourceName,
            tableName: this.tableName,
            columnName: this.columnName,
            fingerprintType: this.fingerprintType
        });
    };
    FingerprintOnDemandComponent.prototype.slideToggle = function (e) {
        this.fingerprintFlowStatus = !this.fingerprintFlowStatus;
    };
    FingerprintOnDemandComponent.prototype.fingerprintFlow = function (status) {
        var op = this.fingerprintOnDemandForm.value;
        console.log(op);
        this.fingerprintFlowOn = !this.fingerprintFlowOn;
        this.api.fingerprintFlow(op, status).subscribe(function (data) {
            console.log(data);
        });
    };
    return FingerprintOnDemandComponent;
}());
FingerprintOnDemandComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-fingerprint-on-demand',
        template: __webpack_require__("../../../../../src/app/components/fingerprint-on-demand/fingerprint-on-demand.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/fingerprint-on-demand/fingerprint-on-demand.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], FingerprintOnDemandComponent);

var _a;
//# sourceMappingURL=fingerprint-on-demand.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/fingerprint/fingerprint.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h2 class=\"title\">Interactive Fingerprinting</h2>\n        <h5 class=\"subtitle\">Invoke serverless ML models to generate and inspect tag predictions for the attributes of your choice.\n        </h5>\n        <health-check-non-prod></health-check-non-prod>\n      </div>\n    </div>\n    <div class=\"row\">\n      <section id=\"inputs\" class=\"col-mat-12\">\n        <form [formGroup]=\"fingerprintForm\" novalidate (ngSubmit)=\"fingerprint()\">\n          <mat-form-field>\n            <mat-select placeholder=\"Select Data Zone\" class=\"fingerprint-select\" autofocus formControlName=\"zoneName\">\n              <mat-option *ngFor=\"let zone of zones\" [value]=\"zone\" (click)=\"selectZone(zone)\">{{zone}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-select placeholder=\"Select DB/Source\" class=\"fingerprint-select\" formControlName=\"sourceName\">\n              <mat-option *ngFor=\"let source of sourceNames\" [value]=\"source\" (click)=\"selectSource(source)\">{{source}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-select placeholder=\"Select Data Table\" class=\"fingerprint-select\" formControlName=\"tableName\">\n              <mat-option *ngFor=\"let table of tableNames\" [value]=\"table\" (click)=\"selectTable(table)\">{{table}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-select placeholder=\"Select Data Columns\" class=\"fingerprint-select\" multiple formControlName=\"columnName\">\n              <!-- (click)=\"selectColumn(column)\" -->\n              <mat-option *ngFor=\"let column of columnNames\" [value]=\"column\">{{column}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <br>\n          <button mat-raised-button color=\"accent\" type=\"submit\" [ngStyle]=\"{'pointer-events':showProgressSpinner ? 'none' : 'auto'}\"\n            [disabled]=\"fingerprintForm.invalid\">Fingerprint Data</button>\n        </form>\n      </section>\n    </div>\n    <div class=\"row\" *ngIf=\"showProgressSpinner\">\n      <div class=\"col-sm-12\">\n        <mat-progress-spinner mode=\"indeterminate\" color=\"primary\" [strokeWidth]=\"5\" style=\"margin: 0 auto\"></mat-progress-spinner>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"fingerprintDataAcquired\">\n      <section id=\"outputs\" class=\"col-mat-12\">\n        <div id=\"outputBox\">\n          <pre class=\"opBox\">{{fingerprintData | json}}</pre>\n        </div>\n\n        <div id=\"buttonsOP\">\n          <button mat-raised-button color=\"accent\" (click)=\"reset()\">Reset</button>\n          <button mat-raised-button color=\"accent\">Export</button>\n        </div>\n      </section>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/fingerprint/fingerprint.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section#inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  text-align: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-top: 1em;\n  padding-bottom: 1em; }\n  section#inputs form {\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center; }\n    section#inputs form .fingerprint-select {\n      margin-left: 1.5em; }\n      section#inputs form .fingerprint-select:first-child {\n        margin-left: auto; }\n    section#inputs form button {\n      margin-top: 1em; }\n\nsection#outputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  section#outputs #outputBox {\n    width: 95%;\n    margin-bottom: 1.5em; }\n    section#outputs #outputBox h4 {\n      opacity: 0.5;\n      font-weight: 900; }\n    section#outputs #outputBox .opBox {\n      max-height: 30vh;\n      overflow-y: scroll; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/fingerprint/fingerprint.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FingerprintComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //Handling Received Data


var FingerprintComponent = (function () {
    function FingerprintComponent(api) {
        this.api = api;
        this.title = "FingerPrint";
        this.fingerprintDataAcquired = false;
        this.showProgressSpinner = false;
        this.zones = [];
        this.sourceNames = [];
        this.tableNames = [];
        this.columnNames = [];
        this.selectedMultipleColumns = [];
    }
    FingerprintComponent.prototype.ngOnInit = function () {
        this.getZones();
        this.createFormControls();
        this.createForm();
    };
    //to get all zones on initialize of component
    FingerprintComponent.prototype.getZones = function () {
        this.zones = this.api.getZones();
    };
    FingerprintComponent.prototype.createFormControls = function () {
        this.zoneName = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required]);
        this.sourceName = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required]);
        this.tableName = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required]);
        this.columnName = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required]);
    };
    FingerprintComponent.prototype.createForm = function () {
        this.fingerprintForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormGroup */]({
            zoneName: this.zoneName,
            sourceName: this.sourceName,
            tableName: this.tableName,
            columnName: this.columnName
        });
    };
    FingerprintComponent.prototype.selectZone = function (zoneName) {
        var _this = this;
        this.sourceNames = [];
        this.selectedZone = zoneName;
        this.api.selectZone(this.selectedZone)
            .subscribe(function (sources) {
            _this.sources = sources;
            console.log(sources);
            _this.sourceNames = sources["databases"];
            console.log(_this.sourceNames);
        });
    };
    FingerprintComponent.prototype.selectSource = function (sourceName) {
        var _this = this;
        console.log('Select Source clicked with source name as ' + sourceName);
        this.tableNames = [];
        this.selectedSource = sourceName;
        this.api
            .selectSource(this.selectedSource, this.selectedZone)
            .subscribe(function (tables) {
            _this.tables = tables;
            console.log(tables);
            _this.tableNames = tables["tables"];
            console.log(_this.tableNames);
            _this.tableNames.sort();
        });
    };
    FingerprintComponent.prototype.selectTable = function (tableName) {
        var _this = this;
        console.log('Select Table clicked with table name as ' + tableName + ' & source name as ' + this.selectedSource + ' & zone name as ' + this.selectedZone);
        this.columnNames = [];
        this.selectedTable = tableName;
        this.api
            .selectTable(this.selectedTable, this.selectedSource, this.selectedZone)
            .subscribe(function (columns) {
            _this.columns = columns;
            console.log(columns);
            _this.columnNames = columns["columns"];
            console.log(_this.columnNames);
            _this.columnNames.sort();
        });
    };
    FingerprintComponent.prototype.fingerprint = function () {
        var _this = this;
        this.showProgressSpinner = true;
        this.fingerprintData = {};
        this.fingerprintDataAcquired = false;
        var sendOP = this.fingerprintForm.value;
        var zName = sendOP.zoneName;
        var sName = sendOP.sourceName;
        var tName = sendOP.tableName;
        var cName = sendOP.columnName;
        try {
            this.api.fingerprint(cName, tName, sName, zName).subscribe(function (data) {
                console.log(data);
                _this.fingerprintData = data;
                _this.showProgressSpinner = false;
                _this.fingerprintDataAcquired = true;
            });
        }
        catch (err) {
            console.log("Error in Fingerprint Call " + err);
        }
    };
    FingerprintComponent.prototype.reset = function () {
        this.fingerprintData = {};
        this.fingerprintDataAcquired = false;
    };
    return FingerprintComponent;
}());
FingerprintComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-fingerprint',
        template: __webpack_require__("../../../../../src/app/components/fingerprint/fingerprint.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/fingerprint/fingerprint.component.sass")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], FingerprintComponent);

var _a;
//# sourceMappingURL=fingerprint.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/form-login/form-login.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"form-title\">Login</h3>\n<form [formGroup]=\"loginForm\" novalidate (ngSubmit) = \"login()\">     \n  <mat-form-field class=\"full-width\">\n    <input matInput type=\"text\" placeholder=\"User Name\" formControlName = \"username\" [ngClass]=\"{'input-valid':username.valid && username.touched}\" name=\"username\"/>\n    <mat-icon matSuffix color=\"primary\" *ngIf=\"username.invalid && username.touched\">error_outline</mat-icon>\n  </mat-form-field>\n  <mat-form-field class=\"full-width\">\n    <input matInput type=\"password\" placeholder=\"Password\" formControlName = \"password\" [ngClass]=\"{'input-valid':password.valid && password.touched}\" password=\"password\"/>\n    <mat-icon matSuffix color=\"primary\" *ngIf=\"password.invalid && password.touched\">error_outline</mat-icon>\n  </mat-form-field>\n  <button mat-raised-button color=\"primary\" type=\"submit\" [ngClass]=\"{'form-valid':loginForm.valid, 'form-invalid':loginForm.invalid}\">Submit</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/form-login/form-login.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/form-login/form-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




//Call API

var FormLoginComponent = FormLoginComponent_1 = (function () {
    function FormLoginComponent(dialogRef, globals, formBuilder, apiCall, data) {
        this.dialogRef = dialogRef;
        this.globals = globals;
        this.formBuilder = formBuilder;
        this.apiCall = apiCall;
        this.data = data;
        this.component = FormLoginComponent_1;
    }
    FormLoginComponent.prototype.ngOnInit = function () {
        // console.log(`called by ${this.data.title}`);
        //place to initialize form
        this.createFormControls();
        this.createForm();
    };
    FormLoginComponent.prototype.createFormControls = function () {
        this.username = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].minLength(1)]),
            this.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].minLength(1)]);
    };
    FormLoginComponent.prototype.createForm = function () {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormGroup */]({
            username: this.username,
            password: this.password
        });
    };
    FormLoginComponent.prototype.login = function () {
        var _this = this;
        // this.apiCall.login()
        this.apiCall.login(this.loginForm.value).subscribe(function (data) {
            _this.globals.loggedIn = true;
            _this.dialogRef.close();
        });
    };
    return FormLoginComponent;
}());
FormLoginComponent = FormLoginComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-form-login',
        template: __webpack_require__("../../../../../src/app/components/form-login/form-login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/form-login/form-login.component.sass")]
    }),
    __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__globals__["a" /* Globals */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_api_service__["a" /* ApiService */]) === "function" && _d || Object, Object])
], FormLoginComponent);

var FormLoginComponent_1, _a, _b, _c, _d;
//# sourceMappingURL=form-login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/health-check-non-prod/health-check-non-prod.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <select style=\"display: block; margin: 0 auto\">\n                <option value=\"np\">NP</option>\n                <option value=\"ps\">PS</option>\n                <option value=\"p\">P</option>\n            </select>\n        </div>\n    </div>\n</div>\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n        </div>\n        <div class=\"col-md-4\">\n            <div class=\"center-align\">\n                <span class=\"offline\">HDF</span>&nbsp;\n                <button class=\"health-check\" (click)=\"getTimeStamp()\">Health Check</button>&nbsp;\n                <span class=\"online\">HDP</span>\n            </div>\n        </div>\n        <div class=\"col-md-4\">\n        </div>\n    </div>\n</div>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\" style=\"text-align: center; font-size: 0.7em\">\n            {{timeStamp}}\n        </div>\n    </div>\n</div>\n\n\n\n<!-- <mat-form-field>\n        <mat-select placeholder=\"Env\">\n            <mat-option value=\"np\">NP</mat-option>\n            <mat-option value=\"ps\">PS</mat-option>\n            <mat-option value=\"p\">P</mat-option>\n        </mat-select>\n    </mat-form-field> -->\n\n<!-- formControlName=\"sourceName\" -->"

/***/ }),

/***/ "../../../../../src/app/components/health-check-non-prod/health-check-non-prod.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".health-check {\n  border: 1px solid #03A9F4;\n  background: transparent;\n  font-size: 0.8em;\n  text-transform: uppercase;\n  padding: 0.3em;\n  color: #03a9f4;\n  transition: all 0.2s linear; }\n  .health-check:hover {\n    background-color: #03a9f4;\n    color: white; }\n\n.online {\n  background-color: green; }\n\n.offline {\n  background-color: red; }\n\n.online, .offline {\n  font-weight: 300;\n  color: white;\n  padding: 0.25em;\n  padding-left: 0.4em;\n  padding-right: 0.4em; }\n\n.center-align {\n  margin: 0 auto;\n  text-align: center; }\n\nselect {\n  border: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/health-check-non-prod/health-check-non-prod.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HealthCheckNonProdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HealthCheckNonProdComponent = (function () {
    function HealthCheckNonProdComponent() {
    }
    HealthCheckNonProdComponent.prototype.ngOnInit = function () {
        this.getTimeStamp();
    };
    HealthCheckNonProdComponent.prototype.getTimeStamp = function () {
        // Date HH MM SS
        var now = new Date();
        this.timeStamp = now.toUTCString();
    };
    return HealthCheckNonProdComponent;
}());
HealthCheckNonProdComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'health-check-non-prod',
        template: __webpack_require__("../../../../../src/app/components/health-check-non-prod/health-check-non-prod.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/health-check-non-prod/health-check-non-prod.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], HealthCheckNonProdComponent);

//# sourceMappingURL=health-check-non-prod.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/health-check-prod/health-check-prod.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  health-check-prod works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/health-check-prod/health-check-prod.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/health-check-prod/health-check-prod.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HealthCheckProdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HealthCheckProdComponent = (function () {
    function HealthCheckProdComponent() {
    }
    HealthCheckProdComponent.prototype.ngOnInit = function () {
    };
    return HealthCheckProdComponent;
}());
HealthCheckProdComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-health-check-prod',
        template: __webpack_require__("../../../../../src/app/components/health-check-prod/health-check-prod.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/health-check-prod/health-check-prod.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], HealthCheckProdComponent);

//# sourceMappingURL=health-check-prod.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/assets/home.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "home.79f9eaf2b564a3e4965e.png";

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n          <h1 class=\"title home-color\">P O L Y G O N</h1>\n          <h5 class=\"subtitle\">Connect the dots and close the loop.\n          </h5>\n        \n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n          <div class=\"home-img\"></div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.sass":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home-img {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/app/components/home/assets/home.png")) + ");\n  width: 100%;\n  height: 60vh;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: contain; }\n\n.home-color {\n  color: #03A9F4 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/knowledge-graph/knowledge-graph.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h2 class=\"title\">Knowledge Graph</h2>\n        <h5 class=\"subtitle\">Connect the dots and stay happy - lineage, relationships and metadata.\n        </h5>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h2 class=\"title\" style=\"color: #1A237E;opacity: 0.7;font-weight: 300\"> LabRats are architecting the awesomeness – do come back to experience it</h2>\n   \n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/knowledge-graph/knowledge-graph.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/knowledge-graph/knowledge-graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KnowledgeGraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KnowledgeGraphComponent = (function () {
    function KnowledgeGraphComponent() {
    }
    KnowledgeGraphComponent.prototype.ngOnInit = function () {
    };
    return KnowledgeGraphComponent;
}());
KnowledgeGraphComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-knowledge-graph',
        template: __webpack_require__("../../../../../src/app/components/knowledge-graph/knowledge-graph.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/knowledge-graph/knowledge-graph.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], KnowledgeGraphComponent);

//# sourceMappingURL=knowledge-graph.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/output-curate/output-curate.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  output-curate works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/output-curate/output-curate.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/output-curate/output-curate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutputCurateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OutputCurateComponent = (function () {
    function OutputCurateComponent() {
    }
    OutputCurateComponent.prototype.ngOnInit = function () {
    };
    return OutputCurateComponent;
}());
OutputCurateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-output-curate',
        template: __webpack_require__("../../../../../src/app/components/output-curate/output-curate.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/output-curate/output-curate.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], OutputCurateComponent);

//# sourceMappingURL=output-curate.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profiling/profiling.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h2 class=\"title\">Data Profiling</h2>\n        <h5 class=\"subtitle\">Take advantage of on-demand profiling of any Datalake table or view for smart exploratory data analysis\n        </h5>\n        <health-check-non-prod></health-check-non-prod>\n      </div>\n    </div>\n\n\n    <form [formGroup]=\"profilingForm\" novalidate>\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <mat-form-field class=\"block-margin\">\n            <mat-select placeholder=\"Select Environment\" autofocus formControlName=\"envName\">\n              <mat-option value=\"prodstage\" (click)=\"getDatabase('prodstage')\">Prod Stage</mat-option>\n              <mat-option value=\"prod\" (click)=\"getDatabase('prod')\">Prod</mat-option>\n              <mat-option value=\"nonprod\" (click)=\"getDatabase('nonprod')\">NP Integration</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-3\">\n          <mat-form-field class=\"block-margin\">\n            <mat-select placeholder=\"Select Database\" autofocus formControlName=\"dbName\">\n              <mat-option *ngFor=\"let db of databases\" [value]=\"db\">{{db}}</mat-option>\n              <!-- <mat-option value=\"otis\">otis</mat-option> -->\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-3\">\n          <mat-form-field class=\"block-margin\">\n            <mat-select placeholder=\"Select Category\" formControlName=\"categoryName\">\n              <mat-option value=\"tables\" (click)=\"getElements()\">Tables</mat-option>\n              <mat-option value=\"views\" (click)=\"getElements()\">Views</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-3\">\n          <mat-form-field class=\"block-margin\">\n            <mat-select placeholder=\"Select Element\" formControlName=\"elementName\">\n              <!-- <mat-option value=\"custinfo_cd_chgreas_t\">custinfo_cd_chgreas_t</mat-option> -->\n              <mat-option *ngFor=\"let el of elements\" [value]=\"el\">{{el}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n      </div>\n\n      <!-- Button Row 1 -->\n      <div class=\"row\">\n        <div class=\"col-md-2\">\n\n        </div>\n        <div class=\"col-md-4\">\n          <button mat-raised-button color=\"accent\" style=\"float:right\" (click)=\"profileData('profile')\">Profile Data</button>\n        </div>\n        <div class=\"col-md-4\">\n          <button mat-raised-button color=\"accent\" style=\"float:left\" [disabled]=\"reProfile\" (click)=\"profileData('reprofile')\">Re-profile Data</button>\n        </div>\n        <div class=\"col-md-2\">\n\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"showProgressSpinner\">\n        <div class=\"col-sm-12\">\n          <mat-progress-spinner mode=\"indeterminate\" color=\"primary\" [strokeWidth]=\"5\" style=\"margin: 0 auto\"></mat-progress-spinner>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"showProfile\">\n        <div class=\"col-md-12\">\n          <iframe src=\"{{link}}\"\n            class=\"iframe-class\"></iframe>\n        </div>\n      </div>\n\n\n\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/profiling/profiling.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".iframe-class {\n  width: 100%;\n  overflow-y: scroll;\n  height: 40vh !important;\n  border: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profiling/profiling.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilingComponent = (function () {
    function ProfilingComponent(sanitizer, api) {
        this.sanitizer = sanitizer;
        this.api = api;
        this.showProfile = false;
    }
    ProfilingComponent.prototype.ngOnInit = function () {
        this.createFormControls();
        this.createForm();
    };
    ProfilingComponent.prototype.createFormControls = function () {
        this.dbName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required);
        this.categoryName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required);
        this.elementName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required);
        this.envName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required);
    };
    ProfilingComponent.prototype.createForm = function () {
        this.profilingForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            dbName: this.dbName,
            categoryName: this.categoryName,
            elementName: this.elementName,
            envName: this.envName
        });
    };
    ProfilingComponent.prototype.showProfileToggle = function (e) {
        this.showProfile = true;
    };
    ProfilingComponent.prototype.getDatabase = function (env) {
        var _this = this;
        console.log(env);
        this.api.getDatabaseProfile(env).subscribe(function (data) {
            console.log(data["data"]["databases"]);
            _this.databases = data["data"]["databases"];
        });
    };
    ProfilingComponent.prototype.getElements = function () {
        var _this = this;
        var op = this.profilingForm.value;
        console.log(op);
        this.api.getElements(op).subscribe(function (data) {
            console.log(data);
            if (op.categoryName == 'views') {
                _this.elements = data["data"]["views"];
            }
            else {
                _this.elements = data["data"]["tables"];
            }
        });
    };
    ProfilingComponent.prototype.profileData = function (state) {
        var _this = this;
        var op = this.profilingForm.value;
        this.showProfile = false;
        this.showProgressSpinner = true;
        this.reProfile = true; //disable button reprofile
        this.api.profileData(op, state).subscribe(function (data) {
            console.log(data["data"]["profile_data_html_url"]);
            _this.link = data["data"]["profile_data_html_url"];
            _this.showProgressSpinner = false;
            _this.showProfile = true;
            _this.reProfile = false; //enable button reprofile
        });
    };
    return ProfilingComponent;
}());
ProfilingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profiling',
        template: __webpack_require__("../../../../../src/app/components/profiling/profiling.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profiling/profiling.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */]) === "function" && _b || Object])
], ProfilingComponent);

var _a, _b;
//# sourceMappingURL=profiling.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sources/sources.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h2 class=\"title\">Sources</h2>\n        <h5 class=\"subtitle\">Bring Your Own Data (BYOD)\n        </h5>\n        <health-check-non-prod></health-check-non-prod>\n      </div>\n    </div>\n\n\n    <form [formGroup]=\"sourcesForm\" novalidate>\n      <div formArrayName=\"sourceWrapper\">\n        <div *ngFor=\"let source of sourcesForm.controls.sourceWrapper['controls']; let i = index\">\n          <div [formGroupName]=\"i\">\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <mat-form-field class=\"block-margin\">\n                  <input matInput type=\"text\" placeholder=\"Source Name\" formControlName=\"sourceName\" />\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-3\">\n                <mat-form-field class=\"block-margin\">\n                  <mat-select placeholder=\"Select Source Type\" formControlName=\"sourceType\">\n                    <mat-option *ngFor=\"let option of options\" [value]=\"option.value\">{{option.viewValue}}</mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-2\">\n                <button mat-mini-fab color=\"accent\" (click)=\"addSource()\" class=\"block-margin\">\n                  <div matTooltip=\"Add Source\" matTooltipPosition=\"after\">\n                    <mat-icon>add</mat-icon>\n                  </div>\n                </button>\n              </div>\n              <div class=\"col-md-2\">\n                <button mat-mini-fab color=\"accent\" (click)=\"removeSource(i)\" class=\"block-margin\" *ngIf=\"sourcesForm.controls.sourceWrapper.controls.length > 1\">\n                  <div matTooltip=\"Remove Source\" matTooltipPosition=\"after\">\n                    <mat-icon>remove</mat-icon>\n                  </div>\n                </button>\n              </div>\n              <div class=\"col-md-2\">\n                <button mat-mini-fab color=\"accent\" (click)=\"openDialog(i)\" class=\"block-margin\">\n                  <div matTooltip=\"Configure Source\" matTooltipPosition=\"after\">\n                    <mat-icon>edit</mat-icon>\n                  </div>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/sources/sources.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table tr td {\n  padding: 1em; }\n  table tr td.head {\n    width: 250px; }\n  table tr td .mat-select {\n    margin-top: -1.6em; }\n  table tr td h4 {\n    background-color: #03A9F4;\n    padding: 1em;\n    text-align: center;\n    color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sources/sources.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SourcesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configure_source_configure_source_component__ = __webpack_require__("../../../../../src/app/components/configure-source/configure-source.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//DialogBox


var SourcesComponent = (function () {
    function SourcesComponent(dialog, formBuilder) {
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.options = [
            { value: "hdfs", viewValue: "HDFS" },
            { value: "hive", viewValue: "HIVE" },
            { value: "aws-s3", viewValue: "AWS S3" },
            { value: "mysql", viewValue: "MySQL" },
            { value: "file", viewValue: "FILE" },
            { value: "jdbc", viewValue: "JDBC" }
        ];
    }
    SourcesComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    SourcesComponent.prototype.createForm = function () {
        this.sourcesForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            sourceWrapper: this.formBuilder.array([
                this.initSource()
            ]),
        });
    };
    SourcesComponent.prototype.initSource = function () {
        return this.formBuilder.group({
            sourceName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            sourceType: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]
        });
    };
    SourcesComponent.prototype.addSource = function () {
        var source = this.sourcesForm.controls['sourceWrapper'];
        source.push(this.initSource());
    };
    SourcesComponent.prototype.removeSource = function (i) {
        var source = this.sourcesForm.controls['sourceWrapper'];
        source.removeAt(i);
    };
    SourcesComponent.prototype.openDialog = function (i) {
        var sendOP = this.sourcesForm.value;
        var tempSources = Object.values(sendOP.sourceWrapper);
        console.log(tempSources);
        var sourceNames = tempSources[i].sourceName;
        var sourceTypes = tempSources[i].sourceType;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__configure_source_configure_source_component__["a" /* ConfigureSourceComponent */], {
            width: '400px',
            data: { sourceName: sourceNames, sourceType: sourceTypes }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The Configure Source Dialog was closed');
        });
    };
    return SourcesComponent;
}());
SourcesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sources',
        template: __webpack_require__("../../../../../src/app/components/sources/sources.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/sources/sources.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _b || Object])
], SourcesComponent);

var _a, _b;
//# sourceMappingURL=sources.component.js.map

/***/ }),

/***/ "../../../../../src/app/globals.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Globals; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Globals = (function () {
    function Globals() {
        this.loggedIn = false;
        this.username = '';
    }
    return Globals;
}());
Globals = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], Globals);

//# sourceMappingURL=globals.js.map

/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());
MaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatSlideToggleModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatSlideToggleModule */]
        ]
    })
], MaterialModule);

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var API_URL = '/';
var ApiService = (function () {
    function ApiService(http, httpC) {
        this.http = http;
        this.httpC = httpC;
    }
    ApiService.prototype.getZones = function () {
        //method to get all zones
        // return this.httpC.get('http://10.224.69.47:3000/fingerprint/zones')
        //   .catch(this.handleError)
        var prod = ["lmb-datalake-hdp-store-raw-nonprod", "lmb-datalake-hdp-store-raw-prod", "lmb-datalake-hdp-store-raw-prod-stage"];
        return prod;
    };
    ApiService.prototype.selectZone = function (zone) {
        //method which selects particular zone
        //Select the zone and populate the source drop down
        console.log(zone);
        return this.httpC.get("/v1/s3/listdatabase?bucket_name=" + zone);
    };
    ApiService.prototype.selectSource = function (source, zone) {
        //method which selects particular source
        return this.httpC.get("/v1/s3/listtables?bucket_name=" + zone + "&database_name=" + source);
    };
    ApiService.prototype.selectTable = function (table, source, zone) {
        //method which selects particular table
        //Select the table and populate the columns drop down
        return this.httpC.get("/v1/s3/rawzone/listcolumns?bucket_name=" + zone + "&database_name=" + source + "&table_name=" + table);
    };
    ApiService.prototype.fingerprint = function (column, table, source, zone) {
        console.log("\n    Column Name : " + column + "\n    Table Name : " + table + "\n    Source Name : " + source + "\n    Zone Name : " + zone + "\n    ");
        var columns = [];
        for (var i = 0; i < column.length; i++) {
            columns[i] = "" + column[i];
        }
        console.log("Column names in API END POINT Front End");
        console.log(columns);
        try {
            return this.httpC.post('/v1/autotagging/submit', { "data": { "table_name": table, "database_name": source, "bucket_name": zone, "type": "raw", "colums": columns } });
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    };
    ApiService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error);
    };
    ApiService.prototype.getDatabaseProfile = function (env) {
        console.log('Getting tables for profile');
        console.log(env);
        return this.httpC.get("/api/v1/listdatabase?source_type=hive&environment=" + env);
    };
    //curate
    ApiService.prototype.submitTagCorrections = function (params) {
        console.log('IN CURATE API FE');
        console.log(params);
        // {"zoneName": "lmb-datalake-hdp-store-raw-nonprod","sourceName": "avaya","tableName": "customer_log","columnName": "date_occurred_s","tagInfo": [{"tagType": "MIO","tagCategory": "MIO-PUBLIC"},{"tagType": "SEC","tagCategory": "SEC-SSN"},{"tagType": "DOM","tagCategory": "DOM-CUSTOMER"}]}
        return this.httpC.post('/v1/autotagging/tagcorrectionsubmit', params);
    };
    ApiService.prototype.getElements = function (params) {
        console.log(params);
        var link = '';
        if (params.categoryName == 'tables') {
            link = "/api/v1/listtables?source_type=hive&environment=" + params.envName + "&database_name=" + params.dbName + "&category_type=tables";
        }
        else {
            link = "/api/v1/listviews?source_type=hive&environment=" + params.envName + "&database_name=" + params.dbName + "&category_type=views";
        }
        return this.httpC.get(link);
    };
    ApiService.prototype.profileData = function (params, state) {
        console.log(params);
        console.log(state);
        var nParams = {
            "data": {
                "source_type": "hive",
                "environment": "" + params.envName,
                "database_name": "" + params.dbName,
                "category_type": "" + params.categoryName,
                "category_element": "" + params.elementName,
                "profile_type": "" + state
            }
        };
        return this.httpC.post('/api/v1/profiledata', nParams);
    };
    //login stuff
    ApiService.prototype.login = function (params) {
        var loginCreds = Object.values(params);
        var loginCredsObj = {
            "username": loginCreds[0].toString(),
            "password": loginCreds[1].toString(),
        };
        console.log(loginCredsObj);
        return this.http.post('/login', loginCreds);
    };
    ApiService.prototype.loginCheck = function () {
        return this.http.get('/login/login-check');
    };
    ApiService.prototype.fingerprintFlow = function (params, status) {
        var x = { "data": { "processor_group_id": "bb75b7fb-347a-3f59-b4a2-ca412e7829be", "processor_state": "" + status, "nifi_user": "sacid_lmb_hdp_mdmsvc", "nifi_url": "https://ip-10-224-71-221.aws.lmig.com:9093", "aws_env": "nonprod", "app_env": "integration", "start_processor_group_name": ["AtlasBatchProcessing"] } };
        return this.httpC.post('http://10.224.69.47:8081/api/v1/nifi/update_processor_state', x);
    };
    ApiService.prototype.logOut = function () {
        return this.httpC.get('/logout');
    };
    return ApiService;
}());
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object])
], ApiService);

var _a, _b;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    apiURL: 'http://localhost:3000/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map