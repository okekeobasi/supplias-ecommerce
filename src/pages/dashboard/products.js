import React from 'react';
import numeral from 'numeral';
import DashboardLayout from '../../components/dashboard-layout';
import MiniButton from '../../components/mini-btn';
import Tag from '../../components/tag';
import ProductModal from '../../components/product-modal';
import useProducts from '../../hooks/useProducts';

const Product = () => {
  const { products, openModal, setOpenModal } = useProducts();

  return (
    <DashboardLayout>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-3xl">Products</h1>

          <MiniButton
            placeholder="Add Product"
            showIcon
            onClick={() => setOpenModal(true)}
          />
        </div>
        <div className="overflow-x-scroll my-8">
          <table className="min-w-full">
            <thead>
              <tr className="border-t border-midGray">
                <th>#</th>
                <th>STATUS</th>
                <th>PRODUCT</th>
                <th>CASE COUNT</th>
                <th>MPU</th>
                <th>SKU ID</th>
                <th className="text-right">PRICE (NGN)</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, idx) => (
                <tr key={idx}>
                  <td>{product.id}</td>
                  <td>
                    <Tag status={product.status ? 'Active' : 'Inactive'} />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.case_count}</td>
                  <td>{product.mpu}</td>
                  <td>{product.sku_id}</td>
                  <td className=" text-right">
                    {numeral(product.amount).format('0,0.00')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ProductModal isOpen={openModal} setIsOpen={setOpenModal} />
    </DashboardLayout>
  );
};

export default Product;
