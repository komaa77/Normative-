import React, { useState, useEffect } from "react";
import small1 from '../assets/Monitor-Cart-Small.svg';
import small2 from '../assets/Gamepad-Cart-Small.svg';
import bkash from '../assets/Bkash (1).svg';
import visa from '../assets/Visa (1).svg';
import mastercard from '../assets/Mastercard (1).svg';
import nagad from '../assets/Nagad (1).svg';

const Checkout = () => {
  const [items, setItems] = useState([]);
  const [payment, setPayment] = useState("");
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cartItems")) || [];
    setItems(stored);
  }, []);

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  );

  const total = subtotal - (subtotal * discount) / 100;

  const handleApplyCoupon = () => {
    if (coupon === "DISCOUNT10") {
      setDiscount(10);
      alert("✅ Coupon qo‘llandi! 10% chegirma berildi.");
    } else {
      setDiscount(0);
      alert("❌ Noto‘g‘ri kupon kodi!");
    }
  };

  const handlePlaceOrder = () => {
    if (!payment) {
      alert("Iltimos, to‘lov usulini tanlang!");
      return;
    }
    alert(`Buyurtma qabul qilindi!
To‘lov usuli: ${payment}
Umumiy summa: $${total.toFixed(2)}`);
  };

  return (
    <section className="checkout">
      <div className="container">
        <div className="breadcrumb">
          <ul className="breadcrumb__menu">
            <li className="bread__list"><a href="">Account</a></li>
            <li>/</li>
            <li className="bread__list"><a href="">My Account</a></li>
            <li>/</li>
            <li className="bread__list"><a href="">Product</a></li>
            <li>/</li>
            <li className="bread__list"><a href="">View Cart</a></li>
            <li>/</li>
            <li className="bread__link"><a href="">CheckOut</a></li>
          </ul>
        </div>
      </div>

      <section className="billing">
        <div className="container">
          <div className="checkout__section">
            <div className="billing__part">
              <form className="billing__form">
                <h1 className="billing__title">Billing Details</h1>
                <div className="billing__inputs">
                  <label className="label__billing">First Name <span style={{ color: "#DB4444" }}>*</span></label>
                  <input className="billing__input" type="text" required />
                  <label className="label__billing">Company Name</label>
                  <input className="billing__input" type="text" />
                  <label className="label__billing">Street Address <span style={{ color: "#DB4444" }}>*</span></label>
                  <input className="billing__input" type="text" required />
                  <label className="label__billing">Apartment, floor, etc. (optional)</label>
                  <input className="billing__input" type="text" />
                  <label className="label__billing">Town/City <span style={{ color: "#DB4444" }}>*</span></label>
                  <input className="billing__input" type="text" required />
                  <label className="label__billing">Phone Number <span style={{ color: "#DB4444" }}>*</span></label>
                  <input className="billing__input" type="text" required />
                  <label className="label__billing">Email Address <span style={{ color: "#DB4444" }}>*</span></label>
                  <input className="billing__input" type="email" required />
                </div>
              </form>
            </div>

            <div className="summary">
              <div className="summary__product-info">
                <div className="summary__products">
                  {items.length === 0 ? (
                    <p>Cart bo‘sh</p>
                  ) : (
                    items.map((item) => (
                      <div className="summary__product" key={item.id}>
                        <div className="image__summary">
                          <img src={item.img || small1} alt={item.name} />
                          <p className="summary__products-name">{item.name}</p>
                        </div>
                        <p className="summary__price">
                          ${item.price} x {item.qty} = ${item.price * item.qty}
                        </p>
                      </div>
                    ))
                  )}
                </div>

                <div className="summary__total">
                  <div className="subtotal">
                    <p className="subtotal__title">Subtotal:</p>
                    <p className="subtotal__title">${subtotal}</p>
                  </div>
                </div>

                <div className="summary__total">
                  <div className="subtotal">
                    <p className="subtotal__title">Shipping:</p>
                    <p className="subtotal__title">Free</p>
                  </div>
                </div>

                <div className="summary__total">
                  <div className="subtotal">
                    <p className="subtotal__title">Total:</p>
                    <p className="subtotal__title">${total}</p>
                  </div>
                </div>

                <div className="summary__payment-method">
                  <div className="bank__way">
                    <label className="bank-label">
                      <input
                        className="radio-summary"
                        type="radio"
                        name="paymentMethod"
                        value="bank"
                        checked={payment === "bank"}
                        onChange={(e) => setPayment(e.target.value)}
                      />
                      <div className="radio__summary-swap">
                        <div className="radio__circle-1"></div>
                      </div>
                      Bank
                    </label>
                    <div className="bank__icons">
                      <img src={bkash} alt="" />
                      <img src={visa} alt="" />
                      <img src={mastercard} alt="" />
                      <img src={nagad} alt="" />
                    </div>
                  </div>
                  <label className="summary__cash-method">
                    <input
                      className="radio-summary"
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={payment === "cash"}
                      onChange={(e) => setPayment(e.target.value)}
                    />
                    <div className="radio__summary-swap">
                      <div className="radio__circle"></div>
                    </div>
                    Cash on delivery
                  </label>
                </div>

                <div className="summary__cupon-part">
                  <div className="cupon__side">
                    <input
                      className="summary__cupon-input"
                      type="text"
                      placeholder="Coupon Code"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                    />
                    <button className="apply__cupon-btn" onClick={handleApplyCoupon}>
                      Apply Coupon
                    </button>
                  </div>
                  <button className="summary__place-btn" onClick={handlePlaceOrder}>
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Checkout;
