import { createContext, useState, useEffect } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    setWishlist(saved);
  }, []);

  const addToWishlist = (product) => {
    const exists = wishlist.some((item) => item.id === product.id);
    if (!exists) {
      const updated = [...wishlist, product];
      setWishlist(updated);
      localStorage.setItem("wishlistItems", JSON.stringify(updated));
    }
  };

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlistItems", JSON.stringify(updated));
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
