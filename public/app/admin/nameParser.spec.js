"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nameParser_service_1 = require("./nameParser.service");
describe('nameParser', function () {
    var nameParser;
    beforeEach(function () {
        nameParser = new nameParser_service_1.NameParser();
    });
    it('should parse names correctly', function () {
        expect(nameParser.parse('f@f.com|frank|furter')[0].firstName).toBe('frank');
    });
});
//# sourceMappingURL=nameParser.spec.js.map