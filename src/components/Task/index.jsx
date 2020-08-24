import React from "react";

//import icons
import { MdPauseCircleOutline, MdCheck } from "react-icons/md";

//import styled components
import { TaskContainer } from "../styles";

const Task = (props) => {
  return (
    <li key={props.data.index}>
      <TaskContainer>
        <p>{props.data.description}</p>
        <div>
          <div onClick={() => console.log("Paused")}>
            <MdPauseCircleOutline />
          </div>
          <div onClick={() => console.log("Done")}>
            <MdCheck />
          </div>
        </div>
      </TaskContainer>
    </li>
  );
};

export default Task;
