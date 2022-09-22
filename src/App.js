import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import "./App.css";
import Forecast from "./components/forecast/Forecast";
import { ReactComponent as Loading } from "./assets/loading.svg";
import { getLocation } from "./utils/geolocator";

function App() {
  const dispatch = useDispatch();
  const searchString = useSelector((state) => state.searchKey);
  useEffect(() => {
    if (searchString === "") {
      getLocation(function ({ lat, lon }) {
        dispatch({
          type: "GET_WEATHER_DATA",
          payload: {
            lon: lon,
            lat: lat,
          },
        });
        dispatch({
          type: "GET_FORECAST_DATA",
          payload: {
            lon: lon,
            lat: lat,
          },
        });
      });
    } else {
      dispatch({
        type: "GET_CITY_DATA",
        payload: {
          q: searchString.toLowerCase(),
        },
      });
    }
  }, [searchString]);

  const wea = useSelector((state) => state.currentWeather);
  const cur = useSelector((state) => state.forecast);
  const day = useSelector((state) => state.dayToDay);

  console.log(searchString);

  return (
    <div>
      {!wea[0] || !cur[0] || !day ? (
        <div>
          <Loading />
        </div>
      ) : (
        <>
          <img
            src={`../img/${wea[0].weather[0].main}.jpg`}
            alt="no image"
            className="image"
          />
          <CurrentWeather data={wea[0]}></CurrentWeather>
          <Forecast currentData={cur[0]} dayToDay={day}></Forecast>
        </>
      )}
    </div>
  );
}

export default App;
