import React from 'react';
import { RefreshCw, CheckCircle, AlertCircle, Clock } from 'lucide-react';

const ReturnPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Return Policy</h1>

      <div className="space-y-8">
        {/* Return Window */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Return Window</h2>
          <div className="bg-orange-50 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="w-6 h-6 text-orange-600" />
              <h3 className="text-lg font-medium">07-Day Return Policy</h3>
            </div>
            <p className="text-gray-600">
              We accept returns within 07 days of delivery. The item must be unused,
              in its original packaging, and in the same condition as received.
            </p>
          </div>
        </section>

        {/* Eligible Items */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Eligible Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-medium">Returnable Items</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Non-customized handicrafts</li>
                <li>• Unused textiles and garments</li>
                <li>• Factory-made items</li>
                <li>• Damaged or defective items</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <AlertCircle className="w-6 h-6 text-red-600" />
                <h3 className="text-lg font-medium">Non-Returnable Items</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Customized or personalized items</li>
                <li>• Sale or clearance items</li>
                <li>• Personal care items</li>
                <li>• Items without original packaging</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Return Process */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Return Process</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <RefreshCw className="w-6 h-6 text-orange-600" />
              <h3 className="text-lg font-medium">How to Return</h3>
            </div>
            <ol className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="font-bold mr-2">1.</span>
                <span>Initiate return request through your account or contact customer support</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">2.</span>
                <span>Pack the item securely in its original packaging</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">3.</span>
                <span>Schedule pickup or ship to our return center</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">4.</span>
                <span>Refund will be processed within 7-10 business days after inspection</span>
              </li>
            </ol>
          </div>
        </section>

        {/* Refund Information */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Refund Information</h2>
          <div className="prose text-gray-600">
            <ul>
              <li>Refunds will be issued to the original payment method</li>
              <li>Shipping charges are non-refundable unless item is defective</li>
              <li>Store credit option available for faster processing</li>
              <li>Additional benefits for returns to store (where applicable)</li>
            </ul>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-orange-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Need Help?</h2>
          <p className="text-gray-600">
            For any questions about returns, please contact our customer support:
          </p>
          <p className="mt-2">
            <a href="mailto:support@kalakriti.com" className="text-orange-600 hover:text-orange-700">
              support@kalakriti.com
            </a>
            <br />
            <span className="text-gray-600">+91 *** *** 7661</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default ReturnPolicy;