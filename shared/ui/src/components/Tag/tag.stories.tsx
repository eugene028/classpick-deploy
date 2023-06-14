import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tag } from '.';

export default {
    title: 'Tag',
    component: Tag,
    argTypes:{},
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const filter_main = Template.bind({});
filter_main.args = { children: '필터 항목', color:'basic', variant:'filter'};

export const filter_selcted = Template.bind({});
filter_selcted.args = { children: '필터 항목', color: 'select', variant: 'filter'};

export const keyword = Template.bind({});
keyword.args = { children: '필터 항목', color: 'key', variant: 'keyword'};