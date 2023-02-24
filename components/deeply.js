import Image from "next/image";
export default function Deeply() {
  return (
    <div className="flex pt-16 pb-8 bg-[#f8f8f8] sm:flex-col-reverse md:flex-col-reverse lg:flex-row justify-around">
      <div className="pr-16 sm:pl-5 md:pl-10">
        <h1>CLIENTS</h1>
        <h1 className="text-4xl font-semibold leading-normal sm:w-[100%] sm:text-[29px]">
          Hire deeply-vetted developers
        </h1>
        <p className="pt-5 text-lg lg:w-[60%]">
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
      <div className="pr-[90px] pl-11 lg:w-[60%] lg:-ml-30">
        <Image
          className="w-[100%] h-[100%] lg:-ml-32"
          src="https://d2mk45aasx86xg.cloudfront.net/world_d650185bdd.svg"
          width={500}
          height={500}
          alt="img"
          
        />
      </div>
    </div>
  );
}
