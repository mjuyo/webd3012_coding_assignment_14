// src/components/Button/Button.tsx
import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<Partial<ButtonProps>>`
  background-color: ${(props) => (props.disabled ? '#ccc' : '#1ea7fd')};
  color: white;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
`;

const Button: React.FC<ButtonProps> = ({ onClick, label, disabled, backgroundColor }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} style={{backgroundColor}}>
      {label}
    </StyledButton>
  );
};

export default Button;
