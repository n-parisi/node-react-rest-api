import React from "react";
import ReactDOM from "react-dom";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import ReadUser from "./components/ReadUser";
import DeleteUser from "./components/DeleteUser";
import UpdateUser from "./components/UpdateUser";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>List of all users:</div>
        <UserList />
        <hr />
        <div>Create a new user:</div>
        <CreateUser />
        <hr />
        <div>Get information for a user:</div>
        <ReadUser />
        <hr />
        <div>Delete a user:</div>
        <DeleteUser />
        <hr />
        <div>Update a user:</div>
        <UpdateUser />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
