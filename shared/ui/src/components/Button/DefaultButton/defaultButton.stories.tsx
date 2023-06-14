import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DefaultButton } from '.';

export default {
    title: 'Button/DefaultButton',
    component: DefaultButton,
    argTypes:{},
} as ComponentMeta<typeof DefaultButton>;

const Template: ComponentStory<typeof DefaultButton> = (args) => <DefaultButton {...args} />;

export const lg_blue = Template.bind({});
lg_blue.args = { children: 'button', color:'blue', variant:'lg'};

export const lg_normal = Template.bind({});
lg_normal.args = { children: 'button', color:'normal', variant:'lg'};

export const lg_stroke= Template.bind({});
lg_stroke.args = { children: 'button', color:'stroke', variant:'lg'};

export const lg_inactive= Template.bind({});
lg_inactive.args = { children: 'button', color:'inactive', variant:'lg'};

export const sm_normal= Template.bind({});
sm_normal.args = { children: 'button', color: 'normal', variant: 'sm'};

export const sm_inactive= Template.bind({});
sm_inactive.args = { children: 'button', color: 'inactive', variant: 'sm'};

export const sm_outlined= Template.bind({});
sm_outlined.args = { children: 'button', color: 'outlined', variant: 'sm'};

export const md_inactive= Template.bind({});
md_inactive.args = { children: 'button', color: 'inactive', variant: 'md'};

export const md_normal= Template.bind({});
md_normal.args = { children: 'button', color: 'normal', variant: 'md'};
