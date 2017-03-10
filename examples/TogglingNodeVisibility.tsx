/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import {subclass, declared, property} from "esri/core/accessorSupport/decorators";

import Widget = require("esri/widgets/Widget");

import {renderable, jsxFactory} from "esri/widgets/support/widget";

const CSS = {
  base: "esri-toggling-node-visibility",
  header: "esri-toggling-node-visibility__header",
  content: "esri-toggling-node-visibility__content",
  footer: "esri-toggling-node-visibility__footer"
};

@subclass("examples.TogglingNodeVisibility")
class TogglingNodeVisibility extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  headerVisible
  //----------------------------------

  @property()
  @renderable()
  headerVisible = true;

  //----------------------------------
  //  contentVisible
  //----------------------------------

  @property()
  @renderable()
  contentVisible = true;

  //----------------------------------
  //  footerVisible
  //----------------------------------

  @property()
  @renderable()
  footerVisible = true;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {
    const headerNode = this.headerVisible ? (
      <header class={CSS.header}>header</header>
    ) : null;

    const contentNode = this.contentVisible ? (
      <div class={CSS.content}>content</div>
    ) : null;

    const footerNode = this.footerVisible ? (
      <footer class={CSS.footer}>footer</footer>
    ) : null;

    return (
      <div class={CSS.base}>
        {headerNode}
        {contentNode}
        {footerNode}
      </div>
    );
  }

}

export = TogglingNodeVisibility;
