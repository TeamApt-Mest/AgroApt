import React from "react";
import "./Card.css";

const Cards = (props) => {
  return (
    <>
      <div className="container">
        <div className="card ">
          <img className="quote-icon" src={props.image} alt="quote icon" />
          <p className="card-text">{props.cardtext}</p>
        </div>
        <img className="reviewer" src={props.person} alt="person" />
        <h4 className="reviewer-name">{props.name}</h4>
        <p>{props.position}</p>
      </div>
    </>
  );
};

export default Cards;
