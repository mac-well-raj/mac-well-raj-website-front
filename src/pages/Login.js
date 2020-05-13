import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AdminLogin from "../helper/isAdmin";
import "./css/login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uname: "",
      password: "",
    };
  }

  lisenter(stateField, obj) {
    this.setState({ [stateField]: obj.target.value });
  }

  verifyUser() {
    if (this.state.uname.length === 0 || this.state.password.length === 0) {
      alert("Please Fill Both Fields First");
    } else {
      if (this.state.uname === "admin") {
        if (this.state.password === process.env.REACT_APP_ADMIN_PASSWORD) {
          localStorage.setItem("adminPassword", this.state.password);

          alert("Admin Logged in Successfully");

          window.location.reload(false);
        } else {
          alert("Invaild Email or Password");
        }
      } else {
        alert("Invaild Email or Password");
      }
    }
  }

  render() {
    return (
      <section className="my-login-form">
        <form method="" className="container text-center border">
          <div className="container form-head">
            <span>Login</span>
          </div>
          <div className="container form-group text-center col col-sm-12 col-lg-6">
            <input
              value={this.state.uname}
              id="uname"
              type="text"
              className="form-control bb"
              onChange={(obj) => this.lisenter("uname", obj)}
              placeholder="User Name"
            />
          </div>
          <div className="container form-group text-center col col-sm-12 col-lg-6">
            <input
              value={this.state.password}
              id="password"
              type="password"
              className="form-control bb"
              onChange={(obj) => this.lisenter("password", obj)}
              placeholder="Password"
            />
          </div>
          <div
            className="container col col-lg-6 col-sm-12 btn text-white"
            onClick={this.verifyUser.bind(this)}
          >
            Login >>
          </div>
        </form>
        {AdminLogin === true && <Redirect to="/dashboard" />}
      </section>
    );
  }
}
