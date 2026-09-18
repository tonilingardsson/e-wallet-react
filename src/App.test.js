import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the wallet page', () => {
  render(<App />);
  expect(screen.getByText(/saved cards/i)).toBeInTheDocument();
});
