import { projectsData } from "@/lib/data";
import { ProjectCard } from "./projects-card";
import { LucideArrowUpRight } from "lucide-react";

export const Work = () => {
  return (
    <div className="px-4 py-2 max-w-[90%] mx-auto mt-4 sm:mt-16" id="work">
      <div className="w-full flex items-center justify-center flex-col gap-4">
        <span className="mx-auto rounded-lg text-sm px-2 py-1 sm:px-3 sm:rounded-xl border bg-violet-700 text-white sm:text-white sm:text-xl">
          My Work
        </span>
        <div className="text-center md:max-w-[75%] sm:max-w-[80%] max-w-[80%] lg:max-w-[65%] text-sm sm:text-base md:text-lg text-violet-950">
          Each project below reflects my approach to solving real-world problems
          through thoughtful design, full-stack engineering, and intelligent
          systems. From cloud-powered platforms to AI-driven solutions, here's
          some of the ideas I've brought to life — engineered with purpose,
          precision, and passion.
        </div>
      </div>
      <div className="w-full mt-8 sm:mt-16 flex flex-col">
        {projectsData.map((projectData, i) => (
          <div key={i} className="w-full flex items-center gap-2">
            <div className="flex-1 hover:bg-violet-50 transition">
              <ProjectCard projectData={projectData} />
            </div>
            <a
              href={projectData?.projectLink}
              target="_blank"
              className="hover:text-white hover:bg-violet-600 group/projLink transition-all duration-200 hover:border-violet-700 rounded-full lg:min-h-10 lg:min-w-10 md:min-h-9 md:min-w-9 sm:min-h-7 sm:min-w-7 bg-transparent border border-violet-800 flex items-center justify-center"
            >
              <LucideArrowUpRight className="text-violet-700 group-hover/projLink:text-white transition-all duration-200" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
