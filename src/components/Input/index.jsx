import React, { useState } from "react";

//import styled components
import { InputContainer } from "../styles";
//import icons
import { MdAddCircleOutline } from "react-icons/md";

const Input = (props) => {
  const [taskText, setTaskText] = useState("");

  const handleSetTaskText = (event) => {
    setTaskText(event.target.value);
  };

  return (
    <InputContainer>
      <input
        type="text"
        onChange={(event) => handleSetTaskText(event)}
        value={taskText}
        placeholder="New task..."
      />
      <MdAddCircleOutline onClick={() => props.handleAddToDo(taskText)} />
    </InputContainer>
  );
};

export default Input;
