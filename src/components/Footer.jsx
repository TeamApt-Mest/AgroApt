import React from "react";
import facebook1 from "../images/facebook1.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import applogo from "../images/applogo.png";
import styles from "../../src/App.css";
const Footer = () => {
  const year = new Date().getFullYear();
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  // const handleSocialMediaClick = (platform) => {
  //   console.log(`Clicked on ${platform}`);
  // };
  return (
    <footer className="Footer">
      <section className="buttonSection">
        <button className="fullButton" onClick={scrollToTop}>
          Back To Top
        </button>
      </section>
      <section className="newsLetterSection">
        <div>
          <img className="appLogo" src={applogo} alt="logo of app" />
        </div>
        <p>Subscribe to Our Newsletter</p>
        <div className="input-group mb-3">
          <input
            type="text"
            className={`form ${styles.form}`}
            placeholder="Your email address"
            aria-label="Your email address"
            aria-describedby="button-addon2"
          />
          <button
            className={`btn ${styles.btn}`}
            type="button"
            id="button-addon2"
          >
            Subscribe
          </button>
        </div>
      </section>
      <section className="containerForText">
        <div className="listItems">
          <h5>My Account</h5>
          <li className="listItemHover">My Account</li>
          <li className="listItemHover">Order History</li>
          <li className="listItemHover">Shopping Cart</li>
          <li className="listItemHover">Wishlist</li>
          <li className="listItemHover">Settings</li>
        </div>
        <div className="listItems">
          <h5>Helps</h5>
          <li className="listItemHover">Contact</li>
          <li className="listItemHover">FAQs</li>
          <li className="listItemHover">Terms and Conditions</li>
          <li className="listItemHover">Privacy policy</li>
        </div>
        <div className="listItems">
          <h5>Proxy</h5>
          <li className="listItemHover">About</li>
          <li className="listItemHover">Shop</li>
          <li className="listItemHover">Product</li>
          <li className="listItemHover">Track Order</li>
        </div>
      </section>
      <section>
        <div>
          <img src={facebook1} alt="facebook logo" />
          <img src={twitter} alt="twitter logi" />
          <img src={instagram} alt="instagram logo" />
        </div>
        <p>{`Copyright © AgroApt ${year}`}</p>
      </section>
    </footer>
  );
};
export default Footer;
