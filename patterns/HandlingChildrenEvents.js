/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />
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
define(["require", "exports", "esri/core/tsSupport/declareExtendsHelper", "esri/core/tsSupport/decorateHelper", "esri/widgets/Widget", "esri/core/accessorSupport/decorators", "esri/widgets/support/widget"], function (require, exports, __extends, __decorate, Widget, decorators_1, widget_1) {
    "use strict";
    var CSS = {
        base: "esri-handling-children-events",
        item: "esri-handling-children-events__item"
    };
    var HandlingChildrenEvents = /** @class */ (function (_super) {
        __extends(HandlingChildrenEvents, _super);
        function HandlingChildrenEvents() {
            //--------------------------------------------------------------------------
            //
            //  Variables
            //
            //--------------------------------------------------------------------------
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._items = ["tab", "between", "us"];
            return _this;
        }
        //--------------------------------------------------------------------------
        //
        //  Public Methods
        //
        //--------------------------------------------------------------------------
        HandlingChildrenEvents.prototype.render = function () {
            return (widget_1.tsx("div", { class: CSS.base },
                widget_1.tsx("div", { "data-item-id": "tab", bind: this, class: CSS.item, styles: this._itemToStyles("tab"), onfocus: this._handleFocus, onblur: this._handleBlur, tabIndex: 0 }, "Tab"),
                widget_1.tsx("span", { "data-item-id": "between", bind: this, class: CSS.item, styles: this._itemToStyles("between"), onfocus: this._handleFocus, onblur: this._handleBlur, tabIndex: 0 }, "between"),
                widget_1.tsx("p", { "data-item-id": "us", bind: this, class: CSS.item, styles: this._itemToStyles("us"), onfocus: this._handleFocus, onblur: this._handleBlur, tabIndex: 0 }, "us")));
        };
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        HandlingChildrenEvents.prototype._itemToStyles = function (id) {
            // using inline-styles for demo purposes only
            return {
                "font-weight": this._focusedItem === id ? "bolder" : ""
            };
        };
        HandlingChildrenEvents.prototype._handleFocus = function (event) {
            var node = event.currentTarget;
            this._focusedItem = node.getAttribute("data-item-id");
        };
        HandlingChildrenEvents.prototype._handleBlur = function (event) {
            var node = event.currentTarget;
            if (this._focusedItem === node.getAttribute("data-item-id")) {
                this._focusedItem = null;
            }
        };
        HandlingChildrenEvents = __decorate([
            decorators_1.subclass("examples.HandlingChildrenEvents")
        ], HandlingChildrenEvents);
        return HandlingChildrenEvents;
    }(decorators_1.declared(Widget)));
    return HandlingChildrenEvents;
});
