import { BentoGrid, BentoGridItem } from "./ui/aceternity/bento-grid";
import dynamic from "next/dynamic";
import { globeConfig, sampleArcs, Stats } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Cover } from "./ui/aceternity/cover";
import { useInView } from "react-intersection-observer";
import StatsCard from "./stats-card";
import FloatButton from "./ui/floatbutton";

const World = dynamic(
  () => import("../components/ui/aceternity/globe").then((m) => m.World),
  {
    ssr: false,
  }
);

export const About = () => {
  return (
    <BentoGrid className="w-[80%]">
      {items.map((item, i) => (
        <BentoGridItem key={i} className={item.className}>
          {item.children}
        </BentoGridItem>
      ))}
    </BentoGrid>
  );
};

const GridBoxOne = () => (
  <div className="relative flex h-full w-full items-center justify-center bg-white dark:bg-black">
    <div className="h-full w-full z-10 px-3 py-3 md:px-4 md:py-3 lg:px-6 lg:py-4 group-hover/bento:translate-x-2 transition">
      <p className="text-sm md:text-base lg:text-lg text-indigo-900 text-justify">
        With hands-on experience in full-stack development and a strong
        foundation in AI/ML, I bring both depth and adaptability to every
        project I take on. I take pride in crafting scalable, intelligent, and
        user-focused digital solutions. From brainstorming to deployment, I
        enjoy turning ideas into impactful products.
      </p>
      <div className="text-xl md:text-3xl lg:text-4xl font-semibold text-violet-700">
        Delivering <Cover>Fast</Cover>, Functional, and Global-Ready Projects
      </div>
    </div>
    <div
      className={cn(
        "absolute inset-0",
        "[background-size:15px_15px]",
        "[background-image:radial-gradient(#B8B8B8_1px,transparent_1px)]",
        "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
      )}
    />
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
  </div>
);

const GridBoxTwo = () => {
  return (
    <div className="relative flex h-full w-full bg-white overflow-hidden">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="h-full w-full px-2 py-2 z-10 group-hover/bento:translate-x-2 transition-all">
        <p className="w-full text-center font-bold text-lg md:text-2xl lg:text-2xl text-violet-600">
          Services Offered
        </p>
        <div className="flex flex-row flex-wrap mt-2 lg:mt-4 space-y-2 space-x-2">
          <FloatButton
            mts={5}
            ms={10}
            className={
              "bg-violet-600 text-white sm:text-sm text-xs md:text-sm lg:text-base w-fit px-2 py-1 md:px-2 md:py-2"
            }
          >
            <div>Full-Stack Development</div>
          </FloatButton>
          <FloatButton
            mts={5}
            ms={10}
            className={
              "bg-violet-600 text-white sm:text-sm text-xs md:text-sm lg:text-base w-fit px-2 py-1 md:px-2 md:py-2"
            }
          >
            <div>App Development</div>
          </FloatButton>
          <FloatButton
            mts={5}
            ms={10}
            className={
              "bg-violet-600 text-white sm:text-sm text-xs md:text-sm lg:text-base w-fit px-2 py-1 md:px-2 md:py-2"
            }
          >
            <div>Backend Systems</div>
          </FloatButton>
          <FloatButton
            mts={5}
            ms={10}
            className={
              "bg-violet-600 text-white sm:text-sm text-xs md:text-sm lg:text-base  w-fit px-2 py-1 md:px-2 md:py-2"
            }
          >
            <div>AI/ML Integration</div>
          </FloatButton>
          <FloatButton
            mts={5}
            ms={10}
            className={
              "bg-violet-600 text-white sm:text-sm text-xs md:text-sm lg:text-base w-fit px-2 py-1 md:px-2 md:py-2"
            }
          >
            <div>AI Prototyping</div>
          </FloatButton>
          <FloatButton
            mts={5}
            ms={10}
            className={
              "bg-violet-600 text-white sm:text-sm text-xs md:text-sm lg:text-base w-fit px-2 py-1 md:px-2 md:py-2"
            }
          >
            <div>Tech Consulting</div>
          </FloatButton>
          <FloatButton
            mts={5}
            ms={10}
            className={
              "bg-violet-600 text-white sm:text-sm text-xs md:text-sm lg:text-base w-fit px-2 py-1 md:px-2 md:py-2"
            }
          >
            <div>Data Analysis</div>
          </FloatButton>
        </div>
      </div>
    </div>
  );
};

const GlobeItem = () => (
  <div className="relative h-full w-full overflow-hidden">
    <p className="group-hover/bento:translate-x-2 transition text-sm sm:text-lg text-center lg:text-start text-indigo-900">
      Transforming Client Ideas into{" "}
      <span className="font-semibold text-violet-600">Scalable Solutions</span>{" "}
      Worldwide.
    </p>
    <div className="-translate-x-[50%] -bottom-[40%] left-[50%] sm:-bottom-[50%] sm:left-[50%] sm:-translate-x-[50%] absolute h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] lg:-bottom-[70%] lg:h-[400px] lg:w-[400px] lg:left-[50%] lg:-translate-x-[50%]">
      <World data={sampleArcs} globeConfig={globeConfig} />
    </div>
  </div>
);

const GridBoxFour = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      className="h-full w-full px-2 py-2 lg:px-4 lg:py-2 group-hover/bento:translate-x-2 transition"
      ref={ref}
    >
      <div className="grid grid-rows-3 grid-cols-2 sm:grid-cols-3 sm:grid-rows-2 gap-x-2 gap-y-2 md:gap-x-4 md:gap-y-4 h-full w-full">
        {inView &&
          Stats.map((stat, index) => <StatsCard key={index} {...stat} />)}
      </div>
    </div>
  );
};

const items = [
  {
    children: <GridBoxOne />,
    className: "lg:col-span-2",
  },
  {
    children: <GridBoxTwo />,
    className: "lg:col-span-1",
  },
  {
    children: <GlobeItem />,
    className: "lg:col-span-1 min-h-[200px] sm:min-h-[250px] lg:min-h-0",
  },
  {
    children: <GridBoxFour />,
    className: "lg:col-span-2",
  },
];
