/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import {subclass, declared} from "esri/core/accessorSupport/decorators";

import Widget = require("esri/widgets/Widget");

import {tsx} from "esri/widgets/support/widget";

const CSS = {
  base: "esri-binding"
};

@subclass("examples.Binding")
class Binding extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {
    return (
      <div class={CSS.base}>
        <div bind={this}
             onclick={this._handlerWhereThisIsWidget}>this === widget</div>
        <div onclick={this._handlerWithThisIsNode}>this === node</div>
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _handlerWhereThisIsWidget(): void {
    console.log(this);  // this === widget instance
  }

  private _handlerWithThisIsNode(): void {
    console.log(this);  // this === DOM node
  }

}

export = Binding;
