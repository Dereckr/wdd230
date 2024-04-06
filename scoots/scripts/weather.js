const tomorrow = document.querySelector("#tomorrowtemp");

const url =
  "https://api.openweathermap.org/data/2.5/forecast?lat=20.505289936897004&lon=-86.93949531134956&units=imperial&cnt=16&appid=0ca2cf93a0895e3223f4ebe93fd2dd44";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  tomorrow.innerHTML = `${data.list[5].main.temp}&deg;F`;
}

apiFetch();

const temp = document.querySelector("#temp");
const weatherIcon = document.querySelector("#weather-icon");
const description = document.querySelector("figcaption");
const humidity = document.querySelector("#humidity");
const maxTemp = document.querySelector("#tempmax");

const urltoday =
  "https://api.openweathermap.org/data/2.5/weather?lat=20.505289936897004&lon=-86.93949531134956&units=imperial&appid=0ca2cf93a0895e3223f4ebe93fd2dd44";

async function apiFetchToday() {
  try {
    const response = await fetch(urltoday);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResultsToday(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResultsToday(data) {
  temp.innerHTML = `${data.main.temp}`;
  humidity.innerHTML = `${data.main.humidity}`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  maxTemp.innerHTML = `${data.main.temp_max}&deg;F`;

  description.innerHTML = data.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", "weather icon");
}

apiFetchToday();
