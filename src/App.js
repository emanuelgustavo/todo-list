import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </DefaultPage>
  );
};

export default App;
