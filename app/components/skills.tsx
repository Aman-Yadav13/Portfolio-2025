"use client";

import React from "react";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/hooks/useSectionInView";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.02 * index,
    },
  }),
};

export const Skills = () => {
  const { ref } = useSectionInView("Skills");

  return (
    <div
      id="skills"
      ref={ref}
      className="md:border md:border-neutral-200 md:rounded-md px-2 py-2 md:px-4 md:py-4 mt-4 lg:max-w-[75%] max-w-[90%] sm:max-w-[80%] scroll-mt-28 text-center"
    >
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill: any, index: any) => (
          <motion.li
            className="text-xs sm:text-sm md:text-base text-violet-950 bg-white border border-violet-100 rounded-xl md:px-5 md:py-3 sm:px-3 sm:py-2 px-2 py-1"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
