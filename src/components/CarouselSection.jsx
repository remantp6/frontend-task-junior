import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";

const CarouselSection = () => {
  return (
    <>
      <Carousel className="relative">
        <Carousel.Item>
          <img
            className="d-block w-100 h-[740px] object-cover"
            src={slider1}
            alt="First slide"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 top-2/3 w-[1100px]">
            <Carousel.Caption>
              <h1 className="text-5xl font-bold pb-8">
                Transforming Ideas into Reality
              </h1>
              <p className="text-3xl font-bold pb-8">
                Crafting Innovative Solutions for Your Business Needs
              </p>
              <button className="bg-[#000235] px-8 py-3 text-lg hover:bg-[#001A48] transition duration-300 ease-in-out">
                Explore Our Solutions
              </button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-[740px] object-cover"
            src={slider2}
            alt="Second slide"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 top-2/3 w-[1100px]">
            <Carousel.Caption>
              <h1 className="text-5xl font-bold pb-8">
                Empowering Your Digital Journey
              </h1>
              <p className="text-3xl font-bold pb-8">
                Driving Growth Through Technology Excellence
              </p>
              <button className="bg-[#000235] px-8 py-3 text-lg hover:bg-[#001A48] transition duration-300 ease-in-out">
                Learn More
              </button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default CarouselSection;
