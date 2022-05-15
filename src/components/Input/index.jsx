import React, { useState, useContext } from "react";

//Global context
import GlobalContext from "../../context/globalContext";

//import styled components
import { InputContainer } from "../styles";
//import icons
import { MdAddCircleOutline } from "react-icons/md";

const Input = (props) => {
  //destructuring global context
  const { runningTask } = useContext(GlobalContext);

  const [taskText, setTaskText] = useState("");

  const handleSetTaskText = (event) => {
    if (runningTask.running) return;
    setTaskText(event.target.value);
  };

  const handleAddNewTask = () => {
    if (taskText.length <= 3) return;
    props.handleAddTask(taskText);
    setTaskText("");
  };

  const handleOnKeyPress = (event) => {
    if (runningTask.running) return;
    if (event.key === "Enter") handleAddNewTask();
  };

  return (
    <InputContainer>
      <input
        type="text"
        onChange={(event) => handleSetTaskText(event)}
        onKeyPress={(event) => handleOnKeyPress(event)}
        value={taskText}
        placeholder="New task..."
      />
      <MdAddCircleOutline onClick={() => handleAddNewTask()} />
    </InputContainer>
  );
};

export default Input;
