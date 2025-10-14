import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const increment = (id, quantity) => updateQuantity(id, quantity + 1);
  const decrement = (id, quantity) => updateQuantity(id, Math.max(1, quantity - 1));

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map(item => (
            <div 
              key={item.id} 
              style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}
            >
              <span style={{ flex: 1 }}>{item.name}</span>
              
              <button onClick={() => decrement(item.id, item.quantity)}>-</button>
              <input
                type="number"
                value={item.quantity}
                min="1"
                style={{ width: "50px", margin: "0 5px", textAlign: "center" }}
                onChange={(e) => updateQuantity(item.id, Math.max(1, parseInt(e.target.value) || 1))}
              />
              <button onClick={() => increment(item.id, item.quantity)}>+</button>

              <span style={{ marginLeft: "10px" }}>{(item.price * item.quantity).toFixed(2)}€</span>
              <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: "10px" }}>Remove</button>
            </div>
          ))}
          <h2>Total: {totalPrice.toFixed(2)}€</h2>
        </>
      )}
    </div>
  );
}

export default Cart;