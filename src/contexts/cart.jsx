import { createContext, useReducer } from "react";
const initialState = {
  isCartOpen: false,
  isProductAdd: false,
  items: [],
};
export const CartStateContext = createContext();
export const CartDispatchContext = createContext();
export const ACTIONS = {
  ADD_TO_CART: "add-to-cart",
  REMOVE_FROM_CART: "remove_from_cart",
  TOGGLE_CART_POPUP: "toggle-cart-popup",
  REMOVE_WINDOW: "remove-window"
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_CART_POPUP:
      return {
        ...state,
        isCartOpen: !state.isCartOpen
      };
    case ACTIONS.ADD_TO_CART:
      const id = action.payload.cartItem.id;
      const isOld = state.items.map((item) => item.id).includes(id);
      let cartItems = null;
      if (isOld) {
        const items = state.items.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
        cartItems = [...items];
      } else {
        cartItems = [...state.items, action.payload.cartItem];
      }
      return { ...state, items: cartItems, isProductAdd: true};
      case ACTIONS.REMOVE_FROM_CART:
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload.cartItem.id)
        }
        case ACTIONS.REMOVE_WINDOW:
          return{
            ...state,
            isProductAdd: false,
          }

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};


function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
}

export default CartProvider;
