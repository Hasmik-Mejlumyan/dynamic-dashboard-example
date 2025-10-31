import type { HTMLAttributes, PropsWithChildren } from 'react';

export interface ICardProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
  title?: string;
  titleClassName?: string;
}
