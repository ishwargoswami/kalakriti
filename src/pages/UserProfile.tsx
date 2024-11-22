import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaAddressBook, FaHistory, FaBell, FaCreditCard, FaUserCircle, FaSignOutAlt, FaThumbsUp } from 'react-icons/fa';

const UserProfile: React.FC = () => {
  const navigate = useNavigate();
  const { logout, user, loading } = useAuth();

  const menuItems = [
    { icon: FaUserCircle, label: 'Profile Info', path: '/profileinfo' },
    { icon: FaAddressBook, label: 'Address Book', path: '/addressbook' },
    { icon: FaHistory, label: 'Order History', path: '/orderhistory' },
    { icon: FaCreditCard, label: 'Payment Methods', path: '/payment' },
    { icon: FaBell, label: 'Notifications', path: '/notification' },
    { icon: FaThumbsUp, label: 'Recommendations', path: '/recommendations' },
  ];

  const handleLogout = async () => {
    await logout();
  };

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">My Account</h1>
        <p className="text-gray-600">Welcome, {user.name}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <item.icon className="text-3xl mb-2 text-primary-600" />
            <span className="text-sm text-center">{item.label}</span>
          </div>
        ))}
        <div
          onClick={handleLogout}
          className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <FaSignOutAlt className="text-3xl mb-2 text-red-600" />
          <span className="text-sm text-center">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile; 