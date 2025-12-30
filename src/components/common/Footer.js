import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* درباره ما */}
          <div>
            <h3 className="text-xl font-bold mb-4">درباره LapShop</h3>
            <p className="text-gray-300">
              فروشگاه آنلاین لپ‌تاپ با بهترین قیمت‌ها و کیفیت عالی. ما بهترین
              لپ‌تاپ‌ها را از برندهای معتبر برای شما فراهم می‌کنیم.
            </p>
          </div>

          {/* لینک‌های سریع */}
          <div>
            <h3 className="text-xl font-bold mb-4">لینک‌های سریع</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition">
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition">
                  محصولات
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          {/* اطلاعات تماس */}
          <div>
            <h3 className="text-xl font-bold mb-4">تماس با ما</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 space-x-reverse">
                <FiPhone className="text-primary" />
                <span className="text-gray-300">021-12345678</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <FiMail className="text-primary" />
                <span className="text-gray-300">info@lapshop.ir</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <FiMapPin className="text-primary" />
                <span className="text-gray-300">تهران، خیابان ولیعصر</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; ۱۴۰۳ LapShop. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

