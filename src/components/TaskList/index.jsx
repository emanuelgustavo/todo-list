import React, { useContext } from "react";

//import styled component
import { TaskListContainer } from "../styles.js";

//import components
import Task from "../Task";

//import context
import GlobalContext from "../../context/globalContext";

const TaskList = () => {
  //destructuring globalcontext
  const { taskList, updateTaskStatus, runningTask } = useContext(GlobalContext);
  return (
    <>
      <TaskListContainer>
        {taskList.map((task, index) => {
          return (
            <Task updateTaskStatus={updateTaskStatus} key={index} data={task} />
          );
        })}
      </TaskListContainer>
    </>
  );
};

export default TaskList;
