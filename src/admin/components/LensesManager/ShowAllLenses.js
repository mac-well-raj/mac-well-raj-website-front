import React, { Component } from "react";
import GetAllCategories from "../../../helper/getAllCat";
import GetAllProducts from "../../../helper/getAllProducts";
import LensDeletor from "../../helper/Lenses/DeleteLens";
import "./css/showAll.css";
import { Link } from "react-router-dom";

export default class ShowAllLenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      lenses: [],
    };
  }

  async getProducts() {
    const data = await GetAllProducts();
    if (data.error) {
      alert("Unable to Get the Products");
    } else {
      this.setState({
        lenses: data,
      });
    }
  }

  async componentDidMount() {
    const categories = await GetAllCategories();
    if (categories.error) {
      alert("Unable To Get The Categories");
    } else {
      this.setState({
        categories: categories,
      });
      this.getProducts();
    }
  }

  async deleteLens(id, lensName) {
    const confirm = window.confirm(`Do you Really Want to Delete ${lensName}`);
    if (confirm) {
      const res = await LensDeletor(id);
      if (res.error) {
        alert("Unable to Delete the Lens");
      } else {
        alert("Lens Deleted Successfully");
        window.location.reload();
      }
    }
  }

  render() {
    return (
      <div className="col col-lg-12 col-sm-12">
        <div className="col col-lg-10 offset-lg-1 col-sm-10 offset-sm-1 text-center">
          {this.state.categories.length !== 0
            ? this.state.categories.map((catObj, index) => {
                return (
                  <div key={index}>
                    <h4 className="lens-category-head" key={catObj._id}>
                      {catObj.name}
                    </h4>
                    <table className="table">
                      <thead className="bg-success text-white">
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Rating</th>
                          <th scope="col">Modify</th>
                          <th scope="col">Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.lenses.length !== 0
                          ? this.state.lenses.map((lensObj, index) => {
                              if (lensObj.category === catObj._id) {
                                return (
                                  <tr lens-key-id={lensObj._id} key={index}>
                                    <td>{lensObj.name}</td>
                                    <td>{lensObj.rating}</td>
                                    <td>
                                      <Link
                                        to={{
                                          pathname: "/admin/updateLens",
                                          state: {
                                            lensId: lensObj._id,
                                          },
                                        }}
                                      >
                                        <i className="material-icons">edit</i>
                                      </Link>
                                    </td>
                                    <td
                                      onClick={(e) => {
                                        this.deleteLens(
                                          e.currentTarget.parentElement.getAttribute(
                                            "lens-key-id"
                                          ),
                                          lensObj.name
                                        );
                                      }}
                                    >
                                      <i className="material-icons">delete</i>
                                    </td>
                                  </tr>
                                );
                              }
                            })
                          : "Loading Lenses"}
                      </tbody>
                    </table>
                  </div>
                );
              })
            : "Loading"}
        </div>
      </div>
    );
  }
}
