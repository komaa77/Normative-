import React from 'react';
import sideImage from '../assets/Side Image (2).png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Layout>
      <section className="signup">
        <div className="sign__main">
          <div className="sign__over">
            <div className="sign__img">
              <img src={sideImage} alt="Side" />
            </div>

            <div className="sign__form">
              <h1 className="sign__title">Log in to Exclusive</h1>
              <p className="sign__text">Enter your details below</p>

              <form className="form__sign">
                <input type="text" placeholder="Email or Phone Number" required />
                <input type="text" placeholder="Password" required />

                <div className="log__in">
                  <button className="log__account-btn">Log In</button>
                  <Link to="/forget-password" className="log__question">
                    Forget Password?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
