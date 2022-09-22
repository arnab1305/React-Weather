import { call, put } from "redux-saga/effects";
import { getCityCurrentWeather } from "../requests/cityCurrentWeatherReq";
import { getCityForecast } from "../requests/cityForeCastDataReq";

export function* cityWeatherHandler(action) {
  try {
    const response = yield call(getCityCurrentWeather, action.payload.q);
    const response2 = yield call(getCityForecast, action.payload.q);
    const dayToDayData = () => {
      const initial_Array = [];
      for (let i = 0; i < response2.list.length; i += 8) {
        initial_Array[i / 8] = response2.list[i];
      }
      return initial_Array;
    };
    const dayData = yield call(dayToDayData);
    yield put({ type: "SET_FORECAST_DATA", payload: response2 });
    yield put({ type: "SET_DAYTODAY_DATA", payload: dayData });
    yield put({ type: "SET_WEATHER_DATA", payload: response });
  } catch (error) {
    return error;
  }
}
