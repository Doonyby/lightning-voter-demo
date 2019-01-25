webpackJsonp([2],{

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__(81);
var static_1 = __webpack_require__(19);
__webpack_require__(189);
var app_module_1 = __webpack_require__(203);
var downgrades_1 = __webpack_require__(214);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule).then(function (platformRef) {
    downgrades_1.downgradeItems();
    var upgrade = platformRef.injector.get(static_1.UpgradeModule);
    upgrade.bootstrap(document.documentElement, ['app']);
    console.log('hybrid app bootstrapped');
});


/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(190);
__webpack_require__(191);
__webpack_require__(193);
__webpack_require__(195);
__webpack_require__(196);
__webpack_require__(198);
__webpack_require__(200);
__webpack_require__(201);
__webpack_require__(202);


/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(0);
var catch_1 = __webpack_require__(83);
Observable_1.Observable.prototype.catch = catch_1._catch;
Observable_1.Observable.prototype._catch = catch_1._catch;
//# sourceMappingURL=catch.js.map

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(0);
var do_1 = __webpack_require__(192);
Observable_1.Observable.prototype.do = do_1._do;
Observable_1.Observable.prototype._do = do_1._do;
//# sourceMappingURL=do.js.map

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
/* tslint:disable:max-line-length */
/**
 * Perform a side effect for every emission on the source Observable, but return
 * an Observable that is identical to the source.
 *
 * <span class="informal">Intercepts each emission on the source and runs a
 * function, but returns an output which is identical to the source.</span>
 *
 * <img src="./img/do.png" width="100%">
 *
 * Returns a mirrored Observable of the source Observable, but modified so that
 * the provided Observer is called to perform a side effect for every value,
 * error, and completion emitted by the source. Any errors that are thrown in
 * the aforementioned Observer or handlers are safely sent down the error path
 * of the output Observable.
 *
 * This operator is useful for debugging your Observables for the correct values
 * or performing other side effects.
 *
 * Note: this is different to a `subscribe` on the Observable. If the Observable
 * returned by `do` is not subscribed, the side effects specified by the
 * Observer will never happen. `do` therefore simply spies on existing
 * execution, it does not trigger an execution to happen like `subscribe` does.
 *
 * @example <caption>Map every every click to the clientX position of that click, while also logging the click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var positions = clicks
 *   .do(ev => console.log(ev))
 *   .map(ev => ev.clientX);
 * positions.subscribe(x => console.log(x));
 *
 * @see {@link map}
 * @see {@link subscribe}
 *
 * @param {Observer|function} [nextOrObserver] A normal Observer object or a
 * callback for `next`.
 * @param {function} [error] Callback for errors in the source.
 * @param {function} [complete] Callback for the completion of the source.
 * @return {Observable} An Observable identical to the source, but runs the
 * specified Observer or callback(s) for each item.
 * @method do
 * @name do
 * @owner Observable
 */
function _do(nextOrObserver, error, complete) {
    return this.lift(new DoOperator(nextOrObserver, error, complete));
}
exports._do = _do;
var DoOperator = (function () {
    function DoOperator(nextOrObserver, error, complete) {
        this.nextOrObserver = nextOrObserver;
        this.error = error;
        this.complete = complete;
    }
    DoOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DoSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
    };
    return DoOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DoSubscriber = (function (_super) {
    __extends(DoSubscriber, _super);
    function DoSubscriber(destination, nextOrObserver, error, complete) {
        _super.call(this, destination);
        var safeSubscriber = new Subscriber_1.Subscriber(nextOrObserver, error, complete);
        safeSubscriber.syncErrorThrowable = true;
        this.add(safeSubscriber);
        this.safeSubscriber = safeSubscriber;
    }
    DoSubscriber.prototype._next = function (value) {
        var safeSubscriber = this.safeSubscriber;
        safeSubscriber.next(value);
        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        }
        else {
            this.destination.next(value);
        }
    };
    DoSubscriber.prototype._error = function (err) {
        var safeSubscriber = this.safeSubscriber;
        safeSubscriber.error(err);
        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        }
        else {
            this.destination.error(err);
        }
    };
    DoSubscriber.prototype._complete = function () {
        var safeSubscriber = this.safeSubscriber;
        safeSubscriber.complete();
        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        }
        else {
            this.destination.complete();
        }
    };
    return DoSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=do.js.map

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(0);
var finally_1 = __webpack_require__(194);
Observable_1.Observable.prototype.finally = finally_1._finally;
Observable_1.Observable.prototype._finally = finally_1._finally;
//# sourceMappingURL=finally.js.map

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(3);
var Subscription_1 = __webpack_require__(17);
/**
 * Returns an Observable that mirrors the source Observable, but will call a specified function when
 * the source terminates on complete or error.
 * @param {function} callback function to be called when source terminates.
 * @return {Observable} an Observable that mirrors the source, but will call the specified function on termination.
 * @method finally
 * @owner Observable
 */
function _finally(callback) {
    return this.lift(new FinallyOperator(callback));
}
exports._finally = _finally;
var FinallyOperator = (function () {
    function FinallyOperator(callback) {
        this.callback = callback;
    }
    FinallyOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new FinallySubscriber(subscriber, this.callback));
    };
    return FinallyOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var FinallySubscriber = (function (_super) {
    __extends(FinallySubscriber, _super);
    function FinallySubscriber(destination, callback) {
        _super.call(this, destination);
        this.add(new Subscription_1.Subscription(callback));
    }
    return FinallySubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=finally.js.map

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(0);
var map_1 = __webpack_require__(31);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(0);
var pluck_1 = __webpack_require__(197);
Observable_1.Observable.prototype.pluck = pluck_1.pluck;
//# sourceMappingURL=pluck.js.map

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var map_1 = __webpack_require__(31);
/**
 * Maps each source value (an object) to its specified nested property.
 *
 * <span class="informal">Like {@link map}, but meant only for picking one of
 * the nested properties of every emitted object.</span>
 *
 * <img src="./img/pluck.png" width="100%">
 *
 * Given a list of strings describing a path to an object property, retrieves
 * the value of a specified nested property from all values in the source
 * Observable. If a property can't be resolved, it will return `undefined` for
 * that value.
 *
 * @example <caption>Map every every click to the tagName of the clicked target element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var tagNames = clicks.pluck('target', 'tagName');
 * tagNames.subscribe(x => console.log(x));
 *
 * @see {@link map}
 *
 * @param {...string} properties The nested properties to pluck from each source
 * value (an object).
 * @return {Observable} Returns a new Observable of property values from the
 * source values.
 * @method pluck
 * @owner Observable
 */
function pluck() {
    var properties = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        properties[_i - 0] = arguments[_i];
    }
    var length = properties.length;
    if (length === 0) {
        throw new Error('list of properties cannot be empty.');
    }
    return map_1.map.call(this, plucker(properties, length));
}
exports.pluck = pluck;
function plucker(props, length) {
    var mapper = function (x) {
        var currentProp = x;
        for (var i = 0; i < length; i++) {
            var p = currentProp[props[i]];
            if (typeof p !== 'undefined') {
                currentProp = p;
            }
            else {
                return undefined;
            }
        }
        return currentProp;
    };
    return mapper;
}
//# sourceMappingURL=pluck.js.map

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(0);
var toPromise_1 = __webpack_require__(199);
Observable_1.Observable.prototype.toPromise = toPromise_1.toPromise;
//# sourceMappingURL=toPromise.js.map

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(10);
/* tslint:disable:max-line-length */
/**
 * @param PromiseCtor
 * @return {Promise<T>}
 * @method toPromise
 * @owner Observable
 */
function toPromise(PromiseCtor) {
    var _this = this;
    if (!PromiseCtor) {
        if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
            PromiseCtor = root_1.root.Rx.config.Promise;
        }
        else if (root_1.root.Promise) {
            PromiseCtor = root_1.root.Promise;
        }
    }
    if (!PromiseCtor) {
        throw new Error('no Promise impl found');
    }
    return new PromiseCtor(function (resolve, reject) {
        var value;
        _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
    });
}
exports.toPromise = toPromise;
//# sourceMappingURL=toPromise.js.map

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(0);
var mergeMap_1 = __webpack_require__(56);
Observable_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
Observable_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;
//# sourceMappingURL=mergeMap.js.map

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(0);
var of_1 = __webpack_require__(82);
Observable_1.Observable.of = of_1.of;
//# sourceMappingURL=of.js.map

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(0);
var fromPromise_1 = __webpack_require__(53);
Observable_1.Observable.fromPromise = fromPromise_1.fromPromise;
//# sourceMappingURL=fromPromise.js.map

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var static_1 = __webpack_require__(19);
var platform_browser_1 = __webpack_require__(13);
var forms_1 = __webpack_require__(79);
var http_1 = __webpack_require__(54);
var router_1 = __webpack_require__(55);
var app_component_1 = __webpack_require__(204);
var nameParser_service_1 = __webpack_require__(84);
var unreviewedTalk_component_1 = __webpack_require__(85);
var talkDuration_pipe_1 = __webpack_require__(206);
var profile_component_1 = __webpack_require__(86);
var toastr_service_1 = __webpack_require__(87);
var nav_component_1 = __webpack_require__(208);
var sessions_service_1 = __webpack_require__(58);
var detailPanel_component_1 = __webpack_require__(88);
var results_component_1 = __webpack_require__(89);
var sessionDetailWithVotes_component_1 = __webpack_require__(211);
var allSessions_resolver_1 = __webpack_require__(213);
var admin_guard_1 = __webpack_require__(215);
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
function getAuth(i) {
    return i.get('auth');
}
exports.getAuth = getAuth;
var Ng1Ng2UrlHandlingStrategy = (function () {
    function Ng1Ng2UrlHandlingStrategy() {
    }
    Ng1Ng2UrlHandlingStrategy.prototype.shouldProcessUrl = function (url) {
        return url.toString().startsWith('/admin/results');
    };
    Ng1Ng2UrlHandlingStrategy.prototype.extract = function (url) {
        return url;
    };
    Ng1Ng2UrlHandlingStrategy.prototype.merge = function (newUrlPart, rawUrl) {
        return newUrlPart;
    };
    return Ng1Ng2UrlHandlingStrategy;
}());
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
            static_1.UpgradeModule,
            router_1.RouterModule.forRoot([
                {
                    path: 'admin/results',
                    component: results_component_1.ResultsComponent,
                    resolve: { sessions: allSessions_resolver_1.AllSessionsResolver },
                    canActivate: [admin_guard_1.AdminGuard]
                }
            ], { useHash: true })
        ],
        declarations: [
            app_component_1.AppComponent,
            unreviewedTalk_component_1.UnreviewedTalkComponent,
            talkDuration_pipe_1.TalkDurationPipe,
            profile_component_1.ProfileComponent,
            nav_component_1.NavComponent,
            detailPanel_component_1.DetailPanelComponent,
            results_component_1.ResultsComponent,
            sessionDetailWithVotes_component_1.SessionDetailWithVotesComponent
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
                provide: 'auth',
                useFactory: getAuth,
                deps: ['$injector']
            },
            {
                provide: toastr_service_1.TOASTR_TOKEN,
                useFactory: getToastr
            },
            sessions_service_1.Sessions,
            { provide: router_1.UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy },
            { provide: '$scope', useExisting: '$rootScope' },
            allSessions_resolver_1.AllSessionsResolver,
            admin_guard_1.AdminGuard
        ],
        bootstrap: [
            app_component_1.AppComponent
        ],
        entryComponents: [
            unreviewedTalk_component_1.UnreviewedTalkComponent,
            profile_component_1.ProfileComponent,
            detailPanel_component_1.DetailPanelComponent,
            results_component_1.ResultsComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n        <router-outlet></router-outlet>\n        <div class=\"ng-view\"></div>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ 205:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!!session\">\n  <div  class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      {{session.title}}\n    </div>\n    <div class=\"panel-body\">\n      <p><strong>{{session.length | talkDuration}}</strong></p>\n      <p>{{session.abstract}}</p>\n    </div>\n  </div>\n\n  <span>Are you interested in this session?</span>\n  <button class=\"btn btn-primary btn-xs\" (click)=\"yes()\">Yes</button>\n  <button class=\"btn btn-warning btn-xs\" (click)=\"no()\">No</button>\n</div>\n<div *ngIf=\"!session\" class=\"alert alert-success\" role=\"alert\"> \n  You have reviewed all the submitted sessions\n</div>";

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var TalkDurationPipe = (function () {
    function TalkDurationPipe() {
    }
    TalkDurationPipe.prototype.transform = function (duration) {
        return "Duration: " + duration + " minutes";
    };
    return TalkDurationPipe;
}());
TalkDurationPipe = __decorate([
    core_1.Pipe({ name: 'talkDuration' })
], TalkDurationPipe);
exports.TalkDurationPipe = TalkDurationPipe;


/***/ }),

