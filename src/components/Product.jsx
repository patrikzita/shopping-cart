import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ACTIONS, CartDispatchContext } from "../contexts/cart";

function Product({ data }) {
  const dispatch = useContext(CartDispatchContext);
  const { id, name, img, price } = data;
  const [isAdded, setIsAdded] = useState(false);

  const handleAdded = () => {
    const product = { ...data, quantity: 1 };
    dispatch({ type: ACTIONS.ADD_TO_CART, payload: { cartItem: product } });
    setIsAdded(true);
    setTimeout(() => {
      dispatch({ type: ACTIONS.REMOVE_WINDOW });
      setIsAdded(false);
    }, 3500);
  };
  return (
    <>
      <div className="product">
        <Link to={`products/${id}`}>
          <div className="product-image">
            <img src={img} alt="" />
          </div>
          <h4 className="product-name">{name}</h4>
          <p className="product-price">{price}</p>
        </Link>

        <div className="product-action">
          <button
            className={!isAdded ? "" : "added"}
            type="button"
            onClick={() => handleAdded()}
          >
            {!isAdded ? "ADD TO CART" : "✔ ADDED"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
