import { useReducer } from "react";

// export const GlobalContext = createContext(null);
import GlobalContext from "./globalContext";
import { reducers, UPDATE_SETTINGS, ADD_NEWTASK } from "./reducers";

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
    settingsDispatch({ type: UPDATE_SETTINGS, newSettings: newSettings });
  };

  const addNewTask = (newTask) => {
    taskListDispatch({ type: ADD_NEWTASK, newTask: newTask });
  };

  return (
    <GlobalContext.Provider
      value={{
        settings: settingsState.settings,
        updateSettings: updateSettings,
        taskList: taskListState.taskList,
        addNewTask: addNewTask
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
