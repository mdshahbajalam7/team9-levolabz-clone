import Image from "next/image";
export default function Deeply() {
  return (
    <div className="flex pt-16 pb-8 bg-[#f8f8f8] sm:flex-col-reverse md:flex-col-reverse lg:flex-row justify-around">
      <div className="pr-16 sm:pl-5 md:pl-10">
        <h1>CLIENTS</h1>
        <h1 className="text-4xl font-semibold leading-normal">
          Hire deeply-vetted developers
        </h1>
        <p className="pt-5 text-lg">
          A software-first solution to any engineering problem. Use our
          <br />
          AI-powered deep-vetting platform to hire and manage the <br />
          right remote developers, tech leads, and others for your
          <br /> resource needs.
        </p>
        <div className="pt-8">
          <button className="px-10 py-3 bg-blue-500 rounded-md text-white font-semibold mr-4 hover:bg-blue-600">
            Hire Developers
          </button>
        </div>
      </div>
      <div className="pr-[90px] ">
        <Image
          className="w-[100%]"
          src="https://d2mk45aasx86xg.cloudfront.net/world_d650185bdd.svg"
          width={"0"}
          height={"0"}

          alt="img"
        ></Image>
      </div>
    </div>
  );
}
