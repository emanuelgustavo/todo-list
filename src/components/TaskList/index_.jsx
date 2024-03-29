import React, { useEffect, useState } from "react";

//import components
import Task from "../Task";

const TaskList = (props) => {
  const [taskList, setTaskList] = useState([]);
  const [changeCount, setChangeCount] = useState(0);
  const [nextTask, setNextTask] = useState(0);

  useEffect(() => {
    console.log(`TaskList changeCount: ${changeCount}`);
    setTaskList(props.taskList);
    setChangeCount(0);
  }, [props, changeCount]);

  const handleTaskStatus = (index) => {
    const updatedTaskList = taskList;
    updatedTaskList[index].taskDone = true;
    handleNextTask(index);
    setTaskList(updatedTaskList);
    setChangeCount(changeCount + 1);
  };

  const handleStartRest = (index) => {
    const updatedTaskList = taskList;
    updatedTaskList[index].rest = true;
    setTaskList(updatedTaskList);
    setChangeCount(changeCount + 1);
  };

  const handleRestStatus = (index) => {
    const updatedTaskList = taskList;
    updatedTaskList[index].restDone = true;
    setTaskList(updatedTaskList);
    setChangeCount(changeCount + 1);
  };

  const handlePlayTimer = (index) => {
    taskList[index].play = true;
    setChangeCount(changeCount + 1);
  };

  const handlePauseTimer = (index) => {
    taskList[index].play = false;
    setChangeCount(changeCount + 1);
  };

  const handleFinishedTask = (index) => {
    taskList[index].finished = true;
    setChangeCount(changeCount + 1);
  };

  const handleNextTask = (index) => {
    const currentTask = taskList[index];
    const nextTask = currentTask.index + 1;
    setNextTask(nextTask);
  };

  return (
    <ul style={{ listStyleType: "none" }}>
      {taskList.map((task, index) => {
        return (
          <>
            <Task
              key={index}
              data={task}
              index={index}
              handleTaskStatus={handleTaskStatus}
              handlePlayTimer={handlePlayTimer}
              handlePauseTimer={handlePauseTimer}
              handleRestStatus={handleRestStatus}
              handleFinishedTask={handleFinishedTask}
              handleStartRest={handleStartRest}
            />
            <p>{JSON.stringify(taskList)}</p>
          </>
        );
      })}
    </ul>
  );
};

export default TaskList;
