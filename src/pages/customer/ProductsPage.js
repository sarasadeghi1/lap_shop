import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContext';
import ProductCard from '../../components/common/ProductCard';
import FilterSidebar from '../../components/common/FilterSidebar';

const ProductsPage = () => {
  const { products, searchProducts } = useProducts();
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    brands: [],
    ram: [],
    cpu: [],
    priceMin: 0,
    priceMax: 5000,
    category: null
  });
  const [sortBy, setSortBy] = useState('newest');
  const searchQuery = searchParams.get('search');
  const categoryParam = searchParams.get('category');

  // اعمال فیلترها و مرتب‌سازی
  const filteredProducts = useMemo(() => {
    let filtered = searchQuery ? searchProducts(searchQuery) : products;

    // فیلتر دسته‌بندی
    if (categoryParam) {
      filtered = filtered.filter(p => p.category === categoryParam);
    } else if (filters.category) {
      filtered = filtered.filter(p => p.category === filters.category);
    }

    // فیلتر برند
    if (filters.brands?.length > 0) {
      filtered = filtered.filter(p => filters.brands.includes(p.brand));
    }

    // فیلتر RAM
    if (filters.ram?.length > 0) {
      filtered = filtered.filter(p => filters.ram.includes(p.specs.ram));
    }

    // فیلتر CPU
    if (filters.cpu?.length > 0) {
      filtered = filtered.filter(p => filters.cpu.includes(p.specs.cpu));
    }

    // فیلتر قیمت
    if (filters.priceMin) {
      filtered = filtered.filter(p => p.price >= filters.priceMin);
    }
    if (filters.priceMax) {
      filtered = filtered.filter(p => p.price <= filters.priceMax);
    }

    // مرتب‌سازی
    const sorted = [...filtered];
    switch (sortBy) {
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'newest':
        sorted.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return sorted;
  }, [products, filters, sortBy, searchQuery, categoryParam, searchProducts]);

  useEffect(() => {
    if (categoryParam) {
      setFilters(prev => ({ ...prev, category: categoryParam }));
    }
  }, [categoryParam]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleResetFilters = () => {
    setFilters({
      brands: [],
      ram: [],
      cpu: [],
      priceMin: 0,
      priceMax: 5000,
      category: categoryParam || null
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">محصولات</h1>
        {searchQuery && (
          <p className="text-gray-600">
            نتایج جستجو برای: <span className="font-semibold">{searchQuery}</span>
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* سایدبار فیلتر */}
        <div className="lg:col-span-1">
          <FilterSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            onReset={handleResetFilters}
          />
        </div>

        {/* لیست محصولات */}
        <div className="lg:col-span-3">
          {/* مرتب‌سازی */}
          <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 space-x-reverse">
              <span className="text-gray-600">مرتب‌سازی:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="newest">جدیدترین</option>
                <option value="price-high">گران‌ترین</option>
                <option value="price-low">ارزان‌ترین</option>
              </select>
            </div>
            <div className="text-gray-600">
              {filteredProducts.length} محصول یافت شد
            </div>
          </div>

          {/* گرید محصولات */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <p className="text-xl text-gray-500">محصولی یافت نشد</p>
              <p className="text-gray-400 mt-2">لطفاً فیلترها را تغییر دهید</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

