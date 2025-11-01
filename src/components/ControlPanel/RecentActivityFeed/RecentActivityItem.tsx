import type { FC } from 'react';
import type { IRecentActivityItemProps } from './types.ts';

const RecentActivityItem: FC<IRecentActivityItemProps> = ({ date, message }) => {
  return (
    <li className="pb-7 pl-7 relative border-l border-border-color last:border-l-transparent">
      <div className="absolute left-0 top-0 -translate-x-1/2 bg-white border-4 border-primary rounded-full w-5 h-3" />
      <div className="py-3 px-5 bg-recent-activity-item-bg text-sm">
        <span className="text-recent-activity-date">
          {date}
        </span>
        <p className="text-text-color mt-1">
          {message}
        </p>
      </div>
    </li>
  );
};

export default RecentActivityItem;
