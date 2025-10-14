import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("home");

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  const goToCart = () => setPage("cart");
  const goToHome = () => setPage("home");

  return (
    <div>
      <Header cartCount={cart.length} goToCart={goToCart} />
      {page === "home" && <Home addToCart={addToCart} />}
      {page === "cart" && <Cart cart={cart} />}
      {page === "cart" && <button onClick={goToHome} style={{ margin: "20px" }}>Back to Home</button>}
    </div>
  );
}

export default App;