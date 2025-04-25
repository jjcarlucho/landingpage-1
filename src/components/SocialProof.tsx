import React from 'react';
import { Star, Quote } from 'lucide-react';

const SocialProof: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Life Coach & Author',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80',
      content:
        "I was skeptical at first, but The GameChanger completely transformed my business. Within 30 days, I had my book written and published. Now I'm making $6,500/month on autopilot!",
      revenue: '$6,500/month',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Digital Marketing Consultant',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80',
      content:
        'The templates alone are worth 10x the price. I followed the system exactly and my first book generated $8,200 in the first month. This is a game-changer!',
      revenue: '$8,200/month',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Business Strategist',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80',
      content:
        'As someone who struggled with writing, The GameChanger made it incredibly simple. The AI tools and templates helped me create a professional book that now generates $5,300 monthly.',
      revenue: '$5,300/month',
      rating: 5,
    },
  ];

  const stats = [
    { label: 'Active Students', value: '1,847+' },
    { label: 'Combined Revenue', value: '$27M+' },
    { label: 'Success Rate', value: '94%' },
    { label: 'Countries', value: '47+' },
  ];

  return (
    <section className="bg-neutral-800 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real Results From Real People
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These are just a few of the 1,847+ success stories from students
              who took action with The GameChanger system
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-neutral-900 rounded-xl p-6 relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-amber-400/20" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Revenue Badge */}
                <div className="inline-block bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm font-semibold mb-6">
                  Now earning {testimonial.revenue}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-white font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured In Section */}
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-6">AS FEATURED IN</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              {[
                'Forbes',
                'Entrepreneur',
                'Inc.',
                'Business Insider',
                'HuffPost',
              ].map((brand, index) => (
                <div key={index} className="text-xl font-bold text-gray-300">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
