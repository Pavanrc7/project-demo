import React from "react";

const Input = ({ label, type = "text", name, value, onChange, placeholder }) => {
  return (
    <div className="mb-4">
      {label && <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Input;
