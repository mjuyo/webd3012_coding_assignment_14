import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledRadioButton = styled.label<Partial<RadioButtonProps>>`
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  display: inline-flex;
  align-items: center;

  input {
    margin-right: 0.7em;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  }
`;

const RadioButton: React.FC<RadioButtonProps> = ({ label, name, checked, disabled }) => {
  return (
    <StyledRadioButton disabled={disabled}  >
      <input type="radio" name={name} checked={checked} disabled={disabled} />
      {label}
    </StyledRadioButton>
  );
};

export default RadioButton;
