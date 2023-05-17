import Image from "next/image";

import shipon from "../../assets/shipon (2).jpg";
import { FaCode } from "react-icons/fa";
import { AiOutlineArrowDown } from "react-icons/ai";

const Hero = () => {
  return (
  <>
    <div className="pt-24 px-3 md:flex md:justify-evenly md:items-center w-full h-[900px] text-white bg-[#121212] ">
      <Image
        style={{borderRadius: "100%"}}
        src={shipon}
        width={300}
        height={300}
        alt=""
      />
      <div className="mt-10">
        <span className="text-xl font-semibold font-['Fira_Code'] text-[#E5E9F0]">Hei, Jeg er</span>
        <h1 className="text-[64px] font-semibold text-[#E5E9F0] font-['Kanit']">Shipon Roy</h1>
        <span className="flex items-center gap-4 font-normal font-['Fira_Code'] text-[#43D9AD] text-[24px] md:text-[32px]">
          <FaCode /> Front-end developer
        </span>
        <button className="font-['Fira_Code'] text-white border py-2 px-7 mt-10  cursor-pointer">Projects</button>
      </div>
    </div>
    <span className="absolute top-16 right-7 md:top-24 md:right-14 font-['Segoe_UI_Historic'] font-normal line-[27px] cursor-pointer text-white">Download CV</span>
    </>
  );
};

export default Hero;
