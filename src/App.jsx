import Header from "./components/Header";
import Product from "./components/Product";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import CartProvider from "./contexts/cart";
import CartPreview from "./components/CartPreview";

function App() {
  const items = [
    {
      id: 1,
      img: "src/assets/img/pokemon_violet.jpg",
      name: "Pokémon Violet",
      price: 59.99,
      description: "Text pro description shopu",
    },
    {
      id: 2,
      img: "src/assets/img/pokemon_scarlet.jpg",
      name: "Pokémon Scarlet",
      price: 99.99,
      description: "Text pro description shopu",
    },
    {
      id: 3,
      img: "src/assets/img/pokemon_sword.jpg",
      name: "Pokémon Sword",
      price: 59.99,
      description: "Text pro description shopu",
    },
    {
      id: 4,
      img: "src/assets/img/pokemon_sword.jpg",
      name: "Pokémon Sword",
      price: 59.99,
      description: "Text pro description shopu",
    },
    {
      id: 5,
      img: "src/assets/img/pokemon_sword.jpg",
      name: "Pokémon Sword",
      price: 59.99,
      description: "Text pro description shopu",
    },
    {
      id: 6,
      img: "src/assets/img/pokemon_sword.jpg",
      name: "Pokémon Sword",
      price: 59.99,
      description: "Text pro description shopu",
    },
  ];
  return (
    <div className="App">
      <CartProvider>
        <Header />
        <div className="products">
          {items.map((item) => {
            return <Product key={item.id} data={item} />;
          })}
          <div className="product-added-container">
            <div className="product-added">
              <CheckCircleIcon sx={{ color: "white", m: 1 }} />
              <p>Product added to cart</p>
              <CloseIcon sx={{ color: "white", m: 1 }} />
            </div>
          </div>
        </div>
        <CartPreview />
      </CartProvider>
    </div>
  );
}

export default App;
