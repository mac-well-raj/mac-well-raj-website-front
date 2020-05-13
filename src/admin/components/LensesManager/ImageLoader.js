import React, { Component } from "react";

export default class ImageLoader extends Component {
  render() {
    return (
      <div>
        <img
          height={this.props.height}
          width={this.props.width}
          className="border"
          src={`${process.env.REACT_APP_API_HOST}/product/${this.props.prodId}/image`}
          alt="Product Image"
        />
      </div>
    );
  }
}
