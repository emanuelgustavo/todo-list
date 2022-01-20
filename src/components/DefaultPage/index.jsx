import React from "react";
import PropTypes from "prop-types";

//import styled component
import { Main } from "../styles";

const PageDefault = ({ children }) => {
  return <Main>{children}</Main>;
};

export default PageDefault;

PageDefault.propTypes = {
  children: PropTypes.node.isRequired
};
