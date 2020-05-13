import React, { Component } from "react";

// Importing Components
import ShowAllCat from "../components/LensCategoryManager/ShowAll";
import CreateCat from "../components/LensCategoryManager/Create";
import ModifyCat from "../components/LensCategoryManager/Update";
import DeleteCat from "../components/LensCategoryManager/Delete";

export default class LensCategory extends Component {
  

  render() {
    return (
      <section className="my-nav-manager text-center gra-border">
        <div className="container">
          <div className="row">
            <div className="col col-sm-12 mt-3">
              <h4 className="text-center tab-head">==| Lenses Category Manager |==</h4>
            </div>
              <div id="One" className="col col-sm-12">
                <ShowAllCat />
              </div>
              <hr/>
              <div id="Two" className="col col-sm-12">
                <CreateCat />
              </div>
              <hr/>
              <div id="Three" className="col col-sm-12">
                <ModifyCat />
              </div>
              <hr/>
              <div id="Four" className="col col-sm-12">
                <DeleteCat />
              </div>
            </div>
          </div>
      </section>
    );
  }
}
