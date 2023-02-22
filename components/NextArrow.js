import { BsChevronRight } from "react-icons/bs";

export default function NextArrow({ onClick }) {
  return (
    <div className="absolute right-0 top-[140px] " onClick={onClick}>
      <div className="bg-[#fab1a0] h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer">
        <BsChevronRight />
      </div>
    </div>
  );
}
