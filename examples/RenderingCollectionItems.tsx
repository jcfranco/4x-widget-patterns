/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import {subclass, declared, property} from "esri/core/accessorSupport/decorators";

import Collection = require("esri/core/Collection");

import Widget = require("esri/widgets/Widget");

import {renderable, jsxFactory} from "esri/widgets/support/widget";

const CSS = {
  base: "esri-rendering-collection-items",
  item: "esri-rendering-collection-items__item",
  text: "esri-rendering-collection-items__item-text"
};

@subclass("examples.RenderingCollectionItems")
class RenderingCollectionItems extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  postInitialize() {

    setInterval(() => {
      const kramer = "Kramer";

      // @renderable schedules rendering when the collection is modified

      if (this.items.indexOf(kramer) === -1) {
        this.items.add(kramer);
      }
      else {
        this.items.remove(kramer);
      }
    }, 500);
  }

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
  // TODO: update to Collection<string> once typings support generics
  items: Collection = new Collection(["Jerry", "George", "Elaine", "Kramer"]);

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {
    const items = this.items.toArray();

    return (
      <ol class={CSS.base}>
        {
          items.map((item, key) =>
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

export = RenderingCollectionItems;
