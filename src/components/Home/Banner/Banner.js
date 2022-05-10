import React from "react";
import { Carousel } from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-section flex-wrap d-flex justify-content-around align-items-center mb-4">
      <div className="banner-left">
        <span>Healthy and Delicious Juices</span>
        <h2>Fulfill All Your Vitamin Needs By Drinking Juice</h2>
        <button>
          <a href="#inventory">Get started <BsFillArrowRightCircleFill /></a>
        </button>
      </div>
      <div className="banner-right ">
        <Carousel>
          <Carousel.Item interval={1000} className="carousel-item">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1622597468666-27cb9cae0e45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>ORGANIC AND FRESH FOOD</h3>
              <p>Get freshness delivered on your doorstep</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500} className="carousel-item">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1622597468620-656aa1f981ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>ORGANIC AND FRESH FOOD</h3>
              <p>Get freshness delivered on your doorstep</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1622597467821-df79dcb4f94d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>ORGANIC AND FRESH FOOD</h3>
              <p>Get freshness delivered on your doorstep</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
