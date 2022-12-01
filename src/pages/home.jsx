import Product from "../components/Product";
import CartPreview from "../components/CartPreview";
import Header from "../components/Header";
import { useContext, useEffect } from "react";
import {
  getProducts,
  ProductDispatchContext,
  ProductStateContext,
} from "../contexts/products";

function Home() {
  const { products, isLoaded } = useContext(ProductStateContext);
  const dispatch = useContext(ProductDispatchContext);

  useEffect(() => {
    getProducts(dispatch);
  }, []);
  return (
    <>
      <Header />
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
      <CartPreview />
    </>
  );
}

export default Home;
