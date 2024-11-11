function refreshWeather(response) {
  let tempElement = document.querySelector("#weather-app-temp");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  city.innerHTML = response.data.city;
  tempElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  //seperation of concerns; functions to do one thing and one thing great

  let apiKey = "dt97fe0c0549b0cao63b1f7d27014abc";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  console.log(searchInput.value);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
console.log(searchFormElement);
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Paris");
