import React from "react";

//import components
import Task from "../Task";

const TaskList = (props) => {
  return (
    <ul style={{ listStyleType: "none" }}>
      {props.toDoList.map((task) => {
        return <Task data={task} />;
      })}
    </ul>
  );
};

export default TaskList;
