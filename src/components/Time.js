import React from "react";
import Moment from "react-moment";
import "moment-timezone";
function Time() {
  let today = new Date();
  let greeting = () => {
    if (today.getHours() >= 5 && today.getHours() < 11) {
      return "Good Mornig ,amr koliza minhaj tmi 5 tai uthe jaite hbe ";
    } else if (today.getHours() >= 11 && today.getHours() < 17) {
      return "goot afternoon ,ei time time ami goosl kore namz porba ";
    } else if (today.getHours() >= 17 && today.getHours() < 20) {
      return "good evening ";
    } else {
      return "good night ei time tmr pain marka bondho ke msg diba";
    }
  };

  return (
    <div
      className="
     text-[red] relative"
    >
      <p className="flex flex-col items-center justify-center absolute left-40 hover:bottom-10">
        <Moment interval={1000} format="LT"></Moment>
        {greeting()}
      </p>
    </div>
  );
}

export default Time;
