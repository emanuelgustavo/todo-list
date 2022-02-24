import { React } from "react";

//import styled-component
import { MenuOptionContainer } from "../styles.js";

import MenuOptionsTimer from "../MenuOptionsTimer";

const MenuOptions = (props) => {
  const handleToggleMenuOpen = (event) => {
    event.preventDefault();
    props.handleMenuOpen();
  };

  return (
    <MenuOptionContainer open={props.open}>
      <MenuOptionsTimer name={"Task"} />
      <MenuOptionsTimer name={"Rest"} />
      <button onClick={(event) => handleToggleMenuOpen(event)}>OK</button>
    </MenuOptionContainer>
  );
};

export default MenuOptions;
