/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

/// <amd-dependency path="dgrid/OnDemandGrid" name="OnDemandGrid" />
/// <amd-dependency path="dstore/Memory" name="Memory" />

import {subclass, declared, property} from "esri/core/accessorSupport/decorators";

import Widget = require("esri/widgets/Widget");

import {renderable, jsxFactory} from "esri/widgets/support/widget";

declare const OnDemandGrid: any;
declare const Memory: any;

const CSS = {
  base: "esri-using-dgrid",
  grid: "esri-using-dgrid__grid"
};

@subclass("examples.UsingDgrid")
class UsingDgrid extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  destroy() {
    if (this._grid) {
      this._grid.destroy();
      this._grid = null;
    }
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  _grid: any = null;

  _items: any = new Memory({
    idProperty: "firstName",
    data: [
      {
        firstName: "Jerry",
        lastName: "Seinfeld"
      },
      {
        firstName: "George",
        lastName: "Costanza"
      },
      {
        firstName: "Elaine",
        lastName: "Benes"
      },
      {
        firstName: "Cosmo",
        lastName: "Kramer"
      }
    ]
  });

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  gridVisible
  //----------------------------------

  @property()
  @renderable()
  gridVisible = true;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {
    const gridNode = this.gridVisible ? (
      <div afterCreate={this._handleAfterCreate}
           bind={this}></div>
    ) : null;

    return (
      <div class={CSS.base}>
        {gridNode}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _handleAfterCreate(node: Element): void {
    if (!this._grid) {
      this._grid = new OnDemandGrid({
        className: CSS.grid,
        collection: this._items,
        columns: [
          {label: "First Name", field: "firstName", sortable: true},
          {label: "Last Name", field: "lastName"}
        ]
      }, node);

      this._grid.on("click", (event: any) => this.emit("click", event));

      return;
    }

    node.appendChild(this._grid.domNode);
  }

}

export = UsingDgrid;
