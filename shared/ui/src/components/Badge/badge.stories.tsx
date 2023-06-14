import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Badge } from '.';

export default {
  title: 'Badge',
  component: Badge,
  argTypes: {},
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const main = Template.bind({});
main.args = { children: '예시 텍스트', variant:'main'};

export const low = Template.bind({});
low.args = { children: '예시 텍스트', variant:'low'};

export const high = Template.bind({});
high.args = { children: '예시 텍스트', variant:'high'};

export const medium = Template.bind({});
medium.args = { children: '예시 텍스트', variant:'medium'};

