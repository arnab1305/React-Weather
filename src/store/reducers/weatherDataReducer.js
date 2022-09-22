export const weatherDataReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_WEATHER_DATA":
      return [payload];
      break;
    default:
      return state;
  }
};
