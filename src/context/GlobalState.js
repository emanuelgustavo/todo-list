import { useReducer } from "react";

// export const GlobalContext = createContext(null);
import GlobalContext from "./globalContext";
import { reducers } from "./reducers";
//reducers constants
import { UPDATE_SETTINGS, ADD_NEWTASK, UPDATE_TASK_STATUS } from "./reducers";

export const GlobalStateProvider = (props) => {
  //Global state to settings with initial settings state
  const [settingsState, settingsDispatch] = useReducer(reducers, {
    settings: {
      timer: 0,
      task: {
        minTime: 5,
        maxTime: 10,
        time: 5
      },
      rest: {
        minTime: 2,
        maxTime: 5,
        time: 2
      }
    }
  });
  //Global todolist with initial settings state
  const [taskListState, taskListDispatch] = useReducer(reducers, {
    taskList: []
  });

  const updateSettings = (newSettings) => {
    settingsDispatch({ type: UPDATE_SETTINGS, newSettings });
  };

  const addNewTask = (newTask) => {
    taskListDispatch({ type: ADD_NEWTASK, newTask });
  };

  const updateTaskStatus = (task) => {
    taskListDispatch({ type: UPDATE_TASK_STATUS, task });
  };

  return (
    <GlobalContext.Provider
      value={{
        settings: settingsState.settings,
        taskList: taskListState.taskList,
        updateSettings,
        addNewTask,
        updateTaskStatus
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
