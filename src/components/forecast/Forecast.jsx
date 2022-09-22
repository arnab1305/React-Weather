import React from "react";
import "./Forecast.css";
import HourlyForecast from "../hourly-forecast/HourlyForecast";
import FiveDayForecast from "../five-day-forecast/FiveDayForecast";

const Forecast = ({ currentData, dayToDay }) => {
  return (
    <div className="forecast-box">
      <HourlyForecast currentData={currentData} />
      <FiveDayForecast dayToDay={dayToDay} />
    </div>
  );
};

export default Forecast;
