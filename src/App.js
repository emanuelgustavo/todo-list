import React from "react";
import { Routes, Route } from "react-router-dom";

//import styles
import "./global.css";

//import components
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import DefaultPage from "./components/DefaultPage";

//main app
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultPage theme={"dark"} />}>
        <Route index element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default App;
