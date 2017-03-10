/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import {subclass, declared, property} from "esri/core/accessorSupport/decorators";
import {renderable, jsxFactory} from "esri/widgets/support/widget";

import Widget = require("esri/widgets/Widget");

import Color = require("esri/Color");

const CSS = {
  base: "esri-working-with-svg"
};

@subclass("examples.WorkingWithSVG")
class WorkingWithSVG extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  postInitialize() {

    // changing colors for demo purposes
    setInterval(() => {
      this._currentColorIndex = (this._currentColorIndex + 1) % this._demoColors.length;
      this.color = new Color(this._demoColors[this._currentColorIndex]);
    }, 800);
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _currentColorIndex = 0;

  private _demoColors = [
    "#E44D26",
    "97270A",
    "9DE83E",
    "0C34B1",
    "123297"
  ];

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  color
  //----------------------------------

  @property({
    type: Color
  })
  @renderable()
  color = new Color(this._demoColors[this._currentColorIndex]);

  //----------------------------------
  //  headerVisible
  //----------------------------------

  @property()
  @renderable()
  headerVisible = true;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {
    const hex = this.color.toHex();

    const header = this.headerVisible ? (
      <g>
        <path fill={hex} d="M119.387,20.312h21.298v21.045h19.485V20.312h21.303v63.727H160.17V62.7h-19.485v21.338h-21.298V20.312z"/>
        <path fill={hex} d="M209.482,41.444h-18.754V20.312h58.812v21.133h-18.759v42.594h-21.3V41.444z"/>
        <path fill={hex} d="M258.879,20.312h22.21l13.661,22.392l13.648-22.392h22.219v63.727h-21.212V52.453L294.75,75.111h-0.366 l-14.665-22.658v31.585h-20.84V20.312z"/>
        <path fill={hex} d="M341.219,20.312h21.308v42.664h29.955v21.062h-51.263V20.312z"/>
      </g>
    ) : null;

    return (
      <div class={CSS.base}>
        {/* source: https://www.w3.org/html/logo/ */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <title>HTML5 Logo</title>
          <g>
            {header}
            <path fill={hex} d="M200.662,266.676H256v-42.92h-59.169L200.662,266.676z M88.686,111.982l30.47,341.74l136.762,37.966 l136.891-37.948l30.507-341.758H88.686z M366.694,431.981L256,462.668v-43.494l-0.067,0.02l-85.858-23.835l-6.004-67.298h42.075 l3.116,34.914l46.68,12.607l0.059-0.019V308.59h-93.669l-11.306-126.749H256v-41.914h136.766L366.694,431.981z"/>
            <path opacity="0.8" fill={hex} d="M307.592,308.59H256v66.974l46.728-12.613L307.592,308.59z M256,139.927v41.914h104.975 l-3.754,41.915H256v42.92h97.406l-11.499,128.683L256,419.174v43.494l110.694-30.687l26.071-292.055H256z"/>
            <g opacity="0.2">
              <polygon fill={hex} points="256,181.841 151.025,181.841 162.331,308.59 256,308.59 256,266.676 200.662,266.676 196.831,223.756 256,223.756 		"/>
              <polygon fill={hex} points="256,375.563 255.941,375.582 209.262,362.975 206.146,328.061 164.07,328.061 170.074,395.358 255.933,419.193 256,419.174"/>
            </g>
          </g>
        </svg>
      </div>
    );
  }

}

export = WorkingWithSVG;
