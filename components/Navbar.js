import Link from "next/link";
import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [icon, setIcon] = useState(false);

  const handleIcon = () => {
    setIcon(!icon);
  };
  return (
    <div className="fixed flex w-full h-[60px] justify-between items-center mx-auto border-b-2 border-green-400 md:border-none bg-[#010C15] md:bg-[#1F2937  text-white px-7">
      <Link href="/">
        <h1 className="flex gap-3 text-[#43D9AD] text-[18px] md:text-[32px] font-['Inter'] md:font-['Segoe_UI_Historic'] font-normal line-[22px] md:text-white items-center">
          <FaCode /> SHIPON ROY
        </h1>
      </Link>
      <ul className="hidden md:flex gap-5">
        <li>
          <Link href={"#about"}>About</Link>
        </li>
        <li>
          <Link href={"#projects"}>Projects</Link>
        </li>
        <li>
          <Link href={"#contact"}>Contact</Link>
        </li>
        <li>
          <Link href={"resume"}>Resume</Link>
        </li>
      </ul>
      <div onClick={handleIcon} className="block md:hidden text-[#43D9AD]">
        {icon ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          icon
            ? "fixed items-center right-0 shadow-md w-full h-52 text-center md:3/4 bg-[#1E1E1E]  md:w-3/4 overflow-hidden md:hidden top-14 text-sm duration-500"
            : "ease-in-out duration-500 fixed top-14 right-[-100%]"
        }
      >
        <li className="mt-10">
          <Link
            className="p-4 hover:bg-slate-500 hover:text-white"
            href={"about"}
          >
            About
          </Link>
        </li>
        <li className="mt-2">
          <Link
            className="p-4  hover:bg-slate-500 hover:text-white"
            href={"projects"}
          >
            Projects
          </Link>
        </li>
        <li className="mt-2">
          <Link
            className="p-4  hover:bg-slate-500 hover:text-white"
            href={"contact"}
          >
            Contact
          </Link>
        </li>
        <li className="mt-2">
          <Link
            className="p-4  hover:bg-slate-500 hover:text-white"
            href={"resume"}
          >
            Resume
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
