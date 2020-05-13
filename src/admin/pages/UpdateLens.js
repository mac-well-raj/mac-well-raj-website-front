import React, { Component } from "react";
import CategoryGetter from "../../helper/getAllCat";
import { Link } from "react-router-dom";
import LensGetter from "../helper/Lenses/GetLensById";
import "./css/updateLens.css";
import ImageLoader from "../components/LensesManager/ImageLoader";
import FeatureCreator from "../helper/Lenses/CreateLensFeature";
import FeatureDeletor from "../helper/Lenses/DeleteLensFeature";
import PowerCreator from "../helper/Lenses/CreateLensPower";
import PowerDeletor from "../helper/Lenses/DeleteLensPower";
import LensUpdator from "../helper/Lenses/UpdateLens";

export default class UpdateLens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lensId: this.props.location.state.lensId,
      categories: [],
      position: null,
      name: "",
      description: "",
      image: "",
      rec_img: "",
      category: "",
      features: [],
      power: [],
      newFeature: "",
      newPowerRange: {
        code: 0,
        power: "",
        srp: 0,
      },
      formData: new FormData(),
    };
    this.createFeture = this.createFeture.bind(this);
  }

  async componentDidMount() {
    // Getting All the Categories
    const categories = await CategoryGetter();
    if (categories.error) {
      alert("Unable to Load Up Categories");
    } else {
      this.setState({
        categories: categories,
      });
    }

    // Getting Product Information
    const lens = await LensGetter(this.state.lensId);
    if (lens.error) {
      alert(lens.error);
    } else {
      document.getElementById("lens_description").value = lens.description;
      this.setState({
        position: lens.position,
        name: lens.name,
        description: lens.description,
        category: lens.category,
        rec_img: lens.image,
      });
      if (lens.features.length !== 0) {
        lens.features.forEach((feature) => {
          this.setState({
            features: [...this.state.features, feature],
          });
        });
      }
      if (lens.power_range.length !== 0) {
        lens.power_range.forEach((powerObj) => {
          this.setState({
            power: [...this.state.power, powerObj],
          });
        });
      }
    }
  }

  lisenter(stateName, obj) {
    let value = stateName === "image" ? obj.target.files[0] : obj.target.value;
    this.state.formData.set(stateName, value);
    this.setState({
      [stateName]: value,
    });
  }

  async createFeture() {
    const newFeature = document.getElementById("new_feature").value;
    if (newFeature !== 0) {
      const res = await FeatureCreator(this.state.lensId, newFeature);
      if (res.error) {
        alert("Unable to Create the Feature");
        console.log(res);
      } else {
        alert("Feature Created Successfully");
        window.location.reload();
      }
    } else {
      alert("First Fill Feature Field");
    }
  }

  async deleteFeature(featureId) {
    const res = await FeatureDeletor(
      this.props.location.state.lensId,
      featureId
    );
    if (res.error) {
      alert("Unable to delete the feature");
    } else {
      window.location.reload();
    }
  }

  async deletePowerRange(pr_Id) {
    const res = await PowerDeletor(this.state.lensId, pr_Id);
    if (res.error) {
      alert("Unable to Delete the Power Range");
    } else {
      alert("Power Range Deleted Successfully");
      window.location.reload();
    }
  }

  async creaetPowerRange(obj) {
    obj.preventDefault();
    const code = document.getElementById("new_pr_code").value;
    const power = document.getElementById("new_pr_power").value;
    const srp = document.getElementById("new_pr_srp").value;
    const newPowerRange = {
      code: code,
      power: power,
      srp: srp,
    };
    const res = await PowerCreator(this.state.lensId, newPowerRange);
    if (res.error) {
      console.log(res.error);
    } else {
      alert("Power Range Created Successfully");
      window.location.reload();
    }
  }

  async updateProduct(obj) {
    obj.preventDefault();
    const res = await LensUpdator(this.state.lensId, this.state.formData);
    if (res.error) {
      alert("Unable to Update the Lens");
    } else {
      alert("Lens Updated Successfully");
      window.location.reload();
    }
  }

  render() {
    return (
      <section className="my-create-lens-cont gra-border text-center">
        <div className="row">
          <div className="col col-sm-12 col-lg-10 offset-lg-1">
            <h4 className="tab-head cl-head">==| Update Lens |==</h4>
          </div>
          <div className="col col-sm-12 col-lg-10 offset-lg-1">
            <ImageLoader prodId={this.state.lensId} />
          </div>
          <div className="col col-sm-12">
            <form id="form">
              <div className="mt-3 form-group col col-sm-10 offset-sm-1 col-lg-8 offset-lg-2">
                <input
                  onChange={(e) => this.lisenter("position", e)}
                  id="lens_position"
                  type="number"
                  className="form-control"
                  name="name"
                  value={this.state.position}
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
                  value={this.state.name}
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
                  onClick={(e) => this.updateProduct(e)}
                >
                  Update Lens
                </button>
              </div>
              <div className="pt-3 gra-border col col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 cdm-feature-cont">
                <table className="table">
                  <thead className="bg-success text-white">
                    <tr>
                      <th scope="col">Feature</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.features.length !== 0
                      ? this.state.features.map((feature, index) => {
                          return (
                            <tr key={index} feature-key={feature._id}>
                              <td>{feature.name}</td>
                              <td
                                onClick={(e) => {
                                  this.deleteFeature(
                                    e.currentTarget.parentElement.getAttribute(
                                      "feature-key"
                                    )
                                  );
                                }}
                              >
                                <i className="material-icons">delete</i>
                              </td>
                            </tr>
                          );
                        })
                      : "No Features Available"}
                  </tbody>
                </table>
                <h4 className="tab-head cf-head text-white">Create Feature</h4>
                <div className="form-group col col-sm-10 offset-sm-1 col-lg-8 offset-lg-2">
                  <input
                    id="new_feature"
                    type="text"
                    className="form-control"
                    placeholder="New Feature"
                  />
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    this.createFeture();
                  }}
                  className="btn font-weight-bold mb-3 text-white"
                >
                  Create Feature
                </button>
              </div>
              <div className="pt-3 gra-border col col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 cdm-feature-cont">
                <table className="table">
                  <thead className="bg-success text-white">
                    <tr>
                      <th scope="col">Code</th>
                      <th scope="col">Power Range</th>
                      <th scope="col">Price</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.power.length === 0
                      ? "No Power Range Available"
                      : this.state.power.map((powerObj, index) => {
                          return (
                            <tr key={index} power-key={powerObj._id}>
                              <td>{powerObj.code}</td>
                              <td>{powerObj.power}</td>
                              <td>{powerObj.srp}/-</td>
                              <td
                                onClick={(e) => {
                                  this.deletePowerRange(
                                    e.currentTarget.parentElement.getAttribute(
                                      "power-key"
                                    )
                                  );
                                }}
                              >
                                <i className="material-icons">delete</i>
                              </td>
                            </tr>
                          );
                        })}
                  </tbody>
                </table>
                <h4 className="tab-head cf-head">Create Power Range</h4>
                <div className="form-group col col-sm-10 offset-sm-1 col-lg-8 offset-lg-2">
                  <input
                    id="new_pr_code"
                    type="text"
                    className="form-control"
                    placeholder="Code"
                  />
                </div>
                <div className="form-group col col-sm-10 offset-sm-1 col-lg-8 offset-lg-2">
                  <input
                    id="new_pr_power"
                    type="text"
                    className="form-control"
                    placeholder="Power Range"
                  />
                </div>
                <div className="form-group col col-sm-10 offset-sm-1 col-lg-8 offset-lg-2">
                  <input
                    id="new_pr_srp"
                    type="text"
                    className="form-control"
                    placeholder="SRP /-"
                  />
                </div>
                <button
                  className="btn mb-3 text-white font-weight-bold"
                  onClick={(e) => {
                    this.creaetPowerRange(e);
                  }}
                >
                  Create Power Range
                </button>
              </div>
              <div className="col clBtnCont l12 s12 gra-border">
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
