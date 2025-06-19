import { EducationAnimatedSVG } from "./education-svg";
import { EducationTimeline } from "./education-timeline";

export const Education = () => {
  return (
    <div className="flex flex-col items-center w-[90%] px-8 sm:grid sm:grid-cols-2 sm:px-2 sm:w-[95%] sm:place-items-center md:grid md:grid-cols-2 lg:mt-4 md:mt-4 md:px-4 md:w-[90%] lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-12 lg:w-[80%] border border-neutral-200 rounded-md lg:place-items-center md:place-items-center sm:pt-4 shadow-sm shadow-purple-200">
      <EducationAnimatedSVG />
      <EducationTimeline />
    </div>
  );
};
