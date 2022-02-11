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
    const timer = setTimeout(() => handleCounter(index), 1000);
    return () => clearTimeout(timer);
  });

  //hanlde current time and pause Timer
  useEffect(() => {
    if (rest) {
      setCurrentTime(restTime);
    }
    if (task) {
      setCurrentTime(taskTime);
    }
    if (task && taskDone) {
      setCurrentTime(restTime);
    }
    if (taskDone && restDone) {
      props.handlePauseTimer(index);
    } else {
      setCounter(currentTime);
    }
  }, [
    task,
    rest,
    taskDone,
    restDone,
    restTime,
    currentTime,
    taskTime,
    props,
    index
  ]);

  useEffect(() => {
    if (task && !taskDone) {
      setTaskTimeWidth(timeLeft);
    }
    if (rest && !restDone) {
      setRestTimeWidth(timeLeft);
    }
  }, [timeLeft, taskDone, restDone, finished, rest, task]);

  useEffect(() => {
    const calcTimeLeft = (100 / currentTime) * (currentTime - counter);
    setTimeLeft(calcTimeLeft);
  }, [counter, currentTime]);

  const handleCounter = (taskIndex) => {
    console.log(`task index: ${taskIndex}`);
    if (taskDone && restDone) {
      props.handleFinishedTask(taskIndex);
      setRestTimeWidth(100);
      setTaskTimeWidth(100);
      return;
    }
    if (counter < 1) {
      if (task && !taskDone) {
        props.handleTaskStatus(taskIndex);
        props.handleStartRest(taskIndex);
        setTimeLeft(restTime);
      }
      if (rest && !restDone) {
        props.handleRestStatus(taskIndex);
      }
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
          {/*` ${JSON.stringify(props.data)}`*/}
          {` ->Index: ${index} 
               currentTime: ${currentTime} 
               counter: ${counter}
               play: ${play}
          `}
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
