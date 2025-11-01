import Testimonials from './Testimonials.tsx';
import Sales from './Sales.tsx';

const SalesAndTestimonials = () => {
  return (
    <div className="flex flex-col items-start gap-6">
      <Testimonials />
      <Sales />
    </div>
  );
};

export default SalesAndTestimonials;

