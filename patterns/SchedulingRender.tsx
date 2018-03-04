/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import {subclass, declared} from "esri/core/accessorSupport/decorators";

import Widget = require("esri/widgets/Widget");

import {tsx} from "esri/widgets/support/widget";

const CSS = {
  base: "esri-scheduling-render"
};

@subclass("examples.SchedulingRender")
class SchedulingRender extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  postInitialize() {
    setInterval(() => {

      // variable is not renderable, so we schedule rendering after modifying it
      this._working = !this._working;
      this.scheduleRender();

    }, 1000);
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _working = false;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {
    const label = this._working ? "working" : "!working";

    return (
      <div class={CSS.base}>{label}</div>
    );
  }

}

export = SchedulingRender;
