import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImageLoader from "../admin/components/LensesManager/ImageLoader";

export default class Card extends Component {

  render() {
    return (
      <>
        {this.props.data.length === 0 ? (
          <h4 className="text-center text-danger">No Data Available</h4>
        ) : (
          <>
            {console.log(this.props.data)}
            <div className="card text-center border border-danger">
              <ImageLoader prodId={this.props.data._id} height="300" width="280" />
              <div className="card-body">
                <h5 className="card-title text-danger font-weight-bold">{this.props.data.name}</h5>
                <p className="card-text border border-danger p-1 text-dark">
                  {this.props.data.description}
                </p>
                <Link
                  to={{
                    pathname: "/lenses/more",
                    state: {
                      product: this.props.data,
                    },
                  }}
                  class="btn btn-primary"
                >
                  More >>
                </Link>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}
