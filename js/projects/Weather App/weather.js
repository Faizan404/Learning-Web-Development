const container = document.querySelector(".container");
const errorModal = document.querySelector(".not-found");

const openWeatherAPIKey = "5e764ab089cc4c68659cffc9ef2e53e2";

const search = function () {
  const searchBar = document.querySelector(".search-box input");
  const searchBtn = document.querySelector(".btn-search");

  //   async await
  searchBtn.addEventListener("click", async function () {
    const searchValue = searchBar.value;
    if (!searchValue) return;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${openWeatherAPIKey}`
    );
    const res = await response.json();
    if (response.status === 200) showWeartherBox(res);
    else show404Error();
  });
};

const show404Error = function () {
  container.style.height = "400px";
  errorModal.style.display = "block";
  errorModal.classList.add("fadeIn");
};

const showWeartherBox = function (weatherData) {
  disableErrorBox();
  const weatherBox = document.querySelector(".weather-box");
  const weatherBoxImage = document.querySelector(".weather-box img");
  const weatherDetails = document.querySelector(".weather-details");
  const humidityInWeather = document.querySelector(".humidity span");
  const windSpeed = document.querySelector(".wind span");
  const temperature = document.querySelector(".temperature");
  const description = document.querySelector(".description");

  container.style.height = "590px";
  weatherBox.style.display = "block";
  weatherBox.classList.add("fadeIn");
  weatherDetails.classList.add("fadeIn");
  const weatherCondition = weatherData.weather[0].main;
  const weatherDescr = weatherData.weather[0].description;

  if (weatherCondition === "Haze") {
    weatherBoxImage.src = "./images/mist.png";
  } else if (weatherCondition === "Rain") {
    weatherBoxImage.src = "./images/rain.png";
  } else if (weatherCondition === "Snow") {
    weatherBoxImage.src = "./images/snow.png";
  } else if (weatherCondition === "Clear") {
    weatherBoxImage.src = "./images/clear.png";
  } else if (weatherCondition === "Clouds") {
    weatherBoxImage.src = "./images/cloud.png";
  }

  const { humidity, temp } = weatherData.main;
  const { speed } = weatherData.wind;

  humidityInWeather.textContent = humidity;
  windSpeed.textContent = speed;
  temperature.textContent = kelvinToCelsius(temp);
  description.textContent = weatherDescr;
};

const disableErrorBox = function () {
  // container.style.height = "400px";
  errorModal.style.display = "none";
  errorModal.classList.remove("fadeIn");
};

function kelvinToCelsius(kelvin) {
  const celsius = kelvin - 273.15;
  return celsius.toFixed(2); // Convert to fixed decimal places for readability
}

(function init() {
  search();
})();
