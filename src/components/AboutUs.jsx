import React from "react";
import company from "../assets/company.jpg";

const AboutUs = () => {
  return (
    <div className="w-3/4 mx-auto">
      <div className="py-12 lg:py-24">
        <h2 className="text-4xl font-bold pb-10 lg:pb-16 text-center text-white">
          About Us
        </h2>
        <div className="flex flex-col lg:flex-row">
          <img src={company} alt="Company" className="lg:w-1/3 rounded-lg" />
          <div className="pt-2 lg:pt-0 lg:ps-16">
            <p className="text-white text-justify">
              At our company, we are driven by a relentless passion for
              innovation and technology. With a team of skilled developers and
              engineers, we specialize in crafting tailored software solutions
              that address the unique challenges faced by businesses today. Our
              commitment to excellence and customer satisfaction fuels our
              continuous pursuit of cutting-edge solutions across web, mobile,
              and enterprise platforms. We strive to empower our clients with
              transformative technology, leveraging the latest advancements in
              AI, IoT, and cloud computing.{" "}
            </p>
            <button className="border border-white mt-3 px-6 py-2 text-lg hover:bg-[#131727] text-white transition duration-300 ease-in-out">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
