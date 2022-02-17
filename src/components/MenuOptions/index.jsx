import { React, useState } from "react";

import { MenuOptionContainer } from "../styles.js";

const MenuOptions = (props) => {
  const [timer, setTimer] = useState(10);

  const handleTimer = (event) => {
    setTimer(event.target.value);
  };

  return (
    <MenuOptionContainer open={props.open}>
      <form>
        <label for={props.name} />
        <input
          type={props.type}
          id={props.name}
          name={props.name}
          min={10}
          max={25}
          value={timer}
          onChange={(event) => handleTimer(event)}
        />
      </form>
      <p>{timer}</p>
    </MenuOptionContainer>
  );
};

export default MenuOptions;
