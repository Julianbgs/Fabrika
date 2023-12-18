import * as actions from './actionTypes';

export const saveAddress = (title: string, address: string) => ({
  type: actions.SAVE_ADDRESS,
  payload: {title, address},
});

export const saveRestaurantId = (id: number) => ({
  type: actions.RESTAURANT_ID,
  payload: {id},
});

export const saveCategories = (categories: number) => ({
  type: actions.CATEGORIES,
  payload: {categories},
});
