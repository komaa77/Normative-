import React from 'react'
import ps5Img from "../assets/ps5.png";
import women from "../assets/women.png";
import iimg from "../assets/Frame 707.png";
import iimg1 from "../assets/Frame 706.png";

const Arrival = () => {
  return (
    <section className="new__arrival-section">
      <div className="container">
        <div className="section__titles">
          <div className="red__icon"></div>
          <div className="section__text">Featured</div>
        </div>
        <h3 className="arrival__main">New Arrival</h3>

        <div className="new__arrival-grid">
        <div className="new__arrival-item play"
         style={{ backgroundImage: `url(${ps5Img})` }}>
            <div className="arrival__info">
              <h3 className="new__title">PlayStation 5</h3>
              <p className="new__arrival-description">
                Black and White version of the PS5 coming out on sale.
              </p>
              <a className="arrival__btn">Shop Now</a>
            </div>
          </div>

          <div className="new__arrival-item women"
           style={{ backgroundImage: `url(${women})` }}>
            <div className="arrival__info">
              <h3 className="new__title">Women’s Collections</h3>
              <p className="new__arrival-description">
                Featured woman collections that give you another vibe.
              </p>
              <a className="arrival__btn">Shop Now</a>
            </div>
          </div>

          <div className="new__arrival-item speaker"
           style={{ backgroundImage: `url(${iimg})` }}>
            <div className="arrival__info">
              <h3 className="new__title">Speakers</h3>
              <p className="new__arrival-description">Amazon wireless speakers</p>
              <a className="arrival__btn">Shop Now</a>
            </div>
          </div>

          <div className="new__arrival-item parfume"
           style={{ backgroundImage: `url(${iimg1})` }}>
            <div className="arrival__info">
              <h3 className="new__title">Perfume</h3>
              <p className="new__arrival-description">GUCCI INTENSE OUD EDP</p>
              <a className="arrival__btn">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default Arrival
