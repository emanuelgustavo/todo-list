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
    //console.log(JSON.stringify(props.data));
    if (rest) {
      setCurrentTime(restTime);
      //setTimeLeft(restTime);
      //console.log(`currentTime: ${currentTime}`);
    }
    if (task) {
      setCurrentTime(taskTime);
      //setTimeLeft(taskTime);
    }
    if (task && taskDone) {
      setCurrentTime(restTime);
    }
    if (taskDone && restDone) {
      props.handlePauseTimer(index);
      //console.log(`taskDone, restDone`);
    } else {
      setCounter(currentTime);
    }
  }, [task, rest, taskDone, restTime, currentTime, taskTime, props]);

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

  const handleCounter = () => {
    console.log(`counter: ${counter}, play: ${play}`);
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
