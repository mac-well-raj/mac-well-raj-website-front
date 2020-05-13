import React, { Component } from "react";
import "./css/dashboard.css";

export default class Dashboard extends Component {
  state = {
    mangeLinks: [
      {
        title: "Nav Links",
        url: "/admin/navlink",
      },
      {
        title: "Lenses Category",
        url: "/admin/lens-category",
      },
      {
        title: "Lenses",
        url: "/admin/lenses",
      },
      {
        title: "Queries",
        url: "/admin/queries",
      },
    ],
  };

  render() {
    return (
      <section className="my-dashboard text-center">
        <div className="row b">
          <div className="col manage-link-cont col-lg-4 col-sm-12">
            <h4 className="manage-title">Manage :</h4>
            <ul className="list-group text-center">
              {this.state.mangeLinks.map((linkObj) => {
                return (
                  <a href={linkObj.url} className="manage-item-txt">
                    <li className="list-group-item manage-item">
                      {linkObj.title}
                    </li>
                  </a>
                );
              })}
            </ul>
          </div>
          <div className="col col-lg-8 col-sm-12 b">
            <h4>Hello Admin !</h4>
          </div>
        </div>
      </section>
    );
  }
}
