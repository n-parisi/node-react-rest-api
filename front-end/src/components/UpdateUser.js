import React from "react";
import axios from "axios";

export default class UpdateUser extends React.Component {
  state = {
    userId: "",
    authToken: "",
    username: "",
    birthday: "",
    subscription: "",
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

    console.log("AUTH TOKEN IS" + this.state.authToken);
    axios
      .put(
        `http://localhost:3000/users/${this.state.userId}`,
        {
          username: this.state.username,
          birthday: this.state.birthday,
          subscription: this.state.subscription
        },
        {
          headers: {
            "x-access-token": this.state.authToken,
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
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
            <br />
            <br />
            <br />
            Username:
            <input type="text" name="username" onChange={this.handleChange} />
            <br />
            Birthday:
            <input type="text" name="birthday" onChange={this.handleChange} />
            <br />
            Subscription:
            <input
              type="text"
              name="subscription"
              onChange={this.handleChange}
            />
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
