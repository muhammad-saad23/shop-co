import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Phone, MapPin, Mail } from 'lucide-react';

function Footer() {
  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/' },
    { icon: Twitter, label: 'Twitter', href: 'https://www.twitter.com/' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/' },
    { icon: Youtube, label: 'Youtube', href: 'https://www.youtube.com/' },
  ];

  const quickLinks = [
    { label: 'About Us', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'FAQs', href: '#' },
  ];

  const customerServiceLinks = [
    { label: 'Payment Methods', href: '#' },
    { label: 'Shipping Policy', href: '#' },
    { label: 'Returns & Exchanges', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
  ];

  const contactInfo = [
    { icon: Phone, label: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, label: 'support@example.com', href: 'mailto:support@example.com' },
    { icon: MapPin, label: '123 Commerce St, NY 10001', href: '#' },
  ];

  return (
    <footer data-aos="fade" data-aos-duration="1000" className="bg-black text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white text-2xl font-bold mb-2">Shop Name</h3>
              <p className="text-sm text-gray-400">
                Creating quality products for our valued customers since 2024.
              </p>
            </div>
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center space-x-3 text-sm hover:text-white transition-colors duration-200"
                >
                  <Icon className="w-5 h-5 text-blue-500" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="text-white text-lg font-semibold mb-6 relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-blue-500">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a 
                    href={href} 
                    className="group text-sm hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Customer Service */}
          <nav aria-label="Customer service">
            <h3 className="text-white text-lg font-semibold mb-6 relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-blue-500">
              Customer Service
            </h3>
            <ul className="space-y-3">
              {customerServiceLinks.map(({ label, href }) => (
                <li key={label}>
                  <a 
                    href={href} 
                    className="group text-sm hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6 relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-blue-500">
              Follow Us
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target='_blank'
                  aria-label={`Follow us on ${label}`}
                  className="flex items-center space-x-3 text-sm hover:text-white transition-colors duration-200 group"
                >
                  <span className="bg-gray-800 p-2 rounded-lg group-hover:bg-blue-500 transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Shop Name. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 mx-3">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 mx-3">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


export default Footer;