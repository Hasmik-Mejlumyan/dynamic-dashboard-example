import type { FC } from 'react';
import type { IInboxItemProps } from './types.ts';

const InboxItem: FC<IInboxItemProps> = ({
  name,
  image,
  message,
  time,
}) => {
  return (
    <div className="flex items-start border-b border-border-color py-[0.625rem] hover:cursor-pointer">
      <div className="size-12 rounded-full mr-3">
        <img className="w-full h-full block rounded-full" src={image} alt={name} />
      </div>
      <div className="flex-1">
        <h4 className="text-inbox-title-color mb-1">{name}</h4>
        <p className="text-text-color/80 text-sm">{message}</p>
      </div>
      <span className="text-text-color/85 text-xs">
        {time}
      </span>
    </div>
  );
};

export default InboxItem;
