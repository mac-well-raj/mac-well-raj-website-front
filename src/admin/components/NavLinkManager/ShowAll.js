import React, { Component } from "react";
import getAllNav from "../../../helper/getAllNav";
import "./css/ShowAll.css";

export default class ShowAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navLinks: [],
    };
  }

  async componentDidMount() {
    const links = await getAllNav();
    this.setState({
      navLinks: links,
    });
  }

  render() {
    return (
      <div >
        <ul className="list-group">
          {this.state.navLinks.length !== 0
            ? this.state.navLinks.map((linkObj, index) => {
                return (
                  <li
                    className="list-group-item"
                    key={index}
                    key-id={linkObj._id}
                  >
                    <input
                      type="button"
                      className="btn-nav text-white btn"
                      value={`|| Title: ${linkObj.name} || Position: ${linkObj.position} ||`}
                    />
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
