import React from "react";

import "../assets/styles/Cards.css";

import recovered from "../assets/img/heart.png";
import death from "../assets/img/skeleton.png";
import confirmed from "../assets/img/tick.png";

const Cards = ({ isVisible, data, title }) => {
  if (!isVisible) {
    return <h5 className="main-title">Select a Country</h5>;
  }

  let countryValue = "Total";
  if (data.hasOwnProperty("country")) {
    countryValue = data.country;
  }

  return (
    <React.Fragment>
      <div className="card danger">
        <div className="card_header-icon">
          <h2>{countryValue}</h2>
          <img src={confirmed} alt="plus" />
        </div>
        <div className="card-info">
          <h2>Confirmed cases: </h2>
          <p>{data.confirmed}</p>
        </div>
      </div>

      <div className="card recover">
        <div className="card_header-icon">
          <h2>{countryValue}</h2>
          <img src={recovered} alt="plus" />
        </div>
        <div className="card-info">
          <h2>Recovered people: </h2>
          <p>{data.recovered}</p>
        </div>
      </div>

      <div className="card death">
        <div className="card_header-icon">
          <h2>{countryValue}</h2>
          <img src={death} alt="plus" />
        </div>
        <div className="card-info">
          <h2>Confirmed deaths: </h2>
          <p>{data.deaths}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cards;
