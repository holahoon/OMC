import { render, screen } from '@testing-library/react';
import App from './App';

test('Should render Oh My Car', () => {
  render(<App />);
  const linkElement = screen.getByText(/Oh My Car/i);
  expect(linkElement).toBeInTheDocument();
});
