import { useContext, useEffect } from "react";
import { getProducts, ProductDispatchContext, ProductStateContext } from "../contexts/products";
import Product from "./Product";

function ProductList() {
  const { products, isLoaded } = useContext(ProductStateContext);
  console.log(products);
  const dispatch = useContext(ProductDispatchContext);

  useEffect(() => {
    getProducts(dispatch);
  }, []);
  return (
    <div className="products">
      {isLoaded ? (
        products.map((item) => {
          return <Product key={item.id} data={item} />;
        })
      ) : (
        <div>
          <h1>Request failed..</h1>
        </div>
      )}
    </div>
  );
}

export default ProductList;
