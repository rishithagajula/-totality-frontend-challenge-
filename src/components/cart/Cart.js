import React from "react";
import { useCart } from "../cart/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <div className='container'>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div>
            {cartItems.map((item, index) => (
              <div key={index} className='cart-item'>
                <img src={item.cover} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>Price: ${item.price}</p>
                  <label>Quantity:</label>
                  <input
                    type='number'
                    value={item.quantity || 1}
                    min='1'
                    onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                  />
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <h2>Total: ${cartTotal.toFixed(2)}</h2>
        </>
      )}
    </div>
  );
};

export default Cart;