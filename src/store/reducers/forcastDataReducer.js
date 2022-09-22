export const forecastDataReducer = (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
      case "SET_FORECAST_DATA":
        return [payload];
        break;
      default:
        return state;
    }
  };