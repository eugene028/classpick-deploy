import { useRef, useState, useEffect } from "react";
import { PaddingSize, FlexBox, Padding } from "../../layout";
import { Text } from '../Text/index';
import styled from "styled-components";

export interface TapBarProps {
    menus: string[];
    currentmenu: number;
    setCurrentMenu: (nextmenu: number) => void;
    padding?: PaddingSize;
}

export const TapBar = ({
    menus,
    currentmenu,
    setCurrentMenu,
    padding = [8, 24],
}: TapBarProps) => {
    const menuRef = useRef<HTMLDivElement>(null);
    const elementRef = useRef<HTMLDivElement[]>([]);
    const [pointerPosition, setPointerPosition] = useState<[number, number]>([0, 0]);
    //배열에 추가
    const addRef = (element: HTMLDivElement) => {
        if (elementRef.current.length < menus.length)
            elementRef.current?.push(element);
    }
    const convertedPadding = paddingConvertion({ padding });
    useEffect(() => {
        if (elementRef.current.length === menus.length){
            setPointerPosition([
                convertedPadding[3],
                elementRef.current[0].getBoundingClientRect().width,
            ])
        }
     },[elementRef.current.length]);
     const menuIndicatorHandler = (
        index: number,
        leftPadding: number,
        e: React.MouseEvent,
      ) => {
        e.preventDefault();
        const leftMarginWidth = menuRef.current
          ? menuRef.current.getBoundingClientRect().left
          : 0;
        const indicatorPosition =
        elementRef.current[index].getBoundingClientRect().left -
          leftMarginWidth +
          convertedPadding[3];
        const indicatorWidth =
        elementRef.current[index].getBoundingClientRect().width;
        setCurrentMenu(index);
        setPointerPosition([indicatorPosition, indicatorWidth]);
      };
    
    
      return (
        <MenuBarWrapper size={convertedPadding as PaddingSize}>
          <div ref={menuRef}>
            <FlexBox align="center" justify="start">
              {menus.map((menu, index) => (
                <div ref={(el: HTMLDivElement) => addRef(el)} key={menu}>
                  <Content size={[12, 11, 9, 11]} key={index}>
                    <Text
                      typo="Subtitle3"
                      color={currentmenu === index ? 'black' : 'black_500'}
                      onClick={(e: React.MouseEvent) =>
                        menuIndicatorHandler(index, convertedPadding[3], e)
                      }
                    >
                      {menu}
                    </Text>
                  </Content>
                </div>
              ))}
            </FlexBox>
            <Indicator leftAndWidth={pointerPosition} />
          </div>
        </MenuBarWrapper>
      );
    };
//
interface paddingConvertionProps {
    padding: PaddingSize;
  }
  
  const paddingConvertion = ({ padding }: paddingConvertionProps) => {
    const convertedPadding =
      typeof padding === 'number'
        ? [padding, padding, 0, padding]
        : padding.length === 2
        ? [padding[0], padding[1], 0, padding[1]]
        : [padding[0], padding[1], 0, padding[3]];
    return convertedPadding;
  };

  const MenuBarWrapper = styled(Padding)`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.palette.black_300};
  position: relative;
`;

const Content = styled(Padding)`
  & > span:hover {
    cursor: pointer;
  }
`;

interface IndicatorProps {
  leftAndWidth: [number, number];
}

const Indicator = styled.div<IndicatorProps>`
  position: absolute;
  height: 2px;
  background: ${({ theme }) => theme.palette.black};
  left: ${({ leftAndWidth }) => `${leftAndWidth[0]}px`};
  width: ${({ leftAndWidth }) => `${leftAndWidth[1]}px`};
  transition: all 300ms ease-in-out;
  transform: translateY(-1px);
`;
