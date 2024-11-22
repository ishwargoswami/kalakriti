import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Check } from 'lucide-react';
import axios from 'axios';
const AddressBook = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: 'Home',
      name: 'John Doe',
      address: '123 Craft Street',
      city: 'Jaipur',
      state: 'Rajasthan',
      pincode: '302001',
      phone: '+91 98765 43210',
      isDefault: true
    },
    // Add more addresses as needed
  ]);

  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newAddress, setNewAddress] = useState({
    type: '',
    name: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    phone: ''
  });
  const handleAddAddress = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      // Send data to backend
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:5000/api/addresses/add',
        newAddress,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Ensure token is passed for auth
          },
        }
      );
  
      // Update the local state
      setAddresses([...addresses, response.data]);
      setIsAddingNew(false); // Close form
      setNewAddress({
        type: '',
        name: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        phone: '',
      });
    } catch (error) {
      console.error('Error saving address:', error);
      alert('Failed to save address');
      
    }
  };

  const handleSetDefault = (id: number) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Address Book</h2>
        <button
          onClick={() => setIsAddingNew(true)}
          className="flex items-center space-x-2 text-orange-600 hover:text-orange-700"
        >
          <Plus size={20} />
          <span>Add New Address</span>
        </button>
      </div>

      {isAddingNew && (
        <form onSubmit={handleAddAddress} className="border rounded-lg p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address Type
              </label>
              <input
                type="text"
                name="type" // Add this
  value={newAddress.type} // Bind state
  onChange={(e) =>
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value })
  }
                placeholder="Home, Office, etc."
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name" // Add this
  value={newAddress.name} // Bind state
  onChange={(e) =>
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value })
  }
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Street Address
              </label>
              <textarea
                rows={3}
                name="address" // Add this
  value={newAddress.address} // Bind state
  onChange={(e) =>
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value })
  }
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                name="city" // Add this
  value={newAddress.city} // Bind state
  onChange={(e) =>
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value })
  }
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <input
                type="text"
                name="state" // Add this
  value={newAddress.state} // Bind state
  onChange={(e) =>
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value })
  }
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                PIN Code
              </label>
              <input
                type="text"
                name="pincode" // Add this
  value={newAddress.pincode} // Bind state
  onChange={(e) =>
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value })
  }
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone" // Add this
  value={newAddress.phone} // Bind state
  onChange={(e) =>
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value })
  }
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => setIsAddingNew(false)}
              className="px-4 py-2 text-gray-600 hover:text-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
            >
              Save Address
            </button>
          </div>
        </form>
      )}

      <div className="space-y-4">
        {addresses.map((address) => (
          <div key={address.id} className="border rounded-lg p-6">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">{address.type}</span>
                  {address.isDefault && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Default
                    </span>
                  )}
                </div>
                <p className="mt-2">{address.name}</p>
                <p className="text-gray-600">
                  {address.address}, {address.city}, {address.state} - {address.pincode}
                </p>
                <p className="text-gray-600">{address.phone}</p>
              </div>
              <div className="flex space-x-4">
                <button className="text-gray-600 hover:text-gray-700">
                  <Edit2 size={20} />
                </button>
                <button className="text-red-600 hover:text-red-700">
                  <Trash2 size={20} />
                </button>
                {!address.isDefault && (
                  <button
                    onClick={() => handleSetDefault(address.id)}
                    className="text-orange-600 hover:text-orange-700"
                  >
                    <Check size={20} />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddressBook;
