// API key for OpenWeatherMap
const key = "eb0020611081bc91cbed8d4d16744cf5";

// DOM elements
const btGetCity = document.querySelector("#btGetCity");
const inSearch = document.querySelector("#inSearch");

const outCity = document.querySelector("#outCity");
const outTemp = document.querySelector("#outTemp");
const outWeather = document.querySelector("#outWeather");
const outDate = document.querySelector("#outDate");
const outImg = document.querySelector('#outImg');

// Function to fetch weather data for a given city
async function weather(city) {
  // Construct the URL for the OpenWeatherMap API request
  const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}&lang=pt_br`;

  // Fetch weather data from the API
  const res = await fetch(urlApi);
  const data = await res.json();

  return data;
}

// Function to display weather information for a given city
const showWeather = async (city) => {
  // Retrieve weather data for the specified city
  const data = await weather(city);

  // Update the DOM elements with weather information
  outCity.textContent = data.name;
  outTemp.textContent = parseInt(data.main.temp) + "°C";
  outWeather.textContent = data.weather[0].description;
  outImg.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
  outImg.classList.add('img');
};

// Event listener for the "Get Weather" button
btGetCity.addEventListener("click", () => {
  const city = inSearch.value;

  // Display weather information for the specified city
  showWeather(city);
});
