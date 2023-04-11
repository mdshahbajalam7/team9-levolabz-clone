import Image from "next/image";
import { smallSectionData } from "@/data/componentdata";
export default function Dedicated() {

  return (
   
    <div className="w-[100%]">
          {smallSectionData.map((e,idx)=>{
            return(
              <div key={idx} className="lg:w-[80%]  mx-[auto] sm:pb-9 flex sm:flex-col md:flex-col lg:flex-row justify-around">
        <div className="flex justify-center lg:w-[80%]">
          <Image
            className="w-[700px] lg:p-0 lg:mt-14 md:p-[50px]"
            src={e.Img}
            alt="img"
            width={"0"}
            height={"0"}
          />
        </div>
        <div className="pt-28 lg:pl-28 sm:pl-5  lg:w-[100%]">
          
          <h1 className="text-4xl font-semibold leading-normal md:text-3xl sm:text-2xl">
          {e.title}
          </h1>
          <ol className="pt-5 text-lg lg:w-[78%]" type="1">
              <li>{e.txt1}</li>
              <li>{e.txt2}</li>
              <li>{e.txt3}</li>
              <li>{e.txt4}</li>
          </ol>
        </div>
        </div>
            )
          })}

          
    </div>
  );
}
