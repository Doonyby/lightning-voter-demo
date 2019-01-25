"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
//# sourceMappingURL=nameParser.service.js.map