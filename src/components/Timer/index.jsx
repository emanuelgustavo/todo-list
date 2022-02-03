import React from "react";

import { AppContextConsumer } from "../../context/AppContext";

import { TimerContainer } from "../styles";

const Timer = () => {
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
