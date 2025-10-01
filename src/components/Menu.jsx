import svg4 from "../assets/DropDown.svg";
import Slider from "./Slider"; 

const Main = () => {
  return (
    <main className="main__section">
      <div className="container">
        <div className="slide__section">
          <div className="sidebar">
            <ul>
              <li>
                <a href="">Woman’s Fashion</a>
                <span><img src={svg4} alt="Dropdown icon" /></span>
              </li>
              <li>
                <a href="">Men’s Fashion</a>
                <span><img src={svg4} alt="Dropdown icon" /></span>
              </li>
              <li><a href="">Electronics</a></li>
              <li><a href="">Home & Lifestyle</a></li>
              <li><a href="">Medicine</a></li>
              <li><a href="">Sports & Outdoor</a></li>
              <li><a href="">Baby’s & Toys</a></li>
              <li><a href="">Groceries & Pets</a></li>
              <li><a href="">Health & Beauty</a></li>
            </ul>
          </div>
          <Slider />
        </div>
      </div>
    </main>
  );
};

export default Main;

