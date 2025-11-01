import Inbox from './Inbox/Inbox.tsx';
import RecentActivityFeed from './RecentActivityFeed/RecentActivityFeed.tsx';
import SalesAndTestimonials from './SalesAndTestimonials/SalesAndTestimonials.tsx';

const ControlPanel = () => {
  return (
    <div className="grid grid-cols-3 gap-6 mb-6 max-xl:grid-cols-2 max-lg:grid-cols-1">
      <Inbox />
      <RecentActivityFeed />
      <SalesAndTestimonials />
    </div>
  );
};

export default ControlPanel;
