import { React, useState, useEffect, useContext } from "react";

//import styled-component
import { MenuOptionContainer } from "../styles.js";

import MenuOptionsTimer from "../MenuOptionsTimer";

//import Context
// import { AppContextConsumer } from "../../context/AppContext";
import { SettingsContext } from "../../context/SettingsContext";

const MenuOptions = (props) => {
  //destructuring context
  // const { task, rest } = useContext(SettingsContext);
  const { store, actions } = useContext(SettingsContext);
  const { task, rest } = store;

  const [taskState, setTaskState] = useState();
  const [restState, setRestState] = useState();
  const [timerOptions, setTimerOptions] = useState([]);

  useEffect(() => {
    setTaskState(task);
    setRestState(rest);
    setTimerOptions([
      {
        name: "Task",
        times: task
      },
      {
        name: "Rest",
        times: rest
      }
    ]);
  }, [task, rest]);

  const handleToggleMenuOpen = (event) => {
    event.preventDefault();
    props.handleMenuOpen();
  };

  const handleSettings = () => {
    // actions.updateSettings({
    //   task: taskState,
    //   rest: restState
    // });
    console.log(JSON.stringify(taskState));
    console.log(JSON.stringify(restState));
  };

  return (
    <MenuOptionContainer open={props.open}>
      {timerOptions.map((option, index) => {
        return <MenuOptionsTimer key={index} data={option} />;
      })}
      <button
        onClick={(event) => {
          handleToggleMenuOpen(event);
          handleSettings();
        }}
      >
        OK
      </button>
    </MenuOptionContainer>
  );
};

export default MenuOptions;
