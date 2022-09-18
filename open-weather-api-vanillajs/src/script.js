let weather = {
  apiKey: "6d3ae874f73566d815eb16af480b7be7",
  fetchWeather: function (city) {
    //requires a city to return the weather data for
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    ) //allows API to fetch weather data for any city that is searched in the input, as well as use the already stored API Key from OpenWeather Maps
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    //extract data from JSON, example JSON on github
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity, feels_like } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, feels_like, speed);
    document.querySelector(".city").innerText = name.toUpperCase();
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + "@4x.png";
    document.querySelector(".description").innerText =
      description.toUpperCase();
    if (temp < 10 && temp >= 0) {
      document.querySelector(".details").style.marginLeft = "15px";
      document.querySelector(".temp").style.marginLeft = "5px";
    } else if (temp < 0 && temp > -9) {
      document.querySelector(".details").style.marginLeft = "0px";
      document.querySelector(".temp").style.marginLeft = "15px";
    } else if (temp <= -10) {
      document.querySelector(".details").style.marginLeft = "-5px";
      document.querySelector(".temp").style.marginLeft = "-20px";
    }
    document.querySelector(".temp").innerText = Math.round(temp) + "°";
    document.querySelector(".humidityValue").innerText = humidity;
    document.querySelector(".feelsLikeValue").innerText = feels_like.toFixed(1);
    document.querySelector(".windValue").innerText = speed.toFixed(1);
    document.querySelector(".weather").classList.remove("loading");

    //below to set the current day of the week on screen:
    let dateObj = new Date();
    let weekday = dateObj.toLocaleString("default", { weekday: "long" });
    document.querySelector(".weekday").innerHTML = weekday.toUpperCase();
    console.log(weekday);

    //below to set the time of day --> morning, mid-day, afternoon, evening, night
    let time = dateObj.getHours();
    if (time >= 5 && time <= 11) {
      document.querySelector(".timeBlock").innerText = "MORNING";
    } else if (time >= 12 && time <= 17) {
      document.querySelector(".timeBlock").innerText = "AFTERNOON";
    } else if (time >= 18 && time <= 21) {
      document.querySelector(".timeBlock").innerText = "EVENING";
    } else if (time >= 22 && time <= 4) {
      document.querySelector(".timeBlock").innerText = "NIGHT";
    }
  },
  search: function () {
    this.fetchWeather(document.querySelector(".cityInput").value);
  },
};

document
  .querySelector(".cityInput")
  .addEventListener("keyup", function (event) {
    //when the Enter key is released, run the search function; Search is also run when the magnifying glass button is pressed --> onclick("search()")
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Edinburgh"); //automatically set the data shown to the user as Edinburgh --> where I am currently based
