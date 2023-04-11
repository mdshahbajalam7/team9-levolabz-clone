import { useState } from "react";
import {
  Bars3Icon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useRef } from "react";

export default function Navbar({onclick,onClicks,serv,work}) {

  const [nav, setNav] = useState(false);
  const sectionRef = useRef(null);

  const dropDown = () => {
    setNav(!nav);
  };

  const dropDownClose = () => {
    setNav(false);
  };

  return (
    <div className="w-[100%] top-0 sticky bg-[#ea8060] scroll drop-shadow-sm z-50 px-5 pb-2 xl:px-0 xl:py-3 xl:pt-5">
      <div className=" lg:w-[80%] mx-[auto]">
        <div className="flex justify-between  ">
          <div className="pl-3 pt-2 xl:pt-0 pb-1  ">
            
            <Image src="/image/orange.jpg" alt="logo" width={55} height={0} />
          </div>
          {nav ? (
            <XMarkIcon
              className="h-8 m-2 sm:mt-5 xl:hidden hover:cursor-pointer"
              onClick={dropDownClose}
            />
          ) : (
            <Bars3Icon
              className="h-8 m-2 sm:mt-6 xl:hidden hover:cursor-pointer"
              onClick={dropDown}
            />
          )}

          <div className="hidden xl:flex xl:flex-row xl:gap-12 xl:pr-[10px] pt-2 xl:text-[18px] cursor-pointer">
            <p onClick={work} className="pt-4 border-t-0 border-r-0 border-l-0 border-white hover:border-b-2 hover:bg-white  font-medium">
              How it Works
            </p>
            <p onClick={onClicks} className="pt-4 border-t-0 border-r-0 border-l-0 border-white hover:border-b-2 hover:bg-white  font-medium">
              Portfolio
            </p>
            
            
              <p onClick={onclick} className="pt-4 border-t-0 border-r-0 border-l-0 border-white hover:border-b-2 hover:bg-white  font-medium">
              Contact Us
              </p>
            
            <div className=" border-t-0 border-r-0 border-l-0 relative group/item">
              <p onClick={serv}  className="pt-4 flex gap-2 items-center font-medium pb-3 hover:bg-white">
                Services We Offer{" "}
                <ChevronDownIcon className="w-4 fill-white group-hover/item:rotate-180 border-2 border-white rounded-full" />
              </p>

              <div className="absolute w-70 bg-white border border-gray-400 px-4 origin-center -right-[30%] group/edit invisible xl:group-hover/item:visible">
                <p className="flex items-center justify-between py-3 font-400 border-b border-gray-300 text-gray-500 hover:text-[#ea8060]">
                  Web Development{" "}
                </p>
                <p className="flex items-center justify-between py-3 border-b border-gray-300 text-gray-500 hover:text-[#ea8060]">
                  Mobile Applications{" "}
                </p>
                <p className="flex items-center justify-between py-3 border-b border-gray-300 text-gray-500 hover:text-[#ea8060]">
                  Custom Softwares{" "}
                </p>
                <p className="flex items-center justify-between py-3 border-b border-gray-300 text-gray-500 hover:text-[#ea8060]">
                  UI/UX{" "}
                </p>
                <p className="flex items-center justify-between py-3 border-b border-gray-300 text-gray-500 hover:text-[#ea8060]">
                  Graphic Design{" "}
                </p>
                <p className="flex items-center justify-between py-3 border-b border-gray-300 text-gray-500 hover:text-[#ea8060]">
                  SEO Optimization{" "}
                </p>
                <p className="flex items-center justify-between py-3 border-b border-gray-300 text-gray-500 hover:text-[#ea8060]">
                  Performance Marketing{" "}
                </p>
                <p className="flex items-center justify-between py-3 border-b border-gray-300 text-gray-500 hover:text-[#ea8060]">
                  Staff Augmentation{" "}
                </p>
              </div>
            </div>

            
          </div>
        </div>
        {nav && (
          <div className="absolute bg-[#ea8060] sm:w-[94%] md:w-[96%] w-full overflow-y-scroll">
            <div className="flex flex-col px-3 gap-[10px] mt-4">
              <button className="border border-[#ea8060] rounded-md py-3 font-semibold text-lg text-[#ea8060]">
                See Our Projects
              </button>
              <button className="border border-[#ea8060] rounded-md py-3 font-semibold text-lg text-[#ea8060]">
                Get in Touch
              </button>
              
            </div>
            <div className="px-5 mt-5">
              <p className="font-semibold ">Services we Offer</p>
              <p className="flex items-center justify-between py-3 px-9 border-b border-gray-300 font-semibold text-gray-500">
              Web Development{" "}
                
              </p>
              <p className="flex items-center justify-between py-3 px-9 border-b border-gray-300 font-semibold text-gray-500">
              Mobile Applications
                
              </p>
              <p className="flex items-center justify-between py-3 px-9 border-b border-gray-300 font-semibold text-gray-500">
              Custom Softwares{" "}
                
              </p>
              <p className="flex items-center justify-between py-3 px-9 border-b border-gray-300 font-semibold text-gray-500">
              UI/UX{" "}
                
              </p>
              <p className="flex items-center justify-between py-3 px-9 border-b border-gray-300 font-semibold text-gray-500">
              Graphic Design{" "}
                
              </p>
              <p className="flex items-center justify-between py-3 px-9 border-b border-gray-300 font-semibold text-gray-500">
              SEO Optimization{" "}
                
              </p>
              <p className="flex items-center justify-between py-3 px-9 border-b border-gray-300 font-semibold text-gray-500">
              Performance Marketing{" "}
                
              </p>
              <p className="flex items-center justify-between py-3 px-9 border-b border-gray-300 font-semibold text-gray-500">
              Staff Augmentation{" "}
                
              </p>
              
            </div>
           
            <div className="px-5 ">
              <p className="flex items-center justify-between py-3 border-b border-gray-300 font-semibold ">
                How It Works <ChevronRightIcon className="w-5 h-5 fill-blue-500" />
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
