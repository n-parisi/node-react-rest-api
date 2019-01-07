import React from "react";
import axios from "axios";

export default class CreateUser extends React.Component {
  state = {
    username: "",
    birthday: "",
    subscription: "",
    authToken: ""
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
      .post("http://localhost:3000/users", {
        username: this.state.username,
        birthday: this.state.birthday,
        subscription: this.state.subscription
      })
      .then(res => {
        this.setState({
          authToken: res.data.authToken
        });
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" name="username" onChange={this.handleChange} />
            <br />
            Birthday:
            <input type="text" name="birthday" onChange={this.handleChange} />
            <br />
            Subscription: (optional)
            <input
              type="text"
              name="subscription"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit">Create</button>
        </form>
        <div>
          Auth Token: <br />
          <p>{this.state.authToken}</p>
        </div>
      </div>
    );
  }
}
