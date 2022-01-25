import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//import styles
import "./global.css";

//import components
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import DefaultPage from "./components/DefaultPage";

//main app
const App = () => {
  return (
    <DefaultPage theme={"dark"}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </BrowserRouter>
    </DefaultPage>
  );
};

export default App;
