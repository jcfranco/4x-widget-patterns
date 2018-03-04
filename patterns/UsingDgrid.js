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
define(["require", "exports", "esri/core/tsSupport/declareExtendsHelper", "esri/core/tsSupport/decorateHelper", "dgrid/OnDemandGrid", "dstore/Memory", "esri/core/accessorSupport/decorators", "esri/widgets/Widget", "esri/widgets/support/widget"], function (require, exports, __extends, __decorate, OnDemandGrid, Memory, decorators_1, Widget, widget_1) {
    "use strict";
    var CSS = {
        base: "esri-using-dgrid",
        grid: "esri-using-dgrid__grid"
    };
    var UsingDgrid = /** @class */ (function (_super) {
        __extends(UsingDgrid, _super);
        function UsingDgrid() {
            //--------------------------------------------------------------------------
            //
            //  Lifecycle
            //
            //--------------------------------------------------------------------------
            var _this = _super !== null && _super.apply(this, arguments) || this;
            //--------------------------------------------------------------------------
            //
            //  Variables
            //
            //--------------------------------------------------------------------------
            _this._grid = null;
            _this._items = new Memory({
                idProperty: "firstName",
                data: [
                    {
                        firstName: "Jerry",
                        lastName: "Seinfeld"
                    },
                    {
                        firstName: "George",
                        lastName: "Costanza"
                    },
                    {
                        firstName: "Elaine",
                        lastName: "Benes"
                    },
                    {
                        firstName: "Cosmo",
                        lastName: "Kramer"
                    }
                ]
            });
            //--------------------------------------------------------------------------
            //
            //  Properties
            //
            //--------------------------------------------------------------------------
            //----------------------------------
            //  gridVisible
            //----------------------------------
            _this.gridVisible = true;
            return _this;
        }
        UsingDgrid.prototype.destroy = function () {
            if (this._grid) {
                this._grid.destroy();
                this._grid = null;
            }
        };
        //--------------------------------------------------------------------------
        //
        //  Public Methods
        //
        //--------------------------------------------------------------------------
        UsingDgrid.prototype.render = function () {
            var gridNode = this.gridVisible ? (widget_1.tsx("div", { afterCreate: this._handleAfterCreate, bind: this })) : null;
            return (widget_1.tsx("div", { class: CSS.base }, gridNode));
        };
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        UsingDgrid.prototype._handleAfterCreate = function (node) {
            var _this = this;
            if (!this._grid) {
                this._grid = new OnDemandGrid({
                    className: CSS.grid,
                    collection: this._items,
                    columns: [
                        { label: "First Name", field: "firstName", sortable: true },
                        { label: "Last Name", field: "lastName" }
                    ]
                }, node);
                this._grid.on("click", function (event) { return _this.emit("click", event); });
                return;
            }
            node.appendChild(this._grid.domNode);
        };
        __decorate([
            decorators_1.property(),
            widget_1.renderable()
        ], UsingDgrid.prototype, "gridVisible", void 0);
        UsingDgrid = __decorate([
            decorators_1.subclass("examples.UsingDgrid")
        ], UsingDgrid);
        return UsingDgrid;
    }(decorators_1.declared(Widget)));
    return UsingDgrid;
});
