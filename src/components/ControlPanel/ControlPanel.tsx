import Inbox from './Inbox/Inbox.tsx';
import RecentActivityFeed from './RecentActivityFeed/RecentActivityFeed.tsx';

const ControlPanel = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Inbox />
      <RecentActivityFeed />
    </div>
  );
};

export default ControlPanel;
