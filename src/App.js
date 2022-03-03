import React from "react";
import { Routes, Route } from "react-router-dom";

//import styles
import "./global.css";

//import components
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import DefaultPage from "./components/DefaultPage";

//import context
// import { AppContextProvider } from "../../context/AppContext";
import SettingsContext from "../src/context/SettingsContext";

//main app
const App = () => {
  const value = {
    timer: 0,
    task: {
      minTime: 10,
      maxTime: 50,
      time: 10
    },
    rest: {
      minTime: 5,
      maxTime: 30,
      time: 5
    }
  };

  return (
    <SettingsContext.Provider value={value}>
      <Routes>
        <Route path="/" element={<DefaultPage theme={"dark"} />}>
          <Route index element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </SettingsContext.Provider>
  );
};

export default App;
