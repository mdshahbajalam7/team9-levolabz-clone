import Image from "next/image";
import { smallSectionData } from "@/data/componentdata";
export default function Dedicated() {

  return (
    // {smallSectionData.map((el)=>{
    //   return(
    <div className="w-[100%]">
          <div className="lg:w-[80%]  mx-[auto] sm:pb-9 flex sm:flex-col md:flex-col lg:flex-row justify-around">
        <div className="flex justify-center lg:w-[80%]">
          <Image
            className="w-[700px] lg:p-0 lg:mt-14 md:p-[50px]"
            src="https://d2mk45aasx86xg.cloudfront.net/graph_be4a9cff45.svg"
            alt="img"
            width={"0"}
            height={"0"}
          />
        </div>
        <div className="pt-28 lg:pl-28 sm:pl-5  lg:w-[100%]">
          
          <h1 className="text-4xl font-semibold leading-normal md:text-3xl sm:text-2xl">
          Levo is Latin for elevate
          </h1>
          <p className="pt-5 text-lg lg:w-[78%]">
          Levo Labz is a software company that elevates your product approach, takes over your product and technology needs so that you can focus on your business value and how to bring it to market.

          </p>
        </div>
        </div>
        {/* );
      })} */}
    </div>
  );
}
