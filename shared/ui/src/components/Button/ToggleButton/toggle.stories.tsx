import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ToggleButton } from '.';

export default {
    title: 'Button/ToggleButton',
    component: ToggleButton,
    argTypes:{},
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => <ToggleButton {...args} />;

export const ToggleBtn = Template.bind({});
ToggleBtn.args = {};

