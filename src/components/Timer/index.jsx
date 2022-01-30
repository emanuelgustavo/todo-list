import React, { useState, useEffect } from "react";

import { TimerContainer } from "../styles";

const Timer = () => {
  const [timerCount, setTimerCount] = useState("");

  //handle timer
  useEffect(() => {
    const timer = setTimeout(() => {
      getNowTime();
    }, 1000);
    return () => clearTimeout(timer);
  });

  function getNowTime() {
    const nowTime = new Date(Date.now());
    setTimerCount(nowTime.toLocaleTimeString());
  }

  return (
    <TimerContainer>
      <p>{timerCount}</p>
    </TimerContainer>
  );
};

export default Timer;
