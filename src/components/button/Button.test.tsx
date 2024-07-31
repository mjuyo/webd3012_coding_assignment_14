import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button', () => {
  render(<Button label="Click me" />);
  expect(screen.getByText('Click me')).toBeVisible();
});

test('button is disabled', () => {
  render(<Button label="Click me" disabled />);
  const button = screen.getByText('Click me');
  expect(button).toBeDisabled();
  expect(button).toHaveStyle('background-color: #ccc');
});
