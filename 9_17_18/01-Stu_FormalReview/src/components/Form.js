import React, { Component } from "react";

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    alert(`Hello ${this.state.username} your password is ${this.state.password}`);
    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <div>
        <p>
          Hello, {this.state.username}
        </p>
        <form className="form">
          <p>Username: {this.state.username}</p>
          <p>Password: {this.state.password}</p>
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
