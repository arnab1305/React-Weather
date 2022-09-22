export const getCityForecast = async (q) => {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
        q +
        "&appid=356eef6cfa8ceebdc0d116bc1f715b88&units=metric"
    );
    if (response) {
      const json = await response.json();
      console.log(json);
      return json;
    }
  } catch (error) {
    return error;
  }
};
