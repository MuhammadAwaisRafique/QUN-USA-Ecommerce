import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck, Headphones } from 'lucide-react';
import ProductCard from '../components/ProductCard';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          fetch('/api/products'),
          fetch('/api/categories')
        ]);
        
        const products = await productsRes.json();
        const categoriesData = await categoriesRes.json();
        
        // Get 8 random featured products
        const shuffled = products.sort(() => 0.5 - Math.random());
        setFeaturedProducts(shuffled.slice(0, 8));
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-yellow-400">QunUsa</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Your trusted destination for premium technology, mobile accessories, medical equipment, and home appliances
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/category/computer-hardware"
                className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors inline-flex items-center justify-center"
              >
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Cash on Delivery</h3>
              <p className="text-gray-600">Pay when you receive your order at your doorstep</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">All products come with comprehensive warranty</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Premium Products</h3>
              <p className="text-gray-600">Carefully curated selection of top-tier items</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Expert customer service whenever you need help</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600">
              Discover our comprehensive range of premium products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{category.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-800">
                    <span className="font-semibold">Explore Products</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600">
              Handpicked selections from our premium catalog
            </p>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-gray-200 rounded-lg h-80 animate-pulse"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Link
              to="/category/computer-hardware"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              View All Products <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Wholesale Supply & Bulk Orders Section */}
      <section className="py-16 bg-blue-50 border-t border-b border-blue-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Wholesale Supply & Bulk Orders – QUN LLC</h2>
            <p className="text-lg text-blue-700">At QUN LLC, we are proud to be your trusted wholesale supplier, offering premium-quality products across multiple categories including:</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <span className="bg-white border border-blue-200 text-blue-800 px-4 py-2 rounded-lg font-semibold">Computer Hardware</span>
              <span className="bg-white border border-blue-200 text-blue-800 px-4 py-2 rounded-lg font-semibold">Mobile Accessories</span>
              <span className="bg-white border border-blue-200 text-blue-800 px-4 py-2 rounded-lg font-semibold">Medical Equipment</span>
              <span className="bg-white border border-blue-200 text-blue-800 px-4 py-2 rounded-lg font-semibold">Home Appliances</span>
            </div>
            <p className="text-md text-blue-700 mt-4">We cater to both B2B (Business-to-Business) and D2C (Direct-to-Consumer) clients across the United States, ensuring competitive pricing, seamless delivery, and top-tier service every step of the way.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-blue-800 mb-4">Why Choose QUN LLC for Wholesale Supplies?</h3>
              <ul className="list-disc list-inside text-blue-700 space-y-2">
                <li><strong>Discounted Bulk Pricing:</strong> Exclusive volume discounts and tiered pricing models designed to support business growth and maximize profit margins.</li>
                <li><strong>High-Quality, Certified Products:</strong> Every item in our catalog undergoes rigorous quality checks and complies with US industry standards.</li>
                <li><strong>Tailored B2B Solutions:</strong> Personalized assistance to help you choose the right products and quantities for your specific needs.</li>
                <li><strong>Efficient Nationwide Shipping:</strong> Fast and insured delivery across the United States, ensuring your business keeps running smoothly.</li>
                <li><strong>Responsive Support Team:</strong> Priority customer care from our friendly, knowledgeable staff.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-800 mb-4">Industries We Serve</h3>
              <ul className="list-disc list-inside text-blue-700 space-y-2">
                <li>Retail & E-Commerce Stores</li>
                <li>Hospitals & Clinics</li>
                <li>IT & Tech Firms</li>
                <li>Mobile Shops & Distributors</li>
                <li>Service Centers</li>
                <li>Educational Institutions</li>
                <li>Real Estate & Property Developers</li>
              </ul>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-bold text-blue-800 mb-4">How to Place a Wholesale Order</h3>
            <ol className="list-decimal list-inside text-blue-700 space-y-2">
              <li><strong>Get in Touch:</strong> Contact our sales team at <a href="mailto:qunusallc@gmail.com" className="text-blue-600 underline">qunusallc@gmail.com</a> with your requirements (product list, quantity, location, etc.)</li>
              <li><strong>Receive a Custom Quote:</strong> We'll send a detailed quotation including wholesale pricing, delivery timeline, and payment terms.</li>
              <li><strong>Confirm & Pay:</strong> Choose from secure payment options including eCheck, wire transfer, and more.</li>
              <li><strong>Track Your Shipment:</strong> We'll provide real-time tracking and proactive updates until your order is delivered.</li>
            </ol>
          </div>
          <div className="mt-10 text-center">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Partner With Us</h3>
            <p className="text-blue-700 mb-2">If you're looking for a reliable, flexible, and efficient wholesale partner in the USA, QUN LLC is here to deliver. We are committed to building long-term business relationships rooted in trust, value, and excellence.</p>
            <p className="text-blue-700">Email: <a href="mailto:qunusallc@gmail.com" className="text-blue-600 underline">qunusallc@gmail.com</a></p>
            <p className="text-blue-700">Based in the USA | Serving All States Nationwide</p>
            <p className="text-blue-800 font-semibold mt-4">Let's Grow Your Business—Together.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Join thousands of satisfied customers who trust QunUsa for their technology needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Create Account
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Get Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}