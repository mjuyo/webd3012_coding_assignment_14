import React from 'react';
import { render, screen } from '@testing-library/react';
import TextElement from './Text';

test('renders text component', () => {
  render(<TextElement content="Sample text" />);
  expect(screen.getByText('Sample text')).toBeVisible();
});

test('button is disabled', () => {
  render(<TextElement content="Sample text" disabled />);
  const textElement = screen.getByText('Sample text');
  expect(textElement).toHaveStyle('cursor: not-allowed');
  expect(textElement).toHaveStyle('background-color: #ccc');
});
