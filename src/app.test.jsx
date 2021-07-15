import React, { render, screen } from '@testing-library/react';
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

test('Buttons turns blue when clicked', () => {

});
