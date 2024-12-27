import React from "react";

const WeatherDisplay = ({ weather }) => {
  const { temperature, conditions } = weather;

  // Dynamic color styling for the temperature
  const tempColor = temperature > 20 ? "red" : "blue";

  return (
    <div>
      <p>
        <span style={{ color: tempColor, fontWeight: "bold", fontSize: "24px" }}>
          Temperature: {temperature}
        </span>
      </p>
      <p>Conditions: {conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
