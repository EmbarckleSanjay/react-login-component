/*
* Redux helpers. Got from:
* https://medium.com/@martin_hotell/improved-redux-type-safety-with-typescript-2-8-2c11a8062575
*/

// Action helpers

export interface IAction<T extends string> {
    type: T;
 }

export interface IActionWithPayload<T extends string, P> extends IAction<T> {
    payload: P;
 }

export function createAction<T extends string>(type: T): IAction<T>;
export function createAction<T extends string, P>(type: T, payload: P): IActionWithPayload<T, P>;
export function createAction<T extends string, P>(type: T, payload?: P) {
    return payload === undefined ? { type } : { type, payload };
}

// Types
type FunctionType = (...args: any[]) => any;
type ActionCreatorsMapObject = { [actionCreator: string]: FunctionType };

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;
