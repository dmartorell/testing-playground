import React, { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

test('renders app', () => {
  render(<App />);
  const element = screen.getByRole('button', { name: /press/i });
  expect(element).toBeInTheDocument();
});

test('button initial color is red and text is "change to blue"', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /change to blue/i });
  expect(button).toHaveStyle({ backgroundColor: 'red' });
});

test('Button turns blue when clicked', () => {
  render(<App />);
  let button = screen.getByRole('button', { name: /change to blue/i });
  fireEvent.click(button);
  button = screen.getByRole('button', { name: /change to red/i });

  expect(button).toHaveStyle({ backgroundColor: 'blue' });
});
