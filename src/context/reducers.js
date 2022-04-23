//settings constants
export const UPDATE_SETTINGS = "UPDATE_SETTINGS";
//todolist constants
export const ADD_NEWTASK = "ADD_NEWTASK";
//task status
export const UPDATE_PLAYTASK_STATUS = "UPDATE_PLAYTASK_STATUS";
export const UPDATE_FINISHEDTASK_STATUS = "UPDATE_FINISHEDTASK_STATUS";
export const UPDATE_REST_STATUS = "UPDATE_REST_STATUS";
export const UPDATE_TASKDONE_STATUS = "UPDATE_TASKDONE_STATUS";
export const UPDATE_RESTDONE_STATUS = "UPDATE_RESTDONE_STATUS";

const updateSettings = (newSettings, state) => {
  return { ...state, settings: newSettings };
};

const addNewTask = (newTask, state) => {
  return { ...state, taskList: [...state.taskList, newTask] };
};

const updateRestStatus = (task, state) => {
  const updatedTaskIndex = state.taskList.findIndex(
    (toUpdateTask) => toUpdateTask.index === task
  );
  state.taskList[updatedTaskIndex].rest = true;
  return { ...state };
};

const updateTaskDoneStatus = (task, state) => {
  const updatedTaskIndex = state.taskList.findIndex(
    (toUpdateTask) => toUpdateTask.index === task
  );
  state.taskList[updatedTaskIndex].taskDone = true;
  return { ...state };
};

const updateRestDoneStatus = (task, state) => {
  const updatedTaskIndex = state.taskList.findIndex(
    (toUpdateTask) => toUpdateTask.index === task
  );
  state.taskList[updatedTaskIndex].restDone = true;
  return { ...state };
};

const updateFinishedTaskStatus = (task, state) => {
  const updatedTaskIndex = state.taskList.findIndex(
    (toUpdateTask) => toUpdateTask.index === task
  );
  state.taskList[updatedTaskIndex].finished = true;
  return { ...state };
};

export const reducers = (state, action) => {
  switch (action.type) {
    case UPDATE_SETTINGS:
      return updateSettings(action.newSettings, state);
    case ADD_NEWTASK:
      return addNewTask(action.newTask, state);
    case UPDATE_REST_STATUS:
      return updateRestStatus(action.task, state);
    case UPDATE_TASKDONE_STATUS:
      return updateTaskDoneStatus(action.task, state);
    case UPDATE_RESTDONE_STATUS:
      return updateRestDoneStatus(action.task, state);
    case UPDATE_FINISHEDTASK_STATUS:
      return updateFinishedTaskStatus(action.task, state);
    default:
      return state;
  }
};
