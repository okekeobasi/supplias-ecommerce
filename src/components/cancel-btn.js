import React from 'react';

const CancelButton = ({ placeholder, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center bg-white border
       text-lightBlack text-sm w-20 p-2 px-3 rounded-md font-medium`}
    >
      {placeholder}
    </button>
  );
};

export default CancelButton;
