import React, { Component } from "react";
import "./css/navbar.css";
import { Link } from "react-router-dom";
import AdminLogin from "../helper/isAdmin";

// Impoting Helper
import getNavData from "../helper/getAllNav";
import signout from "../helper/SignOut";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navLinks: [],
    };
  }

  async componentDidMount() {
    const data = await getNavData();
    this.setState({ navLinks: data });
  }

  AdminRoutes() {
    return (
      <>
        <li class="nav-item active">
          <Link class="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li class="nav-item active">
          <Link class="nav-link" to="#" onClick={signout}>
            Log Out
          </Link>
        </li>
      </>
    );
  }

  render() {
    return (
      <div>
        <nav className="navbar nav-custom navbar-expand-lg navbar-dark">
          <Link to="/">
            <span className="brand-logo">Mac-Well</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              {this.state.navLinks.length === 0
                ? "loading nav items"
                : this.state.navLinks.map((navObj) => {
                    return (
                      <li className="nav-item active" key={navObj._id}>
                        <Link className="nav-link" to={navObj.url}>
                          {navObj.name}
                        </Link>
                      </li>
                    );
                  })}
              {AdminLogin === true && this.AdminRoutes()}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
