import type { FC } from 'react';
import type { ICardProps } from './types.ts';

const Card: FC<ICardProps> = ({ title, children }) => {
  return (
    <div>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
};

export default Card;