import React from "react";

//import styled component
import { PageHeader } from "../styles";

const Header = ({ image }) => {
  return (
    <PageHeader>
      <img src={image} alt="" srcset="" />
    </PageHeader>
  );
};

export default Header;
