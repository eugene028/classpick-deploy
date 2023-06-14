import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GraduationInfo } from '.';

export default {
  title: 'alignedText/GraduationInfo',
  component: GraduationInfo,
  argTypes: {},
} as ComponentMeta<typeof GraduationInfo>;

const Template: ComponentStory<typeof GraduationInfo> = (args) => <GraduationInfo {...args} />;

export const primary = Template.bind({});
primary.args = { label: '분류기준', infoString:'안내메시지', variant:'primary'};

export const basic = Template.bind({});
basic.args = { label: '분류기준', infoString:'안내메시지', variant:'basic', rightElement:'NN'};

export const mini = Template.bind({});
mini.args = { label: '분류기준', infoString:'안내메시지', variant:'mini', rightElement:'NN'};




