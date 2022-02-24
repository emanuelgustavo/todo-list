import React from "react";
import { Outlet } from "react-router-dom";
// import PropTypes from "prop-types";

//import styled component
import { Main } from "../styles";

const PageDefault = () => {
  return (
    <Main>
      <Outlet />
    </Main>
  );
};

export default PageDefault;

// PageDefault.propTypes = {
//   children: PropTypes.node.isRequired
// };
