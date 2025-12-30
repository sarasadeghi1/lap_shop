import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiTrash2, FiPlus, FiMinus, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../../contexts/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <FiShoppingBag className="text-6xl text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">سبد خرید شما خالی است</h2>
          <p className="text-gray-600 mb-6">محصولی به سبد خرید اضافه نکرده‌اید</p>
          <Link
            to="/products"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            مشاهده محصولات
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">سبد خرید</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* لیست محصولات */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-4"
            >
              {/* تصویر */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full md:w-32 h-32 object-cover rounded-lg"
              />

              {/* اطلاعات */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-2">{item.brand}</p>
                <p className="text-lg font-bold text-primary">
                  {item.price.toLocaleString()} تومان
                </p>
              </div>

              {/* کنترل‌ها */}
              <div className="flex flex-col items-end justify-between">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 p-2"
                >
                  <FiTrash2 className="text-xl" />
                </button>

                <div className="flex items-center space-x-2 space-x-reverse border border-gray-300 rounded-lg">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <FiMinus />
                  </button>
                  <span className="px-4 py-2">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <FiPlus />
                  </button>
                </div>

                <p className="text-lg font-bold mt-2">
                  {(item.price * item.quantity).toLocaleString()} تومان
                </p>
              </div>
            </div>
          ))}

          <button
            onClick={clearCart}
            className="text-red-500 hover:text-red-700 text-sm"
          >
            پاک کردن سبد خرید
          </button>
        </div>

        {/* خلاصه سفارش */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
            <h2 className="text-xl font-bold mb-4">خلاصه سفارش</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>تعداد کالا:</span>
                <span>{cartItems.reduce((sum, item) => sum + item.quantity, 0)} عدد</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>جمع کل:</span>
                <span className="text-lg font-bold text-primary">
                  {totalPrice.toLocaleString()} تومان
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-blue-600 transition font-semibold"
              >
                ادامه فرآیند خرید
              </button>
              <Link
                to="/products"
                className="block w-full text-center border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition"
              >
                ادامه خرید
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

