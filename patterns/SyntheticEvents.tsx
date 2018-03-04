/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import Widget = require("esri/widgets/Widget");

import {
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";

import {tsx, renderable} from "esri/widgets/support/widget";

const CSS = {
  base: "esri-synthetic-events",
  header: "esri-synthetic-events__header",
  input: "esri-synthetic-events__input",
  footer: "esri-synthetic-events__footer"
};

@subclass("examples.SyntheticEvents")
class SyntheticEvents extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  selectedItem
  //----------------------------------

  @property()
  @renderable()
  selectedNodeType: string = null;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {
    const lastSelection = this.selectedNodeType ? this.selectedNodeType : "n/a";

    return (
      <div bind={this}
           class={CSS.base}
           onclick={this._handleClick}>
        <header bind={this}
                class={CSS.header}
                onclick={this._handleClick}>
          Clicking on an element will emit a synthetic event
        </header>
        <input bind={this}
               class={CSS.input}
               onclick={this._handleClick}
               type="button"
               value="Click me"/>
        <footer bind={this}
                class={CSS.footer}
                onclick={this._handleClick}>
          Last selected element is: {lastSelection}</footer>
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _handleClick(event: MouseEvent): void {
    const node = event.target as HTMLElement;
    const nodeName = node.nodeName;

    this.selectedNodeType = nodeName;

    this.emit("item-selected", {
      selectedItemNode: nodeName
    });
  }

}

export = SyntheticEvents;
