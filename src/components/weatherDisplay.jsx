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
      <span style={tempStyle}>Temperature: {temperature}</span>
      <span>Conditions: {conditions}</span>
    </div>
  );
};

export default WeatherDisplay;
