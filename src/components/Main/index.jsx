import React, { useState } from "react";

//import components
import TaskList from "../TaskList";
import NewTask from "../NewTask";

//import styled componets
import { MainContainer } from "../styles";

const Main = () => {
  const [toDoList, setToDoList] = useState([]);

  const handleAddToDo = (newTask) => {
    console.log(newTask);
    setToDoList([
      ...toDoList,
      { index: `${newTask[0]}${toDoList.length}`, description: newTask }
    ]);
  };

  return (
    <MainContainer>
      <TaskList toDoList={toDoList} />
      <NewTask handleAddToDo={handleAddToDo} />
    </MainContainer>
  );
};

export default Main;
