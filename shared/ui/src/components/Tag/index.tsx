import styled from "styled-components";
import { HTMLAttributes, ReactNode } from "react";
import { KeyOfColor, KeyOfTypo } from "../../theme";
import { css } from "styled-components";

type TagVariant = 'filter' | 'keyword';
type TagColorVariant  = 'basic' | 'select' | 'key' | 'alert'
type TagSize = {
  [key in TagVariant]:{
    padding: string;
    height: string;
    typo: KeyOfTypo;
    radius: number;
  }
}
type TagColor = {
  [key in TagColorVariant]: {
    backgroundColor: KeyOfColor;
    fontColor: KeyOfColor;
    radiusColor?: KeyOfColor;
  }
}
const TAG_SIZE : TagSize = {
  filter: {
    padding: '8px 12px',
    height: '35px',
    typo: 'Caption3_2',
    radius: 32
  },
  keyword: {
    padding: '1px 9px',
    height: '18px',
    typo: 'Caption2_1',
    radius: 17
  }
}

const TAG_COLOR : TagColor = {
  basic: {
    backgroundColor: 'black_1100',
    fontColor: 'black',
    radiusColor: 'black_900'
  },
  select: {
    backgroundColor: 'blue_500',
    fontColor: 'white',
  },
  key: {
    backgroundColor: 'black_1000',
    fontColor: 'black', 
  },
  alert:{
    backgroundColor: 'main_red',
    fontColor:'white'
  }
}

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  color: TagColorVariant;
  variant: TagVariant;
}

/**
 * @param color 색상 선택 'basic' | 'select' | 'key'
 * @param variant 'filter' | 'keyword';
 */

export const Tag = ({children, color, variant, }:TagProps) => {
  return(
    <Wrapper color = {color} variant ={variant} >
      {children}
    </Wrapper>
  )
};

const Wrapper = styled.div<{color: TagColorVariant, variant: TagVariant}>`
  ${({ variant, theme }) => theme.typo[TAG_SIZE[variant].typo]};
  border-radius: ${({variant}) => (`${TAG_SIZE[variant].radius}px`)};
  background-color: ${({color, theme}) => theme.palette[TAG_COLOR[color].backgroundColor]};
  padding: ${({variant}) => TAG_SIZE[variant].padding};
  height: ${({variant}) => TAG_SIZE[variant].height};
  ${({color}) => color === 'basic' &&
    css`
      border : 1px solid #ECECEC;
    `}
  display: inline-block;
  color : ${({color, theme}) => theme.palette[TAG_COLOR[color].fontColor]};
  width:fit-content
`;