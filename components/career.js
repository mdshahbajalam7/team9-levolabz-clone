import React from "react";
import Image from "next/image";
import BuildCareer from "../public/image/career/BuildCareer.webp";
const Career = () => {
  return (
    <>
      <div className="w-[100%] bg-gray-100 mt-4 lg:h-[450px] md:h-[780px] sm:h-[750px]">
        <div className="lg:w-[75%] md:w-[90%]  flex lg:flex-row justify-around md:flex-col-reverse  sm:flex-col-reverse sm:pl-5 md:pl-4 md:mx-auto">
          <div className="mt-14 md:-ml-8 ">
            <h2 className=" text-[16px]  font-semibold text-[#737373]  mb-2 capitalize">
              DEVELOPERS
            </h2>
            <h3 className="text-4xl font-semibold md:text-[30px] mt-3 mb-2 capitalize sm:wd-[100%] sm:text-[24px]">
              Build a remote career
            </h3>
            <p className="md:w-[100%] lg:text-lg lg:w-[90%] md:text-lg  sm:w-[100%] sm:text-[16px] ">
              Get AI-matched to high-paying U.S. tech jobs. Once you sign up,
              you’ll tell us about your past work experience and take our
              vetting tests. Once you pass, our AI-powered deep-vetting
              platform—the Talent Cloud—matches you with opportunities from our
              clients.
            </p>
            <button className="text-xl font-semibold lg:w-[35%] w-[45%] h-[50px] bg-[#2e6edf] rounded-lg text-[#ffffff] mt-14 md:mt-6 sm:mt-5  md:w-[35%] lg:mt-10 sm:w-[60%]">
              Apply for Jobs
            </button>
          </div>
          <div  className="lg:w-[130%] lg:mr-[180px] sm:mr-[0] sm:mt-10 sm:ml-2 sm:w-[90%] lg:mt-12 lg:ml-5 md:w-[75%] md:mt-10 md:ml-16">
            <Image src={BuildCareer} alt="BuildCareer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
