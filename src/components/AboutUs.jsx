import React from "react";
import company from "../assets/company.jpg";

const AboutUs = () => {
  return (
    <div className="w-3/4 mx-auto">
      <div className="py-20">
        <h2 className="text-2xl font-bold pb-16 text-center">About Us</h2>
        <div className="flex flex-row">
          <img src={company} alt="Company" className="w-1/3 rounded-lg" />
          <div className="ps-16">
            <p className="text-black text-justify">
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
            <button className="bg-[#000235] mt-3 px-6 py-2 text-white text-lg hover:bg-[#001A48] transition duration-300 ease-in-out">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
