import React from 'react';
import { Truck, Clock, Globe, Shield } from 'lucide-react';

const ShippingPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shipping Policy</h1>

      <div className="space-y-8">
        {/* Shipping Methods */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Shipping Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Truck className="w-6 h-6 text-orange-600" />
                <h3 className="text-lg font-medium">Standard Delivery</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Delivery within 5-7 business days</li>
                <li>• Free shipping on orders above ₹999</li>
                <li>• ₹99 for orders below ₹999</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-orange-600" />
                <h3 className="text-lg font-medium">Express Delivery</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Delivery within 2-3 business days</li>
                <li>• Available for select locations</li>
                <li>• Additional charges apply</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Delivery Areas */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Delivery Areas</h2>
          <div className="bg-orange-50 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Globe className="w-6 h-6 text-orange-600" />
              <h3 className="text-lg font-medium">Coverage</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Pan India delivery available</li>
              <li>• International shipping to select countries</li>
              <li>• Remote areas may require additional delivery time</li>
            </ul>
          </div>
        </section>

        {/* Tracking & Insurance */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Tracking & Insurance</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-6 h-6 text-orange-600" />
              <h3 className="text-lg font-medium">Order Protection</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Real-time tracking available for all orders</li>
              <li>• All shipments are fully insured</li>
              <li>• Signature required for high-value items</li>
            </ul>
          </div>
        </section>

        {/* Important Notes */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Important Notes</h2>
          <div className="prose text-gray-600">
            <ul>
              <li>Delivery times may vary during peak seasons and festivals</li>
              <li>Orders placed after 2 PM will be processed the next business day</li>
              <li>Custom/made-to-order items may require additional processing time</li>
              <li>We may contact you if there are any delivery constraints</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ShippingPolicy;