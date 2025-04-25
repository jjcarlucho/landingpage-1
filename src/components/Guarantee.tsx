import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-7">
            <div className="md:col-span-2 bg-blue-600 p-8 flex flex-col items-center justify-center text-white text-center">
              <ShieldCheck className="h-20 w-20 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Our Guarantee</h3>
              <div className="text-3xl font-bold">14 Days</div>
              <p className="text-blue-100 text-sm mt-2">100% Money Back</p>
            </div>

            <div className="md:col-span-5 p-8">
              <h3 className="text-2xl font-bold mb-4">
                14-Day 100% Money-Back Guarantee
              </h3>
              <p className="text-gray-700 mb-4">
                We're so confident in the power of The Game Changer methodology
                that we're offering an unconditional 14-day money-back
                guarantee. Here's how it works:
              </p>

              <ul className="space-y-4 mb-6">
                <li className="flex">
                  <div className="bg-blue-100 text-blue-600 font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    1
                  </div>
                  <p>
                    Get your copy of The Game Changer and start implementing the
                    strategies.
                  </p>
                </li>
                <li className="flex">
                  <div className="bg-blue-100 text-blue-600 font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    2
                  </div>
                  <p>Follow the step-by-step system outlined in the book.</p>
                </li>
                <li className="flex">
                  <div className="bg-blue-100 text-blue-600 font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    3
                  </div>
                  <p>
                    If you're unsatisfied for any reason, simply email our
                    support team within 14 days of your purchase.
                  </p>
                </li>
                <li className="flex">
                  <div className="bg-blue-100 text-blue-600 font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    4
                  </div>
                  <p>
                    We'll refund 100% of your investment, no questions asked.
                  </p>
                </li>
              </ul>

              <p className="text-gray-700 italic">
                "We take all the risk because we know how powerful these
                strategies are when applied. Your success is our highest
                priority."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
