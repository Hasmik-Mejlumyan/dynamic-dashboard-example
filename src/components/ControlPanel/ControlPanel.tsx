import Inbox from './Inbox/Inbox.tsx';

const ControlPanel = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Inbox />
    </div>
  );
};

export default ControlPanel;
