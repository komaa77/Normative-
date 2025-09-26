import React from 'react'

const Header = () => {
  return (
    <div className="banner">
    <p className="banner__text"> Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
    <a className="banner__link" href="#">Shop Now</a>
    <div className="select__banner">
        <select className="language__selector">
            <option value="uz">Uzbek</option>
            <option value="en">English</option>
            <option value="ru">Russian</option>
        </select>
    </div>
</div>
  )
}

export default Header