/***/ 207:
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<h1>User Profile</h1>\n\n<form class=\"form-inline\" #form=\"ngForm\">\n  <label for=\"firstName\">First Name</label>\n  <input type=\"text\" id=\"firstName\" placeholder=\"First Name\"\n    class=\"form-control\" [ngModel]=\"currentIdentity.currentUser.firstName\" name=\"firstName\">\n    \n  <label for=\"lastName\">Last Name</label>\n  <input type=\"text\" id=\"lastName\" placeholder=\"Last Name\"\n    class=\"form-control\" [ngModel]=\"currentIdentity.currentUser.lastName\" name=\"lastName\">\n  \n  <br><br>\n  <button class=\"btn btn-primary btn-sm\" (click)=\"save(form.value)\">Save</button>\n  <button class=\"btn btn-warning btn-sm\" (click)=\"cancel()\">Cancel</button>\n</form>";

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var core_1 = __webpack_require__(1);
var static_1 = __webpack_require__(19);
var NavComponent = (function (_super) {
    __extends(NavComponent, _super);
    function NavComponent(elementRef, injector) {
        return _super.call(this, 'nav', elementRef, injector) || this;
    }
    return NavComponent;
}(static_1.UpgradeComponent));
NavComponent = __decorate([
    core_1.Directive({
        selector: 'app-nav'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.Injector])
], NavComponent);
exports.NavComponent = NavComponent;


