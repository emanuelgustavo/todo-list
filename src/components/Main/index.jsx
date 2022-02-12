import React, { useState } from "react";
//import context
import { AppContextProvider } from "../../context/AppContext";

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
  // const [taskListSequence, setTaskListSequence] = useState([]);

  // useEffect(() => {
  //   if (taskList > 0) {
  //     handleTaskSequence(taskList[taskList.length]);
  //   }
  // }, [taskList]);

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
        taskTime: 20, //s
        restTime: 5, //s
        counter: 0
      }
    ]);
  };

  // const handleTaskSequence = (task) => {
  //   setTaskListSequence([
  //     ...taskListSequence,
  //     {
  //       nextTask: task.index
  //     }
  //   ]);
  // };

  return (
    <AppContextProvider>
      <MainContainer>
        <Timer />
        <NewTask handleAddTask={handleAddTask} />
        <TaskList taskList={taskList} />
      </MainContainer>
    </AppContextProvider>
  );
};

export default Main;
