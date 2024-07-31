import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';

// test('RadioButton is disabled', () => {
//   render(<RadioButton name="radio" disabled />);
//   const radioButtonElement = screen.getByRole('radio');
//   expect(radioButtonElement).toBeDisabled();
//   expect(radioButtonElement).toHaveStyle('opacity: 0.5');
//   expect(radioButtonElement).toHaveStyle('cursor: not-allowed');
// });

  test('renders RadioButton component', () => {
    render(<RadioButton label="Radio Button" name="radio" />);
    expect(screen.getByLabelText('Radio Button')).toBeVisible();
  });

  test('RadioButton is disabled', () => {
    render(<RadioButton label="Radio Button" name="radio" disabled />);
    const radioButton = screen.getByLabelText('Radio Button');
    expect(radioButton).toBeDisabled();
    const labelElement = radioButton.closest('label');
    expect(labelElement).toHaveStyle('cursor: not-allowed');
    expect(labelElement).toHaveStyle('opacity: 0.5');
  });
