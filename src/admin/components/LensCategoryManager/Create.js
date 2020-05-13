import React, { Component } from "react";
import CategoryCreator from "../../helper/LensCategory/CreateCategory";

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      position: null,
    };
    this.createCategory = this.createCategory.bind(this);
  }

  lisenter(stateVar, obj) {
    this.setState({
      [stateVar]: obj.target.value,
    });
  }

  async createCategory() {
    const res = await CategoryCreator(this.state.name, this.state.position);
    if (res.name) {
      alert("Category Created Successfully");
      window.location.reload();
    } else {
      alert("Unable to Create Category");
      console.log(res);
    }
  }

  render() {
    return (
      <>
        <h4 className="tab-head mt-3">Create Lens Category</h4>
        <div className="container text-center">
          <div className="row">
            <div className="form-group col col-lg-6 col-sm-12">
              <input
                id="title"
                type="text"
                className="form-control"
                onChange={(obj) => {
                  this.lisenter("name", obj);
                }}
                placeholder="Title"
              />
            </div>
            <div className="form-group col col-lg-6 col-sm-12">
              <input
                id="position"
                type="number"
                className="form-control"
                onChange={(obj) => {
                  this.lisenter("position", obj);
                }}
                placeholder="Position"
              />
            </div>
            <div
              onClick={this.createCategory}
              className="btn col col-lg-6 offset-lg-3 col-sm-12 mb-3 text-white"
            >
              Create Category
            </div>
          </div>
        </div>
      </>
    );
  }
}
