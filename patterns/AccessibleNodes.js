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
        base: "esri-accessible-nodes"
    };
    var AccessibleNodes = /** @class */ (function (_super) {
        __extends(AccessibleNodes, _super);
        function AccessibleNodes() {
            //--------------------------------------------------------------------------
            //
            //  Properties
            //
            //--------------------------------------------------------------------------
            var _this = _super !== null && _super.apply(this, arguments) || this;
            //----------------------------------
            //  enabled
            //----------------------------------
            _this.enabled = true;
            return _this;
        }
        //--------------------------------------------------------------------------
        //
        //  Public Methods
        //
        //--------------------------------------------------------------------------
        AccessibleNodes.prototype.render = function () {
            var child = this.enabled ? (widget_1.tsx("div", null,
                "( \uFF3E\u2207\uFF3E)\u30CE ",
                '{',
                " ohai!")) : null;
            return (widget_1.tsx("div", { bind: this, class: CSS.base, onclick: this._handleClick, onkeydown: this._handleClick, tabIndex: 0 },
                "Click or press space/enter key (when focused) to toggle",
                child));
        };
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        AccessibleNodes.prototype._handleClick = function () {
            this.enabled = !this.enabled;
        };
        __decorate([
            decorators_1.property(),
            widget_1.renderable()
        ], AccessibleNodes.prototype, "enabled", void 0);
        __decorate([
            widget_1.accessibleHandler()
        ], AccessibleNodes.prototype, "_handleClick", null);
        AccessibleNodes = __decorate([
            decorators_1.subclass("examples.AccessibleNodes")
        ], AccessibleNodes);
        return AccessibleNodes;
    }(decorators_1.declared(Widget)));
    return AccessibleNodes;
});
