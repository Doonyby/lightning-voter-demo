"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var static_1 = require("@angular/upgrade/static");
require("./app/rxjsOperations");
var app_module_1 = require("./app/app.module");
var nameParser_service_1 = require("./app/admin/nameParser.service");
var unreviewedTalk_component_1 = require("./app/home/unreviewedTalk.component");
var profile_component_1 = require("./app/profile/profile.component");
var sessions_service_1 = require("./app/sessions/sessions.service");
var detailPanel_component_1 = require("./app/common/detailPanel.component");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule).then(function (platformRef) {
    angular.module('app')
        .factory('nameParser', static_1.downgradeInjectable(nameParser_service_1.NameParser))
        .factory('sessions', static_1.downgradeInjectable(sessions_service_1.Sessions))
        .directive('unreviewedTalk', static_1.downgradeComponent({
        component: unreviewedTalk_component_1.UnreviewedTalkComponent
    }))
        .directive('profile', static_1.downgradeComponent({
        component: profile_component_1.ProfileComponent
    }))
        .directive('detailPanel', static_1.downgradeComponent({
        component: detailPanel_component_1.DetailPanelComponent
    }));
    var upgrade = platformRef.injector.get(static_1.UpgradeModule);
    upgrade.bootstrap(document.documentElement, ['app']);
    console.log('hybrid app bootstrapped');
});
//# sourceMappingURL=main.js.map