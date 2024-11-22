import React from 'react';
import { CreditCard, Plus, Wallet } from 'lucide-react';

const PaymentMethods = () => {
  const cards = [
    {
      id: 1,
      type: 'Visa',
      number: '****  ****  ****  4242',
      expiry: '12/25',
      isDefault: true
    },
    // Add more cards as needed
  ];

  const transactions = [
    {
      id: 1,
      date: '2024-03-15',
      amount: 4999,
      type: 'Purchase',
      status: 'Completed'
    },
    // Add more transactions as needed
  ];

  return (
    <div className="space-y-8">
      {/* Saved Cards */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Payment Methods</h2>
          <button className="flex items-center space-x-2 text-orange-600 hover:text-orange-700">
            <Plus size={20} />
            <span>Add New Card</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="border rounded-lg p-6 space-y-4 bg-gradient-to-r from-gray-100 to-gray-50"
            >
              <div className="flex justify-between items-start">
                <CreditCard size={32} className="text-gray-600" />
                {card.isDefault && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Default
                  </span>
                )}
              </div>
              <div>
                <p className="font-mono text-lg">{card.number}</p>
                <p className="text-sm text-gray-600">Expires {card.expiry}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wallet Balance */}
      <div className="bg-orange-50 rounded-lg p-6">
        <div className="flex items-center space-x-4">
          <Wallet size={24} className="text-orange-600" />
          <div>
            <p className="text-sm text-gray-600">Available Balance</p>
            <p className="text-2xl font-semibold">₹2,500</p>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Transaction History</h3>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex justify-between items-center p-4 border rounded-lg"
            >
              <div>
                <p className="font-medium">{transaction.type}</p>
                <p className="text-sm text-gray-600">
                  {new Date(transaction.date).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold">₹{transaction.amount}</p>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {transaction.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;