import { ComponentStory, ComponentMeta } from '@storybook/react';
import { List } from '.';
import { Text } from '../../Text';

export default {
  title: 'alignedText/List',
  component: List,
  argTypes: {},
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const main = Template.bind({});
main.args = {first: <Text typo='Body1_1' color='black_500'>교필</Text>, second:<Text typo='Subtitle1_1' color='black'>영어</Text>, third:<Text typo='Body1_1' color='black'>3</Text> };




