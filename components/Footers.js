import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function Footers ({onclick}) {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="bg-[#2B294D] p-5 pt-12">
      <div className="lg:w-[85%] mx-[auto] lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 gap-4 p-4" >
        <div className="font-semibold text-[white] p-4 ">
          <h1 className="text-[25px] hover:text-[green] cursor-pointer">
            Contact
          </h1>
          <p className="mt-3 hover:text-[green] cursor-pointer">
            info@eflairwebtech.com
          </p>
          <p className="hover:text-[green] cursor-pointer mt-5">
            USA: +16789994652
          </p>
          <p className="hover:text-[green] cursor-pointer">
            India: +919901660101
          </p>
          {/* <p className='hover:text-[green] cursor-pointer'>Phone: +16789994652</p> */}
        </div>
        <div className="font-semibold text-[white] p-4 ">
          <h1 className="text-[25px] hover:text-[green] cursor-pointer">USA</h1>
          <p className="mt-3 hover:text-[green] cursor-pointer">
            Promenade II,
          </p>
          <p className="hover:text-[green] cursor-pointer">
            1230 Peachtree Street North East, 19th Floor
          </p>
          <p className="hover:text-[green] cursor-pointer">
            Atlanta, Georgia 30309.
          </p>
          <p className="hover:text-[green] cursor-pointer">
            Phone: +16789994652
          </p>
        </div>
        <div className="font-semibold text-[white] p-4 ">
          <h1 className="text-[25px] hover:text-[green] cursor-pointer">
            Bangalore
          </h1>
          <p className="mt-3 hover:text-[green] cursor-pointer">
            Brigade Metropolis, 8th Floor, Whitefield Main Rd, Garudachar Palya,
          </p>
          <p className="hover:text-[green] cursor-pointer">
            Mahadevapura, Bengaluru,
          </p>
          <p className="hover:text-[green] cursor-pointer">Karnataka 560048.</p>
        </div>
        <div className="font-semibold text-[white] p-4 ">
          <h1 className="text-[25px] hover:text-[green] cursor-pointer">
            Vijayawada
          </h1>
          <p className="mt-3 hover:text-[green] cursor-pointer">
            #48-13-6A, Plot number 173,
          </p>
          <p className="hover:text-[green] cursor-pointer">
            The Orchid 3rd Floor,3rd Ln, Nagarjuna Nagar,Vijayawada,
          </p>
          <p className="hover:text-[green] cursor-pointer">520008</p>
        </div>
        <div className="mt-10">
          <button onClick={onclick} className="lg:w-[80%] md:w-[80%] sm:w-[100%] font-semibold text-[20px] rounded-lg bg-black text-[white] h-[60px] hover:bg-white hover:text-[black]">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};


