import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, Award, TrendingUp, Zap, Globe, BarChart2, Code, Smartphone, Rocket } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate, useAnimation, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Quantum Particle System
  const QuantumParticles = ({ count = 100 }) => {
    return (
      <>
        {Array(count).fill(0).map((_, i) => {
          const size = Math.random() * 10 + 3;
          const duration = Math.random() * 15 + 10;
          const delay = Math.random() * 10;
          const color = `hsl(${Math.random() * 360}, 80%, 60%)`;
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: color,
                boxShadow: `0 0 ${size * 2}px ${size}px ${color}20`
              }}
              animate={{
                x: [0, Math.random() * 400 - 200, Math.random() * 400 - 200],
                y: [0, Math.random() * 400 - 200, Math.random() * 400 - 200],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }}
            />
          );
        })}
      </>
    );
  };

  // Neural Network Connections
  const NeuralConnections = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    
    useEffect(() => {
      if (inView) {
        controls.start({
          pathLength: [0, 1, 0],
          opacity: [0, 0.8, 0]
        });
      }
    }, [inView]);

    return (
      <div ref={ref} className="absolute inset-0 w-full h-full pointer-events-none">
        <svg className="w-full h-full">
          {Array(30).fill(0).map((_, i) => {
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            const endX = Math.random() * 100;
            const endY = Math.random() * 100;
            const midX1 = startX + (Math.random() * 40 - 20);
            const midY1 = startY + (Math.random() * 40 - 20);
            const midX2 = endX + (Math.random() * 40 - 20);
            const midY2 = endY + (Math.random() * 40 - 20);
            
            return (
              <motion.path
                key={i}
                d={`M${startX}% ${startY}% C${midX1}% ${midY1}%, ${midX2}% ${midY2}%, ${endX}% ${endY}%`}
                stroke={`url(#neural-gradient-${i % 3})`}
                strokeWidth={0.3}
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={controls}
                transition={{
                  duration: 10 + Math.random() * 10,
                  delay: Math.random() * 5,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut'
                }}
              />
            );
          })}
          <defs>
            <linearGradient id="neural-gradient-0" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="neural-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="neural-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  };

  // Holographic Floating Islands
  const HolographicIslands = () => {
    return (
      <>
        {Array(8).fill(0).map((_, i) => {
          const width = Math.random() * 300 + 150;
          const height = Math.random() * 100 + 50;
          const color = `hsl(${Math.random() * 60 + 200}, 80%, 60%)`;
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-xl backdrop-blur-sm border border-white/10"
              style={{
                width: `${width}px`,
                height: `${height}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `linear-gradient(145deg, ${color}10, ${color}05)`,
                boxShadow: `0 0 ${width / 2}px ${width / 4}px ${color}10`
              }}
              animate={{
                y: [0, Math.random() * 100 - 50, 0],
                x: [0, Math.random() * 40 - 20, 0],
                rotate: [0, Math.random() * 10 - 5, 0]
              }}
              transition={{
                duration: 20 + Math.random() * 20,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }}
            >
              <div className="absolute inset-0 rounded-xl border border-white/5" />
              <div className="absolute inset-0 rounded-xl bg-white/5" />
            </motion.div>
          );
        })}
      </>
    );
  };

  // Cosmic Energy Vortex
  const CosmicVortex = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    
    useEffect(() => {
      if (inView) {
        controls.start({
          rotate: 360,
          scale: [1, 1.2, 1]
        });
      }
    }, [inView]);

    return (
      <div ref={ref} className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-1/2 w-[200%] h-[200%]"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(16,185,129,0.1) 30%, transparent 70%)'
          }}
          animate={controls}
          transition={{
            rotate: {
              duration: 60,
              repeat: Infinity,
              ease: 'linear'
            },
            scale: {
              duration: 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }
          }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 w-[150%] h-[150%]"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(236,72,153,0.1) 30%, transparent 70%)'
          }}
          animate={{
            rotate: -360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            rotate: {
              duration: 80,
              repeat: Infinity,
              ease: 'linear'
            },
            scale: {
              duration: 15,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }
          }}
        />
      </div>
    );
  };

  // Interactive Background
  const InteractiveBackground = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [0, 1], [15, -15]);
    const rotateY = useTransform(x, [0, 1], [-15, 15]);

    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        x.set(e.clientX / window.innerWidth);
        y.set(e.clientY / window.innerHeight);
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [x, y]);

    return (
      <motion.div
        className="absolute inset-0 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        style={{
          rotateX,
          rotateY
        }}
      >
        <CosmicVortex />
        <NeuralConnections />
        <QuantumParticles count={150} />
        <HolographicIslands />
        
        {/* Pulsing Energy Nodes */}
        {Array(5).fill(0).map((_, i) => {
          const size = Math.random() * 200 + 100;
          const color = `hsl(${Math.random() * 60 + 200}, 80%, 60%)`;
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${color}20, transparent 70%)`,
                boxShadow: `0 0 ${size / 2}px ${size / 4}px ${color}20`
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: i * 2
              }}
            />
          );
        })}
      </motion.div>
    );
  };

  // Holographic Text Effect
  const HolographicText = ({ text }: { text: string }) => {
    const [hovered, setHovered] = useState(false);
    
    return (
      <motion.span
        className="relative inline-block"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <motion.span
          className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
        >
          {text}
        </motion.span>
        <motion.span
          className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 opacity-0"
          style={{
            textShadow: '0 0 10px rgba(59, 130, 246, 0.7)',
            filter: 'blur(1px)'
          }}
          animate={{
            opacity: hovered ? [0, 0.8, 0] : 0,
            y: hovered ? [0, -5, 0] : 0
          }}
          transition={{
            duration: 1.5,
            times: [0, 0.5, 1]
          }}
        >
          {text}
        </motion.span>
        <motion.span
          className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 opacity-0"
          style={{
            textShadow: '0 0 15px rgba(139, 92, 246, 0.7)',
            filter: 'blur(2px)'
          }}
          animate={{
            opacity: hovered ? [0, 0.6, 0] : 0,
            y: hovered ? [0, 5, 0] : 0
          }}
          transition={{
            duration: 1.5,
            delay: 0.3,
            times: [0, 0.5, 1]
          }}
        >
          {text}
        </motion.span>
      </motion.span>
    );
  };

  // Quantum Button Effect
  const QuantumButton = ({ children, onClick }: { children: React.ReactNode, onClick: () => void }) => {
    const [hovered, setHovered] = useState(false);
    const particles = Array(20).fill(0);
    
    return (
      <motion.div
        className="relative overflow-hidden"
        whileHover="hover"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <Button 
          size="lg" 
          className="relative z-10 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-6 text-lg shadow-xl"
          onClick={onClick}
        >
          {children}
        </Button>
        
        {hovered && particles.map((_, i) => {
          const angle = (i / particles.length) * Math.PI * 2;
          const distance = Math.random() * 50 + 50;
          const size = Math.random() * 6 + 3;
          const duration = Math.random() * 1 + 0.5;
          const delay = Math.random() * 0.5;
          const color = `hsl(${Math.random() * 60 + 200}, 80%, 60%)`;
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: color,
                x: Math.cos(angle) * distance,
                y: Math.sin(angle) * distance,
                originX: 'center',
                originY: 'center'
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
                x: [0, Math.cos(angle) * distance * 1.5, Math.cos(angle) * distance * 2],
                y: [0, Math.sin(angle) * distance * 1.5, Math.sin(angle) * distance * 2]
              }}
              transition={{
                duration,
                delay,
                ease: 'easeOut'
              }}
            />
          );
        })}
        
        <motion.div
          className="absolute inset-0 bg-white/10 opacity-0"
          variants={{
            hover: {
              opacity: [0, 0.2, 0],
              transition: { duration: 1.5 }
            }
          }}
        />
      </motion.div>
    );
  };

  // Testimonial Carousel Component
