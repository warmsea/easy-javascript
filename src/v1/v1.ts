import { Executor, Fulfill, Reject } from "../shared/types";

export class Promise {
  private _onFulfilled: Fulfill;
  private _onRejected: Reject;

  constructor(executor: Executor) {
    executor(
      (value) => {
        this._onFulfilled(value);
      },
      (reason) => {
        this._onRejected(reason);
      }
    );
  }

  public then(onFulfilled?: Fulfill, onRejected?: Reject): any {
    this._onFulfilled = onFulfilled;
    this._onRejected = onRejected;
  }
}
