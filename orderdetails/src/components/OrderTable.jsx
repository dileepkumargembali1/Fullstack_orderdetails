import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dropdown from './Dropdown';




export default function OrderTable({ statusFilter, searchQuery }) {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [filters, setFilters] = useState({
    orderId: '',
    customer: '',
    orderItem: '',
    deliveryDate: '',
    deliveryPricing: '',
    status: ''
  });

  useEffect(() => {
    const url = statusFilter
      ? `http://localhost:8080/api/orders/status/${statusFilter}`
      : 'http://localhost:8080/api/orders';

    axios.get(url)
      .then(res => {
        setOrders(res.data);
        setFilteredOrders(res.data);
      })
      .catch(err => console.error(err));
  }, [statusFilter]);

  useEffect(() => {
    let data = [...orders];

    // Global Search
    if (searchQuery) {
      const lower = searchQuery.toLowerCase();
      data = data.filter(o =>
        o.orderId.toLowerCase().includes(lower) ||
        o.customer.toLowerCase().includes(lower) ||
        o.orderItem.toLowerCase().includes(lower) ||
        o.deliveryDate.includes(lower) ||
        o.deliveryPricing.toString().includes(lower) ||
        o.status.toLowerCase().includes(lower)
      );
    }

    // Column Filters
    if (filters.orderId) {
      data = data.filter(o => o.orderId === filters.orderId);
    }
    if (filters.customer) {
      data = data.filter(o => o.customer === filters.customer);
    }
    if (filters.orderItem) {
      data = data.filter(o => o.orderItem === filters.orderItem);
    }
    if (filters.deliveryDate) {
      data = data.filter(o => o.deliveryDate === filters.deliveryDate);
    }
    if (filters.deliveryPricing) {
      data = data.filter(o => o.deliveryPricing.toString() === filters.deliveryPricing);
    }
    if (filters.status) {
      data = data.filter(o => o.status === filters.status);
    }

    setFilteredOrders(data);
  }, [searchQuery, orders, filters]);

  const getUniqueValues = (field) => {
    const values = orders.map(o => o[field]);
    return Array.from(new Set(values));
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Completed': return 'badge bg-success';
      case 'Canceled': return 'badge bg-danger';
      case 'Restitute': return 'badge bg-warning text-dark';
      case 'Continuing': return 'badge bg-primary';
      default: return 'badge bg-secondary';
    }
  };

  return (
    <table className="table table-hover align-middle">
      <thead>
        <tr>
          <th>
            Order ID <Dropdown options={getUniqueValues('orderId')} onSelect={(val) => setFilters(prev => ({ ...prev, orderId: val }))} />
          </th>
          <th>
            Customer <Dropdown options={getUniqueValues('customer')} onSelect={(val) => setFilters(prev => ({ ...prev, customer: val }))} />
          </th>
          <th>
            Order <Dropdown options={getUniqueValues('orderItem')} onSelect={(val) => setFilters(prev => ({ ...prev, orderItem: val }))} />
          </th>
          <th>
            Delivery Date <Dropdown options={getUniqueValues('deliveryDate')} onSelect={(val) => setFilters(prev => ({ ...prev, deliveryDate: val }))} />
          </th>
          <th>
            Delivery Pricing <Dropdown options={getUniqueValues('deliveryPricing')} onSelect={(val) => setFilters(prev => ({ ...prev, deliveryPricing: val }))} />
          </th>
          <th>
            Delivery Status <Dropdown options={getUniqueValues('status')} onSelect={(val) => setFilters(prev => ({ ...prev, status: val }))} />
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredOrders.map(order => (
          <tr key={order.id}>
            <td className='text-secondary'>{order.orderId}</td>
            <td >{order.customer}</td>
            <td className='text-secondary'>{order.orderItem}</td>
            <td className='text-secondary'>{order.deliveryDate}</td>
            <td className='text-secondary'>${order.deliveryPricing.toFixed(2)}</td>
            <td className='text-secondary'><span className={getStatusClass(order.status)}>{order.status}</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
