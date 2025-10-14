function ProductCard({ product, addToCart }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      width: "180px", 
      textAlign: "center"
    }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "150px", height: "150px", objectFit: "cover" }}
      />
      <h3>{product.name}</h3>
      <p>{product.brightness}</p>
      <p>{product.power} | {product.socket}</p>
      <p>{product.price.toFixed(2)}€</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;