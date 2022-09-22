import { call, put } from "redux-saga/effects";
import { getForecast } from "../requests/forecastReq";
export function* forecastHandler(action) {
  try {
    const response = yield call(
      getForecast,
      action.payload.lon,
      action.payload.lat,
      action.payload.type
    );
    const dayToDayData = () => {
      const initial_Array = [];
      for (let i = 0; i < response.list.length; i += 8) {
        initial_Array[i / 8] = response.list[i];
      }
      return initial_Array;
    };
    const dayData = yield call(dayToDayData);
    yield put({ type: "SET_FORECAST_DATA", payload: response });
    yield put({ type: "SET_DAYTODAY_DATA", payload: dayData });
  } catch (error) {
    return error;
  }
}
