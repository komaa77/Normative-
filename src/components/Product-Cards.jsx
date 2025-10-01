import React, { useState, useEffect } from "react";
import img1 from "../assets/Frame 611 (1).png";
import img2 from "../assets/Frame 612 (2).png";
import img3 from "../assets/Frame 613 (1).png";
import img4 from "../assets/Frame 614 (1).png";
import svg11 from "../assets/Quick View.svg";
import svg13 from "../assets/Vector (5).svg";

// Bu bitta mahsulot kartasi
const ProductCard = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cartItems")) || [];
    const exists = stored.some((item) => item.id === product.id);
    setIsAdded(exists);
  }, [product.id]);

  const toggleCart = () => {
    let stored = JSON.parse(localStorage.getItem("cartItems")) || [];

    if (isAdded) {
      stored = stored.filter((item) => item.id !== product.id);
      alert(`${product.name} savatdan olib tashlandi!`);
    } else {
      stored.push(product);
      alert(`${product.name} savatga qoshildi!`);
    }

    localStorage.setItem("cartItems", JSON.stringify(stored));
    setIsAdded(!isAdded);
    window.dispatchEvent(new Event("storage"));
  };


    const [wishlist, setWishlist] = useState(
      JSON.parse(localStorage.getItem("wishlistItems")) || []
    );
    const isLiked = wishlist.some((item) => item.id === product.id);
  
    const toggleWishlist = () => {
      let updated;
      if (isLiked) {
        updated = wishlist.filter((item) => item.id !== product.id);
        alert(`${product.name} sevimlilardan o‘chirildi!`);
      } else {
        updated = [...wishlist, product];
        alert(`${product.name} sevimlilarga qo‘shildi!`);
      }
  
      setWishlist(updated);
      localStorage.setItem("wishlistItems", JSON.stringify(updated));
  
      // WishlistPage yangilanishi uchun event
      window.dispatchEvent(new Event("storage"));
    };

  return (
    <div className="product__item">
      <div className="image__side">
        <img src={product.img} alt={product.name} />
        <h3 className="discount">-40%</h3>
        <span
             className={`like ${isLiked ? "active" : ""}`}
             onClick={toggleWishlist}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5C5.7912 5 4 6.73964 4 8.88594C4 10.6185 4.7 14.7305 11.5904 18.8873C11.7138 18.961 11.8555 19 12 19C12.1445 19 12.2862 18.961 12.4096 18.8873C19.3 14.7305 20 10.6185 20 8.88594C20 6.73964 18.2088 5 16 5C13.7912 5 12 7.35511 12 7.35511C12 7.35511 10.2088 5 8 5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
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

// Bu esa barcha mahsulotlar ro‘yxati
const ProductCards = () => {
  const products = [
    { id: 1, name: "HAVIT HV-G92 Gamepad", price: 120, img: img1 },
    { id: 2, name: "AK-900 Wired Keyboard", price: 960, img: img2 },
    { id: 3, name: "IPS LCD Gaming Monitor", price: 370, img: img3 },
    { id: 4, name: "S-Series Comfort Chair", price: 375, img: img4 },
    { id: 5, name: "S-Series Comfort Chair", price: 375, img: img4 },
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

