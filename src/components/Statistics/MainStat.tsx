import type { FC } from 'react';
import { Box, BriefcaseBusiness, Layers, Tag } from 'lucide-react';
import type { IMainStatProps } from './types.ts';

const MainStat: FC<IMainStatProps> = ({
  title,
  value,
  isCurrency,
  percentage,
  icon,
}) => {
  const isPositive = percentage > 0;
  const iconsMapping = {
    cube: <Box className="w-6 h-6 text-white" />,
    layers: <Layers className="w-6 h-6 text-white" />,
    label: <Tag className="w-6 h-6 text-white" />,
    case: <BriefcaseBusiness className="w-6 h-6 text-white" />,
  };

  return (
    <div className="relative bg-primary text-white rounded p-5 shadow-lg overflow-hidden">
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

      <div className="relative z-10 flex justify-between items-start">
        <div>
          <p className="text-sm font-medium opacity-90 uppercase">{title}</p>
          <h3 className="text-3xl font-semibold mt-1">
            {isCurrency ? "$" : ""}{typeof value === "number"
              ? `${value.toLocaleString()}`
              : value}
          </h3>

          <div className="flex items-center gap-2 mt-3">
            <span
              className={`text-xs px-2 py-0.5 rounded-md font-semibold ${
                percentage === 0 ? "bg-orange-500 text-white" :
                isPositive
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {percentage}%
            </span>
            <span className="text-sm opacity-90">From previous period</span>
          </div>
        </div>

        <div className="bg-white/15 p-3 rounded-full">
          {iconsMapping[icon]}
        </div>
      </div>
    </div>
  );
};

export default MainStat;
