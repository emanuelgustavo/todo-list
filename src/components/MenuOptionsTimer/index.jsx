import { React, useState } from "react";

//import styled-component container
import { MenuOptionTimerContainer } from "../styles.js";

const MenuOptionsTimer = (props) => {
  const [timer, setTimer] = useState(props.data.times.time);

  const handleTimer = (event) => {
    setTimer(+event.target.value);
  };

  return (
    <MenuOptionTimerContainer>
      <form>
        <label htmlFor={props.data.name}>
          <p>{props.data.name}</p>
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
          id={props.data.name}
          name={props.data.name}
          min={props.data.times.minTime}
          max={props.data.times.maxTime}
          value={timer}
          onChange={(event) => handleTimer(event)}
        />
      </form>
      <div>
        <p>{props.data.times.minTime}</p>
        <p>{props.data.times.maxTime}</p>
      </div>
    </MenuOptionTimerContainer>
  );
};

export default MenuOptionsTimer;
