angular.module('app').service('unreviewedSessionCount', (function () {
    function UnreviewedSessionCount(sessions, currentIdentity) {
        this.sessions = sessions;
        this.currentIdentity = currentIdentity;
        this.value = 0;
    }
    UnreviewedSessionCount.prototype.updateUnreviewedSessionCount = function () {
        var _this = this;
        this.sessions.getUnreviewedCount(this.currentIdentity.currentUser.id)
            .then(function (response) {
            _this.value = response.count;
        });
    };
    return UnreviewedSessionCount;
}()));
//# sourceMappingURL=unreviewedSessionCount.js.map