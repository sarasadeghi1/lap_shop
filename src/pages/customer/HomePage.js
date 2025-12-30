import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { useProducts } from '../../contexts/ProductContext';
import { categories } from '../../data/products';
import ProductCard from '../../components/common/ProductCard';

const HomePage = () => {
  const { getFeaturedProducts } = useProducts();
  const featuredProducts = getFeaturedProducts();

  return (
    <div>
      {/* بخش هیرو */}
      <section className="bg-gradient-to-l from-primary to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                بهترین لپ‌تاپ‌ها را از ما بخرید
              </h1>
              <p className="text-xl mb-6 text-blue-100">
                با بهترین قیمت‌ها و کیفیت عالی، لپ‌تاپ مورد نظر خود را پیدا کنید
              </p>
              <Link
                to="/products"
                className="inline-flex items-center space-x-2 space-x-reverse bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                <span>مشاهده محصولات</span>
                <FiArrowLeft />
              </Link>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800"
                alt="Laptop"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* دسته‌بندی‌ها */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">دسته‌بندی محصولات</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map(category => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-transform hover:scale-105"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* محصولات ویژه */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">محصولات ویژه</h2>
            <Link
              to="/products"
              className="text-primary hover:underline flex items-center space-x-2 space-x-reverse"
            >
              <span>مشاهده همه</span>
              <FiArrowLeft />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* بخش ویژگی‌ها */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">ارسال رایگان</h3>
              <p className="text-gray-600">ارسال رایگان برای خریدهای بالای ۵ میلیون تومان</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">ضمانت اصالت</h3>
              <p className="text-gray-600">تمام محصولات با گارانتی معتبر و اصالت کالا</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-semibold mb-2">پرداخت امن</h3>
              <p className="text-gray-600">پرداخت آنلاین امن و مطمئن</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

