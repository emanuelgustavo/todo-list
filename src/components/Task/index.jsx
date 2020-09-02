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
  const [taskTime, setTaskTime] = useState(60);
  const [restTime, setRestTime] = useState(10);
  const [currentTime, setCurrentTime] = useState(0);
  const [counter, setCounter] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  const { play, done, rest } = props.data;

  const textDecoration = props.data.done ? "line-through" : "none";

  useEffect(() => {
    if (rest) {
      setCurrentTime(restTime);
    } else {
      setCurrentTime(taskTime);
    }
    setCounter(currentTime);
  }, [rest, restTime, currentTime, taskTime]);

  useEffect(() => {
    const timer = setTimeout(() => handleCounter(), 100);
    return () => clearTimeout(timer);
  });

  const handleCounter = () => {
    if (counter < 1 && !done) {
      props.handleTaskStatus(props.index);
      props.handleTaskRest(props.index);
      return;
    }
    if (play && !done) {
      setCounter(counter - 1);
    }
    setTimeLeft((100 / currentTime) * (currentTime - counter));
  };

  return (
    <li key={props.data.index}>
      <TaskContainer done={textDecoration} timeLeft={timeLeft}>
        <p>{props.data.description}</p>
        <div>
          <div onClick={() => props.handlePlayTask(props.index)}>
            <MdPlayCircleOutline />
          </div>
          <div onClick={() => props.handlePauseTask(props.index)}>
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
