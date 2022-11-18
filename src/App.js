import React from "react";
import Data from "./components/Data";
import Quote from "./components/Quote";
import Time from "./components/Time";
import Weather from "./components/Weather";
function App() {
  return (
    <div className="w-full h-screen max-w-screen-sm bg-gradient-to-b from-gray-600 to-black flex   flex-col mx-auto">
      <Weather />
      <Time />
      <Data />
      <Quote />
    </div>
  );
}

export default App;
