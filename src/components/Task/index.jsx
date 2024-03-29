import React, { useState, useEffect, useContext } from "react";

//import icons
import {
  MdPauseCircleOutline,
  MdCheck,
  MdPlayCircleOutline
} from "react-icons/md";

//import styled components
import { TaskContainer } from "../styles";

//import context
import GlobalContext from "../../context/globalContext";

const Task = (props) => {
  //destructuring globalState
  const {
    // settingsButton,
    // handleComponentState,
    runningTask,
    handleRunningTask,
    updateTaskDoneStatus,
    updateRestDoneStatus,
    updateRestStatus,
    updateFinishedTaskStatus
  } = useContext(GlobalContext);

  const { index, task, rest, taskDone, restDone, finished } = props.data;

  const [currentTime, setCurrentTime] = useState(0);
  const [counter, setCounter] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [taskTimeWidth, setTaskTimeWidth] = useState(0);
  const [restTimeWidth, setRestTimeWidth] = useState(0);

  //task State
  const [play, setPlay] = useState();
  const [taskTime, setTaskTime] = useState();
  const [restTime, setRestTime] = useState();

  const textDecoration = taskDone ? "line-through" : "none";

  //first useEffect
  useEffect(() => {
    const { play, taskTime, restTime } = props.data;
    setTaskTime(taskTime * 60);
    setRestTime(restTime * 60);
    setPlay(play);
    if (finished) {
      setRestTimeWidth(100);
      setTaskTimeWidth(100);
    }
  }, [props.data, finished]);

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
    // if (finished) {
    //   setRestTimeWidth(100);
    //   setTaskTimeWidth(100);
    // }
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
    updateTaskDoneStatus(index);
  };

  const handleStartRest = () => {
    updateRestStatus(index);
  };

  const handleRestStatus = () => {
    updateRestDoneStatus(index);
  };

  const handlePlayTimer = (action) => {
    if (runningTask.running && action === "play") return;
    setPlay(!play);
    //handle running task
    handleRunningTask({
      taskId: !play ? index : "",
      running: !play
    });
    // handleComponentState(settingsButton);
  };

  const handleFinishedTask = () => {
    updateFinishedTaskStatus(index);
    handleRunningTask({
      taskId: "",
      running: false
    });
  };

  return (
    <li>
      <TaskContainer
        done={textDecoration}
        taskTimeWidth={taskTimeWidth}
        restTimeWidth={restTimeWidth}
      >
        <p>{props.data.description}</p>
        <p>{`${
          Math.floor(counter / 60) < 10
            ? "0" + Math.floor(counter / 60)
            : Math.floor(counter / 60)
        } : ${counter % 60 < 10 ? "0" + (counter % 60) : counter % 60}`}</p>
        <div>
          {play && !finished && (
            <div onClick={() => handlePlayTimer("pause")}>
              <MdPauseCircleOutline />
            </div>
          )}
          {!play && !finished && (
            <div onClick={() => handlePlayTimer("play")}>
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
