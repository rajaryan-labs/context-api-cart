import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

export const useCart = () => {
  // Centralized hook to access cart state anywhere in the tree.
  return useContext(CartContext);
};

export const CartProvider = (props) => {
  // Single source of truth for cart items.
  const [items, setItems] = useState([]);
  return (
    // Expose both data and updater so child components can read/write.
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  );
};
