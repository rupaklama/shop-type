import { ActionType } from './products.types';
import { Product } from './productsReducer';

// action interfaces
interface FetchProductsAction {
  type: ActionType.FETCH_PRODUCTS;
}

interface SetProductsAction {
  type: ActionType.SET_PRODUCTS;
  payload: Product;
}

// NOTE: 'Type union' can be very long, we can use 'Type Alias' if we want instead.
// 'Type Alias' is just a name that represents another Type, similar to variable but for type.
// 'Type Alias' is to create New Name for another Type.
export type Action = FetchProductsAction | SetProductsAction;

export const fetchProductsAction = () => ({
  type: ActionType.FETCH_PRODUCTS,
});

export const setProductsAction = (products: Product) => ({
  type: ActionType.SET_PRODUCTS,
  payload: products,
});
