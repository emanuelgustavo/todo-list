import React, { useContext } from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";

//import globalContext
import GlobalContext from "../../context/globalContext";

//import styled components
import { PageFooter } from "../styles";
//import icon
import { MdSettings, MdArrowBack } from "react-icons/md";

const Footer = ({ to }) => {
  //resolve path to change icon
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: false });

  const { runningTask } = useContext(GlobalContext);

  return (
    <PageFooter>
      {!runningTask && (
        <Link to={to}>{match === null ? <MdSettings /> : <MdArrowBack />}</Link>
      )}
    </PageFooter>
  );
};

export default Footer;
