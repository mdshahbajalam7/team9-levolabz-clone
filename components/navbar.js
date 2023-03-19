import { useState } from "react";
import {
  Bars3Icon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useRef } from "react";

export default function Navbar({onclick}) {
  const [nav, setNav] = useState(false);
  const sectionRef = useRef(null);

  const dropDown = () => {
    setNav(!nav);
  };

  const dropDownClose = () => {
    setNav(false);
  };

  return (
    <div className="w-[100%] top-0 sticky bg-white scroll drop-shadow-sm z-50 px-5 pb-2 xl:px-0 xl:py-3 xl:pt-5">
      <div className=" lg:w-[80%] mx-[auto]">
        <div className="flex justify-between  ">
          <div className="pl-3  xl:pt-0 pb-2">
           
            <Image
            src="/image/logo.png"
            alt="logo"
            width ={50}
            height={0} />
          </div>
          {nav ? (
            <XMarkIcon className="h-8 m-2 sm:mt-5 xl:hidden" onClick={dropDownClose} />
          ) : (
            <Bars3Icon
              className="h-8 m-2 sm:mt-6 xl:hidden"
              onClick={dropDown}
            />
          )}

          <div className="hidden xl:flex xl:flex-row xl:gap-12 xl:pr-[10px] pt-3 xl:text-[18px] cursor-pointer">
            <p className=" border-t-0 border-r-0 border-l-0 border-blue-700 hover:border-b-2  font-light">
              How it Works
            </p>
            <p className=" border-t-0 border-r-0 border-l-0 border-blue-700 hover:border-b-2  font-light">
              Portfolio
            </p>
            
            
              <p onClick={onclick} className=" border-t-0 border-r-0 border-l-0 border-blue-700 hover:border-b-2  font-light">
              Contact Us
              </p>
            
            <div className=" border-t-0 border-r-0 border-l-0 relative group/item">
              <p className="flex gap-2 items-center font-light pb-3">
               Services We Offer{" "}
                <ChevronDownIcon className="w-4 fill-blue-500 group-hover/item:rotate-180 border-2 border-blue-500 rounded-full" />
              </p>

              <div className="absolute w-80 bg-white border border-gray-400 px-4 origin-center -right-[80%] group/edit invisible xl:group-hover/item:visible">
                <p className="flex items-center justify-between py-3 font-400 border-b border-gray-300 text-gray-500 hover:text-blue-500">
                Web Development{" "}
                 
                </p>
                <p className="flex items-center justify-between py-3 border-b border-gray-300 text-gray-500 hover:text-blue-500">
                Mobile Applications{" "}
                 
                </p>
                <p className="flex items-center justify-between py-3 border-b border-gray-300 text-gray-500 hover:text-blue-500">
                Custom Softwares{" "}
                 
                </p>
                <p className="flex items-center justify-between py-3 border-b border-gray-300 text-gray-500 hover:text-blue-500">
                UI/UX{" "}
                 
                </p>
                <p className="flex items-center justify-between py-3 border-b border-gray-300 text-gray-500 hover:text-blue-500">
                Graphic Design{" "}
                 
                </p>
                <p className="flex items-center justify-between py-3 border-b border-gray-300 text-gray-500 hover:text-blue-500">
                SEO Optimization{" "}
                 
                </p>
                <p className="flex items-center justify-between py-3 border-b border-gray-300 text-gray-500 hover:text-blue-500">
                Performance Marketing{" "}
                 
                </p>
                <p className="flex items-center justify-between py-3 border-b border-gray-300 text-gray-500 hover:text-blue-500">
                Staff Augmentation{" "}
                 
                </p>
              </div>
            </div>

            {/* <div className=" border-t-0 border-r-0 border-l-0 border-blue-700 hover:border-b-2 relative group/item">
              <p className="flex gap-2 items-center font-light pb-3">
                Login{" "}
                <ChevronDownIcon className="w-4 fill-blue-500 group-hover/item:rotate-180 border-2 border-blue-500 rounded-full" />
              </p>
              <div className="absolute w-60 bg-white border border-gray-400 px-4 py-3 origin-top-left -right-[100px] group/edit invisible xl:group-hover/item:visible">
                <p className="mb-2 font-semibold">Developers</p>
                <p className="flex items-center justify-between py-3 border-b border-gray-300 font-semibold text-gray-500 hover:text-blue-500">
                  AI Services{" "}
                  <ChevronRightIcon className="w-5 h-5 fill-blue-500" />
                </p>
                <p className="flex items-center justify-between py-3 border-b border-gray-300 font-semibold text-gray-500 hover:text-blue-500">
                  AI Services{" "}
                  <ChevronRightIcon className="w-5 h-5 fill-blue-500" />
                </p>
                <p className="my-2 mt-3 font-semibold">Client</p>
                <p className="flex items-center justify-between py-3 font-semibold text-gray-500 hover:text-blue-500">
                  AI Services{" "}
                  <ChevronRightIcon className="w-5 h-5 fill-blue-500" />
                </p>
              </div>
            </div> */}
          </div>
        </div>
        {nav && (
          <div className="absolute bg-white sm:w-[94%] md:w-[96%] w-full overflow-y-scroll">
            <div className="flex flex-col px-3 gap-[10px] mt-4">
              <button className="border border-blue-600 rounded-md py-3 font-semibold text-lg text-blue-600">
                See Our Projects
              </button>
              <button className="border border-blue-600 rounded-md py-3 font-semibold text-lg text-blue-600">
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
            {/* <div className="px-3 mt-5">
              <p className="font-semibold ">Developers</p>
              <p className="flex items-center justify-between py-3 border-b border-gray-300 font-semibold text-gray-500">
                Login <ChevronRightIcon className="w-5 h-5 fill-blue-500" />
              </p>
              <p className="flex items-center justify-between py-3 border-b border-gray-300 font-semibold text-gray-500">
                Create an Account
                <ChevronRightIcon className="w-5 h-5 fill-blue-500" />
              </p>
            </div> */}
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
