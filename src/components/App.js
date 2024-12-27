import React, { useState, useEffect } from "react";
import WeatherDisplay from "./weatherDisplay";

const App = () => {
  const [weather, setWeather] = useState({ temperature: 0, conditions: "" });

  useEffect(() => {
    const weatherInput = { temperature: 25, conditions: "Sunny" };
    setWeather(weatherInput);
  }, []);

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif", marginTop: "50px" }}>
      <h1>Weather Application</h1>
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
