import React, { useState, useEffect } from "react";

//import icons
import {
  MdPauseCircleOutline,
  MdCheck,
  MdPlayCircleOutline
} from "react-icons/md";

//import styled components
import { TaskContainer } from "../styles";

const Task = (props) => {
  const [initialTime, setInitalTime] = useState(60);
  const [counter, setCounter] = useState(0);

  const { play } = props;

  const textDecoration = props.data.done ? "line-through" : "none";
  const timeLeft = (100 / initialTime) * (initialTime - counter);

  useEffect(() => {
    setCounter(initialTime);
  }, [initialTime]);

  useEffect(() => {
    const timer = setTimeout(() => handleCounter(), 100);
    return () => clearTimeout(timer);
  });

  const handleCounter = () => {
    if (counter < 1) {
      return;
    }
    if (play) {
      setCounter(counter - 1);
    }
  };

  return (
    <li key={props.data.index}>
      <TaskContainer done={textDecoration} timeLeft={timeLeft}>
        <p>{props.data.description}</p>
        <div>
          <p>Contador: {timeLeft}</p>
          <div onClick={() => props.handlePlayTask(props.index)}>
            <MdPlayCircleOutline />
          </div>
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
