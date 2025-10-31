import type { ForwardRefExoticComponent } from 'react';
import { Atom, BriefcaseBusiness, ChartPie, FileText, Gauge, List, type LucideProps, Mail } from 'lucide-react';

export interface INavBarItem {
  label: string;
  href: string;
  icon: ForwardRefExoticComponent<LucideProps>;
}

export const navBarItems: INavBarItem[] = [
  {
    label: 'Dashboard',
    href: '/',
    icon: Gauge,
  },
  {
    label: 'Email',
    href: '/email',
    icon: Mail,
  },
  {
    label: 'UI Elements',
    href: '/ui-elements',
    icon: Atom,
  },
  {
    label: 'Forms',
    href: '/forms',
    icon: FileText,
  },
  {
    label: 'More',
    href: '/more',
    icon: List,
  },
  {
    label: 'Charts',
    href: '/charts',
    icon: ChartPie,
  },
  {
    label: 'Pages',
    href: '/pages',
    icon: BriefcaseBusiness,
  },
];
