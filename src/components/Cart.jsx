import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const cart = useCart();

  // Sum item prices to compute the current total bill.
  const total = cart.items.reduce((a, b) => a + b.price, 0);
  return (
    <div className="cart">
      <h1>Cart</h1>
      {/* Render the cart items */}
      {cart &&
        cart.items.map((item, index) => (
          <li key={index}>
            {item.name} - ₹{item.price}
          </li>
        ))}

      {/* Summary */}
      <h5>Total Bill: ₹{total}</h5>
    </div>
  );
};

export default Cart;
