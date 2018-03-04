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
define(["require", "exports", "esri/core/tsSupport/declareExtendsHelper", "esri/core/tsSupport/decorateHelper", "esri/core/accessorSupport/decorators", "esri/core/promiseUtils", "esri/widgets/Widget", "esri/widgets/support/widget"], function (require, exports, __extends, __decorate, decorators_1, promiseUtils, Widget, widget_1) {
    "use strict";
    var CSS = {
        base: "esri-cleaning-up"
    };
    var CleaningUp = /** @class */ (function (_super) {
        __extends(CleaningUp, _super);
        function CleaningUp() {
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
            //  counter
            //----------------------------------
            _this.counter = 0;
            return _this;
        }
        CleaningUp.prototype.postInitialize = function () {
            var _this = this;
            var dayInSeconds = 86400;
            var dayElapsedPromise = promiseUtils.timeout(promiseUtils.resolve(), dayInSeconds, null);
            var counterWatcher = this.watch("counter", function (value, oldValue, name) {
                console.log(name + " changed from " + oldValue + " to " + value);
            });
            var counterIntervalId = setInterval(function () {
                console.log("counter: " + _this.counter++);
            }, 500);
            var nonHandleRemover = {
                remove: function () {
                    clearInterval(counterIntervalId);
                    dayElapsedPromise.cancel();
                }
            };
            // 'owned' handles will be destroyed automatically
            this.own([
                nonHandleRemover,
                counterWatcher
            ]);
        };
        //--------------------------------------------------------------------------
        //
        //  Public Methods
        //
        //--------------------------------------------------------------------------
        CleaningUp.prototype.render = function () {
            return (widget_1.tsx("div", { class: CSS.base }, this.counter));
        };
        __decorate([
            decorators_1.property(),
            widget_1.renderable()
        ], CleaningUp.prototype, "counter", void 0);
        CleaningUp = __decorate([
            decorators_1.subclass("examples.CleaningUp")
        ], CleaningUp);
        return CleaningUp;
    }(decorators_1.declared(Widget)));
    return CleaningUp;
});
