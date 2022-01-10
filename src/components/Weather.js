import React, { useState } from "react";
import "./Weather.css";
const Weather = () => {
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const key = "236596d24da2013b1b40708c58db6484";

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
      )
        .then((res) => res.json())
        .then((data) => {
          setWeatherData(data);
          setCity("");
        });
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Input city name..."
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
      />
      {typeof weatherData.main == "undefined" ? (
        <div>
          <p>Enter city</p>
        </div>
      ) : (
        <div>
          <p>{weatherData.name}</p>
          <p>{Math.round(weatherData.main.temp)}&deg;C</p>
          <p>{weatherData.weather[0].main}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
