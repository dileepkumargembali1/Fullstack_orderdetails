import { render, screen, fireEvent } from '@testing-library/react';
import OrderTable from './OrderTable';
import axios from 'axios';

jest.mock('axios');

const mockData = [
  {
    id: 1,
    orderId: 'ORD-001',
    customer: 'John Doe',
    orderItem: 'Laptop',
    deliveryDate: '2025-07-05',
    deliveryPricing: 49.99,
    status: 'Pending'
  },
  {
    id: 2,
    orderId: 'ORD-002',
    customer: 'Jane Smith',
    orderItem: 'Smartphone',
    deliveryDate: '2025-07-08',
    deliveryPricing: 29.99,
    status: 'Completed'
  }
];

describe('OrderTable Component', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: mockData });
  });

  test('renders order table headers', async () => {
    render(<OrderTable statusFilter="" />);
    
    expect(await screen.findByText('Order ID')).toBeInTheDocument();
    expect(screen.getByText('Customer')).toBeInTheDocument();
    expect(screen.getByText('Order')).toBeInTheDocument();
  });

  test('displays orders data', async () => {
    render(<OrderTable statusFilter="" />);
    
    expect(await screen.findByText('ORD-001')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Laptop')).toBeInTheDocument();
  });

  test('filters by delivery status from dropdown', async () => {
    render(<OrderTable statusFilter="" />);
    
    const statusDropdown = await screen.findByText('Delivery Status');
    fireEvent.click(statusDropdown.nextSibling); // Click dropdown icon

    const completedOption = await screen.findByText('Completed');
    fireEvent.click(completedOption);

    expect(await screen.findByText('Jane Smith')).toBeInTheDocument();
    expect(screen.queryByText('John Doe')).toBeNull();
  });
});
