const { useState, useEffect } = require("react");
import ReactDOM from "react-dom";

function Weather(props) {
  const [temp, setTemp] = useState(0);
  let getWeatherData = async () => {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} `);
    } else {
      return response.json();
    }
  };

  useEffect(() => {
    setTemp(response.main.temp);
  }).catch((e) => console.log(e));
}
