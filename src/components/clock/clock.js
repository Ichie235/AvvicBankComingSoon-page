import React, { useState, useEffect } from "react";
import "../clock/clock.css";

const RoundClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const getRotationStyle = (handType) => {
    const now = time;
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    let rotation = 0;
    if (handType === "hour") {
      rotation = hours * 30 + minutes * 0.5;
    } else if (handType === "minute") {
      rotation = minutes * 6 + seconds * 0.1;
    } else if (handType === "second") {
      rotation = seconds * 6;
    }

    return {
      transform: `rotate(${rotation}deg)`,
    };
  };

  return (
    <div className="clock">
      <div className="hand hour-hand" style={getRotationStyle("hour")}></div>
      <div
        className="hand minute-hand"
        style={getRotationStyle("minute")}
      ></div>
      <div
        className="hand second-hand"
        style={getRotationStyle("second")}
      ></div>
      {Array.from(Array(60).keys()).map((index) => (
        <div
          key={index}
          className="minute-line"
          style={{
            transform: `rotate(${index * 150}deg) translate(-50%, -970%)`,
          }}
        />
      ))}
    </div>
  );
};

export default RoundClock;
