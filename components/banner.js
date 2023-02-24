import Image from "next/image";
import banner from "../public/image/banner.jpeg";
export default function Banner() {
  return (
    <div className=" mx-[auto] flex justify-around sm:flex-col-reverse md:flex-col-reverse lg:flex-row">
      <div className="md:pl-10 sm:pl-5 pt-6 ">
        <h1 className="text-4xl font-semibold leading-normal md:text-3xl sm:text-2xl">
          The most deeply vetted developers and <br /> teams, matched by AI
        </h1>
        <p className="pt-5 text-lg lg:w-[65%]">
          At the push of a button, our AI-powered deep-vetting platform—the
          Talent Cloud—matches clients with remote engineers and other tech
          experts to solve complex business problems. Get individual talent,
          dedicated teams, or comprehensive technology services from the experts
          in modern solutions that scale.
        </p>
        <div className="pt-6 flex sm:flex-col sm:gap-3 md:flex-col md:gap-3 lg:flex-row lg:gap-1">
          <button className="px-10 py-3 bg-blue-500 rounded-md text-white font-semibold mr-3 hover:bg-blue-600">
            Hire Developers
          </button>
          <button className="border border-blue-500 px-14 py-3 mr-3 rounded-md text-blue-500 font-semibold hover:bg-blue-50">
            Hire a Team
          </button>
          <button className="border border-blue-500 px-14 py-3 mr-3 rounded-md text-blue-500 font-semibold hover:bg-blue-50">
            Explore Services
          </button>
        </div>
        <p className="pt-6 sm:text-center md:text-center lg:text-left">
          Looking for a Jobs instead?
          <span className="text-blue-600 font-medium"> Apply for Jobs</span>
        </p>
      </div>
      <div className="pr-12 pt-0 justify-center lg:w-[80%]">
        <Image className="w-[500px]" src={banner} alt="img" />
      </div>
    </div>
  );
}
