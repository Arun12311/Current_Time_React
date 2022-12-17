import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);
  //Challenge:
  //1. Given that you can get the current time using:
  const now = new Date().toLocaleTimeString("en-US", { hour12: false });
  // console.log(now);
  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString("en-US", { hour12: false });
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      {/* <button onClick={updateTime}>Get Time</button> */}
    </div>
  );
}

export default App;
