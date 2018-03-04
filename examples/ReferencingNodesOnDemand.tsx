/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import {subclass, declared} from "esri/core/accessorSupport/decorators";

import Widget = require("esri/widgets/Widget");

import {tsx} from "esri/widgets/support/widget";

const CSS = {
  base: "esri-referencing-nodes-on-demand"
};

@subclass("examples.ReferencingNodesOnDemand")
class AccessibleNodes extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _nodes: HTMLElement[] = [];

  private _nodeIndex = 0;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {
    return (
      <div class={CSS.base}>
        <div>
          <textarea bind={this} afterCreate={this._storeNode} data-child-index={0} placeholder="1st"></textarea>
          <textarea bind={this} afterCreate={this._storeNode} data-child-index={1} placeholder="2nd"></textarea>
          <textarea bind={this} afterCreate={this._storeNode} data-child-index={2} placeholder="3rd"></textarea>
        </div>
        <div>
          <span>Focus on</span>
          <select bind={this} onchange={this._storeNodeIndex}>
            <option value={0} selected>1st</option>
            <option value={1}>2nd</option>
            <option value={2}>3rd</option>
          </select>
          <span>child</span>
        </div>
        <div>
          <button bind={this} onclick={this._focusNode}>Do it!</button>
        </div>
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _focusNode(): void {
    this._nodes[this._nodeIndex].focus();
  }

  private _storeNode(node: HTMLElement): void {
    const index = node["data-child-index"] as number;
    this._nodes[index] = node;
  }

  private _storeNodeIndex(event: Event): void {
    const node = event.target as HTMLSelectElement;
    this._nodeIndex = node.selectedIndex;
  }

}

export = AccessibleNodes;
