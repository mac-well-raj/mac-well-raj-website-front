import React, { Component } from "react";
import "./css/createLens.css";
import CategoryGetter from "../../helper/getAllCat";
import LensCreator from "../helper/Lenses/CreateLens";
import { Link } from "react-router-dom";

export default class CreateLens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      position: null,
      name: "",
      description: "",
      image: "",
      category: "",
      formData: new FormData(),
    };
  }

  async componentDidMount() {
    const categories = await CategoryGetter();
    if (categories.error) {
      alert("Unable to Load Up Categories");
    } else {
      this.setState({
        categories: categories,
      });
    }
  }

  lisenter(stateName, obj) {
    let value = stateName === "image" ? obj.target.files[0] : obj.target.value;
    this.state.formData.set(stateName, value);
    this.setState({
      [stateName]: value,
    });
  }

  async createProduct(obj) {
    obj.preventDefault();
    const res = await LensCreator(this.state.formData);
    if (res.error) {
      alert(res.error);
      console.log(res);
    } else {
      console.log(res);
      alert("Product Created Successfully");
      window.location.reload();
    }
  }

  render() {
    return (
      <section className="my-create-lens-cont gra-border text-center">
        <div className="row">
          <div className="col col-sm-12 col-lg-10 offset-lg-1">
            <h4 className="tab-head cl-head">==| Create Lens |==</h4>
          </div>
          <div className="col col-sm-12">
            <form id="form">
              <div className="mt-3 form-group col col-sm-10 offset-sm-1 col-lg-8 offset-lg-2">
                <input
                  onChange={(e) => this.lisenter("position", e)}
                  id="lens_name"
                  type="number"
                  className="form-control"
                  name="position"
                  placeholder="Lens Position"
                />
              </div>
              <div className="mt-3 form-group col col-sm-10 offset-sm-1 col-lg-8 offset-lg-2">
                <input
                  onChange={(e) => this.lisenter("name", e)}
                  id="lens_name"
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Lens Name"
                />
              </div>
              <div className="form-group col col-sm-10 offset-sm-1 col-lg-8 offset-lg-2">
                <textarea
                  type="text"
                  id="lens_description"
                  className="form-control lens-desc"
                  placeholder="Lens Description"
                  name="description"
                  onChange={(e) => this.lisenter("description", e)}
                />
              </div>
              <div className="lens_img_selector_cont form-group col col-sm-10 offset-sm-1 col-lg-8 offset-lg-2">
                <input
                  type="file"
                  id="lens_image"
                  className="lens_img_selector col"
                  accept="image/png, image/jpeg"
                  name="lens_image"
                  onChange={(e) => this.lisenter("image", e)}
                />
              </div>
              <div className="col col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 ">
                <select
                  id="lens_category"
                  className="p-2 cat-selector category-selector col"
                  name="category"
                  value={this.state.category}
                  onChange={(e) => this.lisenter("category", e)}
                >
                  {this.state.categories.length === 0 ? (
                    <option value="Loading">Loading Elements</option>
                  ) : (
                    this.state.categories.map((catObj, index) => {
                      return (
                        <option key={index} value={catObj._id}>
                          {catObj.name}
                        </option>
                      );
                    })
                  )}
                </select>
              </div>
              <div
                className="col col-sm-12 col-lg-8 offset-lg-2 mb-4"
                id="craete-lens-btn"
              >
                <button
                  className="col btn text-white font-weight-bold"
                  onClick={(e) => this.createProduct(e)}
                >
                  Create Lens
                </button>
              </div>
              <div className="col clBtnCont col-lg-12 col-sm-12">
                <Link to="/admin/lenses" className="btn text-white">
                  ==| Go Back |==
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
