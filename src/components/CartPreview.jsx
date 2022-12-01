import { useContext } from "react";
import {
  ACTIONS,
  CartDispatchContext,
  CartStateContext,
} from "../contexts/cart";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";

function CartPreview() {
  const { items, isCartOpen, isProductAdd } = useContext(CartStateContext);
  const dispatch = useContext(CartDispatchContext);

  const handleRemove = (product) => {
    dispatch({
      type: ACTIONS.REMOVE_FROM_CART,
      payload: { cartItem: product },
    });
  };
  const handleWindow = () => {
    dispatch({
      type: ACTIONS.REMOVE_WINDOW,
    });
  };

  return (
    <>
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
                  <p className="amount">
                    {(product.quantity * product.price).toFixed(2)}
                  </p>
                </div>
                <button className="product-remove">
                  <RemoveCircleIcon
                    sx={{ color: "red" }}
                    onClick={() => handleRemove(product)}
                  />
                </button>
              </li>
            );
          })}
        </ul>
        <button className="product-checkout">Proceed to checkout</button>
      </div>
      <div
        className={
          !isProductAdd
            ? "product-added-container"
            : "product-added-container added"
        }
      >
        <div className="product-added">
          <CheckCircleIcon sx={{ color: "white", m: 1 }} />
          <p>Product added to cart</p>
          <CloseIcon
            sx={{ color: "white", m: 1 }}
            onClick={() => handleWindow()}
          />
        </div>
      </div>
    </>
  );
}

export default CartPreview;
