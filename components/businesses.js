import React from "react";
import Image from "next/image";
import speed from "../public/image/Businesses/speed.webp";
import Stopwatch from "../public/image/Businesses/Stopwatch.webp";
import thumbsup from "../public/image/Businesses/thumbsup.webp";
function Businesses() {
  return (
    <div>
      <div className="lg:w-[100%] md:w-[100%] sm:w-[98%] bg-gray-100 mt-4 lg:h-[450px] md:h-[400px] sm:h-[800px] py-5">
        <h3 className="md:ml-5 font-serif lg:w-[431.23px] lg:text-[28px] lg:mx-[auto] lg:mt-[40px] md:w-[90%] md:text-[28px] md:flex md:justify-start sm:w-[97%] sm:text-[24px] sm:ml-3 sm:flex sm:justify-start">
          Why businesses choose Turing
        </h3>
        <div className="lg:w-[80%] lg:mx-[auto] lg:grid lg:grid-cols-3 lg:justify-between lg:ga-[10px] lg:my-14 md:w-[95%] md:grid md:grid-cols-3 md:justify-start md:gap-[10px] md:mt-14 sm:w-[95%] sm:grid sm:grid-cols-1 sm:justify-start sm:gap-[10px] sm:mt-14">
          <div className="lg:w-[55%]  md:w-[80%] md:mt-5 md:ml-5 sm:w-[55%] sm:mt-5 sm:ml-5">
            <div className="lg:flex md:flex sm:flex">
              <Image
                src={speed}
                alt="speed"
                className="lg:w-[48px] lg:h-[48px] md:w-[48px] md:h-[48px] sm:w-[48px] sm:h-[48px] "
              />
              <h3 className="font-serif lg:text-[18px] lg:mt-[16px] lg:ml-[10px] md:text-[18px] md:mt-[16px] md:ml-[10px] sm:text-[18px] sm:mt-[16px] sm:ml-[10px]">
                Speed
              </h3>
            </div>
            <p className="font-sans lg:mt-[12px] lg:text-[40px] lg:text-[#1fb70b] lg:m-[0 0 8px] sm:text-[20px] sm:mt-[12px] sm:text-[#1fb70b]">
              4 days
            </p>
            <p className="font-serif lg:text-[22px] md:text-[22px] sm:text-[20px] ">
              to fill{" "}
              <span className="font-serif lg:text-[22px] lg:text-[#1fb70b] sm:text-[20px] sm:text-[#1fb70b] md:text-[22px] md:text-[#1fb70b]">
                most roles
              </span>
              , sometimes same day.
            </p>
          </div>
          <div className="lg:w-[100%] md:ml-5 sm:ml-5 md:w-[100%] md:mt-[20px] sm:w-[100%] sm:mt-[20px]">
            <div className="lg:flex md:flex sm:flex">
              <Image
                src={Stopwatch}
                alt="Stopwatch"
                className="lg:w-[48px] lg:h-[48px] md:w-[48px] md:h-[48px] sm:w-[48px] sm:h-[48px] "
              />
              <h3 className="font-serif lg:text-[18px] lg:mt-[16px] lg:ml-[10px] md:text-[18px] md:mt-[16px] md:ml-[10px] sm:text-[18px] sm:mt-[16px] sm:ml-[10px]">
                Time Saved
              </h3>
            </div>
            <p className="font-sans lg:mt-[12px] lg:text-[40px] lg:text-[#1fb70b] lg:m-[0 0 8px] sm:text-[20px] sm:mt-[12px] sm:text-[#1fb70b]">
              50+ hours
            </p>
            <p className="font-serif lg:text-[22px] md:text-[22px] sm:text-[20px]">
              of engineering team time{" "}
            </p>
            <p className="font-serif lg:text-[22px] md:text-[22px] sm:text-[20px]">
              saved{" "}
              <span className="font-serif lg:text-[22px] lg:text-[#1fb70b] md:text-[22px] md:text-[#1fb70b] sm:text-[22px] sm:text-[#1fb70b]">
              per developer 
              </span> on interviewing.
            </p>
          </div>
          <div className=" lg:ml-[30%]  lg:w-[40%] md:ml-[40%] sm:ml-5 md:w-[50%] md:mt-[20px] sm:w-[40%] sm:mt-[20px] ">
            <div className="lg:flex md:flex sm:flex">
              <Image
                src={thumbsup}
                alt="thumbsup"
                className="lg:w-[48px] lg:h-[48px] md:w-[48px] md:h-[48px] sm:w-[48px] sm:h-[48px] "
              />
              <h3 className="font-serif lg:text-[18px] lg:mt-[16px] lg:ml-[10px] md:text-[18px] md:mt-[16px] md:ml-[10px] sm:text-[18px] sm:mt-[16px] sm:ml-[10px]">
                Retention
              </h3>
            </div>
            <p className="font-sans lg:mt-[12px] lg:text-[40px] lg:text-[#1fb70b] lg:m-[0 0 8px] sm:text-[20px] sm:mt-[12px] sm:text-[#1fb70b]">
              97%
            </p>
            <p className="font-serif lg:text-[22px] md:text-[22px] sm:text-[20px]">
              engagement
            </p>
            <p className="font-serif lg:text-[22px] lg:text-[#1fb70b] md:text-[22px] md:text-[#1fb70b] sm:text-[22px] sm:text-[#1fb70b]">
              success rate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Businesses;
