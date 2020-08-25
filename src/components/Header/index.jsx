import React from "react";

//import styled component
import { PageHeader } from "../styles";

const Header = ({ image }) => {
  return (
    <PageHeader>
      <img src={image} alt="" />
    </PageHeader>
  );
};

export default Header;
