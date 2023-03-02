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
            {/* <jdfasd */}

            {/* <svg viewBox="0 0 892.59 736.65">
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="27.52"
                  y1="-28.18"
                  x2="65.27"
                  y2="151.04"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#ff8538"></stop>
                  <stop offset="1" stop-color="#e9e9e9"></stop>
                </linearGradient>
                <linearGradient
                  id="linear-gradient-2"
                  x1="391.42"
                  y1="175.6"
                  x2="391.42"
                  y2="-21.87"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#bcbcbc"></stop>
                  <stop offset="1" stop-color="#b93dfe"></stop>
                </linearGradient>
                <linearGradient
                  id="linear-gradient-3"
                  x1="356.42"
                  y1="196.2"
                  x2="423.72"
                  y2="196.2"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#1c48c0"></stop>
                  <stop offset="1" stop-color="#ba3dfe"></stop>
                </linearGradient>

                <linearGradient
                  id="linear-gradient-4"
                  x1="180.33"
                  y1="-323.91"
                  x2="180.33"
                  y2="-329.73"
                  gradientTransform="translate(201.54 490.13)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#ff8538"></stop>
                  <stop offset="1" stop-color="#f5f5f5"></stop>
                </linearGradient>

                <linearGradient
                  id="linear-gradient-5"
                  x1="191.06"
                  y1="-323.91"
                  x2="191.06"
                  y2="-329.73"
                  gradientTransform="translate(201.54 490)"
                  xlink:href="#linear-gradient-4"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-6"
                  x1="441.22"
                  y1="64.05"
                  x2="441.22"
                  y2="97.67"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#ff8538"></stop>
                  <stop offset="1" stop-color="#bcbcbc"></stop>
                </linearGradient>

                <linearGradient
                  id="linear-gradient-7"
                  x1="463.67"
                  y1="86.56"
                  x2="463.67"
                  y2="95.7"
                  xlink:href="#linear-gradient-6"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-8"
                  x1="648.93"
                  y1="84.6"
                  x2="648.93"
                  y2="118.56"
                  xlink:href="#linear-gradient-6"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-9"
                  x1="660.88"
                  y1="84.6"
                  x2="660.88"
                  y2="118.56"
                  xlink:href="#linear-gradient-6"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-10"
                  x1="524.93"
                  y1="-142"
                  x2="524.93"
                  y2="-115.14"
                  gradientTransform="rotate(-2.56 3635.905 -1622.98)"
                  xlink:href="#linear-gradient-6"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-11"
                  x1="820.75"
                  y1="403.84"
                  x2="865.27"
                  y2="114.47"
                  xlink:href="#linear-gradient-2"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-12"
                  x1="430.92"
                  y1="506.86"
                  x2="352.13"
                  y2="506.86"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#f5f5f5"></stop>
                  <stop offset="1" stop-color="#d1d1d1"></stop>
                </linearGradient>

                <linearGradient
                  id="linear-gradient-13"
                  x1="624.01"
                  y1="194.15"
                  x2="618.84"
                  y2="173.2"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#ff1d4b"></stop>
                  <stop offset="1" stop-color="#b93dfe"></stop>
                  <linearGradient
                    id="linear-gradient-12"
                    x1="430.92"
                    y1="506.86"
                    x2="352.13"
                    y2="506.86"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#f5f5f5"></stop>
                    <stop offset="1" stop-color="#d1d1d1"></stop>
                  </linearGradient>
                </linearGradient>

                <linearGradient
                  id="linear-gradient-14"
                  x1="525.67"
                  y1="181.67"
                  x2="596.87"
                  y2="181.67"
                  xlink:href="#linear-gradient-13"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-15"
                  x1="525.67"
                  y1="183.32"
                  x2="596.87"
                  y2="183.32"
                  xlink:href="#linear-gradient-13"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-16"
                  x1="525.67"
                  y1="182.81"
                  x2="596.87"
                  y2="182.81"
                  xlink:href="#linear-gradient-13"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-18"
                  x1="525.67"
                  y1="180.21"
                  x2="596.87"
                  y2="180.21"
                  xlink:href="#linear-gradient-13"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-19"
                  x1="525.67"
                  y1="178.84"
                  x2="596.87"
                  y2="178.84"
                  xlink:href="#linear-gradient-13"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-21"
                  x1="525.67"
                  y1="183.95"
                  x2="596.87"
                  y2="183.95"
                  xlink:href="#linear-gradient-13"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-22"
                  x1="225.45"
                  y1="-6.27"
                  x2="227.84"
                  y2="21.01"
                  xlink:href="#linear-gradient-6"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-23"
                  x1="-29.52"
                  y1="507.69"
                  x2="-35.7"
                  y2="461.68"
                  gradientTransform="matrix(1.02 .14 .16 1 182.54 -454.19)"
                  xlink:href="#linear-gradient-2"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-24"
                  x1="-29.27"
                  y1="264.29"
                  x2="-34.27"
                  y2="227.08"
                  gradientTransform="matrix(.63 .79 -.63 .79 410.13 -151.41)"
                  xlink:href="#linear-gradient-2"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-25"
                  x1="310.46"
                  y1="36.43"
                  x2="316.1"
                  y2="87.64"
                  xlink:href="#linear-gradient-6"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-26"
                  x1="738.9"
                  y1="52.66"
                  x2="738.9"
                  y2="75.48"
                  gradientTransform="translate(-223.39 259.69) skewX(-13)"
                  xlink:href="#linear-gradient-6"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-27"
                  x1="472.89"
                  y1="478.71"
                  x2="469"
                  y2="449.69"
                  gradientTransform="matrix(1 .07 0 1 31.08 -212.3)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#e9e9e9"></stop>
                  <stop offset="1" stop-color="#ff8538"></stop>
                </linearGradient>

                <linearGradient
                  id="linear-gradient-28"
                  x1="473.05"
                  y1="275.7"
                  x2="469.9"
                  y2="252.24"
                  gradientTransform="translate(31.08 14.8)"
                  xlink:href="#linear-gradient-27"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-29"
                  x1="759.24"
                  y1="52.66"
                  x2="759.24"
                  y2="75.48"
                  gradientTransform="translate(-223.39 259.69) skewX(-13)"
                  xlink:href="#linear-gradient-6"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-30"
                  x1="493"
                  y1="477.3"
                  x2="489.11"
                  y2="448.29"
                  xlink:href="#linear-gradient-27"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-31"
                  x1="493.16"
                  y1="275.7"
                  x2="490.01"
                  y2="252.24"
                  gradientTransform="translate(31.08 14.8)"
                  xlink:href="#linear-gradient-27"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-32"
                  x1="669.06"
                  y1="153.89"
                  x2="669.06"
                  y2="53.35"
                  xlink:href="#linear-gradient-2"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-33"
                  x1="665.64"
                  y1="257.67"
                  x2="665.64"
                  y2="123.17"
                  xlink:href="#linear-gradient-2"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-34"
                  x1="665.7"
                  y1="212.74"
                  x2="665.7"
                  y2="250.41"
                  xlink:href="#linear-gradient-2"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-35"
                  x1="730.02"
                  y1="317.35"
                  x2="730.02"
                  y2="344.91"
                  gradientTransform="matrix(1 .01 -.03 1 -39.72 -52.88)"
                  xlink:href="#linear-gradient-6"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-36"
                  x1="696.57"
                  y1="278.92"
                  x2="696.57"
                  y2="300.85"
                  xlink:href="#linear-gradient-6"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-37"
                  x1="704.83"
                  y1="279.25"
                  x2="704.83"
                  y2="300.85"
                  xlink:href="#linear-gradient-6"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-38"
                  x1="184.85"
                  y1="128.53"
                  x2="181.11"
                  y2="105.49"
                  xlink:href="#linear-gradient-2"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-39"
                  x1="207.55"
                  y1="165.91"
                  x2="201.77"
                  y2="129.17"
                  xlink:href="#linear-gradient-2"
                ></linearGradient>
                <linearGradient
                  id="linear-gradient-40"
                  x1="120.33"
                  y1="204.93"
                  x2="189.3"
                  y2="216.82"
                  gradientTransform="rotate(42.03 137.19 207.856)"
                  xlink:href="#linear-gradient-6"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-41"
                  x1="120.7"
                  y1="202.78"
                  x2="189.67"
                  y2="214.67"
                  gradientTransform="rotate(42.03 153.503 208.445)"
                  xlink:href="#linear-gradient-6"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-42"
                  x1="121.16"
                  y1="200.47"
                  x2="190.14"
                  y2="212.36"
                  gradientTransform="rotate(42.03 169.461 208.812)"
                  xlink:href="#linear-gradient-6"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-43"
                  x1="444.42"
                  y1="265.36"
                  x2="307.09"
                  y2="244.66"
                  xlink:href="#linear-gradient-6"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-44"
                  x1="132.93"
                  y1="231.73"
                  x2="247.98"
                  y2="231.73"
                  xlink:href="#linear-gradient-2"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-45"
                  x1="437.09"
                  y1="655.43"
                  x2="437.09"
                  y2="731.87"
                  xlink:href="#linear-gradient-12"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-46"
                  x1="395.46"
                  y1="674.63"
                  x2="395.46"
                  y2="704.21"
                  xlink:href="#linear-gradient-12"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-47"
                  x1="457.62"
                  y1="674.63"
                  x2="457.62"
                  y2="704.21"
                  xlink:href="#linear-gradient-12"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-48"
                  x1="477.45"
                  y1="655.43"
                  x2="477.45"
                  y2="731.87"
                  xlink:href="#linear-gradient-12"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-49"
                  x1="428.12"
                  y1="656.32"
                  x2="428.12"
                  y2="635.72"
                  xlink:href="#linear-gradient-12"
                ></linearGradient>

                <linearGradient
                  id="linear-gradient-50"
                  x1="456.48"
                  y1="560.03"
                  x2="456.48"
                  y2="714.81"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#1e1e1e"></stop>
                  <stop offset="1" stop-color="#b93dfe"></stop>
                </linearGradient>
              </defs>
            </svg> */}

            {/*  */}
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
