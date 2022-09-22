import { call, put } from "redux-saga/effects";
import { getCurrentWeather } from "../requests/currentWeatherReq";

export function* currentWeatherHandler(action) {
  try {
    const response = yield call(
      getCurrentWeather,
      action.payload.lon,
      action.payload.lat,
      action.payload.type
    );
    yield put({ type: "SET_WEATHER_DATA", payload: response });
  } catch (error) {
    return error;
  }
}
