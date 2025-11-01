import type { FC } from 'react';
import type { IChartsOverallDataProps } from './types.ts';

const ChartsOverallData: FC<IChartsOverallDataProps> = ({ data }) => {
  return (
    <div className="flex items-center justify-around mb-4">
      {data.map((item, index) => (
        <div className="flex flex-col items-center justify-center" key={index}>
          <p className="text-lg font-medium text-text-color">${item.value}</p>
          <h3 className="text-sm font-semibold text-text-color/80">{item.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default ChartsOverallData;
