"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var toastr_service_1 = require("../toastr/toastr.service");
var ProfileComponent = (function () {
    function ProfileComponent($location, currentIdentity, toastr) {
        this.$location = $location;
        this.currentIdentity = currentIdentity;
        this.toastr = toastr;
    }
    ProfileComponent.prototype.save = function (newProfile) {
        this.currentIdentity.updateUser(newProfile);
        toastr.success('Profile Saved!');
    };
    ProfileComponent.prototype.cancel = function () {
        this.$location.path('/home');
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'profile',
        templateUrl: './profile.component.html'
    }),
    __param(0, core_1.Inject('$location')),
    __param(1, core_1.Inject('currentIdentity')),
    __param(2, core_1.Inject(toastr_service_1.TOASTR_TOKEN)),
    __metadata("design:paramtypes", [Object, Object, Object])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map