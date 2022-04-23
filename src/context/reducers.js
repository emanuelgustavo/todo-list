//settings constants
export const UPDATE_SETTINGS = "UPDATE_SETTINGS";
//todolist constants
export const ADD_NEWTASK = "ADD_NEWTASK";
//task status
export const UPDATE_TASK_STATUS = "UPDATE_TASK_STATUS";

const updateSettings = (newSettings, state) => {
  return { ...state, settings: newSettings };
};

const addNewTask = (newTask, state) => {
  return { ...state, taskList: [...state.taskList, newTask] };
};

const updateTaskStatus = (task, state) => {
  const { taskList } = state;
  const taskToUpdate = taskList.find((task) => {
    console.log(`task = ${task}`);
    //task.index === task;
  });
  console.log(`taskToUpdate = ${taskToUpdate}`);
  //taskToUpdate.taskDone = true;
  //taskList[taskIndex] = taskToUpdate;
  //console.log(taskList);
  return { ...state };
};

export const reducers = (state, action) => {
  switch (action.type) {
    case UPDATE_SETTINGS:
      return updateSettings(action.newSettings, state);
    case ADD_NEWTASK:
      return addNewTask(action.newTask, state);
    case UPDATE_TASK_STATUS:
      return updateTaskStatus(action.task, state);
    default:
      return state;
  }
};
