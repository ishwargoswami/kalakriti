import React, { useState } from 'react';
import { Camera, Edit2, MapPin, CreditCard, Bell, Package, Heart, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProfileInfo from '../components/profile/ProfileInfo';
import OrderHistory from '../components/profile/OrderHistory';
import AddressBook from '../components/profile/AddressBook';
import PaymentMethods from '../components/profile/PaymentMethods';
import Recommendations from '../components/profile/Recommendations';
import NotificationSettings from '../components/profile/NotificationSettings';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [theme, setTheme] = useState('default');

  const tabs = [
    { id: 'profile', label: 'Personal Information', icon: <Edit2 size={20} /> },
    { id: 'orders', label: 'Orders', icon: <Package size={20} /> },
    { id: 'addresses', label: 'Address Book', icon: <MapPin size={20} /> },
    { id: 'payments', label: 'Payment Methods', icon: <CreditCard size={20} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={20} /> },
    { id: 'wishlist', label: 'Wishlist', icon: <Heart size={20} /> }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileInfo />;
      case 'orders':
        return <OrderHistory />;
      case 'addresses':
        return <AddressBook />;
      case 'payments':
        return <PaymentMethods />;
      case 'notifications':
        return <NotificationSettings />;
      case 'wishlist':
        return <Link to="/wishlist">Go to Wishlist</Link>;
      default:
        return <ProfileInfo />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
            {/* Profile Picture */}
            <div className="text-center">
              <div className="relative inline-block">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover mx-auto"
                />
                <label
                  htmlFor="profile-picture"
                  className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md cursor-pointer"
                >
                  <Camera size={16} className="text-gray-600" />
                </label>
                <input
                  type="file"
                  id="profile-picture"
                  className="hidden"
                  accept="image/*"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">John Doe</h3>
              <p className="text-gray-600">john.doe@example.com</p>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-md transition-colors ${
                    activeTab === tab.id
                      ? 'bg-orange-50 text-orange-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
              <button
                className="w-full flex items-center space-x-3 px-4 py-2 rounded-md text-red-600 hover:bg-red-50"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </nav>

            {/* Theme Selection */}
            <div className="pt-4 border-t">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Theme Style
              </label>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              >
                <option value="default">Default</option>
                <option value="madhubani">Madhubani</option>
                <option value="warli">Warli</option>
                <option value="kalamkari">Kalamkari</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {renderContent()}
          </div>

          {/* Recommendations */}
          <div className="mt-8">
            <Recommendations />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;