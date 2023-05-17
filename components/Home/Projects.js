import Image from "next/image";
import img from "../../assets/IMG.png";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-[#010C15] h-[852px] md:h-[1128px] w-full text-white px-7"
    >
      <h1 className="text-[36px] md:text-[40px] md:font-medium text-center font-normal pt-10">Projects</h1>
      <nav className="flex justify-start">
        {[
          ["All", "/"],
          ["Guided", "/"],
          ["JavaScript", "/"],
          ["Reports", "/"],
        ].map(([title, url]) => (
          <Link href={url} className="rounded-lg px-4 py-2 font-medium">
            {title}
          </Link>
        ))}
      </nav>

      <div className="md:hidden max-w-sm mt-">
        <h5 className="my-5 text-[18px] font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <a href="#">
          <Image className="bg-[#F5F5F5] w-full rounded" src={img} alt="" />
        </a>
        <div className="pt-3">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Project Description: dolores commodi suscipit. Necessitatibus eius
            consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.
          </p>
          <div className="pt-4 pb-2 flex flex-wrap">
            <span className=" w-fit h-[29px] bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Next js
            </span>
            <span className=" w-fit h-[29px] bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              React
            </span>
            <span className=" w-fit h-[29px] bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Redux RTQ
            </span>
            <span className=" w-fit h-[29px] bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              TypeScript
            </span>
            <span className=" w-fit h-[29px] bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Node
            </span>
          </div>
          <div className="flex justify-evenly gap-2 mt-8">
            <button className="border border-[#62FBD7] py-1 px-7 text-[16px] text-[#62FBD7] font-normal rounded">
              Demo
            </button>
            <button className="flex items-center gap-3 rounded border bg-[#F7FFF1] py-1 px-7 text-[#141F26] text-[16px] font-normal">
              <BsGithub /> Github
            </button>
          </div>
        </div>
      </div>

      <div className="invisible md:visible px-7">
      <div className="mt-10">
        <div className=" md:flex md:justify-around md:items-start md:gap-4 md:max-w-fit mt-8 rounded-lg shadow  dark:border-gray-700">
          <Image
            className="bg-[#3B4954] md:w-[340px] md:h-[240px] rounded"
            src={img}
            alt=""
          />

          <div className="px-3 md:w-full">
            <h5 className=" text-[32px] font-bold tracking-tight text-gray-900 dark:text-white">
            Project Title
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Project Description: dolores commodi suscipit. Necessitatibus eius
              consequatur ex aliquid fuga eum quidem. Sit sint consectetur
              velit. suscipit. Necessitatibus eius consequatur ex aliquid fuga
              eum quidem. Sit sint consectetur velit.
            </p>
            <div className="pt-4 pb-2 flex flex-wrap">
              <span className=" w-fit h-[29px] bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Next js
              </span>
              <span className=" w-fit h-[29px] bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                React
              </span>
              <span className=" w-fit h-[29px] bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Redux RTQ
              </span>
              <span className=" w-fit h-[29px] bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                TypeScript
              </span>
              <span className=" w-fit h-[29px] bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Node
              </span>
            </div>
            <div className="flex justify-evenly md:justify-start gap-2 mt-8">
              <button className="border border-[#62FBD7] py-1 px-7 text-[16px] text-[#62FBD7] font-normal rounded">
                Demo
              </button>
              <button className="flex items-center gap-3 rounded border bg-[#F7FFF1] py-1 px-7 text-[#141F26] text-[16px] font-normal">
                <BsGithub /> Github
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className=" md:flex md:justify-around md:items-start md:gap-4 md:max-w-fit mt-8 rounded-lg shadow  dark:border-gray-700">
          <Image
            className="bg-[#3B4954] md:w-[340px] md:h-[240px] rounded"
            src={img}
            alt=""
          />

          <div className="px-3 md:w-full">
            <h5 className=" text-[32px] font-bold tracking-tight text-gray-900 dark:text-white">
            Project Title
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Project Description: dolores commodi suscipit. Necessitatibus eius
              consequatur ex aliquid fuga eum quidem. Sit sint consectetur
              velit. suscipit. Necessitatibus eius consequatur ex aliquid fuga
              eum quidem. Sit sint consectetur velit.
            </p>
            <div className="pt-4 pb-2 flex flex-wrap">
              <span className=" w-fit h-[29px] bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Next js
              </span>
              <span className=" w-fit h-[29px] bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                React
              </span>
              <span className=" w-fit h-[29px] bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Redux RTQ
              </span>
              <span className=" w-fit h-[29px] bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                TypeScript
              </span>
              <span className=" w-fit h-[29px] bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Node
              </span>
            </div>
            <div className="flex justify-evenly md:justify-start gap-2 mt-8">
              <button className="border border-[#62FBD7] py-1 px-7 text-[16px] text-[#62FBD7] font-normal rounded">
                Demo
              </button>
              <button className="flex items-center gap-3 rounded border bg-[#F7FFF1] py-1 px-7 text-[#141F26] text-[16px] font-normal">
                <BsGithub /> Github
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className=" md:flex md:justify-around md:items-start md:gap-4 md:max-w-fit mt-8 rounded-lg shadow  dark:border-gray-700">
          <Image
            className="bg-[#3B4954] md:w-[340px] md:h-[240px] rounded"
            src={img}
            alt=""
          />

          <div className="px-3 md:w-full">
            <h5 className=" text-[32px] font-bold tracking-tight text-gray-900 dark:text-white">
            Project Title
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Project Description: dolores commodi suscipit. Necessitatibus eius
              consequatur ex aliquid fuga eum quidem. Sit sint consectetur
              velit. suscipit. Necessitatibus eius consequatur ex aliquid fuga
              eum quidem. Sit sint consectetur velit.
            </p>
            <div className="pt-4 pb-2 flex flex-wrap">
              <span className=" w-fit h-[29px] bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Next js
              </span>
              <span className=" w-fit h-[29px] bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                React
              </span>
              <span className=" w-fit h-[29px] bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Redux RTQ
              </span>
              <span className=" w-fit h-[29px] bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                TypeScript
              </span>
              <span className=" w-fit h-[29px] bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Node
              </span>
            </div>
            <div className="flex justify-evenly md:justify-start gap-2 mt-8">
              <button className="border border-[#62FBD7] py-1 px-7 text-[16px] text-[#62FBD7] font-normal rounded">
                Demo
              </button>
              <button className="flex items-center gap-3 rounded border bg-[#F7FFF1] py-1 px-7 text-[#141F26] text-[16px] font-normal">
                <BsGithub /> Github
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Projects;
