import { testimonials } from "@/lib/data";
import { InfiniteMovingCards } from "../components/ui/aceternity/infinity-moving-cards";

export const TestimonialSection = () => {
  return (
    <div
      id="testimonial"
      className="w-full flex items-center justify-center overflow-x-hidden"
    >
      <div className="flex mb-4 sm:mb-12 gap-4 flex-col mt-8 sm:mt-16 w-full max-w-[90%] items-center justify-center">
        <span className="mx-auto rounded-lg text-sm px-2 py-1 sm:px-3 sm:py-1 sm:rounded-xl border bg-violet-700 text-white  sm:text-white sm:text-xl">
          <p>Testimonials</p>
        </span>
        <div className="text-xl sm:max-w-[100%] max-w-[60%] text-center sm:text-start sm:text-2xl md:text-4xl font-bold text-violet-800">
          What Some of my Clients Say
        </div>
        <div className="mt-3 sm:mt-6">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="normal"
          />
        </div>
      </div>
    </div>
  );
};
