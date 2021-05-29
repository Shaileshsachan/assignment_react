import React, { Component } from "react";
import userDetails from "./userDetails";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      firstName: "",
      lastName: "",
      dob: "",
      telno: "",
      email: "",
      message: "",
    };
  }

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = (e) => {
    alert(`${this.state.firstName}`);
    console.log(this.state.firstName);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Title: </label>
          <select
            value={this.state.title}
            onChange={this.handleChange("title")}
            required
          >
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Ms">Ms</option>
          </select>
        </div>
        <br />
        <div>
          <label>FirstName: </label>
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.handleChange("firstName")}
            required
          />
        </div>
        <br />
        <div>
          <label>LastName: </label>
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.handleChange("lastName")}
            required
          />
        </div>
        <br />
        <div>
          <label>Date of Birth: </label>
          <input
            type="date"
            value={this.state.dob}
            onChange={this.handleChange("dob")}
          />
        </div>
        <br />
        <div>
          <label>Telephone No: </label>
          <input
            type="tel"
            value={this.state.telno}
            onChange={this.handleChange("telno")}
            required
          />
        </div>
        <br />
        <div>
          <label>File: </label>
          <input type="file" />
        </div>
        <br />
        <div>
          <label>Email Address: </label>
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleChange("email")}
            required
          />
        </div>
        <br />
        <div>
          <label>Message: </label>
          <textarea
            value={this.state.message}
            onChange={this.handleChange("message")}
          ></textarea>
        </div>
        <button type="button" onClick={() => userDetails(this.state)}>
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
