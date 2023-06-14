
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion } from '.';
export default {
  title: 'Accordion',
  component: Accordion,
  argType: {},
  decorators: [
    (Story) => (
      <>
        <Story />
        <Story />
      </>
    ),
  ],
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const accordion = Template.bind({});
accordion.args = {
  title: '아코디언',
  content: (
    // 내 티켓확인하기 아코디언 내용
    <>울랑랑</>
  ),
};
