import Image from "next/image";
import banner from "../public/image/banner.jpeg";
export default function Banner() {
  return (
    <div className="w-[100%] mt-10 ">
      <div className=" lg:w-[80%]  mx-[auto] flex  sm:flex-col-reverse md:flex-col-reverse lg:flex-row sm:pb-7">
        <div className="lg:pl-3  sm:pl-5 pt-6 ">
          <h1 className="lg:w-[87%] lg:text-[42px] lg:leading-[55px] font-semibold  md:text-3xl sm:text-[24px]">
            Elevate your technology
          </h1>
          <p className="pt-5 text-[18px] lg:w-[70%]">
            At the push of a button, our AI-powered deep-vetting platform—the
            Talent Cloud—matches clients with remote engineers and other tech
            experts to solve complex business problems. Get individual talent,
            dedicated teams, or comprehensive technology services from the
            experts in modern solutions that scale.
          </p>
          <div className="pt-6 flex sm:flex-col sm:gap-3 md:flex-col md:gap-3 lg:flex-row lg:gap-1">
            <button className="px-10 py-3 bg-blue-500 rounded-md text-white font-semibold mr-3 hover:bg-blue-600">
              See Our Projects
            </button>
            <button className="border border-blue-500 px-14 py-3 mr-3 rounded-md text-blue-500 font-semibold hover:bg-blue-50">
              Get In Touch
            </button>
          </div>
        </div>
        <div className="lg:ml-[-100px] lg:mt-4 justify-center lg:w-[110%] md:ml-14">
          <Image className="lg:w-[650px] lg:h-[380px]" src={banner} alt="img" />
        </div>
      </div>
    </div>
  );
}
