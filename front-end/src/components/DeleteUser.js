import React from "react";
import axios from "axios";

export default class DeleteUser extends React.Component {
  state = {
    userId: "",
    authToken: "",
    responseMsg: ""
  };

  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .delete(`http://localhost:3000/users/${this.state.userId}`, {
        headers: {
          "x-access-token": this.state.authToken
        }
      })
      .then(res => {
        var msg = JSON.stringify(res.data);
        this.setState({
          responseMsg: msg
        });
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            UserID:
            <input type="text" name="userId" onChange={this.handleChange} />
            <br />
            Auth Token:
            <input type="text" name="authToken" onChange={this.handleChange} />
          </label>
          <br />
          <button type="submit">Delete</button>
        </form>
        <div>
          <p>{this.state.responseMsg}</p>
        </div>
      </div>
    );
  }
}
