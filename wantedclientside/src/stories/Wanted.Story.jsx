/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-undef */

import React from 'react';

import { Wanted } from './Wanted';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Wanted',
  component: Wanted,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Wanted {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Wanted',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Wanted',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Wanted',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Wanted',
};
