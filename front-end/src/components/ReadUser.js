import React from "react";
import axios from "axios";

export default class ReadUser extends React.Component {
  state = {
    userId: "",
    returnMsg: ""
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({ userId: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios.get(`http://localhost:3000/users/${this.state.userId}`).then(res => {
      var msg = JSON.stringify(res.data);
      this.setState({
        returnMsg: msg
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
          </label>
          <br />
          <button type="submit">Get</button>
        </form>
        <div>
          User Information: <br />
          <p>{this.state.returnMsg}</p>
        </div>
      </div>
    );
  }
}
