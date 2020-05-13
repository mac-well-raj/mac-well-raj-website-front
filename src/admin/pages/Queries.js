import React, { Component } from "react";
import queryGetter from "../helper/Query/GetAll";
import queryDeletor from "../helper/Query/Delete";

export default class Queries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queries: [],
    };
  }

  async componentDidMount() {
    const data = await queryGetter();
    if (data.error) {
      console.log(data);
      return alert("Unable to get the Queries");
    } else {
      this.setState({
        queries: data,
      });
    }
  }

  async deleteQuery(queryId) {
    const res = await queryDeletor(queryId);
    if (res.error) {
      console.log(res);
      return alert("Unable to Delete the Query");
    } else {
      alert("Query Deleted Successfully");
      window.location.reload();
      return;
    }
  }

  render() {
    return (
      <div className="container">
        <h4 className="tab-head mt-3 text-center">Available Queries</h4>
        <table className="table mt-3">
          <thead className="bg-danger text-white">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Mobile</th>
              <th scope="col">E-Mail</th>
              <th scope="col">Message</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.queries.length === 0 ? (
              <h4 className="text-center text-success">No Data Available</h4>
            ) : (
              this.state.queries.map((queryObj, index) => {
                return (
                  <tr key={index} query-key-id={queryObj._id}>
                    <td>{queryObj.name}</td>
                    <td>{queryObj.mobile}</td>
                    <td>{queryObj.email}</td>
                    <td>{queryObj.message}</td>
                    <td
                      onClick={(e) =>
                        this.deleteQuery(
                          e.currentTarget.parentElement.getAttribute(
                            "query-key-id"
                          )
                        )
                      }
                    >
                      <i class="material-icons">delete</i>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
