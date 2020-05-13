import React, { Component } from "react";
import getAllNav from "../../../helper/getAllNav";
import "./css/ShowAll.css";
import DeleteNav from "../../helper/NavLink/DeleteNavLink";

export default class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navLinks: [],
      status: "",
    };
  }

  async componentDidMount() {
    const links = await getAllNav();
    this.setState({
      navLinks: links,
    });
    this.deleteNavLink = this.deleteNavLink.bind(this);
  }

  async deleteNavLink(e) {
    const id = e.getAttribute("key-id");
    const res = await DeleteNav(id);
    this.setState({
      status: res,
    });
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  render() {
    return (
      <div>
        <hr />
        <ul className="list-group">
          {this.state.navLinks.length !== 0
            ? this.state.navLinks.map((linkObj, index) => {
                return (
                  <li
                    onClick={(e) => this.deleteNavLink(e.currentTarget)}
                    className="list-group-item"
                    key={index}
                    key-id={linkObj._id}
                  >
                    <p className="btn-nav btn text-white">
                      {`|| Title: ${linkObj.name} || Position: ${linkObj.position} || `}
                      <i className="large material-icons">delete ||</i>
                    </p>
                  </li>
                );
              })
            : "No Links Available"}
        </ul>
        <hr />
      </div>
    );
  }
}
