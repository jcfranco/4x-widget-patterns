declare namespace __esri {

  interface promiseUtils {
    timeout<T>(promise: IPromise<T>, timeout: number, timeoutRejectValue: any): IPromise<T>;
  }

  interface decoratorsPropertyPropertyMetadata {
    value?: any;
  }

  interface Accessor {
    watch<T>(name: string, callback: (newValue: T, oldValue: T, name: string, target: Accessor) => void): IHandle;
  }

  interface Widget {
    own(handles: IHandle | IHandle[]): void
    own(...handles: IHandle[]): void
  }

}

