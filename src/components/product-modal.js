import React from 'react';
import useProducts from '../hooks/useProducts';
import Modal from './modal';
import SelectInput from './select-input';
import TextInput from './text-input';

const ProductModal = ({ isOpen, setIsOpen, submitAction }) => {
  const product_status = [
    {
      name: 'Active',
      value: true,
    },
    {
      name: 'Inactive',
      value: false,
    },
  ];

  const { formData, loading, errorMessage, handleInputChange, createProduct } =
    useProducts();

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      loading={loading}
      submitAction={createProduct}
    >
      <div className="space-y-4">
        {!!errorMessage && (
          <p className="text-xs text-red-400">{errorMessage}</p>
        )}
        <TextInput
          name="name"
          type="text"
          label="Name"
          parent="product"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Chikki Chicken Noodles"
        />
        <TextInput
          name="case_count"
          type="number"
          label="Case Count"
          parent="product"
          value={formData.case_count}
          onChange={handleInputChange}
          placeholder="20"
        />
        <TextInput
          name="mpu"
          type="number"
          label="Minimum Purchasable Unit (MPU)"
          parent="product"
          value={formData.mpu}
          onChange={handleInputChange}
          placeholder="20"
        />
        <TextInput
          name="sku_id"
          type="text"
          label="SKU ID"
          parent="product"
          value={formData.sku_id}
          onChange={handleInputChange}
          placeholder="product-1"
        />
        <TextInput
          name="amount"
          type="number"
          label="Amount"
          parent="product"
          value={formData.amount}
          onChange={handleInputChange}
          placeholder="20,000"
        />
        <SelectInput
          label="Status"
          name="status"
          value={formData.status}
          placeholder="Select status"
          onChange={handleInputChange}
          data={product_status}
        />
      </div>
    </Modal>
  );
};

export default ProductModal;
