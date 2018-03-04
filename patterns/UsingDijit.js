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
define(["require", "exports", "esri/core/tsSupport/declareExtendsHelper", "esri/core/tsSupport/decorateHelper", "dijit/form/Button", "dijit/form/HorizontalSlider", "esri/core/accessorSupport/decorators", "esri/widgets/Widget", "esri/widgets/support/widget", "./support/loadStylesheet!dijit/themes/claro/claro.css"], function (require, exports, __extends, __decorate, Button, HorizontalSlider, decorators_1, Widget, widget_1) {
    "use strict";
    var CSS = {
        base: "esri-using-dijit",
        button: "esri-using-dijit__button",
        slider: "esri-using-dijit__slider"
    };
    function randomNumber() {
        return Math.floor(Math.random() * 100);
    }
    var UsingDijit = /** @class */ (function (_super) {
        __extends(UsingDijit, _super);
        function UsingDijit() {
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
            //  minValue
            //----------------------------------
            _this.minValue = 0;
            //----------------------------------
            //  maxValue
            //----------------------------------
            _this.maxValue = 100;
            //----------------------------------
            //  value
            //----------------------------------
            _this.value = 50;
            //----------------------------------
            //  randomNumber
            //----------------------------------
            _this.randomNumber = randomNumber();
            return _this;
        }
        UsingDijit.prototype.destroy = function () {
            if (this._button) {
                this._button.destroy();
                this._button = null;
            }
            if (this._slider) {
                this._slider.destroy();
                this._slider = null;
            }
        };
        //--------------------------------------------------------------------------
        //
        //  Public Methods
        //
        //--------------------------------------------------------------------------
        UsingDijit.prototype.render = function () {
            return (widget_1.tsx("div", { class: "claro" },
                widget_1.tsx("div", { afterCreate: this._createButton, bind: this }),
                widget_1.tsx("span", null, this.randomNumber),
                widget_1.tsx("div", { afterCreate: this._createSlider, bind: this }),
                widget_1.tsx("div", null,
                    widget_1.tsx("span", null, this.value))));
        };
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        UsingDijit.prototype._createButton = function (node) {
            var _this = this;
            this._button = new Button({
                class: CSS.button,
                label: "I am a dijit button",
                onClick: function () {
                    console.log("dijit button was clicked");
                    _this._set("randomNumber", randomNumber());
                    // this.scheduleRender();
                }
            }, node);
            this._button.startup();
        };
        UsingDijit.prototype._createSlider = function (node) {
            var _this = this;
            this._slider = new HorizontalSlider({
                class: CSS.slider,
                intermediateChanges: true,
                minimum: this.minValue,
                maximum: this.maxValue,
                value: this.value,
                onChange: function (value) {
                    _this.value = value;
                }
            }, node);
            this._slider.startup();
        };
        __decorate([
            decorators_1.property(),
            widget_1.renderable()
        ], UsingDijit.prototype, "minValue", void 0);
        __decorate([
            decorators_1.property(),
            widget_1.renderable()
        ], UsingDijit.prototype, "maxValue", void 0);
        __decorate([
            decorators_1.property(),
            widget_1.renderable()
        ], UsingDijit.prototype, "value", void 0);
        __decorate([
            decorators_1.property({
                readOnly: true
            }),
            widget_1.renderable()
        ], UsingDijit.prototype, "randomNumber", void 0);
        UsingDijit = __decorate([
            decorators_1.subclass("examples.UsingDijit")
        ], UsingDijit);
        return UsingDijit;
    }(decorators_1.declared(Widget)));
    return UsingDijit;
});
