import { React, useState, useContext } from "react";

//import styled-component
import { MenuOptionContainer, MenuOptionTimerContainer } from "../styles.js";

//import Context
import { GlobalContext } from "../../context/GlobalContext";

const MenuOptions = (props) => {
  //destructuring context
  const { store, actions } = useContext(GlobalContext);
  const { task, rest } = store.settings;

  const rangeTime = {
    task: {
      min: 10,
      max: 50
    },
    rest: {
      min: 2,
      max: 10
    }
  };

  const [taskState, setTaskState] = useState(task);
  const [restState, setRestState] = useState(rest);

  const handleToggleMenuOpen = (event) => {
    event.preventDefault();
    props.handleMenuOpen();
  };

  const handleSettings = () => {
    actions.updateSettings({
      timer: 0,
      task: taskState,
      rest: restState
    });
  };

  const handleTime = (event, name) => {
    if (name === "Task")
      setTaskState({ ...taskState, time: +event.target.value });
    if (name === "Rest")
      setRestState({ ...restState, time: +event.target.value });
  };

  return (
    <MenuOptionContainer open={props.open}>
      <MenuOptionTimerContainer>
        <form>
          <label htmlFor={"Task"}>
            <p>{"Task"}</p>
            <div>
              <input
                type="text"
                value={taskState.time}
                onChange={(event) => handleTime(event, "Task")}
              />
              <p>min</p>
            </div>
          </label>
          <input
            type="range"
            id={"Task"}
            name={"Task"}
            min={rangeTime.task.min}
            max={rangeTime.task.max}
            value={taskState.time}
            onChange={(event) => handleTime(event, "Task")}
          />
        </form>
        <div>
          <p>{task.minTime || 5}</p>
          <p>{task.maxTime || 50}</p>
        </div>
      </MenuOptionTimerContainer>
      <MenuOptionTimerContainer>
        <form>
          <label htmlFor={"Rest"}>
            <p>{"Rest"}</p>
            <div>
              <input
                type="text"
                value={restState.time || 5}
                onChange={(event) => handleTime(event, "Rest")}
              />
              <p>min</p>
            </div>
          </label>
          <input
            type="range"
            id={"Rest"}
            name={"Rest"}
            min={rest.minTime || 2}
            max={rest.maxTime || 15}
            value={restState.time || 5}
            onChange={(event) => handleTime(event, "Rest")}
          />
        </form>
        <div>
          <p>{rest.minTime || 2}</p>
          <p>{rest.maxTime || 15}</p>
        </div>
      </MenuOptionTimerContainer>
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
