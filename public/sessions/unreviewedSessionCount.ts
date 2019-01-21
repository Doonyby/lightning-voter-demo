angular.module('app').service('unreviewedSessionCount', class UnreviewedSessionCount {

constructor(public sessions: any, public currentIdentity: any) { }

    value: number = 0;

    updateUnreviewedSessionCount() {
      this.sessions.getUnreviewedCount(this.currentIdentity.currentUser.id)
          .then((response) => {
        this.value = response.data.count;
      })
    }

})