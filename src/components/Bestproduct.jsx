import React from "react";
import svg11 from "../assets/Quick View.svg";
import svg12 from "../assets/heart small.svg";
import svg13 from "../assets/Vector (5).svg";
import coat from "../assets/Frame 605 (1).png";
import rgb from "../assets/Frame 606 (1).png";
import bag from "../assets/Frame 610 (2).png";
import desk from "../assets/Frame 612 (3).png";

const products = [
  {
    id: 1,
    name: "The north coat",
    price: "$260",
    image: coat,
    rating: 5,
    reviews: 65,
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    price: "$960",
    image: bag,
    rating: 5,
    reviews: 65,
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    price: "$160",
    image: rgb,
    rating: 5,
    reviews: 65,
  },
  {
    id: 4,
    name: "Small BookSelf",
    price: "$360",
    image: desk,
    rating: 5,
    reviews: 65,
  },
];

const Bestproduct = () => {
  return (
    <section className="best">
      <div className="container">
        <div className="border"></div>
        <div className="best__top">
          <div className="best__title">
            <div className="section__title-best">
              <div className="red__icon"></div>
              <p className="section__text3">This Month</p>
            </div>
          </div>
        </div>

        <div className="best__main">
          <h3 className="categories__text">Best Selling Products</h3>
          <button className="best__btn">View All</button>
        </div>

        <div className="best__cards">
          {products.map((item) => (
            <div className="best__card" key={item.id}>
              <div className="best__image">
                <img src={item.image} alt={item.name} />
                <div className="like">
                  <img src={svg12} alt="like" />
                </div>
                <div className="eye">
                  <img src={svg11} alt="view" />
                </div>
              </div>

              <div className="best__info">
                <p className="info__text">{item.name}</p>
                <div className="best__costs">
                  <span className="best__price">{item.price}</span>
                </div>
                <div className="best__ratings">
                  {[...Array(item.rating)].map((_, i) => (
                    <img key={i} src={svg13} alt="star" />
                  ))}
                  <span className="best__number">({item.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestproduct;
