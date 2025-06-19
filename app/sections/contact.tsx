import { Mail, PhoneCall } from "lucide-react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import FloatButton from "../components/ui/floatbutton";

export const ContactSection = () => {
  return (
    <div className="h-auto bg-indigo-600 w-full mt-12" id="contact">
      <div className="w-full h-full flex items-center flex-col lg:px-16 md:px-12 sm:px-8 px-6 sm:pt-20 pt-8">
        <p className="text-gray-200 font-semibold text-xl sm:text-2xl md:text-2xl">
          Need any Project?
        </p>
        <p className="text-[#E2F739] font-bold text-5xl sm:text-5xl md:text-6xl lg:text-7xl mt-2 -leading-2">
          Let's Start
        </p>
        <div className="mt-6 sm:mt-10 md:mt-16 lg:mt-20 flex justify-between items-center sm:flex-row flex-col gap-2 w-[60%]">
          <a href="mailto:amany13business@gmail.com" className="cursor-pointer">
            <div className="flex items-center gap-2 ">
              <Mail className="text-neutral-200  group-hover/mail:text-white sm:h-6 sm:w-6 w-5 h-5 md:h-6 md:w-6 lg:h-8 lg:w-8" />
              <div className="flex flex-col group/mail transition-all duration-200 gap-1">
                <p className="text-neutral-200 group-hover/mail:text-white text-sm sm:text-base md:text-base lg:text-xl">
                  amany13business@gmail.com
                </p>
                <div className="h-[1px] bg-white w-full transition-all duration-200" />
              </div>
            </div>
          </a>
          <FloatButton mts={20} ms={10}></FloatButton>
          <div className="flex items-center gap-2 cursor-pointer">
            <PhoneCall className="text-neutral-200 group-hover/number:text-white sm:h-6 sm:w-6 w-5 h-5 md:h-6 md:w-6 lg:h-8 lg:w-8" />
            <div className="flex flex-col group/number transition-all gap-1">
              <p className="text-neutral-200 group-hover/number:text-white text-sm sm:text-base md:text-base lg:text-xl">
                +91 9785177731
              </p>
              <div className="h-[1px] bg-white w-full transition-all duration-200" />
            </div>
          </div>
        </div>
        <div className="h-[2px] w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] mt-8 sm:mt-12 md:mt-16 lg:mt-24 bg-white" />
        <div className="flex w-full items-center justify-center mt-4 mb-4 gap-4 h-10">
          <a
            href="https://www.linkedin.com/in/aman-yadav13"
            target="_blank"
            className="h-8 w-8 flex items-center justify-center"
          >
            <CiLinkedin className="sm:h-7 sm:w-7 h-6 w-6  text-white" />
          </a>
          <a
            href="https://github.com/aman-yadav13"
            target="_blank"
            className="h-8 w-8 flex items-center justify-center"
          >
            <FaGithub className="sm:h-6 sm:w-6 w-5 h-5 text-white" />
          </a>
          <a
            href="https://www.instagram.com/amannn__y?igsh=MTZiOGNqMWpscDg3NA=="
            target="_blank"
            className=""
          >
            <FaInstagram className="text-white sm:h-6 sm:w-6 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};
