"use client";

import React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { cn } from "@/lib/utils";

type LinkPreviewProps = {
  children: React.ReactNode;
  className?: string;
  width?: number;
  height?: number;
} & (
  | { isStatic: true; imageSrc: string }
  | { isStatic?: false; imageSrc?: never }
);

export const LinkPreview = ({
  children,
  className,
  width = 200,
  height = 125,
  imageSrc = "",
}: LinkPreviewProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const x = useMotionValue(0);
  const translateX = useSpring(x, { stiffness: 100, damping: 15 });

  const rotateZ = useMotionValue(0);
  const springRotateZ = useSpring(rotateZ, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX =
      ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 300;
    x.set(offsetX);
    const rotation =
      ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 5; // Max 10 degrees tilt
    rotateZ.set(rotation);
  };

  const src = imageSrc;

  const handleMouseLeave = () => {
    setIsOpen(false);
    x.set(0);
    rotateZ.set(0);
  };

  return (
    <>
      {isMounted && (
        <div className="hidden">
          <img
            src={src}
            className="lg:h-[250px] lg:w-[400px] md:h-[175px] md:w-[300px] sm:h-[150px] sm:w-[275px]"
            alt="preload"
          />
        </div>
      )}

      <div
        className="relative w-full overflow-visible"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <div className={cn("relative z-10", className)}>{children}</div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 240,
                  damping: 30,
                  delay: 0.2,
                },
              }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="absolute top-[50%] -translate-y-[50%] left-[50%] z-20"
              style={{
                x: translateX,
                rotateZ: springRotateZ,
              }}
            >
              <div className="p-1 bg-white border-2 border-transparent rounded-xl shadow-xl">
                <img
                  src={src}
                  width={width}
                  height={height}
                  className="rounded-lg"
                  alt="preview"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
