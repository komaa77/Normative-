import React, { useState } from "react";
import { Link } from 'react-router-dom'
import small1 from '../assets/Monitor-Cart-Small.svg'
import small2 from '../assets/Gamepad-Cart-Small.svg'


const Cart = () => {
    const [items, setItems] = useState([
      { id: 1, name: "LCD Monitor", price: 650, qty: 1, img: small1 },
      { id: 2, name: "H1 Gamepad", price: 550, qty: 2, img: small2 },
    ]);
  
    const increaseQty = (id) => {
      setItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    };
  
    const decreaseQty = (id) => {
      setItems((prev) =>
        prev.map((item) =>
          item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
        )
      );
    };
  
    const removeItem = (id) => {
      setItems((prev) => prev.filter((item) => item.id !== id));
    };
  
    const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  
    return (
      <section className="cardpage">
        <div className="container">
          <div className="card__main">
            <div className="card__links">
              <Link to="/" className="card__cart">Home</Link>
              <p>/</p>
              <span className="card__cart">Cart</span>
            </div>

              <div className="card__item">
              <div className="card__sections">
                <p className="card__types">Product</p>
                <p className="card__types">Price</p>
                <p className="card__types">Quantity</p>
                <p className="card__types">Subtotal</p>
              </div>
            </div>
  
            {items.map((item) => (
              <div className="card__item" key={item.id}>
                <div className="card__product">
                  <div className="card__position">
                    <div className="tv__card">
                      <span
                        className="tv__icon"
                        onClick={() => removeItem(item.id)}
                        style={{ cursor: "pointer" }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="9" fill="#DB4444" />
                          <path
                            d="M9 15L12 12M15 9L11.9994 12M11.9994 12L9 9M12 12L15 15"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <img src={item.img} alt={item.name} />
                    </div>
                    <p>{item.name}</p>
                  </div>
  
                  <p className="price__card">${item.price}</p>
  
                  <div className="card__counter">
                    <p className="quantity">
                      {item.qty < 10 ? `0${item.qty}` : item.qty}
                    </p>
                    <div className="icons__cards">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        onClick={() => increaseQty(item.id)}
                        style={{ cursor: "pointer" }}
                      >
                        <path
                          d="M7.75732 7.36666L4.45732 10.6667L3.51465 9.72399L7.75732 5.48132L12 9.72399L11.0573 10.6667L7.75732 7.36666Z"
                          fill="black"
                        />
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        onClick={() => decreaseQty(item.id)}
                        style={{ cursor: "pointer" }}
                      >
                        <path
                          d="M8.24268 8.63334L11.5427 5.33334L12.4854 6.27601L8.24268 10.5187L4.00002 6.27601L4.94268 5.33334L8.24268 8.63334Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="price__cardd">${item.price * item.qty}</p>
                </div>
              </div>
            ))}
  
            <div className="card__buttons">
              <button className="return__btn">Return To Shop</button>
              <button className="update__btn">Update Cart</button>
            </div>
  
            <section className="carts__coupon">
              <div className="coupon__cards">
                <div className="coupon">
                  <input type="text" placeholder="Coupon Code" />
                  <button className="coupon__btn">Apply Coupon</button>
                </div>
                <div className="total__cart">
                  <h3 className="total__title">Cart Total</h3>
                  <div className="subtotal">
                    <p className="subtotal__text">Subtotal:</p>
                    <p className="subtotal__price">${total}</p>
                  </div>
                  <div className="subtotal">
                    <p className="subtotal__text">Shipping:</p>
                    <p className="subtotal__price">Free</p>
                  </div>
                  <div className="subtital">
                    <p className="subtotal__text">Total:</p>
                    <p className="subtotal__price">${total}</p>
                  </div>
                  <button className="cart__btn">Proceed to checkout</button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    );
  };
  
  export default Cart;