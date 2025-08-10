import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Typewriter } from 'react-typewriter-effect';
import { useRef } from "react";
const BrandLogo = () => {
  return (
    <motion.div
      className="flex items-center cursor-pointer scale-[0.70] sm:scale-[0.9] md:scale-100"
      whileTap={{
        scale: 0.98,
        filter: "brightness(1.2)"
      }}
      onClick={() => {
        const element = document.getElementById("hero");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <motion.div className="relative">
        {/* Main text container */}
        <motion.div className="relative">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter"
            style={{
              color: "transparent",
              textShadow: "0 0 15px rgba(147, 51, 234, 0.8)",
              WebkitTextStroke: "2px rgba(216, 180, 254, 0.9)",
              background:
                "linear-gradient(90deg, rgba(147, 51, 234, 0.9), rgba(216, 180, 254, 0.9))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text"
            }}
            animate={{
              textShadow: [
                "0 0 15px rgba(147, 51, 234, 0.8)",
                "0 0 25px rgba(216, 180, 254, 1)",
                "0 0 15px rgba(147, 51, 234, 0.8)"
              ],
              WebkitTextStroke: [
                "2px rgba(216, 180, 254, 0.9)",
                "2px rgba(147, 51, 234, 0.9)",
                "2px rgba(216, 180, 254, 0.9)"
              ],
              x: [0, -3, 3, 0],
              y: [0, -2, 2, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              x: { duration: 0.1, repeat: 3 },
              y: { duration: 0.1, repeat: 3 }
            }}
          >
            BrandVision
          </motion.h1>

          {/* Continuous scan line effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/40 to-transparent"
            style={{
              height: "4px",
              top: "20%",
              transform: "translateY(-50%)"
            }}
            animate={{
              opacity: [0, 0.9, 0],
              top: ["20%", "80%"]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut"
            }}
          />

          {/* Continuous neon glow */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1/3 bg-purple-400/30"
            style={{
              filter: "blur(8px)"
            }}
            animate={{
              opacity: [0, 0.6, 0],
              height: ["10%", "50%", "10%"]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Continuous energy burst */}
        <motion.div
          className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 0.9, 0],
            scale: [0.5, 3, 0.5],
            x: [0, 80, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeOut"
          }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100" className="w-28 sm:w-32 h-28 sm:h-32">
            <motion.path
              d="M20,50 Q50,20 80,50 Q50,80 20,50 Z"
              fill="none"
              stroke="url(#energyGradient)"
              strokeWidth="3"
              strokeDasharray="100 100"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <defs>
              <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(216, 180, 254, 1)" />
                <stop offset="100%" stopColor="rgba(147, 51, 234, 1)" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Continuous digital rain */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-xs sm:text-sm font-mono text-purple-300/80"
              style={{
                left: `${i * 6 + 2}%`,
                top: "-40px",
                writingMode: "vertical-rl",
                textOrientation: "mixed"
              }}
              animate={{
                y: ["-40px", "200px"],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                delay: Math.random(),
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {Array.from({ length: 15 }).map((_, j) => (
                <span
                  key={j}
                  style={{
                    opacity: Math.random() * 0.8 + 0.2,
                    color: Math.random() > 0.9 ? "#d8b4fe" : "#9333ea"
                  }}
                >
                  {Math.random() > 0.5 ? "1" : "0"}
                </span>
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Rotating phrases */}
      <motion.div
        className="ml-2 sm:ml-3 md:ml-5 min-h-[25px] sm:min-h-[35px] md:min-h-[40px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div className="text-[11px] sm:text-[14px] md:text-[15px] font-mono font-bold flex items-center">
          <motion.span
            className="inline-block mr-1 sm:mr-2 text-blue-400"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            &gt;
          </motion.span>

          <div className="relative h-5 sm:h-6 w-[140px] sm:w-[200px] md:w-[220px] overflow-hidden">
            {[
              "DIGITAL_STRATEGY",
              "SEO_MASTERY",
              "SOCIAL_IMPACT",
              "CONTENT_POWER",
              "DATA_DRIVEN",
              "CONVERSION_ART"
            ].map((text, index) => (
              <motion.span
                key={text}
                className="absolute left-0 font-extrabold whitespace-nowrap"
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: [20, 0, -20],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  delay: index * 2,
                  repeat: Infinity,
                  repeatDelay: (6 - 1) * 2,
                  ease: "easeInOut"
                }}
                style={{
                  color: "#312e81",
                  textShadow: "0 0 8px rgba(99, 102, 241, 0.9)",
                  fontWeight: 800,
                  WebkitTextStroke: "0.5px #6366f1"
                }}
              >
                {text}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="h-[1px] sm:h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-0.5 sm:mt-1"
          style={{
            boxShadow: "0 0 10px rgba(59, 130, 246, 0.8)"
          }}
          animate={{
            scaleX: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const services = [
    'E-commerce Marketing',
    'Web Development', 
    'Digital Marketing',
    'Graphic & Video Design',
    'Product Photography'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white/80 backdrop-blur-sm'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Component */}
          <BrandLogo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-blue-600 font-medium relative"
              whileHover={{ y: -2 }}
            >
              Home
              <motion.span 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {/* Services Dropdown */}
            <motion.div 
              className="relative"
              onHoverStart={() => setIsServicesOpen(true)}
              onHoverEnd={() => setIsServicesOpen(false)}
            >
              <motion.button 
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium"
                whileHover={{ y: -2 }}
              >
                Services
                <motion.span
                  animate={{ rotate: isServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="ml-1 h-4 w-4" />
                </motion.span>
              </motion.button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div 
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {services.map((service, index) => (
                      <motion.button
                        key={service}
                        onClick={() => scrollToSection('services')}
                        className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ x: 5 }}
                      >
                        {service}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {['About','Contact'].map((item) => (
              <motion.button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 hover:text-blue-600 font-medium relative"
                whileHover={{ y: -2 }}
              >
                {item}
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}

            {/* CTA Button */}
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(37, 99, 235, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </nav>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 rounded-lg focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden bg-white shadow-lg rounded-b-lg overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 pt-2 pb-6 space-y-3">
                {['Home', 'Services', 'Portfolio', 'About', 'Blog', 'Contact'].map((item) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.button>
                ))}
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-full shadow-md"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;