const TestimonialCarousel = () => {
  const testimonials = useMemo(
    () => [
      {
        quote:
          "Our website traffic skyrocketed after their SEO optimization. Outstanding results!",
        author: "Emma Davis",
        role: "Director, GrowthLab",
        color: "from-blue-500/10 to-blue-700/20"
      },
      {
        quote:
          "This team transformed our digital presence completely. Our revenue grew by 300% in just 6 months!",
        author: "Sarah Johnson",
        role: "CEO, TechCorp",
        color: "from-purple-500/10 to-purple-700/20"
      },
      {
        quote:
          "The most professional marketing team we've worked with. They delivered beyond expectations.",
        author: "Michael Chen",
        role: "CMO, InnovateCo",
        color: "from-emerald-500/10 to-emerald-700/20"
      }
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const variants = {
    enter: {
      opacity: 0,
      y: 20,
      rotateX: 45,
      scale: 0.9
    },
    center: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: { duration: 0.8 }
    },
    exit: {
      opacity: 0,
      y: -20,
      rotateX: -45,
      scale: 0.9,
      transition: { duration: 0.8 }
    }
  };

  return (
    <div className="relative h-48 w-full max-w-2xl mx-auto my-16 perspective-1000">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className={`absolute inset-0 backdrop-blur-sm rounded-xl p-8 border bg-gradient-to-br ${testimonials[activeIndex].color} border-white/10`}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <div className="text-white/80 italic text-lg mb-4 leading-relaxed">
            "{testimonials[activeIndex].quote}"
          </div>
          <div className="text-white font-medium text-md">
            {testimonials[activeIndex].author}
          </div>
          <div className="text-white/60 text-sm">
            {testimonials[activeIndex].role}
          </div>

          {/* Dots */}
          <motion.div
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2"
            animate={{
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === activeIndex ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

  // Rotating Text Line Component
const RotatingTextLine = () => {
  const texts = useMemo(() => [
    "Top leading companies we've worked with",
    "Trusted by industry leaders",
    "Partnered with innovative brands",
    "Collaborated with global enterprises"
  ], []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });

  const textVariants = {
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.5, ease: "easeIn" }
    },
    hidden: {
      opacity: 0,
      y: 20
    }
  };

  useEffect(() => {
    if (!inView) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [inView, texts.length]);

  return (
    <div ref={ref} className="relative h-16 overflow-hidden text-center my-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={texts[currentIndex]}
          className="absolute inset-0 flex items-center justify-center"
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={textVariants}
        >
          <motion.p
            className="text-2xl font-semibold text-white/90"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {texts[currentIndex]}
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <InteractiveBackground />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                <motion.span 
                  className="block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Create, Innovate,
                </motion.span>
                <HolographicText text="Optimize" />
                <motion.span
                  className="block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Your Business
                </motion.span>
              </h1>
              <motion.p 
                className="text-xl text-white/80 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                We help businesses thrive in the digital world with cutting-edge marketing strategies, 
                stunning web development, and data-driven growth solutions.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <QuantumButton onClick={scrollToContact}>
                <span className="flex items-center">
                  Get Started Today
                  <ArrowRight className="ml-3 h-5 w-5" />
                </span>
              </QuantumButton>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  variant="outline"
                  className="relative overflow-hidden group border-2 border-white/50 hover:border-white/70 text-white hover:text-white/90 px-10 py-6 text-lg font-medium shadow-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300"
                  onClick={scrollToContact}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book a Meeting
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{
                      x: '100%',
                      transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear"
                      }
                    }}
                  />
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              {[
                { icon: <Users className="h-6 w-6" />, value: "100+", label: "Happy Clients" },
                { icon: <Award className="h-6 w-6" />, value: "10+", label: "Awards Won" },
                { icon: <TrendingUp className="h-6 w-6" />, value: "99%", label: "Success Rate" },
                { icon: <Star className="h-6 w-6" />, value: "4.9", label: "Rating" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="relative text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-default overflow-hidden group"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.span>
                  </div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.3 + index * 0.1 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Services Grid */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="relative z-10 bg-white/5 rounded-3xl shadow-2xl p-8 backdrop-blur-sm border border-white/10 overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'linear'
                }}
              />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center space-x-3">
                  <motion.div 
                    className="w-3 h-3 bg-red-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <motion.div 
                    className="w-3 h-3 bg-yellow-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                  />
                  <motion.div 
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <Zap className="h-8 w-8" />, name: "SEO Optimization", color: "from-blue-500/20 to-blue-700/30" },
                    { icon: <Globe className="h-8 w-8" />, name: "Web Development", color: "from-emerald-500/20 to-emerald-700/30" },
                    { icon: <BarChart2 className="h-8 w-8" />, name: "PPC Campaigns", color: "from-purple-500/20 to-purple-700/30" },
                    { icon: <Code className="h-8 w-8" />, name: "App Development", color: "from-amber-500/20 to-amber-700/30" },
                    { icon: <Smartphone className="h-8 w-8" />, name: "Social Media", color: "from-pink-500/20 to-pink-700/30" },
                    { icon: <Rocket className="h-8 w-8" />, name: "Growth Hacking", color: "from-indigo-500/20 to-indigo-700/30" }
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      className={`relative h-36 bg-gradient-to-br ${service.color} rounded-xl p-5 flex flex-col items-center justify-center text-center hover:shadow-2xl transition-all duration-300 cursor-default overflow-hidden group`}
                      whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      <motion.div 
                        className="mb-3 p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors duration-300"
                        whileHover={{ rotate: 15 }}
                      >
                        {service.icon}
                      </motion.div>
                      <div className="text-sm font-medium text-white">{service.name}</div>
                      <motion.div
                        className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ x: '-100%' }}
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: 'loop',
                          ease: 'linear'
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Testimonial Carousel */}
        <TestimonialCarousel />

        {/* Rotating Text Line */}
        <RotatingTextLine />
      </div>
      
      {/* Client logos carousel */}
      <motion.div 
        className="bg-white/5 border-t border-white/10 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-12">
            {['Duroflex', 'Myoc', 'Shoprythm', 'TechCorp', 'InnovateCo', 'GrowthLab'].map((brand, index) => (
              <motion.div 
                key={brand}
                className="text-3xl font-bold text-white/70 hover:text-white transition-colors relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {brand}
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  animate={{ width: '0%' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;