import React, { Component } from "react";
import ContactCreator from "../helper/createContact";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mobile: null,
      message: "",
    };
    this.submitForm = this.submitForm.bind(this);
  }

  lisenter(stateName, obj) {
    this.setState({
      [stateName]: obj.target.value,
    });
  }

  async submitForm() {
    let msg = document.getElementById("contact-message").value;
    let data = {
      name: this.state.name,
      mobile: this.state.mobile,
      email: this.state.email,
      message: msg,
    };

    if (
      data.name === "" ||
      data.mobile === null ||
      data.email === "" ||
      data.message === ""
    ) {
      return alert("Please Fill All the Fields to Submit the Form");
    } else {
      const res = await ContactCreator(data);
      if (res.error) {
        alert("Unable To Submit the Form");
        console.log(res);
        return;
      } else {
        if (res._id) {
          alert("Form Submitted Successfully");
          this.setState({
            name: "",
            email: "",
            mobile: 0,
          });
          document.getElementById("contact-message").value = "";
        }
      }
    }
  }

  render() {
    return (
      <section className="contact-cont">
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col col-lg-6 col-sm-12 text-center border">
              <h4 className="tab-head">How can we assist you?</h4>
              <p>
                Have a question? If you don’t find what you’re looking for, you
                can contact support by phone, email, or by filling out our
                contact form.
              </p>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mb-2 mt-2"
                  placeholder="Full Name"
                  value={this.state.name}
                  onChange={(e) => this.lisenter("name", e)}
                />
                <input
                  type="number"
                  className="form-control mb-2 mt-2"
                  placeholder="Mobile Number"
                  value={this.state.mobile}
                  onChange={(e) => this.lisenter("mobile", e)}
                />
                <input
                  type="email"
                  className="form-control mb-2 mt-2"
                  placeholder="E-Mail"
                  value={this.state.email}
                  onChange={(e) => this.lisenter("email", e)}
                />
                <textarea
                  type="text"
                  id="contact-message"
                  className="form-control mb-2 mt-2"
                  placeholder="Message"
                />
                <button className="btn text-white" onClick={this.submitForm}>
                  Submit
                </button>
              </div>
            </div>
            <div className="col col-lg-6 col-sm-12 border">
              <h4 className="tab-head text-center">Head Office India</h4>
              <div className="head-address mb-5 text-center font-weight-bold">
                MaK-Well Lenses Pvt. Ltd. <br />
                4-3-174, KS-Line,
                <br />
                Sultan Bazar, Koti,
                <br />
                Hyderabad, Telangana ( 500095 ) <br />
                E-Mail: macwellraj@gmail.com
              </div>
              <h4 className="tab-head text-center">Ditributor Rajasthan</h4>
              <div className="dist-address text-center font-weight-bold">
                Shiva Lens House <br />
                Near Sir Pratap School, <br />
                1st Floor Shop No. 13-14, <br />
                M.G.H. Road, <br />
                Jodhpur, Rajasthan ( 342001 ) <br />
                E-Mail: shivalenshousejdp@gmail.com
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
