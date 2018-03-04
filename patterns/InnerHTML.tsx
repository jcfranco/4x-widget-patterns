/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import {subclass, declared} from "esri/core/accessorSupport/decorators";

import Widget = require("esri/widgets/Widget");

import {tsx} from "esri/widgets/support/widget";

const CSS = {
  base: "esri-innerhtml"
};

@subclass("examples.InnerHTML")
class InnerHTML extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {
    const someExternalContent = "<b>I am bold!</b>";

    return (
      <div class={CSS.base} innerHTML={someExternalContent} />
    );
  }

}

export = InnerHTML;
