import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

test('renders search input and filter button', () => {
  render(<SearchBar />);
  
  expect(screen.getByPlaceholderText(/search for order id/i)).toBeInTheDocument();
  expect(screen.getByText('Filters')).toBeInTheDocument();
});
