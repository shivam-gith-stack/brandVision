import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
        
        fetch('http://localhost:4000/api/v1/register', {
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


const WebDevPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 to-gray-900 overflow-hidden">
      {/* Floating Code Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-purple-400/20 text-lg font-mono"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            {['<div>', '</div>', 'const', '=>', '{', '}', '[', ']'][Math.floor(Math.random() * 8)]}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.h1 
            className="text-6xl lg:text-8xl font-bold text-white mb-6"
            initial={{ filter: 'blur(10px)', y: -50 }}
            animate={{ filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.5 }}
          >
            Web <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Magic</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-purple-200 max-w-3xl mx-auto mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            We craft blazing-fast, pixel-perfect websites that drive conversions and elevate brands
          </motion.p>

          <motion.div
            initial={{ scale: 0.5, rotateY: 180 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ delay: 1, type: 'spring' }}
          >
            <button 
              onClick={() => setIsFormOpen(true)}
              className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-bold rounded-full hover:shadow-xl hover:shadow-purple-500/30 transition-all relative overflow-hidden group"
            >
              <span className="relative z-10">Build Your Vision →</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.6 }}
              />
            </button>
          </motion.div>
        </motion.div>

        {/* Development Process */}
        <motion.div 
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {[
            {
              title: "Discovery",
              description: "We analyze your business goals, target audience, and technical requirements to create a strategic roadmap.",
              icon: "🔍"
            },
            {
              title: "Design",
              description: "Our UI/UX experts craft intuitive interfaces that delight users and drive engagement.",
              icon: "🎨"
            },
            {
              title: "Development",
              description: "Clean, efficient code built with modern frameworks for optimal performance.",
              icon: "💻"
            }
          ].map((step, i) => (
            <motion.div
              key={step.title}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4 + i * 0.2 }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 10px 25px rgba(168, 85, 247, 0.3)'
              }}
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-2xl font-bold text-purple-400 mb-3">{step.title}</h3>
              <p className="text-purple-100">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Code Window */}
        <motion.div 
          className="relative max-w-3xl mx-auto mt-20 mb-32"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <div className="bg-gray-900/80 rounded-lg overflow-hidden border border-purple-500/30 shadow-lg shadow-purple-500/20">
            <div className="flex p-3 bg-gray-800/50">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="p-6 font-mono text-sm md:text-base">
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <span className="text-purple-400">const</span> portfolioProject = {'{'}
              </motion.div>
              <div className="ml-4">
                <div className="text-pink-400">client:<span className="text-white"> 'YourBusiness',</span></div>
                <div className="text-pink-400">stack:<span className="text-white"> ['React', 'Next.js', 'Tailwind'],</span></div>
                <div className="text-pink-400">features:<span className="text-white"> ['Responsive', 'SEO Optimized', 'Blazing Fast'],</span></div>
                <motion.div 
                  className="text-pink-400">status:<span className="text-green-400"> 'readyToLaunch'</span>
                  <motion.span
                    animate={{ opacity: [0, 1] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                  >
                    █
                  </motion.span>
                </motion.div>
              </div>
              <div>{'}'}</div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Showcase */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Technology Stack</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Frontend', tech: ['React', 'Next.js', 'Vue', 'Tailwind CSS'] },
              { name: 'Backend', tech: ['Node.js', 'Express', 'GraphQL', 'Firebase'] },
              { name: 'E-commerce', tech: ['Shopify', 'WooCommerce', 'Snipcart', 'Stripe'] },
              { name: 'CMS', tech: ['WordPress', 'Sanity', 'Contentful', 'Prismic'] }
            ].map((category, i) => (
              <motion.div
                key={category.name}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 + i * 0.2 }}
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-xl font-bold text-purple-400 mb-4">{category.name}</h3>
                <ul className="space-y-2">
                  {category.tech.map((tech) => (
                    <li key={tech} className="flex items-center text-purple-100">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Client Testimonials Section */}
        <motion.section 
          className="mt-32 bg-white/5 backdrop-blur-sm p-12 rounded-3xl border border-purple-900/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3.2 }}
          >
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Reviews</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "The website they built increased our conversion rate by 40% in the first month. Their attention to performance is unmatched.",
                author: "Alex R., CTO of TechStart",
                rating: "★★★★★",
                project: "E-commerce Platform"
              },
              {
                quote: "From concept to launch, the team delivered beyond our expectations. The site loads instantly and ranks beautifully on Google.",
                author: "Maria S., Marketing Director",
                rating: "★★★★★",
                project: "Corporate Website"
              },
              {
                quote: "Working with them was a game-changer. They transformed our outdated site into a modern conversion machine that reflects our brand perfectly.",
                author: "James L., Founder of UrbanGoods",
                rating: "★★★★★",
                project: "Brand Redesign"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-xl border border-purple-800/20"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 3.4 + i * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-yellow-300 text-2xl mb-4">{testimonial.rating}</div>
                <p className="text-purple-100 text-lg italic mb-6">"{testimonial.quote}"</p>
                <div className="border-t border-purple-800/30 pt-4">
                  <p className="text-purple-300 font-medium">{testimonial.author}</p>
                  <p className="text-purple-400/80 text-sm">{testimonial.project}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Performance Metrics */}
        <motion.div 
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
        >
          {[
            { metric: 'Page Load', value: '<1s', description: 'Average load time' },
            { metric: 'Lighthouse', value: '95+', description: 'Performance score' },
            { metric: 'Conversion', value: '35%', description: 'Average increase' },
            { metric: 'Maintenance', value: '24/7', description: 'Ongoing support' }
          ].map((item, i) => (
            <motion.div
              key={item.metric}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 4.2 + i * 0.2, type: 'spring' }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">{item.value}</div>
              <div className="text-lg font-semibold text-white mb-1">{item.metric}</div>
              <div className="text-purple-200 text-sm">{item.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="mt-32 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-8">
            Let's discuss how we can create a high-performance website that grows your business.
          </p>
          <motion.button
            onClick={() => setIsFormOpen(true)}
            className="px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-bold rounded-full relative overflow-hidden group"
            whileHover={{ 
              boxShadow: '0 10px 25px rgba(168, 85, 247, 0.5)',
              y: -3
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Get Your Free Consultation →</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Consultation Form Popup */}
      <ConsultationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};

export default WebDevPage;