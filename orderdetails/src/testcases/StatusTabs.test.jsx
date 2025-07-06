import { render, screen, fireEvent } from '@testing-library/react';
import StatusTabs from './StatusTabs';

test('renders status tabs and triggers callback', () => {
  const mockHandler = jest.fn();
  
  render(<StatusTabs onStatusChange={mockHandler} />);
  
  expect(screen.getByText('All Orders')).toBeInTheDocument();
  expect(screen.getByText('Completed')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Completed'));
  expect(mockHandler).toHaveBeenCalledWith('Completed');
});
