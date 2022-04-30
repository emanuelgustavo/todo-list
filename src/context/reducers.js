//components state
export const HANDLE_DISABLE_PROPERTY = "HANDLE_DISABLE_PROPERTY";
//settings constants
export const UPDATE_SETTINGS = "UPDATE_SETTINGS";
//todolist constants
export const ADD_NEWTASK = "ADD_NEWTASK";
//runninf task state
export const RUNNING_TASK = "RUNNING_TASK";
//task status
export const UPDATE_PLAYTASK_STATUS = "UPDATE_PLAYTASK_STATUS";
export const UPDATE_FINISHEDTASK_STATUS = "UPDATE_FINISHEDTASK_STATUS";
export const UPDATE_REST_STATUS = "UPDATE_REST_STATUS";
export const UPDATE_TASKDONE_STATUS = "UPDATE_TASKDONE_STATUS";
export const UPDATE_RESTDONE_STATUS = "UPDATE_RESTDONE_STATUS";

const handleDisableProperty = (componentsState, state) => {
  console.log(componentsState);
  return { ...state };
};

const updateSettings = (newSettings, state) => {
  return { ...state, settings: newSettings };
};

const addNewTask = (newTask, state) => {
  return { ...state, taskList: [...state.taskList, newTask] };
};

const handleRunningTask = (runningTask, state) => {
  return { ...state, runningTask: state.runningTask };
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
    case HANDLE_DISABLE_PROPERTY:
      return handleDisableProperty(action.componentsState, state);
    case UPDATE_SETTINGS:
      return updateSettings(action.newSettings, state);
    case RUNNING_TASK:
      return handleRunningTask(action.runningTask, state);
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
