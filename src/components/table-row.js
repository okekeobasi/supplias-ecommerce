import Numeral from 'numeral';
import React from 'react';
import Tag from './tag';

const TableRow = ({ id, status, name, case_count, mpu, sku_id, amount }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>
        <Tag status={status ? 'Active' : 'Inactive'} />
      </td>
      <td>{name}</td>
      <td>{case_count}</td>
      <td>{mpu}</td>
      <td>{sku_id}</td>
      <td className=" text-right">{Numeral(amount).format('0,0.00')}</td>
    </tr>
  );
};

export default TableRow;
