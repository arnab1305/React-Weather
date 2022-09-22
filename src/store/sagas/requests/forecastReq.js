export const getForecast = async (lon, lat, type) => {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
      lat +
      "&lon=" +
      lon +
      "&appid=356eef6cfa8ceebdc0d116bc1f715b88&units=metric"
  );
  if (response) {
    const json = await response.json();
    console.log(json);
    return json;
  }
};
