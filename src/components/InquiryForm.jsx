import React from "react";
import { MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const InquiryForm = () => {
  return (
    <div className="py-12 lg:py-24">
      <div className="container">
        <h2 className="text-white text-4xl font-bold pb-3">Get in Touch</h2>
        <div className="flex flex-row justify-between">
          <div>
            <p className="text-white text-xl pe-2 lg:pe-32">
              Please feel welcome to visit our space anytime and see what our
              community has built.
            </p>
            <div className="flex flex-row items-center text-white text-lg mt-12">
              <MdOutlineEmail />
              <p className="ps-2 pe-2 md:pe-0">company@gmail.com</p>
            </div>
            <div className="flex flex-row items-center text-white text-lg my-8">
              <FaPhoneAlt />
              <p className="ps-2">+ 082-523431</p>
            </div>
            <div className="flex flex-row items-center text-white text-lg my-8">
              <MdLocationOn />
              <p className="ps-2">KTM, Nepal</p>
            </div>
          </div>

          <form className="lg:w-2/4">
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border-gray-300 rounded-md p-2 mb-4"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-gray-300 rounded-md p-2 mb-4"
            />
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border-gray-300 rounded-md p-2 mb-4"
            />
            <textarea
              placeholder="Write your message here!!"
              className="w-full border-gray-300 rounded-md p-2 mb-4"
            ></textarea>
            <button
              type="submit"
              className="border border-white mt-3 px-6 py-2 text-lg hover:bg-[#131727] text-white transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;
