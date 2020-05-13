import React, { Component } from "react";
import getAllNav from "../../../helper/getAllNav";
import getOneNav from "../../helper/NavLink/GetNavById";
import UpdateNav from "../../helper/NavLink/UpdateNavLink";

export default class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navLinkId: "",
      navLinks: [],
      title: "",
      position: 0,
      link: "",
      status: "",
    };
    this.modifyNavLink = this.modifyNavLink.bind(this);
  }

  async componentDidMount() {
    const links = await getAllNav();
    this.setState({
      navLinks: links,
    });
  }

  async setNavLinkId(id) {
    this.setState({
      navLinkId: id,
    });
    const data = await getOneNav(id);
    this.setState({
      title: data.name,
      position: data.position,
      link: data.url,
    });
  }

  lisenter(stateName, obj) {
    this.setState({
      [stateName]: obj.target.value,
    });
  }

  resetAll() {
    window.location.reload();
  }

  async modifyNavLink() {
    let title = document.getElementById("mod-title").value;
    let position = document.getElementById("mod-position").value;
    let link = document.getElementById("mod-link").value;
    const changedObj = {
      name: title,
      position: position,
      url: link,
    };
    const status = await UpdateNav(this.state.navLinkId, changedObj);
    this.setState({
      status: JSON.stringify(status),
    });
    if (status.error) {
      alert("Unable to Modify the Nav Link");
      console.log(status);
    } else {
      alert("Nav Link Modified Successfully");
    }
    window.location.reload();
  }

  render() {
    return (
      <div>
        {this.state.navLinkId.length !== 0 ? (
          <div className="col col-sm-12 text-center modify-col">
            <div className="form-group col col-sm-12 col-lg-6 offset-lg-3">
              <input
                value={this.state.title}
                id="mod-title"
                type="text"
                className="form-control"
                onChange={(obj) => this.lisenter("title", obj)}
                placeholder="Title"
              />
            </div>
            <div className="form-group col col-sm-12 col-lg-6 offset-lg-3">
              <input
                value={this.state.position}
                id="mod-position"
                type="number"
                className="form-control"
                onChange={(obj) => this.lisenter("position", obj)}
                placeholder="Position"
              />
            </div>
            <div className="form-group col col-sm-12 col-lg-6 offset-lg-3">
              <input
                value={this.state.link}
                id="mod-link"
                type="text"
                className="form-control"
                onChange={(obj) => this.lisenter("link", obj)}
                placeholder="Link"
              />
            </div>
            <div
              className="col col-lg-4 col-sm-6 btn text-white"
              onClick={this.modifyNavLink}
            >
              Modify Link
            </div>
            <div className="col col-lg-4 col-sm-6 btn text-white" onClick={this.resetAll}>
              Reload
            </div>
          </div>
        ) : (
          this.state.navLinks.map((linkObj, index) => {
            return (
              <h4
                onClick={(e) => {
                  this.setNavLinkId(e.currentTarget.getAttribute("key-id"));
                }}
                className="collection-item"
                key={index}
                key-id={linkObj._id}
              >
                <p className="btn-nav btn text-white">
                  {`|| Title: ${linkObj.name} || Position: ${linkObj.position} || `}
                  <i className="large material-icons">edit ||</i>
                </p>
              </h4>
            );
          })
        )}
        <hr/>
      </div>
    );
  }
}
