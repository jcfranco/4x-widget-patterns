/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

/// <amd-dependency path="dijit/form/Button" name="Button" />
/// <amd-dependency path="dijit/form/HorizontalSlider" name="HorizontalSlider" />

/// <amd-dependency path="./support/loadStylesheet!dijit/themes/claro/claro.css"/>

import {subclass, declared, property} from "esri/core/accessorSupport/decorators";

import Widget = require("esri/widgets/Widget");

import {renderable, jsxFactory} from "esri/widgets/support/widget";

declare const Button: any;

// using any since not all dijits have type definitions
// submitting type definitions to https://github.com/dojo/typings is encouraged
declare const HorizontalSlider: any;

const CSS = {
  base: "esri-using-dijit",
  button: "esri-using-dijit__button",
  slider: "esri-using-dijit__slider"
};

function randomNumber(): number {
  return Math.floor(Math.random() * 100);
}

@subclass("examples.UsingDijit")
class UsingDijit extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  destroy() {
    if (this._button) {
      this._button.destroy();
      this._button = null;
    }

    if (this._slider) {
      this._slider.destroy();
      this._slider = null;
    }
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _button: any;
  private _slider: any;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  minValue
  //----------------------------------

  @property()
  @renderable()
  minValue = 0;

  //----------------------------------
  //  maxValue
  //----------------------------------

  @property()
  @renderable()
  maxValue = 100;

  //----------------------------------
  //  value
  //----------------------------------

  @property()
  @renderable()
  value = 50;

  //----------------------------------
  //  randomNumber
  //----------------------------------

  @property({
    readOnly: true
  })
  @renderable()
  randomNumber = randomNumber();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {
    return (
      <div class="claro">
        <div afterCreate={this._createButton} bind={this}></div>
        <span>{this.randomNumber}</span>
        <div afterCreate={this._createSlider} bind={this}></div>
        <div>
          <span>{this.value}</span>
        </div>
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _createButton(node: Element): void {
    this._button = new Button({
      class: CSS.button,
      label: "I am a dijit button",
      onClick: () => {
        console.log("dijit button was clicked");
        this._set("randomNumber", randomNumber());
        // this.scheduleRender();
      }
    }, node);

    this._button.startup();
  }

  private _createSlider(node: Element): void {
    this._slider = new HorizontalSlider({
      class: CSS.slider,
      intermediateChanges: true,
      minimum: this.minValue,
      maximum: this.maxValue,
      value: this.value,
      onChange: (value: number) => {
        this.value = value;
      }
    }, node);

    this._slider.startup();
  }

}

export = UsingDijit;
