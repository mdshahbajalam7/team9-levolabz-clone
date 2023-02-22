import { BsChevronLeft } from "react-icons/bs";

export default function PrevArrow({ onClick }) {
  return (
    <div className=" absolute z-30 top-[130px]" onClick={onClick}>
      <div className="bg-[#fab1a0] h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer">
        <BsChevronLeft />
      </div>
    </div>
  );
}
