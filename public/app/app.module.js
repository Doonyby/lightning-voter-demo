"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var static_1 = require("@angular/upgrade/static");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var nameParser_service_1 = require("./admin/nameParser.service");
var unreviewedTalk_component_1 = require("./home/unreviewedTalk.component");
var talkDuration_pipe_1 = require("./common/talkDuration.pipe");
var profile_component_1 = require("./profile/profile.component");
var toastr_service_1 = require("./toastr/toastr.service");
var nav_component_1 = require("./nav/nav.component");
var sessions_service_1 = require("./sessions/sessions.service");
var detailPanel_component_1 = require("./common/detailPanel.component");
function getLocation(i) {
    return i.get('$location');
}
exports.getLocation = getLocation;
function getCurrentIdentity(i) {
    return i.get('currentIdentity');
}
exports.getCurrentIdentity = getCurrentIdentity;
function getToastr() {
    return toastr;
}
exports.getToastr = getToastr;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            static_1.UpgradeModule
        ],
        declarations: [
            app_component_1.AppComponent,
            unreviewedTalk_component_1.UnreviewedTalkComponent,
            talkDuration_pipe_1.TalkDurationPipe,
            profile_component_1.ProfileComponent,
            nav_component_1.NavComponent,
            detailPanel_component_1.DetailPanelComponent
        ],
        providers: [
            nameParser_service_1.NameParser,
            {
                provide: '$location',
                useFactory: getLocation,
                deps: ['$injector']
            },
            {
                provide: 'currentIdentity',
                useFactory: getCurrentIdentity,
                deps: ['$injector']
            },
            {
                provide: toastr_service_1.TOASTR_TOKEN,
                useFactory: getToastr
            },
            sessions_service_1.Sessions
        ],
        bootstrap: [
            app_component_1.AppComponent
        ],
        entryComponents: [
            unreviewedTalk_component_1.UnreviewedTalkComponent,
            profile_component_1.ProfileComponent,
            detailPanel_component_1.DetailPanelComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map