/***/ }),

/***/ 209:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"panel-heading pointable\" (click)=\"collapse()\">\n    <span>{{title}}</span>\n  </div>\n  <div class=\"panel-body\" [hidden]=\"collapsed\">\n    <ng-content></ng-content>\n  </div>\n</div>";

/***/ }),

/***/ 210:
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<h1>Results</h1>\n\n<session-detail-with-votes [session]=\"session\" *ngFor=\"let session of sessionsByVoteDesc\"></session-detail-with-votes>\n\n";

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(1);
var SessionDetailWithVotesComponent = (function () {
    function SessionDetailWithVotesComponent() {
    }
    return SessionDetailWithVotesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SessionDetailWithVotesComponent.prototype, "session", void 0);
SessionDetailWithVotesComponent = __decorate([
    core_1.Component({
        selector: 'session-detail-with-votes',
        template: __webpack_require__(212)
    })
], SessionDetailWithVotesComponent);
exports.SessionDetailWithVotesComponent = SessionDetailWithVotesComponent;


/***/ }),

/***/ 212:
/***/ (function(module, exports) {

module.exports = "<detail-panel [title]=\"session.title\">\n  <strong>{{session.voteCount}} votes</strong>\n  <p>{{session.length | talkDuration}}</p>\n  <p><small>{{session.abstract}}</small></p>  \n</detail-panel>\n";

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(1);
var sessions_service_1 = __webpack_require__(58);
var AllSessionsResolver = (function () {
    function AllSessionsResolver(sessions) {
        this.sessions = sessions;
    }
    AllSessionsResolver.prototype.resolve = function (route, state) {
        return this.sessions.getAllSessions();
    };
    return AllSessionsResolver;
}());
AllSessionsResolver = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [sessions_service_1.Sessions])
], AllSessionsResolver);
exports.AllSessionsResolver = AllSessionsResolver;


