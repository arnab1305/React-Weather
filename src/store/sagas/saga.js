import { takeEvery, takeLatest } from "redux-saga/effects";
import { currentWeatherHandler } from "./handlers/currentWeather";
import { forecastHandler } from "./handlers/forecasthander";
import { cityWeatherHandler } from "./handlers/cityWeatherHandler";

function* MySaga() {
  yield takeEvery("GET_WEATHER_DATA", currentWeatherHandler);
  yield takeEvery("GET_FORECAST_DATA", forecastHandler);
  yield takeEvery("GET_CITY_DATA", cityWeatherHandler);
}

export default MySaga;
