export const dayToDayDataReducer = (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
      case "SET_DAYTODAY_DATA":
        return payload;
        break;
      default:
        return state;
    }
  };