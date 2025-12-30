import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FiShoppingCart, FiArrowRight } from 'react-icons/fi';
import { useProducts } from '../../contexts/ProductContext';
import { useCart } from '../../contexts/CartContext';
import ProductCard from '../../components/common/ProductCard';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProductById, products } = useProducts();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = getProductById(id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">محصول یافت نشد</h2>
        <Link to="/products" className="text-primary hover:underline">
          بازگشت به صفحه محصولات
        </Link>
      </div>
    );
  }

  // تصاویر محصول (در اینجا از همان تصویر استفاده می‌کنیم)
  const images = [product.image, product.image, product.image];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, 1);
    }
    alert(`${product.name} به سبد خرید اضافه شد!`);
  };

  // محصولات مرتبط (همان دسته‌بندی)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* دکمه بازگشت */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-primary hover:underline flex items-center space-x-2 space-x-reverse"
      >
        <FiArrowRight />
        <span>بازگشت</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* گالری تصاویر */}
        <div>
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <img
              src={images[selectedImage]}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="flex space-x-2 space-x-reverse">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-1 h-24 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? 'border-primary' : 'border-gray-200'
                }`}
              >
                <img
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* اطلاعات محصول */}
        <div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">
                  {product.brand}
                </span>
              </div>
              {product.featured && (
                <span className="bg-primary text-white px-3 py-1 rounded text-sm font-bold">
                  ویژه
                </span>
              )}
            </div>

            <div className="mb-6">
              <p className="text-4xl font-bold text-primary mb-2">
                {product.price.toLocaleString()} تومان
              </p>
              <p className="text-sm text-gray-600">
                موجودی: {product.stock > 0 ? `${product.stock} عدد` : 'ناموجود'}
              </p>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* مشخصات فنی */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">مشخصات فنی</h3>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b border-gray-200 pb-2 last:border-b-0">
                    <span className="text-gray-600 font-medium">
                      {key === 'cpu' && 'پردازنده'}
                      {key === 'ram' && 'حافظه RAM'}
                      {key === 'storage' && 'حافظه داخلی'}
                      {key === 'display' && 'صفحه نمایش'}
                      {key === 'graphics' && 'کارت گرافیک'}
                      {key === 'weight' && 'وزن'}
                    </span>
                    <span className="text-gray-800">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* انتخاب تعداد و افزودن به سبد */}
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="flex items-center space-x-2 space-x-reverse border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="px-4 py-2 hover:bg-gray-100"
                  disabled={quantity >= product.stock}
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="flex-1 bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center space-x-2 space-x-reverse"
              >
                <FiShoppingCart />
                <span>افزودن به سبد خرید</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* محصولات مرتبط */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">محصولات مرتبط</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(relatedProduct => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;

