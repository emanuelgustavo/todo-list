import React, { Component } from "react";

//import components
import NewTask from "../NewTask";
import TaskList from "../TaskList";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoList: [],
      newTask: {
        description: "",
        createAt: "",
        deadline: "",
        done: false,
        deadlineTime: ""
      },
      taskTimer: [
        {
          option: 1,
          title: "5 minutos",
          miliseconds: 300000
        },
        {
          option: 2,
          title: "10 minutos",
          miliseconds: 6000000
        },
        {
          option: 3,
          title: "15 minutos",
          miliseconds: 9000000
        }
      ],
      selectedTaskTimer: "",
      taskTimerVisible: false,
      deadlineCalendar: false,
      defaultDeadline: true
    };

    this.getToDoListFromStorage = this.getToDoListFromStorage.bind(this);
    this.handleAddNewTask = this.handleAddNewTask.bind(this);
    this.handleNewTask = this.handleNewTask.bind(this);
    this.getTime = this.getTime.bind(this);
    //this.getStartTime = this.getStartTime.bind(this);
    this.handleDoneTask = this.handleDoneTask.bind(this);
    this.handleRemoveTask = this.handleRemoveTask.bind(this);
    //this.handleAddDeadline = this.handleAddDeadline.bind(this);
    this.handleTaskTimer = this.handleTaskTimer.bind(this);
    this.handleSelectedTaskTimer = this.handleSelectedTaskTimer.bind(this);
  }

  componentDidMount() {
    const toDoList = this.getToDoListFromStorage();
    if (!toDoList) return;
    this.setState({
      toDoList
    });
  }

  componentDidUpdate() {
    localStorage.setItem("toDoList", JSON.stringify(this.state.toDoList));
  }

  getToDoListFromStorage = () => {
    return JSON.parse(localStorage.getItem("toDoList")) || [];
  };

  getTime = (date = new Date()) => {
    const createAtFullDateTimestamp = Date.parse(date);

    const createDay = date.getDate();
    const createMonth = date.getMonth() + 1;
    const createYear = date.getFullYear();
    const createHour = date.getHours();
    const createMinute = date.getMinutes();

    return [
      `${createDay}-${createMonth}-${createYear}, ${createHour}:${createMinute}`,
      createAtFullDateTimestamp
    ];
  };

  handleAddNewTask = (event) => {
    event.preventDefault();

    if (this.state.newTask.description === "") return;

    this.setState({
      toDoList: [this.state.newTask, ...this.state.toDoList],
      newTask: {
        description: "",
        createAt: "",
        deadline: "",
        done: false
      },
      deadlineCalendar: false
    });
  };

  handleNewTask = (event) => {
    const createAt = this.getTime();
    const deadline = createAt;

    this.setState({
      newTask: {
        ...this.state.newTask,
        description: event.target.value,
        createAt,
        deadline
      }
    });
  };

  handleDoneTask = (taskIndex) => {
    const { toDoList } = this.state;
    toDoList[taskIndex].done = !toDoList[taskIndex].done;
    this.setState({
      toDoList
    });
  };

  handleRemoveTask = (taskIndex) => {
    const remainTaskList = this.state.toDoList.filter(
      (task, index) => index !== taskIndex
    );
    this.setState({
      toDoList: remainTaskList
    });
  };

  handleTaskTimer = () => {
    this.setState({
      taskTimerVisible: !this.state.taskTimerVisible
    });
  };

  handleSelectedTaskTimer = (selectedTaskTimer) => {
    /*this.setState({
      selectedTaskTimer
    });*/
    console.log(selectedTaskTimer);
  };

  render() {
    return (
      <div>
        {this.state.timer}
        <h2>New task...</h2>
        {JSON.stringify(this.state.newTask)}
        <br />
        <NewTask
          data={this.state}
          handleTaskDeadline={this.handleTaskDeadline}
          handleNewTask={this.handleNewTask}
          handleAddNewTask={this.handleAddNewTask}
          taskTimer={this.state.taskTimer}
          handleTaskTimer={this.handleTaskTimer}
          handleSelectedTaskTimer={this.handleSelectedTaskTimer}
        />
        <br />
        <h2>My to do list...</h2>
        <br />
        <TaskList
          data={this.state}
          removeTask={this.handleRemoveTask}
          doneTask={this.handleDoneTask}
        />
      </div>
    );
  }
}
