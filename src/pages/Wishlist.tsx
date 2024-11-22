import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingCart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Wishlist</h1>

      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlist.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-64"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm font-medium text-primary-600 bg-primary-50 rounded-full mb-4">
                  {item.category}
                </span>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{item.name}</h3>
                <p className="text-primary-600 font-semibold mb-4">₹{item.price}</p>
                <div className="flex space-x-4">
                  <Link 
                    to={`/products/${item.id}`}
                    className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition duration-300 flex items-center justify-center"
                  >
                    <ShoppingCart size={20} className="mr-2" />
                    View Details
                  </Link>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="p-2 text-gray-400 hover:text-red-500 transition duration-300"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">Your wishlist is empty</p>
          <Link
            to="/products"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition duration-300"
          >
            Browse Products
          </Link>
        </div>
      )}
    </div>
  );
};

export default Wishlist;