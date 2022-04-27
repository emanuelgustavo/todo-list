import React from "react";

export default React.createContext({
  settings: {},
  taskList: [],
  updateSettings: (newSettings) => {},
  addNewTask: (newTask) => {},
  updateRestStatus: (task) => {},
  updateTaskDoneStatus: (task) => {},
  updateRestDoneStatus: (task) => {},
  updateFinishedTaskStatus: (task) => {}
});
