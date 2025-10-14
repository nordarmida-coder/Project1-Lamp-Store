import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../products";

function Home() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Lamp Store</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      <div style={{ marginTop: "30px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>Cart ({cart.length} items)</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index} style={{ marginBottom: "5px" }}>
                {item.name} - {item.price.toFixed(2)}€
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Home;