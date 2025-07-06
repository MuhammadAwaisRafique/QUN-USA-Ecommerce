import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Search } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
}

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const query = searchParams.get('q') || '';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/products?search=${encodeURIComponent(query)}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (query) {
      fetchProducts();
    } else {
      setProducts([]);
      setIsLoading(false);
    }
  }, [query]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Searching...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Search className="h-6 w-6 text-gray-600" />
            <h1 className="text-3xl font-bold text-gray-800">
              Search Results
            </h1>
          </div>
          
          {query && (
            <p className="text-gray-600">
              Showing results for "{query}" - {products.length} products found
            </p>
          )}
        </div>

        {!query ? (
          <div className="text-center py-12">
            <Search className="h-24 w-24 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">No search query</h2>
            <p className="text-gray-600">Please enter a search term to find products.</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12">
            <Search className="h-24 w-24 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">No products found</h2>
            <p className="text-gray-600">
              We couldn't find any products matching "{query}". Try different keywords or browse our categories.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}