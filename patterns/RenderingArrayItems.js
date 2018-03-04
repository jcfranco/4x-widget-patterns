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
        base: "esri-rendering-array-items",
        item: "esri-rendering-array-items__item",
        text: "esri-rendering-array-items__item-text"
    };
    var RenderingArrayItems = /** @class */ (function (_super) {
        __extends(RenderingArrayItems, _super);
        function RenderingArrayItems() {
            //--------------------------------------------------------------------------
            //
            //  Properties
            //
            //--------------------------------------------------------------------------
            var _this = _super !== null && _super.apply(this, arguments) || this;
            //----------------------------------
            //  items
            //----------------------------------
            _this.items = ["Jerry", "George", "Elaine", "Kramer"];
            return _this;
        }
        //--------------------------------------------------------------------------
        //
        //  Public Methods
        //
        //--------------------------------------------------------------------------
        RenderingArrayItems.prototype.render = function () {
            return (widget_1.tsx("ol", { class: CSS.base }, this.items.map(function (item, key) {
                return widget_1.tsx("li", { class: CSS.item, key: item, tabIndex: 0 },
                    widget_1.tsx("span", { class: CSS.text }, item));
            })));
        };
        __decorate([
            decorators_1.property(),
            widget_1.renderable()
        ], RenderingArrayItems.prototype, "items", void 0);
        RenderingArrayItems = __decorate([
            decorators_1.subclass("examples.RenderingArrayItems")
        ], RenderingArrayItems);
        return RenderingArrayItems;
    }(decorators_1.declared(Widget)));
    return RenderingArrayItems;
});
