import MainStat from './MainStat.tsx';

import mainStats from '../../mock/mainStats.json';
import type { IconType } from './types.ts';

const MainStats = () => {
  const mainStatsContent = (
    mainStats.map((item) => (
      <MainStat
        key={item.title}
        title={item.title}
        value={item.value}
        isCurrency={item.isCurrency}
        percentage={item.percentage}
        icon={item.icon as IconType}
      />
    ))
  )
  return (
    <div className="grid grid-cols-4 gap-6 mb-6 max-xl:grid-cols-2 max-md:grid-cols-1">
      {mainStatsContent}
    </div>
  );
};

export default MainStats;
