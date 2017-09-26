import { EventManager } from '../shared/EventManager';
import { PromiseState } from '../shared/PromiseState';
import { Executor, ExecutorReject, ExecutorResolve, Fulfill, Handler, Reject } from '../shared/types';

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
      },
    );
  }

  public then(onFulfilled?: Fulfill, onRejected?: Reject): Promise {
    return new Promise((resolve, reject) => {
      if (onFulfilled) {
        this._eventManager.onFulfilled(this._wrapCallback(resolve, reject, onFulfilled));
      }
      if (onRejected) {
        this._eventManager.onRejected(this._wrapCallback(resolve, reject, onRejected));
      }
    });
  }

  private _wrapCallback(resolve: ExecutorResolve, reject: ExecutorReject, callback: Handler) {
    return (result) => {
      try {
        const callbackResult = callback(result);
        resolve(callbackResult);
      } catch (error) {
        reject(error);
      }
    };
  }
}
