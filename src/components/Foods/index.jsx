import React from "react";
import "./Foods.css";

const Foods = ({ image, title }) => {
  return (
    <div className="food-card-container">
      <div className="image-container">
        <img src={image} alt={image} />
      </div>
      <div className="card-content">
        <div className="food-title">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Foods;
