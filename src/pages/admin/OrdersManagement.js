import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';

const OrdersManagement = () => {
  // در نسخه واقعی، این داده‌ها از API یا Context می‌آید
  const [orders, setOrders] = useState([
    {
      id: 1,
      orderNumber: 'ORD-001',
      customer: 'علی احمدی',
      total: 1299000,
      status: 'pending',
      date: '1403/01/15'
    },
    {
      id: 2,
      orderNumber: 'ORD-002',
      customer: 'مریم رضایی',
      total: 899000,
      status: 'processing',
      date: '1403/01/14'
    },
    {
      id: 3,
      orderNumber: 'ORD-003',
      customer: 'حسین محمدی',
      total: 1999000,
      status: 'shipped',
      date: '1403/01/13'
    },
    {
      id: 4,
      orderNumber: 'ORD-004',
      customer: 'فاطمه کریمی',
      total: 599000,
      status: 'delivered',
      date: '1403/01/12'
    }
  ]);

  const statusOptions = [
    { value: 'pending', label: 'در انتظار پرداخت', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'processing', label: 'در حال آماده‌سازی', color: 'bg-blue-100 text-blue-800' },
    { value: 'shipped', label: 'ارسال شده', color: 'bg-purple-100 text-purple-800' },
    { value: 'delivered', label: 'تحویل داده شده', color: 'bg-green-100 text-green-800' }
  ];

  const getStatusLabel = (status) => {
    const option = statusOptions.find(opt => opt.value === status);
    return option ? option.label : status;
  };

  const getStatusColor = (status) => {
    const option = statusOptions.find(opt => opt.value === status);
    return option ? option.color : 'bg-gray-100 text-gray-800';
  };

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(prev =>
      prev.map(order =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">مدیریت سفارشات</h1>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  شماره سفارش
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  مشتری
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  مبلغ کل
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  وضعیت
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  تاریخ
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  عملیات
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map(order => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{order.orderNumber}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{order.customer}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {order.total.toLocaleString()} تومان
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                      {getStatusLabel(order.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{order.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value)}
                      className="px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    >
                      {statusOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrdersManagement;

