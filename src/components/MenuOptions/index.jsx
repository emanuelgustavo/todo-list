import { React, useContext } from "react";

//import styled-component
import { MenuOptionContainer } from "../styles.js";

import MenuOptionsTimer from "../MenuOptionsTimer";

//import Context
// import { AppContextConsumer } from "../../context/AppContext";
import SettingsContext from "../../context/SettingsContext";

const MenuOptions = (props) => {
  //destructuring context
  const { task, rest } = useContext(SettingsContext);

  const timerOptions = [
    {
      name: "Task",
      times: task
    },
    {
      name: "Rest",
      times: rest
    }
  ];

  const handleToggleMenuOpen = (event) => {
    event.preventDefault();
    props.handleMenuOpen();
  };

  return (
    <MenuOptionContainer open={props.open}>
      {timerOptions.map((option, index) => {
        return <MenuOptionsTimer key={index} data={option} />;
      })}
      <button onClick={(event) => handleToggleMenuOpen(event)}>OK</button>
    </MenuOptionContainer>
  );
};

export default MenuOptions;
