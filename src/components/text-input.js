import React from 'react';

const TextInput = ({
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  label,
  parent = 'form',
}) => {
  return (
    <div className="flex flex-col">
      <label className="font-medium mb-1 text-lightBlack text-sm">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border border-gray-100 px-4 ${
          parent === 'form' ? 'py-3' : 'py-2'
        }  rounded-md text-sm`}
      />
    </div>
  );
};

export default TextInput;
