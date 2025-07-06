import React, { useState } from 'react';

export default function StatusTabs({ onStatusChange }) {
  const [activeTab, setActiveTab] = useState('All Orders');

  const handleClick = (label, statusValue) => {
    setActiveTab(label);
    onStatusChange(statusValue);
  };

  return (
    <ul className="nav nav-tabs mb-3">
      <li className="nav-item">
        <button className={`nav-link ${activeTab === 'All Orders' ? 'active' : ''}`} onClick={() => handleClick('All Orders', '')}>All Orders</button>
      </li>
      <li className="nav-item">
        <button className={`nav-link ${activeTab === 'Completed' ? 'active' : ''}`} onClick={() => handleClick('Completed', 'Completed')}>Completed</button>
      </li>
      <li className="nav-item">
        <button className={`nav-link ${activeTab === 'Continuing' ? 'active' : ''}`} onClick={() => handleClick('Continuing', 'Continuing')}>Continuing</button>
      </li>
      <li className="nav-item">
        <button className={`nav-link ${activeTab === 'Restitute' ? 'active' : ''}`} onClick={() => handleClick('Restitute', 'Restitute')}>Restitute</button>
      </li>
      <li className="nav-item">
        <button className={`nav-link ${activeTab === 'Canceled' ? 'active' : ''}`} onClick={() => handleClick('Canceled', 'Canceled')}>Canceled</button>
      </li>
    </ul>
  );
}
