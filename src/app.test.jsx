import React, { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

test('renders app', () => {
  render(<App />);
  const element = screen.getByText('Danielo');
  expect(element).toBeInTheDocument();
});
