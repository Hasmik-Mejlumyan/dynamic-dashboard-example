import Card from '../../UI/Card/Card.tsx';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="p-6 flex flex-col items-center justify-center w-full bg-primary">
        <Quote className="text-white/60 mb-2" />
        <p className="text-white">
          The European languages are members of the same family. Their separate existence is a myth.
          For science, music, sport, etc, Europe the same vocabulary. The languages only in their grammar.
        </p>
      </div>
      <Card className="p-6 flex items-start w-full">
        <div className="size-12 mr-4 rounded-full ">
          <img className="w-full h-full block rounded-full" src="/images/static/people/melissa.jpg" alt="Marie Minnick"/>
        </div>
        <div className="flex flex-col items-start flex-1">
          <h4 className="text-text-color">
            Marie Minnick
          </h4>
          <h5 className="text-card-text-color/80">
            Marketing Manager
          </h5>
        </div>
      </Card>

    </div>
  );
};

export default Testimonials;
