import React from "react";
import { ReactComponent as Icon } from "../../img/spoon-knife.svg";
import './Loader.style.scss';

const Loader = () => {
  return (
    <div className="card">
      <div className="percent">
        <svg>
          <circle cx="105" cy="105" r="100"></circle>
          <circle cx="105" cy="105" r="100"></circle>
        </svg>
        <div className="icon-container">
          <Icon className="icon-container__icon" />
        </div>
      </div>
      <div className="title">
        <h2>Loading...</h2>
      </div>
    </div>
  );
};

export default Loader;
