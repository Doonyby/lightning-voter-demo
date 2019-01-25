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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Sessions = (function () {
    function Sessions(http) {
        this.http = http;
    }
    Sessions.prototype.getSessionsByUser = function (userId) {
        return this.http.get('/api/sessions/user/' + userId)
            .map(function (rsp) {
            var data = rsp.json();
            return data;
        })
            .toPromise();
    };
    Sessions.prototype.getAllSessions = function () {
        return this.http.get('/api/sessions')
            .map(function (response) {
            return response.json();
        })
            .toPromise();
    };
    Sessions.prototype.createNewSession = function (newSession) {
        return this.http.post('/api/sessions', newSession)
            .map(function (response) {
            return response.json();
        })
            .toPromise();
    };
    Sessions.prototype.getNextUnreviewedSession = function (userId) {
        return this.http.get("/api/users/" + userId + "/randomUnreviewedSession")
            .map(function (response) {
            var data = null;
            if (response.text() !== "") {
                data = response.json();
            }
            return data;
        })
            .toPromise();
    };
    Sessions.prototype.addReviewedSession = function (userId, sessionId) {
        return this.http.post('/api/users/' + userId + '/reviewSession/' + sessionId, {})
            .toPromise();
    };
    Sessions.prototype.incrementVote = function (sessionId) {
        return this.http.put('/api/sessions/' + sessionId + '/incrementVote/', {})
            .toPromise();
    };
    Sessions.prototype.getUnreviewedCount = function (userId) {
        return this.http.get('/api/users/' + userId + '/unreviewedSessionCount')
            .map(function (response) {
            return response.json();
        })
            .toPromise();
    };
    return Sessions;
}());
Sessions = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], Sessions);
exports.Sessions = Sessions;
//# sourceMappingURL=sessions.service.js.map