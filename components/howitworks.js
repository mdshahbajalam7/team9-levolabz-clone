import React from "react";
import { worksdata } from "@/data/componentdata";
import Image from "next/image";

export default function Howitworks({onclick}) {
  return (
        <div className="px-5 w-full lg:w-[80%] m-auto py-10">
            <h2 className="font-semibold text-[35px] text-center py-8">How It Works</h2>
            
      <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-3 lg:gap-16 ">
        {worksdata.map((el, idx) => {
          return (
            <div className="shadow-md rounded-lg bg-[#ea9278] text-white"
            key={idx}>
             
              <div className="relative md:h-60 h-40 w-full ">
              <h3 className="left-1 top-2 absolute w-10 z-10 h-10 bg-black opacity-90 rounded-full font-bold text-white text-center pt-2">{idx + 1}</h3>
              <Image
                className="rounded-t-xl"
                src={el.img}
                alt="img"
                fill={true}
              />
              </div>
              <h3 className="font-bold text-xl py-4 px-4">{el.title}</h3>
              <p className="w-[90%] text-[18px] m-auto pb-4">{el.desc}</p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
      <button onClick={onclick} className="px-8 py-3 font-semibold text-[20px] rounded-lg bg-[#df623c]  text-white mt-8 hover:bg-[#e8f1e8] hover:text-black">Get in Touch</button>
      </div>
      
      </div>
  );
}
