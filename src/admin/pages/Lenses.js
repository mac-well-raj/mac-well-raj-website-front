import React, { Component } from "react";
import "./css/lenses.css";
import { Link } from "react-router-dom";

// Components
import ShowAll from "../components/LensesManager/ShowAllLenses";

export default class Lenses extends Component {
  render() {
    return (
      <section className="my-lens-manager text-center gra-border lens-manager-row">
        <div className="row">
          <div className="col col-lg-12 col-sm-12 lens-manager-row-head">
            <h4 className="tab-head mt-3">==| Lens Manager |==</h4>
          </div>
          <div className="col col-lg-12 col-sm-12">
            <h4 className="lenses-head">==| Available Lenses |==</h4>
          </div>
          <ShowAll />
          <div className="col clBtnCont">
            <Link
              to="/admin/createLens"
              className="btn clBtn text-white font-weight-bold"
            >
              {" "}
              Create New Product{" "}
            </Link>
          </div>
        </div>
      </section>
    );
  }
}
