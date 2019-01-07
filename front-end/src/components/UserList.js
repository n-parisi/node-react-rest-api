import React from "react";
import axios from "axios";

export default class UserList extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios.get("http://localhost:3000/users").then(res => {
      const users = res.data;
      this.setState({ users });
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.users.map(user => (
            <li>
              {user.username} (id: {user._id})
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
