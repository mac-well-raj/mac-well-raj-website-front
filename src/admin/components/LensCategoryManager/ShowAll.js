import React, { Component } from "react";
import GetAllCategories from "../../../helper/getAllCat";
import "./css/ShowAll.css";

export default class ShowAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    const data = await GetAllCategories();
    if (data.error) {
      alert("Failed to get the Lenses Categories...");
    } else {
      this.setState({
        categories: data,
      });
    }
  }

  render() {
    return (
      <div>
        <h4 className="tab-head">Show All</h4>
        {this.state.categories.length !== 0
          ? this.state.categories.map((catObj, index) => {
              return (
                <h4 key={index} key-id={catObj._id}>
                  <p className="text-white btn-nav btn">{`|| Title: ${catObj.name} ||`}</p>
                </h4>
              );
            })
          : setTimeout(() => "Loading Categories", 10000)}
      </div>
    );
  }
}
