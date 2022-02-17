import { React, useState } from "react";

//import components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "../../components/Main";

import Timer from "../../components/Timer";
import NewTask from "../../components/NewTask";
import TaskList from "../../components/TaskList";

//import logo
import logoHome from "../../assets/images/pomodoros-logo.svg";

const Home = () => {
  //list of tasks
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = (newTask) => {
    setTaskList([
      ...taskList,
      {
        index: `${newTask[0]}${taskList.length}`,
        description: newTask,
        task: true,
        taskDone: false,
        rest: false,
        restDone: false,
        play: false,
        finished: false,
        taskTime: 5, //s
        restTime: 2, //s
        counter: 0
      }
    ]);
  };

  return (
    <>
      <Header image={logoHome} />
      <Main>
        <Timer />
        <NewTask handleAddTask={handleAddTask} />
        <TaskList taskList={taskList} />
      </Main>
      <Footer />
    </>
  );
};

export default Home;
