import React, { useState, useEffect } from "react";

//import components
import TaskList from "../TaskList";
import NewTask from "../NewTask";

//import styled componets
import { MainContainer } from "../styles";

const Main = () => {
  const [taskList, setTaskList] = useState([]);
  const [changeCount, setChangeCount] = useState(0);

  useEffect(() => {
    setTaskList(taskList);
  }, changeCount);

  const handleAddTask = (newTask) => {
    setTaskList([
      ...taskList,
      {
        index: `${newTask[0]}${taskList.length}`,
        description: newTask,
        done: false
      }
    ]);
  };

  const handleTaskStatus = (index) => {
    taskList[index].done = !taskList[index].done;
    setChangeCount(changeCount + 1);
  };

  return (
    <MainContainer>
      <TaskList taskList={taskList} handleTaskStatus={handleTaskStatus} />
      <NewTask handleAddTask={handleAddTask} />
    </MainContainer>
  );
};

export default Main;
