import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { TbBrandRedux } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";

const About = () => {
  return (
    <div id="about" className="px-4 bg-[#011627] h-[2051px] w-full md:h-[1004px] text-white md:flex md:justify-evenly items-center">
      <div className="w-full md:w-[50%]">
        <h1 className="font-['Kanit'] text-[24px] font-normal pt-4 md:text-[32px] md:font-medium">About</h1>
        <h1 className="mt-5 text-[#FFB800] text-[30px] font-normal font-['Fira_Code'] md:text-[48px] md:font-semibold">
          Shipon Roy
        </h1>
        <div className="md:my-10 flex flex-wrap gap-1 my-8 md:gap-5 text-3xl">
          <FaReact className="text-[#00D8FF] w-[65px] h-[59px] md:h-[54px] md:w-[59px]" />
          <SiNextdotjs className=" w-[65px] h-[59px] md:h-[54px] md:w-[59px]" />
          <TiHtml5 className=" w-[65px] h-[59px] md:h-[54px] md:w-[59px]" />
          <IoLogoCss3 className=" w-[65px] h-[59px] md:h-[54px] md:w-[59px]" />
          <SiJavascript className=" w-[65px] h-[59px] md:h-[54px] md:w-[59px] text-[#F7DF1E]" />
          <TbBrandTypescript className=" w-[65px] h-[59px] md:h-[54px] md:w-[59px] text-[#1e92f7]" />
          <TbBrandRedux className=" w-[65px] h-[59px] md:h-[54px] md:w-[59px] text-[#801ef7]" />
          <FaNode className=" w-[65px] h-[59px] md:h-[54px] md:w-[59px] text-[#1ef75b]" />
          <DiMongodb className=" w-[65px] h-[59px] md:h-[54px] md:w-[59px] text-[#1ef75b]" />
          <SiExpress className=" w-[65px] h-[59px] md:h-[54px] md:w-[59px] " />
        </div>
        <p>
          Jeg er en frontend-utvikler med erfaring i Python og har tidligere
          jobbet som intern hos Kodeverket Bergen. Der var jeg med på å designe
          og utvikle nettsider ved hjelp av verktøy som Figma for design og
          React og Next JS for utrulling av nettsidene.
        </p>

        <p className="my-10">
          På fritiden liker jeg å jogge, gå på fjellturer med venner og å lese.
          Jeg har en lidenskap for å lære nye ting og eksperimentere med
          teknologi. For tiden lærer jeg Obsidian.md, slik at jeg kan lage mine
          egne plugins.
        </p>

        <p>
          Jeg går nå gjennom ulike sertifiseringer gjennom FreeCodeCamp, blant
          annet i Responsive Web Design og Python, for å videreutvikle mine
          ferdigheter.
        </p>
      </div>
      <div>
        <h1 className="text-[24px] font-['Roboto'] mt-5 md:text-[32px] md:font-['Kanit'] font-medium ">Skills</h1>
        <div className="border p-4 my-10 rounded">
          <h3
            className="font-medium text-[20px] mb-4"
          >
            Programming Languages
          </h3>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
        </div>
        <div className="border p-4 rounded">
          <h3
            className="font-medium text-[20px] mb-4"
          >
            JavaScript Frameworks
          </h3>
          <li>React</li>
          <li>Next.js</li>
        </div>
        <div className="border p-4 my-10 rounded">
          <h3
            className="font-medium text-[20px] mb-4"
          >
            Content Management Systems
          </h3>
          <li>Sanity.io</li>
          <li>Firebase</li>
        </div>
        <div className="border p-4 rounded">
          <h3
            className="font-medium text-[20px] mb-4"
          >
            Kurs og sertifiseringer
          </h3>
          <li>Scientific Computing with Python 50%</li>
        </div>
      </div>
    </div>
  );
};

export default About;
