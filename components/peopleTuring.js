import MySlider from "./MySlider";

export default function PeopleTuring() {
  return (
    <div className="bg-[#fafafa] pt-10 ">
      <div className="flex sm:flex-col sm:pl-5 md:flex-row md:pl-10 lg:flex-row lg:justify-around md:justify-around lg:gap-80 md:gap-30 ">
        <div className="">
          <p className="text-[28px] font-semibold">People ❤️ Turing</p>
          <p className="pt-4 leading-6 text-[17px] font-light">
            Read Turing.com reviews from developers across the world <br /> and
            learn what it’s like working with top U.S. companies.
          </p>
        </div>
        <div className="text-end sm:text-left md:text-end lg:text-end md:pr-6">
          <div className="flex justify-end sm:justify-start md:justify-end">
            <p className="font-[500] text-[1.8em] ">⭐ 4.7</p>
            <p className="pt-5 pl-3 text-sm text-[gray]">OUT OF 5</p>
          </div>
          <p className="text-[gray] pt-2">
            based on developer reviews as of January 2023
          </p>
          <p className="text-blue-600">View all Reviews</p>
        </div>
      </div>
      <div className="pt-10 md:pl-10 sm:pl-5">
        <MySlider />
      </div>
    </div>
  );
}
