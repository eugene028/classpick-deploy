import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavBar } from '.';
import { ImageBox } from '../ImageBox';
import { GiHamburgerMenu } from 'react-icons/gi';

export default {
  title: 'layout/NavBar',
  component: NavBar,
  argTypes: {},
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;


export const mainNav = Template.bind({});
mainNav.args = {
  leftElement: <ImageBox size = {[27, 27]}imageUrl='/images/classpick_logo.png'/>,
  label: <ImageBox size = {[100, 20]} imageUrl = '/images/classpick_header.png'/>,
  rightElement: <GiHamburgerMenu color='#555555' size='1.5rem'/>
};
