import Image from "next/image";
export default function Service() {
  return (
    <div className="flex  sm:flex-col md:flex-col lg:flex-row justify-around">
      <div className="justify-center">
        <Image
          className=" w-[100%] md:p-[50px]"
          src="https://d2mk45aasx86xg.cloudfront.net/Turing_Services_9913a8f414.svg"
          alt="img"
          width={"0"}
          height={"0"}
        ></Image>
      </div>
      <div className="pt-12 sm:pl-5">
        <h1>CLIENTS</h1>
        <h1 className="text-4xl font-semibold leading-normal">
          Get the new standard in tech Services
        </h1>
        <p className="pt-5 text-lg text-justify ">
          Turing Services imagine, deliver, and run your toughest <br />{" "}
          technical projects and programs. Discover quality, speed, and <br />{" "}
          cost efficiency from the experts in solving your business problems.
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
