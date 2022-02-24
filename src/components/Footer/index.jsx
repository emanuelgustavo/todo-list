import React from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";

//import styled components
import { PageFooter } from "../styles";
//import icon
import { MdSettings, MdArrowBack } from "react-icons/md";

const Footer = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: false });

  return (
    <PageFooter>
      <Link to={to}>{match === null ? <MdSettings /> : <MdArrowBack />}</Link>
    </PageFooter>
  );
};

export default Footer;
