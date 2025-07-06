import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
                QunUsa
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for quality products across technology, mobile accessories, medical equipment, and home appliances.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <Mail className="h-4 w-4" />
              <span className="text-sm">contact@qunusa.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/refund-policy" className="text-gray-300 hover:text-white transition-colors">Refund Policy</Link></li>
              <li><Link to="/cart" className="text-gray-300 hover:text-white transition-colors">Shopping Cart</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/category/computer-hardware" className="text-gray-300 hover:text-white transition-colors">Computer Hardware</Link></li>
              <li><Link to="/category/mobile-accessories" className="text-gray-300 hover:text-white transition-colors">Mobile Accessories</Link></li>
              <li><Link to="/category/medical-equipment" className="text-gray-300 hover:text-white transition-colors">Medical Equipment</Link></li>
              <li><Link to="/category/home-appliances" className="text-gray-300 hover:text-white transition-colors">Home Appliances</Link></li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
            <div className="space-y-2">
              <div className="bg-green-600 text-white px-3 py-2 rounded text-sm">
                Cash on Delivery
              </div>
              <div className="bg-blue-600 text-white px-3 py-2 rounded text-sm">
                eCheck Payment
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Business Address</h4>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span className="text-sm text-gray-300">
                  123 Business Ave<br />
                  Commerce City, CC 12345<br />
                  United States
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 QunUsa.com. All rights reserved. | Professional e-commerce solutions for your technology and lifestyle needs.
          </p>
        </div>
      </div>
    </footer>
  );
}