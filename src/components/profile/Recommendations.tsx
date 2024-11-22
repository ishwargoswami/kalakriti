import React from 'react';
import { Link } from 'react-router-dom';

const Recommendations = () => {
  const recommendations = [
    {
      id: 1,
      name: 'Traditional Clay Vase',
      price: 2499,
      image: 'https://images.unsplash.com/photo-1610105174465-c9337ee26685?auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      name: 'Handwoven Silk Scarf',
      price: 3999,
      image: 'https://images.unsplash.com/photo-1606744888344-493238951221?auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      name: 'Silver Anklet',
      price: 1999,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Recommended for You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="group"
          >
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full transform group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
              <p className="text-orange-600 font-semibold">₹{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;