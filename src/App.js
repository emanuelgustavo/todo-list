import React from "react";
import { Routes, Route } from "react-router-dom";

//import styles
import "./global.css";

//import components
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import DefaultPage from "./components/DefaultPage";

//import context
import { GlobalStateProvider } from "../src/context/GlobalState";

//main app
const App = () => {
  return (
    <GlobalStateProvider>
      <Routes>
        <Route path="/" element={<DefaultPage theme={"dark"} />}>
          <Route index element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </GlobalStateProvider>
  );
};

export default App;
