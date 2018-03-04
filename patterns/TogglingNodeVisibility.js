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
        base: "esri-toggling-node-visibility",
        header: "esri-toggling-node-visibility__header",
        content: "esri-toggling-node-visibility__content",
        footer: "esri-toggling-node-visibility__footer"
    };
    var TogglingNodeVisibility = /** @class */ (function (_super) {
        __extends(TogglingNodeVisibility, _super);
        function TogglingNodeVisibility() {
            //--------------------------------------------------------------------------
            //
            //  Properties
            //
            //--------------------------------------------------------------------------
            var _this = _super !== null && _super.apply(this, arguments) || this;
            //----------------------------------
            //  headerVisible
            //----------------------------------
            _this.headerVisible = true;
            //----------------------------------
            //  contentVisible
            //----------------------------------
            _this.contentVisible = true;
            //----------------------------------
            //  footerVisible
            //----------------------------------
            _this.footerVisible = true;
            return _this;
        }
        //--------------------------------------------------------------------------
        //
        //  Public Methods
        //
        //--------------------------------------------------------------------------
        TogglingNodeVisibility.prototype.render = function () {
            var headerNode = this.headerVisible ? (widget_1.tsx("header", { class: CSS.header }, "header")) : null;
            var contentNode = this.contentVisible ? (widget_1.tsx("div", { class: CSS.content }, "content")) : null;
            var footerNode = this.footerVisible ? (widget_1.tsx("footer", { class: CSS.footer }, "footer")) : null;
            return (widget_1.tsx("div", { class: CSS.base },
                headerNode,
                contentNode,
                footerNode));
        };
        __decorate([
            decorators_1.property(),
            widget_1.renderable()
        ], TogglingNodeVisibility.prototype, "headerVisible", void 0);
        __decorate([
            decorators_1.property(),
            widget_1.renderable()
        ], TogglingNodeVisibility.prototype, "contentVisible", void 0);
        __decorate([
            decorators_1.property(),
            widget_1.renderable()
        ], TogglingNodeVisibility.prototype, "footerVisible", void 0);
        TogglingNodeVisibility = __decorate([
            decorators_1.subclass("examples.TogglingNodeVisibility")
        ], TogglingNodeVisibility);
        return TogglingNodeVisibility;
    }(decorators_1.declared(Widget)));
    return TogglingNodeVisibility;
});
