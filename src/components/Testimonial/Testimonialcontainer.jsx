import React from "react";
import ReviewContainer from "./ReviewContainer";
import "./Testimonialcontainer.css";

const Testimonialcontainer = () => {
  return (
    <>
      <div className="testimonial-heading">What Our Clients Say</div>
      <div className="testimonial-container">
        <ReviewContainer />
      </div>
    </>
  );
};

export default Testimonialcontainer;
