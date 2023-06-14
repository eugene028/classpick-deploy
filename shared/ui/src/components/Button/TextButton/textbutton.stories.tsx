import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextButton } from '.';

export default {
    title: 'Button/TextButton',
    component: TextButton,
    argTypes:{},
} as ComponentMeta<typeof TextButton>;

const Template: ComponentStory<typeof TextButton> = (args) => <TextButton {...args} />;

export const TextBtn = Template.bind({});
TextBtn.args = { children: '이름 변경하기'};

