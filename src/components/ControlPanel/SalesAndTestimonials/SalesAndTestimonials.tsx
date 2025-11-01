import Testimonials from './Testimonials.tsx';
import Sales from './Sales.tsx';

const SalesAndTestimonials = () => {
  return (
    <div className="flex flex-col items-start gap-6 max-xl:col-span-2 max-lg:col-span-1">
      <Testimonials />
      <Sales />
    </div>
  );
};

export default SalesAndTestimonials;

