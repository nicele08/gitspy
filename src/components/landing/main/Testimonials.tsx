import { FaQuoteLeft } from 'react-icons/fa';

import testimonials from '@/utils/data/testimonials';

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-gray-100  transition-all duration-300 dark:bg-gray-800 py-20 w-full"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl text-center font-bold text-gray-900  transition-all duration-300 dark:text-white mb-8">
          What Our Users Are Saying
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.author.name}
              className="bg-white  transition-all duration-300 dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="text-gray-600  transition-all duration-300 dark:text-gray-300 mb-4">
                  <FaQuoteLeft className="inline-block mr-2" />
                  {testimonial.quote}
                </div>
                <div className="flex items-center">
                  <img
                    src={testimonial.author.image}
                    alt={testimonial.author.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div className="text-gray-800  transition-all duration-300 dark:text-gray-100">
                    <p className="font-bold">
                      {testimonial.author.name}
                    </p>
                    <p>{testimonial.author.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
