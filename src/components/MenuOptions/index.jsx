import { React } from "react";

//import styled-component
import { MenuOptionContainer } from "../styles.js";

import MenuOptionsTimer from "../MenuOptionsTimer";

const MenuOptions = (props) => {
  return (
    <MenuOptionContainer open={props.open}>
      <MenuOptionsTimer name={"Task"} />
      <MenuOptionsTimer name={"Rest"} />
      <button>OK</button>
    </MenuOptionContainer>
  );
};

export default MenuOptions;
