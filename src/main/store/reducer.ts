import * as actions from './actionTypes';
import {ActionWithPayload, InitialStoreInterface} from "../Core/interfaces/store";

const initialStore: InitialStoreInterface[] = [];

export default function reducer(state = initialStore, action: ActionWithPayload<InitialStoreInterface>) {
  switch (action.type) {
    case actions.SAVE_ADDRESS:
      return [{
        title: action.payload.title,
        address: action.payload.address,
      }];
    default:
      return state;
  }
}