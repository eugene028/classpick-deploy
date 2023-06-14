import { css } from 'styled-components';
import styled from 'styled-components';
import { forwardRef, ReactNode, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FlexBox, PaddingSize } from '../../layout';
import { Text } from '../Text';


export interface AccordionProps  {
  title: string;
  padding?: PaddingSize;
  option?: string;
  content: ReactNode;
  contentHeight?: number;
  initialState?: boolean;
  rightElement?: ReactNode;
  onAccordionOpened?: () => void;
  onAccordionClosed?: () => void;
  disabled?: boolean;
}
/**
 * @param padding 제목 패딩 기본:[20,10]
 * number: 상하좌우 패딩
 * [num,num]:상하, 좌우
 * [num,num,num,num]:상,우,하,좌
 * @param title : 제목
 * @param content: 아코디언 내용
 * @param textTypo
 * @param textColor
 * @param contentHeight 컨텐츠 높이 지정되면 애니메이션 적용
 * @param initialState 초기 오픈 상태
 * @param disabled
 * @param rightElement : 오른쪽 (핸들러 왼쪽)에 뱃지 같은거 넣을겨
 */

export const Accordion = forwardRef<HTMLButtonElement, AccordionProps>(
  (
    {
      title,
      option,
      padding = [16, 24],
      content,
      onAccordionOpened,
      onAccordionClosed,
      contentHeight,
      initialState = false,
      rightElement,
      disabled = false,
    }: AccordionProps,
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(initialState);

    const handleAccordion = () => {
      if (!disabled) {
        if (isOpen) {
          setIsOpen((prev) => !prev);
          onAccordionClosed && onAccordionClosed();
        } else {
          setIsOpen((prev) => !prev);
          onAccordionOpened && onAccordionOpened();
        }
      }
    };

    return (
      <div style={{width: '100%', padding:'0px 10px'}}>
        <AccordianHeader onClick={handleAccordion} ref={ref}>
          <FlexBox align="center" justify="space-between">
            <FlexBox style={{width: '200px'}} gap={10}>
              <Text typo={'Subtitle1_1'}>{title}</Text>
              {option && <Text typo ={'Caption3_2_1'} color={'main_red'}>재수강</Text>}
            </FlexBox>
              <FlexBox gap={40} style={{width:'150px', paddingLeft:'30px'}}>
                <div >
                  {rightElement}
                </div>
                <Handler open={isOpen} disabled={disabled} />
              </FlexBox>
          </FlexBox>
        </AccordianHeader>

        <Content open={isOpen} height={contentHeight}>
          {content}
        </Content>
      </div>
    );
  },
);

const AccordianHeader = styled.button`
  width: 100%;
  height:51px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.black_900};
`;

const Handler = styled(FaChevronDown)<{ open: boolean; disabled: boolean }>`
  width: 18px;
  height: 18px;

  fill: ${({ theme}) => theme.palette.black};
  ${({ open }) =>
    open &&
    css`
      transform: rotate(180deg);
    `}
  transition: all 0.2s ease;
`;

const Content = styled.div<{ height: number | undefined; open: boolean }>`
  max-height: ${({ height, open }) => (open ? height : 0)}px;
  transition: all 0.1s ease-in-out;
  overflow: hidden;
`;
