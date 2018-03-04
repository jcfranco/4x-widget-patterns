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
        base: "esri-custom-event-handler-arguments"
    };
    function numberBetween0And100() {
        return Math.floor((Math.random() * 100) + 1);
    }
    function luckyNumbers() {
        var nums = [
            numberBetween0And100(),
            numberBetween0And100(),
            numberBetween0And100(),
            numberBetween0And100(),
            numberBetween0And100(),
            numberBetween0And100(),
            numberBetween0And100()
        ];
        return nums[0] + "-" + nums[1] + "-" + nums[2] + "-" + nums[3] + "-" + nums[4] + "-" + nums[5] + "-" + nums[6];
    }
    var CustomEventHandlerArguments = /** @class */ (function (_super) {
        __extends(CustomEventHandlerArguments, _super);
        function CustomEventHandlerArguments() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        //--------------------------------------------------------------------------
        //
        //  Public Methods
        //
        //--------------------------------------------------------------------------
        CustomEventHandlerArguments.prototype.render = function () {
            return (widget_1.tsx("div", { class: CSS.base, onclick: this._handleClick, "data-lucky-numbers": luckyNumbers() }, "Click me for your lucky numbers!"));
        };
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        CustomEventHandlerArguments.prototype._handleClick = function (event) {
            var node = event.currentTarget;
            var luckyNums = node.getAttribute("data-lucky-numbers");
            console.log("Today's lucky numbers are: " + luckyNums);
        };
        CustomEventHandlerArguments = __decorate([
            decorators_1.subclass("examples.CustomEventHandlerArguments")
        ], CustomEventHandlerArguments);
        return CustomEventHandlerArguments;
    }(decorators_1.declared(Widget)));
    return CustomEventHandlerArguments;
});
