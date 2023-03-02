import React from "react";
import Image from "next/image";
import hero_easy from "../public/image/Turing/hero_easy.webp";
import Inteligent_Vetting from "../public/image/Turing/Inteligent_Vetting.webp";
import { AiOutlinePlayCircle } from "react-icons/ai";

function Turing() {
  return (
    <>
      <div className="lg:w-[76.5%] lg:mx-[auto] lg:mt-12 md:w-[600.2px] md:ml-8 md:text-[20px] sm:w-[343.2px] sm:text-[20px] sm:mt-20 sm:ml-8">
        <h2 className="  sm:font-semibold  lg:text-[40px] sm:-ml-4 sm:text-[22px]">
          Turing combines global reach and AI to deliver your ideal remote
          developers
        </h2>
      </div>
      <div className="lg:w-[86%] mx-[auto] lg:grid lg:grid-cols-3 lg:gap-3 lg:mt-14 lg:justify-items-center md:w-[95%] md:grid md:grid-cols-1 md:gap-3 md:justify-items-center md:pt-3 sm:w-[95%] sm:grid sm:grid-cols-1 sm:gap-3 sm:justify-items-center">
        <div className="overflow-hidden shadow-md lg:w-[80%] lg:h-[523px] lg:bg-white lg:rounded-2xl md:w-[100%] md:h-[700px] md:mx-[auto] md:bg-white md:rounded-2xl lg:mt-0  md:mt-10 sm:mt-10 sm:w-[100%] sm:h-[560px] sm:bg-white sm:rounded-2xl">
          <div className="lg:flex lg:justify-center lg:items-center lg:mt-5">
            <Image
              src={Inteligent_Vetting}
              alt="Inteligent_Vetting"
              className="lg:w-[300px] lg:h-[220px] md:w-[90%] md:mx-[auto] sm:mx-[auto] md:h-[450px] sm:w-[85%] sm:h-[270px] sm:flex sm:items-center"
            />
          </div>
          <div className="lg:ml-[10px]">
            <h5 className=" sm:font-semibold  md:font-semibold lg:text-[20px] lg:m-[24px] md:text-[19px] md:w-[60%] md:ml-5 md:mx-[auto] sm:text-[19px] sm:w-[60%] sm:ml-5 sm:mx-[auto]">
              Tailored to your <br/> requirements
            </h5>
          </div>
          <div className="lg:ml-[10px]">
            <ul className="list-disc ml-5">
              <li className=" lg:text-[16px] lg:mt-[10px] md:ml-5 md:text-[16px] sm:ml-5 md:mt-3 sm:mt-3">
                Role
              </li>
              <li className=" lg:text-[16px] lg:mt-[10px] md:ml-5 sm:ml-5 md:text-[16px] md:mt-3 sm:mt-3">
                Tech Stack
              </li>
              <li className=" lg:text-[16px] lg:mt-[10px]  md:ml-5 sm:ml-5 md:text-[16px] md:mt-3 sm:mt-3">
                Seniority Level
              </li>
            </ul>
          </div>
        </div>
        <div className="overflow-hidden lg:rounded-2xl md:rounded-2xl sm:rounded-2xl sm:shadow-md  lg:w-[115%] lg:h-[520px] lg:bg-white rounded-3xl lg:mt-0 md:w-[100%] md:bg-white sm:w-[100%] sm:h-[550px] sm:mt-10 sm:bg-white">
          <div className="w-[90%] mx-[auto] text-center h-[50px] mt-4">
            <h5 className=" text-[20px] lg: md:font-bold sm:font-bold">
              {" "}
              Our <span className="text-[#2e6edf]">
                Talent Cloud
              </span> platform <br /> leverages
            </h5>
          </div>
          <ul className="w-[90%] h-[50px] mx-[auto] mt-[20px] item-center font-bold">
            <div className="lg:w-[80%] lg:mx-auto lg:flex lg:justify-between lg:gap-5 lg:mt-0 lg:h-[50px] lg:bg-[#EEF6FE] rounded-lg items-center lg:p-6 md:w-[90%] md:mx-auto md:flex md:justify-between md:gap-5 md:mt-0 md:h-[50px] md:bg-[#f9f9f9] md:p-6 sm:w-[90%] sm:mx-auto sm:flex sm:justify-between sm:gap-5 sm:mt-0 sm:h-[50px] sm:bg-[#f9f9f9] sm:p-6">
              <div>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16V16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8V8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56V19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z"
                    fill="#2E6EDF"
                  ></path>
                </svg>
              </div>
              <div className="w-[100%]">
                <span className="text-[#2e6edf]  text-[16px]">
                  Global Sourcing
                </span>
              </div>
            </div>
          </ul>
          <ul className="w-[90%] h-[50px] mx-[auto] mt-[20px] item-center font-bold">
            <div className="lg:w-[80%] lg:mx-auto lg:flex lg:justify-between lg:gap-5 lg:mt-0 lg:h-[50px] lg:bg-[#EEF6FE] rounded-lg items-center lg:p-6 md:w-[90%] md:mx-auto md:flex md:justify-between md:gap-5 md:mt-0 md:h-[50px] md:bg-[#f9f9f9] md:p-6 sm:w-[90%] sm:mx-auto sm:flex sm:justify-between sm:gap-5 sm:mt-0 sm:h-[50px] sm:bg-[#f9f9f9] sm:p-6">
              <div>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 7H15V4C15 2.9 14.1 2 13 2H11C9.9 2 9 2.9 9 4V7H4C2.9 7 2 7.9 2 9V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V9C22 7.9 21.1 7 20 7ZM9 12C9.83 12 10.5 12.67 10.5 13.5C10.5 14.33 9.83 15 9 15C8.17 15 7.5 14.33 7.5 13.5C7.5 12.67 8.17 12 9 12ZM12 18H6V17.57C6 16.97 6.36 16.42 6.92 16.18C7.56 15.9 8.26 15.75 9 15.75C9.74 15.75 10.44 15.9 11.08 16.18C11.63 16.42 12 16.96 12 17.57V18ZM13 9H11V4H13V9ZM17.25 16.5H14.75C14.34 16.5 14 16.16 14 15.75C14 15.34 14.34 15 14.75 15H17.25C17.66 15 18 15.34 18 15.75C18 16.16 17.66 16.5 17.25 16.5ZM17.25 13.5H14.75C14.34 13.5 14 13.16 14 12.75C14 12.34 14.34 12 14.75 12H17.25C17.66 12 18 12.34 18 12.75C18 13.16 17.66 13.5 17.25 13.5Z"
                    fill="#2E6EDF"
                  ></path>
                </svg>
              </div>
              <div className="w-[100%] ">
                <span className="text-[#2e6edf]  text-[16px]">
                  Intelligent Vetting
                </span>
              </div>
            </div>
          </ul>
          <ul className="w-[90%] h-[50px] mx-[auto] mt-[20px] item-center font-bold">
            <div className="lg:w-[80%] lg:mx-auto lg:flex lg:justify-between lg:gap-5 lg:mt-0 lg:h-[50px] lg:bg-[#EEF6FE] rounded-lg items-center lg:p-6 md:w-[90%] md:mx-auto md:flex md:justify-between md:gap-5 md:mt-0 md:h-[50px] md:bg-[#f9f9f9] md:p-6 sm:w-[90%] sm:mx-auto sm:flex sm:justify-between sm:gap-5 sm:mt-0 sm:h-[50px] sm:bg-[#f9f9f9] sm:p-6">
              <div>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17 20H4V7C4 6.45 3.55 6 3 6C2.45 6 2 6.45 2 7V20C2 21.1 2.9 22 4 22H17C17.55 22 18 21.55 18 21C18 20.45 17.55 20 17 20ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM14 5C15.66 5 17 6.34 17 8C17 9.66 15.66 11 14 11C12.34 11 11 9.66 11 8C11 6.34 12.34 5 14 5ZM7.76 16C9.23 14.17 11.47 13 14 13C16.53 13 18.77 14.17 20.24 16H7.76Z"
                    fill="#2E6EDF"
                  ></path>
                </svg>
              </div>
              <div className="w-[100%] ">
                <span className="text-[#2e6edf]  text-[16px]">
                  Extensive Matching
                </span>
              </div>
            </div>
          </ul>
          <ul className="w-[90%] h-[50px] mx-[auto] mt-[20px] item-center font-bold">
            <div className="lg:w-[80%] lg:mx-auto lg:flex lg:justify-between lg:gap-5 lg:mt-0 lg:h-[50px] lg:bg-[#EEF6FE] rounded-lg items-center lg:p-6 md:w-[90%] md:mx-auto md:flex md:justify-between md:gap-5 md:mt-0 md:h-[50px] md:bg-[#f9f9f9] md:p-6 sm:w-[90%] sm:mx-auto sm:flex sm:justify-between sm:gap-5 sm:mt-0 sm:h-[50px] sm:bg-[#f9f9f9] sm:p-6">
              <div>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.41 7.41L14.58 2.58C14.21 2.21 13.7 2 13.17 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8.83C20 8.3 19.79 7.79 19.41 7.41ZM10.23 17.29L8.11 15.17C7.72 14.78 7.72 14.15 8.11 13.76C8.5 13.37 9.13 13.37 9.52 13.76L10.93 15.17L14.47 11.63C14.86 11.24 15.49 11.24 15.88 11.63C16.27 12.02 16.27 12.65 15.88 13.04L11.64 17.28C11.26 17.68 10.62 17.68 10.23 17.29ZM14 9C13.45 9 13 8.55 13 8V3.5L18.5 9H14Z"
                    fill="#2E6EDF"
                  ></path>
                </svg>
              </div>
              <div className="w-[100%] ">
                <span className="text-[#2e6edf]  text-[16px]">
                  Payments Compliance
                </span>
              </div>
            </div>
          </ul>
          <ul className="w-[90%] h-[50px] mx-[auto] mt-[20px] item-center font-bold">
            <div className="lg:w-[80%] lg:mx-auto lg:flex lg:justify-between lg:gap-5 lg:mt-0 lg:h-[50px] lg:bg-[#EEF6FE] rounded-lg items-center lg:p-6 md:w-[90%] md:mx-auto md:flex md:justify-between md:gap-5 md:mt-0 md:h-[50px] md:bg-[#f9f9f9] md:p-6 sm:w-[90%] sm:mx-auto sm:flex sm:justify-between sm:gap-5 sm:mt-0 sm:h-[50px] sm:bg-[#f9f9f9] sm:p-6">
              <div>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3ZM9 17H6C5.45 17 5 16.55 5 16C5 15.45 5.45 15 6 15H9C9.55 15 10 15.45 10 16C10 16.55 9.55 17 9 17ZM9 13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H9C9.55 11 10 11.45 10 12C10 12.55 9.55 13 9 13ZM9 9H6C5.45 9 5 8.55 5 8C5 7.45 5.45 7 6 7H9C9.55 7 10 7.45 10 8C10 8.55 9.55 9 9 9ZM18.7 11.12L15.53 14.29C15.14 14.68 14.5 14.68 14.11 14.29L12.7 12.87C12.31 12.48 12.31 11.85 12.7 11.46C13.09 11.07 13.72 11.07 14.11 11.46L14.82 12.17L17.29 9.7C17.68 9.31 18.31 9.31 18.7 9.7L18.71 9.71C19.09 10.1 19.09 10.74 18.7 11.12Z"
                    fill="#2E6EDF"
                  ></path>
                </svg>
              </div>
              <div className="w-[100%]">
                <span className="text-[#2e6edf]  text-[16px]">
                  Automated On-The-Job
                  Quality Control
                </span>
              </div>
            </div>
          </ul>
          <button className="lg:w-[74%] lg:ml-16 lg:h-[50px] lg:pl-[93px] items-center bg-[#2e6edf] text-[#ffffff] text-[20px] ml-[15%] mt-5 flex md:pl-[26%] md:gap-3 sm:pl-[15%] sm:gap-3 border-none rounded-lg cursor-pointer sm:rounded-md md:w-[80%] md:ml-[10%] sm:ml-8 sm:h-[50px] sm:w-[85%]">
            <span>
              <AiOutlinePlayCircle className="w-[100%] h-[25px]" />
            </span>
            See how it works
          </button>
        </div>
        <div className="overflow-hidden shadow-md lg:w-[80%] lg:h-[523px] lg:bg-white lg:rounded-2xl  md:w-[100%] md:h-[700px] md:mx-[auto] md:bg-white md:rounded-2xl lg:mt-0  md:mt-10 sm:mt-10 sm:w-[100%] sm:h-[500px] sm:bg-white sm:rounded-2xl">
          <div className="lg:flex lg:justify-center lg:items-center">
            <Image
              src={hero_easy}
              alt="hero_easy"
              className="lg:w-[300px] lg:h-[220px] md:w-[90%] md:mx-[auto] sm:mx-[auto] md:h-[450px] sm:w-[85%] sm:h-[270px] sm:flex sm:items-center"
            />
          </div>

          
          <div className="lg:ml-5">
            <h5 className="sm:font-bold  lg:text-[18px] lg:m-[24px] md:text-[19px] md:w-[60%] md:ml-5 md:mx-[auto] sm:text-[19px] sm:w-[60%] sm:ml-5 sm:mx-[auto]">
              Your ideal developer
            </h5>
          </div>
          <div className="lg:ml-10 md:ml-5 sm:ml-5 ">
            <ul className="list-disc ml-5 md:mt-4 lg:mt-[-10px]">
              <li className="sm:mt-2 font-semibold lg:w-[240px] lg:h-[24px] lg:text-[19px] md:w-[240px] md:h-[24px] md:text-[18px] sm:w-[240px] sm:h-[24px] sm:text-[18px]">
                Typical engagement:
              </li>
              <h5 className=" text-[19px] ml-2 mt-4 mb-4">
                Full-time
              </h5>
              <li className=" font-semibold lg:w-[240px] lg:h-[24px] lg:text-[19px] md:w-[240px] md:h-[24px] md:text-[18px] sm:w-[240px] sm:h-[24px] sm:text-[18px]">
                Time zone overlap:
              </li>
              <h5 className="font-sans text-[19px] ml-2 mt-2 mb-4">4 hours</h5>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Turing;
