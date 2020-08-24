import React from "react";
import { Link } from "react-router-dom";

//import components
import Header from "../../components/Header";
//import logo
import logoSettings from "../../assets/images/settings-logo.svg";

const Settings = () => {
  return (
    <>
      <Header image={logoSettings} />
      <h1>Settings</h1>
      <Link to="/">Back</Link>
    </>
  );
};

export default Settings;
