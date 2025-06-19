"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/hooks/useSectionInView";

export const Experience = () => {
  const { ref } = useSectionInView("Experience");

  return (
    <div
      id="experience"
      ref={ref}
      className="mt-12 scroll-mt-28 lg:border lg:px-4 lg:py-4 px-0 py-0 rounded-none lg:rounded-lg lg:border-neutral-200"
    >
      <VerticalTimeline lineColor="">
        {experiencesData.map((item: any, index: any) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#0369a1",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #075985",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "#0284c7",
                color: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize text-white">
                {item.title}
              </h3>
              <p className="font-normal !mt-0 text-gray-300">{item.company}</p>
              <p className="!mt-1 !font-normal text-white dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </div>
  );
};
