import React, { Component } from "react";
import "./css/lens.css";
import Card from "../components/Card";
import ProductLoader from "../helper/getAllProducts";
import CategoryLoader from "../helper/getAllCat";
import { Redirect } from "react-router-dom";

export default class Lenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [],
      upcomingProds: [],
    };
  }

  async componentDidMount() {
    // Getting All Products
    const products = await ProductLoader();
    if (products.error) {
      alert("Unable to Load Products");
    } else {
      this.setState({
        products: products,
      });
    }

    //Getting All Categories
    const categories = await CategoryLoader();
    if (categories.error) {
      alert("Unable to Load Categories");
    } else {
      this.setState({
        categories: categories,
      });
    }
  }

  render() {
    return (
      <section>
        <div className="row pt-3 pb-3">
          <div className="col-12 text-center">
            <h1 className="lens-head text-white">Available Lenses</h1>
          </div>
        </div>
        <div className="products-cont ml-4 mr-4">
          {this.state.categories.length === 0 ? (
            <h4 className="text-center text-danger">No Categories Available</h4>
          ) : (
            this.state.categories.map((categoryObj, index) => {
              return (
                <>
                  <h4
                    className="tab-head text-center"
                    key={index}
                    cat-key-id={categoryObj._id}
                  >
                    {categoryObj.name}
                  </h4>
                  {this.state.products.length === 0 ? (
                    <Redirect to="/" />
                  ) : (
                    <div className="row">
                      {this.state.products.length === 0
                        ? alert("NO Products Abailable")
                        : this.state.products.map((prodObj, index) => {
                            if (categoryObj._id === prodObj.category) {
                              return (
                                <div className="col col-lg-4 col-md-6 col-sm-12 mb-3">
                                  <Card data={prodObj} />
                                </div>
                              );
                            }
                          })}
                    </div>
                  )}
                </>
              );
            })
          )}
        </div>
      </section>
    );
  }
}
