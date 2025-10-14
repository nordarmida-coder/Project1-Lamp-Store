import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Home addToCart={addToCart} />
      <Cart cart={cart} />
      <Footer />
    </div>
  );
}

export default App;