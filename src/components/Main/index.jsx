import React, { useState, useEffect } from "react";

//import components
import TaskList from "../TaskList";
import NewTask from "../NewTask";

//import styled componets
import { MainContainer } from "../styles";

const Main = () => {
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
        finished: false
      }
    ]);
  };

  return (
    <MainContainer>
      <TaskList taskList={taskList} />
      <NewTask handleAddTask={handleAddTask} />
    </MainContainer>
  );
};

export default Main;
