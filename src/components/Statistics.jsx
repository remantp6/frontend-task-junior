import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Statistics = () => {
  const [counterStart, setCounterStart] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterStart(true)}
      onExit={() => setCounterStart(false)}
    >
      <div className="py-24">
        <div className="container mx-auto">
          <h2 className="text-white text-center text-4xl font-bold mb-4 pb-16">
            Accomplishments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#7b7b7e] backdrop-filter backdrop-blur-lg bg-opacity-15 px-4 py-20 rounded-lg text-center">
              <h3 className="text-white text-3xl font-normal">No of Clients</h3>
              <p className="text-white text-3xl pt-4 font-bold">
                {counterStart && (
                  <CountUp start={0} end={1000} duration={3} delay={0} />
                )}
                +
              </p>
            </div>
            <div className="bg-[#7b7b7e] backdrop-filter backdrop-blur-lg bg-opacity-15 px-4 py-20 rounded-lg text-center">
              <h3 className="text-white text-3xl font-normal">
                No of Projects Completed
              </h3>
              <p className="text-white text-3xl pt-4 font-bold">
                {counterStart && (
                  <CountUp start={0} end={500} duration={3} delay={0} />
                )}
                +
              </p>
            </div>
            <div className="bg-[#7b7b7e] backdrop-filter backdrop-blur-lg bg-opacity-15 px-4 py-20 rounded-lg text-center">
              <h3 className="text-white text-3xl font-normal">
                No of Products
              </h3>
              <p className="text-white text-3xl pt-4 font-bold">
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
