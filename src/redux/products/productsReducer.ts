// action types
import { ActionType } from './products.types';
import { Action } from './productsAction';

// product variant object type
export interface ProductVariant {
  id: string;
  size: string;
  color: string;
  price: string;
  stock: number;
  discount?: string;
  image: string;
}

// product object type interface
export interface Product {
  id: string;
  category: string[];
  title: string;
  isBestSeller?: boolean;
  variants: ProductVariant[];
}

// reducer state interface
export interface ProductsState {
  page?: number;
  nextPage?: boolean;
  productsCount: number;
  products: Product[];
}

const INITIAL_STATE = {
  products: [],
  productsCount: 0,
};

const productsReducer = (state: ProductsState = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionType.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
