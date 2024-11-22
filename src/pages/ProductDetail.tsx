import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Truck, ShieldCheck, Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

// Using the same products data from Products.tsx
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

const ProductDetail = () => {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === Number(id));
  const { addToCart, isInCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-gray-600">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    const { id, name, price, image } = product;
    addToCart({ id, name, price, image });
  };

  const toggleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100">
          <img
            src={`${product.image}?auto=format&fit=crop&q=80`}
            alt={product.name}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="mt-2 text-xl text-orange-600 font-semibold">₹{product.price}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className={i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}
              />
            ))}
            <span className="text-gray-600">(127 reviews)</span>
          </div>

          {/* Description */}
          <p className="text-gray-600">
            Handcrafted by skilled artisans, this beautiful piece represents the rich tradition of
            Indian craftsmanship. Each piece is unique and carries the authentic touch of its creator.
          </p>

          {/* Features */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-gray-600">
              <Truck size={20} />
              <span>Free shipping across India</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <ShieldCheck size={20} />
              <span>100% authentic handcrafted product</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition duration-300 flex items-center justify-center"
              disabled={isInCart(product.id)}
            >
              <ShoppingBag size={20} className="mr-2" />
              {isInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
            </button>
            <button
              onClick={toggleWishlist}
              className="p-3 border border-gray-300 rounded-md hover:border-orange-600 transition duration-300"
            >
              <Heart
                size={24}
                className={isInWishlist(product.id) ? 'text-red-500 fill-current' : 'text-gray-600'}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;