import React, { useState, useEffect } from "react";
import service1 from "../assets/Services (7).svg";
import service2 from "../assets/Services (8).svg";
import service3 from "../assets/Services (9).svg";
import up from "../assets/icons_arrow-up (1).svg";

const Service = () => {
  const [isVisible, setIsVisible] = useState(false);

  // scroll hodisasini kuzatish
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // yuqoriga qaytarish funksiyasi
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="service">
      <div className="container">
        {/* Up button */}
        <div className={`up-button ${isVisible ? "show" : ""}`}>
          <button onClick={scrollToTop}>
            <img src={up} alt="up" />
          </button>
        </div>

        {/* Service items */}
        <div className="service__items">
          <div className="service__item">
            <img src={service1} alt="" />
            <h3 className="service__item-title">FREE AND FAST DELIVERY</h3>
            <p className="service__item-text">
              Free delivery for all orders over $140
            </p>
          </div>

          <div className="service__item">
            <img src={service2} alt="" />
            <h3 className="service__item-title">24/7 CUSTOMER SERVICE</h3>
            <p className="service__item-text">Friendly 24/7 customer support</p>
          </div>

          <div className="service__item">
            <img src={service3} alt="" />
            <h3 className="service__item-title">MONEY BACK GUARANTEE</h3>
            <p className="service__item-text">
              We return money within 30 days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
