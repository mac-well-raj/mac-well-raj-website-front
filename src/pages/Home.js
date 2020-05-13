import React, { Component } from "react";
import "./css/home.css";
import increseVisit from "../helper/increaseVisit";

import Slider from "../components/Slider";
import Info from "../components/Info"
import Stats from "../components/Stats"

export default class Home extends Component {
  componentDidMount() {
    increseVisit();
  }

  render() {
    return (
      <section>
        <Slider />
        <Info />
        <Stats />
      </section>
    );
  }
}
