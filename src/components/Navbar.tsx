import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, User, Heart } from 'lucide-react';
import SearchModal from './SearchModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <span
                  className="text-2xl font-bold text-primary-600 font-sanskrit"
                  style={{ color: "#283618" }}
                >
                  कलाकृति
                </span>

                <span
                  className="ml-2 text-sm text-gray-500 italic font-tagline"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    marginTop: "0.5rem",
                    marginLeft: "0.1rem"
                  }}
                >
                  Vocal for Local
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/products"
                className="text-gray-600 hover:text-primary-600"
              >
                Products
              </Link>
              <Link to="/blog" className="text-gray-600 hover:text-primary-600">
                Blog
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-primary-600"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-primary-600"
              >
                Contact
              </Link>
              <Link to="/faq" className="text-gray-600 hover:text-primary-600">
                FAQ
              </Link>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="text-gray-600 hover:text-primary-600"
                >
                  <Search size={20} />
                </button>
                <Link
                  to="/wishlist"
                  className="text-gray-600 hover:text-primary-600"
                >
                  <Heart size={20} />
                </Link>
                <Link
                  to="/cart"
                  className="text-gray-600 hover:text-primary-600"
                >
                  <ShoppingBag size={20} />
                </Link>
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-primary-600"
                >
                  <User size={20} />
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-primary-600"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/products"
                className="block px-3 py-2 text-gray-600 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-gray-600 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-600 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-600 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/faq"
                className="block px-3 py-2 text-gray-600 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <Link
                to="/wishlist"
                className="block px-3 py-2 text-gray-600 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Wishlist
              </Link>
              <Link
                to="/login"
                className="block px-3 py-2 text-gray-600 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </nav>
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
};

export default Navbar;