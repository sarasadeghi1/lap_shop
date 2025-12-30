import React from 'react';
import { useProducts } from '../../contexts/ProductContext';
import { FiPackage, FiShoppingBag, FiTrendingUp, FiDollarSign } from 'react-icons/fi';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const AdminDashboard = () => {
  const { products } = useProducts();

  // محاسبه آمار
  const totalProducts = products.length;
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const totalValue = products.reduce((sum, p) => sum + p.price * p.stock, 0);
  const featuredProducts = products.filter(p => p.featured).length;

  // داده‌های نمودار فروش (نمایشی)
  const salesData = {
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
    datasets: [
      {
        label: 'فروش (میلیون تومان)',
        data: [12, 19, 15, 25, 22, 30],
        backgroundColor: 'rgba(37, 99, 235, 0.8)',
      },
    ],
  };

  // داده‌های نمودار دسته‌بندی
  const categoryData = {
    labels: ['گیمینگ', 'اداری', 'دانشجویی', 'اولترابوک'],
    datasets: [
      {
        data: [
          products.filter(p => p.category === 'gaming').length,
          products.filter(p => p.category === 'office').length,
          products.filter(p => p.category === 'student').length,
          products.filter(p => p.category === 'ultrabook').length,
        ],
        backgroundColor: [
          'rgba(37, 99, 235, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
        ],
      },
    ],
  };

  const stats = [
    {
      title: 'تعداد کل محصولات',
      value: totalProducts,
      icon: FiPackage,
      color: 'bg-blue-500',
    },
    {
      title: 'موجودی کل',
      value: totalStock,
      icon: FiTrendingUp,
      color: 'bg-green-500',
    },
    {
      title: 'ارزش موجودی',
      value: `${(totalValue / 1000000).toFixed(1)}M`,
      icon: FiDollarSign,
      color: 'bg-yellow-500',
    },
    {
      title: 'محصولات ویژه',
      value: featuredProducts,
      icon: FiShoppingBag,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">داشبورد مدیریت</h1>

      {/* کارت‌های آمار */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm mb-2">{stat.title}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-4 rounded-lg`}>
                  <Icon className="text-white text-2xl" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* نمودارها */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">نمودار فروش ماهانه</h2>
          <Bar data={salesData} options={{ responsive: true }} />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">توزیع محصولات بر اساس دسته‌بندی</h2>
          <Doughnut data={categoryData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

