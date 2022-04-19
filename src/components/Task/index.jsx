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
  //const { index } = props;

  const [currentTime, setCurrentTime] = useState(0);
  const [counter, setCounter] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [taskTimeWidth, setTaskTimeWidth] = useState(0);
  const [restTimeWidth, setRestTimeWidth] = useState(0);
  //state imported from taskList component

  //task State
  const [play, setPlay] = useState();
  const [finished, setFinished] = useState();
  const [task, setTask] = useState();
  const [taskDone, setTaskDone] = useState();
  const [rest, setRest] = useState();
  const [restDone, setRestDone] = useState();
  const [taskTime, setTaskTime] = useState();
  const [restTime, setRestTime] = useState();

  const textDecoration = taskDone ? "line-through" : "none";

  //first useEffect
  useEffect(() => {
    const {
      play,
      finished,
      task,
      taskDone,
      rest,
      restDone,
      taskTime,
      restTime
    } = props.data;
    setPlay(play);
    setFinished(finished);
    setTask(task);
    setTaskDone(taskDone);
    setRest(rest);
    setRestDone(restDone);
    setTaskTime(taskTime);
    setRestTime(restTime);
  }, [props.data]);

  //handle timer
  useEffect(() => {
    const timer = setTimeout(() => handleCounter(), 1000);
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
    setCounter(currentTime);
  }, [task, rest, taskDone, restDone, restTime, currentTime, taskTime]);

  useEffect(() => {
    const calcTimeLeft = (100 / currentTime) * (currentTime - counter);
    setTimeLeft(calcTimeLeft);
  }, [counter, currentTime]);

  const handleCounter = () => {
    if (finished) {
      setRestTimeWidth(100);
      setTaskTimeWidth(100);
    }
    if (!play) return;
    if (task && !taskDone) {
      setTaskTimeWidth(timeLeft);
    }
    if (rest && !restDone) {
      setRestTimeWidth(timeLeft);
    }
    if (taskDone && restDone) {
      handleFinishedTask();
      handlePlayTimer();
      return;
    }
    if (counter < 1) {
      if (task && !taskDone) {
        handleTaskStatus();
        handleStartRest();
        setTimeLeft(restTime);
      }
      if (rest && !restDone) {
        handleRestStatus();
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

  //functions imported from taskList component
  const handleTaskStatus = () => {
    setTaskDone(true);
  };

  const handleStartRest = () => {
    setRest(true);
  };

  const handleRestStatus = () => {
    setRestDone(true);
  };

  const handlePlayTimer = () => {
    setPlay(!play);
  };

  const handleFinishedTask = () => {
    setFinished(true);
  };

  return (
    <li>
      <TaskContainer
        done={textDecoration}
        taskTimeWidth={taskTimeWidth}
        restTimeWidth={restTimeWidth}
      >
        <p>{props.data.description}</p>
        {`taskTime: ${props.data.taskTime} / restTime: ${props.data.restTime}`}
        <div>
          {play ? (
            <div onClick={() => handlePlayTimer()}>
              <MdPauseCircleOutline />
            </div>
          ) : (
            <div onClick={() => handlePlayTimer()}>
              <MdPlayCircleOutline />
            </div>
          )}
          <div onClick={() => handleTaskStatus()}>
            <MdCheck />
          </div>
        </div>
      </TaskContainer>
    </li>
  );
};

export default Task;
