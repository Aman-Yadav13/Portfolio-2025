import React from "react";
import CountUp from "react-countup";

interface StatsCardProps {
  label: string;
  end: number;
  suffix?: string;
  decimals?: number;
}

const StatsCard: React.FC<StatsCardProps> = ({
  label,
  end,
  suffix = "",
  decimals = 0,
}) => {
  return (
    <div className="hover:shadow-md hover:shadow-violet-200 transition-all border border-violet-200 hover:border-violet-300 bg-violet-100 hover:scale-[1.01] rounded-md p-2 text-center row-span-1 col-span-1 flex flex-col items-center justify-center">
      <div className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-violet-600">
        <CountUp end={end} duration={2} suffix={suffix} decimals={decimals} />
      </div>
      <p className="text-violet-600 md:mt-2 text-base sm:text-lg md:text-xl lg:text-xl">
        {label}
      </p>
    </div>
  );
};

export default StatsCard;
