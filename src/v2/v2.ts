import { EventManager } from "../shared/EventManager";
import { PromiseState } from "../shared/PromiseState";
import { Executor, Fulfill, Reject } from "../shared/types";

export class Promise {
  private _eventManager: EventManager;

  constructor(executor: Executor) {
    this._eventManager = new EventManager();
    executor(
      (value) => {
        this._eventManager.setState(PromiseState.Success, value);
      },
      (reason) => {
        this._eventManager.setState(PromiseState.Fail, reason);
      }
    );
  }

  public then(onFulfilled?: Fulfill, onRejected?: Reject): any {
    if (onFulfilled) {
      this._eventManager.onFulfilled(onFulfilled);
    }
    if (onRejected) {
      this._eventManager.onRejected(onRejected);
    }
  }
}
