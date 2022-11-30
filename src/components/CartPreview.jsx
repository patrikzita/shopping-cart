import { useContext } from "react";
import {
  ACTIONS,
  CartDispatchContext,
  CartStateContext,
} from "../contexts/cart";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

function CartPreview() {
  const { items, isCartOpen } = useContext(CartStateContext);
  const dispatch = useContext(CartDispatchContext);

  const handleRemove = (product) => {
    dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: { cartItem: product } });
  };

  return (
    <div className={!isCartOpen ? "cart-preview" : "cart-preview active"}>
      {items.length === 0 ? (
        <div className="cart-blank">
          <h3>Your cart is empty!</h3>
        </div>
      ) : (
        ""
      )}
      <ul className="cart-items">
        {items.map((product) => {
          return (
            <li className="cart-item" key={product.name}>
              <div className="product-info">
                <p className="product-name">{product.name}</p>
                <p className="product-price">{product.price}</p>
              </div>
              <div className="product-total">
                <p className="quantity">{product.quantity}</p>
                <p className="amount">{product.quantity * product.price}</p>
              </div>
              <button className="product-remove">
                <RemoveCircleIcon sx={{color: "red"}} onClick={() => handleRemove(product)} />
              </button>
            </li>
          );
        })}
      </ul>
      <button className="product-checkout">Proceed to checkout</button>
    </div>
  );
}

export default CartPreview;
