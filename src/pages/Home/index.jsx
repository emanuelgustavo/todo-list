import React from "react";

//import components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "../../components/Main";

//import logo
import logoHome from "../../assets/images/pomodoros-logo.svg";

const Home = () => {
  return (
    <>
      <Header image={logoHome} />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
