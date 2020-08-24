import React from "react";
import { Link } from "react-router-dom";

//import styled components
import { PageFooter } from "../styles";
//import icon
import { MdSettings } from "react-icons/md";

const Footer = () => {
  return (
    <PageFooter>
      <Link to="/settings">
        <MdSettings />
      </Link>
    </PageFooter>
  );
};

export default Footer;
