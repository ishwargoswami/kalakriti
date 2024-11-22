import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  FaUser,
  FaAddressBook,
  FaHistory,
  FaBell,
  FaSignOutAlt,
  FaShoppingCart
} from 'react-icons/fa';

interface MenuItem {
  icon: typeof FaUser;
  label: string;
  path: string;
  color: string;
}

const UserProfile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  // Using the name property directly from user object
  const username = user?.name || 'Guest'; // Assuming 'name' is the property where username is stored

  const menuItems: MenuItem[] = [
    { 
      icon: FaUser, 
      label: 'Profile Info', 
      path: '/profileinfo',
      color: 'text-blue-600'
    },
    { 
      icon: FaAddressBook, 
      label: 'Address Book', 
      path: '/addressbook',
      color: 'text-green-600'
    },
    { 
      icon: FaHistory, 
      label: 'Order History', 
      path: '/orderhistory',
      color: 'text-purple-600'
    },
    { 
      icon: FaBell, 
      label: 'Notifications', 
      path: '/notification',
      color: 'text-red-600'
    },
    { 
      icon: FaShoppingCart, 
      label: 'My Orders', 
      path: '/orders',
      color: 'text-orange-600'
    }
  ];

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      {/* Profile Header */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center space-x-4">
            <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
              <FaUser className="h-12 w-12 text-gray-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome, {username}
              </h1>
              <p className="text-sm text-gray-500">Member since {user?.createdAt?.split('T')[0]}</p>
            </div>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              className="bg-white rounded-lg shadow-md p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-full bg-gray-100 ${item.color}`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <span className="text-lg font-medium text-gray-900">
                  {item.label}
                </span>
              </div>
            </div>
          ))}

          {/* Logout Button */}
          <div
            onClick={handleLogout}
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-gray-100 text-red-600">
                <FaSignOutAlt className="h-6 w-6" />
              </div>
              <span className="text-lg font-medium text-gray-900">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile; 
