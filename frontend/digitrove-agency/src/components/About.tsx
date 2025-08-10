import { Button } from '@/components/ui/button';
import { Users, MapPin, Calendar, Award, Clock, CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Calendar, label: 'Founded', value: '2024' },
    { icon: Users, label: 'Team Members', value: '10+' },
    { icon: MapPin, label: 'Based in', value: 'mumbai, India' },
    { icon: Award, label: 'Projects Completed', value: '100+' }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We stay ahead of digital trends to deliver cutting-edge solutions.',
      icon: '🚀'
    },
    {
      title: 'Quality',
      description: 'Every project receives our meticulous attention to detail and excellence.',
      icon: '⭐'
    },
    {
      title: 'Partnership',
      description: 'We build long-term relationships with our clients as trusted partners.',
      icon: '🤝'
    },
    {
      title: 'Results',
      description: 'We measure our success by the growth and success of our clients.',
      icon: '📈'
    }
  ];

  const directors = [
    {
      name: 'Rajesh Kumar',
      position: 'CEO & Founder',
      bio: 'With 12+ years in digital marketing, Rajesh leads our vision of transforming businesses through innovative strategies.',
      image: '👨‍💼'
    },
    {
      name: 'Priya Sharma',
      position: 'CTO & Co-Founder',
      bio: 'A technology visionary with expertise in web development and digital solutions architecture.',
      image: '👩‍💻'
    },
    {
      name: 'Amit Patel',
      position: 'Creative Director',
      bio: 'Leading our creative team to deliver stunning visual experiences that captivate and convert.',
      image: '👨‍🎨'
    }
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 gradient-text">About BrandVision Digital</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up stagger-2">
            We are a passionate team of digital innovators dedicated to helping businesses 
            thrive in the ever-evolving digital landscape.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-3xl font-bold text-card-foreground">Our Story</h3>
            <p className="text-muted-foreground leading-relaxed animate-fade-in-up stagger-1">
              Founded in 2024 in the heart of mumbai, India, BrandVision Digital Business Consulting 
              started with a simple mission: to bridge the gap between traditional businesses 
              and the digital world. What began as a small team of passionate digital marketers 
              has grown into a full-service agency serving clients across the globe.
            </p>
            <p className="text-muted-foreground leading-relaxed animate-fade-in-up stagger-2">
              Today, we're proud to be a trusted partner for over 100+ businesses, helping them 
              navigate the complexities of digital transformation and achieve remarkable growth 
              through innovative strategies and cutting-edge solutions.
            </p>
            <div className="flex items-center space-x-4 bg-accent p-4 rounded-lg hover-lift animate-scale-in stagger-3">
              <Clock className="h-6 w-6 text-primary animate-pulse" />
              <div>
                <p className="font-semibold text-card-foreground">Prompt Support Promise</p>
                <p className="text-sm text-muted-foreground">We respond within two business days</p>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="bg-gradient-to-br from-accent to-muted rounded-2xl p-8 shadow-xl hover-lift">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={stat.label} className={`text-center animate-scale-in stagger-${index + 1} hover-scale`}>
                      <div className="flex items-center justify-center w-12 h-12 bg-card rounded-lg mx-auto mb-3 shadow-sm hover-glow">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="mb-20">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-accent rounded-2xl hover-lift animate-fade-in-up stagger-1">
              <h3 className="text-xl font-bold text-card-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses with innovative digital solutions that drive growth, 
                enhance customer experience, and create lasting value.
              </p>
            </div>
            <div className="text-center p-6 bg-primary/10 rounded-2xl hover-lift animate-fade-in-up stagger-2">
              <h3 className="text-xl font-bold text-card-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading digital transformation partner, helping businesses 
                of all sizes achieve their full potential in the digital age.
              </p>
            </div>
            <div className="text-center p-6 bg-info/10 rounded-2xl hover-lift animate-fade-in-up stagger-3">
              <h3 className="text-xl font-bold text-card-foreground mb-4">Our Promise</h3>
              <p className="text-muted-foreground">
                Delivering exceptional results through collaboration, innovation, 
                and unwavering commitment to our clients' success.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={value.title} className={`bg-card p-6 rounded-xl shadow-lg border border-border hover-lift animate-scale-in stagger-${index + 1}`}>
                <div className="text-3xl mb-4 animate-float">{value.icon}</div>
                <h4 className="text-lg font-bold text-card-foreground mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Meet the Directors */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h3 className="text-3xl font-bold text-card-foreground mb-4 gradient-text">Meet the Directors</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in-up stagger-2">
            Our leadership team brings together decades of experience in digital marketing, 
            technology, and business strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {directors.map((director, index) => (
            <div key={director.name} className={`bg-card p-6 rounded-2xl shadow-lg text-center hover-lift animate-scale-in stagger-${index + 1} group`}>
              <div className="text-6xl mb-4 animate-float group-hover:animate-pulse">{director.image}</div>
              <h4 className="text-xl font-bold text-card-foreground mb-1">{director.name}</h4>
              <p className="text-primary font-medium mb-4">{director.position}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{director.bio}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up stagger-6">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 hover-glow animate-glow">
            Get to Know Us Better
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;