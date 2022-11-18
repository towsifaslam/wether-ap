import React, { useState, useEffect } from "react";
import axios from "axios";
const url = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";
function Quote() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((respons) => {
        setData(respons.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(data);
  if (!data) return null;
  return (
    <div>
      <h1>{data.quotes[0].author}</h1>
      <p>{data.quotes[0].text}</p>
    </div>
  );
}

export default Quote;
