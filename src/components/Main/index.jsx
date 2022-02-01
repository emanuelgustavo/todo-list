import React, { useEffect, useState } from "react";
//import context
import { AppContext } from "../../context/AppContext";

//import components
import TaskList from "../TaskList";
import NewTask from "../NewTask";
import Timer from "../Timer";

//import styled componets
import { MainContainer } from "../styles";

const Main = () => {
  //list of tasks
  const [taskList, setTaskList] = useState([]);
  //list of tasks sequence to auto play
  const [taskListSequence, setTaskListSequence] = useState([]);
  //test
  const [test, setTest] = useState("");

  useEffect(() => {
    if (taskList > 0) {
      handleTaskSequence(taskList[taskList.length]);
    }
  }, [taskList]);

  const handleAddTask = (newTask) => {
    setTaskList([
      ...taskList,
      {
        index: `${newTask[0]}${taskList.length}`,
        description: newTask,
        task: true,
        taskDone: false,
        rest: false,
        restDone: false,
        play: false,
        finished: false,
        taskTime: 10,
        restTime: 10
      }
    ]);
  };

  const handleTaskSequence = (task) => {
    setTaskListSequence([
      ...taskListSequence,
      {
        nextTask: task.index
      }
    ]);
  };

  return (
    <AppContext.Provider value={test}>
      <MainContainer>
        <Timer />
        <NewTask handleAddTask={handleAddTask} />
        <TaskList taskList={taskList} />
      </MainContainer>
    </AppContext.Provider>
  );
};

export default Main;
