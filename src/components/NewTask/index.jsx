import React, { useContext } from "react";

//import components
import Input from "../Input";

//import context
import GlobalContext from "../../context/globalContext";

const NewTask = () => {
  //destructuring globalcontext
  const { settings, taskList, addNewTask, runningTask } = useContext(
    GlobalContext
  );
  const { task, rest } = settings;

  const handleAddTask = (newTask) => {
    if (runningTask) return;
    addNewTask({
      index: `${newTask[0]}${taskList.length}`,
      description: newTask,
      task: true,
      taskDone: false,
      rest: false,
      restDone: false,
      play: false,
      finished: false,
      taskTime: task.time, //s
      restTime: rest.time, //s
      counter: 0
    });
  };

  return (
    <>
      <Input handleAddTask={handleAddTask} />
    </>
  );
};

export default NewTask;
