/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import {subclass, declared} from "esri/core/accessorSupport/decorators";

import Widget = require("esri/widgets/Widget");

import {tsx} from "esri/widgets/support/widget";

@subclass("examples.DealingWithWhitespace")
class DealingWithWhitespace extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {

    // taken from http://www.bennadel.com/blog/2880-a-quick-look-at-rendering-white-space-using-jsx-in-reactjs.htm
    return (
      <section>

        <p>
          {
            // This content will render with no visible white space
            // since each sibling Element node that is defined on a
            // different line of CODE will be rendered right up
            // against the other ones.
          }
          <span>Bro!</span>
          <span>You</span>
          <span>had</span>
          <span>me</span>
          <span>at</span>
          <span>"White space."</span>
        </p>

        <p>
          {
            // This content will render with "expected" white space
            // since the Element node is on the same line with its
            // other content. As such, the white space around the
            // element is preserved.
          }
          There's <em>literally</em> nothing more exciting!
        </p>

        <p>
          {
            // In this case, we're going to lose the white space to
            // the LEFT of the first STRONG Element node and the RIGHT
            // of the second one. The plain-text lines are implicitly
            // wrapped in Span tags, which creates a multi-line sibling
            // relationship between Element nodes, which removes white
            // space (as we saw in the first example).
          }
          But don't get me started on
          <strong>kerning</strong> and <strong>tracking</strong>
          or we'll be here all day.
        </p>

        <p>
          {
            // This will render as expected since there are no
            // Element nodes. This entire value gets rendered as a
            // single value, NO implicit SPAN container.
          }
          That said, if you want to get groovy on the use of
          negative space in design, then I will be more than
          happy to chat. I have nowhere else to be at this moment.
        </p>

        <p>
          {
            // We can always force white space by interpolating a
            // white space literal. This way, when the JSX is
            // compiled down into React Element children, the white
            // space literal will be an explicit child.
          }
          <span>Bro!</span>
          { " " }
          <span>You</span>
          { " " }
          <span>had</span>
          { " " }
          <span>me</span>
          { " " }
          <span>at</span>
          { " " }
          <span>"White space."</span>
        </p>

      </section>
    );

  }

}

export = DealingWithWhitespace;
