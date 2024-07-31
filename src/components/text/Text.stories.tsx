import React, { Component } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TextElement from './Text';
import { TextProps } from './Text.types';

export default {
    title: "Components/Text",
    component: TextElement,
    argTypes: {
        color: { control: "color" },
        fontSize: { control: "text" },
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Text UI component',
            }
        }
      },
      tags: ['autodocs'],
} as Meta<typeof TextElement>;

const Template: StoryFn<TextProps> = (args) => <TextElement {...args} />;

export const Default = Template.bind({});
Default.args = {
    content: "Sample text",
    color: "black",
    fontSize: "18px",
    disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    content: "Sample text",
    color: "black",
    fontSize: "18px",
    disabled: true,
};