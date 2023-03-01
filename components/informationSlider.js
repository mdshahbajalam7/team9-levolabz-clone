import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Image from "next/image";
export default function InformationSlider() {
  const infoSlide = [
    {
      text: `Turing books $87M at a $1.1B valuation to help source,`,
      text2: "hire and manage engineers remotely.",
    },
    {
      text: "Turing named one of America's Best Startup Employers for ",
      text2: "2022 by Forbes.",
    },
    {
      text: "Ranked no. 1 in The Information’s 50 Most Promising",
      text2: "Startups of 2021 in the B2B category.",
    },
    {
      text: "Turing named to Fast Company's World's Most Innovative",
      text2:
        "Companies 2021 for placing remote devs at top firms via AI-powered vetting.",
    },
    {
      text: "Turing helps entrepreneurs tap into the global talent pool",
      text2:
        "to hire elite, pre-vetted remote engineers at the push of a button.",
    },
  ];

  const company = [
    {
      name: "https://d2mk45aasx86xg.cloudfront.net/press_banner_techcrunch_179498fd9e.svg",
    },
    {
      name: "https://d2mk45aasx86xg.cloudfront.net/company_slider_logo04_eac957cc22.svg",
    },
    {
      name: "https://d2mk45aasx86xg.cloudfront.net/The_Information_SVG_69d64efa06.svg",
    },
    {
      name: "https://d2mk45aasx86xg.cloudfront.net/press_banner_fastcompany_4ffc0b4142.svg",
    },
    {
      name: "https://d2mk45aasx86xg.cloudfront.net/press_banner_entrepreneur_f114c9c6ad.svg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? infoSlide.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === infoSlide.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-[100%]">
    <div className="lg:w-[80%] md:w-[90%] mx-auto bg-white pt-36">
      <div className="flex justify-around gap-4">
        <div className="cursor-pointer">
          <BsChevronCompactLeft
            className="text-5xl cursor-pointer"
            onClick={prevSlide}
          />
        </div>
        <div className=" lg:text-[35px] md:text-[25px] sm:text-[20px] mt-[-20px] px-10 text-center ">
          <p className="leading-none italic">
            {infoSlide[currentIndex].text}
            <br />
            {infoSlide[currentIndex].text2}
          </p>
        </div>

        <div className="  cursor-pointer">
          <BsChevronCompactRight
            className="text-5xl  cursor-pointer"
            onClick={nextSlide}
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-1 sm:text-center md:grid-cols-3 lg:grid-cols-5 gap-11 cursor-pointer pt-20 mb-16">
        {infoSlide.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl flex justify-center"
          >
            <Image
              className="h-[30px] "
              src={company[slideIndex].name}
              width={300}
              height={300}
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
