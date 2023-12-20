import * as actions from './actionTypes';
import {ActionWithPayload, InitialStoreInterface} from "../Core/interfaces/store";
import {Reducer} from "redux";

const initialStore: any = {};

export default function reducer(state = initialStore, action: ActionWithPayload<InitialStoreInterface>) {
    switch (action.type) {
        case actions.SAVE_ADDRESS:
            return {
                ...state,
                title: action.payload.title,
                address: action.payload.address,
            };
        case actions.RESTAURANT_ID:
            return {
                ...state,
                id: action.payload.id,
            };
        case actions.CATEGORIES:
            return {
                ...state,
                categories: action.payload.categories,
            };
        case actions.PRODUCTS:
            return {
                ...state,
                products: action.payload.products,
            };
        case actions.BASKET:
            return {
                ...state,
                count: action.payload.count,
            };
        case actions.BASKET_BODY:
            return {
                ...state,
                basket: action.payload.basket,
            };
        default:
            return state;
    }
}