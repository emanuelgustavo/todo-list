import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export const GlobalContextProvider = (props) => {
  const [store, setStore] = useState({
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
  });

  const [actions, setActions] = useState({
    updateSettings: (settings) => setStore(settings)
  });

  return (
    <GlobalContext.Provider value={{ store, actions }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
