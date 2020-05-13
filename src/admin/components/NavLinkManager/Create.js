import React, { Component } from "react";
import LinkCreator from "../../helper/NavLink/CreateNavLink";

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      position: 0,
      link: "",
    };
  }

  lisenter(stateVar, obj) {
    this.setState({
      [stateVar]: obj.target.value,
    });
  }

  async createNavLink() {
    const { position, title, link } = this.state;
    const res = await LinkCreator(title, position, link);
    if (res.error) {
      alert("Unable to Create a Nav Link");
      console.log(JSON.stringify(res));
    } else {
      alert("Nav-Link Created Successfully.");
      window.location.reload();
    }
  }

  render() {
    return (
      <div>
        <h4 className="tab-head tab-head-head">==: Nav-Link Form :==</h4>
        <div className="row center">
          <div className="col col-sm-12">
            <div className="input-field col col-sm-12 col-lg-6 offset-lg-3">
              <input
                id="title"
                type="text"
                className="form-control mb-2"
                onChange={(obj) => {
                  this.lisenter("title", obj);
                }}
                placeholder="Title"
              />
            </div>
            <div className="input-field col col-sm-12 col-lg-6 offset-lg-3">
              <input
                id="position"
                type="number"
                className="form-control mb-2"
                placeholder="Position"
                onChange={(obj) => {
                  this.lisenter("position", obj);
                }}
              />
            </div>
            <div className="input-field col col-sm-12 col-lg-6 offset-lg-3">
              <input
                id="link"
                type="text"
                className="form-control mb-2"
                onChange={(obj) => {
                  this.lisenter("link", obj);
                }}
                placeholder="Link"
              />
            </div>
            {this.state.title.length !== 0 &&
            this.state.position > 0 &&
            this.state.link.length !== 0 ? (
              <div
                onClick={this.createNavLink.bind(this)}
                className="text-white btn"
                id="submit_btn"
              >
                Create Nav Link
              </div>
            ) : (
              <div disabled className="text-white btn" id="submit_btn">
                Create Nav Link
              </div>
            )}
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
