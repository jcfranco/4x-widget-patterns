/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import {subclass, declared, property} from "esri/core/accessorSupport/decorators";

import Widget = require("esri/widgets/Widget");

import {jsxFactory} from "esri/widgets/support/widget";

const CSS = {
  base: "esri-defining-getters-and-setters"
};

@subclass("examples.DefiningGettersAndSetters")
class DefiningGettersAndSetters extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  normalProperty
  //----------------------------------

  @property()
  normalProperty = "normal";

  //----------------------------------
  //  getterSetterProperty
  //----------------------------------

  @property({
    value: "getter-setter"
  })
  get getterSetterProperty(): boolean {
    return this._get("getterSetterProperty");
  }

  set getterSetterProperty(value: boolean) {
    this._set("getterSetterProperty", value);
  }

  //----------------------------------
  //  readOnlyProperty
  //----------------------------------

  @property({
    value: "read-only",
    readOnly: true
  })
  get readOnlyProperty(): boolean {
    return this._get("readOnlyProperty");
  }

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {
    return (
      <div class={CSS.base}>
        <div>{this.normalProperty}</div>
        <div>{this.getterSetterProperty}</div>
        <div>{this.readOnlyProperty}</div>
      </div>
    );
  }

}

export = DefiningGettersAndSetters;
