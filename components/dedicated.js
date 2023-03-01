import Image from "next/image";
export default function Dedicated() {
  return (
    <div className="w-[100%]">
      <div className="lg:w-[80%]  mx-[auto] sm:pb-9 flex sm:flex-col md:flex-col lg:flex-row justify-around">
        <div className=" lg:w-[80%]">
          <Image
            className="w-[700px] lg:p-0 lg:mt-14 md:p-[50px]"
            src="https://d2mk45aasx86xg.cloudfront.net/graph_be4a9cff45.svg"
            alt="img"
            width={"0"}
            height={"0"}
          />
        </div>
        <div className="pt-20 lg:pl-28 sm:pl-5  lg:w-[100%]">
          <h1>CLIENTS</h1>
          <h1 className="text-4xl font-semibold leading-normal md:text-3xl sm:text-2xl">
            Hire a dedicated development team
          </h1>
          <p className="pt-5 text-lg lg:w-[78%]">
            A complete, hands-off solution to complex, hands-on problems. Turing
            will consult with you on your specific project needs, then build a
            dedicated development team to deliver your solution.
          </p>
          <div className="pt-6">
            <button className="px-10 py-3 bg-blue-500 rounded-md text-white font-semibold mr-4 hover:bg-blue-600">
              More about Teams
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
