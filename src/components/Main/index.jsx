import React, { useState, useEffect } from "react";

//import components
import TaskList from "../TaskList";
import NewTask from "../NewTask";

//import styled componets
import { MainContainer } from "../styles";

const Main = () => {
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    setToDoList(toDoList);
  }, [toDoList]);

  const handleAddToDo = (newTask) => {
    setToDoList([
      ...toDoList,
      {
        index: `${newTask[0]}${toDoList.length}`,
        description: newTask,
        done: false
      }
    ]);
  };

  const handleTaskStatus = (index) => {
    toDoList[index].done = !toDoList[index].done;
    setToDoList(toDoList);
  };

  return (
    <MainContainer>
      <TaskList toDoList={toDoList} handleTaskStatus={handleTaskStatus} />
      <NewTask handleAddToDo={handleAddToDo} />
    </MainContainer>
  );
};

export default Main;
