import React from 'react';
import Alert from './alert';

export default {
  title: 'Alert',
  component: Alert,
};

const Template = (args) => <Alert {...args} />;

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  title: 'Info',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  title: 'Warning',
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  title: 'Error',
};
