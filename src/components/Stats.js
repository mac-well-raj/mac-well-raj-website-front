import React, { Component } from "react";
import "./css/stats.css";

export default class Stats extends Component {
  render() {
    return (
      <section className="stat-cont">
        <div className="row">
          <div className="col col-lg-10 col-sm-12 offset-lg-1">
            <div className="row text-center">
              <div className="col-lg-4 col-sm-12 mt-3 mb-3 border">
                <h2 className="font-weight-bolder text-white">
                  <i className="icon-big material-icons">business</i> Since
                  1999*
                </h2>
                <h4 className="text-white">21 Year of Establishment</h4>
              </div>
              <div className="col-lg-4 col-sm-12 mt-3 mb-3 border">
                <h2 className="font-weight-bolder text-white">
                  <i className="icon-big material-icons">insert_emoticon</i> 1
                  Million*
                </h2>
                <h4 className="text-white">
                  More than 1 Million Happy Customers
                </h4>
              </div>
              <div className="col-lg-4 col-sm-12 mt-3 mb-3 border">
                <h2 className="font-weight-bolder text-white">
                  <i className="icon-big material-icons">panorama_fish_eye</i> 25 Plus*
                </h2>
                <h4 className="text-white">
                  More than 25 Variety of Lenses Available
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
