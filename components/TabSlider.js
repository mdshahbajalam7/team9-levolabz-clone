import Slider from "react-slick";
import { PlayCircleIcon } from "@heroicons/react/20/solid";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

export default function TabSlider() {
  const settings = {
    autoScroll: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1.7,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
   
  };

  return (
    <div className="">
      <Slider {...settings}>
        <div className=" relative  min-w-[360px] rounded-lg  max-w-[360px] h-[300px] m-[10px] bg-cover bg-[url('https://www.turing.com/_next/image?url=https%3A%2F%2Fd2mk45aasx86xg.cloudfront.net%2FAlexandar_b9dda9959c.webp&w=1920&q=75')]">
          <div className="absolute text-white bg-black opacity-70 w-full h-full pl-4 pt-5 rounded-lg">
            <p className="font-semibold">Alexander, Costa Rica</p>
            <p className="">Software Architect</p>
            <p className="pt-5 italic text-lg">
              With timely payments, consistent growth, <br /> and long-term
              opportunities, I am in a <br /> much better and happier place.
            </p>
            <p className="bottom-8 font-semibold absolute flex items-center gap-2">
              <PlayCircleIcon className="h-7 w-7" /> Watch Video
            </p>
          </div>
        </div>

        <div className=" relative min-w-[360px] rounded-lg  max-w-[360px] h-[300px] m-[10px] bg-cover bg-[url('https://www.turing.com/_next/image?url=https%3A%2F%2Fd2mk45aasx86xg.cloudfront.net%2FManas_1_c7a161c007.webp&w=1920&q=75')]">
          <div className="absolute text-white  bg-black opacity-70 w-full h-full pl-4 pt-5 rounded-lg">
            <p className="font-semibold">Manas, India</p>
            <p>Data Scientist</p>
            <p className="pt-5 italic text-lg">
              Working with Turing has shown me how <br /> wrong the work-life
              balance model is at <br /> traditional in-office teams
            </p>
            <p className="bottom-8 font-semibold absolute flex items-center gap-2">
              <PlayCircleIcon className="h-7 w-7" /> Watch Video
            </p>
          </div>
        </div>

        <div className=" relative min-w-[360px] rounded-lg  max-w-[360px] h-[300px] m-[10px] bg-cover bg-[url('https://www.turing.com/_next/image?url=https%3A%2F%2Fd2mk45aasx86xg.cloudfront.net%2FGultkein_307592f7a5.webp&w=1920&q=75')]">
          <div className="absolute text-white  bg-black opacity-70 w-full h-full pl-4 pt-5 rounded-lg">
            <p className="font-semibold">Gultekin, Turkey</p>
            <p>ML Engineert</p>
            <p className="pt-5 italic text-lg">
              Matching companies with the best developers and developers with
              their dream jobs. Everyone who works at Turing really feels they
              are part of something big.
            </p>
            <p className="bottom-8 font-semibold absolute flex items-center gap-2">
              <PlayCircleIcon className="h-7 w-7" /> Watch Video
            </p>
          </div>
        </div>

        <div className=" relative min-w-[360px] rounded-lg  max-w-[360px] h-[300px] m-[10px] bg-cover bg-[url('https://www.turing.com/_next/image?url=https%3A%2F%2Fd2mk45aasx86xg.cloudfront.net%2Fnuman_1_fcb9a2b1b0.webp&w=1920&q=75')]">
          <div className="absolute text-white  bg-black opacity-70 w-full h-full pl-4 pt-5 rounded-lg">
            <p className="font-semibold">Numan, Pakistan</p>
            <p>Android Developer</p>
            <p className="pt-5 italic text-lg">
              I have never enjoyed working more and I feel very fulfilled to be
              to be able to be involved in such exciting projects. Turing often
              meets my expectations, but often exceeds them.
            </p>
            <p className="bottom-8 font-semibold absolute flex items-center gap-2">
              <PlayCircleIcon className="h-7 w-7" /> Watch Video
            </p>
          </div>
        </div>

        <div className=" relative min-w-[360px] rounded-lg  max-w-[360px] h-[300px] m-[10px] bg-cover bg-[url('https://www.turing.com/_next/image?url=https%3A%2F%2Fd2mk45aasx86xg.cloudfront.net%2Fmukul1_d38a13477d.webp&w=750&q=75')]">
          <div className="absolute text-white  bg-black opacity-70 w-full h-full pl-4 pt-5 rounded-lg">
            <p className="font-semibold">Mukul, India</p>
            <p>Technical Architect</p>
            <p className="pt-5 italic text-lg">
              The best thing about Turing is that it gives me a sense of
              freedom. I realized how important a healthy work-life balance is
              for my career growth.
            </p>
            <p className="bottom-8 font-semibold absolute flex items-center gap-2">
              <PlayCircleIcon className="h-7 w-7" /> Watch Video
            </p>
          </div>
        </div>

        <div className="relative text-center bg-[#56a8f7] min-w-[360px] rounded-lg max-w-[360px] h-[300px] m-[10px] pl-4 pt-5 ">
          <p className=" text-white font-semibold text-[22px] pt-16">
            Find out why developers love Turing
          </p>
          <button className="text-[#56a8f7] bg-white rounded-lg text-[20px] mt-6 p-3">
            See all Turing reviews
          </button>
        </div>
      </Slider>
    </div> 
  );
}
