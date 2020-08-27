import React, { useState } from "react";

//import components
import Input from "../Input";

const NewTask = (props) => {
  return (
    <>
      <Input handleAddTask={props.handleAddTask} />
    </>
  );
};

export default NewTask;
