import React from 'react';
import DashboardLayout from '../../components/dashboard-layout';
import MiniButton from '../../components/mini-btn';
import ProductModal from '../../components/product-modal';
import useProducts from '../../hooks/useProducts';
import TableRow from '../../components/table-row';

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
                <TableRow
                  key={product.sku_id}
                  id={idx}
                  status={product.status}
                  name={product.name}
                  case_count={product.case_count}
                  mpu={product.mpu}
                  sku_id={product.sku_id}
                  amount={product.amount}
                />
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