/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var static_1 = __webpack_require__(19);
var nameParser_service_1 = __webpack_require__(84);
var unreviewedTalk_component_1 = __webpack_require__(85);
var profile_component_1 = __webpack_require__(86);
var sessions_service_1 = __webpack_require__(58);
var detailPanel_component_1 = __webpack_require__(88);
var results_component_1 = __webpack_require__(89);
function downgradeItems() {
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
    }))
        .directive('results', static_1.downgradeComponent({
        component: results_component_1.ResultsComponent
    }));
}
exports.downgradeItems = downgradeItems;


/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(1);
var AdminGuard = (function () {
    function AdminGuard(auth) {
        this.auth = auth;
    }
    AdminGuard.prototype.canActivate = function (route, state) {
        return this.auth.requireAdmin2();
    };
    return AdminGuard;
}());
AdminGuard = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject('auth')),
    __metadata("design:paramtypes", [Object])
], AdminGuard);
exports.AdminGuard = AdminGuard;


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(54);
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
        });
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


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var NameParser = (function () {
    function NameParser() {
    }
    NameParser.prototype.parse = function (blobInput) {
        var lines = blobInput.split(/\r?\n/);
        lines.forEach(function (line, idx) {
            var pieces = line.split('|');
            lines[idx] = {
                email: pieces[0],
                firstName: pieces[1],
                lastName: pieces[2]
            };
        });
        return lines;
    };
    return NameParser;
}());
NameParser = __decorate([
    core_1.Injectable()
], NameParser);
exports.NameParser = NameParser;


