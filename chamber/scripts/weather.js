const currentTemp = document.querySelector("#temp");
const weatherIcon = document.querySelector("#weather-icon");
const description = document.querySelector("figcaption");
const tomorrow = document.querySelector("#temptomorrow");
const afterTomorrow = document.querySelector("#tempaftertomorrow");
const twoDays = document.querySelector("#temptwodays");

const url =
  "https://api.openweathermap.org/data/2.5/forecast?lat=-16.550260968640423&lon=-68.09315877399598&units=imperial&cnt=25&appid=0ca2cf93a0895e3223f4ebe93fd2dd44";

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
  currentTemp.innerHTML = `${data.list[0].main.temp}`;
  const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
  console.log(iconsrc);
  let desc = data.list[0].weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", "weather icon");
  description.textContent = `${desc.toUpperCase()}`;
  tomorrow.innerHTML = `${data.list[8].main.temp}&deg;C`;
  afterTomorrow.innerHTML = `${data.list[16].main.temp}&deg;C`;
  twoDays.innerHTML = `${data.list[24].main.temp}&deg;C`;
}

apiFetch();
