import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

test('renders Dropdown component', () => {
  render(<Dropdown options={options} value="1" />);
  expect(screen.getByDisplayValue('Option 1')).toBeVisible();
});

test('Dropdown is disabled', () => {
  render(<Dropdown options={options} value="1" disabled />);
  const dropdownElement = screen.getByDisplayValue('Option 1');
  expect(dropdownElement).toBeDisabled();
  expect(dropdownElement).toHaveStyle('background-color: #f5f5f5');
  expect(dropdownElement).toHaveStyle('cursor: not-allowed');
});
