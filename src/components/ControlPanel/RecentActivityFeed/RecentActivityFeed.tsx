import RecentActivityItem from './RecentActivityItem.tsx';
import Card from '../../UI/Card/Card.tsx';
import Button from '../../UI/Button/Button.tsx';

import recentActivity from '../../../mock/recentActivity.json';

const RecentActivityFeed = () => {
  const recentActivityContent = (
    recentActivity.map((item) => (
      <RecentActivityItem
        key={item.date}
        date={item.date}
        message={item.message}
      />
    ))
  );

  return (
    <Card title="Recent Activity Feed">
      <ul className="list-none p-3.5">
        {recentActivityContent}
        <Button className="text-xs mx-auto block">
          Load More
        </Button>
      </ul>
    </Card>
  );
};

export default RecentActivityFeed;
