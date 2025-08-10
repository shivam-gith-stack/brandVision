import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'react-hot-toast';
import emailjs from 'emailjs-com';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle,
  Users,
  Briefcase
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  const result = await emailjs.send(
  "service_f2pb3ha",
  "template_tpsm8ey",
  {
    from_name: formData.name,      // match {{from_name}}
    user_email: formData.email,    // match {{user_email}}
    phone: formData.phone,         // match {{phone}}
    company: formData.company,     // match {{company}}
    service: formData.service,     // match {{service}}
    message: formData.message      // match {{message}}
  },
  "nxRxF1j0C-CucnBHw"
);

    const data = await fetch('https://brandvision-2.onrender.com/api/v1/register' , {
    
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message
        })


    })
    
       
       toast.promise(
  new Promise((resolve) => setTimeout(resolve, 500)),
  {
    loading: 'Sending your message...',
    success: '🎉 Delivered! We’ll reach out soon.',
    error: 'Oops! Message failed to send.'
  }
);

       setFormData({
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: ''
});

  
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Office',
      content: 'Mumbai , Maharashtra, India',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 97028 45312',
      subContent: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'shivam14083110@gmail.com',
      subContent: 'We respond within 24 hours'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM',
      subContent: 'Saturday: 10:00 AM - 4:00 PM'
    }
  ];

  const services = [
    'E-commerce Marketing',
    'Web Development',
    'Digital Marketing',
    'Graphic & Video Design',
    'Product Photography',
    'Other'
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up stagger-2">
            Ready to transform your business? Let's discuss your project and 
            create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl shadow-xl hover-lift animate-slide-in-left">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-card-foreground mb-2">Send us a message</h3>
              <p className="text-muted-foreground">Fill out the form below and we'll get back to you soon.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="animate-fade-in-up stagger-1">
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="w-full transition-all duration-300 focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="animate-fade-in-up stagger-2">
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="w-full transition-all duration-300 focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="animate-fade-in-up stagger-3">
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full transition-all duration-300 focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="animate-fade-in-up stagger-4">
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Company Name
                  </label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company"
                    className="w-full transition-all duration-300 focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="animate-fade-in-up stagger-5">
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Service Interested In
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="animate-fade-in-up stagger-6">
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  className="w-full transition-all duration-300 focus:ring-2 focus:ring-primary"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover-glow animate-fade-in-up stagger-6"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>

            {/* Alternative Contact Options */}
            <div className="mt-8 pt-8 border-t border-border animate-fade-in-up stagger-6">
              <p className="text-sm text-muted-foreground mb-4">Or reach out directly:</p>
              <div className="flex flex-col sm:flex-row gap-4">
              <a
  href="https://wa.me/919702845312"
  target="_blank"
  rel="noopener noreferrer"
  className="flex-1"
>
  <Button variant="outline" className="w-full hover-scale">
    <MessageCircle className="mr-2 h-4 w-4" />
    WhatsApp Chat
  </Button>
</a>

<a
  href="https://wa.me/919702845312?text=Hi%20there!%20I%20have%20a%20business%20inquiry."
  target="_blank"
  rel="noopener noreferrer"
  className="flex-1"
>
  <Button variant="outline" className="w-full hover-scale">
    <Briefcase className="mr-2 h-4 w-4" />
    Business Inquiry
  </Button>
</a>

              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={info.title} className={`bg-card p-6 rounded-xl shadow-lg hover-lift animate-scale-in stagger-${index + 1} group`}>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                          <IconComponent className="h-6 w-6 text-primary group-hover:animate-pulse" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-card-foreground mb-1">{info.title}</h4>
                        <p className="text-card-foreground mb-1">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.subContent}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

{/* Realistic Map Component */}
<div className="bg-card p-6 rounded-xl shadow-lg hover-lift animate-scale-in stagger-5">
  <h4 className="font-bold text-card-foreground mb-4">Find Us</h4>
  <div className="h-64 rounded-lg overflow-hidden relative hover-scale">
    {/* Embedded Google Maps with dark theme */}
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.715560064492!2d72.8326603153768!3d19.05291125800027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8dfb4c1e8d5%3A0x6a7426f8e724a3e7!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      className="filter grayscale-[20%] contrast-110 saturate-120"
    ></iframe>
    
    {/* Custom map marker */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="relative">
        <MapPin className="h-8 w-8 text-red-500 drop-shadow-lg animate-bounce" />
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full"></div>
      </div>
    </div>
    
    {/* Location info overlay */}
    <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm">
      <p className="text-sm font-medium text-card-foreground">Our Location</p>
      <p className="text-xs text-muted-foreground">Mumbai, Maharashtra, India</p>
    </div>
  </div>
</div>
            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-primary to-info p-6 rounded-xl text-primary-foreground hover-lift animate-glow animate-scale-in stagger-6">
              <h4 className="font-bold mb-4">Why Choose Us?</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 animate-fade-in-up stagger-1">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse"></div>
                  <span className="text-sm">Response within 2 business days</span>
                </div>
                <div className="flex items-center space-x-3 animate-fade-in-up stagger-2">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse"></div>
                  <span className="text-sm">Free consultation & strategy session</span>
                </div>
                <div className="flex items-center space-x-3 animate-fade-in-up stagger-3">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse"></div>
                  <span className="text-sm">Proven track record with 200+ clients</span>
                </div>
                <div className="flex items-center space-x-3 animate-fade-in-up stagger-4">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse"></div>
                  <span className="text-sm">Customized solutions for your business</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;