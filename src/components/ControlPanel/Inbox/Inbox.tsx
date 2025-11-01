import Card from '../../UI/Card/Card.tsx';
import InboxItem from './InboxItem.tsx';

import inbox from '../../../mock/inbox.json';

const Inbox = () => {
  const inboxItemsContent = (
    inbox.map((item) => (
      <InboxItem
        key={item.name}
        image={item.image}
        name={item.name}
        message={item.message}
        time={item.time}
      />
    ))
  );

  return (
    <Card title="Inbox">
      {inboxItemsContent}
    </Card>
  );
};

export default Inbox;
