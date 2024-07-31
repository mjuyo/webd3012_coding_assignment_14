import React, { Component } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Label from './Label';
import { LabelProps } from './Label.types';

export default {
    title: "Components/Label",
    component: Label,
    argTypes: {
        color: { control: "color" },
        fontSize: { control: "text" },
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Label UI component',
            }
        }
      },
      tags: ['autodocs'],
} as Meta<typeof Label>;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: "Label text",
    color: "black",
    fontSize: "18px",
    disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    text: "Label text",
    color: "#b9b9b9",
    fontSize: "18px",
    disabled: true,
};