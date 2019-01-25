"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var detailPanel_component_1 = require("./detailPanel.component");
describe('detailPanel', function () {
    var fixture;
    var component;
    var element;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                detailPanel_component_1.DetailPanelComponent
            ]
        });
        fixture = testing_1.TestBed.createComponent(detailPanel_component_1.DetailPanelComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
    });
    it('should have the title in the html', testing_1.async(function () {
        component.title = 'This is the Title';
        fixture.detectChanges();
        fixture.whenStable().then(function () {
            expect(element.querySelector('div').textContent).toContain('This is the Title');
        });
    }));
});
//# sourceMappingURL=detailPanel.spec.js.map