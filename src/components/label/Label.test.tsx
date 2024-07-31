import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';

test('renders label component', () => {
  render(<Label text="Label text" />);
  expect(screen.getByText('Label text')).toBeVisible();
});

test('button is disabled', () => {
  render(<Label text="Label text" disabled />);
  const label = screen.getByText('Label text');
  expect(label).toHaveStyle('cursor: not-allowed');
});
