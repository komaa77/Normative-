import React, { useState, useEffect } from "react";
import icon7 from '../assets/Semiclone (1).svg';
import arrow from '../assets/icons arrow-right (2).svg';
import arrow2 from '../assets/icons_arrow-left.svg';


const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    let endTime = localStorage.getItem("flashSaleEndTime");

    if (!endTime) {
      const deadline = Date.now() + 3 * 24 * 60 * 60 * 1000; // 3 kun
      endTime = deadline;
      localStorage.setItem("flashSaleEndTime", endTime);
    } else {
      endTime = parseInt(endTime, 10);
    }

    const timerInterval = setInterval(() => {
      const now = Date.now();
      const distance = endTime - now;

      if (distance <= 0) {
        clearInterval(timerInterval);
        localStorage.removeItem("flashSaleEndTime");
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        alert("Aksiya tugadi!");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);  

  return (
    <section className="sales">
      <div className="container">
        <div className="sales__top">
          <div className="section__title">
            <div className="red__icon">
              <p className="section__text">Today’s</p>
            </div>
            <div className="section__main">
              <div className="flash_text">
              <h3 className="sales__text">Flash Sales</h3>
              </div>
              <div className="sales__timer">
                <div className="sales_timer-item">
                  <div className="label">Days</div>
                  <div className="number">{timeLeft.days}</div>
                </div>
                <div className="dot">
                  <span><img src={icon7} alt=""/></span>
                </div>
                <div className="sales_timer-item">
                  <div className="label">Hours</div>
                  <div className="number">{timeLeft.hours}</div>
                </div>
                <div className="dot">
                  <span><img src={icon7} alt=""/></span>
                </div>
                <div className="sales_timer-item">
                  <div className="label">Minutes</div>
                  <div className="number">{timeLeft.minutes}</div>
                </div>
                <div className="dot">
                  <span><img src={icon7} alt=""/></span>
                </div>
                <div className="sales_timer-item">
                  <div className="label">Seconds</div>
                  <div className="number">{timeLeft.seconds}</div>
                </div>
              </div>
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
          </div>
        </div>
   </div>
</section>
  );
};

export default FlashSales;
