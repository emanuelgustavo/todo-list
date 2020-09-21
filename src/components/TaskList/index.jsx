import React, { useEffect, useState } from "react";

//import components
import Task from "../Task";

const TaskList = (props) => {
  const [taskList, setTaskList] = useState([]);
  const [changeCount, setChangeCount] = useState(0);

  useEffect(() => {
    setTaskList(props.taskList);
    console.log("useEffect");
  }, [props]);

  const handleTaskStatus = (index) => {
    const updatedTaskList = taskList;
    updatedTaskList[index].doneTask = true; //!updatedTaskList[index].doneTask;
    setTaskList(updatedTaskList);
    setChangeCount(changeCount + 1);
  };

  const handleTaskRest = (index) => {
    const updatedTaskList = taskList;
    updatedTaskList[index].rest = !updatedTaskList[index].rest;
    setTaskList(updatedTaskList);
    setChangeCount(changeCount + 1);
  };

  const handlePlayTask = (index) => {
    taskList[index].play = true;
    setChangeCount(changeCount + 1);
  };

  const handlePauseTask = (index) => {
    taskList[index].play = false;
    setChangeCount(changeCount + 1);
  };

  const handleFinishedTask = (index) => {
    taskList[index].finished = true;
    setChangeCount(changeCount + 1);
  };

  return (
    <ul style={{ listStyleType: "none" }}>
      {taskList.map((task, index) => {
        return (
          <Task
            data={task}
            index={index}
            handleTaskStatus={handleTaskStatus}
            handlePlayTask={handlePlayTask}
            handlePauseTask={handlePauseTask}
            handleTaskRest={handleTaskRest}
            handleFinishedTask={handleFinishedTask}
          />
        );
      })}
    </ul>
  );
};

export default TaskList;
