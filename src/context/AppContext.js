import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class AppContextProvider extends Component {
  state = {
    timer: 0
  };

  componentDidMount() {
    const thisBoundedGetNowTime = this.getNowTime.bind(this);
    setInterval(thisBoundedGetNowTime, 1000);
  }

  getNowTime = () => {
    const nowTime = new Date(Date.now());
    this.setState({
      timer: nowTime.toLocaleTimeString()
    });
    //setTimerCount(nowTime.toLocaleTimeString());
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { AppContextProvider, Consumer as AppContextConsumer };
