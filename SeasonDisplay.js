import React from "react";
import './SeasonDisplay.css';
import Spinner from "./Spinner";



const getSeason = (lat, season) => {
  if (season > 2 && season < 9 && lat > 0) {
    return "Summer";
  } else {
    return "Winter";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());

  const text =  season === "Summer" ? "***Let's hit the beach***" : "***Burr, it's chilly***";
  const icon= season === "Summer"? "sun icon" : "snowflake icon"
  return (
    <div>

      <i className={`icon-left massive ${icon} icon`}></i>
      
      <h1 className='gap' >{text}</h1>
      <i className={`icon-right massive ${icon} icon`}></i>

    </div>
  );
};



export default SeasonDisplay;
