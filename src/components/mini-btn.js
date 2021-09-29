import React from 'react';
import plus from '../assets/plus.svg';
import { RefreshIcon } from '@heroicons/react/outline';

const MiniButton = ({ placeholder, onClick, showIcon, loading }) => {
  const handleClick = (params) => {
    if (loading) {
    } else if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center ${
        showIcon ? 'justify-between' : 'justify-center'
      }  bg-lightBlue text-white text-sm w-32 p-2 px-3 rounded-md font-medium`}
    >
      {loading ? (
        <RefreshIcon className="w-4 h-4 animate-spin mx-auto" />
      ) : (
        <>
          {showIcon && <img src={plus} alt="plus" />} {placeholder}
        </>
      )}
    </button>
  );
};

export default MiniButton;
