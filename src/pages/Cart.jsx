import React from 'react'
import { Link } from 'react-router-dom'
import small1 from '../assets/Monitor-Cart-Small.svg'
import small2 from '../assets/Gamepad-Cart-Small.svg'


const Cart = () => {
  return (
    <>
     <section class="cardpage">
        <div class="container">
            <div class="card__main">
                <div class="card__links">
                    <Link to="/" className='card__cart'>Home</Link>
                    <p>/</p>
                    <a href="" class="card__cart">Cart</a>
                </div>
                <div class="card__items">
                    <div class="card__item">
                        <div class="card__sections">
                            <p class="card__types">Product</p>
                            <p class="card__types">Price</p>
                            <p class="card__types">Quantity</p>
                            <p class="card__types">Subtotal</p>
                        </div>
                    </div>
                    <div class="card__item">
                        <div class="card__product">
                            <div class="card__position">
                                <div class="tv__card">
                                    <span class="tv__icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="9" fill="#DB4444"/>
                                            <path d="M9 15L12 12M15 9L11.9994 12M11.9994 12L9 9M12 12L15 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>                                                                                                                                
                                    </span>
                                    <img src={small1} alt=""/>
                                </div>
                                <p>LCD Monitor</p>
                            </div>
                            <p class="price__card">650$</p>
                            <div class="card__counter">
                                <p class="quantity">01</p>
                                <div class="icons__cards">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.75732 7.36666L4.45732 10.6667L3.51465 9.72399L7.75732 5.48132L12 9.72399L11.0573 10.6667L7.75732 7.36666Z" fill="black"/>
                                        </svg>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.24268 8.63334L11.5427 5.33334L12.4854 6.27601L8.24268 10.5187L4.00002 6.27601L4.94268 5.33334L8.24268 8.63334Z" fill="black"/>
                                            </svg>                                                                                    
                                </div>
                            </div>
                            <p class="price__cardd">650$</p>
                        </div>
                    </div>
                    <div class="card__item">
                        <div class="card__product">
                            <div class="card__position">
                                <div class="tv__card">
                                    <img src={small2} alt=""/>
                                </div>
                                <p>H1 Gamepad</p>
                            </div>
                            <p class="price__card">550$</p>
                            <div class="card__counter">
                                <p class="quantity">02</p>
                                <div class="icons__cards">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.75732 7.36666L4.45732 10.6667L3.51465 9.72399L7.75732 5.48132L12 9.72399L11.0573 10.6667L7.75732 7.36666Z" fill="black"/>
                                        </svg>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.24268 8.63334L11.5427 5.33334L12.4854 6.27601L8.24268 10.5187L4.00002 6.27601L4.94268 5.33334L8.24268 8.63334Z" fill="black"/>
                                            </svg>                                                                                    
                                </div>
                            </div>
                            <p class="price__cardd">1100$</p>
                        </div>
                    </div>
                </div>
                <div class="card__buttons">
                    <button class="return__btn">Return To Shop</button>
                    <button class="update__btn">Update Cart</button>
                </div>
                <section class="carts__coupon">
                    <div class="coupon__cards">
                        <div class="coupon">
                            <input type="text" placeholder="Coupon Code"/>
                            <button class="coupon__btn">Apply Coupon</button>
                        </div>
                        <div class="total__cart">
                            <h3 class="total__title">Cart Total</h3>
                            <div class="subtotal">
                                <p class="subtotal__text">Subtotal:</p>
                                <p class="subtotal__price">$1750</p>
                            </div>
                            <div class="subtotal">
                                <p class="subtotal__text">Shipping:</p>
                                <p class="subtotal__price">Free</p>
                            </div>
                            <div class="subtital">
                                <p class="subtotal__text">Total:</p>
                                <p class="subtotal__price">$1750</p>
                            </div>
                            <button class="cart__btn">Procees to checkout</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
     </section>
    </>
  )
}

export default Cart