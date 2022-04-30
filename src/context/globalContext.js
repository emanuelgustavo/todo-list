import React from "react";

export default React.createContext({
  componentsState: {},
  settings: {},
  taskList: [],
  runningTask: false,
  handleComponentState: (component) => {},
  handleRunningTask: (runningTask) => {},
  updateSettings: (newSettings) => {},
  addNewTask: (newTask) => {},
  updateRestStatus: (task) => {},
  updateTaskDoneStatus: (task) => {},
  updateRestDoneStatus: (task) => {},
  updateFinishedTaskStatus: (task) => {}
});
