import React, { Component } from "react";
import "./css/info.css";
import Logo from "../images/brand/logo.png";

export default class Info extends Component {
  render() {
    return (
      <section className="Info-Cont pt-4 pb-4">
        <div className="row">
          <div className="col col-lg-10 offset-lg-1 col-sm-12">
            <div className="row">
              <div className="col-lg-3 col-sm-12 text-center info-head">
                <img src={Logo} className="App-logo" alt="Logo" />
                <br />
                <span className="text-danger">Mak-Well Lenses</span>
              </div>
              <div className="col-lg-3 col-sm-12 pl-4">
                <h3 className="text-secondary">
                  Step towards{" "}
                  <code className="text-dark font-weight-bolder">
                    Empowering Vision
                  </code>{" "}
                  with style
                </h3>
              </div>
              <div className="col-lg-3 col-sm-12 pl-4">
                <p>
                  Mak-Well serves you with the finest and best quality of
                  Ophthamic Lenses, which commits you to enrich your visual
                  experiences.
                  <br />
                  <br />
                  We also deal into frames that helps to get twinned with the
                  ever changing fashion and style.
                </p>
              </div>
              <div className="col col-lg-3 col-sm-12 pl-4">
                <p>
                  Age is an issue of mind over matter. <br /> <br />
                  If you don’t mind, it doesn’t matter so as our reading
                  glasses, we make sure to empower your vision at the late 40’s
                  too.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
