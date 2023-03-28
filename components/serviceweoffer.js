import React from 'react'
import Image from 'next/image';
import { servicedata } from '@/data/componentdata';
import { useRef } from 'react';

export default function Serviceweoffer({onclick}) {

  const sectionRef = useRef(null);

  return (
        <div className="bg-[#fafafa]">
        <div className="w-full md:px-5 lg:w-[80%] m-auto py-10">
            <h2 className="font-semibold text-[35px] text-center py-8">Services We Offer</h2>
            
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 mt-4">
        {servicedata.map((el, idx) => {
          return (
            <div className="shadow-xl rounded-xl text-center mt-6 border border-slate-300 py-4 hover:bg-[#e5a38e]"
            key={idx}>
             
              <div className="relative h-20 w-24 m-auto">
              <Image
                className="rounded-t-xl"
                src={el.img}
                alt="img"
                fill={true}
              />
              </div>
              <h3 className="font-semibold text-xl  py-4 px-4">{el.title}</h3>
              <p className="w-[90%] text-base text-justify m-auto pb-4">{el.desc}</p>
            </div>
          );
        })}
      </div>
      <div className='flex justify-center'>
      <button onClick={onclick} className="font-semibold text-[20px] rounded-lg bg-[#e76a44] text-white px-8 py-3 mt-8 hover:bg-[#e8f1e8] hover:text-black">Get In Touch</button>
      </div>
      </div>
    </div>
  )
}
