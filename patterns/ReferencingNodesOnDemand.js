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
        base: "esri-referencing-nodes-on-demand"
    };
    var AccessibleNodes = /** @class */ (function (_super) {
        __extends(AccessibleNodes, _super);
        function AccessibleNodes() {
            //--------------------------------------------------------------------------
            //
            //  Variables
            //
            //--------------------------------------------------------------------------
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._nodes = [];
            _this._nodeIndex = 0;
            return _this;
        }
        //--------------------------------------------------------------------------
        //
        //  Public Methods
        //
        //--------------------------------------------------------------------------
        AccessibleNodes.prototype.render = function () {
            return (widget_1.tsx("div", { class: CSS.base },
                widget_1.tsx("div", null,
                    widget_1.tsx("textarea", { bind: this, afterCreate: this._storeNode, "data-child-index": 0, placeholder: "1st" }),
                    widget_1.tsx("textarea", { bind: this, afterCreate: this._storeNode, "data-child-index": 1, placeholder: "2nd" }),
                    widget_1.tsx("textarea", { bind: this, afterCreate: this._storeNode, "data-child-index": 2, placeholder: "3rd" })),
                widget_1.tsx("div", null,
                    widget_1.tsx("span", null, "Focus on"),
                    widget_1.tsx("select", { bind: this, onchange: this._storeNodeIndex },
                        widget_1.tsx("option", { value: 0, selected: true }, "1st"),
                        widget_1.tsx("option", { value: 1 }, "2nd"),
                        widget_1.tsx("option", { value: 2 }, "3rd")),
                    widget_1.tsx("span", null, "child")),
                widget_1.tsx("div", null,
                    widget_1.tsx("button", { bind: this, onclick: this._focusNode }, "Do it!"))));
        };
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        AccessibleNodes.prototype._focusNode = function () {
            this._nodes[this._nodeIndex].focus();
        };
        AccessibleNodes.prototype._storeNode = function (node) {
            var index = node["data-child-index"];
            this._nodes[index] = node;
        };
        AccessibleNodes.prototype._storeNodeIndex = function (event) {
            var node = event.target;
            this._nodeIndex = node.selectedIndex;
        };
        AccessibleNodes = __decorate([
            decorators_1.subclass("examples.ReferencingNodesOnDemand")
        ], AccessibleNodes);
        return AccessibleNodes;
    }(decorators_1.declared(Widget)));
    return AccessibleNodes;
});
