import React, { Component } from "react";

// Importing Posters
import One from "../images/posters/1.jpg";
import Two from "../images/posters/2.jpg";
import Three from "../images/posters/3.jpg";
import Four from "../images/posters/4.jpg";
import Five from "../images/posters/5.jpg";
import Six from "../images/posters/6.jpg";
import Seven from "../images/posters/7.jpg";
import Eight from "../images/posters/8.jpg";

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
        {
          image: Two,
          background: "carousel-item bg-dark",
        },
        {
          image: Three,
          background: "carousel-item bg-dark",
        },
        {
          image: Four,
          background: "carousel-item bg-danger",
        },
        {
          image: Five,
          background: "carousel-item bg-white",
        },
        {
          image: Six,
          background: "carousel-item bg-danger",
        },
        {
          image: Seven,
          background: "carousel-item bg-dark",
        },
        {
          image: Eight,
          background: "carousel-item bg-white",
        },
      ],
    };
  }

  render() {
    return (
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item bg-dark active">
            <div className="row">
              <img
                height="525px"
                src={One}
                alt="..."
                className="col col-lg-6 col-sm-12 offset-lg-3"
              />
            </div>
          </div>
          {this.state.slides.map((slideObj, Index) => {
            return (
              <div className={slideObj.background}>
                <div className="row" key={Index}>
                  <img
                    height="650px"
                    src={slideObj.image}
                    alt="..."
                    className="col col-lg-6 col-sm-12 offset-lg-3"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
