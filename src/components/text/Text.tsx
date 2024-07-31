import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.text<Partial<TextProps>>`
    background-color: ${(props) => (props.disabled ? '#ccc' : '#yellow')};
    color: ${props => props.color || 'white'};
    font-size: ${props => props.fontSize || '18px'};
    padding: 10px 20px;
    border-radius: 5px;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'text')};
    opacity: ${(props) => (props.disabled ? 0.7 : 1)};
`;

const TextElement: React.FC<TextProps> = ({ content, color, disabled, fontSize }) => (
    <StyledText color={color} disabled={disabled} fontSize={fontSize}>
        {content}
    </StyledText>
);

export default TextElement;