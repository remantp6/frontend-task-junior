import React from "react";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";

const Testimonials = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl text-center font-bold pb-16">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg mx-auto w-[350px] h-auto">
            <img
              src={avatar1}
              alt="Testimonial 1"
              className="w-[260px] h-auto mx-auto rounded-full"
            />
            <p className="text-gray-800 font-semibold mt-2 text-center">
              John Doe
            </p>
            <p className="text-gray-700 text-center">
              "Outstanding work! transformed our vision into reality."
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg mx-auto w-[350px] h-auto">
            <img
              src={avatar2}
              alt="Testimonial 2"
              className="w-[260px] h-auto mx-auto rounded-full"
            />
            <p className="text-gray-800 font-semibold mt-2 text-center">
              Jane Doe
            </p>
            <p className="text-gray-700 text-center">
              "Highly satisfied with the quality of service provided "
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg mx-auto w-[350px] h-auto">
            <img
              src={avatar3}
              alt="Testimonial 3"
              className="w-[260px] h-auto mx-auto rounded-full"
            />
            <p className="text-gray-800 font-semibold mt-2 text-center">
              Alice Smith
            </p>
            <p className="text-gray-700 text-center">
              "Exceptional expertise and support. Highly recommend!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
