import React, { Component } from "react";
import getAllCat from "../../../helper/getAllCat";
import CategoryDeleter from "../../helper/LensCategory/DeleteCategory";
import "./css/ShowAll.css";

export default class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      categoryId: "",
    };
  }

  async componentDidMount() {
    const data = await getAllCat();
    if (data.error) {
      alert("Unable to Get the Categories");
    } else {
      this.setState({
        categories: data,
      });
    }
  }

  async deleteCategory(catId) {
    const res = await CategoryDeleter(catId);
    if (res.SuccessMsg) {
      alert("Category Deleted Successfully");
      window.location.reload();
    } else {
      alert("Unable to Delete the Category");
    }
  }

  render() {
    return (
      <>
        <h4 className="tab-head mt-3">Delete Category</h4>

        {this.state.categories.length !== 0
          ? this.state.categories.map((catObj, index) => {
              return (
                <h4
                  key={index}
                  key-id={catObj._id}
                  onClick={(e) => {
                    this.deleteCategory(e.currentTarget.getAttribute("key-id"));
                  }}
                >
                  <p className="btn-nav btn text-white">
                    {`|| Title: ${catObj.name} || `}
                    <i className="large material-icons">delete ||</i>
                  </p>
                </h4>
              );
            })
          : "Loading Data"}
      </>
    );
  }
}
