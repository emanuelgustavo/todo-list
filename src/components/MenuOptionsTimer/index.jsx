import { React, useState } from "react";

//import styled-component container
import { MenuOptionTimerContainer } from "../styles.js";

const MenuOptionsTimer = (props) => {
  const [timer, setTimer] = useState(10);
  const maxTimer = 25;
  const minTimer = 10;

  const handleTimer = (event) => {
    setTimer(event.target.value);
  };

  return (
    <MenuOptionTimerContainer>
      <form>
        <label htmlFor={props.name}>{props.name}</label>
        <input
          type="range"
          id={props.name}
          name={props.name}
          min={minTimer}
          max={maxTimer}
          value={timer}
          onChange={(event) => handleTimer(event)}
        />
      </form>
      <div>
        <p>{minTimer}</p>
        <input
          type="text"
          value={timer}
          onChange={(event) => handleTimer(event)}
        />
        <p>{maxTimer}</p>
      </div>
    </MenuOptionTimerContainer>
  );
};

export default MenuOptionsTimer;
