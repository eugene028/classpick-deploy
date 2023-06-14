import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TableHeader } from '.';


export default {
  title: 'alignedText/TableHeader',
  component: TableHeader,
  argTypes: {},
} as ComponentMeta<typeof TableHeader>;

const Template: ComponentStory<typeof TableHeader> = (args) => <TableHeader {...args} />;

export const fourlabel = Template.bind({});
fourlabel.args = {tablelabel:['이수구분', '과목/분류', '학점', '수강여부']};


export const threelabel = Template.bind({});
threelabel.args = {tablelabel:['과목명', '개설학기', '학점']};


export const twolabel = Template.bind({});
twolabel.args = {tablelabel: ['과목명','학점']};





