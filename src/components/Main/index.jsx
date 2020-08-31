import React, { useState, useEffect } from "react";

//import components
import TaskList from "../TaskList";
import NewTask from "../NewTask";

//import styled componets
import { MainContainer } from "../styles";

const Main = () => {
  const [taskList, setTaskList] = useState([]);
  const [changeCount, setChangeCount] = useState(0);
  const [initialTime, setInitalTime] = useState(60);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setTaskList(taskList);
    setCounter(initialTime);
  }, [changeCount, taskList, initialTime]);

  useEffect(() => {
    const timer = setTimeout(() => handleCounter(), 1000);
    return () => clearTimeout(timer);
  });

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

  const handleCounter = () => {
    if (counter < 0) {
      return;
    }
    setCounter(counter - 1);
  };

  const handleTaskStatus = (index) => {
    taskList[index].done = !taskList[index].done;
    setChangeCount(changeCount + 1);
  };

  return (
    <MainContainer>
      <p>Contador: {counter}</p>
      <TaskList taskList={taskList} handleTaskStatus={handleTaskStatus} />
      <NewTask handleAddTask={handleAddTask} />
    </MainContainer>
  );
};

export default Main;
