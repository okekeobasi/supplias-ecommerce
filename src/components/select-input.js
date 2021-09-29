import React from 'react';

const SelectInput = ({
  data = [],
  name,
  value,
  onChange,
  placeholder,
  label,
}) => {
  return (
    <div className="flex flex-col">
      <label className="font-medium mb-1 text-lightBlack text-sm">
        {label}
      </label>
      <select
        value={value}
        name={name}
        onChange={onChange}
        className={`border border-gray-100 px-4 py-2 rounded-md text-sm`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {data.map((item) => (
          <option key={item.name} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
