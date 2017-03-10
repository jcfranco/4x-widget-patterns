/// <amd-dependency path="esri/core/tsSupport/assignHelper" name="__assign" />
/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import {subclass, declared} from "esri/core/accessorSupport/decorators";

import Widget = require("esri/widgets/Widget");

import {jsxFactory} from "esri/widgets/support/widget";

const CSS = {
  base: "esri-spreading-attributes"
};

@subclass("examples.SpreadingAttributes")
class SpreadingAttributes extends declared(Widget) {

  private _propsToSpread: any = {
    "aria-role": "button",
    tabIndex: "0",
    title: "static-title"
  }

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {
    return (
      <div class={CSS.base} {...this._propsToSpread}>Check out my attributes!</div>
    );
  }

}

export = SpreadingAttributes;
