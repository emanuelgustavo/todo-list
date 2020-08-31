import React from "react";

//import icons
import { MdPauseCircleOutline, MdCheck } from "react-icons/md";

//import styled components
import { TaskContainer } from "../styles";

const Task = (props) => {
  const textDecoration = props.data.done ? "line-through" : "none";

  return (
    <li key={props.data.index}>
      <TaskContainer done={textDecoration} timeLeft={75}>
        <p>{props.data.description}</p>
        <div>
          <div onClick={() => console.log("Paused")}>
            <MdPauseCircleOutline />
          </div>
          <div onClick={() => props.handleTaskStatus(props.index)}>
            <MdCheck />
          </div>
        </div>
      </TaskContainer>
    </li>
  );
};

export default Task;
