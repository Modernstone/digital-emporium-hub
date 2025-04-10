
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-tech-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">TechHub</h3>
            <p className="text-gray-300 mb-4">
              Your trusted destination for the latest electronics and tech innovations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-tech-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-tech-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-tech-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-tech-blue transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Shop Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-tech-blue transition-colors">Phones</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tech-blue transition-colors">Laptops</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tech-blue transition-colors">Accessories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tech-blue transition-colors">Wearables</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tech-blue transition-colors">Special Offers</a></li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-tech-blue transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tech-blue transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tech-blue transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tech-blue transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tech-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tech-blue transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-tech-blue" /> 
                <span className="text-gray-300">123 Tech Street, Silicon Valley, CA 94043</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-tech-blue" /> 
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-tech-blue" /> 
                <span className="text-gray-300">support@techhub.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} TechHub. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm text-gray-400 hover:text-tech-blue transition-colors">Privacy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-tech-blue transition-colors">Terms</a>
            <a href="#" className="text-sm text-gray-400 hover:text-tech-blue transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
