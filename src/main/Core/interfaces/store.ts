import {Action} from "redux";

export interface InitialStoreInterface {
    title: string;
    address: string;
}

export interface ActionWithPayload<T> extends Action {
    payload: T;
}