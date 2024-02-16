let temperature = document.querySelector(".temperature");
let windSpeed = document.querySelector(".windspeed");
let windChill = document.querySelector(".windchill");

const temp = parseFloat(temperature.textContent);
const wind = parseFloat(windSpeed.textContent);

function windChillCalc(temperature, windSpeed) {
    if(temperature <= 50 && windSpeed > 3){
        let value = 35.74 + 0.6215*temperature - 35.75*windSpeed**0.16 + 0.4275*temperature * windSpeed**0.16;
        return value.toFixed(2);
    }
    else
    {
        return "N/A";
    }
        
}

 windChill.textContent= windChillCalc(temp,wind); 



