import svg3 from '../assets/Cart1 (2).svg'
import svg13 from "../assets/Vector (5).svg";
import svg11 from "../assets/Quick View.svg";
import hp from "../assets/Frame 613 (1).png"
import nout from "../assets/Frame 604 (6).png"
import joys from "../assets/Frame 611 (1).png"
import klav from "../assets/Frame 612 (2).png"
import del from "../assets/icon-delete (1).svg"
import React, { useEffect, useState } from "react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    setWishlist(saved);
  }, []);

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlistItems", JSON.stringify(updatedWishlist));

    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  return (
      <>
      <section className="wishlist">
        <div className="container">
          <div className="wishlist__menu">
            <p>Wishlist ({wishlist.length})</p>
          </div>

          <div className="wishlist__cards">
            {wishlist.length === 0 ? (
              <p>Wishlist bosh</p>
            ) : (
              wishlist.map((item) => (
                <div className="wishlist__card" key={item.id}>
                  <div className="wishlist__image">
                    <img src={item.img} alt={item.name} />
                    <button className="wishlist__add">Add To Cart</button>
                    <div
                      className="delete"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <img src={del} alt="delete" />
                    </div>
                  </div>
                  <div className="wishlist__info">
                    <p className="wishlist__text">{item.name}</p>
                    <div className="wishlist__costs">
                      <span className="wishlist__price">${item.price}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>      
      <section className="suggestions">
        <div className="container">
      <div className="box__suggestion">
        <div className="main__suggestion">
          <div className="red__icon"></div>
          <h3 className="suggestion__just">Just For You</h3>
        </div>
        <button className="suggestion__btn"><p>See All</p></button>
      </div>
      <div className="wishlist__cards">
        <div className="wishlist__card">
          <div className="wishlist__image">
            <img src={nout} alt="" />
            <p className="wishlist__discount">-35%</p>
            <button className="wishlist__add">
            <img src={svg3} alt="" />
              <p>Add To Cart</p>
            </button>
            <div className="delete">
              <img src={svg11} alt="eye" />
            </div>
          </div>
          <div className="wishlist__info">
            <p className="wishlist__text">ASUS FHD Gaming Laptop</p>
            <div className="wishlist__costs">
              <span className="wishlist__price">$960</span>
              <svg width="43" height="15" viewBox="0 0 43 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <g opacity="0.5">
                   <path d="M8.704 9.832C8.704 10.3653 8.57067 10.8667 8.304 11.336C8.048 11.8053 7.664 12.2 7.152 12.52C6.65067 12.84 6.05333 13.032 5.36 13.096V14.392H4.32V13.096C3.31733 13 2.50667 12.6853 1.888 12.152C1.26933 11.6187 0.96 10.9147 0.96 10.04H2.912C2.944 10.456 3.07733 10.8027 3.312 11.08C3.54667 11.3467 3.88267 11.5173 4.32 11.592V8.072C3.60533 7.89067 3.024 7.70933 2.576 7.528C2.128 7.336 1.744 7.03733 1.424 6.632C1.11467 6.22667 0.96 5.672 0.96 4.968C0.96 4.08267 1.26933 3.352 1.888 2.776C2.50667 2.18933 3.31733 1.848 4.32 1.752V0.455999H5.36V1.752C6.29867 1.83733 7.05067 2.136 7.616 2.648C8.192 3.14933 8.51733 3.84267 8.592 4.728H6.64C6.608 4.39733 6.48 4.104 6.256 3.848C6.032 3.58133 5.73333 3.4 5.36 3.304V6.76C6.07467 6.93067 6.656 7.112 7.104 7.304C7.552 7.48533 7.93067 7.77867 8.24 8.184C8.54933 8.57867 8.704 9.128 8.704 9.832ZM2.816 4.872C2.816 5.30933 2.944 5.65067 3.2 5.896C3.46667 6.14133 3.84 6.33867 4.32 6.488V3.256C3.86133 3.30933 3.49333 3.47467 3.216 3.752C2.94933 4.02933 2.816 4.40267 2.816 4.872ZM5.36 11.592C5.82933 11.5173 6.19733 11.3307 6.464 11.032C6.73067 10.7227 6.864 10.3547 6.864 9.928C6.864 9.50133 6.73067 9.17067 6.464 8.936C6.208 8.69067 5.84 8.49333 5.36 8.344V11.592ZM11.1263 3V1.336H14.4543V13H12.6143V3H11.1263ZM16.72 3V1.336H20.048V13H18.208V3H16.72ZM28.8258 4.04C28.7084 3.54933 28.4951 3.18133 28.1858 2.936C27.8764 2.69067 27.4444 2.568 26.8898 2.568C26.0471 2.568 25.4178 2.89333 25.0018 3.544C24.5858 4.184 24.3671 5.25067 24.3458 6.744C24.6231 6.27467 25.0284 5.912 25.5618 5.656C26.0951 5.4 26.6711 5.272 27.2898 5.272C27.9938 5.272 28.6124 5.42667 29.1458 5.736C29.6898 6.03467 30.1111 6.472 30.4097 7.048C30.7191 7.624 30.8738 8.312 30.8738 9.112C30.8738 9.85867 30.7244 10.5253 30.4258 11.112C30.1378 11.6987 29.7058 12.1627 29.1298 12.504C28.5538 12.8347 27.8604 13 27.0498 13C25.9511 13 25.0871 12.76 24.4578 12.28C23.8391 11.7893 23.4018 11.1013 23.1458 10.216C22.9004 9.33067 22.7778 8.22667 22.7778 6.904C22.7778 3 24.1538 1.048 26.9058 1.048C27.9724 1.048 28.8098 1.336 29.4178 1.912C30.0364 2.488 30.3991 3.19733 30.5058 4.04H28.8258ZM26.8898 6.808C26.2391 6.808 25.6844 7.00533 25.2258 7.4C24.7778 7.784 24.5538 8.344 24.5538 9.08C24.5538 9.816 24.7618 10.4027 25.1778 10.84C25.6044 11.2667 26.1964 11.48 26.9538 11.48C27.6258 11.48 28.1538 11.272 28.5378 10.856C28.9324 10.44 29.1298 9.88533 29.1298 9.192C29.1298 8.46667 28.9378 7.89067 28.5538 7.464C28.1804 7.02667 27.6258 6.808 26.8898 6.808ZM32.8194 7.016C32.8194 5.17067 33.1287 3.73067 33.7474 2.696C34.3767 1.65067 35.454 1.128 36.9794 1.128C38.5047 1.128 39.5767 1.65067 40.1954 2.696C40.8247 3.73067 41.1394 5.17067 41.1394 7.016C41.1394 8.88267 40.8247 10.344 40.1954 11.4C39.5767 12.4453 38.5047 12.968 36.9794 12.968C35.454 12.968 34.3767 12.4453 33.7474 11.4C33.1287 10.344 32.8194 8.88267 32.8194 7.016ZM39.3474 7.016C39.3474 6.152 39.2887 5.42133 39.1714 4.824C39.0647 4.22667 38.8407 3.74133 38.4994 3.368C38.158 2.984 37.6514 2.792 36.9794 2.792C36.3074 2.792 35.8007 2.984 35.4594 3.368C35.118 3.74133 34.8887 4.22667 34.7714 4.824C34.6647 5.42133 34.6114 6.152 34.6114 7.016C34.6114 7.912 34.6647 8.664 34.7714 9.272C34.878 9.88 35.102 10.3707 35.4434 10.744C35.7954 11.1173 36.3074 11.304 36.9794 11.304C37.6514 11.304 38.158 11.1173 38.4994 10.744C38.8514 10.3707 39.0807 9.88 39.1874 9.272C39.294 8.664 39.3474 7.912 39.3474 7.016Z" fill="black"/>
                   <path d="M0 7.72H42.1154V8.52H0V7.72Z" fill="black"/>
                   </g>
              </svg>
            </div>
            <div className="best__ratings">
              <img src={svg13} alt="rating" />
              <img src={svg13} alt="rating" />
              <img src={svg13} alt="rating" />
              <img src={svg13} alt="rating" />
              <img src={svg13} alt="rating" />
              <div>
              <span className="best__number">(65)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="wishlist__card">
          <div className="wishlist__image">
            <img src={hp} alt="" />
            <button className="wishlist__add">
            <img src={svg3} alt="" />
              <p>Add To Cart</p>
            </button>
            <div className="delete">
              <img src={svg11} alt="eye" />
            </div>
          </div>
          <div className="wishlist__info">
            <p className="wishlist__text">IPS LCD Gaming Monitor</p>
            <div className="wishlist__costs">
              <span className="wishlist__price">$1160</span>
            </div>
            <div className="best__ratings">
              <img src={svg13} alt="rating" />
              <img src={svg13} alt="rating" />
              <img src={svg13} alt="rating" />
              <img src={svg13} alt="rating" />
              <img src={svg13} alt="rating" />
              <div>
              <span className="best__number">(65)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="wishlist__card">
          <div className="wishlist__image">
            <img src={joys} alt="Joystick" />
            <button className="wishlist__add">
              <p className="new">NEW</p>
              <img src={svg3} alt="" />
              <p>Add To Cart</p>
            </button>
            <div className="delete">
              <img src={svg11} alt="eye" />
            </div>
          </div>
          <div className="wishlist__info">
            <p className="wishlist__text">HAVIT HV-G92 Gamepad</p>
            <div className="wishlist__costs">
              <span className="wishlist__price">$560</span>
            </div>
            <div className="best__ratings">
              <img src={svg13} alt="rating" />
              <img src={svg13} alt="rating" />
              <img src={svg13} alt="rating" />
              <img src={svg13} alt="rating" />
              <img src={svg13} alt="rating" />
              <div>
              <span className="best__number">(65)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="wishlist__card">
          <div className="wishlist__image">
            <img src={klav} alt="Desk" />
            <button className="wishlist__add">
            <img src={svg3} alt="" />
              <p>Add To Cart</p>
            </button>
            <div className="delete">
              <img src={svg11} alt="eye" />
            </div>
          </div>
          <div className="wishlist__info">
            <p className="wishlist__text">AK-900 Wired Keyboard</p>
            <div className="wishlist__costs">
              <span className="wishlist__price">$200</span>
            </div>
            <div className="best__ratings">
              <img src={svg13} alt="rating" />
              <img src={svg13} alt="rating" />
              <img src={svg13} alt="rating" />
              <img src={svg13} alt="rating" />
              <img src={svg13} alt="rating" />
              <div>
              <span className="best__number">(65)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
      </>
  );
};

export default Wishlist;
