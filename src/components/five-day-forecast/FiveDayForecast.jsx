import React from "react";
import "./FiveDayForecast.css";

const FiveDayForecast = ({ dayToDay }) => {
  return (
    <div>
      <div className="forecast-header">5 Day forecast</div>
      <div className="day-forecast-box">
        {dayToDay.map((item) => {
          return (
            <div className="item-box">
              <div className="main-box">
                <div className="header">
                  {item.dt_txt.slice(8, 10) +
                    "-" +
                    item.dt_txt.slice(5, 7) +
                    "-" +
                    item.dt_txt.slice(0, 4)}
                </div>
                <img src={`../animated/${item.weather[0].main}.svg`} alt="" />
                <div className="item">{item.weather[0].main}</div>
              </div>
              <div className="item-more-dets">
                <div>
                  <span className="label">Max temp:</span> {item.main.temp_max}
                </div>
                <div>
                  <span className="label">Min temp:</span> {item.main.temp_min}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FiveDayForecast;
