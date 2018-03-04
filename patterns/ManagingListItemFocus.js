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
    var UP_ARROW = 38;
    var DOWN_ARROW = 40;
    var CSS = {
        base: "esri-hello-list",
        item: "esri-hello-list__item",
        text: "esri-hello-list__item-text"
    };
    var ManagingListItemFocus = /** @class */ (function (_super) {
        __extends(ManagingListItemFocus, _super);
        function ManagingListItemFocus() {
            //--------------------------------------------------------------------------
            //
            //  Variables
            //
            //--------------------------------------------------------------------------
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._focusIndex = 0;
            //--------------------------------------------------------------------------
            //
            //  Properties
            //
            //--------------------------------------------------------------------------
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
        ManagingListItemFocus.prototype.render = function () {
            return (widget_1.tsx("ol", { afterUpdate: this._handleAfterUpdate, bind: this, class: CSS.base, onclick: this._handleListClick, onkeydown: this._handleKeyDown }, this.items.map(this._simpleToComplexItem)));
        };
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        ManagingListItemFocus.prototype._handleAfterUpdate = function (node, options, selector, props, children) {
            var focusIndex = this._focusIndex;
            if (children[focusIndex]) {
                children[focusIndex].domNode.focus();
            }
        };
        ManagingListItemFocus.prototype._handleListClick = function (event) {
            var item = event.target;
            var list = event.currentTarget;
            var children = Array.prototype.slice.apply(list.children);
            this._focusIndex = children.indexOf(item);
        };
        ManagingListItemFocus.prototype._handleKeyDown = function (event) {
            if (event.keyCode !== UP_ARROW && event.keyCode !== DOWN_ARROW) {
                return;
            }
            var nextIndex;
            var numItems = this.items.length - 1;
            if (event.keyCode === UP_ARROW) {
                nextIndex = this._focusIndex - 1;
                nextIndex = nextIndex < 0 ? 0 : nextIndex;
            }
            if (event.keyCode === DOWN_ARROW) {
                nextIndex = this._focusIndex + 1;
                nextIndex = nextIndex > numItems ? numItems : nextIndex;
            }
            this._focusIndex = nextIndex;
        };
        ManagingListItemFocus.prototype._simpleToComplexItem = function (item) {
            return (widget_1.tsx("li", { class: CSS.item, key: item, tabIndex: 0 },
                widget_1.tsx("span", { class: CSS.text }, item)));
        };
        __decorate([
            decorators_1.property(),
            widget_1.renderable()
        ], ManagingListItemFocus.prototype, "items", void 0);
        ManagingListItemFocus = __decorate([
            decorators_1.subclass("examples.ManagingListItemFocus")
        ], ManagingListItemFocus);
        return ManagingListItemFocus;
    }(decorators_1.declared(Widget)));
    return ManagingListItemFocus;
});
