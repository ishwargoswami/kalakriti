import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <span
                className="text-2xl font-bold text-primary-600 font-sanskrit"
                style={{ color: "#EA580C" }}
              >
                कलाकृति
              </span>

              <span
                className="ml-2 text-sm text-gray-500 italic font-tagline"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  marginTop: "0.5rem",
                  marginLeft: "0.1rem",
                  color: "#fff"
                }}
              >
                Vocal for Local
              </span>
            </Link>
            <p className="text-gray-400">
              Celebrating India's rich heritage through authentic handcrafted
              treasures.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products"
                  className="text-gray-400 hover:text-orange-500"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-orange-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-orange-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/shipping-policy"
                  className="text-gray-400 hover:text-orange-500"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/return-policy"
                  className="text-gray-400 hover:text-orange-500"
                >
                  Return Policy
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-orange-500">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Kalakriti. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;