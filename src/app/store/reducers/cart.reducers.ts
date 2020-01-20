import { CartActions, ECartActions } from '../actions/cart.actions';
import { ICartState, initialCartState } from '../state/cart.state';

export function CartReducer(
  state: ICartState = initialCartState,
  action: CartActions
): ICartState {
  switch (action.type) {
    case ECartActions.AddProductCart: {
      const { product } = action.payload;
      return { ...state, products: [...state.products, product] };
    }
    case ECartActions.RemoveProductCart: {
      const { product } = action.payload;
      const NewProducts = state.products.filter(
        (ItemProduct) => ItemProduct.id !== product.id
      );
      return { ...state, products: NewProducts };
    }
    default:
      return state;
  }
}
