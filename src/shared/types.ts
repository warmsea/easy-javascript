export type ExecutorResolve = (value: any) => void;
export type ExecutorReject = (reason: any) => void;
export type Executor = (resolve: ExecutorResolve, reject: ExecutorReject) => void;

export type Handler = (result: any) => any;
export type Fulfill = Handler; // (value: any) => any
export type Reject = Handler; // (reason: any) => any
