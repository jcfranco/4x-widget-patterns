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
        base: "esri-defining-getters-and-setters"
    };
    var DefiningGettersAndSetters = /** @class */ (function (_super) {
        __extends(DefiningGettersAndSetters, _super);
        function DefiningGettersAndSetters() {
            //--------------------------------------------------------------------------
            //
            //  Properties
            //
            //--------------------------------------------------------------------------
            var _this = _super !== null && _super.apply(this, arguments) || this;
            //----------------------------------
            //  normalProperty
            //----------------------------------
            _this.normalProperty = "normal";
            return _this;
        }
        Object.defineProperty(DefiningGettersAndSetters.prototype, "getterSetterProperty", {
            //----------------------------------
            //  getterSetterProperty
            //----------------------------------
            get: function () {
                return this._get("getterSetterProperty");
            },
            set: function (value) {
                this._set("getterSetterProperty", value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DefiningGettersAndSetters.prototype, "readOnlyProperty", {
            //----------------------------------
            //  readOnlyProperty
            //----------------------------------
            get: function () {
                return this._get("readOnlyProperty");
            },
            enumerable: true,
            configurable: true
        });
        //--------------------------------------------------------------------------
        //
        //  Public Methods
        //
        //--------------------------------------------------------------------------
        DefiningGettersAndSetters.prototype.render = function () {
            return (widget_1.tsx("div", { class: CSS.base },
                widget_1.tsx("div", null, this.normalProperty),
                widget_1.tsx("div", null, this.getterSetterProperty),
                widget_1.tsx("div", null, this.readOnlyProperty)));
        };
        __decorate([
            decorators_1.property()
        ], DefiningGettersAndSetters.prototype, "normalProperty", void 0);
        __decorate([
            decorators_1.property({
                value: "getter-setter"
            })
        ], DefiningGettersAndSetters.prototype, "getterSetterProperty", null);
        __decorate([
            decorators_1.property({
                value: "read-only",
                readOnly: true
            })
        ], DefiningGettersAndSetters.prototype, "readOnlyProperty", null);
        DefiningGettersAndSetters = __decorate([
            decorators_1.subclass("examples.DefiningGettersAndSetters")
        ], DefiningGettersAndSetters);
        return DefiningGettersAndSetters;
    }(decorators_1.declared(Widget)));
    return DefiningGettersAndSetters;
});
