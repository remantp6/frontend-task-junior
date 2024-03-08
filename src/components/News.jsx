import React from "react";
import softwareProduct from "../assets/software_product.jpg";
import partnership from "../assets/partnership_image.jpg";
import recognition from "../assets/recognition-up.jpg";

const News = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold pb-16 text-center">News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg">
            <img
              src={softwareProduct}
              alt="News 1"
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="ps-2">
              <h3 className="text-lg font-semi-bold mt-2">
                Exciting Product Launch...
              </h3>
              <p className="text-black text-[16px] font-semi-bold pb-1">
                March 12, 2024
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg">
            <img
              src={partnership}
              alt="News 2"
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="ps-2">
              <h3 className="text-lg font-semi-bold mt-2">
                Partnership Announcement...
              </h3>
              <p className="text-black text-[16px] font-semi-bold pb-1">
                March 16, 2024
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg">
            <img
              src={recognition}
              alt="News 3"
              className="w-full h-[210px] object-cover rounded-t-lg"
            />
            <div className="ps-2">
              <h3 className="text-lg font-semi-bold">
                Industry Recognition...
              </h3>
              <p className="text-black text-[16px] font-semi-bold pb-2">
                April 2, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
