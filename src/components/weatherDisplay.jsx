import React from "react";

const WeatherDisplay = ({ weather }) => {
  // Destructuring the props
  const { temperature, conditions } = weather;

  // Conditional styling for temperature
  const tempStyle = {
    color: temperature > 20 ? "red" : "blue",
    fontWeight: "bold",
    fontSize: "24px",
  };

  return (
    <div>
      <p style={tempStyle}>Temperature: {temperature}°C</p>
      <p>Conditions: {conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
