function Header({ cartCount, goToCart }) {
  return (
    <header style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 20px",
      borderBottom: "1px solid #ccc"
    }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>Lamp Store</h1>
      <div
        style={{ cursor: "pointer", fontSize: "20px" }}
        onClick={goToCart}
      >
        🛒 {cartCount}
      </div>
    </header>
  );
}

export default Header;