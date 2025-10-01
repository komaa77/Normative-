import React, {useState} from 'react'
import pss from '../assets/image 57 (1).png'
import pss1 from '../assets/image 58 (1).png'
import pss2 from '../assets/image 61 (1).png'
import pss3 from '../assets/image 59 (1).png'
import pss4 from '../assets/image 63 (1).png'
import ProductCards from '../components/Product-Cards'


const Lastp = () => {
    // 🔹 State’lar
    const [bigImage, setBigImage] = useState(pss4);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState("M");
    const [quantity, setQuantity] = useState(2);
    const basePrice = 198;
  
    const smallImages = [pss, pss1, pss2, pss3];
  
    // 🔹 Narx hisoblash
    const totalPrice = (basePrice * quantity).toFixed(2);
  
    // 🔹 Rang tanlash
    const handleColorSelect = (color) => {
      setSelectedColor(color);
    };
  
    // 🔹 O‘lcham tanlash
    const handleSizeSelect = (size) => {
      setSelectedSize(size);
    };
  
    // 🔹 Soni + -
    const updateQuantity = (newQuantity) => {
      if (newQuantity < 1) return;
      setQuantity(newQuantity);
    };
  
    // 🔹 Buy Now bosilganda
    const handleBuy = () => {
      if (!selectedColor) {
        alert("Iltimos rangni tanlang!");
        return;
      }
      if (!selectedSize) {
        alert("Iltimos o‘lchamni tanlang!");
        return;
      }
      const productInfo = {
        color: selectedColor,
        size: selectedSize,
        quantity: quantity,
        totalPrice: totalPrice,
      };
      console.log("Product Info:", productInfo);
      alert(
        `Product info: \nColor: ${productInfo.color}\nSize: ${productInfo.size}\nQuantity: ${productInfo.quantity}\nTotal Price: $${productInfo.totalPrice}`
      );
    };
  
    return (
      <>
        {/* Breadcrumb */}
        <section className="about">
          <div className="container">
            <div className="about__breadcrumb">
              <ul className="about__breadcrumb-menu">
                <li className="about__breadcrumb-list">
                  <a href="">Account</a>
                </li>
                <li className="about__breadcrumb-menu">/</li>
                <li className="about__breadcrumb-list">
                  <a href="">Gaming</a>
                </li>
                <li className="about__breadcrumb-menu">/</li>
                <li className="about__breadcrumb-link">
                  <a href="">Havic HV G-92 Gamepad</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
  
        {/* Product Section */}
        <section className="product__image-section">
            <div className='container'>
            <div className="product__cover">
              {/* Images */}
              <div className="main__image">
                {smallImages.map((img, i) => (
                  <div
                    key={i}
                    className={`small__image ${
                      bigImage === img ? "active" : ""
                    }`}
                    onClick={() => setBigImage(img)}
                  >
                    <img src={img} alt="" />
                  </div>
                ))}
  
                <div className="big__image">
                  <img src={bigImage} alt="" id="big__image" />
                </div>
              </div>
  
              {/* Info */}
              <div className="product__info">
                <div className="product__info-top">
                  <h1 className="product-title">Havic HV G-92 Gamepad</h1>
                  <span className="product__price">${totalPrice}</span>
                  <p className="product__desc">
                    PlayStation 5 Controller Skin High quality vinyl with air
                    channel adhesive for easy bubble free install & mess free
                    removal Pressure sensitive.
                  </p>
                </div>
  
                {/* Colors */}
                <div className="product__info-bottom">
                  <div className="product__colors">
                    <h3 className="colors__text">Colours:</h3>
                    <div className="product__radios">
                      <div
                        className={`circle__first ${
                          selectedColor === "Blue" ? "active" : ""
                        }`}
                        onClick={() => handleColorSelect("Blue")}
                      ></div>
                      <div
                        className={`circle__second ${
                          selectedColor === "Red" ? "active" : ""
                        }`}
                        onClick={() => handleColorSelect("Red")}
                      ></div>
                    </div>
                  </div>
                </div>
  
                {/* Sizes */}
                <div className="product__sizes">
                  <p className="size__text">Size:</p>
                  <div className="size__btns">
                    {["XS", "S", "M", "L", "XL"].map((size) => (
                      <button
                        key={size}
                        className={`size__btn ${
                          selectedSize === size ? "active" : ""
                        }`}
                        onClick={() => handleSizeSelect(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
  
                {/* Quantity */}
                <div className="product__quantity">
                  <div className="quantity__btns">
                    <button className="minus" onClick={() => updateQuantity(quantity - 1)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M20 12H4" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    </button>
                    <div className="quantity">{quantity}</div>
                    <button className="plus" onClick={() => updateQuantity(quantity + 1)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 20V12M12 12V4M12 12H20M12 12H4" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    </button>
                  </div>
                  <button className="product__buy" onClick={handleBuy}>
                    Buy Now
                  </button>
                <button className="product__like"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                   </svg>
                </button>
                </div>
                <div class="product__instructions">
                        <div class="product__delivery-first">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_261_4843)">
                                <path d="M11.6673 31.6667C13.5083 31.6667 15.0007 30.1743 15.0007 28.3333C15.0007 26.4924 13.5083 25 11.6673 25C9.82637 25 8.33398 26.4924 8.33398 28.3333C8.33398 30.1743 9.82637 31.6667 11.6673 31.6667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.33398 28.3335H7.00065C5.89608 28.3335 5.00065 27.4381 5.00065 26.3335V21.6668M3.33398 8.3335H19.6673C20.7719 8.3335 21.6673 9.22893 21.6673 10.3335V28.3335M15.0007 28.3335H25.0007M31.6673 28.3335H33.0007C34.1052 28.3335 35.0007 27.4381 35.0007 26.3335V18.3335M35.0007 18.3335H21.6673M35.0007 18.3335L30.5833 10.9712C30.2218 10.3688 29.5708 10.0002 28.8683 10.0002H21.6673" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5 11.8182H11.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.81836 15.4545H8.48503" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5 19.0909H11.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_261_4843">
                                <rect width="40" height="40" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                                <div class="text__delivery">
                                    <p class="delivery__title">Free Delivery</p>
                                    <p class="delivery__title-2">Enter your postal code for Delivery Availability</p>
                                </div>                                
                        </div>
                        <div class="product__delivery-first">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_261_4865)">
                                <path d="M33.3327 18.3334C32.9251 15.4004 31.5645 12.6828 29.4604 10.5992C27.3564 8.51557 24.6256 7.18155 21.6888 6.80261C18.752 6.42366 15.7721 7.02082 13.208 8.5021C10.644 9.98337 8.6381 12.2666 7.49935 15M6.66602 8.33335V15H13.3327" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.66602 21.6667C7.07361 24.5997 8.43423 27.3173 10.5383 29.4009C12.6423 31.4845 15.3731 32.8185 18.3099 33.1974C21.2467 33.5764 24.2266 32.9792 26.7907 31.4979C29.3547 30.0167 31.3606 27.7335 32.4994 25M33.3327 31.6667V25H26.666" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_261_4865">
                                <rect width="40" height="40" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                                <div class="text__delivery">
                                    <p class="delivery__title">Return Delivery</p>
                                    <p class="delivery__title-2">Free 30 Days Delivery Returns. Details</p>
                                </div>                                
                        </div>
          </div>
              </div>
            </div>
        </div>
        </section>
        <div className='container'>
        <div className="red__icon">
              <p className="section__text">Related Item</p>
            </div>
        </div>
        <ProductCards showButton={false}/>
      </>
    );
  };
  
  export default Lastp;