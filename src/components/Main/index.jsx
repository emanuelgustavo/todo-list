import React from "react";

//import styled components
import { MainContainer } from "../styles";

const Main = (props) => {
  return <MainContainer>{props.children}</MainContainer>;
};

export default Main;
