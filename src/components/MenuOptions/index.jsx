import { React, useState, useContext } from "react";

//import styled-component
import { MenuOptionContainer, MenuOptionTimerContainer } from "../styles.js";

//import Context
import { GlobalContext } from "../../context/GlobalContext";

const MenuOptions = (props) => {
  //destructuring context
  const { store, actions } = useContext(GlobalContext);
  const { task, rest } = store;

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
      setTaskState({ ...taskState, time: event.target.value });
    if (name === "Rest")
      setRestState({ ...restState, time: event.target.value });
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
            min={store.task.minTime}
            max={store.task.maxTime}
            value={taskState.time}
            onChange={(event) => handleTime(event, "Task")}
          />
        </form>
        <div>
          <p>{store.task.minTime}</p>
          <p>{store.task.maxTime}</p>
        </div>
      </MenuOptionTimerContainer>
      <MenuOptionTimerContainer>
        <form>
          <label htmlFor={"Rest"}>
            <p>{"Rest"}</p>
            <div>
              <input
                type="text"
                value={restState.time}
                onChange={(event) => handleTime(event, "Rest")}
              />
              <p>min</p>
            </div>
          </label>
          <input
            type="range"
            id={"Rest"}
            name={"Rest"}
            min={store.rest.minTime}
            max={store.rest.maxTime}
            value={restState.time}
            onChange={(event) => handleTime(event, "Rest")}
          />
        </form>
        <div>
          <p>{store.rest.minTime}</p>
          <p>{store.rest.maxTime}</p>
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
