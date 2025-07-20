import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { getTotalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  const categories = [
    { name: "Computer Hardware", slug: "computer-hardware" },
    { name: "Mobile Accessories", slug: "mobile-accessories" },
    { name: "Medical Equipment", slug: "medical-equipment" },
    { name: "Home Appliances", slug: "home-appliances" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
              QunUsa
            </div>
          </Link>

          {/* Desktop Search */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex flex-1 max-w-lg mx-8"
          >
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full px-4 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </form>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/cart"
              className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Hello, {user.name}</span>
                {user.role === "admin" && (
                  <Link
                    to="/admin"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Admin
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login" className="text-blue-600 hover:text-blue-800">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-blue-600"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Categories Bar */}
        <div className="hidden md:flex border-t border-gray-200 py-2">
          <div className="flex space-x-8">
            <Link
              to="/professional-services"
              className="text-gray-600 hover:text-blue-600 transition-colors py-2"
            >
              Professional Services
            </Link>
            <Link
              to="/wholesale"
              className="text-gray-600 hover:text-blue-600 transition-colors py-2"
            >
              Wholesale
            </Link>

            <Link
              to="/contact"
              className="text-gray-600 hover:text-blue-600 transition-colors py-2"
            >
              Contact
            </Link>
            <Link
              to="/refund-policy"
              className="text-gray-600 hover:text-blue-600 transition-colors py-2"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>

            {/* Mobile Categories */}
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/category/${category.slug}`}
                className="block text-gray-600 hover:text-blue-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}

            <Link
              to="/professional-services"
              className="block text-gray-600 hover:text-blue-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Professional Services
            </Link>
            <Link
              to="/wholesale"
              className="block text-gray-600 hover:text-blue-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Wholesale
            </Link>

            <Link
              to="/contact"
              className="block text-gray-600 hover:text-blue-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/refund-policy"
              className="block text-gray-600 hover:text-blue-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Refund Policy
            </Link>

            {/* Mobile Cart */}
            <Link
              to="/cart"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Cart ({getTotalItems()})</span>
            </Link>

            {/* Mobile Auth */}
            {user ? (
              <div className="space-y-2">
                <div className="text-gray-700">Hello, {user.name}</div>
                {user.role === "admin" && (
                  <Link
                    to="/admin"
                    className="block text-blue-600 hover:text-blue-800 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Admin Panel
                  </Link>
                )}
                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <Link
                  to="/login"
                  className="block text-blue-600 hover:text-blue-800 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
