import React from 'react';
import { X } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Search Products</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for products..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          autoFocus
        />
        {searchQuery && (
          <div className="mt-4 max-h-96 overflow-y-auto">
            {/* Example search results */}
            <div className="space-y-2">
              <div className="flex items-center space-x-4 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1610105174465-c9337ee26685?auto=format&fit=crop&q=80"
                  alt="Product"
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-medium">Traditional Vase</h3>
                  <p className="text-sm text-gray-500">Handcrafted pottery</p>
                </div>
              </div>
              {/* Add more search results as needed */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;