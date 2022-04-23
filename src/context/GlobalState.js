import { useReducer } from "react";

// export const GlobalContext = createContext(null);
import GlobalContext from "./globalContext";
import { reducers } from "./reducers";
//reducers constants
import {
  UPDATE_SETTINGS,
  ADD_NEWTASK,
  UPDATE_TASKDONE_STATUS,
  UPDATE_RESTDONE_STATUS,
  UPDATE_REST_STATUS,
  UPDATE_FINISHEDTASK_STATUS
} from "./reducers";

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

  const updateRestStatus = (task) => {
    taskListDispatch({ type: UPDATE_REST_STATUS, task });
  };

  const updateTaskDoneStatus = (task) => {
    taskListDispatch({ type: UPDATE_TASKDONE_STATUS, task });
  };

  const updateRestDoneStatus = (task) => {
    taskListDispatch({ type: UPDATE_RESTDONE_STATUS, task });
  };

  const updateFinishedTaskStatus = (task) => {
    taskListDispatch({ type: UPDATE_FINISHEDTASK_STATUS, task });
  };

  return (
    <GlobalContext.Provider
      value={{
        settings: settingsState.settings,
        taskList: taskListState.taskList,
        updateSettings,
        addNewTask,
        updateTaskDoneStatus,
        updateRestDoneStatus,
        updateRestStatus,
        updateFinishedTaskStatus
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
