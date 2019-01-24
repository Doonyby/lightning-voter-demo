import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

@Injectable()
export class Sessions {
    constructor(private http: Http) {}

    getSessionsByUser(userId) {
        return this.http.get('/api/sessions/user/' + userId)
            .map((rsp: Response) => {
                let data = rsp.json();
                return data;
            })
            .toPromise();
    }

    getAllSessions() {
        return this.http.get('/api/sessions')
            .map((response: Response) => {
                return response.json();
            })
            .toPromise();
    }

    createNewSession(newSession) {
        return this.http.post('/api/sessions', newSession)
            .map((response: Response) => {
                return response.json();
            })
            .toPromise();
    }

    getNextUnreviewedSession(userId) {
        return this.http.get(`/api/users/${userId}/randomUnreviewedSession`)
            .map((response: Response) => {
                let data = null;
                if(response.text() !== "") {
                    data = response.json();
                }
                return data;
            })
            .toPromise();
    }

    addReviewedSession(userId, sessionId) {
        return this.http.post('/api/users/' + userId + '/reviewSession/' + sessionId, {})
            .toPromise();
    }

    incrementVote(sessionId) {
        return this.http.put('/api/sessions/' + sessionId + '/incrementVote/', {})
            .toPromise();
    }

    getUnreviewedCount(userId) {
        return this.http.get('/api/users/' + userId + '/unreviewedSessionCount')
            .map((response: Response) => {
                return response.json();
            })
            .toPromise();
    }

}