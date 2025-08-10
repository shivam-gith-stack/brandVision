import { motion, useAnimation ,AnimatePresence} from 'framer-motion';
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


const ProductPhotographyPage = () => {
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
    <div className="relative min-h-screen bg-gradient-to-br from-amber-900 to-gray-900 overflow-hidden">
      {/* Floating Camera/Icons Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => {
          const icons = ['📷', '✨', '🛍️', '🌟', '📦'];
          const randomIcon = icons[Math.floor(Math.random() * icons.length)];
          return (
            <motion.div
              key={i}
              className="absolute text-4xl opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50, 0],
                x: [0, Math.random() * 100 - 50, 0],
                rotate: [0, 360],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 15 + Math.random() * 20,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              {randomIcon}
            </motion.div>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
        {/* Hero Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* 3D Text Effect */}
          <motion.h1 
            className="text-6xl lg:text-8xl font-bold text-white mb-6"
            initial={{ 
              letterSpacing: '1em',
              opacity: 0,
              filter: 'blur(10px)'
            }}
            animate={{ 
              letterSpacing: '0.1em',
              opacity: 1,
              filter: 'blur(0px)',
              backgroundImage: 'linear-gradient(45deg, #f59e0b, #fbbf24, #f59e0b)',
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
          >
            <motion.span
              className="text-transparent bg-clip-text block"
              animate={{
                backgroundPosition: ['0%', '100%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'linear'
              }}
            >
              Product Photography
            </motion.span>
          </motion.h1>
          
          {/* Typing Animation Subtitle */}
          <motion.p 
            className="text-xl text-amber-200 max-w-3xl mx-auto mb-12 overflow-hidden whitespace-nowrap"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, delay: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            Stunning visuals that make your products irresistible to customers
          </motion.p>

          {/* 3D Button with Particle Burst */}
          <motion.div
            initial={{ scale: 0, rotateY: 180 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ delay: 1.2, type: 'spring', stiffness: 100 }}
            className="relative inline-block"
          >
            <button onClick={() => setIsFormOpen(true)} className="px-10 py-5 bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xl font-bold rounded-full relative overflow-hidden group">
              <span className="relative z-10">Let's Build Together →</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-900 opacity-0 group-hover:opacity-100"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.6 }}
              />
            </button>
          </motion.div>
        </motion.div>

        {/* Photography Services */}
        <motion.div 
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {[
            { 
              name: 'E-commerce Shots', 
              icon: '🛍️',
              description: 'Clean, consistent product images optimized for online stores',
              color: 'from-amber-500 to-amber-700',
              examples: ['White background', 'Multiple angles', 'Detail shots']
            },
            { 
              name: 'Lifestyle Photography', 
              icon: '🌿',
              description: 'Products in natural settings showing real-world use',
              color: 'from-yellow-500 to-amber-500',
              examples: ['Contextual scenes', 'Models interacting', 'Emotional appeal']
            },
            { 
              name: '360° & Video', 
              icon: '🎥',
              description: 'Interactive media that boosts engagement and conversions',
              color: 'from-orange-500 to-amber-500',
              examples: ['Spin animations', 'Product demos', 'Behind-the-scenes']
            }
          ].map((service, i) => (
            <motion.div
              key={service.name}
              className={`bg-gradient-to-br ${service.color} p-8 rounded-xl shadow-2xl h-full`}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.7 + i * 0.2, type: 'spring' }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 50px rgba(245, 158, 11, 0.5)'
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
                  ease: 'easeInOut'
                }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
              <p className="text-amber-100 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.examples.map((example, j) => (
                  <motion.li 
                    key={example}
                    className="flex items-center text-amber-50"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.9 + i * 0.2 + j * 0.1 }}
                  >
                    <span className="mr-2">✦</span>
                    {example}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Photography Process */}
        <motion.section 
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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">Process</span>
          </motion.h2>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 to-transparent -ml-px hidden lg:block"></div>
            
            {[
              {
                step: "1. Creative Brief",
                description: "We learn about your brand and products to develop a visual strategy",
                icon: "📝"
              },
              {
                step: "2. Styling Session",
                description: "Our stylists prepare products for maximum visual impact",
                icon: "👗"
              },
              {
                step: "3. Professional Shoot",
                description: "High-resolution photography with perfect lighting and composition",
                icon: "📷"
              },
              {
                step: "4. Post-Production",
                description: "Editing, retouching and optimization for all platforms",
                icon: "💻"
              },
              {
                step: "5. Delivery",
                description: "Final assets formatted for your e-commerce platform",
                icon: "🚚"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`relative mb-12 lg:w-1/2 ${i % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:ml-auto'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.9 + i * 0.2 }}
              >
                <motion.div 
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full text-3xl mb-4 ${i % 2 === 0 ? 'lg:ml-auto' : ''}`}
                  style={{
                    background: 'radial-gradient(circle, rgba(245,158,11,0.3) 0%, rgba(245,158,11,0.1) 70%)'
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-amber-400 mb-2">{item.step}</h3>
                <p className="text-amber-100">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section 
          className="mt-32 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-white mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 5.2 }}
          >
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">Elevate</span> Your Product Images?
          </motion.h2>
          <motion.p 
            className="text-xl text-amber-200 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5.4 }}
          >
            Let's create stunning visuals that make your products fly off the digital shelves.
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 5.6, type: 'spring' }}
          >
            <button  onClick={() => setIsFormOpen(true)} className="px-12 py-6 bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
              <span className="relative z-10 group-hover:scale-105 transition-transform duration-300 block">
                Book Your Shoot Today →
              </span>
            </button>
          </motion.div>
        </motion.section>
      </div>

      {/* Floating CTA */}
      <motion.div
        className="fixed bottom-8 left-0 right-0 flex justify-center z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 6 }}
      >
        <motion.button
         onClick={() => setIsFormOpen(true)}
          className="bg-gradient-to-r from-amber-600 to-amber-800 text-white px-8 py-4 rounded-full shadow-xl flex items-center cursor-pointer"
          animate={{
            boxShadow: ['0 5px 15px rgba(245, 158, 11, 0.3)', '0 10px 30px rgba(245, 158, 11, 0.5)', '0 5px 15px rgba(245, 158, 11, 0.3)']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="mr-2">Need amazing product photos?</span>
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
            Get in touch →
          </motion.span>
        </motion.button>
      </motion.div>
      <ConsultationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};

export default ProductPhotographyPage;