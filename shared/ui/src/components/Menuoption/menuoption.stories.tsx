import { ComponentMeta, ComponentStory } from "@storybook/react"
import { MenuOption } from ".";
import { Routes, Route } from 'react-router-dom';

export default {
    title: 'layout/MenuOption',
    component: MenuOption,
    argTypes: {},
    decorators: [
        (Story) => (
            <Routes>
                <Route path="*" element={<Story />}/>
            </Routes>
        ),
    ],
} as ComponentMeta<typeof MenuOption>;

export const mockMenus: MenuOption[] = [
    {
      menu:'홈',
      id: 1,
    },
    {
      menu: '수강신청 메뉴얼',
      id: 2,
    },
    {
      menu: '시간표 만들기',
      id: 3,
    },
    {
      menu: '우선순위 설정하기',
      id: 4,
    },
    {
      menu: '나의 수강신청 결과 보기',
      id: 5,
    }
  ]
const Template: ComponentStory<typeof MenuOption> = (args) => <MenuOption {...args} />;

export const main = Template.bind({});
main.args = { options: mockMenus, openslide: true } 

