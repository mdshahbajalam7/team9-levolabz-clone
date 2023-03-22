import Image from "next/image";
import banner from "../public/image/banner.jpeg";
import { useRef } from "react";


export default function Banner({onclick,onClicks}) {

  const sectionRef = useRef(null);

  return (
    <div className="w-[100%] mt-10 ">
      <div className=" lg:w-[80%]  mx-[auto] flex  sm:flex-col-reverse md:flex-col-reverse lg:flex-row sm:pb-7">
        <div className="lg:pl-3  sm:pl-5 pt-6 ">
          <h1 className="lg:w-[87%] lg:text-[42px] lg:leading-[55px] font-semibold  md:text-3xl sm:text-[24px]">
            Elevate Your Technology
          </h1>
          <p className="pt-5 text-[18px] lg:w-[70%]">
            At the push of a button, our AI-powered deep-vetting platform—the
            Talent Cloud—matches clients with remote engineers and other tech
            experts to solve complex business problems. Get individual talent,
            dedicated teams, or comprehensive technology services from the
            experts in modern solutions that scale.
          </p>
          <div className="pt-6 flex sm:flex-col sm:gap-3 md:flex-col md:gap-3 lg:flex-row lg:gap-1">
            <button onClick={onClicks} className="px-10 py-3 bg-[#e76a44] rounded-md text-white font-semibold mr-3 hover:bg-slate-200 hover:text-black hover:border border-[#ea8060]">
              See Our Projects
            </button>
            
            <button onClick={onclick} className=" bg-[#e76a44] px-14 py-3 mr-3 rounded-md text-white font-semibold  hover:bg-slate-200 hover:text-black hover:border border-[#ea8060]">
              Get In Touch
            </button>
          </div>
        </div>
        <div className="lg:ml-[-100px] lg:mt-0 flex justify-center lg:w-[110%] md:ml-14">
          <Image className="lg:w-[650px] lg:h-[380px]" src={banner} alt="img" />
        </div>
      </div>
    </div>
  );
}
