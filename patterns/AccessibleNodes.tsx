/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import {subclass, declared, property} from "esri/core/accessorSupport/decorators";

import Widget = require("esri/widgets/Widget");

import {renderable, tsx, accessibleHandler} from "esri/widgets/support/widget";

const CSS = {
  base: "esri-accessible-nodes"
};

@subclass("examples.AccessibleNodes")
class AccessibleNodes extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  enabled
  //----------------------------------

  @property()
  @renderable()
  enabled = true;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {
    const child = this.enabled ? (
      <div>( ＾∇＾)ノ {'{'} ohai!</div>
    ) : null;

    return (
      <div bind={this}
           class={CSS.base}
           onclick={this._handleClick}
           onkeydown={this._handleClick}
           tabIndex={0}>
        Click or press space/enter key (when focused) to toggle
        {child}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  @accessibleHandler()
  private _handleClick(): void {
    this.enabled = !this.enabled;
  }

}

export = AccessibleNodes;
