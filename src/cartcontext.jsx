import { createContext, useContext, useState, useMemo } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Savatchaga qo‘shish
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        // agar oldin bor bo‘lsa qty oshirish
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      // agar yo‘q bo‘lsa yangi qo‘shish
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // Savatchadan o‘chirish
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Miqdorni yangilash
  const updateQty = (id, qty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty } : item
      )
    );
  };

  // Umumiy narx (subtotal) hisoblash
  const subtotal = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, subtotal }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook
export const useCart = () => useContext(CartContext);

