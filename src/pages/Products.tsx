import React from 'react';
import { Link } from 'react-router-dom';
import { Filter, SlidersHorizontal, Heart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

const CATEGORIES = ['All', 'Textiles', 'Pottery', 'Jewelry', 'Paintings', 'Home Decor'];

const PRODUCTS = [
  {
    id: 1,
    name: 'Traditional Clay Vase',
    price: 2499,
    category: 'Pottery',
    image: 'https://images.unsplash.com/photo-1610105174465-c9337ee26685'
  },
  {
    id: 2,
    name: 'Handwoven Silk Scarf',
    price: 3999,
    category: 'Textiles',
    image: 'https://images.unsplash.com/photo-1606744888344-493238951221'
  },
  {
    id: 3,
    name: 'Silver Anklet',
    price: 1999,
    category: 'Jewelry',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338'
  },
  {
    id: 4,
    name: 'Madhubani Painting',
    price: 5999,
    category: 'Paintings',
    image: 'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2'
  },
  {
    id: 5,
    name: 'Brass Lamp',
    price: 3499,
    category: 'Home Decor',
    image: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770'
  },
  {
    id: 6,
    name: 'Cotton Bedspread',
    price: 4499,
    category: 'Textiles',
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61'
  },
  {
    id: 7,
    name: 'Ceramic Bowl Set',
    price: 2999,
    category: 'Pottery',
    image: 'https://images.unsplash.com/photo-1610105174465-c9337ee26685'
  },
  {
    id: 8,
    name: 'Gold Plated Necklace',
    price: 6999,
    category: 'Jewelry',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338'
  },
  {
    id: 9,
    name: 'Decorative Wall Hanging',
    price: 1999,
    category: 'Home Decor',
    image: 'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2'
  }
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = React.useState(false);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const filteredProducts = PRODUCTS.filter(product => 
    selectedCategory === 'All' || product.category === selectedCategory
  );

  const handleWishlistToggle = (product: typeof PRODUCTS[0], event: React.MouseEvent) => {
    event.preventDefault();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Our Products</h1>
        <button 
          className="md:hidden flex items-center text-gray-600"
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
        >
          <SlidersHorizontal size={20} className="mr-2" />
          Filters
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters - Desktop */}
        <div className={`${isMobileFilterOpen ? 'block' : 'hidden'} md:block w-64 space-y-6`}>
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Filter size={20} className="mr-2" />
              Categories
            </h3>
            <div className="space-y-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`block w-full text-left px-4 py-2 rounded-md ${
                    selectedCategory === category
                      ? 'bg-orange-100 text-orange-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link to={`/products/${product.id}`} key={product.id} className="group relative">
                <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={`${product.image}?auto=format&fit=crop&q=80`}
                    alt={product.name}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition duration-500"
                  />
                </div>
                <button
                  onClick={(e) => handleWishlistToggle(product, e)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                >
                  <Heart
                    size={20}
                    className={isInWishlist(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}
                  />
                </button>
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                  <p className="text-orange-600 font-semibold">₹{product.price}</p>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No products found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;