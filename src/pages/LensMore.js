import React, { Component } from "react";
import ImageLoader from "../admin/components/LensesManager/ImageLoader";
import { Redirect, Link } from "react-router-dom";
import "./css/lensmore.css";

export default class LensMore extends Component {
  constructor(props) {
    super(props);
    if (this.props.location.state.product === undefined) {
      return <Redirect to="/lenses" />;
    }
    this.state = {
      product: this.props.location.state.product,
    };
    console.log(this.state.product);
  }

  render() {
    return (
      <section className="more-about-lens-cont">
        <div className="continer">
          <div className="row">
            <div className="col col-lg-12 col-sm-12">
              <div className="row">
                <div className="col-lg-4 col-sm-12 mt-4 mb-4">
                  <ImageLoader prodId={this.state.product._id} height={400} width={300} />
                </div>
                <div className="col-lg-8 col-sm-12 pt-4 mb-4">
                  <h2 className="product-title">{this.state.product.name}</h2>
                  <p className="product-desc">
                    {this.state.product.description}
                  </p>
                  <ul className="list-group">
                    <li className="list-group-item feature-list-head text-white font-weight-bold">
                      Features :
                    </li>
                    {this.state.product.features.map((feature, index) => {
                      return (
                        <li
                          class="font-weight-bold list-group-item"
                          key={index}
                        >
                          {feature.name}
                        </li>
                      );
                    })}
                  </ul>
                  <table className="table mt-3">
                    <thead className="power-list-head text-white">
                      <tr>
                        <th scope="col">Code</th>
                        <th scope="col">Power</th>
                        <th scope="col">SRP/-</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.product.power_range.map(
                        (power_Obj, index) => {
                          return (
                            <tr key={index}>
                              <td>{power_Obj.code}</td>
                              <td>{power_Obj.power}</td>
                              <td>{power_Obj.srp}</td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
                <Link to="/lenses" className="go-back-btn btn text-white font-weight-bold mb-3 mx-auto">
                  Go Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
