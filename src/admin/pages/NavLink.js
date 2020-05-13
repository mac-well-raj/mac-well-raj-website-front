import React, { Component } from "react";
import "./css/navlinks.css";

// Importing Components
import ShowAllNav from "../components/NavLinkManager/ShowAll";
import CreateNav from "../components/NavLinkManager/Create";
import DeleteNav from "../components/NavLinkManager/Delete";
import ModifyNav from "../components/NavLinkManager/Update";

export default class NavLinks extends Component {
  render() {
    return (
      <section className="my-nav-manager text-center gra-border">
        <div className="container">
          <div className="row">
            <h4 className="col col-sm-12 tab-head link-manager-head mt-3">
              ==| Nav Link Manager |==
            </h4>
            <div className="col col-sm-12 gra-border">
              <h4 className="tab-head mt-3">Available Nav Links</h4>
              <div id="One" className="col col-sm-12">
                <ShowAllNav />
              </div>
              <h4 className="tab-head">Create Nav Link</h4>
              <div id="Two" className="col col-sm-12">
                <CreateNav />
              </div>
              <h4 className="tab-head">Modify Nav Links</h4>
              <div id="Three" className="col col-sm-12">
                <ModifyNav />
              </div>
              <h4 className="tab-head">Delete Nav Links</h4>
              <div id="Four" className="col col-sm-12">
                <DeleteNav />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
