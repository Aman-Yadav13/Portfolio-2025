"use client";

import type { SectionName } from "@/lib/types";
import React, { useState, createContext, useContext } from "react";

type ActiveAboutContextProviderProps = {
  children: React.ReactNode;
};

type ActiveAboutContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveAboutContext = createContext<ActiveAboutContextType | null>(
  null
);

export default function ActiveAboutContextProvider({
  children,
}: ActiveAboutContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("About");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveAboutContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveAboutContext.Provider>
  );
}

export function useActiveAboutContext() {
  const context = useContext(ActiveAboutContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveAboutContextProvider"
    );
  }

  return context;
}
