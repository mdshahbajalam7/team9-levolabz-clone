import React from "react";
import Image from "next/image";
import map from "../public/image/Developers/dotsmap.webp";

function Developers() {
  return (
    <>
      <div className="pt-10 w-[100%] lg:h-[620px]  md:h-[600px] sm:h-[645px]  bg-gradient-to-r from-[#4c63c4] to-[#3e85e2]">
        <div className="mx-[auto] lg:w-[80%] py-[6%]  lg:grid lg:grid-cols-2 lg:items-center lg:gap-0 md:w-[90%]  md:grid md:grid-cols-2 md:items-center md:gap-0 sm:w-[90%]  sm:grid sm:grid-cols-2 sm:items-center sm:gap-0">
          <div className="z-10 lg:w-[100%] mt-[0%]">
            <p className=" leading-tight font-sans lg:mt-1 lg:text-[48px] text-[#ffffff] md:mt-3 md:text-[48px] sm:w-[200%] sm:mt-3 sm:text-[36px]">
              <span className="font-semibold">2 Million+ </span> developers{" "}
              <br />
              from
              <span className="font-semibold">{" 150 countries "}</span> <br />
              have already joined Turing
            </p>
            <div className="lg:mt-[5%] md:mt-[5%] sm:mt-[20%] lg:w-[90%] lg:flex lg:justify-between md:w-[200%] md:flex md:justify-between sm:w-[200%] sm:flex sm:justify-between">
              <div>
                <p className="text-[#ffffff] sm:text-[41px] md:text-[51px] lg:text-[51px]">
                  15+
                </p>
                <span className="text-[#ffffff] lg:text-[21px] md:text-[21px] sm:text-[14px] font-serif">
                  job types
                </span>
              </div>
              <div>
                <p className="text-[#ffffff] sm:text-[41px] md:text-[51px] lg:text-[51px]">
                  100+
                </p>
                <span className="text-[#ffffff] lg:text-[21px] md:text-[21px] sm:text-[14px]  font-serif">
                  Technologies
                </span>
              </div>
              <div>
                <p className="text-[#ffffff] sm:text-[41px] md:text-[51px] lg:text-[51px]">
                  7+
                </p>
                <span className="text-[#ffffff] lg:text-[21px] md:text-[21px] sm:text-[14px]  font-serif">
                  Seniority levels
                </span>
              </div>
            </div>
            <div className="lg:w-[70%] lg:flex gap-5 lg:justify-between lg:text-center lg:mt-8 md:w-[100%] md:text-center md:mt-8  sm:w-[100%] sm:text-center sm:mt-8 ">
              <div className="md:w-[100%]">
                <button className="border font-semibold sm:w-[200%] sm:h-[50px]  md:w-[200%] md:h-[50px] lg:w-[188.66px] lg:h-[50px] bg-white text-[16px] text-[#3e85e2] border-none rounded-lg ">
                  Hire Developers
                </button>
              </div>
              <div>
                <button className="font-semibold sm:w-[200%] sm:h-[50px] md:w-[200%] md:h-[50px] lg:w-[188.66px] lg:h-[50px] text-[16px] text-[#ffffff] border sm:mt-5 rounded-lg  lg:mt-0">
                  Apply for jobs
                </button>
              </div>
            </div>
          </div>
          <div className=" lg:mt-16 md:mt-10 sm:-mt-[30%] lg:ml-[30%] lg:h-[480px] overflow-hidden absolute">
            <Image
              src={map}
              className="scale-x-110 lg:w-[100%] lg:h-[100%] inset-0"
              alt="map"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Developers;
