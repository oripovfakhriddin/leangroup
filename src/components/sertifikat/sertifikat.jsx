import React, { Component, Fragment } from 'react'
import Slider from 'react-slick';
import { sertifikat } from '../../data/sertifikat';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



import "./sertifikat.scss"

export class Sertifikat extends Component {
  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <Fragment>
        <section id='sertifikat'>
        <div className="container sertifikat__container">
          <h1 className='sertifikat__title'>
            Качество продукции подтверждают <span>сертификаты</span>
          </h1>
          <Slider {...settings} className='slider__box'>
            {sertifikat.map((item, i)=>(
              <div className='slider__img-box'>
                <img src={item} alt="Sertifikat" />
              </div>
            ))}
          </Slider>
        </div>
        </section>
      </Fragment>
    )
  }
}

export default Sertifikat