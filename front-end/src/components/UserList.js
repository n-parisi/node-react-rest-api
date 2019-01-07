import React from "react";
import axios from "axios";

export default class UserList extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.getUsers();
  }

  componentDidUpdate() {
    this.getUsers();
  }

  getUsers = () => {
    axios.get("http://localhost:3000/users").then(res => {
      const users = res.data;
      this.setState({ users });
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.users.map(user => (
            <li key={user._id}>
              {user.username} (id: {user._id})
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
