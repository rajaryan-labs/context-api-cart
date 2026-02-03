import React from "react";
import { useCart } from "../context/CartContext";

const Item = (props) => {
  const cart = useCart();
  // Adds the current item to the shared cart context.
  return (
    <div>
      <h4>{props.name} </h4>
      <p>Price: ₹{props.price}</p>
      <button
        onClick={() => {
          // Append the new item while preserving existing cart items.
          cart.setItems([
            ...cart.items,
            { name: props.name, price: props.price },
          ]);
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Item;
