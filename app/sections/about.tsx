import { useActiveAboutContext } from "@/context/active-about-context";
import AboutNav from "../components/ui/sliding_nav_link";
import { About } from "../components/about";
import { Experience } from "../components/experience";
import { Skills } from "../components/skills";
import { Education } from "../components/education";

export const AboutSection = () => {
  const { activeSection } = useActiveAboutContext();

  const renderAboutSection = () => {
    switch (activeSection) {
      case "About":
        return <About />;
      case "Experience":
        return <Experience />;
      case "Skills":
        return <Skills />;
      case "Education":
        return <Education />;
      default:
        return <About />;
    }
  };

  return (
    <div className={`-mt-12 sm:mt-4 w-full`} id="about">
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <span className="rounded-lg text-sm px-2 py-1 sm:px-3 sm:py-1 sm:rounded-xl border bg-violet-700 text-white  sm:text-white sm:text-xl">
          <p>About me</p>
        </span>
        <span className="text-xl sm:max-w-[100%] max-w-[60%] text-center sm:text-start sm:text-2xl md:text-4xl font-bold text-violet-800">
          Building the Future, One Line at a Time
        </span>
        <div className="text-center md:max-w-[75%] sm:max-w-[80%] max-w-[80%] lg:max-w-[65%] text-sm sm:text-base md:text-lg  text-violet-950">
          Hey there, I'm{" "}
          <span className="text-indigo-800 font-medium">Aman Yadav</span>, a
          curious mind who codes with purpose. From architecting full-stack web
          platforms to experimenting with intelligent AI systems and scaling
          with DevOps, I thrive at the intersection of creativity and
          computation. This space is a reflection of my journey, the ideas I've
          built, the problems I've solved, and the tech I've grown with. Always
          exploring, always evolving. If you've got an idea worth building, I'm
          all ears. Let's turn ambition into innovation.
        </div>
        <AboutNav />
        {renderAboutSection()}
      </div>
    </div>
  );
};
