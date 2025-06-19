"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import gsap, { Power4, Elastic } from "gsap";

interface FloatButtonProps {
  className?: string | null;
  buttonText?: string;
  ms: number;
  mts: number;
  children?: React.ReactNode;
  onClick?: () => void;
  insideSpan?: boolean;
  insideSpanText?: string;
  type?: string;
  disabled?: boolean;
}

type btnType = "submit" | "reset" | "button" | undefined;

const FloatButton = ({
  className,
  buttonText,
  insideSpan = true,
  ms,
  mts,
  disabled,
  type,
  children,
  insideSpanText,
  onClick,
}: FloatButtonProps) => {
  const magnetoRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const magneto = magnetoRef.current;

    if (!magneto) {
      return;
    }

    const activeMagneto = (event: MouseEvent) => {
      let boundBox = magneto.getBoundingClientRect();
      const magnetoStrenth = ms;
      const magnetoTextStrength = mts;
      const newX = (event.clientX - boundBox.left) / magneto.offsetWidth - 0.5;
      const newY = (event.clientY - boundBox.top) / magneto.offsetHeight - 0.5;

      gsap.to(magneto, {
        duration: 1,
        x: newX * magnetoStrenth,
        y: newY * magnetoStrenth,
        ease: Power4.easeOut,
      });

      // Apply magneto effect to children
      gsap.to(magneto.children, {
        duration: 1,
        x: newX * magnetoTextStrength,
        y: newY * magnetoTextStrength,
        ease: Power4.easeOut,
      });
    };

    const resetMagneto = () => {
      gsap.to(magneto, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut,
      });

      // Reset magneto effect on children
      gsap.to(magneto.children, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut,
      });
    };

    magneto.addEventListener("mousemove", activeMagneto);
    magneto.addEventListener("mouseleave", resetMagneto);

    return () => {
      magneto.removeEventListener("mousemove", activeMagneto);
      magneto.removeEventListener("mouseleave", resetMagneto);
    };
  }, [ms, mts]);

  return (
    <button
      type={type as btnType}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "floater z-[20] flex items-center justify-center rounded-full",
        !insideSpan &&
          "group border-2 transition-all duration-100 border-muted-foreground hover:border-none overflow-hidden",
        className
      )}
      id="floater"
      ref={magnetoRef}
    >
      <span className="z-10 relative" id="text">
        {buttonText}
        {children}
        {!insideSpan ? (
          <span className="flex items-center justify-center h-[150px] w-[150px] -translate-x-[30%] translate-y-[50%] group-hover:-translate-y-[60%] bg-sky-700 absolute rounded-full transition-transform duration-500">
            <p className="text-white text-lg font-bold z-[10]">
              {insideSpanText}
            </p>
          </span>
        ) : null}
      </span>
    </button>
  );
};

export default FloatButton;
