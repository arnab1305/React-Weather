import React, { useEffect, useState } from "react";
import Search from "../search-component/Search";
import "./CurrentWeather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="current-weather-container">
      <div className="data-container">
        <div className="place-name">{data.name}</div>
        <div className="temperature">
          {data.main.temp}
          <span className="unit">℃</span>
        </div>
        <div className="condition">{data.weather[0].main}</div>
      </div>
      <div className="more-details-box">
        <div className="more-details-header">More Details..</div>
        <div className="more-details">
          Mininum temperature: {data.main.temp_min}℃
        </div>
        <div className="more-details">
          Maximum temperature: {data.main.temp_max}℃
        </div>
        <div className="more-details">Feels like: {data.main.feels_like}℃</div>
        <div className="more-details">Humidity: {data.main.humidity}%</div>
      </div>
      <div className="more-details-box-wind">
        <div className="more-details-header">Wind Details</div>
        <div className="more-details">Speed: {data.wind.speed}km/h</div>
        <div className="more-details">Degree: {data.wind.deg}°</div>
      </div>
      <Search />
    </div>
  );
};

export default CurrentWeather;
