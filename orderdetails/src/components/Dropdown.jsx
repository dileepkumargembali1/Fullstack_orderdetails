import React from 'react';

export default function Dropdown({ options, onSelect }) {
  return (
    <select className="form-select form-select-sm d-inline w-auto ms-1" onChange={(e) => onSelect(e.target.value)}>
      <option value="">All</option>
      {options.map((opt, index) => (
        <option key={index} value={opt}>{opt}</option>
      ))}
    </select>
  );
}
