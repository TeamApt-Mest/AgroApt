
import Cards from "./Cards";

import quotes from "../../assets/quotes.png";
import "./ReviewContainer.css";
import diane from "../../assets/diane.jpg";
import Em from "../../assets/Em.jpg";
import sam from "../../assets/sam.jpg";
import abi from "../../assets/abi.jpg";

const ReviewContainer = () => {
  return (
    <>
      <div className="review-container">
        <Cards
          image={quotes}
          cardtext="The organic tomatoes I ordered from the agro marketplace were outstanding! They were plump, juicy, and bursting with flavor. Definitely the freshest tomatoes I've ever had."
          person={diane}
          name="Diane"
          position="Customer"
        />
      </div>
      <div className="review-container">
        <Cards
          image={quotes}
          cardtext="Impressed with the heirloom carrots I received! They were colorful, crisp, and full of earthy sweetness. It's great to support local farmers through the agro marketplace."
          person={Em}
          name="Em"
          position="Farmer"
        />
      </div>
      <div className="review-container">
        <Cards
          image={quotes}
          cardtext="Absolutely delicious raw honey! The flavor is rich and floral, and the texture is perfect. Will be buying more from the agro marketplace for sure."
          person={sam}
          name="Samuel"
          position="Customer"
          
        />
      </div>
      <div className="review-container">
        <Cards
          image={quotes}
          cardtext="I recently had the pleasure of purchasing farm-fresh produce from the Agro Marketplace, and I must say, I'm thoroughly impressed."
          person={abi}
          name="Abigail"
          position="Customer"
          
        />
      </div>
    </>
  );
};

export default ReviewContainer;
