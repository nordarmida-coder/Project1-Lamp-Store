import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                  alignItems: "center",
                  border: "1px solid #ccc",
                  padding: "10px",
                  width: "300px",
                }}
              >
                <span>{item.name}</span>
                <div>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    style={{ marginRight: "5px" }}
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    style={{ marginLeft: "5px" }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{ marginLeft: "10px" }}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h2>Total: {total.toFixed(2)}€</h2>
        </>
      )}
    </div>
  );
}

export default Cart;

