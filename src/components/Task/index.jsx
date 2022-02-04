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
  const [currentTime, setCurrentTime] = useState(0);
  const [counter, setCounter] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [taskTimeWidth, setTaskTimeWidth] = useState(0);
  const [restTimeWidth, setRestTimeWidth] = useState(0);

  const {
    play,
    finished,
    task,
    taskDone,
    rest,
    restDone,
    taskTime,
    restTime,
    done
  } = props.data;
  const { index } = props;

  const textDecoration = done ? "line-through" : "none";

  //handle timer
  useEffect(() => {
    const timer = setTimeout(() => handleCounter(), 1000);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    if (rest) {
      setCurrentTime(restTime);
      setTimeLeft(restTime);
    } else {
      setCurrentTime(taskTime);
    }
    setCounter(currentTime);
  }, [rest, restTime, currentTime, taskTime]);

  useEffect(() => {
    // if (taskDone && !rest) {
    //   setTaskTimeWidth(100);
    //   setRestTimeWidth(timeLeft);
    // }
    if (!taskDone) {
      setTaskTimeWidth(timeLeft);
    }
  }, [timeLeft, taskDone, finished, rest, task]);

  useEffect(() => {
    const calcTimeLeft = (100 / currentTime) * (currentTime - counter);
    setTimeLeft(calcTimeLeft);
  }, [counter, currentTime]);

  const handleCounter = () => {
    if (taskDone && restDone) {
      props.handleFinishedTask(index);
      setRestTimeWidth(100);
      setTaskTimeWidth(100);
      return;
    }
    if (counter < 1) {
      if (task && !taskDone) {
        props.handleTaskStatus(index);
        props.handleStartRest(index);
        setTimeLeft(restTime);
      }
      if (rest && !restDone) {
        props.handleRestStatus(index);
      }
      props.handlePauseTimer(index);
      return;
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
        <p>
          {props.data.description}
          {` counter -> ${counter}`}
          {` timeLeft: ${timeLeft}`}
        </p>
        <div>
          {props.data.play ? (
            <div onClick={() => props.handlePauseTimer(index)}>
              <MdPauseCircleOutline />
            </div>
          ) : (
            <div onClick={() => props.handlePlayTimer(index)}>
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
