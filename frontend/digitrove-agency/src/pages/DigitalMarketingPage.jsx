import { motion, useAnimation ,  AnimatePresence} from 'framer-motion';
import { useEffect , useState } from 'react';
import { X } from 'lucide-react';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';

const ConsultationForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting , setIsSubmitting] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const toastPromise = toast.promise(
      Promise.all([
        emailjs.send(
          "service_f2pb3ha",
          "template_tpsm8ey",
          {
            from_name: formData.name,
            user_email: formData.email,
            phone: formData.phone,
            company: formData.company,
            service: formData.service,
            message: formData.message
          },
          "nxRxF1j0C-CucnBHw"
        ),
        
        fetch('https://brandvision-2.onrender.com/api/v1/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
      ]),
      {
        loading: 'Sending your message...',
        success: '🎉 Delivered! We\'ll reach out soon.',
        error: 'Oops! Message failed to send.'
      }
    );

    await toastPromise;
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });

    onClose();
  } catch (error) {
    console.error('Error submitting form:', error);
  } finally {
    setIsSubmitting(false);
  }
};

const handleInputChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-gradient-to-br from-gray-900 to-purple-900/80 rounded-2xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 max-w-md w-full p-6"
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            transition={{ type: 'spring', damping: 25 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-purple-300 hover:text-white transition-colors"
              disabled={isSubmitting}
            >
              <X className="h-5 w-5" />
            </button>

            <div className="max-h-[80vh] overflow-y-auto pr-2">
              <motion.h3 
                className="text-xl font-bold text-white mb-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Free Consultation
              </motion.h3>
              <motion.p 
                className="text-purple-200 text-sm mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Let's discuss your project needs
              </motion.p>

              <form onSubmit={handleSubmit} className="space-y-3">
                {[
                  { label: 'Full Name *', type: 'text', name: 'name', placeholder: 'Your name' },
                  { label: 'Email *', type: 'email', name: 'email', placeholder: 'your@email.com' },
                  { label: 'Phone', type: 'tel', name: 'phone', placeholder: '+91 98765 43210' },
                  { label: 'Company', type: 'text', name: 'company', placeholder: 'Your company' },
                ].map((field) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-xs font-medium text-purple-300 mb-1">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      className="w-full bg-gray-800/50 border border-purple-500/30 rounded-lg px-3 py-2 text-sm text-white placeholder-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      required={field.label.includes('*')}
                      disabled={isSubmitting}
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <label className="block text-xs font-medium text-purple-300 mb-1">
                    Service Interested In *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800/50 border border-purple-500/30 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
                    required
                    disabled={isSubmitting}
                  >
                    <option value="">Select a service</option>
                    <option value="ecommerce">E-commerce Marketing</option>
                    <option value="webdev">Web Development</option>
                    <option value="digital">Digital Marketing</option>
                    <option value="design">Graphic & Video Design</option>
                    <option value="photo">Product Photography</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <label className="block text-xs font-medium text-purple-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Tell us about your project..."
                    className="w-full bg-gray-800/50 border border-purple-500/30 rounded-lg px-3 py-2 text-sm text-white placeholder-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    required
                    disabled={isSubmitting}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="pt-2"
                >
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all relative overflow-hidden group text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    <span className="relative z-10">
                      {isSubmitting ? 'Sending...' : 'Send Request'}
                    </span>
                    {!isSubmitting && (
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '0%' }}
                        transition={{ duration: 0.6 }}
                      />
                    )}
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


const DigitalMarketingPage = () => {
  const controls = useAnimation();
  const [isFormOpen, setIsFormOpen] = useState(false);


  useEffect(() => {
    const sequence = async () => {
      await controls.start("visible");
      await controls.start("hover");
    };
    sequence();
  }, [controls]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-900 to-gray-900 overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-green-500/10"
            style={{
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.3, 0],
              y: [0, Math.random() * 200 - 100, 0],
              x: [0, Math.random() * 200 - 100, 0]
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Animated Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.path
          d="M10 100 Q 500 200 990 100"
          stroke="rgba(74, 222, 128, 0.2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 0.5 }}
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* Animated Headline with Gradient Flow */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              className="text-6xl lg:text-8xl font-bold text-white mb-6"
              initial={{ letterSpacing: '1em' }}
              animate={{ 
                letterSpacing: '0.1em',
                backgroundImage: 'linear-gradient(45deg, #4ade80, #2dd4bf, #4ade80)',
                backgroundSize: '200% auto'
              }}
              transition={{ 
                duration: 1.5,
                backgroundImage: {
                  duration: 8,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'linear'
                }
              }}
              whileHover={{
                scale: 1.02,
                textShadow: '0 0 20px rgba(74, 222, 128, 0.7)'
              }}
            >
              <motion.span
                animate={{
                  backgroundPosition: ['0%', '100%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'linear'
                }}
                className="text-transparent bg-clip-text"
              >
                GROWTH ENGINE
              </motion.span>
            </motion.h1>
          </motion.div>
          
          {/* Typing Animation for Subtitle */}
          <motion.p 
            className="text-xl text-green-200 max-w-3xl mx-auto mb-12 overflow-hidden whitespace-nowrap"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, delay: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            Transform your digital presence with our cutting-edge marketing strategies that deliver measurable ROI
          </motion.p>

          {/* 3D Button with Hover Effects */}
          <motion.div
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ delay: 1.2, type: 'spring', stiffness: 100 }}
            whileHover={{ y: -5 }}
          >
            <motion.button 
            onClick={() => setIsFormOpen(true)}
              className="px-10 py-5 bg-gradient-to-r from-green-600 to-teal-600 text-white text-xl font-bold rounded-full relative overflow-hidden group"
              whileHover={{ 
                boxShadow: '0 10px 25px rgba(74, 222, 128, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get Your Free Audit →</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-green-700 to-teal-700 rounded-full opacity-0 group-hover:opacity-100"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.6 }}
              />
              <motion.span
                className="absolute -inset-1 bg-white/30 rounded-full blur-md opacity-0 group-hover:opacity-100"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Marketing Services Section */}
        <motion.div 
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {[
            {
              title: "SEO Optimization",
              description: "Climb search rankings with our white-hat SEO techniques that drive organic traffic and sustainable growth.",
              icon: "🔍",
              stats: "Average 3x traffic increase"
            },
            {
              title: "PPC Advertising",
              description: "Precision-targeted campaigns that maximize conversions while minimizing customer acquisition costs.",
              icon: "📈",
              stats: "Typical 5-8x ROAS"
            },
            {
              title: "Content Marketing",
              description: "Compelling content that engages your audience and builds brand authority across all channels.",
              icon: "✍️",
              stats: "2-3x engagement rates"
            }
          ].map((service, i) => (
            <motion.div
              key={i}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.7 + i * 0.2 }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 10px 25px rgba(74, 222, 128, 0.3)'
              }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-green-400 mb-3">{service.title}</h3>
              <p className="text-green-100 mb-4">{service.description}</p>
              <div className="text-sm text-green-300 font-medium">{service.stats}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Results Showcase */}
        <motion.div 
          className="mt-32 bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Proven Results Across Industries</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div>
              <h3 className="text-xl font-semibold text-green-400 mb-4">Ecommerce Brand</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-white">Increased organic traffic by 320% in 6 months</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-white">Reduced CPA by 42% through optimized ad campaigns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-white">Grew email list by 5,000+ qualified leads monthly</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-green-400 mb-4">SaaS Company</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-white">Achieved 8:1 ROAS on LinkedIn ad campaigns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-white">Increased demo signups by 180% quarter-over-quarter</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-white">Reduced churn rate by 35% through email nurturing</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          className="mt-32 relative h-96"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          {[
            {
              quote: "Working with this team transformed our digital presence. Our organic traffic grew by 400% in just 3 months, and we're seeing consistent month-over-month growth.",
              name: "Sarah Johnson",
              title: "Marketing Director, EcoFashion Co.",
              avatar: "👩‍💼"
            },
            {
              quote: "The most effective marketing strategy we've ever implemented. Their data-driven approach helped us reduce customer acquisition costs while doubling our conversions.",
              name: "Michael Chen",
              title: "CEO, TechStart Inc.",
              avatar: "👨‍💻"
            },
            {
              quote: "They completely transformed our lead generation. We went from struggling to fill our pipeline to having more qualified leads than we can handle!",
              name: "Priya Patel",
              title: "Sales Manager, HealthPlus",
              avatar: "👩‍⚕️"
            }
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8 flex flex-col items-center justify-center text-center"
              initial={{ 
                x: i === 0 ? 0 : (i === 1 ? '100%' : '-100%'),
                opacity: i === 0 ? 1 : 0,
                zIndex: i === 0 ? 1 : 0
              }}
              animate={{ 
                x: ['0%', i === 0 ? '-100%' : (i === 1 ? '0%' : '100%'), i === 2 ? '0%' : '100%'],
                opacity: [i === 0 ? 1 : 0, i === 1 ? 1 : 0, i === 2 ? 1 : 0],
                zIndex: [1, 0, 1]
              }}
              transition={{ 
                duration: 12,
                repeat: Infinity,
                times: [0, 0.33, 0.66]
              }}
            >
              <motion.div
                className="text-6xl mb-6"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              >
                {testimonial.avatar}
              </motion.div>
              <div className="text-2xl text-white mb-6">"{testimonial.quote}"</div>
              <div className="text-green-300 font-medium text-lg">{testimonial.name}</div>
              <div className="text-green-200 text-sm">{testimonial.title}</div>
              <motion.div
                className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {[0, 1, 2].map((dot) => (
                  <motion.div
                    key={dot}
                    className={`w-3 h-3 rounded-full ${dot === i ? 'bg-green-400' : 'bg-white/20'}`}
                    animate={{
                      scale: dot === i ? [1, 1.2, 1] : 1
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="mt-32 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Accelerate Your Growth?</h2>
          <p className="text-xl text-green-200 max-w-3xl mx-auto mb-8">
            Schedule your free consultation today and discover how our data-driven approach can transform your digital marketing results.
          </p>
          <motion.button
            onClick={() => setIsFormOpen(true)}
            className="px-12 py-6 bg-gradient-to-r from-green-600 to-teal-600 text-white text-xl font-bold rounded-full relative overflow-hidden group"
            whileHover={{ 
              boxShadow: '0 10px 25px rgba(74, 222, 128, 0.5)',
              y: -3
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Book Your Strategy Session →</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-green-700 to-teal-700 opacity-0 group-hover:opacity-100"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Floating CTA */}
      <motion.div
        className="fixed bottom-8 left-0 right-0 flex justify-center z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 4 }}
      >
        <motion.button
          className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-full shadow-xl flex items-center"
          animate={{
            boxShadow: ['0 5px 15px rgba(74, 222, 128, 0.3)', '0 10px 30px rgba(74, 222, 128, 0.5)', '0 5px 15px rgba(74, 222, 128, 0.3)']
          }}
          transition={{
            duration: 3,
            repeat: Infinity
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsFormOpen(true)}
        >
          <span className="mr-2">Questions? Chat with our team</span>
          <motion.span
            animate={{
              x: [0, 5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          >
            Live Chat →
          </motion.span>
        </motion.button>
      </motion.div>
       <ConsultationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};

export default DigitalMarketingPage;