import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiLayout, FiPackage, FiShoppingBag, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../contexts/AuthContext';

const AdminSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const menuItems = [
    { path: '/admin/dashboard', icon: FiLayout, label: 'داشبورد' },
    { path: '/admin/products', icon: FiPackage, label: 'مدیریت محصولات' },
    { path: '/admin/orders', icon: FiShoppingBag, label: 'مدیریت سفارشات' }
  ];

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen fixed right-0 top-0">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-8">💻 LapShop Admin</h1>
        <nav className="space-y-2">
          {menuItems.map(item => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 space-x-reverse px-4 py-3 rounded-lg transition ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Icon className="text-xl" />
                <span>{item.label}</span>
              </Link>
            );
          })}
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 space-x-reverse px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 transition"
          >
            <FiLogOut className="text-xl" />
            <span>خروج</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default AdminSidebar;

