import React from 'react';
import { Link } from 'react-router-dom';
import { Filter, SlidersHorizontal, Heart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

const CATEGORIES = ['All', 'Textiles', 'Pottery', 'Jewelry', 'Paintings', 'Home Decor'];

const PRODUCTS = [
  {
    id: 1,
    name: "Traditional Clay Vase",
    price: 2499,
    category: "Pottery",
    image:
      "https://m.media-amazon.com/images/I/61hu+uVVvJL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 2,
    name: "Handwoven Silk Scarf",
    price: 3999,
    category: "Textiles",
    image:
      "https://www.holyweaves.com/cdn/shop/files/SCF-4534300701-PRL.jpg?v=1715188399&width=2048",
  },
  {
    id: 3,
    name: "Silver Anklet",
    price: 1999,
    category: "Jewelry",
    image:
      "https://www.miabytanishq.com/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw082ed6eb/images/hi-res/4019LOR_4.jpg?sw=640&sh=640",
  },
  {
    id: 4,
    name: "Madhubani Painting",
    price: 5999,
    category: "Paintings",
    image:
      "https://i.pinimg.com/originals/3b/fd/b6/3bfdb6aaeff834ad6a79dba30b271681.jpg",
  },
  {
    id: 5,
    name: "Brass Lamp",
    price: 3499,
    category: "Home Decor",
    image:
      "https://theindiacrafthouse.com/cdn/shop/products/Traditional_20Brass_20Oil_20Lamp_20-_20Peacock_20-_20BD01A_202@2x.jpg",
  },
  {
    id: 6,
    name: "Cotton Bedspread",
    price: 4499,
    category: "Textiles",
    image:
      "https://m.media-amazon.com/images/I/71x8cAMQZAL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 7,
    name: "Ceramic Bowl Set",
    price: 2999,
    category: "Pottery",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20231120/YjT9/655b8da5ddf77915198fdbdc/-1117Wx1400H-466814276-blue-MODEL.jpg",
  },
  {
    id: 8,
    name: "Gold Plated Necklace",
    price: 6999,
    category: "Jewelry",
    image:
      "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw67432ac1/images/hi-res/5110692ZWAAA00_1.jpg?sw=640&sh=640",
  },
  {
    id: 9,
    name: "Decorative Wall Hanging",
    price: 1999,
    category: "Home Decor",
    image: "https://m.media-amazon.com/images/I/71nFcZ0nXXL.jpg",
  },
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