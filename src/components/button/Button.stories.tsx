import React, { Component } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from './Button.types';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked', description: 'Optional click handler' },
    label: { control: 'text', description: 'Button content' },
    disabled: { control: 'boolean', description: 'Is button disabled?'},
    backgroundColor: { control: 'color', description: 'What background color to use' },
  },
  parameters: {
    layout: 'centered',
    docs: {
        description: {
            component: 'Primary UI component',
        }
    }
  },
  tags: ['autodocs'],
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Button',
  disabled: true,
};
