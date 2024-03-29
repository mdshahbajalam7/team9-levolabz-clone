import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";

const products = [
  {
    name: "esptruck.com",
    path:"https://esptruck.com/",
    description:
      "ESP Truck Accessories is a family-owned business founded in 2015 with our goal in offering Under Seat Storage Units to help increase your truck storage space. We custom design lockable and unlockable storage units to form fit under your back seat and out of the way without interfering with your seat",
    image:
      "https://user-images.githubusercontent.com/98772205/226087258-cf1f6e44-0cb0-40aa-acb4-211b9f2dfd53.jpg",
  },
  {
    name: "fanplans.com",
    path:"https://www.fanplans.com/",
    description:
      "Fanplans creating a community for fans of pretty much everything live event related.  It's sole purpose is to make it easier for you to book your next experience all in one site. They partnered with the best-of-the-best from hotels to shuttles and home rentals.",
    image:
      "https://user-images.githubusercontent.com/98772205/226087273-8f2d4022-9268-4ba2-b15b-05728963e67a.jpg",
  },
  {
    name: "fanzartfans.com",
    path:"https://fanzartfans.com/",
    description:
      "Fanzart is your one-stop destination for premium designer fans in India. With extensive experience in crafting designer fans that are a blend of functionality and aesthetics inspired by various elements.",
    image:
      "https://user-images.githubusercontent.com/98772205/226087294-99757d60-9f84-41bb-88ad-25a7cc1a06a6.jpg",
  },
  {
    name: "karmeq.com",
    path:"https://www.karmeq.com/",
    description:
      "Karmeq is a member of FINRA and SIPC. All investments involve risk, including the possible loss of capital. Past performance of a security, market, or financial product does not guarantee future results",
    image:
      "https://user-images.githubusercontent.com/98772205/226087309-8e441ea0-6f17-4512-8801-48c37a6b32bf.jpg",
  },
];

export default function Product ({onclick}) {
  const router = useRouter();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="pb-20 mt-10 overflow-hidden bg-[#fafafa]">
      <div className="lg:w-[80%] sm:w-[90%] md:w-[90%] m-auto">
        <div className="mt-10 text-center font-semibold">
          <h1 className="text-[35px]">
            {" "}
            Portfolio
          </h1>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 md:grid md:grid-cols-1 grid-cols-1 mt-10 ">
          {products.map((product, index) => (
            <div
              key={index}
              className="shadow-md p-4 rounded-lg border border-[#e5a38e]"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <Image
                className="lg:h-[330px] w-full md:h-[330px] sm:h-[250px]"
                data-aos="zoom-in-up"
                src={product.image}
                alt="image"
                width={500}
                height={500}
              />
              <div className="mt-4 font-semibold cursor-pointer" onClick={() => router.push(product.path)}>
                <h3 className="text-center text-[25px]">{product.name}</h3>
                {/* <p className="text-[16px] mt-2">{product.description}</p> */}
              </div>
              <div className="mt-5">
                
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-center'>
        <button onClick={onclick} className="px-8 py-3 mt-8 font-semibold text-[20px] rounded-lg bg-[#e76a44] text-[white] h-[60px] hover:bg-[#e8f1e8] hover:text-black">
                  Get In Touch
        </button>
        </div>
      </div>
    </div>
  );
};


