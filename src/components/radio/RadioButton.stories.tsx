import React, { Component } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import RadioButton from './RadioButton';
import { RadioButtonProps } from './RadioButton.types';

export default {
    title: 'Components/RadioButton',
    component: RadioButton,
    argTypes: {
      label: { control: 'text' },
      disabled: { control: 'boolean' },
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Radio Button UI component',
            }
        }
    },
    tags: ['autodocs'],
  } as Meta<typeof RadioButton>;
  
  const Template: StoryFn<RadioButtonProps> = (args) => <RadioButton {...args} />;
  
  export const Default = Template.bind({});
  Default.args = {
    label: "Radio Button",
    name: "radio",
    checked: true,
    disabled: false,
  };
  
  export const Disabled = Template.bind({});
  Disabled.args = {
    label: "Radio Button",
    name: "radio",
    checked: false,
    disabled: true,
  };

