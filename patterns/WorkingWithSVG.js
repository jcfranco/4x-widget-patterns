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
define(["require", "exports", "esri/core/tsSupport/declareExtendsHelper", "esri/core/tsSupport/decorateHelper", "esri/core/accessorSupport/decorators", "esri/widgets/support/widget", "esri/widgets/Widget", "esri/Color"], function (require, exports, __extends, __decorate, decorators_1, widget_1, Widget, Color) {
    "use strict";
    var CSS = {
        base: "esri-working-with-svg"
    };
    var WorkingWithSVG = /** @class */ (function (_super) {
        __extends(WorkingWithSVG, _super);
        function WorkingWithSVG() {
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
            _this._currentColorIndex = 0;
            _this._demoColors = [
                "#E44D26",
                "97270A",
                "9DE83E",
                "0C34B1",
                "123297"
            ];
            //--------------------------------------------------------------------------
            //
            //  Properties
            //
            //--------------------------------------------------------------------------
            //----------------------------------
            //  color
            //----------------------------------
            _this.color = new Color(_this._demoColors[_this._currentColorIndex]);
            //----------------------------------
            //  headerVisible
            //----------------------------------
            _this.headerVisible = true;
            return _this;
        }
        WorkingWithSVG.prototype.postInitialize = function () {
            var _this = this;
            // changing colors for demo purposes
            setInterval(function () {
                _this._currentColorIndex = (_this._currentColorIndex + 1) % _this._demoColors.length;
                _this.color = new Color(_this._demoColors[_this._currentColorIndex]);
            }, 800);
        };
        //--------------------------------------------------------------------------
        //
        //  Public Methods
        //
        //--------------------------------------------------------------------------
        WorkingWithSVG.prototype.render = function () {
            var hex = this.color.toHex();
            var header = this.headerVisible ? (widget_1.tsx("g", null,
                widget_1.tsx("path", { fill: hex, d: "M119.387,20.312h21.298v21.045h19.485V20.312h21.303v63.727H160.17V62.7h-19.485v21.338h-21.298V20.312z" }),
                widget_1.tsx("path", { fill: hex, d: "M209.482,41.444h-18.754V20.312h58.812v21.133h-18.759v42.594h-21.3V41.444z" }),
                widget_1.tsx("path", { fill: hex, d: "M258.879,20.312h22.21l13.661,22.392l13.648-22.392h22.219v63.727h-21.212V52.453L294.75,75.111h-0.366 l-14.665-22.658v31.585h-20.84V20.312z" }),
                widget_1.tsx("path", { fill: hex, d: "M341.219,20.312h21.308v42.664h29.955v21.062h-51.263V20.312z" }))) : null;
            return (widget_1.tsx("div", { class: CSS.base },
                widget_1.tsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
                    widget_1.tsx("title", null, "HTML5 Logo"),
                    widget_1.tsx("g", null,
                        header,
                        widget_1.tsx("path", { fill: hex, d: "M200.662,266.676H256v-42.92h-59.169L200.662,266.676z M88.686,111.982l30.47,341.74l136.762,37.966 l136.891-37.948l30.507-341.758H88.686z M366.694,431.981L256,462.668v-43.494l-0.067,0.02l-85.858-23.835l-6.004-67.298h42.075 l3.116,34.914l46.68,12.607l0.059-0.019V308.59h-93.669l-11.306-126.749H256v-41.914h136.766L366.694,431.981z" }),
                        widget_1.tsx("path", { opacity: "0.8", fill: hex, d: "M307.592,308.59H256v66.974l46.728-12.613L307.592,308.59z M256,139.927v41.914h104.975 l-3.754,41.915H256v42.92h97.406l-11.499,128.683L256,419.174v43.494l110.694-30.687l26.071-292.055H256z" }),
                        widget_1.tsx("g", { opacity: "0.2" },
                            widget_1.tsx("polygon", { fill: hex, points: "256,181.841 151.025,181.841 162.331,308.59 256,308.59 256,266.676 200.662,266.676 196.831,223.756 256,223.756 		" }),
                            widget_1.tsx("polygon", { fill: hex, points: "256,375.563 255.941,375.582 209.262,362.975 206.146,328.061 164.07,328.061 170.074,395.358 255.933,419.193 256,419.174" }))))));
        };
        __decorate([
            decorators_1.property({
                type: Color
            }),
            widget_1.renderable()
        ], WorkingWithSVG.prototype, "color", void 0);
        __decorate([
            decorators_1.property(),
            widget_1.renderable()
        ], WorkingWithSVG.prototype, "headerVisible", void 0);
        WorkingWithSVG = __decorate([
            decorators_1.subclass("examples.WorkingWithSVG")
        ], WorkingWithSVG);
        return WorkingWithSVG;
    }(decorators_1.declared(Widget)));
    return WorkingWithSVG;
});
