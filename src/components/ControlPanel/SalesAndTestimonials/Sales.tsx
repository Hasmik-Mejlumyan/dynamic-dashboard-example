import Card from '../../UI/Card/Card.tsx';
import { ChevronsRight } from 'lucide-react';

const Sales = () => {
  return (
    <Card title="Yearly Sales" className="w-full">
      <div className="flex justify-between w-full gap-6">
        <div className="flex flex-col items-start">
          <span className="text-text-color text-2xl font-medium mb-2">
            52345
          </span>
          <p className="max-w-[7rem] text-card-text-color/80 mb-4">
            The languages only differ grammar
          </p>
          <a className="flex items-center gap-1 text-primary" href="#">
            <span>Learn More</span>
            <ChevronsRight size={16} />
          </a>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img className="w-3/4 block" src="/images/static/stats-purple.png" alt="Stats"/>
        </div>
      </div>
    </Card>
  );
};

export default Sales;

