import React from "react";

//import components
import Task from "../Task";

const TaskList = (props) => {
  return (
    <ul style={{ listStyleType: "none" }}>
      {props.taskList.map((task, index) => {
        return (
          <Task
            data={task}
            index={index}
            handleTaskStatus={props.handleTaskStatus}
            handlePlayTask={props.handlePlayTask}
          />
        );
      })}
    </ul>
  );
};

export default TaskList;
