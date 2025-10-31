import BreadCrumb from '../../UI/BreadCrumb/BreadCrumb.tsx';
import type { IBreadCrumbItem } from '../../UI/BreadCrumb/types.ts';

import subHeaderStats from '../../../mock/subHeaderStats.json';

const breadCrumbItems: IBreadCrumbItem[] = [
  {
    label: 'Lexa',
    href: '/',
  },
  {
    label: 'Dashboard',
    href: '/'
  },
];

const SubHeader = () => {
  return (
    <div className="bg-background-sub-header">
      <div className="container">
        <div className="pt-5 pb-16 grid grid-cols-2">
          <div>
            <h2 className="text-lg font-medium text-white">Dashboard</h2>
            <BreadCrumb items={breadCrumbItems} />
          </div>
          <div className="flex items-center justify-end gap-10">
            <div className="flex flex-col justify-center items-center">
              <img className="block" src="/images/static/stats-blue.png" alt="Item Sold"/>
              <span className="text-xs text-white-muted mt-1">Item Sold {subHeaderStats.itemSold}</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img className="block" src="/images/static/stats-purple.png" alt="Balance"/>
              <span className="text-xs text-white-muted mt-1">Balance $ {subHeaderStats.balance}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SubHeader;
