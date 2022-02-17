import React from "react";
import { Link } from "react-router-dom";

//import components
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

import MenuItem from "../../components/MenuItem";

//import logo
import logoSettings from "../../assets/images/settings-logo.svg";

const Settings = () => {
  return (
    <>
      <Header image={logoSettings} />
      <Main>
        <MenuItem type={"range"} name={"timerRange"} />
      </Main>
      <Footer />
      <Link to="/">Back</Link>
    </>
  );
};

export default Settings;
