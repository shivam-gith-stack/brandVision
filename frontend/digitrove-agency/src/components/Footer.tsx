import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Youtube, 
  Linkedin,
  Send
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Site Map', href: '#sitemap' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Events', href: '#events' }
  ];

  const services = [
    { name: 'E-commerce Marketing', href: '/services/ecommerce' },
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'Graphic Design', href: '/services/graphic-design' },
    { name: 'Product Photography', href: '/services/photography' }
  ];

  const legalLinks = [
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Refund Policy', href: '/refund' },
    { name: 'Cancellation Policy', href: '/cancellation' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Youtube, href: '#', name: 'YouTube' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-green-400 mb-4">BrandVision DigitalxelPulse</h2>
              <p className="text-gray-300 leading-relaxed">
                Transforming businesses through innovative digital marketing strategies, 
                cutting-edge web development, and data-driven growth solutions.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin Digitaln className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Mumbai, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 97028 45312</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">shivam.gupta14083110@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
<div>
  <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
  <ul className="space-y-3">
    {quickLinks.map((link) => (
      <li key={link.name}>
        <a 
          href={link.href}
          className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
        >
          {link.name}
        </a>
      </li>
    ))}
  </ul>
</div>


          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for the latest digital marketing insights and tips.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-green-400"
                />
                <Button size="sm" className="bg-green-600 hover:bg-green-700 px-3">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Social Media Links */}
              <div>
                <p className="text-sm text-gray-300 mb-3">Follow us on:</p>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-200 group"
                        aria-label={social.name}
                      >
                        <IconComponent className="h-5 w-5 text-gray-300 group-hover:text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Working Hours & Support */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-white mb-3">Working Hours</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">Support Promise</h4>
              <p className="text-sm text-gray-300">
                We respond to all inquiries within 2 business days. 
                For urgent matters, please call our support line.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Links */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2024 BrandVision DigitalxelPulse Business Consulting Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-green-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;