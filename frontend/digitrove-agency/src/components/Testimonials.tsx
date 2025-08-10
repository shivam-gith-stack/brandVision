import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rohit Sharma',
      position: 'Marketing Director',
      content: 'BrandVision Digital transformed our digital presence completely. Their e-commerce strategies increased our online sales by 300% in just 6 months.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Sneha Patel',
      position: 'Operations Manager',
      content: 'The team at BrandVision Digital is exceptional. They delivered a stunning website that perfectly captures our brand essence and drives conversions.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'Arjun Kumar',
      position: 'Marketing Head',
      content: 'Working with BrandVision Digital has been a game-changer. Their digital marketing expertise helped us reach new heights in customer acquisition.',
      rating: 5,
      image: '👨‍🚀'
    },
    {
      name: 'Priya Mehta',
      position: 'Operations Manager',
      content: 'Professional, creative, and results-driven. BrandVision Digital exceeded our expectations in every aspect of our digital transformation project.',
      rating: 5,
      image: '👩‍💻'
    },
    {
      name: 'Vikash Singh',
      position: 'Marketing Director',
      content: 'The ROI we achieved through BrandVision Digitals marketing campaigns is outstanding. They truly understand how to drive business growth.',
      rating: 5,
      image: '👨‍💻'
    },
    {
      name: 'Anita Raj',
      position: 'Marketing Head',
      content: 'BrandVision Digital team is responsive, professional, and delivers quality work on time. They have become an integral part of our success.',
      rating: 5,
      image: '👩‍🎯'
    }
  ];

  const clientLogos = [
    'Duroflex', 'Myoc', 'Shoprythm', 'TechCorp', 'GrowthLab', 'InnovateCo',
    'FlexiTech', 'SmartSolutions', 'NextGen', 'ProActive', 'DigiForce', 'BlueWave'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about our services and results.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="h-8 w-8 text-green-600 opacity-50" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-3">
                <div className="text-3xl">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-green-600 font-medium">{testimonial.position}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos Section */}
        <div className="border-t border-gray-200 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Leading Brands</h3>
            <p className="text-gray-600">
              We're proud to work with innovative companies across various industries
            </p>
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((logo, index) => (
              <div
                key={logo}
                className="flex items-center justify-center h-16 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <span className="text-gray-400 font-bold text-sm">{logo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-green-600">99%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-600">200+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-600">500+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-orange-600">5.0</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;