import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    // نمایش اعلان (می‌توانید از toast library استفاده کنید)
    alert(`${product.name} به سبد خرید اضافه شد!`);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
    >
      {/* تصویر محصول */}
      <div className="relative overflow-hidden h-48 bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
        {product.featured && (
          <span className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-xs font-bold">
            ویژه
          </span>
        )}
        {product.stock === 0 && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
            ناموجود
          </span>
        )}
      </div>

      {/* اطلاعات محصول */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition">
            {product.name}
          </h3>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {product.brand}
          </span>
        </div>

        {/* مشخصات کلی */}
        <div className="text-sm text-gray-600 mb-3 space-y-1">
          <p>پردازنده: {product.specs.cpu}</p>
          <p>RAM: {product.specs.ram}</p>
          <p>حافظه: {product.specs.storage}</p>
        </div>

        {/* قیمت و دکمه */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-primary">
              {product.price.toLocaleString()}
            </p>
            <p className="text-xs text-gray-500">تومان</p>
          </div>
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center space-x-2 space-x-reverse"
          >
            <FiShoppingCart />
            <span>افزودن</span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

