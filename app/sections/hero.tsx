import { LucideArrowUpRight } from "lucide-react";
import { Logo } from "../components/logo";
import { cn } from "@/lib/utils";
import { ContainerTextFlip } from "../components/ui/aceternity/container_text_flip";

export const HeroSection = () => {
  return (
    <div className="h-[100%]" id="home">
      <div className="h-[90%] sm:h-[90%] flex relative flex-col sm:flex-row overflow-hidden">
        <div className="flex flex-row absolute right-[3%] bottom-[6%] gap-1 md:gap-1.5">
          <div className="flex flex-col md:gap-3 gap-1 md:mt-4 mt-2">
            <div className="md:h-2 md:w-2 h-[5px] w-[5px] bg-[#4E39F7] rotate-45" />
            <div className="md:h-2 md:w-2 h-[5px] w-[5px] bg-[#4E39F7] rotate-45" />
            <div className="md:h-2 md:w-2 h-[5px] w-[5px] bg-[#4E39F7] rotate-45" />
            <div className="md:h-2 md:w-2 h-[5px] w-[5px] bg-[#4E39F7] rotate-45" />
            <div className="md:h-2 md:w-2 h-[5px] w-[5px] bg-[#4E39F7] rotate-45" />
          </div>
          <div className="flex flex-col md:gap-3 gap-1 mt-1 md:mt-2">
            <div className="md:h-2 md:w-2 h-[5px] w-[5px] bg-[#4E39F7] rotate-45" />
            <div className="md:h-2 md:w-2 h-[5px] w-[5px] bg-[#4E39F7] rotate-45" />
            <div className="md:h-2 md:w-2 h-[5px] w-[5px] bg-[#4E39F7] rotate-45" />
            <div className="md:h-2 md:w-2 h-[5px] w-[5px] bg-[#4E39F7] rotate-45" />
            <div className="md:h-2 md:w-2 h-[5px] w-[5px] bg-[#4E39F7] rotate-45" />
          </div>
          <div className="flex flex-col md:gap-3 gap-1">
            <div className="md:h-2 md:w-2 h-[5px] w-[5px] bg-[#4E39F7] rotate-45" />
            <div className="md:h-2 md:w-2 h-[5px] w-[5px] bg-[#4E39F7] rotate-45" />
            <div className="md:h-2 md:w-2 h-[5px] w-[5px] bg-[#4E39F7] rotate-45" />
            <div className="md:h-2 md:w-2 h-[5px] w-[5px] bg-[#4E39F7] rotate-45" />
            <div className="md:h-2 md:w-2 h-[5px] w-[5px] bg-[#4E39F7] rotate-45" />
          </div>
          <div className="flex flex-col md:gap-3 gap-1 mt-1 md:mt-2">
            <div className="md:h-2 md:w-2 h-[5px] w-[5px] bg-[#4E39F7] rotate-45" />
            <div className="md:h-2 md:w-2 h-[5px] w-[5px] bg-[#4E39F7] rotate-45" />
            <div className="md:h-2 md:w-2 h-[5px] w-[5px] bg-[#4E39F7] rotate-45" />
            <div className="md:h-2 md:w-2 h-[5px] w-[5px] bg-[#4E39F7] rotate-45" />
            <div className="md:h-2 md:w-2 h-[5px] w-[5px] bg-[#4E39F7] rotate-45" />
          </div>
          <div className="flex flex-col md:gap-3 gap-1 md:mt-4 mt-2">
            <div className="md:h-2 md:w-2 h-[5px] w-[5px] bg-[#4E39F7] rotate-45" />
            <div className="md:h-2 md:w-2 h-[5px] w-[5px] bg-[#4E39F7] rotate-45" />
            <div className="md:h-2 md:w-2 h-[5px] w-[5px] bg-[#4E39F7] rotate-45" />
            <div className="md:h-2 md:w-2 h-[5px] w-[5px] bg-[#4E39F7] rotate-45" />
            <div className="md:h-2 md:w-2 h-[5px] w-[5px] bg-[#4E39F7] rotate-45" />
          </div>
        </div>
        {/* <img
          className="absolute right-4 bottom-[50%] sm:bottom-[20%] sm:left-[48%] rotate-90 lg:w-20 lg:h-20 md:w-16 md:h-16 sm:h-10 sm:w-10 w-6 h-6 select-none"
          src={"/vectors/stairs.svg"}
        /> */}
        <img
          src={"/vectors/whirl_line.svg"}
          className="bg-transparent absolute top-[30%] hidden sm:block sm:-left-[100px] md:-left-[80px] lg:-left-[50px] -rotate-20 scale-[2] -z-0 select-none"
        />
        {/* <img
          src={"/vectors/bulb.svg"}
          className="absolute sm:h-10 sm:w-10 h-6 w-6 md:h-12 md:w-12 top-[55%] sm:top-[85%] left-[75%] sm:left-[45%] md:left-[30%] rotate-45 select-none"
        /> */}
        <div className="h-[70%] sm:h-full w-full sm:w-[70%] bg-indigo-600">
          <Logo />
          <div className="md:pl-8 relative mt-[25%] max-w-[72%] mx-[14%] sm:mx-0 sm:max-w-none sm:absolute sm:mt-0 sm:top-[25%] sm:left-[5%]">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-white font-medium">
                  Currently Available for
                </p>
                <p className="text-white font-medium">
                  Full time roles | Freelance
                </p>
                <div className="flex gap-2">
                  <p className="text-white font-medium">Worldwide</p>
                  <span className="h-7 w-7 border-2 rounded-full flex items-center justify-center cursor-pointer group/world border-[#E2F739]">
                    <LucideArrowUpRight className="h-5 w-5 group-hover/world:rotate-90 transition-all duration-300 text-[#E2F739]" />
                  </span>
                </div>
              </div>
              <div className="h-[2px] md:w-[50%] bg-white" />
              <p className="text-white text-lg font-semibold">
                Hi, I'm Aman Yadav
              </p>
            </div>
            <div className="mt-4">
              <span className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl sm:font-bold text-[#E2F739]">
                A Passionate
              </span>
              <br />
              <ContainerTextFlip
                words={[
                  "Full Stack Developer",
                  "AI/ML Enthusiast",
                  "DevOps Learner",
                ]}
              />
            </div>
            <div className="mt-4">
              <p className="text-white text-xs sm:hidden block">
                Highly skilled at Full Stack Development, Software Design and
                AI/ML Engineering
              </p>
            </div>
          </div>
        </div>
        <div className="h-[30%] sm:h-full w-full sm:w-[30%] bg-[#E2F739]"></div>
        <div className="absolute left-[50%] sm:left-[59%] sm:w-[25%] md:w-[22%] w-[40%] -translate-x-[50%] sm:-translate-x-0 bg-transparent top-[85%] sm:top-[50%] -translate-y-[50%] sm:-translate-y-[50%] !aspect-square">
          <div className="relative h-full w-full">
            <img
              src="/studio_portrait_ai_enhanced.jpg"
              className="object-cover aspect-square select-none"
            />
            {/* <img
              className="select-none absolute md:-right-[60%] sm:top-[60%] sm:-right-[50%] -right-[40%] top-[50%]  lg:-right-[40%] lg:top-[50%] lg:w-20 lg:h-20 md:w-16 md:h-16 sm:h-10 sm:w-10 w-6 h-6"
              src={"/vectors/stairs_indigo.svg"}
            /> */}
            <div className="absolute w-[90%] -bottom-[10%] -right-[10%] sm:w-[90%] sm:-bottom-[10%] sm:-right-[10%] bg-transparent !aspect-square border-4 sm:border-2 border-white -z-1" />
            <div className="absolute w-[60%] -top-[15%] -left-[15%] sm:w-[50%] sm:-top-[15%] sm:-left-[15%] bg-transparent !aspect-square hover:scale-[1.05] transition-all duration-500 -z-1">
              <div
                className={cn(
                  "absolute inset-0",
                  "[background-size:8px_8px]",
                  "[background-image:radial-gradient(#ffffff_2px,transparent_2px)]",
                  "sm:[background-size:12px_12px]",
                  "sm:[background-image:radial-gradient(#ffffff_1px,transparent_2px)]"
                )}
              />
            </div>
            <div className="absolute w-[50%] -bottom-[20%] -right-[20%] sm:w-[40%] sm:-bottom-[20%] sm:-right-[20%] bg-transparent !aspect-square hover:scale-[1.05] transition-all duration-500 -z-1">
              <div
                className={cn(
                  "absolute inset-0",
                  "[background-size:8px_8px]",
                  "[background-image:radial-gradient(#4E39F7_2px,transparent_2px)]",
                  "sm:[background-size:12px_12px]",
                  "sm:[background-image:radial-gradient(#4E39F7_1px,transparent_2px)]"
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
