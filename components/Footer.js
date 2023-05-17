import {MdOutlineEmail} from "react-icons/md";
import {BsFillTelephoneForwardFill} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";

const Footer = () => {
    return (
        <div id="contact" className="md:flex justify-between items-center px-7 bg-black w-full h-[220px] text-white">
            <div>
                <h1 className="text-[24px] font-medium">Contact Information</h1>
                <p  className="flex items-center gap-2 my-3 text-[18px] font-normal"><MdOutlineEmail /> Email: shiponroy509@gmail.com</p>
                <p className="flex items-center gap-2 text-[18px] font-normal"><BsFillTelephoneForwardFill /> Phone: 01722267183</p>
            </div>
            <div className="mt-5">
                <p className="flex items-center gap-2 text-[18px] font-normal"><BsGithub /> GitHub</p>
                <p className="flex items-center gap-2 mt-3 text-[18px] font-normal"><BsLinkedin /> Linkedin</p>
            </div>
        </div>
    );
};

export default Footer;