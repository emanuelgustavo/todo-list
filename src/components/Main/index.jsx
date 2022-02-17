import React from "react";
//import context
import { AppContextProvider } from "../../context/AppContext";

//import styled componets
import { MainContainer } from "../styles";

const Main = (props) => {
  return (
    <AppContextProvider>
      <MainContainer>{props.children}</MainContainer>
    </AppContextProvider>
  );
};

export default Main;
