import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { brands, categories } from '../../data/products';
import { cpuOptions, ramOptions } from '../../data/products';

const ProductForm = ({ product, onSubmit, isEdit }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    brand: '',
    category: '',
    image: '',
    featured: false,
    specs: {
      cpu: '',
      ram: '',
      storage: '',
      display: '',
      graphics: '',
      weight: ''
    }
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || '',
        description: product.description || '',
        price: product.price || '',
        stock: product.stock || '',
        brand: product.brand || '',
        category: product.category || '',
        image: product.image || '',
        featured: product.featured || false,
        specs: product.specs || {
          cpu: '',
          ram: '',
          storage: '',
          display: '',
          graphics: '',
          weight: ''
        }
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.startsWith('specs.')) {
      const specKey = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        specs: {
          ...prev.specs,
          [specKey]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
    // پاک کردن خطا
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'نام محصول الزامی است';
    if (!formData.description.trim()) newErrors.description = 'توضیحات الزامی است';
    if (!formData.price || formData.price <= 0) newErrors.price = 'قیمت معتبر وارد کنید';
    if (!formData.stock || formData.stock < 0) newErrors.stock = 'موجودی معتبر وارد کنید';
    if (!formData.brand) newErrors.brand = 'برند را انتخاب کنید';
    if (!formData.category) newErrors.category = 'دسته‌بندی را انتخاب کنید';
    if (!formData.image.trim()) newErrors.image = 'لینک تصویر الزامی است';
    if (!formData.specs.cpu) newErrors['specs.cpu'] = 'پردازنده الزامی است';
    if (!formData.specs.ram) newErrors['specs.ram'] = 'RAM الزامی است';
    if (!formData.specs.storage) newErrors['specs.storage'] = 'حافظه الزامی است';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">نام محصول *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.name ? 'border-red-500' : 'border-gray-300 focus:ring-primary'
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">برند *</label>
          <select
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.brand ? 'border-red-500' : 'border-gray-300 focus:ring-primary'
            }`}
          >
            <option value="">انتخاب برند</option>
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
          {errors.brand && <p className="text-red-500 text-sm mt-1">{errors.brand}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">توضیحات *</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.description ? 'border-red-500' : 'border-gray-300 focus:ring-primary'
          }`}
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">قیمت (تومان) *</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.price ? 'border-red-500' : 'border-gray-300 focus:ring-primary'
            }`}
          />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">موجودی *</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            min="0"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.stock ? 'border-red-500' : 'border-gray-300 focus:ring-primary'
            }`}
          />
          {errors.stock && <p className="text-red-500 text-sm mt-1">{errors.stock}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">دسته‌بندی *</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.category ? 'border-red-500' : 'border-gray-300 focus:ring-primary'
            }`}
          >
            <option value="">انتخاب دسته‌بندی</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
          {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">لینک تصویر *</label>
        <input
          type="url"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="https://example.com/image.jpg"
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.image ? 'border-red-500' : 'border-gray-300 focus:ring-primary'
          }`}
        />
        {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
        {formData.image && (
          <img
            src={formData.image}
            alt="Preview"
            className="mt-2 w-32 h-32 object-cover rounded"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        )}
      </div>

      <div>
        <label className="flex items-center space-x-2 space-x-reverse cursor-pointer">
          <input
            type="checkbox"
            name="featured"
            checked={formData.featured}
            onChange={handleChange}
            className="w-4 h-4 text-primary rounded focus:ring-primary"
          />
          <span>محصول ویژه</span>
        </label>
      </div>

      {/* مشخصات فنی */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">مشخصات فنی</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">پردازنده *</label>
            <select
              name="specs.cpu"
              value={formData.specs.cpu}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors['specs.cpu'] ? 'border-red-500' : 'border-gray-300 focus:ring-primary'
              }`}
            >
              <option value="">انتخاب پردازنده</option>
              {cpuOptions.map(cpu => (
                <option key={cpu} value={cpu}>{cpu}</option>
              ))}
            </select>
            {errors['specs.cpu'] && <p className="text-red-500 text-sm mt-1">{errors['specs.cpu']}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">RAM *</label>
            <select
              name="specs.ram"
              value={formData.specs.ram}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors['specs.ram'] ? 'border-red-500' : 'border-gray-300 focus:ring-primary'
              }`}
            >
              <option value="">انتخاب RAM</option>
              {ramOptions.map(ram => (
                <option key={ram} value={ram}>{ram}</option>
              ))}
            </select>
            {errors['specs.ram'] && <p className="text-red-500 text-sm mt-1">{errors['specs.ram']}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">حافظه داخلی *</label>
            <input
              type="text"
              name="specs.storage"
              value={formData.specs.storage}
              onChange={handleChange}
              placeholder="512GB SSD"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors['specs.storage'] ? 'border-red-500' : 'border-gray-300 focus:ring-primary'
              }`}
            />
            {errors['specs.storage'] && <p className="text-red-500 text-sm mt-1">{errors['specs.storage']}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">صفحه نمایش</label>
            <input
              type="text"
              name="specs.display"
              value={formData.specs.display}
              onChange={handleChange}
              placeholder="15.6-inch FHD"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">کارت گرافیک</label>
            <input
              type="text"
              name="specs.graphics"
              value={formData.specs.graphics}
              onChange={handleChange}
              placeholder="NVIDIA RTX 3060"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">وزن</label>
            <input
              type="text"
              name="specs.weight"
              value={formData.specs.weight}
              onChange={handleChange}
              placeholder="1.5 kg"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end space-x-4 space-x-reverse pt-6 border-t">
        <button
          type="button"
          onClick={() => navigate('/admin/products')}
          className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
        >
          انصراف
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition"
        >
          {isEdit ? 'ذخیره تغییرات' : 'افزودن محصول'}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;

