import React from "react";
import Carousel from "react-bootstrap/Carousel";
import demo from "../assets/demo.jpg";
import demo2 from "../assets/demo2.jpg";
import NavBar from "./NavBar";

const CarouselSection = () => {
  return (
    <>
    <NavBar/>
      <Carousel className="relative">
      
        <Carousel.Item>
          <img
            className="d-block lg:w-screen lg:h-screen object-cover blur-[2px]"
            src={demo}
            alt="First slide"
          />
          <div className="absolute left-1/2 transform -translate-x-1/2 top-2/3 w-[1100px] pt-6">
            <Carousel.Caption>
              <h1 className="text-5xl font-bold pb-8 text-white">
                Transforming Ideas into Reality
              </h1>
              <p className="text-3xl font-bold pb-8 text-white">
                Crafting Innovative Solutions for Your Business Needs
              </p>
              <button className="border border-white px-8 py-3 text-lg transition duration-300 ease-in-out">
                Explore Our Solutions
              </button>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block lg:w-screen lg:h-screen object-cover blur-sm"
            src={demo2}
            alt="Second slide"
          />
          <div className="absolute left-1/2 transform -translate-x-1/2 top-2/3 w-[1100px] pt-6 ">
            <Carousel.Caption>
              <h1 className="text-5xl font-bold pb-8 text-white">
                Empowering Your Digital Journey
              </h1>
              <p className="text-3xl font-bold pb-8 text-white">
                Driving Growth Through Technology Excellence
              </p>
              <button className="border border-white px-8 py-3 text-lg transition duration-300 ease-in-out">
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
