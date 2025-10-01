import { useState, useEffect } from "react";
import svg5 from "../assets/Applelogo.svg";
import svg6 from "../assets/Arrow-right.svg";
import png from "../assets/Iphone.png";

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const slides = [1, 2, 3, 4, 5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slideshow">
      <div 
        className="slideshow__main"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((i) => (
          <div key={i} className="slide__separate">
            <div className="slide__left">
              <div className="apple__logo">
                <img src={svg5} alt="Apple-logo"/>
                <p>iPhone 14 Series</p>
              </div>
              <h1 className="slide__text">Up to 10% <br /> off Voucher</h1>
              <div className="slideshow__link">
                <a href="">Shop Now</a>
                <span><img src={svg6} alt="Arrow-right"/></span>
              </div>
            </div>
            <div className="slide__right">
              <img src={png} alt="Iphone"/>
            </div>
          </div>
        ))}
      </div>

      <div className="dots">
        {slides.map((_, i) => (
          <div 
            key={i} 
            className={`indicator ${current === i ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          ></div>
        ))}
      </div>
    </div>
  );
}
