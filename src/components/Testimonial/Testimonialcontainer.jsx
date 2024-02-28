import React from "react";
import ReviewContainer from "./ReviewContainer";
import "./Testimonialcontainer.css";

const Testimonialcontainer = () => {
  return (
    <div className="testimonial">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-container">
        <ReviewContainer />
      </div>
    </div>
  );
};

export default Testimonialcontainer;
