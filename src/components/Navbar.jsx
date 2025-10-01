import React, { useContext } from 'react'
import svg from '../assets/Component.svg'
import svg1 from '../assets/Heart.svg'
import svg2 from '../assets/Buy.svg'
import svg3 from '../assets/user.svg'
import { NavLink, Link } from 'react-router-dom';
import { WishlistContext } from '../wishlistcontext'


const Navbar = () => {
    const {wishlist} = useContext(WishlistContext)
    return (
        <div className='header-box'>
            <div className="logo">
                <p className="logo__text">Exclusive</p>
            </div>
        <nav className="navbar">
            <ul className="menu">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => (isActive ? "active" : "")}
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/sign" 
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Sign Up
                </NavLink>
              </li>
            </ul>
        </nav>
            <div className="search">
                <input type="text" placeholder="What are you looking for?"/>
                   <button className="search__button">
                        <img src={svg} alt="search icon"/>
                    </button>
            </div>
            <div className='icons'>
           <Link to="/wishlist">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
           </Link>   
                <Link to= "/cart">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                   <path d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                   <path d="M3 5H7L10 22H26" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                   <path d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                  {wishlist.length > 0 && (
                    <span className="cart-count">{wishlist.length}</span>
                  )}
                </Link>
                <div class="user__icon-modal">
                <input type="checkbox" class="user__check" id="user__check"/>
                <label for="user__check">
                    <span class="user__look">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" rx="16" fill="#DB4444"/>
                            <path d="M21 23V21.3333C21 20.4493 20.691 19.6014 20.1408 18.9763C19.5907 18.3512 18.8446 18 18.0667 18H12.9333C12.1554 18 11.4093 18.3512 10.8592 18.9763C10.309 19.6014 10 20.4493 10 21.3333V23" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                            
                    </span>
                </label>
                <div class="modal__item">
                    <ul class="modal__menu">
                        <li class="list__icon">
                            <a href="#">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p>Manage My Account</p>                                    
                            </a>
                        </li>
                    </ul>
                    <ul class="modal__menu">
                        <li class="list__icon">
                            <a href="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 6.3V20.5C3 20.7652 3.10536 21.0196 3.29289 21.2071C3.48043 21.3946 3.73478 21.5 4 21.5H20C20.2652 21.5 20.5196 21.3946 20.7071 21.2071C20.8946 21.0196 21 20.7652 21 20.5V6.3H3Z" stroke="#FAFAFA" stroke-width="1.5" stroke-linejoin="round"/>
                                    <path d="M21 6.3L18.1665 2.5H5.8335L3 6.3M15.7775 9.6C15.7775 11.699 14.0865 13.4 12 13.4C9.9135 13.4 8.222 11.699 8.222 9.6" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                                    
                                <p> My Order</p>                                    
                            </a>
                        </li>
                    </ul>
                    <ul class="modal__menu">
                        <li class="list__icon">
                            <a href="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_16421_458)">
                                    <path d="M8 16L12 12M16 8L11.9992 12M11.9992 12L8 8M12 12L16 16" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <circle cx="12" cy="12" r="11.25" stroke="white" stroke-width="1.5"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_16421_458">
                                    <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>                                    
                                <p>My Cancellations</p>                                    
                            </a>
                        </li>
                    </ul>
                    <ul class="modal__menu">
                        <li class="list__icon">
                            <a href="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.3789 4.54785C11.5677 3.93719 12.4323 3.93719 12.6211 4.54785L13.8184 8.4209C14.0968 9.32148 14.9295 9.93631 15.8721 9.93652H19.8281C20.4514 9.93652 20.7176 10.7284 20.2207 11.1045L16.8906 13.623C16.1689 14.1689 15.8665 15.1091 16.1338 15.9736L17.3867 20.0264C17.5734 20.6313 16.8728 21.1193 16.3701 20.7344L13.3076 18.3877C12.5361 17.7967 11.4639 17.7967 10.6924 18.3877L7.61328 20.7471C7.11126 21.1311 6.41157 20.6446 6.59668 20.04L7.83203 16.0049C8.09492 15.1463 7.79679 14.214 7.08398 13.668L3.73438 11.1025C3.24116 10.7247 3.50858 9.93652 4.12988 9.93652H8.12793C9.07053 9.93631 9.90322 9.32147 10.1816 8.4209L11.3789 4.54785Z" stroke="#FAFAFA" stroke-width="1.5"/>
                                </svg>                                    
                                <p>My Reviews</p>                                    
                            </a>
                        </li>
                    </ul>
                    <ul class="modal__menu">
                        <li class="list__icon">
                            <Link to="/log">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12H13.5M6 15L3 12L6 9M11 7V6C11 5.46957 11.2107 4.96086 11.5858 4.58579C11.9609 4.21071 12.4696 4 13 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H13C12.4696 20 11.9609 19.7893 11.5858 19.4142C11.2107 19.0391 11 18.5304 11 18V17" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                                                                       
                                <p>Log Out</p>                                    
                            </Link>
                        </li>
                    </ul>
                </div>
             </div>
            </div>
            </div>
    );
};

export default Navbar