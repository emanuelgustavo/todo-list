import React from "react";

//import components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "../../components/Main";

// import Timer from "../../components/Timer";
import NewTask from "../../components/NewTask";
import TaskList from "../../components/TaskList";

//import logo
import logoHome from "../../assets/images/pomodoros-logo.svg";

const Home = () => {
  return (
    <>
      <Header image={logoHome} />
      <Main>
        <NewTask />
        <TaskList />
      </Main>
      <Footer to="/settings">Teste</Footer>
    </>
  );
};

export default Home;
