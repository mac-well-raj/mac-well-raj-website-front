import React, { Component } from "react";
import getAllCat from "../../../helper/getAllCat";
import GetCatById from "../../helper/LensCategory/GetCategoryById";
import UpdateCat from "../../helper/LensCategory/UpdateCategory";

export default class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      categoryId: "",
      name: "",
      position: null,
    };
    this.updateCategory = this.updateCategory.bind(this);
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

  async setCategory(id) {
    this.setState({
      categoryId: id,
    });
    const data = await GetCatById(id);
    if (data) {
      this.setState({
        name: data.name,
        position: data.position,
      });
    } else {
      alert("Unable To Get Category By Id");
    }
  }

  async updateCategory() {
    const { categoryId, name, position } = this.state;
    const res = await UpdateCat(categoryId, name, position);
    if (res.error) {
      alert("Unable to Update the Category");
    } else {
      alert("Category Updated Successfully");
      window.location.reload();
    }
  }

  lisenter(stateName, obj) {
    this.setState({
      [stateName]: obj.target.value,
    });
  }

  render() {
    return (
      <div>
        <h4 className="tab-head mt-3">Edit Category</h4>
        {this.state.categoryId.length === 0 ? (
          this.state.categories.length !== 0 ? (
            this.state.categories.map((catObj, index) => {
              return (
                <ul
                  className="list-group"
                  key={index}
                  key-id={catObj._id}
                  onClick={(e) => {
                    this.setCategory(e.currentTarget.getAttribute("key-id"));
                  }}
                >
                  <li className="mb-2 text-white list-group-item btn-nav btn">
                    {`|| Title: ${catObj.name} || `}
                    <i className="large material-icons">edit ||</i>
                  </li>
                </ul>
              );
            })
          ) : (
            "Loading Data"
          )
        ) : (
          <div className="container center">
            <div className="row modify-col">
              <div className="form-group col col-lg-6 col-sm-12">
                <input
                  value={this.state.name}
                  id="cat-mod-title"
                  type="text"
                  className="form-control"
                  onChange={(e) => this.lisenter("name", e)}
                  placeholder="Title"
                />
              </div>
              <div className="form-group col col-lg-6 col-sm-12">
                <input
                  value={this.state.position}
                  id="cat-mod-position"
                  type="number"
                  className="form-control"
                  onChange={(e) => this.lisenter("position", e)}
                  placeholder="Position"
                />
              </div>
              <div
                onClick={this.updateCategory}
                className="btn col col-lg-6 offset-lg-3 col-sm-12 text-white"
              >
                Update Category
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
