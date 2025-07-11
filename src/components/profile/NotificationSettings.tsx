import React, { useEffect, useState } from 'react';
import { Bell, Mail, MessageSquare, Tag, Save } from 'lucide-react';

const NotificationSettings = () => {
  const userId = localStorage.getItem('userId'); // Change this based on your auth method

  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    orderUpdates: true,
    promotions: true,
    newsletter: true,
    productUpdates: false,
  });

  const handleToggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const fetchSettings = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/user/notifications/${userId}`, {
        method: 'GET',
        credentials: 'include',
      });

      const data = await res.json();
      if (res.ok) {
        setSettings(data);
      } else {
        console.error('Failed to fetch:', data.message);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const saveSettings = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/auth/notifications/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(settings),
      });

      const result = await res.json();
      if (res.ok) {
        alert('Preferences saved successfully!');
      } else {
        alert(result.message || 'Failed to save preferences');
      }
    } catch (error) {
      alert('Server error while saving preferences.');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const renderSetting = (
    icon: JSX.Element,
    title: string,
    description: string,
    settingKey: keyof typeof settings
  ) => (
    <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-4">
        <div className="p-2 bg-orange-100 text-orange-600 rounded-full">
          {icon}
        </div>
        <div>
          <p className="font-semibold text-gray-800">{title}</p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={settings[settingKey]}
          onChange={() => handleToggle(settingKey)}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-orange-600 transition duration-300 after:content-[''] after:absolute after:left-[2px] after:top-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
      </label>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-6 text-orange-600">Notification Preferences</h2>

      <div className="space-y-6">
        {/* Communication Preferences */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Communication Channels</h3>
          <div className="space-y-4">
            {renderSetting(<Mail size={20} />, 'Email Notifications', 'Receive updates via email', 'emailNotifications')}
            {renderSetting(<MessageSquare size={20} />, 'SMS Notifications', 'Receive updates via SMS', 'smsNotifications')}
          </div>
        </div>

        {/* Notification Types */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Notification Types</h3>
          <div className="space-y-4">
            {renderSetting(<Bell size={20} />, 'Order Updates', 'Status updates for your orders', 'orderUpdates')}
            {renderSetting(<Tag size={20} />, 'Promotions & Offers', 'Special deals and discounts', 'promotions')}
            {renderSetting(<Mail size={20} />, 'Newsletter', 'Weekly updates about Indian handicrafts', 'newsletter')}
            {renderSetting(<Bell size={20} />, 'Product Updates', 'New products and restocks', 'productUpdates')}
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-6 border-t mt-8">
          <button
            onClick={saveSettings}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium flex items-center justify-center gap-2 py-3 px-4 rounded-xl transition duration-300"
          >
            <Save size={18} /> Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
