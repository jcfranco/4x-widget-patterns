/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import {subclass, declared, property} from "esri/core/accessorSupport/decorators";

import Widget = require("esri/widgets/Widget");

import {renderable, tsx} from "esri/widgets/support/widget";

const CSS = {
  base: "esri-node-creation",
  innerChild: "esri-node-creation__inner-child",
  outerChild: "esri-node-creation__outer-child"
};

@subclass("examples.AccessibleNodes")
class AccessibleNodes extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  postInitialize() {
    this._intervalId = setInterval(() => {
      this.text = this._options[this._currentOptionIndex++ % this._options.length];
    }, 500);
  }

  destroy() {
    clearInterval(this._intervalId);
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _options = ["first", "second", "third"];
  private _currentOptionIndex = 0;
  private _intervalId: number;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  text
  //----------------------------------

  @property()
  @renderable()
  text: string = this._options[this._currentOptionIndex++];

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {
    const childContent = this.text === "first" ? (
      <span class={CSS.innerChild}  afterCreate={this._afterInnerChildCreate}>{this.text}</span>
    ) : this.text;

    return (
      <div class={CSS.base} afterCreate={this._afterParentCreate}>
        <div class={CSS.outerChild} afterCreate={this._afterOuterChildCreate}>{
          childContent
        }</div>
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _afterParentCreate(): void {
    console.log("root created");
  }

  private _afterOuterChildCreate(): void {
    console.log("outer child created");
  }

  private _afterInnerChildCreate(): void {
    console.log("inner child created");
  }

}

export = AccessibleNodes;
