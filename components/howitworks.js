import React from "react";
import { worksdata } from "@/data/componentdata";
import Image from "next/image";

export default function Howitworks() {
  return (
    <div className="">
        <div className="w-[80%] m-auto py-10">
            <h2 className="font-bold text-3xl text-center py-8">How It Works</h2>
            
      <div className="grid grid-cols-3 gap-16 ">
        {worksdata.map((el, idx) => {
          return (
            <div className="shadow-md rounded-xl"
            key={idx}>
             
              <div className="relative h-40 w-full ">
              <h3 className="absolute w-10 h-10 bg-black rounded-full font-bold text-white text-center pt-2">{idx + 1}</h3>
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
      </div>
    </div>
  );
}
