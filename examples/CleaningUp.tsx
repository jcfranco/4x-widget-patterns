/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import {subclass, declared, property} from "esri/core/accessorSupport/decorators";

import promiseUtils = require("esri/core/promiseUtils");

import Widget = require("esri/widgets/Widget");


import {renderable, tsx} from "esri/widgets/support/widget";

const CSS = {
  base: "esri-cleaning-up"
};

@subclass("examples.CleaningUp")
class CleaningUp extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  postInitialize() {
    const dayInSeconds = 86400;

    const dayElapsedPromise = promiseUtils.timeout(
      promiseUtils.resolve(), dayInSeconds, null
    );

    const counterWatcher = this.watch("counter", (value: number, oldValue: number, name: string) => {
      console.log(`${name} changed from ${oldValue} to ${value}`);
    });

    const counterIntervalId = setInterval(() => {
      console.log(`counter: ${this.counter++}`);
    }, 500);

    const nonHandleRemover = {
      remove() {
        clearInterval(counterIntervalId);
        dayElapsedPromise.cancel();
      }
    };

    // 'owned' handles will be destroyed automatically
    this.own([
      nonHandleRemover,
      counterWatcher
    ]);
  }

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  counter
  //----------------------------------

  @property()
  @renderable()
  counter: number = 0;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {
    return (
      <div class={CSS.base}>{this.counter}</div>
    );
  }

}

export = CleaningUp;
