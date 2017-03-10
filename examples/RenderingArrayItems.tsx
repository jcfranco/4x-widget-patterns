/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import {subclass, declared, property} from "esri/core/accessorSupport/decorators";

import Widget = require("esri/widgets/Widget");

import {renderable, jsxFactory} from "esri/widgets/support/widget";

const CSS = {
  base: "esri-rendering-array-items",
  item: "esri-rendering-array-items__item",
  text: "esri-rendering-array-items__item-text"
};

@subclass("examples.RenderingArrayItems")
class RenderingArrayItems extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  items
  //----------------------------------

  @property()
  @renderable()
  items: string[] = ["Jerry", "George", "Elaine", "Kramer"];

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {
    return (
      <ol class={CSS.base}>
        {
          this.items.map((item, key) =>
            <li class={CSS.item}
                key={item}
                tabIndex={0}>
              <span class={CSS.text}>{item}</span>
            </li>
          )
        }
      </ol>
    );
  }

}

export = RenderingArrayItems;
