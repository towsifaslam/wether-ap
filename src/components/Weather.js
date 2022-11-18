import React, { useState, useEffect } from "react";
import axios from "axios";

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=dallas&units=imperial&appid=2b2ed226ad671bbdf32f7b0ac355aaaf";
function Weather() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!data) return null;
  return (
    <div className="text-4xl text-white relative">
      <p className="absolute top-0 left-0 m-5">
        {" "}
        {data.main.temp.toFixed(0)}*{" "}
        <p className="text-xl text-gray-300">Today ours country temperature</p>
      </p>
    </div>
  );
}

export default Weather;
