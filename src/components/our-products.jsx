import React, { useState, useEffect } from "react";
import svg11 from "../assets/Quick View.svg";
import svg12 from "../assets/heart small.svg";
import svg13 from "../assets/Vector (5).svg";
import dog from "../assets/Frame 604 (3).png";
import camera from "../assets/Frame 604 (4).png";
import note from "../assets/Frame 604 (5).png";
import coat from "../assets/Frame 608 (6).png";
import ps from "../assets/Frame 608 (7).png";
import bots from "../assets/Frame 608 (8).png";
import car from "../assets/Frame 608 (9).png";
import arrow from '../assets/icons arrow-right (2).svg';
import arrow2 from '../assets/icons_arrow-left.svg';

const products = [
  { id: 1, name: "Breed Dry Dog Food", price: "$100", image: dog, rating: 3, reviews: 35 },
  { id: 2, name: "CANON EOS DSLR Camera", price: "$360", image: camera, rating: 4, reviews: 95 },
  { id: 3, name: "ASUS FHD Gaming Laptop", price: "$700", image: note, rating: 5, reviews: 325 },
  { id: 4, name: "Breed Dry Dog Food", price: "$100", image: dog, rating: 3, reviews: 35 },
  { id: 5, name: "Kids Electric Car", price: "$960", image: car, rating: 5, reviews: 65, colors: ["#FB1314", "#db4444"] },
  { id: 6, name: "Jr. Zoom Soccer Cleats", price: "$1160", image: bots, rating: 5, reviews: 35, colors: ["#EEFF61", "#db4444"] },
  { id: 7, name: "GP11 Shooter USB Gamepad", price: "$660", image: ps, rating: 4, reviews: 55, colors: ["#000", "#db4444"] },
  { id: 8, name: "Quilted Satin Jacket", price: "$660", image: coat, rating: 4, reviews: 55, colors: ["#184A48", "#db4444"] },
];

const OurProducts = () => {
  const [selectedColors, setSelectedColors] = useState({});
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(stored);
  }, []);

  const handleColorSelect = (productId, color) => {
    setSelectedColors((prev) => ({ ...prev, [productId]: color }));
  };

  const toggleCart = (product) => {
    const isAdded = cartItems.some((item) => item.id === product.id);
    let updated;

    if (isAdded) {
      updated = cartItems.filter((item) => item.id !== product.id);
      alert(`${product.name} savatdan olib tashlandi!`);
    } else {
      updated = [...cartItems, product];
      alert(`${product.name} savatga qo'shildi!`);
    }

    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  return (
    <section className="best">
             <div className="container">
                <div className="best__top">
                     <div className="best__title">
                         <div className="section__title-best">
                             <div className="red__icon"></div> 
                             <p className="section__text3">Our Products</p> 
                             </div> 
                             </div> 
                             </div> 
                             <div className="best__main"> 
                                <h3 className="categories__text">Explore Our Products</h3>
                            <div className="navigation__buttons">
                              <div className="left__button">
                                <button>
                                  <span><img src={arrow2} alt=""/></span>
                                </button>
                              </div>
                              <div className="right__button">
                                <button>
                                  <span><img src={arrow} alt=""/></span>
                                </button>
                              </div>
                            </div>
                            </div>
        <div className="best__cards">
          {products.map((item) => {
              const isAdded = cartItems.some((p) => p.id === item.id);
              
              return (
                  <div className="best__card" key={item.id}>
                <div className="best__image">
                  <img src={item.image} alt={item.name} />
                  <div className="like"><img src={svg12} alt="like" /></div>
                  <div className="eye"><img src={svg11} alt="view" /></div>

                  <button
                    className={`add2 ${isAdded ? "added" : ""}`}
                    onClick={() => toggleCart(item)}
                  >
                    {isAdded ? "Added" : "Add to Cart"}
                  </button>
                </div>

                <div className="best__info">
                  <p className="info__text">{item.name}</p>
                  <span className="best__price">{item.price}</span>
                  <div className="best__ratings">
                    {[...Array(item.rating)].map((_, i) => (
                        <img key={i} src={svg13} alt="star" />
                    ))}
                    <span className="best__number">({item.reviews})</span>
                  </div>

                  {item.colors && (
                      <div className="color-options">
                      {item.colors.map((color, i) => (
                          <div
                          key={i}
                          className="color-circle"
                          style={{
                              backgroundColor: color,
                              border:
                              selectedColors[item.id] === color
                              ? "2px solid black"
                              : "1px solid white",
                            }}
                            onClick={() => handleColorSelect(item.id, color)}
                            ></div>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            );
        })}
        </div>
      <button className="btn">View All Products</button>
      </div>
    </section>
  );
};

export default OurProducts;
