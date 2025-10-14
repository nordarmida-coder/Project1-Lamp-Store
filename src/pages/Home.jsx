import products from "../products";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

function Home({ selectedCategory, searchTerm }) {
  const { addToCart } = useCart();

  
  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "20px",
        padding: "20px",
        justifyItems: "center",
      }}
    >
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default Home;