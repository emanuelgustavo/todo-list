import React, { useEffect, useState } from "react";

//import components
import Task from "../Task";

const TaskList = (props) => {
  const [taskList, setTaskList] = useState([]);
  const [changeCount, setChangeCount] = useState(0);

  useEffect(() => {
    // console.log(`TaskList changeCount: ${changeCount}`);
    setTaskList(props.taskList);
    setChangeCount(0);
  }, [props, changeCount]);

  return (
    <ul style={{ listStyleType: "none" }}>
      {taskList.map((task, index) => {
        return <Task key={index} data={task} />;
      })}
    </ul>
  );
};

export default TaskList;
