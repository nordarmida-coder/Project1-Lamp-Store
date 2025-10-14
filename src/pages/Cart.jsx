function Cart({ cart }) {

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                  borderBottom: "1px solid #ccc"
                }}
              >
                <span>{item.name}</span>
                <span>{item.price.toFixed(2)}€</span>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: "15px", fontWeight: "bold", fontSize: "18px" }}>
            Total: {total.toFixed(2)}€
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;