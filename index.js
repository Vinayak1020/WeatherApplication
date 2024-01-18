let apiKey = "db4be383c73441869d5ced01a8bb0efd";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
let city;
let userCity = document.getElementById("userText");
let temperature = document.getElementById("temp");
let ct = document.getElementById("city");
let humidity = document.getElementById("humidity-info");
let windInfo = document.getElementById("wind-info");
let weatherImage = document.querySelector(".weather_img");

async function getWeatherData() {
    if (userCity.value == "") {
        alert("ENTER A CITY NAME")
    } else {
        city = userCity.value; 
        let response = await fetch(`${apiUrl}q=${city}&appid=${apiKey}`);
        let data = await response.json();

       
        ct.innerHTML = data.name;
        temperature.innerHTML = Math.round(data.main.temp - 273.15) + "°C";
        humidity.innerHTML = data.main.humidity + "%";
        windInfo.innerHTML = data.wind.speed + "km/h";
        userCity.value = "";

        
        if (data.weather[0].main == "Clear") {
            weatherImage.src = "clear.jpeg"   ;
        } else if (data.weather[0].main == "Snow") {
            weatherImage.src = "snow.jpeg";
        } else if (data.weather[0].main == "Clouds") {
            weatherImage.src = "cloud.jpeg";
        } else if (data.weather[0].main == "Drizzle") {
            weatherImage.src = "drizzle.jpeg";
        } else if (data.weather[0].main == "Mist") {
            weatherImage.src = "mist.jpeg";
        } else if (data.weather[0].main == "Rain") {
            weatherImage.src = "rain.jpeg";
        }
        console.log(data);
    }
}
