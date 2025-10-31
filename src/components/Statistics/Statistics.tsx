import type { FC } from 'react';
import { Layers } from 'lucide-react';
import type { RevenueCardProps } from './types.ts';

const Statistics: FC<RevenueCardProps> = ({
  title,
  value,
  percentage,
  isPositive = false,
}) => {
  return (
    <div className="relative bg-[#7a68c1] text-white rounded-xl p-5 max-w-[300px] shadow-lg overflow-hidden">
      {/* Wave background */}
      <svg
        className="absolute bottom-0 left-0 w-full h-24 text-[#8b7bd1]"
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
      >
        <path
          d="M0.00,49.98 C150.00,150.00 349.47,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          fill="currentColor"
        ></path>
      </svg>

      {/* Content */}
      <div className="relative z-10 flex justify-between items-start">
        <div>
          <p className="text-sm font-medium opacity-90 uppercase">{title}</p>
          <h2 className="text-3xl font-semibold mt-1">
            {typeof value === "number"
              ? `${value.toLocaleString()}`
              : value}
          </h2>

          <div className="flex items-center gap-2 mt-3">
            <span
              className={`text-xs px-2 py-0.5 rounded-md font-semibold ${
                percentage === 0 ? "bg-orange-500 text-white" :
                isPositive
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {percentage === 0 ? '' : isPositive ? "+" : "-"}
              {Math.abs(percentage)}%
            </span>
            <span className="text-sm opacity-90">From previous period</span>
          </div>
        </div>

        <div className="bg-white/15 p-3 rounded-full">
          <Layers className="w-6 h-6 text-white opacity-60" />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
