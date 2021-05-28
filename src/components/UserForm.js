import React, { Component } from "react";

export class UserForm extends Component {
  state = {
    title: "",
    firstName: "",
    lastname: "",
    dob: "",
    telno: "",
    file: "",
    message: "",
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { title, firstName, lastname, dob, telno, file, message } =
      this.state;

    return <h1>Form Persnal Details</h1>;
  }
}

export default UserForm;
