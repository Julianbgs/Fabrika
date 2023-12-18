import {Action} from "redux";

export interface InitialStoreInterface {
    title: string;
    address: string;
    id: number;
    categories: any[];
}

export interface ActionWithPayload<T> extends Action {
    payload: T;
}