import React, { useState, useEffect } from "react";

import { AppContextConsumer } from "../../context/AppContext";

import { TimerContainer } from "../styles";

const Timer = (props) => {
  const [timerCount, setTimerCount] = useState("");

  //handle timer
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     getNowTime();
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // });

  // function getNowTime() {
  //   const nowTime = new Date(Date.now());
  //   setTimerCount(nowTime.toLocaleTimeString());
  // }

  return (
    <AppContextConsumer>
      {(context) => (
        <TimerContainer>
          <p>{context.timer}</p>
        </TimerContainer>
      )}
    </AppContextConsumer>
  );
};

export default Timer;
