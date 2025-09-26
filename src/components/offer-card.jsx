import React, { useState, useEffect } from "react";
import JBL from "../assets/JBL.png";

const Offercard = () => {
  // 🔹 Aksiya tugash sanasini belgilaymiz (3 kun keyinga)
  const [targetDate] = useState(new Date().getTime() + 3 * 24 * 60 * 60 * 1000);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="offer">
      <div className="container">
        <div className="offer__item">
          <div className="offer__info">
            <p className="offer__label">Categories</p>
            <h3 className="offer__title">Enhance Your Music Experience</h3>
            <div className="offer__timer">
              <div className="offer__circle">
                <p className="offer__number">{timeLeft.days}</p>
                <p className="offer__time">Days</p>
              </div>
              <div className="offer__circle">
                <p className="offer__number">{timeLeft.hours}</p>
                <p className="offer__time">Hours</p>
              </div>
              <div className="offer__circle">
                <p className="offer__number">{timeLeft.minutes}</p>
                <p className="offer__time">Minutes</p>
              </div>
              <div className="offer__circle">
                <p className="offer__number">{timeLeft.seconds}</p>
                <p className="offer__time">Seconds</p>
              </div>
            </div>
            <div className="offer__btn">
              <button>Buy Now!</button>
            </div>
          </div>
          <div className="offer__image">
            <img src={JBL} alt="JBL" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offercard;
