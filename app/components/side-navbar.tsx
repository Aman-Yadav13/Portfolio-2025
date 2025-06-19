import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import FloatButton from "./ui/floatbutton";

export const SideNavbar = () => {
  const [open, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      <div className="absolute right-[30px] top-[40px] sm:right-[60px] sm:top-[60px] z-[999]">
        {/* Hamburger Button */}
        <FloatButton ms={5} mts={5}>
          <div
            onClick={onClick}
            className={cn(
              "relative cursor-pointer sm:scale-100 scale-80 transition-all h-5 w-12 before:-translate-y-[50%] after:-translate-y-[50%]",
              "before:content-[''] before:absolute before:top-0 before:left-0 before:w-12 before:h-[2px] before:bg-white before:sm:bg-indigo-600 before:transition-all",
              "after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-8 after:h-[2px] after:bg-white after:sm:bg-indigo-600 after:transition-all",
              open &&
                "h-8 w-9 before:w-9 after:w-9 before:rotate-45 after:-rotate-45 before:top-[50%] after:bottom-[50%] before:-translate-y-[50%] after:-translate-y-[50%] before:bg-indigo-600 after:bg-indigo-600"
            )}
          />
        </FloatButton>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            className={cn(
              "absolute z-[998] bg-white pr-8 pl-12 pt-20 pb-6 shadow-xl sm:right-[40px] sm:top-[40px] right-[20px] top-[25px]"
            )}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              originX: 1,
              originY: 0,
            }}
          >
            <div className="flex flex-col gap-3 w-full pr-36">
              <a
                href="#home"
                className="text-indigo-700 hover:text-indigo-800 transition-all cursor-pointer sm:text-lg md:text-xl navlink before:!bg-indigo-700 w-fit"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-indigo-700 hover:text-indigo-800 transition-all cursor-pointer sm:text-lg md:text-xl navlink before:!bg-indigo-700 w-fit"
              >
                About
              </a>
              <a
                href="#work"
                className="text-indigo-700 hover:text-indigo-800 transition-all cursor-pointer sm:text-lg md:text-xl navlink before:!bg-indigo-700 w-fit"
              >
                Work
              </a>
              <a
                href="#testimonial"
                className="text-indigo-700 hover:text-indigo-800 transition-all cursor-pointer sm:text-lg md:text-xl navlink before:!bg-indigo-700 w-fit"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-indigo-700 hover:text-indigo-800 transition-all cursor-pointer sm:text-lg md:text-xl navlink before:!bg-indigo-700 w-fit"
              >
                Contact
              </a>
            </div>
            <div className="mt-4 w-full h-[2px] bg-neutral-200 mb-4" />
            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:text-lg md:text-xl text-indigo-700 hover:text-indigo-800 transition-all cursor-pointer navlink before:!bg-indigo-700 w-fit"
            >
              My Resume
            </a>

            <div className="mt-4 w-full h-[2px] bg-neutral-200 mb-4" />
            <p className="text-gray-300 mt-4 sm:text-lg lg:text-lg font-semibold uppercase tracking-widest">
              Say Hello
            </p>
            <div className="flex flex-col mt-4 gap-3">
              <a
                href="mailto:amany13business@gmail.com"
                className="cursor-pointer text-indigo-700 hover:text-indigo-800 transition-all sm:text-lg lg:text-xl"
              >
                amany13business@gmail.com
              </a>
              <a className="cursor-pointer text-indigo-700 hover:text-indigo-800 transition-all sm:text-lg lg:text-xl">
                +91 9785177731
              </a>
            </div>
            <div className="flex flex-row gap-12 mt-16">
              <a
                href="https://www.linkedin.com/in/aman-yadav13"
                target="_blank"
                className="text-indigo-700 hover:text-indigo-800 sm:text-lg lg:text-lg transition-all"
              >
                GH
              </a>
              <a
                href="https://github.com/aman-yadav13"
                target="_blank"
                className="text-indigo-700 hover:text-indigo-800 sm:text-lg lg:text-lg transition-all"
              >
                LN
              </a>
              <a
                href="https://www.instagram.com/amannn__y?igsh=MTZiOGNqMWpscDg3NA=="
                target="_blank"
                className="text-indigo-700 hover:text-indigo-800 sm:text-lg lg:text-lg transition-all"
              >
                IG
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
