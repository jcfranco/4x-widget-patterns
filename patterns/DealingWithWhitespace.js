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
    var DealingWithWhitespace = /** @class */ (function (_super) {
        __extends(DealingWithWhitespace, _super);
        function DealingWithWhitespace() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        //--------------------------------------------------------------------------
        //
        //  Public Methods
        //
        //--------------------------------------------------------------------------
        DealingWithWhitespace.prototype.render = function () {
            // taken from http://www.bennadel.com/blog/2880-a-quick-look-at-rendering-white-space-using-jsx-in-reactjs.htm
            return (widget_1.tsx("section", null,
                widget_1.tsx("p", null,
                    widget_1.tsx("span", null, "Bro!"),
                    widget_1.tsx("span", null, "You"),
                    widget_1.tsx("span", null, "had"),
                    widget_1.tsx("span", null, "me"),
                    widget_1.tsx("span", null, "at"),
                    widget_1.tsx("span", null, "\"White space.\"")),
                widget_1.tsx("p", null,
                    "There's ",
                    widget_1.tsx("em", null, "literally"),
                    " nothing more exciting!"),
                widget_1.tsx("p", null,
                    "But don't get me started on",
                    widget_1.tsx("strong", null, "kerning"),
                    " and ",
                    widget_1.tsx("strong", null, "tracking"),
                    "or we'll be here all day."),
                widget_1.tsx("p", null, "That said, if you want to get groovy on the use of negative space in design, then I will be more than happy to chat. I have nowhere else to be at this moment."),
                widget_1.tsx("p", null,
                    widget_1.tsx("span", null, "Bro!"),
                    " ",
                    widget_1.tsx("span", null, "You"),
                    " ",
                    widget_1.tsx("span", null, "had"),
                    " ",
                    widget_1.tsx("span", null, "me"),
                    " ",
                    widget_1.tsx("span", null, "at"),
                    " ",
                    widget_1.tsx("span", null, "\"White space.\""))));
        };
        DealingWithWhitespace = __decorate([
            decorators_1.subclass("examples.DealingWithWhitespace")
        ], DealingWithWhitespace);
        return DealingWithWhitespace;
    }(decorators_1.declared(Widget)));
    return DealingWithWhitespace;
});
