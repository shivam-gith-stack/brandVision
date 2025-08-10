import { motion, useAnimation , AnimatePresence } from 'framer-motion';
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


const EcommercePage = () => {
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
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 overflow-hidden">
      {/* Floating Marketplace Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 200 - 100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
        {/* Hero Section with Enhanced Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* Enhanced Heading with Gradient Animation */}
          <motion.div
            className="relative inline-block"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl lg:text-8xl font-bold text-white mb-6"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 block">
                E-commerce
              </span>
              <motion.span
                className="block"
                initial={{ filter: 'blur(5px)', opacity: 0 }}
                animate={{ filter: 'blur(0px)', opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Growth Engine
              </motion.span>
            </motion.h1>
            
            {/* Glowing Border Effect */}
            <motion.div
              className="absolute inset-0 rounded-full blur-xl opacity-0"
              animate={{
                opacity: [0, 0.3, 0],
                background: 'radial-gradient(circle, rgba(59,130,246,0.8) 0%, rgba(59,130,246,0) 70%)'
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            />
          </motion.div>
          
          {/* Typing Animation Subtitle */}
          <motion.p 
            className="text-xl text-blue-200 max-w-3xl mx-auto mb-12 overflow-hidden whitespace-nowrap"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, delay: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            Transform your online store into a conversion machine with our data-driven strategies
          </motion.p>

          {/* Animated CTA Button */}
          <motion.div
            initial={{ scale: 0, rotateY: 180 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ delay: 1.2, type: 'spring', stiffness: 100 }}
            className="relative inline-block"
          >
            <button onClick={() => setIsFormOpen(true)} className="px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-xl font-bold rounded-full relative overflow-hidden group">
              <span className="relative z-10">Boost Your Sales →</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 opacity-0 group-hover:opacity-100"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.6 }}
              />
            </button>
          </motion.div>
        </motion.div>

        {/* E-commerce Marketing Services */}
        <motion.div 
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {[
            { 
              title: 'Conversion Optimization',
              description: 'Increase your store conversion rates with our proven UX strategies and A/B testing methodologies.',
              icon: '📈',
              color: 'from-blue-600 to-blue-800'
            },
            { 
              title: 'Paid Advertising',
              description: 'Maximize ROAS with our targeted ad campaigns across Google, Facebook, and Instagram.',
              icon: '💰',
              color: 'from-purple-600 to-blue-600'
            },
            { 
              title: 'SEO Strategy',
              description: 'Dominate search results with our comprehensive e-commerce SEO framework.',
              icon: '🔍',
              color: 'from-cyan-600 to-blue-600'
            }
          ].map((service, i) => (
            <motion.div
              key={service.title}
              className={`bg-gradient-to-br ${service.color} rounded-xl p-8 shadow-2xl overflow-hidden relative`}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.7 + i * 0.2, type: 'spring' }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 50px rgba(59, 130, 246, 0.5)'
              }}
            >
              <motion.div
                className="text-6xl mb-6"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                {service.icon}
              </motion.div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-blue-100 mb-6">{service.description}</p>
              
              <motion.button
                className="text-white text-sm font-medium flex items-center"
                whileHover={{ x: 5 }}
              >
                Learn more <span className="ml-1">→</span>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Results Showcase */}
        <motion.div 
          className="mt-32 bg-white/10 backdrop-blur-sm p-12 rounded-3xl border border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.7 }}
          >
            Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Results</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: '3-5X',
                description: 'Increase in conversion rates for our clients',
                icon: '🚀'
              },
              {
                metric: '40-70%',
                description: 'Reduction in customer acquisition costs',
                icon: '📉'
              },
              {
                metric: '90%+',
                description: 'Client retention rate year over year',
                icon: '❤️'
              }
            ].map((result, i) => (
              <motion.div
                key={result.metric}
                className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 p-8 rounded-xl border border-blue-800/20 text-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.9 + i * 0.2, type: 'spring' }}
                whileHover={{ y: -5 }}
              >
                <div className="text-5xl mb-4">{result.icon}</div>
                <div className="text-5xl font-bold text-blue-400 mb-4">{result.metric}</div>
                <p className="text-blue-200">{result.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Case Study Highlights */}
        <motion.div 
          className="mt-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3.7 }}
          >
            Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Stories</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "From $10K to $100K Monthly Revenue",
                description: "How we transformed a niche fashion brand into a market leader in 8 months",
                metrics: ["+450% revenue growth", "60% repeat customer rate", "35% conversion rate"],
                color: 'from-blue-600/20 to-blue-800/20'
              },
              {
                title: "Scaling to 7 Figures with Paid Ads",
                description: "Our strategic approach to scaling a home goods store profitably",
                metrics: ["5.8x ROAS", "$2.50 CAC", "3.5% conversion rate"],
                color: 'from-cyan-600/20 to-blue-600/20'
              }
            ].map((caseStudy, i) => (
              <motion.div
                key={caseStudy.title}
                className={`bg-gradient-to-br ${caseStudy.color} p-8 rounded-xl border border-blue-800/30`}
                initial={{ x: i % 2 === 0 ? -50 : 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 3.9 + i * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">{caseStudy.title}</h3>
                <p className="text-blue-200 mb-6">{caseStudy.description}</p>
                <ul className="space-y-2">
                  {caseStudy.metrics.map((metric, j) => (
                    <li key={j} className="flex items-center text-blue-100">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {metric}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="mt-32 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-white mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 4.7 }}
          >
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Transform</span> Your E-commerce?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-200 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.9 }}
          >
            Let's discuss how we can scale your online business with our proven marketing strategies.
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 5.1, type: 'spring' }}
          >
            <button onClick={() => setIsFormOpen(true)} className="px-12 py-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
              <span className="relative z-10 group-hover:scale-105 transition-transform duration-300 block">
                Get Your Free Strategy Session →
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating CTA */}
      <motion.div
        className="fixed bottom-8 left-0 right-0 flex justify-center z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 5.5 }}
      >
        <motion.button
        onClick={() => setIsFormOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-full shadow-xl flex items-center cursor-pointer"
          animate={{
            boxShadow: ['0 5px 15px rgba(59, 130, 246, 0.3)', '0 10px 30px rgba(59, 130, 246, 0.5)', '0 5px 15px rgba(59, 130, 246, 0.3)']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="mr-2">Ready to scale your e-commerce business?</span>
          <motion.span
            animate={{
              x: [0, 5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            Let's talk →
          </motion.span>
        </motion.button>
      </motion.div>
      <ConsultationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};

export default EcommercePage;