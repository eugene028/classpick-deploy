import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { TapBar } from '.';

export default {
  title: 'MenuBar',
  component: TapBar,
  argTypes: {},
} as ComponentMeta<typeof TapBar>;

const Template: ComponentStory<typeof TapBar> = (args) => {
  const [menu, setMenu] = useState<number>(0);
  return <TapBar {...args} currentmenu={menu} setCurrentMenu={setMenu} />;
};

export const threeMenus = Template.bind({});
threeMenus.args = { menus: ['분류1', '분류2', '분류3'] };

export const twoMenus = Template.bind({});
twoMenus.args = { menus: ['분류1', '분류2'] };
