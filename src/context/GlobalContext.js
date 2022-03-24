import { createContext, useState, useReducer } from "react";

export const GlobalContext = createContext(null);

export const GlobalContextProvider = (props) => {
  const [store, setStore] = useState({
    settings: {
      timer: 0,
      task: {
        minTime: 10,
        maxTime: 50,
        time: 20
      },
      rest: {
        minTime: 2,
        maxTime: 15,
        time: 5
      }
    },
    taskList: []
  });

  const [actions, setActions] = useState({
    updateSettings: (newSettings) => {
      const updatedStore = { ...store, settings: newSettings };
      console.log(updatedStore);
      setStore(updatedStore);
      console.log(store);
    },
    addNewTask: (newTask) => {
      console.log(store);
      const updatedTaskList = store.taskList;
      updatedTaskList.push({
        index: `${newTask[0]}${store.taskList.length}`,
        description: newTask,
        task: true,
        taskDone: false,
        rest: false,
        restDone: false,
        play: false,
        finished: false,
        taskTime: store.settings.task.time, //s
        restTime: store.settings.rest.time, //s
        counter: 0
      });
      setStore({ ...store, taskList: updatedTaskList });
    }
  });

  return (
    <GlobalContext.Provider value={{ store, actions }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
