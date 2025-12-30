import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContext';
import ProductForm from '../../components/admin/ProductForm';

const EditProductPage = () => {
  const { id } = useParams();
  const { getProductById, editProduct } = useProducts();
  const navigate = useNavigate();
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">محصول یافت نشد</h2>
        <button
          onClick={() => navigate('/admin/products')}
          className="text-primary hover:underline"
        >
          بازگشت به لیست محصولات
        </button>
      </div>
    );
  }

  const handleSubmit = (formData) => {
    editProduct(id, formData);
    navigate('/admin/products');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">ویرایش محصول</h1>
      <ProductForm product={product} onSubmit={handleSubmit} isEdit={true} />
    </div>
  );
};

export default EditProductPage;

