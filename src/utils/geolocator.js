export function getLocation(callback) {
  if (navigator.geolocation) {
    var lat_lng = navigator.geolocation.getCurrentPosition(function (position) {
      var user_position = {};
      user_position.lat = position.coords.latitude;
      user_position.lon = position.coords.longitude;
      callback(user_position);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}
