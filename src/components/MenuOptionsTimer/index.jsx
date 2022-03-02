import { React, useContext, useState } from "react";

//import Context
// import { AppContextConsumer } from "../../context/AppContext";
import SettingsContext from "../../context/SettingsContext";

//import styled-component container
import { MenuOptionTimerContainer } from "../styles.js";

const MenuOptionsTimer = (props) => {
  //destructuring context
  const {
    minTaskTime,
    maxTaskTime,
    minRestTime,
    maxRestTime,
    taskTime,
    restTime
  } = useContext(SettingsContext);

  const [timer, setTimer] = useState(10);

  const handleTimer = (event) => {
    setTimer(event.target.value);
  };

  return (
    <MenuOptionTimerContainer>
      <form>
        <label htmlFor={props.name}>
          <p>{props.name}</p>
          <div>
            <input
              type="text"
              value={timer}
              onChange={(event) => handleTimer(event)}
            />
            <p>min</p>
          </div>
        </label>
        <input
          type="range"
          id={props.name}
          name={props.name}
          min={minTaskTime}
          max={maxTaskTime}
          value={timer}
          onChange={(event) => handleTimer(event)}
        />
      </form>
      <div>
        <p>{minTaskTime}</p>
        <p>{maxTaskTime}</p>
      </div>
    </MenuOptionTimerContainer>
  );
};

export default MenuOptionsTimer;
