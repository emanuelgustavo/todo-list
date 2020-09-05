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
    //setTaskList(taskList);
    console.log("useEffect");
  }, []);

  const handleAddTask = (newTask) => {
    setTaskList([
      ...taskList,
      {
        index: `${newTask[0]}${taskList.length}`,
        description: newTask,
        done: false,
        play: false,
        rest: false,
        finished: false
      }
    ]);
  };

  const handleTaskStatus = (index) => {
    const updatedTaskList = taskList;
    updatedTaskList[index].done = !updatedTaskList[index].done;
    setTaskList(updatedTaskList);
    setChangeCount(changeCount + 1);
  };

  const handleTaskRest = (index) => {
    const updatedTaskList = taskList;
    updatedTaskList[index].rest = !updatedTaskList[index].rest;
    setTaskList(updatedTaskList);
    setChangeCount(changeCount + 1);
  };

  const handlePlayTask = (index) => {
    taskList[index].play = true;
    setChangeCount(changeCount + 1);
  };

  const handlePauseTask = (index) => {
    taskList[index].play = false;
    setChangeCount(changeCount + 1);
  };

  const handleFinishedTask = (index) => {
    taskList[index].finished = true;
    setChangeCount(changeCount + 1);
  };

  return (
    <MainContainer>
      <TaskList
        taskList={taskList}
        handleTaskStatus={handleTaskStatus}
        handlePlayTask={handlePlayTask}
        handlePauseTask={handlePauseTask}
        handleTaskRest={handleTaskRest}
        handleFinishedTask={handleFinishedTask}
      />
      <NewTask handleAddTask={handleAddTask} />
    </MainContainer>
  );
};

export default Main;
