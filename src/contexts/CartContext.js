import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  // بارگذاری سبد خرید از localStorage
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('lapshop_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // ذخیره سبد خرید در localStorage هر زمان که تغییر کند
  useEffect(() => {
    localStorage.setItem('lapshop_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // افزودن محصول به سبد خرید
  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // اگر محصول قبلاً در سبد است، تعداد را افزایش می‌دهیم
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // اگر محصول جدید است، آن را اضافه می‌کنیم
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  // حذف محصول از سبد خرید
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // به‌روزرسانی تعداد محصول
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // پاک کردن سبد خرید
  const clearCart = () => {
    setCartItems([]);
  };

  // محاسبه جمع کل قیمت
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // تعداد کل آیتم‌ها
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalPrice,
    totalItems
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

