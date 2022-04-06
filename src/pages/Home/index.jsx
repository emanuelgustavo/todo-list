import { React, useContext } from "react";

//import components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "../../components/Main";

// import Timer from "../../components/Timer";
import NewTask from "../../components/NewTask";
import TaskList from "../../components/TaskList";

//import logo
import logoHome from "../../assets/images/pomodoros-logo.svg";

//import context
import GlobalContext from "../../context/globalContext";

const Home = () => {
  //destructuring context
  const { settings, taskList, addNewTask } = useContext(GlobalContext);
  const { task, rest } = settings;

  const handleAddTask = (newTask) => {
    addNewTask({
      index: `${newTask[0]}${taskList.length}`,
      description: newTask,
      task: true,
      taskDone: false,
      rest: false,
      restDone: false,
      play: false,
      finished: false,
      taskTime: task.time, //s
      restTime: rest.time, //s
      counter: 0
    });
  };

  return (
    <>
      <Header image={logoHome} />
      <Main>
        {/* <Timer /> */}
        <NewTask handleAddTask={handleAddTask} />
        <TaskList taskList={taskList} />
      </Main>
      <Footer to="/settings">Teste</Footer>
    </>
  );
};

export default Home;
