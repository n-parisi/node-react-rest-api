import React from "react";
import axios from "axios";

export default class ReadUser extends React.Component {
  state = {
    userId: "",
    data: ""
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({ userId: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios.get(`http://localhost:3000/users/${this.state.userId}`).then(res => {
      console.log(res.data);
      this.setState({
        data: res.data
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
          <p>{JSON.stringify(this.state.data, null, 2)}</p>
        </div>
      </div>
    );
  }
}
