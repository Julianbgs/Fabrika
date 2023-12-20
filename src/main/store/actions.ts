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

export const saveBasket = (count: number) => ({
  type: actions.BASKET,
  payload: {count},
});

export const saveBasketBody = (obj: any) => ({
  type: actions.BASKET_BODY,
  payload: {obj},
});
