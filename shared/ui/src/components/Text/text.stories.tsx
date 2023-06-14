import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from '.';

export default {
  title: 'Layout/Text',
  component: Text,
  argTypes: {},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const text = Template.bind({});
text.args = {
  children: 'Classpick',
  typo: 'Headline2',
  as: 'h5',
};
