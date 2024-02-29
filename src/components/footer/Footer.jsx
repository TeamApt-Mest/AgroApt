import React from "react";
import facebook1 from "../../images/facebook1.svg";
import twitter from "../../images/twitter.svg";
import instagram from "../../images/instagram.svg";
import applogo from "../../images/applogo.png";
import applepaylogo from "../../images/applepaylogo.png";
import mastercardlogo from "../../images/mastercardlogo.png";
import visalogo from "../../images/visalogo.png";
import  "./Footer.css";

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
      <section >
        <button className="fullButton" onClick={scrollToTop}>
          Back To Top
        </button>
      </section>
      <section className="newsLetterSection">
        <div>
          <img className="appLogo" src={applogo} alt="logo of app" />
        </div>
        <p>Subscribe to Our Newsletter</p>
        <div className="input-group mb-3 inputSection">
          <input
            type="text"
            className={`form`}
            placeholder="Your email address"
            aria-label="Your email address"
            aria-describedby="button-addon2"
          />
          <button
            className={`btn `}
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
          <span className="listItemHover">My Account</span>
          <span className="listItemHover">Order History</span>
          <span className="listItemHover">Shopping Cart</span>
          <span className="listItemHover">Wishlist</span>
          <span className="listItemHover">Settings</span>
        </div>
        <div className="listItems">
          <h5>Helps</h5>
          <span className="listItemHover">Contact</span>
          <span className="listItemHover">FAQs</span>
          <span className="listItemHover">Terms and Conditions</span>
          <span className="listItemHover">Privacy policy</span>
        </div>
        <div className="listItems">
          <h5>Proxy</h5>
          <span className="listItemHover">About</span>
          <span className="listItemHover">Shop</span>
          <span className="listItemHover">Product</span>
          <span className="listItemHover">Track Order</span>
        </div>
      </section>
      <section className="lastSection">
        <div className="iconSection">
          <img src={facebook1} alt="facebook logo" />
          <img src={twitter} alt="twitter logi" />
          <img src={instagram} alt="instagram logo" />
        </div>
        <p>{`Copyright © AgroApt ${year}`}</p>
        <div className="paymentIcons">
          <img className="visaLogo" src={visalogo} alt="visa logo" />
          <img
            className="cardLogo"
            src={mastercardlogo}
            alt="mastercard logo"
          />
          <img className="applepayLogo" src={applepaylogo} alt="applepaylogo" />
        </div>
      </section>
    </footer>
  );
};
export default Footer;
