import Image from "next/image";
export default function Dedicated() {
  return (
    <div className="flex  sm:flex-col md:flex-col lg:flex-row justify-around">
      <div className="justify-center lg:w-[50%] lg:pl-10">
        <Image
          className=" w-[100%] md:p-[50px]"
          src="https://d2mk45aasx86xg.cloudfront.net/graph_be4a9cff45.svg"
          alt="img"
          width={'0'}
          height={'0'}
        />
      </div>
      <div className="pt-12 sm:pl-5 md:pl-10 lg:w-[80%] lg:pl-80">
        <h1>CLIENTS</h1>
        <h1 className="text-4xl font-semibold leading-normal md:text-3xl sm:text-2xl">
        Hire a dedicated development team
        </h1>
        <p className="pt-5 text-lg lg:w-[60%]">
          At the push of a button, our AI-powered
          deep-vetting platform - the Talent Cloud - matches
          clients with remote developers, tech leads, and others to
          build and scale together.{" "}
        </p>
        <div className="pt-6">
          <button className="px-10 py-3 bg-blue-500 rounded-md text-white font-semibold mr-4 hover:bg-blue-600">
            More about Teams
          </button>
        </div>
      </div>
    </div>
  );
}
