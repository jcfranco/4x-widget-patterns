/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import {subclass, declared} from "esri/core/accessorSupport/decorators";

import Widget = require("esri/widgets/Widget");

import {jsxFactory} from "esri/widgets/support/widget";

const CSS = {
  base: "esri-custom-event-handler-arguments"
};

function numberBetween0And100() {
  return Math.floor((Math.random() * 100) + 1);
}

function luckyNumbers() {
  const nums = [
    numberBetween0And100(),
    numberBetween0And100(),
    numberBetween0And100(),
    numberBetween0And100(),
    numberBetween0And100(),
    numberBetween0And100(),
    numberBetween0And100()
  ];

  return `${nums[0]}-${nums[1]}-${nums[2]}-${nums[3]}-${nums[4]}-${nums[5]}-${nums[6]}`;
}

@subclass("examples.CustomEventHandlerArguments")
class CustomEventHandlerArguments extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {
    return (
      <div class={CSS.base}
           onclick={this._handleClick}
           data-lucky-numbers={luckyNumbers()}>
        Click me for your lucky numbers!
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _handleClick(event: MouseEvent) {
    const node = event.currentTarget as Element;
    const luckyNums = node.getAttribute("data-lucky-numbers");
    console.log(`Today's lucky numbers are: ${luckyNums}`);
  }

}

export = CustomEventHandlerArguments;
