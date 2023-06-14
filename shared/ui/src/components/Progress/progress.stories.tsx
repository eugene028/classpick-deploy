import { ComponentStory, ComponentMeta } from '@storybook/react';
import Progress from '.';

export default {
  title: 'Progress',
  component: Progress,
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => (
  <Progress {...args} />
);

export const Default = Template.bind({});
Default.args = {
  step: 3,
  currentStep: 2,
};
