import React, { useState } from 'react';
import OrderTable from './components/OrderTable';
import SearchBar from './components/SearchBar';
import StatusTabs from './components/StatusTabs';
import './App.css';

export default function App() {
  const [selectedStatus, setSelectedStatus] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="container mt-4 bgclr">
      <h3 className="text-center fw-bold mb-4">DK's Enterprise Order Details</h3>
      <StatusTabs onStatusChange={setSelectedStatus} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <OrderTable statusFilter={selectedStatus} searchQuery={searchQuery} />
    </div>
  );
}
