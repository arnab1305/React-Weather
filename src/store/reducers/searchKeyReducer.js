export const searchKeyReducer = (state = "", action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_SEARCH_DATA":
      return payload;
      break;
    default:
      return state;
  }
};
