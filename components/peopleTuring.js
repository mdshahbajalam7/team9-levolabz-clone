import MobileSlider from "./MobileSlider";
import MySlider from "./MySlider";
import TabSlider from "./TabSlider";

export default function PeopleTuring() {
  return (
    <div className="bg-[#fafafa] pt-10 ">
      <div className="lg:w-[83%]  mx-[auto] flex sm:flex-col sm:pl-5 md:flex-col  lg:flex-row lg:justify-around md:justify-around lg:gap-80 md:gap-30 ">
        <div className="lg:w-[80%]">
          <p className="text-[30px] font-semibold">People ❤️ Turing</p>
          <p className=" lg:w-[80%] md:w-[80%] pt-4 leading-6 text-[17px]">
            Read Turing.com reviews from developers across the world and
            learn what it’s like working with top U.S. companies.
          </p>
        </div>
        <div className="lg:w-[45%] text-end sm:text-left md:text-start lg:text-end md:pr-6">
          <div className=" flex lg:justify-end sm:justify-start md:justify-start">
            <p className="font-[500] text-[28px] ">⭐ 4.7</p>
            <p className="pt-5 pl-3 text-[12px] text-[gray]">OUT OF 5</p>
          </div>
          <p className="text-[#AAAAAA] pt-2 text-[14px] lg:w-[100%]">
            based on developer reviews as of January 2023
          </p>
          <p className="text-blue-600">View all Reviews</p>
        </div>
      </div>
      <div className="hidden pt-10 lg:block">
        <MySlider />
      </div>
      <div className="hidden pt-10  sm:pl-5 md:block lg:hidden">
        <TabSlider />
      </div>
      <div className="pt-10 md:pl-10 sm:pl-5 block md:hidden">
        <MobileSlider />
      </div>
    </div>
  );
}
