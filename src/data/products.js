// داده‌های اولیه محصولات
export const initialProducts = [
  {
    id: 1,
    name: "Dell XPS 13",
    price: 1299,
    brand: "Dell",
    category: "ultrabook",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    description: "لپ‌تاپ فوق‌العاده سبک و قدرتمند با صفحه نمایش 13.4 اینچی",
    specs: {
      cpu: "Intel Core i7",
      ram: "16GB",
      storage: "512GB SSD",
      display: "13.4-inch FHD",
      graphics: "Intel Iris Xe",
      weight: "1.27 kg"
    },
    stock: 15,
    featured: true
  },
  {
    id: 2,
    name: "HP Pavilion Gaming 15",
    price: 899,
    brand: "HP",
    category: "gaming",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500",
    description: "لپ‌تاپ گیمینگ با کارت گرافیک قدرتمند برای بازی‌های مدرن",
    specs: {
      cpu: "Intel Core i5",
      ram: "8GB",
      storage: "256GB SSD",
      display: "15.6-inch FHD",
      graphics: "NVIDIA GTX 1650",
      weight: "2.1 kg"
    },
    stock: 8,
    featured: true
  },
  {
    id: 3,
    name: "Lenovo ThinkPad X1 Carbon",
    price: 1499,
    brand: "Lenovo",
    category: "office",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
    description: "لپ‌تاپ حرفه‌ای برای کارهای اداری و تجاری",
    specs: {
      cpu: "Intel Core i7",
      ram: "16GB",
      storage: "512GB SSD",
      display: "14-inch FHD",
      graphics: "Intel UHD",
      weight: "1.13 kg"
    },
    stock: 12,
    featured: false
  },
  {
    id: 4,
    name: "Apple MacBook Pro 14",
    price: 1999,
    brand: "Apple",
    category: "ultrabook",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
    description: "لپ‌تاپ اپل با پردازنده M1 Pro و صفحه نمایش Retina",
    specs: {
      cpu: "Apple M1 Pro",
      ram: "16GB",
      storage: "512GB SSD",
      display: "14.2-inch Liquid Retina",
      graphics: "16-core GPU",
      weight: "1.6 kg"
    },
    stock: 5,
    featured: true
  },
  {
    id: 5,
    name: "ASUS ROG Strix G15",
    price: 1199,
    brand: "Asus",
    category: "gaming",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500",
    description: "لپ‌تاپ گیمینگ با طراحی RGB و کارت گرافیک RTX",
    specs: {
      cpu: "AMD Ryzen 7",
      ram: "16GB",
      storage: "512GB SSD",
      display: "15.6-inch FHD 144Hz",
      graphics: "NVIDIA RTX 3060",
      weight: "2.3 kg"
    },
    stock: 10,
    featured: false
  },
  {
    id: 6,
    name: "Dell Inspiron 15",
    price: 699,
    brand: "Dell",
    category: "student",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    description: "لپ‌تاپ مناسب برای دانشجویان با قیمت مناسب",
    specs: {
      cpu: "Intel Core i5",
      ram: "8GB",
      storage: "256GB SSD",
      display: "15.6-inch FHD",
      graphics: "Intel UHD",
      weight: "1.83 kg"
    },
    stock: 20,
    featured: false
  },
  {
    id: 7,
    name: "HP EliteBook 840",
    price: 1099,
    brand: "HP",
    category: "office",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500",
    description: "لپ‌تاپ تجاری با امنیت بالا و دوام عالی",
    specs: {
      cpu: "Intel Core i7",
      ram: "16GB",
      storage: "512GB SSD",
      display: "14-inch FHD",
      graphics: "Intel Iris Xe",
      weight: "1.48 kg"
    },
    stock: 7,
    featured: false
  },
  {
    id: 8,
    name: "Lenovo IdeaPad 3",
    price: 599,
    brand: "Lenovo",
    category: "student",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
    description: "لپ‌تاپ اقتصادی برای کارهای روزمره و تحصیل",
    specs: {
      cpu: "AMD Ryzen 5",
      ram: "8GB",
      storage: "256GB SSD",
      display: "15.6-inch FHD",
      graphics: "AMD Radeon",
      weight: "1.65 kg"
    },
    stock: 25,
    featured: false
  },
  {
    id: 9,
    name: "Apple MacBook Air M2",
    price: 1299,
    brand: "Apple",
    category: "ultrabook",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
    description: "لپ‌تاپ فوق‌العاده نازک و سبک با پردازنده M2",
    specs: {
      cpu: "Apple M2",
      ram: "8GB",
      storage: "256GB SSD",
      display: "13.6-inch Liquid Retina",
      graphics: "8-core GPU",
      weight: "1.24 kg"
    },
    stock: 18,
    featured: true
  },
  {
    id: 10,
    name: "ASUS ZenBook 14",
    price: 999,
    brand: "Asus",
    category: "ultrabook",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500",
    description: "لپ‌تاپ زیبا و قدرتمند با طراحی منحصر به فرد",
    specs: {
      cpu: "Intel Core i7",
      ram: "16GB",
      storage: "512GB SSD",
      display: "14-inch OLED",
      graphics: "Intel Iris Xe",
      weight: "1.39 kg"
    },
    stock: 11,
    featured: false
  }
];

// دسته‌بندی‌ها
export const categories = [
  { id: 'gaming', name: 'گیمینگ', icon: '🎮' },
  { id: 'office', name: 'اداری', icon: '💼' },
  { id: 'student', name: 'دانشجویی', icon: '📚' },
  { id: 'ultrabook', name: 'اولترابوک', icon: '💻' }
];

// برندها
export const brands = ['Dell', 'HP', 'Lenovo', 'Apple', 'Asus'];

// گزینه‌های RAM
export const ramOptions = ['8GB', '16GB', '32GB'];

// گزینه‌های پردازنده
export const cpuOptions = ['Intel Core i5', 'Intel Core i7', 'Intel Core i9', 'AMD Ryzen 5', 'AMD Ryzen 7', 'Apple M1', 'Apple M2', 'Apple M1 Pro'];

