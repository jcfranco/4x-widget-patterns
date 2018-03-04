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
define(["require", "exports", "esri/core/tsSupport/declareExtendsHelper", "esri/core/tsSupport/decorateHelper", "esri/core/accessorSupport/decorators", "esri/widgets/Widget", "esri/widgets/support/widget"], function (require, exports, __extends, __decorate, decorators_1, Widget, widget_1) {
    "use strict";
    var CSS = {
        base: "esri-distinguishable-children",
        item: "esri-distinguishable-children__item"
    };
    function createRandomListItems() {
        var children = [];
        for (var i = 0; i < randomNum(); i++) {
            children.push(
            // use `key` to distinguish this elements that will be added/removed dynamically
            widget_1.tsx("li", { class: CSS.item, key: i },
                "item ",
                i));
        }
        return children;
    }
    function randomNum(max) {
        if (max === void 0) { max = 10; }
        return Math.random() * max;
    }
    var DistinguishableChildren = /** @class */ (function (_super) {
        __extends(DistinguishableChildren, _super);
        function DistinguishableChildren() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        //--------------------------------------------------------------------------
        //
        //  Lifecycle
        //
        //--------------------------------------------------------------------------
        DistinguishableChildren.prototype.postInitialize = function () {
            var _this = this;
            setInterval(function () { return _this.scheduleRender(); }, 500);
        };
        //--------------------------------------------------------------------------
        //
        //  Public Methods
        //
        //--------------------------------------------------------------------------
        DistinguishableChildren.prototype.render = function () {
            return (widget_1.tsx("div", { class: CSS.base }, widget_1.tsx("ul", null, createRandomListItems())));
        };
        DistinguishableChildren = __decorate([
            decorators_1.subclass("examples.DistinguishableChildren")
        ], DistinguishableChildren);
        return DistinguishableChildren;
    }(decorators_1.declared(Widget)));
    return DistinguishableChildren;
});
