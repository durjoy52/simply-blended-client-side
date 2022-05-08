import React from "react";
import { Carousel } from "react-bootstrap";
import banner from "../../../images/banner/banner.png";
import banner1 from "../../../images/banner/banner1.png";
import banner2 from "../../../images/banner/banner2.png";
import './Banner.css';
const Banner = () => {
  return (
    <div className="banner-section flex-wrap d-flex justify-content-around align-items-center">
        <div className="banner-left">
            <span>Healthy and Delicious Juices</span>
            <h2>Fulfill All Your Vitamin Needs By Drinking Juice</h2>
          <p>Get freshness delivered on your doorstep</p>
            <button>Get started</button>
        </div>
        <div className="banner-right ">
        <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={banner} alt="First slide" />
        <Carousel.Caption>
          <p className="carousel">Organic and Fresh Juice</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="Second slide" />

        <Carousel.Caption>
        <p className="carousel">Organic and Fresh Juice</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Third slide" />

        <Carousel.Caption>
        <p className="carousel">Organic and Fresh Juice</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  );
};

export default Banner;
