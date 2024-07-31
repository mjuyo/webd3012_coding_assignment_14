import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<Partial<DropdownProps>>`
  padding: 8px;
  border: 1px solid ${props => props.disabled ? '#ccc' : '#000'};
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  background-color: ${props => props.disabled ? '#f5f5f5' : 'white'};
  color: ${props => props.disabled ? '#aaa' : '#000'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange, disabled }) => (
  <StyledSelect value={value} onChange={onChange} disabled={disabled}>
    {options.map(option => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </StyledSelect>
);

export default Dropdown;
