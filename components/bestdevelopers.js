import React from "react";
import Image from "next/image";
import steps from "../public/image/Bestdevelopers/steps.webp";
import profile_check from "../public/image/Bestdevelopers/profile_check.webp";
import exclusive from "../public/image/Bestdevelopers/exclusive.webp";
import income from "../public/image/Bestdevelopers/income.webp";
function Bestdevelopers() {
  return (
    <>
      <div className="lg:w-[90%] md:w-[90%] sm:w-[90%] grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mx-auto md:pl-10 sm:pl-10 sm:pb-10">
        <div className="pb-10 mt-24 lg:ml-[%] lg:w-[85%]  md:w-[70%] sm:-ml-10 md:ml-[10%]">
          <Image
            src={steps}
            alt="steps"
            width={500}
            height={500}
            className=" w-[100%] lg:h-[100%] sm:ml-1"
          />
        </div>
        <div className="lg:w-[90%] lg:mt-12 md:w-[100%] sm:w-[105.8%] lg:ml-[5%] sm:-ml-10">
          <div className="lg:w-[557.8px] md:w-[95%] md:mt-[10px] sm:w-[110%]">
            <h2 className="sm:font-semibold lg:text-[36px] md:w-[100%] md:text-[20px] sm:text-[25px]">
              Why are the best developers joining Turing?{" "}
              <span className=" lg:font-[36px] lg:text-[#2e6edf] md:w-[100%] md:font-[36px] md:text-[#2e6edf] sm:font-[36px] sm:text-[#2e6edf]">
                Because they want careers, not gigs.
              </span>
            </h2>
          </div>
          <div className="lg:flex lg:mt-[30px] md:flex md:mt-[30px] sm:flex sm:mt-[30px]">
            <Image
              src={profile_check}
              alt="profile_check"
              className="lg:w-[48px] lg:h-[48px] md:w-[40px] md:h-[40px] sm:w-[40px] sm:h-[40px]"
            />
            <div className="lg:text-[20px] lg:ml-5 lg:mt-2 md:text-[20px] md:ml-5  sm:text-[18px] sm:ml-5  sm:py-2 lg:w-[100%] md:w-[100%] sm:w-[100%]">
              Vetted once, eligible for life
            </div>
          </div>
          <div className="lg:flex lg:mt-[30px] lg:w-[100%] md:flex md:mt-[30px] sm:flex sm:mt-[30px]">
            <Image
              src={exclusive}
              alt="exclusive"
              className="lg:w-[48px] lg:h-[48px] md:w-[40px] md:h-[40px] sm:w-[40px] sm:h-[40px]"
            />
            <div className=" lg:text-[20px] lg:ml-5 lg:mt-2 md:text-[20px] md:ml-5 md:mt-1 sm:text-[16px] sm:ml-5 sm:mt-  sm:w-[150%] md:w-[100%] lg:w-[100%">
              Exclusive Turing developer success support
            </div>
          </div>
          <div className="lg:flex lg:mt-[30px]  md:flex md:mt-[30px] sm:flex sm:mt-[30px] sm:w-[100%] md:w-[100%] lg:w-[100%]">
            <Image
              src={income}
              alt="income"
              className="lg:w-[48px] lg:h-[48px] md:w-[40px] md:h-[40px] sm:w-[40px] sm:h-[40px]"
            />
            <div className=" lg:text-[20px] lg:ml-5 lg:mt-2 md:text-[20px] md:ml-5 md:mt-1 sm:text-[16px] sm:ml-5  sm:-w[200%]">
              Income stability thanks to 99% rematch rate
            </div>
          </div>
          <button className="font-semibold w-[30%] h-[50px] bg-[#2e6edf] rounded-lg text-[#ffffff] mt-14 lg:w-[35%] md:w-[30%]  sm:w-[60%]">
            Apply for Jobs
          </button>
        </div>
      </div>
    </>
  );
}

export default Bestdevelopers;
