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
  const [taskTime, setTaskTime] = useState(10);
  const [restTime, setRestTime] = useState(10);
  const [currentTime, setCurrentTime] = useState(0);
  const [counter, setCounter] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [taskTimeWidth, setTaskTimeWidth] = useState(0);
  const [restTimeWidth, setRestTimeWidth] = useState(0);

  const { play, finished, task, taskDone, rest, restDone } = props.data;
  const { index } = props;

  const textDecoration = props.data.done ? "line-through" : "none";

  useEffect(() => {
    const timer = setTimeout(() => handleCounter(), 1000);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    if (rest) {
      setCurrentTime(restTime);
      setTimeLeft(0);
    } else {
      setCurrentTime(taskTime);
    }
    setCounter(currentTime);
  }, [rest, restTime, currentTime, taskTime]);

  useEffect(() => {
    if (taskDone) {
      setTaskTimeWidth(100);
      setRestTimeWidth(timeLeft);
    } else {
      setTaskTimeWidth(timeLeft);
    }
  }, [timeLeft, taskDone, finished]);

  useEffect(() => {
    const calcTimeLeft = (100 / currentTime) * (currentTime - counter);
    setTimeLeft(calcTimeLeft);
  }, [counter]);

  const handleCounter = () => {
    if (counter < 1) {
      props.handlePauseTask(index);
      if (task) {
        props.handleTaskStatus(index);
      }
      return;
    }
    if (finished) {
      setRestTimeWidth(100);
      setTaskTimeWidth(100);
    }
    //task timer play
    if (play && task) {
      setCounter(counter - 1);
    }
    //rest timer play
    if (play && rest) {
      setCounter(counter - 1);
    }
  };

  return (
    <li key={props.data.index}>
      <TaskContainer
        done={textDecoration}
        taskTimeWidth={taskTimeWidth}
        restTimeWidth={restTimeWidth}
      >
        <p>{props.data.description}</p>
        <p>timeLeft: {timeLeft}</p>
        <p>cunter: {counter}</p>
        <p>data: {JSON.stringify(props.data)}</p>
        <div>
          {props.data.play ? (
            <div onClick={() => props.handlePauseTask(index)}>
              <MdPauseCircleOutline />
            </div>
          ) : (
            <div onClick={() => props.handlePlayTask(index)}>
              <MdPlayCircleOutline />
            </div>
          )}

          <div onClick={() => props.handleTaskStatus(index)}>
            <MdCheck />
          </div>
        </div>
      </TaskContainer>
    </li>
  );
};

export default Task;
