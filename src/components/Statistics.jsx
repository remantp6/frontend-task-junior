import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Statistics = () => {
  const [counterStart, setCounterStart] = useState(false);
 
  return (
    <ScrollTrigger
      onEnter={() => setCounterStart(true)}
      onExit={() => setCounterStart(false)}
    >
      <div className="bg-gray-100 py-24">
        <div className="container mx-auto">
          <h2 className="text-center text-2xl font-bold mb-4 pb-16">
            Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg text-center">
              <h3 className="text-xl font-normal">No of Clients</h3>
              <p className="text-[#000245] text-lg font-bold">
                {counterStart && (
                  <CountUp start={0} end={1000} duration={3} delay={0} />
                )}
                +
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <h3 className="text-xl font-normal">No of Projects Completed</h3>
              <p className="text-[#000245] text-lg font-bold">
                {counterStart && (
                  <CountUp start={0} end={500} duration={3} delay={0} />
                )}
                +
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <h3 className="text-xl font-normal">No of Products</h3>
              <p className="text-[#000245] text-lg font-bold">
                {counterStart && (
                  <CountUp start={0} end={50} duration={3} delay={0} />
                )}
                +
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Statistics;
