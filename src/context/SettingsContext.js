import { createContext, useState } from "react";

export const SettingsContext = createContext(null);

export const SettingsContextProvider = (props) => {
  const [store, setStore] = useState({
    timer: 0,
    task: {
      minTime: 10,
      maxTime: 100,
      time: 10
    },
    rest: {
      minTime: 10,
      maxTime: 100,
      time: 10
    }
  });

  const [actions, setActions] = useState({
    updateSettings: (settings) => setStore(settings)
  });

  return (
    <SettingsContext.Provider value={{ store, actions }}>
      {props.children}
    </SettingsContext.Provider>
  );
};
