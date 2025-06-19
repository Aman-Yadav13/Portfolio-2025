import {
  LucideGraduationCap,
  LucideSchool,
  LucideShieldHalf,
} from "lucide-react";

export const EducationTimeline = () => {
  return (
    <div className="w-fit max-w-[80%] mt-6 flex items-center justify-center col-span-1">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-7 h-7 bg-blue-600 rounded-full -start-3 ring-8 ring-transparent">
            <LucideSchool className="h-4 w-4 text-gray-200" />
          </span>
          <h3 className="flex items-center mb-1 text-sm sm:text-lg font-semibold text-gray-900 dark:text-white">
            Bachelor of Computer Science
            <span className="bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium me-2 px-1 py-0.5 sm:px-2.5 sm:py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">
              Latest
            </span>
          </h3>
          <time className="block mb-2 text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2022-2026
          </time>
          <p className="text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400">
            Vellore Institute of Technology, Vellore
          </p>
          <p className="text-xs sm:text-sm font-normal text-gray-400 mb-4">
            CGPA: 9.54
          </p>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-7 h-7 bg-blue-600 rounded-full -start-3 ring-8 ring-transparent">
            <LucideShieldHalf className="h-4 w-4 text-gray-200" />
          </span>
          <h3 className="mb-1 text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
            Senior Secondary
          </h3>
          <time className="block mb-2 text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2021-2022
          </time>
          <p className="text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400">
            Defense Public School, Jaipur
          </p>
          <p className="text-xs sm:text-sm font-normal text-gray-400 mb-4">
            94.4%
          </p>
        </li>
        <li className="ms-6">
          <span className="absolute flex items-center justify-center w-7 h-7 bg-blue-600 rounded-full -start-3 ring-8 ring-transparent">
            <LucideGraduationCap className="h-4 w-4 text-gray-200" />
          </span>
          <h3 className="mb-1 text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
            Secondary
          </h3>
          <time className="block mb-2 text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2019-2020
          </time>
          <p className="text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400">
            Defense Public School, Jaipur
          </p>
          <p className="text-xs sm:text-sm  font-normal text-gray-400 mb-4">
            95.4%
          </p>
        </li>
      </ol>
    </div>
  );
};
