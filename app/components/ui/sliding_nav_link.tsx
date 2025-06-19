"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import clsx from "clsx";
import { useActiveAboutContext } from "@/context/active-about-context";

export default function AboutNav() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveAboutContext();

  return (
    <div className="relative mt-2">
      <div className="h-10 sm:h-12 md:h-14 w-fit flex items-center justify-center rounded-md px-2 bg-violet-500">
        <nav className="py-1 sm:h-[initial] sm:py-0">
          <ul className="flex flex-wrap items-center justify-center gap-y-1 text-3 font-medium text-white sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
              <li
                className="h-3/4 flex items-center justify-center relative cursor-pointer"
                key={link.name}
              >
                <div
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-2 transition text-xs sm:text-base",
                    {
                      "text-white": activeSection === link.name,
                    }
                  )}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  <p className="z-10">{link.name}</p>

                  {link.name === activeSection && (
                    <motion.span
                      className="bg-violet-700 rounded-md absolute inset-0 z-5"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
