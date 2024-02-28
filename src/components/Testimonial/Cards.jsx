import React from "react";
import "./Card.css";

const Cards = (props) => {
  return (
    <>
      <div className="container">
        <div className="card">
          <img className="quote-icon" src={props.image} />
          <p>{props.cardtext}</p>
        </div>
        <img className="reviewer" src={props.person} />
        <h4 className="reviewer-name">{props.name}</h4>
        <p>{props.position}</p>
      </div>

      {/* <div className="container">
        <div className="card">
          <img className="quote-icon" src={props.image} />
          <p>{props.cardtext}</p>
        </div>
        <img className="reviewer" src={props.person} />
        <h4 className="reviewer-name">{props.name}</h4>
        <p>{props.position}</p>
      </div>
      <div className="container">
        <div className="card">
          <img className="quote-icon" src={props.image} />
          <p>{props.cardtext}</p>
        </div>
        <img className="reviewer" src={props.person} />
        <h4 className="reviewer-name">{props.name}</h4>
        <p>{props.position}</p>
      </div>
      <div>
        <img src={props.image} />
        <p>{props.cardtext}</p>
        <img src={props.person} />
        <h4>{props.name}</h4>
        <p>{props.position}</p>
      </div>
      <div>
        <img src={props.image} />
        <p>{props.cardtext}</p>
        <img src={props.person} />
        <h4>{props.name}</h4>
        <p>{props.position}</p>
      </div> */}
    </>
  );
};

export default Cards;
