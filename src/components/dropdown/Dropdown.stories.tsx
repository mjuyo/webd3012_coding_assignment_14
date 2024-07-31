import React, { Component } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Dropdown from './Dropdown';
import { DropdownProps } from './Dropdown.types';

export default {
    title: "Components/Dropdown",
    component: Dropdown,
    argTypes: {
        options: {
            control: { type: 'object' },
          },
          value: {
            control: { type: 'text' },
          },
          disabled: {
            control: { type: 'boolean' },
          },
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Dropdown UI component',
            }
        }
      },
      tags: ['autodocs'],
} as Meta<typeof Dropdown>;

const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
    options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
    ],
    value: "1",
    disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
    ],
    value: "1",
    disabled: true,
};