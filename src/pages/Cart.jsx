import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cartItems")) || [];
    setItems(stored);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const stored = JSON.parse(localStorage.getItem("cartItems")) || [];
      setItems(stored);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const increaseQty = (id) => {
    const updated = items.map((item) =>
      item.id === id ? { ...item, qty: (item.qty || 1) + 1 } : item
    );
    setItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const decreaseQty = (id) => {
    const updated = items.map((item) =>
      item.id === id && (item.qty || 1) > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    );
    setItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const removeItem = (id) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  );

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
                          d="M9 15L12 12M15 9L12 12M12 12L9 9M12 12L15 15"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <img src={item.img} alt={item.name} className="cart__image" />
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
                        d="M7.7 7.3L4.4 10.6L3.5 9.7L7.7 5.5L12 9.7L11.1 10.6L7.7 7.3Z"
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
                        d="M8.2 8.6L11.5 5.3L12.5 6.3L8.2 10.5L4 6.3L5 5.3L8.2 8.6Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
                <p className="price__cardd">${item.price * (item.qty || 1)}</p>
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
                <Link to="/checkout" className="cart__btn">
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Cart;
