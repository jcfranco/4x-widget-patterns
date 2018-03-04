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
        base: "esri-boolean-attributes"
    };
    var BooleanAttributes = /** @class */ (function (_super) {
        __extends(BooleanAttributes, _super);
        function BooleanAttributes() {
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
            _this._selectedIndex = 0;
            return _this;
        }
        BooleanAttributes.prototype.postInitialize = function () {
            var _this = this;
            setInterval(function () {
                _this._selectedIndex = Math.floor(Math.random() * 10);
                _this.scheduleRender();
            }, 500);
        };
        //--------------------------------------------------------------------------
        //
        //  Public Methods
        //
        //--------------------------------------------------------------------------
        BooleanAttributes.prototype.render = function () {
            return (widget_1.tsx("div", { class: CSS.base },
                widget_1.tsx("select", null,
                    widget_1.tsx("option", { selected: this._selectedIndex === 0 }, "0"),
                    widget_1.tsx("option", { selected: this._selectedIndex === 1 }, "1"),
                    widget_1.tsx("option", { selected: this._selectedIndex === 2 }, "2"),
                    widget_1.tsx("option", { selected: this._selectedIndex === 3 }, "3"),
                    widget_1.tsx("option", { selected: this._selectedIndex === 4 }, "4"),
                    widget_1.tsx("option", { selected: this._selectedIndex === 5 }, "5"),
                    widget_1.tsx("option", { selected: this._selectedIndex === 6 }, "6"),
                    widget_1.tsx("option", { selected: this._selectedIndex === 7 }, "7"),
                    widget_1.tsx("option", { selected: this._selectedIndex === 8 }, "8"),
                    widget_1.tsx("option", { selected: this._selectedIndex === 9 }, "9"),
                    widget_1.tsx("option", { selected: this._selectedIndex === 10 }, "10"))));
        };
        BooleanAttributes = __decorate([
            decorators_1.subclass("examples.BooleanAttributes")
        ], BooleanAttributes);
        return BooleanAttributes;
    }(decorators_1.declared(Widget)));
    return BooleanAttributes;
});
