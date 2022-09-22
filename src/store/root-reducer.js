import { combineReducers } from "redux";
import { weatherDataReducer } from "./reducers/weatherDataReducer";
import { searchKeyReducer } from "./reducers/searchKeyReducer";
import { forecastDataReducer } from "./reducers/forcastDataReducer";
import { dayToDayDataReducer } from "./reducers/dayToDayReducer";

const rootReducer = combineReducers({
  currentWeather: weatherDataReducer,
  searchKey: searchKeyReducer,
  forecast: forecastDataReducer,
  dayToDay: dayToDayDataReducer,
});

export default rootReducer;
