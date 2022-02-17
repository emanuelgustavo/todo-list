import { React, useState } from "react";

import { MenuItemContainer } from "../styles.js";
import MenuOptions from "../MenuOptions";

const MenuItem = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <MenuItemContainer onClick={handleMenuOpen}>Teste</MenuItemContainer>
      <MenuOptions open={menuOpen} type={props.type} name={props.name} />
    </>
  );
};

export default MenuItem;
