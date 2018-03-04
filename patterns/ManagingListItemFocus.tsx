/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />


import {subclass, declared, property} from "esri/core/accessorSupport/decorators";

import Widget = require("esri/widgets/Widget");

import {renderable, tsx} from "esri/widgets/support/widget";

const UP_ARROW = 38;
const DOWN_ARROW = 40;

const CSS = {
  base: "esri-hello-list",
  item: "esri-hello-list__item",
  text: "esri-hello-list__item-text"
};

@subclass("examples.ManagingListItemFocus")
class ManagingListItemFocus extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  _focusIndex = 0;

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
      <ol afterUpdate={this._handleAfterUpdate}
          bind={this}
          class={CSS.base}
          onclick={this._handleListClick}
          onkeydown={this._handleKeyDown}>
        { this.items.map(this._simpleToComplexItem) }
      </ol>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _handleAfterUpdate(node: any, options: any, selector: string, props: any, children: any[]): void {
    const focusIndex = this._focusIndex;

    if (children[focusIndex]) {
      children[focusIndex].domNode.focus();
    }
  }

  private _handleListClick(event: MouseEvent): void {
    const item = (event.target as HTMLInputElement);
    const list = (event.currentTarget as HTMLOListElement);
    const children = Array.prototype.slice.apply(list.children);

    this._focusIndex = children.indexOf(item);
  }

  private _handleKeyDown(event: KeyboardEvent): void {
    if (event.keyCode !== UP_ARROW && event.keyCode !== DOWN_ARROW) {
      return;
    }

    let nextIndex: number;
    const numItems = this.items.length - 1;

    if (event.keyCode === UP_ARROW) {
      nextIndex = this._focusIndex - 1;
      nextIndex = nextIndex < 0 ? 0 : nextIndex;
    }

    if (event.keyCode === DOWN_ARROW) {
      nextIndex = this._focusIndex + 1;
      nextIndex = nextIndex > numItems ? numItems : nextIndex;
    }

    this._focusIndex = nextIndex;
  }

  private _simpleToComplexItem(item: string): any {
    return (
      <li class={CSS.item}
          key={item}
          tabIndex={0}>
        <span class={CSS.text}>{item}</span>
      </li>
    );
  }

}

export = ManagingListItemFocus;
