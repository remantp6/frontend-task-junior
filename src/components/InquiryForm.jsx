import React from "react";

const InquiryForm = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto">
        <h2 className="text-white text-4xl font-bold pb-16 text-center">Get in Touch</h2>
        <form className="w-2/5 mx-auto">
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full border-gray-300 rounded-md p-2 mb-2"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border-gray-300 rounded-md p-2 mb-2"
          />
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full border-gray-300 rounded-md p-2 mb-2"
          />
          <textarea
            placeholder="Write your message here!!"
            className="w-full border-gray-300 rounded-md p-2 mb-2"
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
  );
};

export default InquiryForm;
