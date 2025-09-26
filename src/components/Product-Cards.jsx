import React, { useState, useEffect } from "react";
import img1 from "../assets/Frame 611 (1).png";
import img2 from "../assets/Frame 612 (2).png";
import img3 from "../assets/Frame 613 (1).png";
import img4 from "../assets/Frame 614 (1).png";
import svg11 from "../assets/Quick View.svg";
import svg12 from "../assets/heart small.svg";
import svg13 from "../assets/Vector (5).svg";

const ProductCard = ({ product }) => {
  const [cartItems, setCartItems] = useState([]);
  const isAdded = cartItems.some((item) => item.id === product.id);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(stored);
  }, []);

  const toggleCart = () => {
    let updated;
    if (isAdded) {
      updated = cartItems.filter((item) => item.id !== product.id);
      alert(`${product.name} savatdan olib tashlandi!`);
    } else {
      updated = [...cartItems, product];
      alert(`${product.name} savatga qoshildi!`);

      // 🔥 wishlistga ham qo‘shamiz
      const wishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];
      const alreadyInWishlist = wishlist.some((item) => item.id === product.id);
      if (!alreadyInWishlist) {
        const updatedWishlist = [...wishlist, product];
        localStorage.setItem("wishlistItems", JSON.stringify(updatedWishlist));
      }
    }

    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  return (
    <div className="product__item">
      <div className="image__side">
        <img src={product.img} alt={product.name} />
        <h3 className="discount">-40%</h3>
        <span className="like">
          <img src={svg12} alt="like" />
        </span>
        <div className="eye">
          <img src={svg11} alt="quick view" />
        </div>
        <button
          className={`add ${isAdded ? "added" : ""}`}
          onClick={toggleCart}
        >
          {isAdded ? "Added" : "Add to Cart"}
        </button>
      </div>
      <div className="info__side">
        <p className="type">{product.name}</p>
        <div className="prices">
          <span className="current__price">${product.price}</span>
        </div>
        <div className="rating__side">
          <div className="stars">
            <img src={svg13} alt="star" />
            <img src={svg13} alt="star" />
            <img src={svg13} alt="star" />
            <img src={svg13} alt="star" />
            <img src={svg13} alt="star" />
            <div className="ratings__number">
              <p>(88)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCards = () => {
  const products = [
    { id: 1, name: "HAVIT HV-G92 Gamepad", price: 120, img: img1 },
    { id: 2, name: "AK-900 Wired Keyboard", price: 960, img: img2 },
    { id: 3, name: "IPS LCD Gaming Monitor", price: 370, img: img3 },
    { id: 4, name: "S-Series Comfort Chair", price: 375, img: img4 },
  ];

  return (
    <section>
      <div className="container">
        <div className="products">
          <div className="product__items">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
        <button className="btn">View All Products</button>
      </div>
    </section>
  );
};

export default ProductCards;
