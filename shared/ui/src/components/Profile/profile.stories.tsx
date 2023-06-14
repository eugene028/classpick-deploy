import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Profile } from '.';

export default {
  title: 'Profile',
  component: Profile,
  argTypes: {},
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />;

export const main = Template.bind({});
main.args = { name: '홍시디', studentId: 'C123456', major: '시각디자인과', grade: '3학년'};


