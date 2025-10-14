function ProductCard({ product, addToCart }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", textAlign: "center" }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "120px", height: "auto", marginBottom: "10px" }}
      />
      <h3>{product.name}</h3>
      <p>{product.brightness}</p>
      <p>{product.power} | {product.socket}</p>
      <p><b>{product.price.toFixed(2)}€</b></p>
      <button
        onClick={() => addToCart(product)}
        style={{ marginTop: "5px", padding: "5px 10px", cursor: "pointer" }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;