import { HTMLAttributes } from 'react';

export interface IBreadCrumbItem {
  label: string;
  href: string;
}

export interface IBreadCrumbProps extends HTMLAttributes<HTMLDivElement> {
  items: IBreadCrumbItem[];
}
