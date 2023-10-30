import * as actions from './actionTypes';

export const saveAddress = (title: string, address: string) => ({
  type: actions.SAVE_ADDRESS,
  payload: {title, address}
});
