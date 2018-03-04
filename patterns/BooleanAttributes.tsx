/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import {subclass, declared} from "esri/core/accessorSupport/decorators";

import Widget = require("esri/widgets/Widget");

import {tsx} from "esri/widgets/support/widget";

const CSS = {
  base: "esri-boolean-attributes"
};

@subclass("examples.BooleanAttributes")
class BooleanAttributes extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  postInitialize() {
    setInterval(() => {
      this._selectedIndex = Math.floor(Math.random() * 10);
      this.scheduleRender();
    }, 500);
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  _selectedIndex = 0;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {
    return (
      <div class={CSS.base}>
        {/* boolean attributes require setting their value to an expression */}
        <select>
          <option selected={this._selectedIndex === 0}>0</option>
          <option selected={this._selectedIndex === 1}>1</option>
          <option selected={this._selectedIndex === 2}>2</option>
          <option selected={this._selectedIndex === 3}>3</option>
          <option selected={this._selectedIndex === 4}>4</option>
          <option selected={this._selectedIndex === 5}>5</option>
          <option selected={this._selectedIndex === 6}>6</option>
          <option selected={this._selectedIndex === 7}>7</option>
          <option selected={this._selectedIndex === 8}>8</option>
          <option selected={this._selectedIndex === 9}>9</option>
          <option selected={this._selectedIndex === 10}>10</option>
        </select>
      </div>
    );
  }

}

export = BooleanAttributes;
