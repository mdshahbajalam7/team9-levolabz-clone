import React from "react";
import Image from "next/image";
import BuildCareer from "../public/image/career/BuildCareer.webp";
const Career = () => {
  return (
    <>
      <div className="w-[100%] bg-gray-100 mt-4 lg:h-[450px] md:h-[750px] sm:h-[750px]">
        <div className="lg:w-[75%] md:w-[90%]  flex lg:flex-row justify-around md:flex-col-reverse  sm:flex-col-reverse sm:pl-5 md:pl-4 md:mx-auto">
          <div className="mt-14 md:-ml-8 ">
            <h2 className=" text-[16px]  font-semibold text-[#737373]  mb-2 capitalize">
              DEVELOPERS
            </h2>
            <h3 className="text-4xl font-semibold md:text-[30px] mt-3 mb-2 capitalize sm:wd-[100%] sm:text-[24px]">
              Build a remote career
            </h3>
            <p className="md:w-[100%] lg:text-lg lg:w-[80%] md:text-lg  sm:w-[100%] sm:text-[18px] ">
              Get AI-matched to high-paying U.S. tech jobs. Once you sign up,
              you’ll tell us about your past work experience and take our
              vetting tests. Once you pass, our AI-powered deep-vetting
              platform—the Talent Cloud—matches you with opportunities from our
              clients.
            </p>
            <button className="lg:w-[30%] w-[45%] h-[50px] bg-[#2e6edf] rounded-lg text-[#ffffff] mt-14 md:mt-4 sm:mt-5  md:w-[30%] lg:mt-10 sm:w-[60%]">
              Apply for Jobs
            </button>
          </div>
        <div className="lg:w-[120%] lg:mr-[180px] sm:mr-[0] sm:w-[100%]">
        <Image
            src={BuildCareer}
            alt="BuildCareer"
            className="mt-8 lg:mt-11 mx-auto lg:w-[100%]  md:w-[411.6px] md:h-[352.8px] md:ml-16"
          />
        </div>
        </div>
      </div>
    </>
  );
};

export default Career;
