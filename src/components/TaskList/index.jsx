import React, { useContext } from "react";

//import components
import Task from "../Task";

//import context
import GlobalContext from "../../context/globalContext";

const TaskList = () => {
  //destructuring globalcontext
  const { taskList } = useContext(GlobalContext);
  return (
    <ul style={{ listStyleType: "none" }}>
      {taskList.map((task, index) => {
        return <Task key={index} data={task} />;
      })}
    </ul>
  );
};

export default TaskList;
