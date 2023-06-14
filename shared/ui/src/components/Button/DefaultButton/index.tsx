import { ButtonHTMLAttributes } from "react";
import { KeyOfColor, KeyOfTypo } from "../../../theme";
import styled from "styled-components";
import { css } from "styled-components";

type BtnSizeVariant = 'lg' | 'md' | 'sm'
type BtnColorVariant = 'normal' | 'inactive' | 'outlined' |  'blue' | 'stroke';

type DefaultButtonColor = {
    [keys in BtnColorVariant]: {
        background: KeyOfColor;
        color: KeyOfColor;
        radiusColor?: KeyOfColor;
    }
}

type DefaultButtonShape = {
    [keys in BtnSizeVariant]: {
        radius: 10 | 15 | 30;
        width: string;
        height: string;
        typo: KeyOfTypo;
        padding: string;
    }
}

const BUTTON_COLOR : DefaultButtonColor = {
    'normal': { background: 'black', color: 'white'},
    'inactive': { background: 'black_600', color: 'black_900'},
    'outlined': { background: 'white', color:'black_300', radiusColor: 'black_700'},
    'blue': { background: 'main_blue', color: 'white'},
    'stroke' : { background: 'white', color: 'main_blue', radiusColor: 'main_blue'}
}

const BUTTON_SHAPE : DefaultButtonShape = {
    'lg': { radius: 10, height: '55px', width: '360px', typo:'Subtitle2', padding: '16px 155px'},
    'md': { radius: 30, height: '42px', width: '111px', typo:'Subtitle1', padding: '11px 34px'},
    'sm': { radius: 15, height: '29px', width: '78px', typo: 'Caption3_3', padding:'5px 20px'}
}
/**
 * @param label Button에 들어가는 text
 * @param variant 버튼의 종류 : 'lg' | 'md' | 'sm
 * @param color 버튼의 색 : 'normal' | 'inactive' | 'outlined' | 'blue' | 'storke'
 * @param fullWidth 전체 가로길이 꽉 채우니?
 */

export interface DefaultButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: BtnSizeVariant;
    color: BtnColorVariant;
    fullWidth?: boolean;
}

export const DefaultButton = ({ children, variant, color, fullWidth=true, }: DefaultButtonProps) => {
    return (
        <Wrapper variant={variant} color ={color} fullWidth = {fullWidth} >
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.button<{variant: BtnSizeVariant, color: BtnColorVariant, fullWidth: Boolean}>`
    ${({ variant, theme }) => theme.typo[BUTTON_SHAPE[variant].typo]}
    width: ${({variant, fullWidth })=> fullWidth ? '100%' : `${BUTTON_SHAPE[variant].width}`};
    height: ${({variant})=> `${BUTTON_SHAPE[variant].height}`};
    border-radius: ${({ variant }) => BUTTON_SHAPE[variant].radius}px;
    background-color: ${({ theme, color }) =>theme.palette[BUTTON_COLOR[color].background]};
    color: ${({ theme, color }) => theme.palette[BUTTON_COLOR[color].color]};
    ${({theme, color}) => ((color === 'outlined' || color ==='stroke') &&
        css`
            border : 1px solid ${theme.palette[BUTTON_COLOR[color].radiusColor!]};
        `)}
`;