//settings constants
export const UPDATE_SETTINGS = "UPDATE_SETTINGS";
//todolist constants
export const ADD_NEWTASK = "ADD_NEWTASK";

const updateSettings = (newSettings, state) => {
  return { ...state, settings: newSettings };
};

const addNewTask = (newTask, state) => {
  return { ...state, taskList: [...state.taskList, newTask] };
};

export const reducers = (state, action) => {
  switch (action.type) {
    case UPDATE_SETTINGS:
      return updateSettings(action.newSettings, state);
    case ADD_NEWTASK:
      return addNewTask(action.newTask, state);
    default:
      return state;
  }
};
