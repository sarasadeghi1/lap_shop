import React, { useState } from 'react';
import { brands, ramOptions, cpuOptions } from '../../data/products';

const FilterSidebar = ({ filters, onFilterChange, onReset }) => {
  const [priceRange, setPriceRange] = useState({
    min: filters.priceMin || 0,
    max: filters.priceMax || 5000
  });

  const handleBrandChange = (brand) => {
    const newBrands = filters.brands?.includes(brand)
      ? filters.brands.filter(b => b !== brand)
      : [...(filters.brands || []), brand];
    onFilterChange({ ...filters, brands: newBrands });
  };

  const handleRamChange = (ram) => {
    const newRam = filters.ram?.includes(ram)
      ? filters.ram.filter(r => r !== ram)
      : [...(filters.ram || []), ram];
    onFilterChange({ ...filters, ram: newRam });
  };

  const handleCpuChange = (cpu) => {
    const newCpu = filters.cpu?.includes(cpu)
      ? filters.cpu.filter(c => c !== cpu)
      : [...(filters.cpu || []), cpu];
    onFilterChange({ ...filters, cpu: newCpu });
  };

  const handlePriceChange = () => {
    onFilterChange({
      ...filters,
      priceMin: parseInt(priceRange.min),
      priceMax: parseInt(priceRange.max)
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">فیلترها</h3>
        <button
          onClick={onReset}
          className="text-sm text-primary hover:underline"
        >
          پاک کردن همه
        </button>
      </div>

      {/* فیلتر برند */}
      <div>
        <h4 className="font-semibold mb-3">برند</h4>
        <div className="space-y-2">
          {brands.map(brand => (
            <label key={brand} className="flex items-center space-x-2 space-x-reverse cursor-pointer">
              <input
                type="checkbox"
                checked={filters.brands?.includes(brand) || false}
                onChange={() => handleBrandChange(brand)}
                className="w-4 h-4 text-primary rounded focus:ring-primary"
              />
              <span className="text-sm">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* فیلتر قیمت */}
      <div>
        <h4 className="font-semibold mb-3">محدوده قیمت</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-2 space-x-reverse">
            <input
              type="number"
              placeholder="حداقل"
              value={priceRange.min}
              onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <span>تا</span>
            <input
              type="number"
              placeholder="حداکثر"
              value={priceRange.max}
              onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button
            onClick={handlePriceChange}
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            اعمال قیمت
          </button>
        </div>
      </div>

      {/* فیلتر RAM */}
      <div>
        <h4 className="font-semibold mb-3">حافظه RAM</h4>
        <div className="space-y-2">
          {ramOptions.map(ram => (
            <label key={ram} className="flex items-center space-x-2 space-x-reverse cursor-pointer">
              <input
                type="checkbox"
                checked={filters.ram?.includes(ram) || false}
                onChange={() => handleRamChange(ram)}
                className="w-4 h-4 text-primary rounded focus:ring-primary"
              />
              <span className="text-sm">{ram}</span>
            </label>
          ))}
        </div>
      </div>

      {/* فیلتر پردازنده */}
      <div>
        <h4 className="font-semibold mb-3">نوع پردازنده</h4>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {cpuOptions.map(cpu => (
            <label key={cpu} className="flex items-center space-x-2 space-x-reverse cursor-pointer">
              <input
                type="checkbox"
                checked={filters.cpu?.includes(cpu) || false}
                onChange={() => handleCpuChange(cpu)}
                className="w-4 h-4 text-primary rounded focus:ring-primary"
              />
              <span className="text-sm">{cpu}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;

