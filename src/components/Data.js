import React from "react";

function Data1() {
  let today2 = new Date();
  console.log(today2);
  let date =
    today2.getFullYear() + "/" + today2.getMonth() + "/" + today2.getDate();
  console.log(date);
  let ff = today2.getDay();
  console.log(ff);
  return (
    <div>
      <h1>{date}</h1>
    </div>
  );
}

export default Data1;
