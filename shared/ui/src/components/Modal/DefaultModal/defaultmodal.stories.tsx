import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

import { DefaultModal } from '.';

export default {
  title: 'Modal/DefaultModal',
  component: DefaultModal,
  argTypes: {},
} as ComponentMeta<typeof DefaultModal>;

const Template: ComponentStory<typeof DefaultModal> = (args) => {
  const [open, setOpen] = useState<boolean>(true);
  return(
    <DefaultModal {...args} 
      onDismiss={() => setOpen(!open)} open ={open}/>
  )
};

export const main = Template.bind({});
main.args = { open: true };