/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(1);
var UnreviewedTalkComponent = (function () {
    function UnreviewedTalkComponent() {
        this.voteYes = new core_1.EventEmitter();
        this.voteNo = new core_1.EventEmitter();
    }
    UnreviewedTalkComponent.prototype.yes = function () {
        this.voteYes.emit(null);
    };
    UnreviewedTalkComponent.prototype.no = function () {
        this.voteNo.emit(null);
    };
    return UnreviewedTalkComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], UnreviewedTalkComponent.prototype, "session", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], UnreviewedTalkComponent.prototype, "voteYes", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], UnreviewedTalkComponent.prototype, "voteNo", void 0);
UnreviewedTalkComponent = __decorate([
    core_1.Component({
        selector: 'unreviewed-talk',
        template: __webpack_require__(205)
    })
], UnreviewedTalkComponent);
exports.UnreviewedTalkComponent = UnreviewedTalkComponent;


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(1);
var toastr_service_1 = __webpack_require__(87);
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
        template: __webpack_require__(207)
    }),
    __param(0, core_1.Inject('$location')),
    __param(1, core_1.Inject('currentIdentity')),
    __param(2, core_1.Inject(toastr_service_1.TOASTR_TOKEN)),
    __metadata("design:paramtypes", [Object, Object, Object])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
exports.TOASTR_TOKEN = new core_1.InjectionToken('toastr');


/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(1);
var DetailPanelComponent = (function () {
    function DetailPanelComponent() {
    }
    DetailPanelComponent.prototype.collapse = function () {
        this.collapsed = !this.collapsed;
    };
    return DetailPanelComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DetailPanelComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DetailPanelComponent.prototype, "collapsed", void 0);
DetailPanelComponent = __decorate([
    core_1.Component({
        selector: 'detail-panel',
        template: __webpack_require__(209),
    })
], DetailPanelComponent);
exports.DetailPanelComponent = DetailPanelComponent;


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(55);
var ResultsComponent = (function () {
    function ResultsComponent(route) {
        this.route = route;
    }
    ResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.forEach(function (data) {
            _this.sessionsByVoteDesc = data.sessions;
        });
        this.sessionsByVoteDesc.sort(function (session1, session2) {
            // reverse order
            return session2.voteCount - session1.voteCount;
        });
    };
    return ResultsComponent;
}());
ResultsComponent = __decorate([
    core_1.Component({
        selector: 'results',
        template: __webpack_require__(210)
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], ResultsComponent);
exports.ResultsComponent = ResultsComponent;


/***/ })

},[188]);
//# sourceMappingURL=app.bundle.js.map