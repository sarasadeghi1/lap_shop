import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialProducts } from '../data/products';

const ProductContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within ProductProvider');
  }
  return context;
};

export const ProductProvider = ({ children }) => {
  // بارگذاری محصولات از localStorage یا استفاده از داده‌های اولیه
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('lapshop_products');
    return savedProducts ? JSON.parse(savedProducts) : initialProducts;
  });

  const [loading, setLoading] = useState(false);

  // ذخیره محصولات در localStorage
  useEffect(() => {
    localStorage.setItem('lapshop_products', JSON.stringify(products));
  }, [products]);

  // افزودن محصول جدید
  const addProduct = (productData) => {
    setLoading(true);
    const newProduct = {
      ...productData,
      id: Date.now(), // تولید ID ساده
      stock: parseInt(productData.stock) || 0,
      price: parseFloat(productData.price) || 0,
      featured: productData.featured || false
    };
    
    setProducts(prev => [...prev, newProduct]);
    setLoading(false);
    return newProduct;
  };

  // ویرایش محصول
  const editProduct = (id, productData) => {
    setLoading(true);
    setProducts(prev =>
      prev.map(product =>
        product.id === parseInt(id)
          ? {
              ...product,
              ...productData,
              id: parseInt(id),
              stock: parseInt(productData.stock) || product.stock,
              price: parseFloat(productData.price) || product.price
            }
          : product
      )
    );
    setLoading(false);
  };

  // حذف محصول
  const deleteProduct = (id) => {
    setLoading(true);
    setProducts(prev => prev.filter(product => product.id !== parseInt(id)));
    setLoading(false);
  };

  // دریافت محصول بر اساس ID
  const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id));
  };

  // دریافت محصولات ویژه
  const getFeaturedProducts = () => {
    return products.filter(product => product.featured);
  };

  // جستجوی محصولات
  const searchProducts = (query) => {
    if (!query) return products;
    const lowerQuery = query.toLowerCase();
    return products.filter(product =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.brand.toLowerCase().includes(lowerQuery) ||
      product.description?.toLowerCase().includes(lowerQuery)
    );
  };

  const value = {
    products,
    loading,
    addProduct,
    editProduct,
    deleteProduct,
    getProductById,
    getFeaturedProducts,
    searchProducts
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

