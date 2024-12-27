import React, { useState, useEffect } from "react";
import WeatherDisplay from "./components/weatherDisplay";

const App = () => {
  // State to store weather data
  const [weather, setWeather] = useState({ temperature: 0, conditions: "" });

  useEffect(() => {
    // Simulating fetching weather data
    const weatherInput = { temperature: 25, conditions: "Sunny" };
    setWeather(weatherInput);
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", marginTop: "50px" }}>
      <h1>Weather Application</h1>
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
