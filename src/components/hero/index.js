import React, { Component } from "react";
import Slider from "react-slick";
import { Animated } from "react-animated-css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'

import Saveday from '../../components/countdown'


class SimpleSlider extends Component {
  render() {
    return (
      <div>
        <div className="item1" />
        <div className="circle-container">
          <div className="slide-content">
            <div className="slide-title">
              <h2>Save the Date</h2>
            </div>
            <div className="slide-text">
              <p>November 12th, 2021</p>
            </div>
            <Animated>
              <div className="animated-circle"></div>
            </Animated>
          </div>
        </div>
        <Saveday />
      </div>
    );
  }
}

export default SimpleSlider;