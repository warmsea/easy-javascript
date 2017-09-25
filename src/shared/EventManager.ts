import { Fulfill, Reject } from './types';
import { PromiseState } from './PromiseState';

export class EventManager {
  private _state: PromiseState;
  private _result: any;
  private _fulfillHandlers: Fulfill[];
  private _rejectHandlers: Reject[];

  constructor() {
    this._state = PromiseState.Pending;
    this._fulfillHandlers = [];
    this._rejectHandlers = [];
  }

  public setState(state: PromiseState, result: any) {
    this._state = state;
    this._result = result;
    if (this._state === PromiseState.Success) {
      for (const handler of this._fulfillHandlers) {
        handler(this._result);
      }
    } else if (this._state === PromiseState.Fail) {
      for (const handler of this._rejectHandlers) {
        handler(this._result);
      }
    }
  }

  public onFulfilled(fulfillHandler: Fulfill): void {
    if (this._state === PromiseState.Pending) {
      this._fulfillHandlers.push(fulfillHandler);
    } else if (this._state === PromiseState.Success) {
      fulfillHandler(this._result);
    }
  }

  public onRejected(rejectHandler: Reject): void {
    if (this._state === PromiseState.Pending) {
      this._rejectHandlers.push(rejectHandler);
    } else if (this._state === PromiseState.Fail) {
      rejectHandler(this._result);
    }
  }
}
