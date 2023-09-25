import React, { Component, Fragment } from 'react'
import HomePage from './home-page';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "./home.scss"
export class Home extends Component {
  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Fragment>
        <div>
          <Slider {...settings}>
            <div >
              <HomePage/>
            </div>
            <div >
              <HomePage/>
            </div>
            <div >
              <HomePage/>
            </div>
          </Slider>
        </div>
      </Fragment>
    )
  }
}

export default Home