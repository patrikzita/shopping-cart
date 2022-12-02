import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartProvider from "./contexts/cart";
import ProductProvider from "./contexts/products";
import HomePage from "./pages/home";
function App() {
  return (
    <div className="App">
      <ProductProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<HomePage />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </ProductProvider>
    </div>
  );
}

export default App;
