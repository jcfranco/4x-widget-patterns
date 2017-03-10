/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import {subclass, declared} from "esri/core/accessorSupport/decorators";

import Widget = require("esri/widgets/Widget");

import {jsxFactory} from "esri/widgets/support/widget";

const CSS = {
  base: "esri-handling-multiple-events",
  item: "esri-handling-multiple-events__item"
};

@subclass("examples.HandlingMultipleEvents")
class HandlingMultipleEvents extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  _focusedItem: string;

  _items = ["tab", "between", "us"];

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {
    return (
      <div class={CSS.base}>
        <div data-item-id="tab"
             bind={this}
             class={CSS.item}
             styles={this._itemToStyles("tab")}
             onfocus={this._handleFocus}
             onblur={this._handleBlur}
             tabIndex={0}>
          Tab
        </div>
        <span data-item-id="between"
              bind={this}
              class={CSS.item}
              styles={this._itemToStyles("between")}
              onfocus={this._handleFocus}
              onblur={this._handleBlur}
              tabIndex={0}>
          between
        </span>
        <p data-item-id="us"
           bind={this}
           class={CSS.item}
           styles={this._itemToStyles("us")}
           onfocus={this._handleFocus}
           onblur={this._handleBlur}
           tabIndex={0}>
          us
        </p>
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _itemToStyles(id: string): HashMap<string> {
    // using inline-styles for demo purposes only
    return {
      "font-weight": this._focusedItem === id ? "bolder" : ""
    };
  }

  private _handleFocus(event: FocusEvent): void {
    const node = event.currentTarget as Element;
    this._focusedItem = node.getAttribute("data-item-id");
  }

  private _handleBlur(event: FocusEvent): void {
    const node = event.currentTarget as Element;

    if (this._focusedItem === node.getAttribute("data-item-id")) {
      this._focusedItem = null;
    }
  }

}

export = HandlingMultipleEvents;
