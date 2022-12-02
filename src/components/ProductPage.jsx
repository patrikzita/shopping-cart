import { useParams } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ACTIONS, CartDispatchContext } from "../contexts/cart";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const dispatch = useContext(CartDispatchContext);
  const getProducts = () => {
    const url = `http://localhost:3500/products/${id}`;
    axios
      .get(url)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error(error);
        dispatch({ type: "GET_PRODUCT_FAILURE" });
      });
  };

useEffect(()=>{
    getProducts()
}, []);

const handleAdded = (data) => {
  const product = { ...data, quantity: 1 };
  dispatch({ type: ACTIONS.ADD_TO_CART, payload: { cartItem: product } });
  setTimeout(() => {
    dispatch({ type: ACTIONS.REMOVE_WINDOW });
  }, 3500);
};

  return (
    <div className="product-container">
      <div className="product-main">
        <img src={`../${product.img}`} alt="" />
        <div className="product-info">
          <h1>{product.name}</h1>
          <h2>{product.price}</h2>
          <button className="btn-add" onClick={()=> handleAdded(product)}>
              ADD TO CART
          </button>
        </div>
  
      </div>
    </div>
  );
}

export default ProductPage;
