import { IProductState, initialProductState } from '../state/products.state';
import { ProductActions, EProductActions } from '../actions/product.actions';

export function productReducer(
  state: IProductState = initialProductState,
  action: ProductActions
): IProductState {
  switch (action.type) {
    case EProductActions.GetProductsSuccess: {
      return {
        ...state,
        products: action.payload.entities.products,
        error: null,
      };
    }
    case EProductActions.GetProductsFailure: {
      const { error } = action.payload;
      return { ...state, error };
    }
    case EProductActions.GetProductsCategorySucces: {
      return {
        ...state,
        products: action.payload.entities.products || {},
        error: null,
      };
    }
    case EProductActions.GetProductsCategoryFailure: {
      const { error } = action.payload;
      return { ...state, error };
    }
    case EProductActions.GetProductSelected: {
      return { ...state, selectedProduct: state.products[action.payload.id] };
    }
    case EProductActions.SearchProductsSuccess: {
      const { products } = action.payload;
      return { ...state, products, error: null };
    }
    case EProductActions.SearchProductsFailure: {
      const { error } = action.payload;
      return { ...state, error };
    }
    default:
      return state;
  }
}
