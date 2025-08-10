import { motion, useAnimation , AnimatePresence} from 'framer-motion';
import { useEffect , useState} from 'react';
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


const GraphicDesignPage = () => {
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
    <div className="relative min-h-screen bg-gradient-to-br from-pink-900 to-gray-900 overflow-hidden">
      {/* Header */}
      <header className="relative z-50 py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold text-white">BrandVision Digital</h1>
          </motion.div>
          
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex space-x-8"
          >
            <a href="#" className="text-white hover:text-pink-300">Home</a>
            <div className="relative group">
              <button className="text-white hover:text-pink-300 flex items-center">
                Services <span className="ml-1">▼</span>
              </button>
            </div>
            <a href="#" className="text-white hover:text-pink-300">Portfolio</a>
            <a href="#" className="text-white hover:text-pink-300">About Us</a>
            <a href="#" className="text-white hover:text-pink-300">Blog</a>
            <a href="#" className="text-white hover:text-pink-300">Contact</a>
            <a href="#" className="bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition">Get Started</a>
          </motion.nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.p 
            className="text-xl text-pink-200 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            We create stunning visuals that capture attention and communicate your brand
          </motion.p>

          <motion.div
            initial={{ scale: 0, rotateY: 180 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ delay: 1.2, type: 'spring', stiffness: 100 }}
            className="relative inline-block"
          >
            <button  onClick={() => setIsFormOpen(true)} className="px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white text-lg font-bold rounded-full relative overflow-hidden group">
              <span className="relative z-10">Let's Build Together →</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-pink-700 to-rose-700 opacity-0 group-hover:opacity-100"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.6 }}
              />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Design Philosophy Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div>
            <motion.h2 
              className="text-4xl font-bold text-white mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.7 }}
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">Design Philosophy</span>
            </motion.h2>
            <motion.p 
              className="text-pink-100 mb-6 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9 }}
            >
              At our core, we believe design should be both beautiful and functional. Every pixel serves a purpose, every color evokes emotion, and every composition tells a story.
            </motion.p>
            <motion.ul className="space-y-3">
              {[
                "Human-centered design approach",
                "Data-driven creative decisions",
                "Minimalist aesthetics with maximum impact",
                "Cross-platform consistency",
                "Future-forward visual systems"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  className="flex items-center text-pink-200"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 2.1 + i * 0.1 }}
                >
                  <span className="mr-3 text-pink-400">✦</span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Animated Box with Content */}
          <motion.div
            className="relative h-96 bg-gradient-to-br from-pink-700/30 to-rose-700/30 rounded-2xl border border-pink-500/20 p-8 flex flex-col justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2.5, type: 'spring' }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="text-6xl mb-6 text-center"
            >
              🎨
            </motion.div>
            <h3 className="text-2xl font-bold text-white text-center mb-4">Visual Excellence</h3>
            <p className="text-pink-100 text-center">
              Our designs combine aesthetic appeal with strategic thinking to create memorable brand experiences that drive results.
            </p>
            
            {/* Animated decorative elements */}
            <motion.div 
              className="absolute top-4 right-4 w-4 h-4 bg-pink-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            />
            <motion.div 
              className="absolute bottom-4 left-4 w-6 h-6 bg-rose-400 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 1
              }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <motion.section 
        className="mt-32 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
      >
        <motion.h2 
          className="text-4xl font-bold text-white text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3 }}
        >
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">Projects</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Nebula Cosmetics",
              description: "Complete brand identity and packaging design",
              category: "Branding",
              color: "from-purple-500 to-pink-500",
              emoji: "💄"
            },
            {
              title: "Urban Eats App",
              description: "Mobile UI/UX and marketing assets",
              category: "Digital Design",
              color: "from-rose-500 to-red-500",
              emoji: "🍔"
            },
            {
              title: "Aurora Festival",
              description: "Event branding and promotional materials",
              category: "Print Design",
              color: "from-blue-500 to-indigo-500",
              emoji: "🎪"
            }
          ].map((project, i) => (
            <motion.div
              key={project.title}
              className={`bg-gradient-to-br ${project.color} rounded-2xl overflow-hidden shadow-2xl h-96 relative group`}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 3.2 + i * 0.2, type: 'spring' }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300 flex flex-col justify-end p-8">
                <motion.div
                  className="text-8xl mb-4"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  {project.emoji}
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-pink-100 mb-3">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm bg-white/10 px-3 py-1 rounded-full">{project.category}</span>
                  <motion.button
                    className="text-white text-sm font-medium flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    View case study <span className="ml-1">→</span>
                  </motion.button>
                </div>
              </div>
              
              {/* Project interaction elements */}
              <motion.div 
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.2, backgroundColor: 'rgba(255,255,255,0.3)' }}
              >
                <span className="text-white">+</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Design Services Section */}
      <motion.section 
        className="mt-32 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
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
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">Design Services</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              name: 'Brand Identity', 
              icon: '🖌️',
              description: 'Logo design, visual systems, style guides',
              color: 'from-pink-500 to-rose-500'
            },
            { 
              name: 'Print Design', 
              icon: '📰',
              description: 'Business cards, brochures, packaging',
              color: 'from-purple-500 to-pink-500'
            },
            { 
              name: 'Digital Design', 
              icon: '📱',
              description: 'Social media, web graphics, ads',
              color: 'from-rose-500 to-red-500'
            },
            { 
              name: 'Motion Graphics', 
              icon: '🎬',
              description: 'Animations, video content, micro-interactions',
              color: 'from-fuchsia-500 to-purple-500'
            }
          ].map((service, i) => (
            <motion.div
              key={service.name}
              className={`bg-gradient-to-br ${service.color} p-8 rounded-xl shadow-2xl h-full`}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 4 + i * 0.2, type: 'spring' }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 50px rgba(244, 114, 182, 0.5)'
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
              <p className="text-pink-100 mb-6">{service.description}</p>
              <motion.button
                className="text-white text-sm font-medium flex items-center"
                whileHover={{ x: 5 }}
              >
                Learn more <span className="ml-1">→</span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Client Testimonials Section */}
      <motion.section 
        className="mt-32 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white/5 backdrop-blur-sm rounded-3xl border border-pink-900/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5 }}
      >
        <motion.h2 
          className="text-4xl font-bold text-white text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 4.7 }}
        >
          What <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">Clients Say</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "Their design work transformed our brand identity and helped us stand out in a crowded market.",
              author: "Sarah K., CEO of Bloom Cosmetics",
              rating: "★★★★★"
            },
            {
              quote: "The attention to detail and creative approach resulted in packaging that sells our product before it's even opened.",
              author: "Michael T., Founder of Urban Brew",
              rating: "★★★★★"
            },
            {
              quote: "Working with this team was seamless—they understood our vision and elevated it beyond our expectations.",
              author: "Lisa M., Marketing Director at Nova Tech",
              rating: "★★★★★"
            }
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-pink-900/30 to-rose-900/30 p-8 rounded-xl border border-pink-800/20"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 5 + i * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-yellow-300 text-2xl mb-4">{testimonial.rating}</div>
              <p className="text-pink-100 text-lg italic mb-6">"{testimonial.quote}"</p>
              <p className="text-pink-300 font-medium">{testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact CTA Section */}
      <motion.section 
        className="mt-32 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.5 }}
      >
        <motion.h2 
          className="text-4xl font-bold text-white mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 5.7 }}
        >
          Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">Elevate Your Brand?</span>
        </motion.h2>
        <motion.p 
          className="text-xl text-pink-200 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5.9 }}
        >
          Let's create something extraordinary together. Our team is ready to bring your vision to life with stunning, effective design.
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 6.1, type: 'spring' }}
        >
          <button  onClick={() => setIsFormOpen(true)} className="px-12 py-6 bg-gradient-to-r from-pink-600 to-rose-600 text-white text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
            <span className="relative z-10 group-hover:scale-105 transition-transform duration-300 block">
              Get in Touch Today →
            </span>
          </button>
        </motion.div>
      </motion.section>

      {/* Floating CTA */}
      <motion.div
        className="fixed bottom-8 left-0 right-0 flex justify-center z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 6.5 }}
      >
        <motion.button
         onClick={() => setIsFormOpen(true)}
          className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-full shadow-xl flex items-center cursor-pointer"
          animate={{
            boxShadow: ['0 5px 15px rgba(244, 114, 182, 0.3)', '0 10px 30px rgba(244, 114, 182, 0.5)', '0 5px 15px rgba(244, 114, 182, 0.3)']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="mr-2">Ready to elevate your brand?</span>
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
            Let's create →
          </motion.span>
        </motion.button>
      </motion.div>
      <ConsultationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};

export default GraphicDesignPage;