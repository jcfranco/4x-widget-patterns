declare namespace __esri {

  interface promiseUtils {
    timeout<T>(promise: IPromise<T>, timeout: number, timeoutRejectValue: any): IPromise<T>;
  }

}
