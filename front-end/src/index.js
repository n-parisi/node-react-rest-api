import React from "react";
import ReactDOM from "react-dom";
import UserList from "./components/UserList";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>List of all users:</div>
        <UserList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
