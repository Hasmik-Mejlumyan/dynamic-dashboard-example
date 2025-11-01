import type { FC } from 'react';
import type { ICardProps } from './types.ts';

const Card: FC<ICardProps> = ({
  title,
  titleClassName = '',
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={`p-5 rounded bg-card-background shadow-[0_-3px_31px_0_#0000000d,0_6px_20px_0_#00000005] ${className}`} {...props}>
      {title && (
        <h2 className={`text-card-text-color mb-4 font-medium ${title} ${titleClassName}`}>{title}</h2>
      )}
      {children}
    </div>
  );
};

export default Card;
