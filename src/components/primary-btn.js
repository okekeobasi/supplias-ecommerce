import React from 'react';
import { RefreshIcon } from '@heroicons/react/outline';

const PrimaryButton = ({ placeholder, loading, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-lightBlue text-white text-sm w-full p-3 rounded-md font-medium"
    >
      {loading ? (
        <RefreshIcon className="w-4 h-4 animate-spin mx-auto" />
      ) : (
        placeholder
      )}
    </button>
  );
};

export default PrimaryButton;
