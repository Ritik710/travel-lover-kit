import { Plane, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Blog", href: "#" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Flight Booking", href: "#" },
        { name: "Hotel Booking", href: "#" },
        { name: "Train Booking", href: "#" },
        { name: "Holiday Packages", href: "#" },
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-hero p-2 rounded-xl">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                TravelJoy
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Your trusted partner for unforgettable journeys. Book flights, hotels, and trains 
              at the best prices with 24/7 customer support.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@traveljoy.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-card-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © 2024 TravelJoy. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          {/* Payment Methods */}
          <div className="flex items-center space-x-2 text-muted-foreground text-sm">
            <span>Secure payments with</span>
            <div className="flex space-x-2">
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold">
                VISA
              </span>
              <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-semibold">
                MC
              </span>
              <span className="bg-success text-success-foreground px-2 py-1 rounded text-xs font-semibold">
                UPI
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;