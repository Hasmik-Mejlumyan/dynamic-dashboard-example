import type { FC } from 'react';
import type { IBreadCrumbProps } from './types.ts';
import { ChevronRight } from 'lucide-react';

const BreadCrumb: FC<IBreadCrumbProps> = ({ items, className = '', ...props }) => {
  const breadCrumbContent = (
    items.map((item, index) => {
      if (index + 1 === items.length) {
        return <span className="text-white-muted" key={index}>{item.label}</span>;
      }

      return (
        <>
          <a className="text-white-soft" href={item.href} key={index}>{item.label}</a>
          <ChevronRight className="size-3.5 text-white-soft" />
        </>
      );
    })
  );

  return (
    <div className={`flex items-center gap-2 ${className}`} {...props}>{breadCrumbContent}</div>
  )
};

export default BreadCrumb;
