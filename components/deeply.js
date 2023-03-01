import Image from "next/image";
export default function Deeply() {
  return (
    <div className="w-[100%]  bg-[#f8f8f8] ">
    <div className="lg:w-[80%]  mx-[auto] flex pt-16 pb-8 sm:flex-col-reverse md:flex-col-reverse lg:flex-row justify-around">
      <div className=" pr-16  md:mt-5 sm:pl-5 lg:ml-[-20px] ">
        <h1>CLIENTS</h1>
        <h1 className=" text-4xl font-semibold leading-normal sm:w-[100%] sm:text-[21px] md:text-[30px]">
          Hire deeply-vetted developers
        </h1>
        <p className="pt-3 text-lg lg:w-[90%] md:w-[100%] sm:w-[120%]">
          A software-first solution to any engineering problem. Use our
          AI-powered deep-vetting platform to hire and manage the
          right remote developers, tech leads, and others for your resource needs.
        </p>
        <div className="pt-8">
          <button className="px-10 py-3 bg-blue-500 rounded-md text-white font-semibold mr-4 hover:bg-blue-600">
            Hire Developers
          </button>
        </div>
      </div>
      <div className="pl-11 lg:w-[110%] lg:mr-[80px]">
        <Image
          className="w-[100%] h-[100%] lg:ml-37"
          src="https://d2mk45aasx86xg.cloudfront.net/world_d650185bdd.svg"
          width={500}
          height={500}
          alt="img"
          
        />
      </div>
    </div>
    </div>
  );
}
