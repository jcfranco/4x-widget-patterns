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
define(["require", "exports", "esri/core/tsSupport/declareExtendsHelper", "esri/core/tsSupport/decorateHelper", "esri/core/accessorSupport/decorators", "esri/core/Collection", "esri/widgets/Widget", "esri/widgets/support/widget"], function (require, exports, __extends, __decorate, decorators_1, Collection, Widget, widget_1) {
    "use strict";
    var CSS = {
        base: "esri-rendering-collection-items",
        item: "esri-rendering-collection-items__item",
        text: "esri-rendering-collection-items__item-text"
    };
    var RenderingCollectionItems = /** @class */ (function (_super) {
        __extends(RenderingCollectionItems, _super);
        function RenderingCollectionItems() {
            //--------------------------------------------------------------------------
            //
            //  Lifecycle
            //
            //--------------------------------------------------------------------------
            var _this = _super !== null && _super.apply(this, arguments) || this;
            //--------------------------------------------------------------------------
            //
            //  Properties
            //
            //--------------------------------------------------------------------------
            //----------------------------------
            //  items
            //----------------------------------
            // TODO: update to Collection<string> once typings support generics
            _this.items = new Collection(["Jerry", "George", "Elaine", "Kramer"]);
            return _this;
        }
        RenderingCollectionItems.prototype.postInitialize = function () {
            var _this = this;
            setInterval(function () {
                var kramer = "Kramer";
                // @renderable schedules rendering when the collection is modified
                if (_this.items.indexOf(kramer) === -1) {
                    _this.items.add(kramer);
                }
                else {
                    _this.items.remove(kramer);
                }
            }, 500);
        };
        //--------------------------------------------------------------------------
        //
        //  Public Methods
        //
        //--------------------------------------------------------------------------
        RenderingCollectionItems.prototype.render = function () {
            var items = this.items.toArray();
            return (widget_1.tsx("ol", { class: CSS.base }, items.map(function (item, key) {
                return widget_1.tsx("li", { class: CSS.item, key: item, tabIndex: 0 },
                    widget_1.tsx("span", { class: CSS.text }, item));
            })));
        };
        __decorate([
            decorators_1.property(),
            widget_1.renderable()
            // TODO: update to Collection<string> once typings support generics
        ], RenderingCollectionItems.prototype, "items", void 0);
        RenderingCollectionItems = __decorate([
            decorators_1.subclass("examples.RenderingCollectionItems")
        ], RenderingCollectionItems);
        return RenderingCollectionItems;
    }(decorators_1.declared(Widget)));
    return RenderingCollectionItems;
});
