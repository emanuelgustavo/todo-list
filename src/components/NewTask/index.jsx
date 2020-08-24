import React, { useState } from "react";

//import components
import Input from "../Input";

const NewTask = (props) => {
  return (
    <>
      <Input handleAddToDo={props.handleAddToDo} />
    </>
  );
};

export default NewTask;
