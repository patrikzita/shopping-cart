import CartProvider from "./contexts/cart";
import ProductProvider from "./contexts/products";
import HomePage from "./pages/home";

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <CartProvider>
          <HomePage />
        </CartProvider>
      </ProductProvider>
    </div>
  );
}

export default App;
