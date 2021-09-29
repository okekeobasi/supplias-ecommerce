import React from 'react';

const Tag = ({ status }) => {
  const tag_status = {
    Active: {
      bg: 'bg-lightGreen',
      text: 'text-darkGreen',
      border: 'border border-green-100',
    },
    Inactive: {
      bg: 'bg-lightRed',
      text: 'text-darkRed',
      border: 'border border-red-100',
    },
  };
  return (
    <div
      className={`flex justify-center items-center text-xs font-medium w-16 py-1 rounded
       ${tag_status[status].bg} ${tag_status[status].text} 
       ${tag_status[status].border}`}
    >
      {status}
    </div>
  );
};

export default Tag;
