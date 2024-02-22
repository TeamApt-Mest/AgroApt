import React from "react";
import facebook1 from "../images/facebook1.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";

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
      <section>
        <div>
          <h4>My Account</h4>
          <li>My Account</li>
          <li>Order History</li>
          <li>Shopping Cart</li>
          <li>Wishlist</li>
          <li>Settings</li>
        </div>
        <div>
          <h4>Helps</h4>
          <li>Contact</li>
          <li>FAQs</li>
          <li>Terms and Conditions</li>
          <li>Privacy policy</li>
        </div>
        <div>
          <h4>Proxy</h4>
          <li>About</li>
          <li>Shop</li>
          <li>Product</li>
          <li>Track Order</li>
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
