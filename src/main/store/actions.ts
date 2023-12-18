import * as actions from './actionTypes';

export const saveAddress = (title: string, address: string) => ({
  type: actions.SAVE_ADDRESS,
  payload: {title, address},
});

export const saveRestaurantId = (id: number) => ({
  type: actions.RESTAURANT_ID,
  payload: {id},
});

export const saveCategories = (categories: any) => ({
  type: actions.CATEGORIES,
  payload: {categories},
});

export const saveProducts = (products: any) => ({
  type: actions.PRODUCTS,
  payload: {products},
});
