import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContext';
import ProductForm from '../../components/admin/ProductForm';

const AddProductPage = () => {
  const { addProduct } = useProducts();
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    addProduct(formData);
    navigate('/admin/products');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">افزودن محصول جدید</h1>
      <ProductForm onSubmit={handleSubmit} isEdit={false} />
    </div>
  );
};

export default AddProductPage;

