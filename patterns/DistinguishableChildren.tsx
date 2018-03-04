/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import {subclass, declared} from "esri/core/accessorSupport/decorators";

import Widget = require("esri/widgets/Widget");

import {tsx} from "esri/widgets/support/widget";

const CSS = {
  base: "esri-distinguishable-children",
  item: "esri-distinguishable-children__item"
};

function createRandomListItems(): any[] {
  const children: any[] = [];

  for (let i = 0; i < randomNum(); i++) {
    children.push(
      // use `key` to distinguish this elements that will be added/removed dynamically
      <li class={CSS.item} key={i}>item {i}</li>
    );
  }

  return children;
}

function randomNum(max = 10): number {
  return Math.random() * max;
}

@subclass("examples.DistinguishableChildren")
class DistinguishableChildren extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  postInitialize() {
    setInterval(() => this.scheduleRender(), 500);
  }

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {
    return (
      <div class={CSS.base}>{
        <ul>{createRandomListItems()}</ul>
      }</div>
    );
  }

}

export = DistinguishableChildren;
