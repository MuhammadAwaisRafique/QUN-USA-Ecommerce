import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
}

const WHOLESALE_CATEGORIES = [
  "Computer Hardware",
  "Mobile Accessories",
  "Medical Equipment",
  "Home Appliances",
];

export default function WholesalePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const allProducts = await response.json();
        const filtered = allProducts.filter((p: Product) =>
          WHOLESALE_CATEGORIES.includes(p.category)
        );
        setProducts(filtered);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const groupedProducts = WHOLESALE_CATEGORIES.map((category) => ({
    category,
    products: sortedProducts.filter((p) => p.category === category),
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Wholesale Hero */}
      <div className="relative h-64 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Wholesale
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Bulk supply of Computer Hardware, Mobile Accessories, Medical
            Equipment, and Home Appliances. Enjoy exclusive pricing and top-tier
            service for your business needs.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">
            {products.length} Products Found
          </h2>
          <div className="flex items-center space-x-4">
            <label htmlFor="sort" className="text-gray-700 font-medium">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Name (A-Z)</option>
              <option value="price-low">Price (Low to High)</option>
              <option value="price-high">Price (High to Low)</option>
            </select>
          </div>
        </div>
        {isLoading ? (
          <div className="text-center py-12 text-xl text-gray-500">
            Loading...
          </div>
        ) : groupedProducts.every((g) => g.products.length === 0) ? (
          <div className="text-center py-12 text-xl text-gray-500">
            No wholesale products found.
          </div>
        ) : (
          groupedProducts.map(
            ({ category, products }) =>
              products.length > 0 && (
                <div key={category} className="mb-12">
                  <div className="flex items-center mb-6 mt-10">
                    <h3 className="text-3xl text-blue-800 mr-4 tracking-tight">
                      {category}
                    </h3>
                    <div
                      className="flex-1 h-1 bg-gradient-to-r from-blue-500 to-blue-200 rounded-full"
                      style={{ minWidth: 60 }}
                    ></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              )
          )
        )}
      </div>
    </div>
  );
}
