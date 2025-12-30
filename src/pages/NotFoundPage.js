import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">صفحه مورد نظر یافت نشد</h2>
        <p className="text-gray-600 mb-8">
          متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا حذف شده است.
        </p>
        <Link
          to="/"
          className="inline-flex items-center space-x-2 space-x-reverse bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          <FiHome />
          <span>بازگشت به صفحه اصلی</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

