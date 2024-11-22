import React from 'react';
import { Package, RefreshCw } from 'lucide-react';

const OrderHistory = () => {
  const orders = [
    {
      id: 'ORD123456',
      date: '2024-03-15',
      status: 'Delivered',
      total: 4999,
      items: [
        {
          name: 'Traditional Clay Vase',
          price: 2499,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1610105174465-c9337ee26685?auto=format&fit=crop&q=80'
        },
        {
          name: 'Handwoven Silk Scarf',
          price: 2500,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1606744888344-493238951221?auto=format&fit=crop&q=80'
        }
      ]
    },
    // Add more orders as needed
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Order History</h2>

      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="border rounded-lg p-6 space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">Order #{order.id}</p>
                <p className="text-sm text-gray-600">
                  Placed on {new Date(order.date).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold">₹{order.total}</p>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {order.status}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {order.items.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity} × ₹{item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end space-x-4">
              <button className="flex items-center space-x-2 text-orange-600 hover:text-orange-700">
                <Package size={20} />
                <span>Track Order</span>
              </button>
              <button className="flex items-center space-x-2 text-orange-600 hover:text-orange-700">
                <RefreshCw size={20} />
                <span>Reorder</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;