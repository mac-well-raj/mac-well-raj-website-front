import React, { Component } from "react";
import Visits from "../helper/getVisit";
import "./css/footer.css";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visits: 0,
    };
  }

  async componentDidMount() {
    const noofVisitsObj = await Visits();
    this.setState({
      visits: noofVisitsObj.visits,
    });
  }

  render() {
    return (
      <footer className="page-footer center text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 mx-auto">
              <h4>For Any Order Call us on :</h4>
              <h5>7727969952 => Whatsapp Number</h5>
              <h5>0291-2635178 => Tele-Number</h5>
            </div>
            <div className="col-lg-6 col-sm-12">
              {this.state.visits !== 0 && (
                <h4 className="visitCount">
                  Total Visits : {this.state.visits}{" "}
                </h4>
              )}
              <h4>For Any Query Call us on :</h4>
              <h5>8764465178 => Mobile Number</h5>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2020 Copyright Text
            <a
              className="float-right text-white foot-admin-link float-left"
              href="/admin"
            >
              Designed By Manish
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
