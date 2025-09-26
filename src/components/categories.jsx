import React, { useState } from "react";
import camera from '../assets/Category-Camera.svg'
import phone from '../assets/Category-CellPhone.svg'
import computer from '../assets/Category-Computer.svg'
import gamepad from '../assets/Category-Gamepad.svg'
import headphones from '../assets/Category-Headphone.svg'
import smartwatch from '../assets/Category-SmartWatch.svg'
import arrow from '../assets/icons arrow-right (2).svg';
import arrow2 from '../assets/icons_arrow-left.svg';


const categories = [
    { id: 1, name: "Phones", img: phone },
    { id: 2, name: "Computers", img: computer },
    { id: 3, name: "SmartWatch", img: smartwatch },
    { id: 4, name: "Camera", svg: <svg className="camera-icon" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17125_6)">
      <path d="M11.6667 16.3334H14C15.2377 16.3334 16.4247 15.8417 17.2998 14.9665C18.175 14.0914 18.6667 12.9044 18.6667 11.6667C18.6667 11.0479 18.9125 10.4544 19.3501 10.0168C19.7877 9.57921 20.3812 9.33337 21 9.33337H35C35.6188 9.33337 36.2123 9.57921 36.6499 10.0168C37.0875 10.4544 37.3333 11.0479 37.3333 11.6667C37.3333 12.9044 37.825 14.0914 38.7002 14.9665C39.5753 15.8417 40.7623 16.3334 42 16.3334H44.3333C45.571 16.3334 46.758 16.825 47.6332 17.7002C48.5083 18.5754 49 19.7624 49 21V42C49 43.2377 48.5083 44.4247 47.6332 45.2999C46.758 46.175 45.571 46.6667 44.3333 46.6667H11.6667C10.429 46.6667 9.242 46.175 8.36683 45.2999C7.49167 44.4247 7 43.2377 7 42V21C7 19.7624 7.49167 18.5754 8.36683 17.7002C9.242 16.825 10.429 16.3334 11.6667 16.3334" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M28 37.3334C31.866 37.3334 35 34.1994 35 30.3334C35 26.4674 31.866 23.3334 28 23.3334C24.134 23.3334 21 26.4674 21 30.3334C21 34.1994 24.134 37.3334 28 37.3334Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
      <clipPath id="clip0_17125_6">
      <rect width="56" height="56" fill="black"/>
      </clipPath>
      </defs>
      </svg>
       },
    { id: 5, name: "Headphones", img: headphones },
    { id: 6, name: "Gaming", img: gamepad },
    { id: 7, name: "Gaming", img: computer },
    { id: 8, name: "Gaming", img: smartwatch },
  ];
  
  const Categories = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const visibleItems = 6;
  
    const prevSlide = () => {
      setCurrentIndex((prev) =>
        prev === 0 ? categories.length - visibleItems : prev - 1
      );
    };
  
    const nextSlide = () => {
      setCurrentIndex((prev) =>
        prev === categories.length - visibleItems ? 0 : prev + 1
      );
    };
  
    return (
      <section className="catigories">
        <div className="container">
          <div className="catigories__top">
            <div className="catigories__title">
              <div className="border"></div>
              <div className="section__titles">
                <div className="red__icon2"></div>
                <p className="section__text2">Categories</p>
              </div>
              <div className="categories__main">
                <div className="categories__text">
                <h3>Browse By Category</h3>
                </div>
                <div className="naviigation__buttons">
                  <div className="left__button">
                    <button onClick={prevSlide}>
                      <span>
                        <img src={arrow2} alt="Prev" />
                      </span>
                    </button>
                  </div>
                  <div className="right__button">
                    <button onClick={nextSlide}>
                      <span>
                        <img src={arrow} alt="Next" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
        <div className="catigorie__items">
        {categories
       .slice(currentIndex, currentIndex + visibleItems)
       .map((cat) => (
       <div className="catigorie__item" key={cat.id}>
        {cat.img && <img src={cat.img} alt={cat.name} />}
        {cat.svg && cat.svg}
        <p className="categorie__item-text">{cat.name}</p>
       </div>
       ))}
      </div>
    </div>
 </section>
    );
  };
  
  export default Categories;