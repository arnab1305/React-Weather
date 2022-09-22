import React from "react";
import "./HourlyForecast.css";

const HourlyForecast = ({ currentData }) => {
  const date = new Date();
  return (
    <div>
      <div className="forecast-header">Hourly forecast</div>
      <div className="hourly-forecast-box">
        {currentData.list.map((item) => {
          return (
            item.dt_txt.slice(0, 10) === date.toISOString().slice(0, 10) && (
              <div className="hourly-container">
                <div className="day-container">
                  <div>
                    <img
                      src={`../animated/${item.weather[0].main}.svg`}
                      alt=""
                    />
                  </div>
                  <div>{Math.round(item.main.temp * 10) / 10}℃</div>
                  <div className="time">
                    {parseInt(item.dt_txt.slice(11, 13)) - 1}
                    {item.dt_txt.slice(13, 16)}
                  </div>
                </div>
                <div className="day-container">
                  <div>
                    <img
                      src={`../animated/${item.weather[0].main}.svg`}
                      alt=""
                    />
                  </div>
                  <div>{Math.round(item.main.temp * 10) / 10}℃</div>
                  <div className="time">{item.dt_txt.slice(11, 16)}</div>
                </div>
                <div className="day-container">
                  <div>
                    <img
                      src={`../animated/${item.weather[0].main}.svg`}
                      alt=""
                    />
                  </div>
                  <div>{Math.round(item.main.temp * 10) / 10}℃</div>
                  <div className="time">
                    {parseInt(item.dt_txt.slice(11, 13)) + 1}
                    {item.dt_txt.slice(13, 16)}
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default HourlyForecast;
