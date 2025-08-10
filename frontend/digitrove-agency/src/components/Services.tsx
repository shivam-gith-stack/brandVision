import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ShoppingCart, 
  Code, 
  TrendingUp, 
  Palette, 
  Camera,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'ecommerce',
      icon: ShoppingCart,
      title: 'E-commerce Marketing',
      description: 'Boost your online sales with our comprehensive e-commerce marketing strategies across Amazon, Flipkart, Etsy, Jio Mart, and more.',
      features: ['Account Setup & Optimization', 'PPC Advertising', 'Storefront Design', 'Product Cataloging'],
      color: 'from-primary to-primary/80'
    },
    {
      id: 'web-development',
      icon: Code,
      title: 'Web Development',
      description: 'Create stunning, responsive websites with modern technologies including Shopify, WordPress, React, and Vue.js.',
      features: ['Custom Website Development', 'UI/UX Design', 'E-commerce Solutions', 'Mobile Optimization'],
      color: 'from-info to-info/80'
    },
    {
      id: 'digital-marketing',
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Grow your online presence with data-driven digital marketing strategies that deliver real results.',
      features: ['SEO Optimization', 'PPC Campaigns', 'Social Media Marketing', 'Content Marketing'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'graphic-design',
      icon: Palette,
      title: 'Graphic & Video Design',
      description: 'Create compelling visual content that captures attention and drives engagement across all platforms.',
      features: ['Brand Identity Design', 'Video Production', 'Social Media Graphics', 'Marketing Materials'],
      color: 'from-warning to-warning/80'
    },
    {
      id: 'product-photography',
      icon: Camera,
      title: 'Product Photography',
      description: 'Professional product photography that showcases your products in the best light and drives sales.',
      features: ['Studio Photography', 'Lifestyle Shots', 'E-commerce Images', 'Photo Retouching'],
      color: 'from-pink-500 to-rose-600'
    }
  ];

  const navigateToService = (serviceId: string) => {
    document.body.style.cursor = 'wait';
    const card = document.getElementById(`service-${serviceId}`);
    
    if (card) {
      card.animate([{ transform: 'scale(1)' }, { transform: 'scale(0.95)' }], {
        duration: 200,
        easing: 'ease-in-out',
      });
    }

    setTimeout(() => {
      navigate(`/services/${serviceId}`);
      document.body.style.cursor = '';
    }, 300);
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-foreground mb-4"
            initial={{ backgroundPosition: '0% 50%' }}
            animate={{ 
              backgroundImage: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              backgroundPosition: '100% 50%'
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            We offer comprehensive digital solutions to help your business grow, 
            innovate, and succeed in today's competitive market.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                id={`service-${service.id}`}
                className={`group bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                onClick={() => navigateToService(service.id)}
                style={{ cursor: 'pointer' }}
              >
                {/* Card Header */}
                <div className={`h-32 bg-gradient-to-r ${service.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <IconComponent className="h-12 w-12 text-white" />
                    </motion.div>
                  </div>
                  <motion.div 
                    className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/20 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                      duration: 4 + Math.random() * 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors"
                    whileHover={{ color: '#3b82f6' }}
                  >
                    {service.title}
                  </motion.h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={feature} 
                        className="flex items-center text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (featureIndex * 0.05) }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-primary rounded-full mr-3"
                          animate={{
                            scale: [1, 1.5, 1],
                            boxShadow: ['0 0 0 0 rgba(59, 130, 246, 0)', '0 0 10px 3px rgba(59, 130, 246, 0.3)', '0 0 0 0 rgba(59, 130, 246, 0)']
                          }}
                          transition={{
                            duration: 3,
                            delay: featureIndex * 0.3,
                            repeat: Infinity
                          }}
                        ></motion.div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateToService(service.id);
                      }}
                    >
                      Learn More
                      <motion.span
                        animate={{
                          x: [0, 5, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }}
                      >
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.span>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 relative overflow-hidden"
              onClick={() => navigate('/services')}
            >
              <span className="relative z-10">View All Services</span>
              <motion.div
                className="absolute inset-0 bg-primary/80 opacity-0 hover:opacity-100 transition-opacity duration-300"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;