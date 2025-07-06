import React from 'react';

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <input
        className="form-control w-50"
        placeholder="Search for order ID, customer, order, status or something..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="btn btn-outline-secondary ms-2">
        <i className="bi bi-filter"></i> Filters
      </button>
    </div>
  );
}
