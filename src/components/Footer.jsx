import React from 'react'
import send from "../assets/icon-send.svg"
import qr from "../assets/Qr Code (1).svg"
import google from "../assets/google.svg"
import app from "../assets/download-appstore (1).svg"
import facebook from "../assets/Icon-Facebook (1).svg"
import Twiter from "../assets/Icon-Twitter (1).svg"
import insta from "../assets/icon-instagram (1).svg"
import linkedin from "../assets/Icon-Linkedin (1).svg"
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer class="footer">
        <div class="container">
            <div class="form__content">
                <div class="footer__form">
                    <h3 class="footer__logo">Exclusive</h3>
                    <p class="form__title">Subscribe</p>
                    <p class="form__text">Get 10% off your first order</p>
                    <div class="form__input">
                        <input type="text" placeholder="Enter your email"/>
                        <button class="form__btn">
                            <img src={send} alt=""/>
                        </button>
                    </div>
                </div>
                <div class="support__footer">
                    <h3 class="footer__section-title">Support</h3>
                    <p class="support__info">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                    <p class="support__email">
                        <a href="">exclusive@gmail.com</a>
                    </p>
                    <p class="support__number">
                        <a href="">+88015-88888-9999</a>
                    </p>
                </div>
                <div class="account__footer">
                    <h3 class="footer__section-title">Account</h3>
                    <ul class="footer__menu">
                        <li class="footer__links">
                            <Link to="/account">My Account</Link>
                        </li>
                        <li class="footer__links">
                            <a href="">Login / Register</a>
                        </li>
                        <li class="footer__links">
                            <a href="">Cart</a>
                        </li>
                        <li class="footer__links">
                            <a href="">Wishlist</a>
                        </li>
                        <li class="footer__links">
                            <a href="">Shop</a>
                        </li>
                    </ul>
                </div>
                <div class="footer__quick">
                    <h3 class="footer__section-title">Quick Link</h3>
                    <ul class="footer__menu">
                        <li class="footer__links">
                            <a href="">Privacy Policy</a>
                        </li>
                        <li class="footer__links">
                            <a href="">Terms Of Use</a>
                        </li>
                        <li class="footer__links">
                            <a href="">FAQ</a>
                        </li>
                        <li class="footer__links">
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </div>
                <div class="footer__download">
                    <h3 class="footer__section-title">Download App</h3>
                    <p class="footer__text"><a href="">Save $3 with App New User Only</a></p>
                    <div class="footer__image">
                        <img src={qr} alt=""/>
                        <div>
                            <img src={google}
                                alt=""/>
                            <img src={app} alt=""/>
                        </div>
                    </div>
                    <div class="footer__icons">
                        <img src={facebook}  alt=""/>
                        <img src={Twiter} alt=""/>
                        <img src={insta}  alt=""/>
                        <img src={linkedin}  alt=""/>
                    </div>
                </div>
            </div>
            <div class="footer__line">
                <div class="container">
                    <div class="copyright">
                        <span class="icon__copyright">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.5 18.3332C15.1024 18.3332 18.8334 14.6022 18.8334 9.99984C18.8334 5.39746 15.1024 1.6665 10.5 1.6665C5.89765 1.6665 2.16669 5.39746 2.16669 9.99984C2.16669 14.6022 5.89765 18.3332 10.5 18.3332Z"
                                    stroke="gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M13 8.14799C13 8.14799 11.9706 6.6665 10.2549 6.6665C8.53924 6.6665 7.16669 8.14799 7.16669 9.99984C7.16669 11.8517 8.53924 13.3332 10.2549 13.3332C11.9706 13.3332 13 11.8517 13 11.8517"
                                    stroke="gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                        <p class="copyright__text">Copyright Rimel 2022. All right reserved</p>
                    </div>
                </div>
            </div>
        </div>
 </footer>
  )
}

export default Footer