// import { createContext } from "react";

// export const AppContext = createContext({
//   test: "Hello World Context"
// });
import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class AppContextProvider extends Component {
  state = {
    test: "Hello context"
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { AppContextProvider, Consumer as AppContextConsumer };
