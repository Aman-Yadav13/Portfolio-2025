import { LucideArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { LinkPreview } from "./ui/aceternity/link-preview";

interface ProjectCardProps {
  projectData: {
    projectNumber: string;
    projectTitle: string;
    projectDescription: string;
    projectLink: string;
    projectPreview: string;
  };
}

export const ProjectCard = ({ projectData }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <LinkPreview
      isStatic
      imageSrc={projectData?.projectPreview}
      height={250}
      width={400}
    >
      <motion.div
        layout
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="w-full border-b-2 border-b-violet-200 transition-all duration-200 hover:border-b-violet-600 px-4 pb-6 pt-4 cursor-pointer"
        transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
      >
        <div className="flex items-center gap-12">
          <p className="font-semibold sm:text-xl md:text-2xl text-violet-800">
            {projectData?.projectNumber}
          </p>
          <div className="flex items-center justify-between w-full">
            <div>
              <p className="sm:text-2xl md:text-3xl lg:text-4xl font-bold text-violet-600">
                {projectData?.projectTitle}
              </p>
              <div className="sm:hidden mt-2">
                <p className="text-xs text-violet-900 max-w-[90%]">
                  {projectData?.projectDescription}
                </p>
              </div>

              <AnimatePresence initial={false}>
                {isHovered && (
                  <motion.div
                    layout
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden mt-2 hidden sm:block"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className="text-xs md:text-sm text-violet-900 max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[40%] text-justify">
                      {projectData?.projectDescription}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </LinkPreview>
  );
};
